/* =========================================================
   花谱 · Flower Codex
   Vanilla JS. No fetch, no framework, no build.
   ========================================================= */

(function () {
  "use strict";

  const FLOWERS = window.FLOWERS || [];
  const BOUQUETS = window.BOUQUETS || [];
  const OCCASIONS = window.OCCASIONS || [];

  const MONTH_NAMES = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
  const MONTH_SHORT = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const COLOR_GROUPS = [
    { name: "红", hex: "#A0432B" },
    { name: "粉", hex: "#C98B8B" },
    { name: "白", hex: "#F3E7D8" },
    { name: "黄", hex: "#D9A62E" },
    { name: "紫", hex: "#6B4C7A" },
    { name: "蓝", hex: "#6D86A8" },
    { name: "橙", hex: "#C9762F" },
    { name: "绿", hex: "#6E7A58" }
  ];
  const SHAPE_ORDER = ["杯状", "喇叭", "穗状", "头状", "球状", "钟状", "蝶形", "轮状", "枝状"];
  const PER_PAGE = 15;

  const state = {
    q: "",
    month: null,
    color: "",
    occasion: "",
    scent: "",
    risk: "",
    shape: "",
    page: 1,
    calendarMonth: 0,
    selectedOccasion: null,
    toolTab: "basket",
    favs: [],
    compare: [],
    checkContexts: ["pets", "children"]
  };

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

  const el = {
    search: $("#searchInput"),
    searchClear: $("#searchClear"),
    monthFilter: $("#monthFilter"),
    occasionFilter: $("#occasionFilter"),
    scentFilter: $("#scentFilter"),
    riskFilter: $("#riskFilter"),
    shapeFilter: $("#shapeFilter"),
    colorFilters: $("#colorFilters"),
    activeFilters: $("#activeFilters"),
    resultCount: $("#resultCount"),
    resetFilters: $("#resetFilters"),
    flowerGrid: $("#flowerGrid"),
    pagination: $("#pagination"),
    occasionChips: $("#occasionChips"),
    occasionPanel: $("#occasionPanel"),
    calendarStrip: $("#calendarStrip"),
    seasonTitle: $("#seasonTitle"),
    seasonPreview: $("#seasonPreview"),
    seasonAll: $("#seasonAll"),
    bouquetGrid: $("#bouquetGrid"),
    drawerRoot: $("#drawerRoot"),
    toast: $("#toast"),
    printCard: $("#printCard"),
    statFlowers: $("#statFlowers"),
    aboutCount: $("[data-count-flowers]"),
    aboutBouquetCount: $("[data-count-bouquets]"),
    themeToggle: $("#themeToggle"),
    basketBtn: $("#basketBtn"),
    basketCount: $("#basketCount"),
    dailyBtn: $("#dailyBtn"),
    searchSuggestions: $("#searchSuggestions"),
    modalRoot: $("#modalRoot")
  };

  let toastTimer = null;
  let drawerEl = null;
  let backdropEl = null;
  let lastFocus = null;
  let currentDrawer = null;
  let closeTimer = null;
  let drawerStack = [];
  let modalEl = null;
  let modalBackdrop = null;
  let modalLastFocus = null;

  const FAV_KEY = "huapu-basket-v1";
  const COMPARE_KEY = "huapu-compare-v1";
  const THEME_KEY = "huapu-theme";
  const MAX_FAVS = 8;
  const MAX_COMPARE = 4;

  /* -------------------------------------------------------
     Utilities
     ------------------------------------------------------- */

  function escapeHTML(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  function escapeAttr(value) {
    return escapeHTML(value).replace(/`/g, "&#96;");
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function formatMonths(months) {
    const list = (months || []).slice().sort(function (a, b) { return a - b; });
    if (!list.length) return "—";
    const groups = [];
    let start = list[0];
    let prev = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] === prev + 1) {
        prev = list[i];
      } else {
        groups.push([start, prev]);
        start = prev = list[i];
      }
    }
    groups.push([start, prev]);
    return groups.map(function (g) {
      return g[0] === g[1] ? String(g[0]) : g[0] + "–" + g[1];
    }).join(" / ") + " 月";
  }

  function monthLabel(m) {
    return MONTH_NAMES[m - 1] || (m + " 月");
  }

  function flowerById(id) {
    return FLOWERS.find(function (f) { return f.id === id; });
  }

  function bouquetById(id) {
    return BOUQUETS.find(function (b) { return b.id === id; });
  }

  function firstColor(f) {
    return (f.colors && f.colors[0] && f.colors[0].hex) || "#A0432B";
  }

  function accentColor(f) {
    const preferred = (f.colors || []).find(function (c) {
      return c.group !== "白" && c.group !== "绿";
    });
    if (preferred) return preferred.hex;
    const pink = (f.colors || []).find(function (c) { return c.group === "粉"; });
    return pink ? pink.hex : "#C98B8B";
  }

  function hexLuminance(hex) {
    const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || ""));
    if (!m) return 1;
    const n = parseInt(m[1], 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  }

  function paletteAccent(palette) {
    const list = palette || [];
    const chosen = list.find(function (hex) { return hexLuminance(hex) < 0.78; });
    return chosen || list[0] || "#A0432B";
  }

  function riskText(f) {
    const parts = [];
    if (f.toxicity.petsRisk) parts.push("猫狗");
    if (f.toxicity.childRisk) parts.push("儿童");
    return parts.length ? "对" + parts.join(" / ") + "有风险" : "";
  }

  function toast(message) {
    if (!el.toast) return;
    el.toast.textContent = message;
    el.toast.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.toast.classList.remove("is-show");
    }, 2600);
  }

  function scrollToIndex() {
    const section = $("#index");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }


  /* -------------------------------------------------------
     Persistent state, theme, URL, search helpers
     ------------------------------------------------------- */

  function loadStored(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (err) {
      return fallback;
    }
  }

  function saveStored(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (err) {}
  }

  function loadBasketState() {
    const ids = loadStored(FAV_KEY, []);
    state.favs = Array.isArray(ids) ? ids.filter(function (id) { return flowerById(id); }).slice(0, MAX_FAVS) : [];
    const compare = loadStored(COMPARE_KEY, []);
    state.compare = Array.isArray(compare) ? compare.filter(function (id) { return state.favs.indexOf(id) > -1; }).slice(0, MAX_COMPARE) : [];
    updateBasketCount();
  }

  function saveBasketState() {
    saveStored(FAV_KEY, state.favs);
    saveStored(COMPARE_KEY, state.compare);
    updateBasketCount();
  }

  function isFav(id) {
    return state.favs.indexOf(id) > -1;
  }

  function updateBasketCount() {
    if (!el.basketCount) return;
    el.basketCount.textContent = String(state.favs.length);
    if (el.basketBtn) el.basketBtn.classList.toggle("has-items", state.favs.length > 0);
  }

  function updateFavButtons() {
    $$("[data-fav]").forEach(function (btn) {
      const id = btn.getAttribute("data-fav");
      const on = isFav(id);
      const style = btn.getAttribute("data-fav-style");
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", String(on));
      if (style === "card") {
        btn.textContent = on ? "✓" : "＋";
        btn.setAttribute("aria-label", (on ? "从花篮移除" : "加入花篮") + "：" + (flowerById(id) ? flowerById(id).name : ""));
      } else if (style === "action") {
        btn.textContent = on ? "已加入花篮" : "加入花篮";
      }
    });
  }

  function toggleFav(id) {
    const f = flowerById(id);
    if (!f) return;
    const idx = state.favs.indexOf(id);
    if (idx > -1) {
      state.favs.splice(idx, 1);
      state.compare = state.compare.filter(function (x) { return x !== id; });
      toast("已从花篮移除 " + f.name);
    } else {
      if (state.favs.length >= MAX_FAVS) {
        toast("花篮最多放 " + MAX_FAVS + " 朵；先移除一朵吧");
        return;
      }
      state.favs.push(id);
      toast("已加入花篮 · " + f.name);
    }
    saveBasketState();
    updateFavButtons();
    if (modalEl && modalEl.classList.contains("tool-modal")) renderToolBody();
  }

  function applyTheme(theme, persist) {
    const night = theme === "night";
    if (night) document.documentElement.dataset.theme = "night";
    else delete document.documentElement.dataset.theme;
    if (el.themeToggle) {
      el.themeToggle.setAttribute("aria-pressed", String(night));
      el.themeToggle.setAttribute("aria-label", night ? "切换日间模式" : "切换夜晚模式");
      const icon = el.themeToggle.querySelector(".theme-icon");
      const label = el.themeToggle.querySelector(".theme-label");
      if (icon) icon.textContent = night ? "☀" : "☾";
      if (label) label.textContent = night ? "日" : "夜";
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", night ? "#211B1E" : "#F7F2E9");
    if (persist) {
      try { localStorage.setItem(THEME_KEY, night ? "night" : "light"); } catch (err) {}
    }
  }

  function initTheme() {
    let saved = "light";
    try { saved = localStorage.getItem(THEME_KEY) || "light"; } catch (err) {}
    applyTheme(saved === "night" ? "night" : "light", false);
  }

  function searchTokens() {
    return state.q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  }

  function escapeRegExp(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function highlight(text, tokens) {
    const safe = escapeHTML(text);
    const list = tokens || searchTokens();
    if (!list.length) return safe;
    const pattern = list.map(escapeRegExp).filter(Boolean).join("|");
    if (!pattern) return safe;
    try {
      return safe.replace(new RegExp("(" + pattern + ")", "gi"), "<mark>$1</mark>");
    } catch (err) {
      return safe;
    }
  }

  function deepSnippet(f, tokens) {
    const fields = [
      f.language && f.language.positive,
      f.language && f.language.negative,
      f.language && f.language.cultural,
      f.cultureMeanings && f.cultureMeanings.cn,
      f.cultureMeanings && f.cultureMeanings.west,
      f.cultureMeanings && f.cultureMeanings.jp,
      (f.taboos || []).join(" "),
      f.prompt,
      f.misuse,
      f.trivia,
      f.culture,
      f.poetry,
      f.myth,
      f.press,
      f.habitat,
      f.vaseLife,
      f.pairs && f.pairs.line,
      (f.occasions || []).join(" ")
    ].filter(Boolean);
    const lowerTokens = tokens.map(function (t) { return t.toLowerCase(); });
    for (let i = 0; i < fields.length; i++) {
      const field = String(fields[i]);
      const lower = field.toLowerCase();
      for (let j = 0; j < lowerTokens.length; j++) {
        const idx = lower.indexOf(lowerTokens[j]);
        if (idx > -1) {
          const start = Math.max(0, idx - 18);
          return (start > 0 ? "…" : "") + field.slice(start, start + 72) + (start + 72 < field.length ? "…" : "");
        }
      }
    }
    return "";
  }

  function readURLState() {
    const params = new URLSearchParams(location.search);
    state.q = (params.get("q") || "").trim();
    if (el.search) el.search.value = state.q;
    const month = Number(params.get("month"));
    if (month >= 1 && month <= 12) state.month = month;
    const color = params.get("color") || "";
    if (COLOR_GROUPS.some(function (c) { return c.name === color; })) state.color = color;
    const occ = params.get("occ") || "";
    if (OCCASIONS.some(function (o) { return o.name === occ; })) state.occasion = occ;
    const scent = params.get("scent") || "";
    if (["无", "淡", "浓"].indexOf(scent) > -1) state.scent = scent;
    const risk = params.get("risk") || "";
    if (["pets", "children", "low"].indexOf(risk) > -1) state.risk = risk;
    const shape = params.get("shape") || "";
    if (SHAPE_ORDER.indexOf(shape) > -1) state.shape = shape;
    const page = Number(params.get("page"));
    if (page > 0) state.page = page;
    const cal = Number(params.get("cal"));
    if (cal >= 1 && cal <= 12) state.calendarMonth = cal;
    if (state.month) state.calendarMonth = state.month;
  }

  function syncURL() {
    const params = new URLSearchParams();
    if (state.q) params.set("q", state.q);
    if (state.month) params.set("month", String(state.month));
    if (state.color) params.set("color", state.color);
    if (state.occasion) params.set("occ", state.occasion);
    if (state.scent) params.set("scent", state.scent);
    if (state.risk) params.set("risk", state.risk);
    if (state.shape) params.set("shape", state.shape);
    if (state.page > 1) params.set("page", String(state.page));
    if (state.calendarMonth) params.set("cal", String(state.calendarMonth));
    const base = location.href.split("#")[0].split("?")[0];
    const query = params.toString();
    const hash = location.hash || "";
    try {
      history.replaceState(null, "", base + (query ? "?" + query : "") + hash);
    } catch (err) {}
  }

  function formatDateKey(date) {
    const d = date || new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }

  function getDailyFlower() {
    const key = formatDateKey();
    let hash = 0;
    for (let i = 0; i < key.length; i++) hash = ((hash << 5) - hash + key.charCodeAt(i)) | 0;
    return FLOWERS[Math.abs(hash) % FLOWERS.length];
  }

  /* -------------------------------------------------------
     SVG flower diagrams
     All diagrams are generated from petal count, form and
     the flower's color array. They are diagrams, not photos.
     ------------------------------------------------------- */

  function flowerSVG(f) {
    const palette = f.colors || [];
    const colors = palette.map(function (c) { return c.hex; });
    const nonGreen = palette.filter(function (c) { return c.group !== "绿"; });
    const main = colors[0] || "#A0432B";
    const alt = colors[1] || main;
    const lightPick = nonGreen.slice().sort(function (a, b) { return hexLuminance(b.hex) - hexLuminance(a.hex); })[0];
    const light = lightPick ? lightPick.hex : (colors[2] || "#F3E7D8");
    const fourth = palette[3] && palette[3].group !== "绿" ? palette[3].hex : null;
    const accent = fourth || alt;
    const center = f.id === "hydrangea" ? "#B8893B" : (fourth || "#B8893B");
    const leafColor = palette.filter(function (c) { return c.group === "绿"; })[0];
    const leaf = leafColor ? leafColor.hex : "#6E7A58";
    const outline = 'stroke="#211C17" stroke-opacity=".24" stroke-width=".7"';
    const stemColor = "#4D5A43";
    const type = (f.svg && f.svg.type) || "rosette";
    const petals = (f.svg && f.svg.petals) || 5;

    const stem = '<path d="M60 147 C57 126 62 106 60 84" fill="none" stroke="' + stemColor + '" stroke-width="1.6" stroke-linecap="round"/>';
    const leaves =
      '<path d="M60 122 C48 113 36 115 29 123 C40 129 52 128 60 124Z" fill="' + leaf + '" fill-opacity=".82" stroke="#211C17" stroke-opacity=".18" stroke-width=".6"/>' +
      '<path d="M59 132 C70 123 82 125 90 133 C79 139 68 138 59 134Z" fill="' + leaf + '" fill-opacity=".7" stroke="#211C17" stroke-opacity=".18" stroke-width=".6"/>';
    const pressed =
      '<g opacity=".32">' +
        '<path d="M37 138 C31 133 30 128 34 125 C39 129 41 133 37 138Z" fill="' + alt + '" ' + outline + '/>' +
        '<path d="M83 142 C88 136 93 135 96 139 C92 143 88 144 83 142Z" fill="' + main + '" ' + outline + '/>' +
      '</g>';

    let body = "";

    if (type === "rosette") {
      const n = Math.max(5, Math.min(9, petals));
      body += '<g transform="translate(60 54)">';
      for (let i = 0; i < n; i++) {
        const a = (360 / n) * i;
        body += '<ellipse cx="0" cy="-22" rx="15" ry="26" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + a + ')"/>';
      }
      for (let i = 0; i < n; i++) {
        const a = (360 / n) * i + 180 / n;
        body += '<ellipse cx="0" cy="-13" rx="9" ry="18" fill="' + (i % 2 ? light : alt) + '" ' + outline + ' transform="rotate(' + a + ')"/>';
      }
      body += '<circle cx="0" cy="0" r="6.5" fill="' + center + '" ' + outline + '/>';
      body += '<circle cx="-1.5" cy="-1" r="1.8" fill="' + light + '" opacity=".75"/>';
      body += '</g>';
    }

    if (type === "cup") {
      body += '<g transform="translate(60 54)">';
      body += '<path d="M0 38 C-20 31 -24 -2 -15 -23 C-7 -12 7 -12 15 -23 C24 -2 20 31 0 38Z" fill="' + main + '" ' + outline + '/>';
      body += '<path d="M0 37 C-8 21 -9 -6 -5 -18" fill="none" stroke="' + light + '" stroke-opacity=".65" stroke-width="1.2"/>';
      body += '<path d="M0 37 C8 21 9 -6 5 -18" fill="none" stroke="' + light + '" stroke-opacity=".65" stroke-width="1.2"/>';
      body += '<path d="M-15 -23 C-8 -5 -4 18 0 36" fill="none" stroke="' + light + '" stroke-opacity=".45" stroke-width=".8"/>';
      body += '<path d="M15 -23 C8 -5 4 18 0 36" fill="none" stroke="' + light + '" stroke-opacity=".45" stroke-width=".8"/>';
      body += '</g>';
    }

    if (type === "trumpet") {
      const petalMain = f.id === "lily" ? main : main;
      const petalAlt = f.id === "lily" ? main : alt;
      body += '<g transform="translate(60 54)">';
      for (let i = 0; i < 6; i++) {
        body += '<path d="M0 0 C-7 -13 -9 -31 0 -43 C9 -31 7 -13 0 0Z" fill="' + (i % 2 ? petalAlt : petalMain) + '" ' + outline + ' transform="rotate(' + (60 * i) + ')"/>';
      }
      for (let i = 0; i < 6; i++) {
        const angle = (30 + 60 * i) * Math.PI / 180;
        const x = Math.sin(angle) * 20;
        const y = -Math.cos(angle) * 20;
        body += '<line x1="0" y1="0" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="#8A6A3A" stroke-width=".8" stroke-opacity=".8"/>';
        body += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="1.8" fill="#B8893B" ' + outline + '/>';
      }
      body += '</g>';
    }

    if (type === "iris") {
      body += '<g transform="translate(60 56)">';
      for (let i = 0; i < 3; i++) {
        body += '<g transform="rotate(' + (120 * i) + ')">';
        body += '<path d="M0 0 C-8 -12 -8 -28 0 -36 C8 -28 8 -12 0 0Z" fill="' + alt + '" ' + outline + '/>';
        body += '<path d="M0 0 C-3 -9 -3 -21 0 -28" fill="none" stroke="' + light + '" stroke-opacity=".55" stroke-width=".8"/>';
        body += '</g>';
      }
      for (let i = 0; i < 3; i++) {
        body += '<g transform="rotate(' + (60 + 120 * i) + ')">';
        body += '<path d="M0 0 C-14 4 -21 14 -18 24 C-10 20 -4 20 0 24 C4 20 10 20 18 24 C21 14 14 4 0 0Z" fill="' + main + '" ' + outline + '/>';
        body += '<path d="M0 3 L0 18" stroke="' + accent + '" stroke-width="1.2" stroke-opacity=".85"/>';
        body += '</g>';
      }
      body += '<circle r="4.2" fill="' + center + '" ' + outline + '/>';
      body += '</g>';
    }

    if (type === "spike") {
      body += '<g>';
      const count = 12;
      for (let i = 0; i < count; i++) {
        const y = 26 + i * 5.3;
        const x = 60 + (i % 2 ? 4.5 : -4.5);
        const a = (i % 2 ? 12 : -12);
        if (petals >= 6) {
          body += '<g transform="translate(' + x + ' ' + y + ') rotate(' + (i * 31) + ') scale(.52)">';
          for (let p = 0; p < 6; p++) {
            body += '<ellipse cx="0" cy="-5" rx="2.6" ry="5" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (60 * p) + ')"/>';
          }
          body += '<circle r="1.6" fill="' + center + '"/></g>';
        } else if (petals === 4) {
          body += '<g transform="translate(' + x + ' ' + y + ') rotate(' + (i * 31) + ') scale(.7)">';
          for (let p = 0; p < 4; p++) {
            body += '<ellipse cx="0" cy="-4" rx="2.4" ry="4" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (90 * p) + ')"/>';
          }
          body += '<circle r="1.2" fill="' + center + '"/></g>';
        } else {
          body += '<ellipse cx="' + x + '" cy="' + y + '" rx="3.8" ry="6.2" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + a + ' ' + x + ' ' + y + ')"/>';
        }
      }
      body += '</g>';
    }

    if (type === "disc") {
      const n = petals >= 12 ? petals : 16;
      body += '<g transform="translate(60 54)">';
      for (let i = 0; i < n; i++) {
        body += '<ellipse cx="0" cy="-24" rx="6.3" ry="20" fill="' + main + '" ' + outline + ' transform="rotate(' + ((360 / n) * i) + ')"/>';
      }
      for (let i = 0; i < n; i++) {
        body += '<ellipse cx="0" cy="-14" rx="3.4" ry="11" fill="' + light + '" fill-opacity=".55" ' + outline + ' transform="rotate(' + ((360 / n) * i + 180 / n) + ')"/>';
      }
      const discCenter = f.id === "dandelion" ? main : alt;
      body += '<circle r="13" fill="' + discCenter + '" ' + outline + '/>';
      for (let i = 0; i < 18; i++) {
        const angle = (i * 137.5) * Math.PI / 180;
        const radius = 2 + (i % 5) * 2.1;
        body += '<circle cx="' + (Math.cos(angle) * radius).toFixed(1) + '" cy="' + (Math.sin(angle) * radius).toFixed(1) + '" r=".7" fill="' + light + '" opacity=".55"/>';
      }
      body += '</g>';
    }

    if (type === "cluster") {
      const floretPetals = Math.max(4, Math.min(6, petals || 4));
      const isGyp = f.id === "gypsophila";
      const positions = isGyp ? [
        [0, 0, .72], [-18, -12, .62], [18, -12, .62], [-22, 10, .58], [22, 10, .58],
        [0, -24, .56], [-10, 22, .54], [10, 22, .54], [-30, -2, .5], [30, -2, .5],
        [-14, -28, .48], [14, -28, .48], [-26, 22, .46], [26, 22, .46], [0, 28, .44],
        [-34, 14, .42], [34, 14, .42], [-38, -12, .4], [38, -12, .4], [0, -34, .4]
      ] : [
        [0, 0, 1.0], [-16, -10, .92], [16, -10, .92], [-20, 8, .9], [20, 8, .9],
        [0, -20, .88], [-8, 18, .86], [8, 18, .86], [-28, -2, .8], [28, -2, .8],
        [-12, -24, .78], [12, -24, .78], [-24, 20, .76], [24, 20, .76], [0, 26, .74], [-31, 14, .66], [31, 14, .66]
      ];
      body += '<g transform="translate(60 54)">';
      positions.forEach(function (p, idx) {
        const fill = [main, alt, light][idx % 3];
        body += '<g transform="translate(' + p[0] + ' ' + p[1] + ') scale(' + p[2] + ')">';
        for (let i = 0; i < floretPetals; i++) {
          body += '<ellipse cx="0" cy="-4.4" rx="2.5" ry="4.4" fill="' + fill + '" ' + outline + ' transform="rotate(' + ((360 / floretPetals) * i) + ')"/>';
        }
        body += '<circle r="1.3" fill="' + center + '" opacity=".9"/></g>';
      });
      body += '</g>';
    }

    if (type === "bell") {
      body = '<path d="M48 146 C54 118 64 92 78 62" fill="none" stroke="' + stemColor + '" stroke-width="1.8" stroke-linecap="round"/>';
      body += '<path d="M55 124 C44 114 36 113 28 118 C38 125 48 127 55 126Z" fill="' + leaf + '" fill-opacity=".82" ' + outline + '/>';
      body += '<path d="M62 112 C74 104 82 105 89 112 C79 117 70 117 62 114Z" fill="' + leaf + '" fill-opacity=".8" ' + outline + '/>';
      const bells = [[55, 76], [62, 68], [69, 82], [76, 94], [83, 105]];
      bells.forEach(function (b, idx) {
        const x = b[0];
        const y = b[1];
        body += '<line x1="' + (x - 1) + '" y1="' + (y - 5) + '" x2="' + x + '" y2="' + y + '" stroke="' + stemColor + '" stroke-width=".8"/>';
        body += '<path d="M' + (x - 5.5) + ' ' + y + ' C' + (x - 6.5) + ' ' + (y + 9) + ' ' + (x - 3.5) + ' ' + (y + 15) + ' ' + x + ' ' + (y + 16) + ' C' + (x + 3.5) + ' ' + (y + 15) + ' ' + (x + 6.5) + ' ' + (y + 9) + ' ' + (x + 5.5) + ' ' + y + ' C' + (x + 2) + ' ' + (y + 3) + ' ' + (x - 2) + ' ' + (y + 3) + ' ' + (x - 5.5) + ' ' + y + 'Z" fill="' + (idx % 2 ? light : main) + '" ' + outline + '/>';
        body += '<path d="M' + (x - 3.5) + ' ' + (y + 1) + ' C' + (x - 1) + ' ' + (y + 4) + ' ' + (x + 1) + ' ' + (y + 4) + ' ' + (x + 3.5) + ' ' + (y + 1) + '" fill="none" stroke="' + leaf + '" stroke-width=".7" stroke-opacity=".7"/>';
      });
    }

    if (type === "branch") {
      body = '<path d="M26 144 C40 122 52 103 66 86 C79 70 90 54 99 34" fill="none" stroke="#6B5540" stroke-width="2.2" stroke-linecap="round"/>';
      body += '<path d="M44 118 C55 112 63 106 68 98" fill="none" stroke="#6B5540" stroke-width="1.2" stroke-linecap="round"/>';
      body += '<path d="M66 86 C74 82 82 78 90 76" fill="none" stroke="#6B5540" stroke-width="1.1" stroke-linecap="round"/>';
      body += '<path d="M82 62 C74 58 68 52 64 45" fill="none" stroke="#6B5540" stroke-width="1.1" stroke-linecap="round"/>';
      const blossoms = [[45, 116], [60, 96], [72, 80], [84, 62], [94, 44], [54, 84], [78, 94]];
      const branchPetals = f.id === "osmanthus" ? 4 : 5;
      const baseScale = f.id === "osmanthus" ? .62 : 1;
      blossoms.forEach(function (p, idx) {
        const cx = p[0];
        const cy = p[1];
        const scale = baseScale * (idx === 0 || idx === 5 ? .8 : 1);
        const fill = [main, alt, light][idx % 3];
        body += '<g transform="translate(' + cx + ' ' + cy + ') scale(' + scale + ')">';
        for (let i = 0; i < branchPetals; i++) {
          body += '<ellipse cx="0" cy="-4.4" rx="2.9" ry="4.4" fill="' + fill + '" ' + outline + ' transform="rotate(' + ((360 / branchPetals) * i) + ')"/>';
        }
        body += '<circle r="1.6" fill="' + center + '" ' + outline + '/>';
        body += '</g>';
      });
      body += '<circle cx="52" cy="108" r="1.8" fill="' + alt + '" ' + outline + '/>';
      body += '<circle cx="88" cy="52" r="1.6" fill="' + alt + '" ' + outline + '/>';
      body += '<path d="M48 128 C42 123 37 122 33 126 C38 130 43 131 48 130Z" fill="' + leaf + '" fill-opacity=".7" ' + outline + '/>';
    }

    if (type === "narcissus") {
      body += '<g transform="translate(60 54)">';
      for (let i = 0; i < 6; i++) {
        body += '<ellipse cx="0" cy="-17" rx="7.2" ry="19" fill="' + main + '" ' + outline + ' transform="rotate(' + (60 * i) + ')"/>';
      }
      body += '<circle r="9.2" fill="' + alt + '" ' + outline + '/>';
      body += '<path d="M-8 -3 C-8 -12 -4 -16 0 -16 C4 -16 8 -12 8 -3 C8 4 4 8 0 8 C-4 8 -8 4 -8 -3Z" fill="' + light + '" fill-opacity=".7" ' + outline + '/>';
      body += '<circle r="3.2" fill="' + center + '" ' + outline + '/>';
      body += '</g>';
    }

    if (type === "pom") {
      body += '<g transform="translate(60 54)">';
      for (let ring = 0; ring < 3; ring++) {
        const count = 14 + ring * 8;
        const radius = 12 + ring * 12;
        for (let i = 0; i < count; i++) {
          const a = (360 / count) * i + ring * 9;
          const rad = a * Math.PI / 180;
          const cx = Math.sin(rad) * radius;
          const cy = -Math.cos(rad) * radius;
          body += '<ellipse cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" rx="2.2" ry="8.5" fill="' + (ring % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + a.toFixed(1) + ' ' + cx.toFixed(1) + ' ' + cy.toFixed(1) + ')"/>';
        }
      }
      body += '<circle r="8" fill="' + accent + '" ' + outline + '/></g>';
    }

    if (type === "hibiscus") {
      body += '<g transform="translate(60 56)">';
      for (let i = 0; i < 5; i++) {
        const a = 72 * i;
        body += '<path d="M0 0 C-13 -8 -18 -24 -8 -34 C-2 -39 2 -39 8 -34 C18 -24 13 -8 0 0Z" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + a + ')"/>';
      }
      body += '<rect x="-1.4" y="-30" width="2.8" height="32" fill="' + center + '" ' + outline + '/>';
      for (let i = 0; i < 5; i++) {
        body += '<circle cx="' + (Math.cos(i * 1.2) * 5).toFixed(1) + '" cy="-30" r="2" fill="' + accent + '" ' + outline + '/>';
      }
      body += '<circle r="5" fill="' + alt + '" ' + outline + '/></g>';
    }

    if (type === "lotus") {
      body += '<g transform="translate(60 60)">';
      for (let i = 0; i < 8; i++) {
        body += '<path d="M0 0 C-9 -14 -10 -32 0 -40 C10 -32 9 -14 0 0Z" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (45 * i) + ')"/>';
      }
      for (let i = 0; i < 6; i++) {
        body += '<path d="M0 0 C-6 -10 -6 -23 0 -30 C6 -23 6 -10 0 0Z" fill="' + light + '" ' + outline + ' transform="rotate(' + (60 * i + 30) + ')"/>';
      }
      body += '<circle r="7" fill="' + accent + '" ' + outline + '/></g>';
    }


    if (type === "silk") {
      body += '<g transform="translate(60 52)">';
      for (let i = 0; i < 48; i++) {
        const a = (360 / 48) * i;
        const rad = a * Math.PI / 180;
        const r = 17 + (i % 4) * 3.4;
        body += '<line x1="0" y1="0" x2="' + (Math.cos(rad) * r).toFixed(1) + '" y2="' + (Math.sin(rad) * r).toFixed(1) + '" stroke="' + (i % 3 ? main : alt) + '" stroke-width="1.15" stroke-linecap="round" opacity=".82"/>';
      }
      body += '<circle r="4.5" fill="' + center + '" ' + outline + '/></g>';
    }

    if (type === "orchid") {
      body += '<g transform="translate(60 54)">';
      for (let i = 0; i < 3; i++) {
        body += '<ellipse cx="0" cy="-18" rx="7.6" ry="16" fill="' + main + '" ' + outline + ' transform="rotate(' + (120 * i) + ')"/>';
      }
      body += '<ellipse cx="0" cy="-15" rx="10" ry="18" fill="' + alt + '" ' + outline + ' transform="rotate(60)"/>';
      body += '<ellipse cx="0" cy="-15" rx="10" ry="18" fill="' + alt + '" ' + outline + ' transform="rotate(300)"/>';
      body += '<path d="M0 3 C-8 8 -8 17 0 22 C8 17 8 8 0 3Z" fill="' + center + '" ' + outline + '/>';
      body += '<circle r="3.4" fill="' + light + '" ' + outline + '/>';
      body += '</g>';
    }

    if (type === "calla") {
      body += '<g transform="translate(60 54)">';
      body += '<path d="M0 34 C-19 28 -24 2 -14 -20 C-6 -34 8 -34 16 -20 C26 2 21 28 0 34Z" fill="' + main + '" ' + outline + '/>';
      body += '<path d="M0 32 C-2 16 -2 -2 0 -18" fill="none" stroke="' + center + '" stroke-width="4.2" stroke-linecap="round"/>';
      body += '<path d="M-12 -18 C-8 -4 -8 14 -4 28" fill="none" stroke="' + light + '" stroke-opacity=".55" stroke-width="1"/>';
      body += '<path d="M12 -16 C8 -2 8 14 4 26" fill="none" stroke="' + light + '" stroke-opacity=".4" stroke-width="1"/>';
      body += '</g>';
    }

    if (type === "balloon") {
      body += '<g transform="translate(60 52)">';
      for (let i = 0; i < 5; i++) {
        body += '<ellipse cx="0" cy="-14" rx="8.4" ry="15" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (72 * i) + ')"/>';
      }
      body += '<circle r="5.6" fill="' + center + '" ' + outline + '/>';
      body += '</g>';
      body += '<ellipse cx="60" cy="94" rx="7" ry="10" fill="' + alt + '" fill-opacity=".45" ' + outline + '/>';
      body += '<path d="M60 84 L60 94" stroke="' + stemColor + '" stroke-width="1.2"/>';
      body += '<path d="M54 88 C57 90 58 93 58 96" fill="none" stroke="' + leaf + '" stroke-width="1"/>';
    }

    if (type === "bird") {
      body += '<path d="M52 92 C46 72 50 52 62 40 C74 30 92 34 96 47 C87 55 78 58 70 63 C64 74 62 84 62 92Z" fill="' + main + '" ' + outline + '/>';
      body += '<path d="M70 56 L95 42 L89 63 Z" fill="' + alt + '" ' + outline + '/>';
      body += '<path d="M62 92 C60 82 58 74 58 66" fill="none" stroke="' + stemColor + '" stroke-width="1.4"/>';
      body += '<path d="M60 84 C50 77 41 77 33 81 C43 88 53 88 60 84Z" fill="' + leaf + '" fill-opacity=".82" ' + outline + '/>';
      body += '<path d="M66 50 C72 46 78 46 84 49" fill="none" stroke="' + light + '" stroke-opacity=".8" stroke-width="1.2"/>';
    }

    if (type === "pansy") {
      body += '<g transform="translate(60 54)">';
      body += '<ellipse cx="-8" cy="-12" rx="9" ry="12" fill="' + main + '" ' + outline + ' transform="rotate(-28)"/>';
      body += '<ellipse cx="8" cy="-12" rx="9" ry="12" fill="' + main + '" ' + outline + ' transform="rotate(28)"/>';
      body += '<ellipse cx="-15" cy="2" rx="10" ry="12" fill="' + alt + '" ' + outline + ' transform="rotate(-58)"/>';
      body += '<ellipse cx="15" cy="2" rx="10" ry="12" fill="' + alt + '" ' + outline + ' transform="rotate(58)"/>';
      body += '<ellipse cx="0" cy="15" rx="11" ry="12" fill="' + light + '" ' + outline + '/>';
      body += '<circle r="4.6" fill="' + center + '" ' + outline + '/>';
      body += '<path d="M-4 6 C-1 3 1 3 4 6" fill="none" stroke="#211C17" stroke-opacity=".35" stroke-width="1"/>';
      body += '</g>';
    }

    if (type === "jasmine") {
      body += '<g transform="translate(60 54)">';
      for (let i = 0; i < 8; i++) {
        body += '<ellipse cx="0" cy="-14" rx="4.4" ry="13" fill="' + (i % 3 ? light : main) + '" ' + outline + ' transform="rotate(' + (45 * i) + ')"/>';
      }
      body += '<circle r="3.8" fill="' + center + '" ' + outline + '/>';
      body += '</g>';
      body += '<circle cx="85" cy="76" r="4.4" fill="' + light + '" fill-opacity=".8" ' + outline + '/>';
    }

    if (type === "begonia") {
      body += '<g transform="translate(60 54)">';
      body += '<path d="M0 -4 C-17 -13 -31 -6 -33 7 C-22 13 -8 9 0 -4Z" fill="' + leaf + '" fill-opacity=".82" ' + outline + '/>';
      body += '<path d="M2 2 C17 -5 30 1 32 13 C20 18 7 14 2 2Z" fill="' + leaf + '" fill-opacity=".68" ' + outline + '/>';
      for (let k = 0; k < 2; k++) {
        const cx = k ? 14 : -4;
        const cy = k ? -12 : -20;
        body += '<g transform="translate(' + cx + ' ' + cy + ') scale(.8)">';
        for (let i = 0; i < 4; i++) {
          body += '<ellipse cx="0" cy="-5" rx="3.2" ry="5.4" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (90 * i) + ')"/>';
        }
        body += '<circle r="1.8" fill="' + center + '"/></g>';
      }
      body += '</g>';
    }

    if (type === "redbean") {
      body = '<path d="M34 144 C42 122 52 104 66 88 C78 74 88 58 96 40" fill="none" stroke="' + stemColor + '" stroke-width="1.8" stroke-linecap="round"/>';
      body += '<path d="M48 118 C38 112 31 113 26 119 C35 124 43 123 48 121Z" fill="' + leaf + '" fill-opacity=".8" ' + outline + '/>';
      body += '<path d="M62 96 C72 90 79 91 84 97 C75 102 67 101 62 99Z" fill="' + leaf + '" fill-opacity=".7" ' + outline + '/>';
      const peas = [[46, 126], [58, 108], [70, 90], [82, 72], [91, 54]];
      peas.forEach(function (pt, idx) {
        body += '<g transform="translate(' + pt[0] + ' ' + pt[1] + ') rotate(' + (idx % 2 ? -14 : 14) + ')">';
        body += '<ellipse cx="-4" cy="-4" rx="5.2" ry="7" fill="' + (idx % 2 ? alt : main) + '" ' + outline + ' transform="rotate(-28)"/>';
        body += '<ellipse cx="4" cy="-4" rx="5.2" ry="7" fill="' + (idx % 2 ? main : alt) + '" ' + outline + ' transform="rotate(28)"/>';
        body += '<circle r="1.5" fill="' + center + '"/></g>';
      });
      body += '<circle cx="34" cy="136" r="3.2" fill="#A0432B" ' + outline + '/>';
      body += '<circle cx="42" cy="142" r="3.2" fill="#A0432B" ' + outline + '/>';
      body += '<circle cx="34" cy="136" r=".8" fill="#211C17"/>';
    }

    if (type === "cotton") {
      body += '<g transform="translate(60 52)">';
      body += '<circle cx="-10" cy="-6" r="12" fill="' + light + '" fill-opacity=".9" ' + outline + '/>';
      body += '<circle cx="10" cy="-6" r="12" fill="' + main + '" fill-opacity=".9" ' + outline + '/>';
      body += '<circle cx="-6" cy="8" r="11" fill="' + light + '" fill-opacity=".85" ' + outline + '/>';
      body += '<circle cx="8" cy="9" r="11" fill="' + main + '" fill-opacity=".85" ' + outline + '/>';
      body += '<path d="M-13 18 L13 18 L8 26 L-8 26Z" fill="' + leaf + '" fill-opacity=".8" ' + outline + '/>';
      body += '<circle cx="0" cy="0" r="3" fill="' + center + '" opacity=".7"/>';
      body += '</g>';
    }

    if (type === "snapdragon") {
      const ys = [30, 39, 48, 57, 66, 75];
      body += '<g>';
      ys.forEach(function (y, idx) {
        const dir = idx % 2 ? -1 : 1;
        body += '<g transform="translate(' + (60 + dir * 6) + ' ' + y + ') rotate(' + (dir * 10) + ')">';
        body += '<path d="M0 0 C-8 -4 -10 3 -7 8 C-3 11 3 11 7 8 C10 3 8 -4 0 0Z" fill="' + (idx % 2 ? alt : main) + '" ' + outline + '/>';
        body += '<path d="M-5 3 C-2 6 2 6 5 3" fill="none" stroke="' + light + '" stroke-opacity=".7" stroke-width="1"/>';
        body += '</g>';
      });
      body += '</g>';
    }

    if (type === "freesia") {
      const pts = [[60, 78], [63, 67], [67, 56], [71, 45], [75, 34]];
      body += '<g>';
      pts.forEach(function (pt, idx) {
        body += '<g transform="translate(' + pt[0] + ' ' + pt[1] + ') rotate(' + (idx % 2 ? 16 : -16) + ')">';
        for (let i = 0; i < 5; i++) {
          body += '<ellipse cx="0" cy="-6" rx="3.6" ry="6.4" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (72 * i) + ')"/>';
        }
        body += '<circle r="1.6" fill="' + center + '"/></g>';
      });
      body += '</g>';
    }

    if (type === "gladiolus") {
      const pts = [[56, 80], [66, 69], [56, 58], [66, 47], [56, 36], [66, 26]];
      body += '<g>';
      pts.forEach(function (pt, idx) {
        body += '<g transform="translate(' + pt[0] + ' ' + pt[1] + ') rotate(' + (idx % 2 ? 14 : -14) + ')">';
        for (let i = 0; i < 5; i++) {
          body += '<ellipse cx="0" cy="-6" rx="4.6" ry="8" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (72 * i) + ')"/>';
        }
        body += '<circle r="2" fill="' + center + '"/></g>';
      });
      body += '</g>';
    }

    if (type === "kapok") {
      body += '<g transform="translate(60 52)">';
      for (let i = 0; i < 5; i++) {
        body += '<path d="M0 0 C-10 -8 -15 -21 -8 -31 C-2 -26 0 -17 0 0Z" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (72 * i) + ')"/>';
      }
      for (let i = 0; i < 12; i++) {
        const a = (360 / 12) * i;
        const rad = a * Math.PI / 180;
        body += '<line x1="0" y1="0" x2="' + (Math.cos(rad) * 24).toFixed(1) + '" y2="' + (Math.sin(rad) * 24).toFixed(1) + '" stroke="' + center + '" stroke-width=".9"/>';
        body += '<circle cx="' + (Math.cos(rad) * 24).toFixed(1) + '" cy="' + (Math.sin(rad) * 24).toFixed(1) + '" r="1.4" fill="' + center + '"/>';
      }
      body += '<circle r="4" fill="' + main + '" ' + outline + '/>';
      body += '</g>';
    }

    if (type === "wintersweet") {
      body = '<path d="M30 144 C42 122 55 104 70 88 C82 74 91 56 98 36" fill="none" stroke="#6B5540" stroke-width="2" stroke-linecap="round"/>';
      body += '<path d="M54 104 C64 98 70 92 74 84" fill="none" stroke="#6B5540" stroke-width="1.1"/>';
      body += '<path d="M78 62 C88 58 94 52 98 44" fill="none" stroke="#6B5540" stroke-width="1.1"/>';
      const blooms = [[46, 124], [58, 106], [68, 92], [79, 72], [89, 52], [54, 88]];
      blooms.forEach(function (pt, idx) {
        body += '<g transform="translate(' + pt[0] + ' ' + pt[1] + ') rotate(' + (idx % 2 ? -18 : 18) + ')">';
        for (let i = 0; i < 6; i++) {
          body += '<ellipse cx="0" cy="-5" rx="3.1" ry="5.2" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (60 * i) + ')"/>';
        }
        body += '<circle r="1.8" fill="#7D4A2A"/></g>';
      });
      body += '<path d="M36 134 C30 130 25 130 21 134 C27 137 32 137 36 135Z" fill="' + leaf + '" fill-opacity=".7" ' + outline + '/>';
    }


    if (type === "bluestar") {
      body += '<g transform="translate(60 54)">';
      for (let i = 0; i < 5; i++) {
        body += '<path d="M0 0 C-6 -10 -7 -20 0 -28 C7 -20 6 -10 0 0Z" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (72 * i) + ')"/>';
      }
      body += '<circle r="4" fill="' + center + '" ' + outline + '/>';
      for (let i = 0; i < 9; i++) {
        const a = (40 * i) * Math.PI / 180;
        body += '<circle cx="' + (Math.cos(a) * 2.2).toFixed(1) + '" cy="' + (Math.sin(a) * 2.2).toFixed(1) + '" r=".7" fill="' + light + '"/>';
      }
      body += '</g>';
    }

    if (type === "sweetpea") {
      body = '<path d="M42 146 C52 124 64 104 80 86 C88 76 94 64 96 50" fill="none" stroke="' + stemColor + '" stroke-width="1.6" stroke-linecap="round"/>';
      body += '<path d="M52 124 C42 118 35 119 30 125 C39 130 47 129 52 127Z" fill="' + leaf + '" fill-opacity=".8" ' + outline + '/>';
      body += '<path d="M70 104 C78 96 86 96 91 102 C83 107 75 107 70 105Z" fill="' + leaf + '" fill-opacity=".7" ' + outline + '/>';
      const peas = [[54, 126], [67, 104], [80, 82], [90, 62]];
      peas.forEach(function (pt, idx) {
        body += '<g transform="translate(' + pt[0] + ' ' + pt[1] + ') rotate(' + (idx % 2 ? -18 : 18) + ')">';
        body += '<ellipse cx="-5" cy="-3" rx="6.5" ry="9" fill="' + main + '" ' + outline + ' transform="rotate(-30)"/>';
        body += '<ellipse cx="5" cy="-3" rx="6.5" ry="9" fill="' + (idx % 2 ? alt : light) + '" ' + outline + ' transform="rotate(30)"/>';
        body += '<circle r="2" fill="' + center + '"/></g>';
      });
      body += '<path d="M61 96 C66 90 70 84 72 78" fill="none" stroke="' + leaf + '" stroke-width="1" stroke-linecap="round"/>';
    }

    if (type === "wisteria") {
      body = '<path d="M24 144 C38 124 52 106 68 88 C80 74 90 54 98 34" fill="none" stroke="#6B5540" stroke-width="2.2" stroke-linecap="round"/>';
      body += '<path d="M56 100 C48 96 40 96 34 100" fill="none" stroke="#6B5540" stroke-width="1"/>';
      body += '<path d="M76 72 C84 66 90 58 92 50" fill="none" stroke="#6B5540" stroke-width="1"/>';
      body += '<path d="M46 120 C38 114 31 114 26 120 C35 125 41 124 46 122Z" fill="' + leaf + '" fill-opacity=".75" ' + outline + '/>';
      const hangs = [[50, 108], [68, 88], [84, 66]];
      hangs.forEach(function (pt, hi) {
        const x = pt[0], y = pt[1];
        body += '<path d="M' + x + ' ' + y + ' C' + (x + 2) + ' ' + (y + 12) + ' ' + (x + 1) + ' ' + (y + 26) + ' ' + (x - 2) + ' ' + (y + 36) + '" fill="none" stroke="' + stemColor + '" stroke-width=".9"/>';
        for (let i = 0; i < 8; i++) {
          const yy = y + 5 + i * 4.2;
          const xx = x + (i % 2 ? 2.5 : -2.5);
          body += '<g transform="translate(' + xx + ' ' + yy + ') scale(.62)">';
          for (let p = 0; p < 4; p++) {
            body += '<ellipse cx="0" cy="-4" rx="2.5" ry="4" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (90 * p) + ')"/>';
          }
          body += '<circle r="1" fill="' + center + '"/></g>';
        }
      });
    }

    if (type === "magnolia") {
      body = '<path d="M22 144 C38 124 52 106 68 88 C80 74 90 54 98 36" fill="none" stroke="#6B5540" stroke-width="2.2" stroke-linecap="round"/>';
      body += '<path d="M58 100 C48 94 40 94 34 99" fill="none" stroke="#6B5540" stroke-width="1"/>';
      body += '<path d="M76 72 C86 66 92 56 94 48" fill="none" stroke="#6B5540" stroke-width="1"/>';
      const blooms = [[66, 92], [84, 64]];
      blooms.forEach(function (pt, idx) {
        body += '<g transform="translate(' + pt[0] + ' ' + pt[1] + ') rotate(' + (idx % 2 ? 12 : -8) + ')">';
        for (let i = 0; i < 6; i++) {
          body += '<ellipse cx="0" cy="-13" rx="8" ry="16" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (60 * i) + ')"/>';
        }
        body += '<circle r="4" fill="' + center + '" ' + outline + '/>';
        body += '</g>';
      });
      body += '<path d="M46 116 C40 111 34 111 30 116 C37 120 42 120 46 118Z" fill="' + leaf + '" fill-opacity=".7" ' + outline + '/>';
    }

    if (type === "pomegranate") {
      body += '<g transform="translate(60 54)">';
      for (let i = 0; i < 5; i++) {
        body += '<path d="M0 0 C-9 -8 -13 -22 -6 -31 C0 -26 2 -16 0 0Z" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (72 * i) + ')"/>';
      }
      body += '<path d="M-9 -5 L-6 -15 L-2 -7 L0 -17 L3 -7 L7 -15 L9 -5Z" fill="' + center + '" ' + outline + '/>';
      body += '<circle r="5" fill="' + alt + '" ' + outline + '/>';
      body += '</g>';
      body += '<circle cx="86" cy="82" r="4.5" fill="' + main + '" fill-opacity=".75" ' + outline + '/>';
    }

    if (type === "lace") {
      body += '<g transform="translate(60 50)">';
      const pts = [];
      for (let ring = 0; ring < 3; ring++) {
        const count = ring === 0 ? 1 : ring * 7;
        const radius = ring * 11;
        for (let i = 0; i < count; i++) {
          const a = (360 / count) * i + ring * 11;
          pts.push([Math.cos(a * Math.PI / 180) * radius, Math.sin(a * Math.PI / 180) * radius, .8 - ring * .1]);
        }
      }
      pts.forEach(function (pt, idx) {
        body += '<g transform="translate(' + pt[0].toFixed(1) + ' ' + pt[1].toFixed(1) + ') scale(' + pt[2].toFixed(2) + ')">';
        for (let i = 0; i < 5; i++) {
          body += '<ellipse cx="0" cy="-3.4" rx="1.8" ry="3.4" fill="' + (idx % 3 ? main : alt) + '" ' + outline + ' transform="rotate(' + (72 * i) + ')"/>';
        }
        body += '<circle r=".9" fill="' + center + '"/></g>';
      });
      body += '<circle r="2.2" fill="' + center + '"/></g>';
    }

    if (type === "pincushion") {
      body += '<g transform="translate(60 52)">';
      for (let i = 0; i < 26; i++) {
        const a = (i * 137.5) * Math.PI / 180;
        const r = 4 + (i % 6) * 3.3;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        body += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="2.6" fill="' + (i % 3 ? main : alt) + '" ' + outline + '/>';
        body += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r=".8" fill="' + center + '"/>';
      }
      body += '<circle r="4" fill="' + center + '" ' + outline + '/></g>';
    }


    if (type === "epiphyllum") {
      body += '<g transform="translate(60 52)">';
      for (let ring = 0; ring < 3; ring++) {
        const count = 10 + ring * 3;
        for (let i = 0; i < count; i++) {
          const a = (360 / count) * i + ring * 7;
          body += '<path d="M0 0 C-4 -11 -4 -23 0 -31 C4 -23 4 -11 0 0Z" fill="' + (ring === 2 ? light : (i % 2 ? alt : main)) + '" ' + outline + ' transform="rotate(' + a + ')"/>';
        }
      }
      body += '<circle r="4.5" fill="' + center + '" ' + outline + '/></g>';
    }

    if (type === "datura") {
      body += '<g transform="translate(60 48)">';
      for (let i = 0; i < 5; i++) {
        body += '<path d="M0 0 C-12 -6 -19 -20 -14 -31 C-5 -26 0 -16 0 0Z" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (72 * i) + ')"/>';
      }
      body += '<circle r="5" fill="' + center + '" ' + outline + '/>';
      body += '</g>';
      body += '<circle cx="60" cy="82" r="7" fill="' + leaf + '" fill-opacity=".55" ' + outline + '/>';
      for (let i = 0; i < 8; i++) {
        const a = (45 * i) * Math.PI / 180;
        body += '<line x1="60" y1="82" x2="' + (60 + Math.cos(a) * 11).toFixed(1) + '" y2="' + (82 + Math.sin(a) * 11).toFixed(1) + '" stroke="' + leaf + '" stroke-width="1"/>';
      }
    }

    if (type === "lycoris") {
      body = '<path d="M60 148 C58 122 60 96 60 72" fill="none" stroke="' + stemColor + '" stroke-width="1.6" stroke-linecap="round"/>';
      body += '<g transform="translate(60 54)">';
      for (let i = 0; i < 6; i++) {
        body += '<path d="M0 0 C-9 -12 -18 -18 -27 -15 C-22 -7 -14 -2 -4 2" fill="none" stroke="' + (i % 2 ? alt : main) + '" stroke-width="2.2" stroke-linecap="round" transform="rotate(' + (60 * i) + ')"/>';
      }
      for (let i = 0; i < 6; i++) {
        body += '<line x1="0" y1="0" x2="' + (Math.cos((60 * i - 90) * Math.PI / 180) * 30).toFixed(1) + '" y2="' + (Math.sin((60 * i - 90) * Math.PI / 180) * 30).toFixed(1) + '" stroke="' + center + '" stroke-width=".8" opacity=".8"/>';
      }
      body += '<circle r="3" fill="' + center + '" ' + outline + '/></g>';
    }

    if (type === "crocus") {
      body += '<g transform="translate(60 54)">';
      for (let i = 0; i < 6; i++) {
        body += '<ellipse cx="0" cy="-14" rx="6.5" ry="16" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (60 * i) + ')"/>';
      }
      for (let i = 0; i < 3; i++) {
        body += '<line x1="0" y1="0" x2="' + (Math.cos((120 * i - 90) * Math.PI / 180) * 19).toFixed(1) + '" y2="' + (Math.sin((120 * i - 90) * Math.PI / 180) * 19).toFixed(1) + '" stroke="' + center + '" stroke-width="2.4" stroke-linecap="round"/>';
        body += '<circle cx="' + (Math.cos((120 * i - 90) * Math.PI / 180) * 19).toFixed(1) + '" cy="' + (Math.sin((120 * i - 90) * Math.PI / 180) * 19).toFixed(1) + '" r="2" fill="' + center + '"/>';
      }
      body += '</g>';
    }

    if (type === "echinacea") {
      body += '<g transform="translate(60 54)">';
      for (let i = 0; i < 14; i++) {
        body += '<ellipse cx="0" cy="-18" rx="4.6" ry="13" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (360 / 14 * i + 12) + ') translate(0 10)"/>';
      }
      body += '<ellipse cx="0" cy="2" rx="10" ry="12" fill="' + center + '" ' + outline + '/>';
      for (let i = 0; i < 14; i++) {
        const a = (i * 137.5) * Math.PI / 180;
        body += '<circle cx="' + (Math.cos(a) * 6).toFixed(1) + '" cy="' + (2 + Math.sin(a) * 7).toFixed(1) + '" r=".8" fill="' + alt + '"/>';
      }
      body += '</g>';
    }

    if (type === "cockscomb") {
      body += '<g transform="translate(60 50)">';
      body += '<path d="M0 28 C-25 20 -29 -4 -18 -25 C-8 -38 6 -40 18 -28 C29 -8 25 18 0 28Z" fill="' + main + '" ' + outline + '/>';
      for (let i = 0; i < 7; i++) {
        const y = 20 - i * 7;
        body += '<path d="M-15 ' + y + ' C-6 ' + (y - 6) + ' 6 ' + (y - 6) + ' 15 ' + y + '" fill="none" stroke="' + alt + '" stroke-width="1.2" opacity=".7"/>';
      }
      body += '<path d="M0 28 L0 38" stroke="' + stemColor + '" stroke-width="1.5"/></g>';
    }

    if (type === "impatiens") {
      body += '<g transform="translate(60 54)">';
      body += '<ellipse cx="-8" cy="-10" rx="8" ry="12" fill="' + main + '" ' + outline + ' transform="rotate(-30)"/>';
      body += '<ellipse cx="8" cy="-10" rx="8" ry="12" fill="' + main + '" ' + outline + ' transform="rotate(30)"/>';
      body += '<ellipse cx="-13" cy="4" rx="9" ry="11" fill="' + alt + '" ' + outline + ' transform="rotate(-60)"/>';
      body += '<ellipse cx="13" cy="4" rx="9" ry="11" fill="' + alt + '" ' + outline + ' transform="rotate(60)"/>';
      body += '<ellipse cx="0" cy="14" rx="9" ry="10" fill="' + light + '" ' + outline + '/>';
      body += '<path d="M0 18 C2 26 0 32 -5 36" fill="none" stroke="' + center + '" stroke-width="1.4"/>';
      body += '<circle r="4" fill="' + center + '" ' + outline + '/>';
      body += '</g>';
    }

    if (type === "hollyhock") {
      const pts = [[56, 82], [64, 68], [56, 54], [64, 40], [58, 26]];
      body += '<g>';
      pts.forEach(function (pt, idx) {
        body += '<g transform="translate(' + pt[0] + ' ' + pt[1] + ') rotate(' + (idx % 2 ? 10 : -10) + ')">';
        for (let i = 0; i < 5; i++) {
          body += '<ellipse cx="0" cy="-7" rx="6" ry="10" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (72 * i) + ')"/>';
        }
        body += '<circle r="2.4" fill="' + center + '" ' + outline + '/></g>';
      });
      body += '</g>';
    }

    if (type === "edgeworthia") {
      body = '<path d="M28 144 C42 122 55 104 70 88 C82 74 90 58 96 42" fill="none" stroke="#6B5540" stroke-width="2.2" stroke-linecap="round"/>';
      body += '<path d="M54 104 C64 98 70 92 74 84" fill="none" stroke="#6B5540" stroke-width="1.1"/>';
      body += '<path d="M78 66 C86 60 92 54 96 46" fill="none" stroke="#6B5540" stroke-width="1.1"/>';
      const clusters = [[50, 112], [64, 94], [76, 76], [86, 58]];
      clusters.forEach(function (pt, idx) {
        body += '<g transform="translate(' + pt[0] + ' ' + pt[1] + ')">';
        for (let i = 0; i < 9; i++) {
          const a = (40 * i) * Math.PI / 180;
          const r = 2 + (i % 3) * 2.5;
          body += '<circle cx="' + (Math.cos(a) * r).toFixed(1) + '" cy="' + (Math.sin(a) * r).toFixed(1) + '" r="2.3" fill="' + (i % 2 ? alt : main) + '" ' + outline + '/>';
        }
        body += '</g>';
      });
      body += '<path d="M38 130 C32 126 27 126 23 130 C29 133 34 133 38 131Z" fill="' + leaf + '" fill-opacity=".7" ' + outline + '/>';
    }

    if (type === "jacaranda") {
      body = '<path d="M24 144 C38 122 52 104 68 86 C80 72 90 54 98 34" fill="none" stroke="#6B5540" stroke-width="2.2" stroke-linecap="round"/>';
      body += '<path d="M56 100 C48 94 40 94 34 99" fill="none" stroke="#6B5540" stroke-width="1"/>';
      body += '<path d="M76 72 C84 66 90 58 92 50" fill="none" stroke="#6B5540" stroke-width="1"/>';
      const clusters = [[52, 106], [68, 86], [82, 64]];
      clusters.forEach(function (pt, idx) {
        const x = pt[0], y = pt[1];
        for (let k = 0; k < 5; k++) {
          const xx = x + (k % 2 ? 8 : -7);
          const yy = y + (k - 2) * 5;
          body += '<g transform="translate(' + xx + ' ' + yy + ') scale(.7)">';
          for (let i = 0; i < 5; i++) {
            body += '<ellipse cx="0" cy="-5" rx="3" ry="5" fill="' + (i % 2 ? alt : main) + '" ' + outline + ' transform="rotate(' + (72 * i) + ')"/>';
          }
          body += '<circle r="1.2" fill="' + center + '"/></g>';
        }
      });
      body += '<path d="M40 126 C34 122 29 122 25 126 C31 129 36 129 40 127Z" fill="' + leaf + '" fill-opacity=".65" ' + outline + '/>';
    }

    const label = escapeAttr(f.name + "花形示意，" + f.form + "，花色 " + (f.colors || []).map(function (c) { return c.name; }).join("、"));
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 150" role="img" aria-label="' + label + '">' +
      '<title>' + escapeHTML(f.name + " · 形态示意") + '</title>' +
      (type === "bell" || type === "branch" || type === "wintersweet" || type === "redbean" || type === "sweetpea" || type === "wisteria" || type === "magnolia" || type === "lycoris" || type === "edgeworthia" || type === "jacaranda" ? "" : stem) +
      (type === "bell" || type === "branch" || type === "wintersweet" || type === "redbean" || type === "sweetpea" || type === "wisteria" || type === "magnolia" || type === "lycoris" || type === "edgeworthia" || type === "jacaranda" ? "" : leaves) +
      pressed +
      body +
      '</svg>';
  }

  /* -------------------------------------------------------
     Cards
     ------------------------------------------------------- */

  function bloomBar(months) {
    let html = '<div class="bloom-bar" aria-hidden="true">';
    for (let i = 1; i <= 12; i++) {
      html += '<i class="' + (months.indexOf(i) > -1 ? "is-on" : "") + '"></i>';
    }
    html += "</div>";
    return html;
  }

  function renderCard(f) {
    const risk = riskText(f);
    const tokens = searchTokens();
    const aliases = (f.aliases || []).join(" · ");
    const colors = (f.colors || []).map(function (c) {
      return '<span class="color-dot" style="background:' + escapeAttr(c.hex) + '" title="' + escapeAttr(c.name + " " + c.hex) + '"></span>';
    }).join("");
    const occasions = (f.occasions || []).slice(0, 2).map(function (o) {
      return "<span>" + escapeHTML(o) + "</span>";
    }).join("");
    const visible = [f.name, f.en, f.latin, f.family, aliases].join(" ").toLowerCase();
    const deepOnly = tokens.some(function (t) { return visible.indexOf(t) === -1; });
    const deep = tokens.length && deepOnly ? deepSnippet(f, tokens) : "";
    const fav = isFav(f.id);

    return '<article class="tag-card" data-id="' + escapeAttr(f.id) + '" style="--accent:' + escapeAttr(accentColor(f)) + '">' +
      '<button class="tag-hit" type="button" data-open-flower="' + escapeAttr(f.id) + '" aria-label="查看' + escapeAttr(f.name) + '详情"></button>' +
      '<div class="tag-top"><span class="tag-no">NO. ' + pad(f.no) + '</span><span class="tag-top-right"><span class="tag-bloom">花期 ' + escapeHTML(formatMonths(f.bloom)) + '</span>' +
        '<button class="tag-fav ' + (fav ? "is-on" : "") + '" type="button" data-fav="' + escapeAttr(f.id) + '" data-fav-style="card" aria-pressed="' + fav + '" aria-label="' + (fav ? "从花篮移除" : "加入花篮") + '：' + escapeAttr(f.name) + '">' + (fav ? "✓" : "＋") + '</button>' +
      '</span></div>' +
      '<div class="tag-main">' +
        '<div>' +
          '<h3 class="tag-name">' + highlight(f.name, tokens) + '</h3>' +
          '<p class="tag-latin">' + highlight(f.latin, tokens) + '</p>' +
          '<p class="tag-aliases">' + (aliases ? highlight(aliases, tokens) : "—") + '</p>' +
        '</div>' +
        '<figure class="tag-fig">' + flowerSVG(f) + '<figcaption>形态示意</figcaption></figure>' +
      '</div>' +
      '<p class="tag-family">' + escapeHTML(f.family) + '</p>' +
      '<div class="tag-bloomrow"><span class="bloom-label">花期</span>' + bloomBar(f.bloom) + '</div>' +
      '<div class="tag-lower"><div class="tag-colors">' + colors + '</div><div class="tag-occasions">' + occasions + '</div></div>' +
      '<p class="tag-line">' + highlight(f.language.positive, tokens) + '</p>' +
      (deep ? '<p class="tag-match">匹配 · ' + highlight(deep, tokens) + '</p>' : "") +
      (risk ? '<p class="tag-risk">' + escapeHTML(risk) + '</p>' : "") +
      '<div class="tag-foot"><span>' + escapeHTML(f.form) + '</span><span class="tag-open">查看 →</span></div>' +
    "</article>";
  }

  function renderSeasonItem(f) {
    return '<button class="season-item" type="button" data-open-flower="' + escapeAttr(f.id) + '">' +
      '<span class="season-fig" aria-hidden="true">' + flowerSVG(f) + '</span>' +
      '<span class="season-txt"><span class="season-name">' + escapeHTML(f.name) + '</span>' +
      '<span class="season-latin">' + escapeHTML(f.latin) + '</span>' +
      '<span class="season-months">' + escapeHTML(formatMonths(f.bloom)) + '</span></span>' +
    "</button>";
  }

  /* -------------------------------------------------------
     Occasions
     ------------------------------------------------------- */

  function renderOccasionChips() {
    el.occasionChips.innerHTML = OCCASIONS.map(function (o, idx) {
      return '<button class="occ-chip ' + (state.selectedOccasion === o.id ? "is-active" : "") + '" type="button" data-occasion="' + escapeAttr(o.id) + '" aria-pressed="' + (state.selectedOccasion === o.id) + '">' +
        '<span class="cn">' + escapeHTML(o.name) + '</span><span class="en">' + pad(idx + 1) + " / " + escapeHTML(o.en) + "</span>" +
      "</button>";
    }).join("");
  }

  function renderOccasionPanel() {
    const occ = OCCASIONS.find(function (o) { return o.id === state.selectedOccasion; });
    if (!occ) {
      el.occasionPanel.innerHTML = '<p class="panel-placeholder">选一个场合。这里会给出三到五支花的组合、一句花卡文案，以及「为什么合适 / 不要送」的理由。</p>';
      return;
    }
    const flowers = (occ.flowers || []).map(flowerById).filter(Boolean);
    const flowerChips = flowers.map(function (f) {
      return '<button class="occ-flower" type="button" data-open-flower="' + escapeAttr(f.id) + '"><i style="background:' + escapeAttr(firstColor(f)) + '"></i>' + escapeHTML(f.name) + "</button>";
    }).join("");
    const palette = (occ.palette || []).map(function (hex) {
      return '<span style="background:' + escapeAttr(hex) + '"></span>';
    }).join("");
    const bouquet = occ.bouquetId ? bouquetById(occ.bouquetId) : null;
    const actions = '<div class="occ-actions">' +
      (bouquet ? '<button class="occ-bouquet-link" type="button" data-open-bouquet="' + escapeAttr(bouquet.id) + '">查看完整花束配方 <span aria-hidden="true">→</span></button>' : '') +
      '<button class="occ-filter-link" type="button" data-filter-occasion="' + escapeAttr(occ.name) + '">在索引中筛选这个场合 <span aria-hidden="true">→</span></button>' +
    '</div>';

    el.occasionPanel.innerHTML =
      '<div class="occ-result">' +
        '<div>' +
          '<p class="occ-kicker">SCENE / ' + pad(OCCASIONS.indexOf(occ) + 1) + '</p>' +
          '<h3 class="occ-title">' + escapeHTML(occ.name) + '</h3>' +
          '<p class="occ-en">' + escapeHTML(occ.en) + '</p>' +
          '<p class="occ-why"><strong>为什么合适</strong>' + escapeHTML(occ.why) + '</p>' +
          '<p class="occ-avoid"><strong>不要送</strong>' + escapeHTML(occ.avoid) + '</p>' +
          '<p class="occ-note">' + escapeHTML(occ.note) + '</p>' +
        '</div>' +
        '<div class="occ-side">' +
          '<div><p class="occ-side-label">建议组合 · 三到五支</p><div class="occ-flowers">' + flowerChips + '</div></div>' +
          '<div><p class="occ-line">“' + escapeHTML(occ.line) + '”</p><div class="occ-palette" aria-hidden="true">' + palette + '</div></div>' +
          actions +
        '</div>' +
      '</div>';
  }

  /* -------------------------------------------------------
     Calendar
     ------------------------------------------------------- */

  function countInMonth(m) {
    return FLOWERS.filter(function (f) { return f.bloom.indexOf(m) > -1; }).length;
  }

  function renderCalendar() {
    el.calendarStrip.innerHTML = MONTH_SHORT.map(function (num, idx) {
      const m = idx + 1;
      const count = countInMonth(m);
      const active = state.calendarMonth === m;
      return '<button class="month-cell ' + (active ? "is-active " : "") + (count ? "" : "is-empty") + '" type="button" data-month="' + m + '" aria-pressed="' + active + '" aria-label="' + m + ' 月，' + count + ' 种花在花期">' +
        '<span class="m-no">' + pad(m) + "</span>" +
        '<span class="m-label">' + MONTH_NAMES[idx] + "</span>" +
        '<span class="m-count"></span>' +
      "</button>";
    }).join("");
  }

  function renderSeason() {
    const m = state.calendarMonth;
    const list = FLOWERS.filter(function (f) { return f.bloom.indexOf(m) > -1; });
    el.seasonTitle.textContent = monthLabel(m) + " · 当季 " + list.length + " 种";
    if (!list.length) {
      el.seasonPreview.innerHTML = '<p class="season-empty">这个月没有收录的花。换一个月份，或直接看索引。</p>';
      return;
    }
    let html = list.slice(0, 6).map(renderSeasonItem).join("");
    if (list.length > 6) {
      html += '<p class="season-empty">还有 ' + (list.length - 6) + " 种，点上方「在索引中查看全部」。</p>";
    }
    el.seasonPreview.innerHTML = html;
  }

  /* -------------------------------------------------------
     Filters + index
     ------------------------------------------------------- */

  function populateFilters() {
    let monthOptions = '<option value="">全部月份</option>';
    for (let m = 1; m <= 12; m++) {
      monthOptions += '<option value="' + m + '">' + m + " 月</option>";
    }
    el.monthFilter.innerHTML = monthOptions;

    el.occasionFilter.innerHTML = '<option value="">全部场合</option>' + OCCASIONS.map(function (o) {
      return '<option value="' + escapeAttr(o.name) + '">' + escapeHTML(o.name) + "</option>";
    }).join("");

    const shapes = SHAPE_ORDER.filter(function (shape) {
      return FLOWERS.some(function (f) { return f.shapeGroup === shape; });
    });
    el.shapeFilter.innerHTML = '<option value="">全部</option>' + shapes.map(function (shape) {
      return '<option value="' + escapeAttr(shape) + '">' + escapeHTML(shape) + "</option>";
    }).join("");

    el.colorFilters.innerHTML = COLOR_GROUPS.map(function (c) {
      return '<button class="color-filter" type="button" data-color="' + escapeAttr(c.name) + '" style="--c:' + escapeAttr(c.hex) + '" aria-label="筛选' + escapeAttr(c.name) + '色花" aria-pressed="false" title="' + escapeAttr(c.name) + '"></button>';
    }).join("");
  }

  function getFiltered() {
    const q = state.q.toLowerCase().trim();
    const tokens = q ? q.split(/\s+/) : [];
    return FLOWERS.filter(function (f) {
      if (state.month && f.bloom.indexOf(state.month) === -1) return false;
      if (state.color && !(f.colors || []).some(function (c) { return c.group === state.color; })) return false;
      if (state.occasion && (f.occasions || []).indexOf(state.occasion) === -1) return false;
      if (state.scent && f.scent.level !== state.scent) return false;
      if (state.shape && f.shapeGroup !== state.shape) return false;
      if (state.risk === "pets" && !f.toxicity.petsRisk) return false;
      if (state.risk === "children" && !f.toxicity.childRisk) return false;
      if (state.risk === "low" && f.toxicity.level !== "低") return false;
      if (tokens.length) {
        const haystack = [
          f.name, f.en, f.latin, f.family,
          (f.aliases || []).join(" "), f.form, f.origin,
          f.scent.desc,
          f.language.positive, f.language.negative, f.language.cultural,
          f.cultureMeanings.cn, f.cultureMeanings.west, f.cultureMeanings.jp,
          (f.taboos || []).join(" "), f.prompt, f.misuse, f.trivia,
          f.culture, f.poetry, f.myth, f.press, f.habitat, f.vaseLife,
          (f.pairs && f.pairs.line) || "",
          (f.occasions || []).join(" ")
        ].join(" ").toLowerCase();
        if (!tokens.every(function (t) { return haystack.indexOf(t) > -1; })) return false;
      }
      return true;
    }).sort(function (a, b) { return a.no - b.no; });
  }

  function renderFlowers() {
    const list = getFiltered();
    const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
    if (state.page > pages) state.page = pages;
    if (state.page < 1) state.page = 1;
    const start = (state.page - 1) * PER_PAGE;
    const slice = list.slice(start, start + PER_PAGE);

    const suggestions = FLOWERS.slice(0, 3).map(function (f) {
      return '<button type="button" data-open-flower="' + escapeAttr(f.id) + '">' + escapeHTML(f.name) + '</button>';
    }).join("");

    el.flowerGrid.innerHTML = slice.length
      ? slice.map(renderCard).join("")
      : '<div class="empty-state"><strong>没有找到这朵花</strong>换一个关键词，或清除一两个筛选条件。花谱不是搜索引擎，有时少一个条件反而更接近。<div class="empty-suggestions">' + suggestions + '</div></div>';

    el.resultCount.textContent = list.length
      ? "共 " + list.length + " 条 · 第 " + state.page + " / " + pages + " 页"
      : "共 0 条";

    renderPagination(pages);
    renderActiveFilters();
    syncControls();
    updateFavButtons();
    syncURL();
  }

  function renderPagination(pages) {
    if (pages <= 1) {
      el.pagination.innerHTML = "";
      return;
    }
    let html = '<button type="button" data-page="' + (state.page - 1) + '" ' + (state.page === 1 ? "disabled" : "") + ' aria-label="上一页">←</button>';
    for (let p = 1; p <= pages; p++) {
      html += '<button type="button" data-page="' + p + '" class="' + (p === state.page ? "is-active" : "") + '" aria-current="' + (p === state.page ? "page" : "false") + '">' + p + "</button>";
    }
    html += '<button type="button" data-page="' + (state.page + 1) + '" ' + (state.page === pages ? "disabled" : "") + ' aria-label="下一页">→</button>';
    html += '<span class="page-info">' + pad(state.page) + " / " + pad(pages) + "</span>";
    el.pagination.innerHTML = html;
  }

  function renderActiveFilters() {
    const chips = [];
    function chip(key, label) {
      chips.push('<span class="filter-chip">' + escapeHTML(label) + '<button type="button" data-remove-filter="' + key + '" aria-label="移除' + escapeAttr(label) + '">×</button></span>');
    }
    if (state.q) chip("q", "搜索：" + (state.q.length > 18 ? state.q.slice(0, 18) + "…" : state.q));
    if (state.month) chip("month", monthLabel(state.month));
    if (state.color) chip("color", state.color + "色");
    if (state.occasion) chip("occasion", state.occasion);
    if (state.scent) chip("scent", "花香：" + state.scent);
    if (state.risk === "pets") chip("risk", "对猫狗有风险");
    if (state.risk === "children") chip("risk", "对儿童有风险");
    if (state.risk === "low") chip("risk", "风险较低");
    if (state.shape) chip("shape", state.shape);
    el.activeFilters.innerHTML = chips.join("");
  }

  function syncControls() {
    el.monthFilter.value = state.month ? String(state.month) : "";
    el.occasionFilter.value = state.occasion;
    el.scentFilter.value = state.scent;
    el.riskFilter.value = state.risk;
    el.shapeFilter.value = state.shape;
    el.searchClear.hidden = !state.q;
    $$(".color-filter", el.colorFilters).forEach(function (btn) {
      const on = btn.dataset.color === state.color;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", String(on));
    });
  }

  function setFilter(key, value) {
    state[key] = value;
    state.page = 1;
    if (key === "month") {
      state.calendarMonth = value || state.calendarMonth;
      renderCalendar();
      renderSeason();
    }
    renderFlowers();
  }

  function clearAllFilters(keepCalendar) {
    state.q = "";
    state.month = null;
    state.color = "";
    state.occasion = "";
    state.scent = "";
    state.risk = "";
    state.shape = "";
    state.page = 1;
    if (el.search) el.search.value = "";
    if (!keepCalendar) state.calendarMonth = state.calendarMonth || 1;
    renderFlowers();
    renderCalendar();
    renderSeason();
  }

  /* -------------------------------------------------------
     Bouquets
     ------------------------------------------------------- */

  function renderBouquets() {
    el.bouquetGrid.innerHTML = BOUQUETS.map(function (b) {
      const flowers = (b.flowers || []).map(flowerById).filter(Boolean);
      const palette = (b.palette || []).map(function (hex) {
        return '<span style="background:' + escapeAttr(hex) + '" title="' + escapeAttr(hex) + '"></span>';
      }).join("");
      const names = flowers.map(function (f) { return "<span>" + escapeHTML(f.name) + "</span>"; }).join("");
      return '<article class="bouquet-card" style="--accent:' + escapeAttr(paletteAccent(b.palette)) + '">' +
        '<div class="bouquet-card-top"><span class="b-no">FORMULA ' + escapeHTML(b.no) + '</span><span class="b-occ">' + escapeHTML(b.occasion) + '</span></div>' +
        '<h3>' + escapeHTML(b.name) + '</h3>' +
        '<p class="b-en">' + escapeHTML(b.en) + '</p>' +
        '<div class="b-palette" aria-hidden="true">' + palette + '</div>' +
        '<div class="b-flowers">' + names + '</div>' +
        '<p class="b-line">“' + escapeHTML(b.line) + '”</p>' +
        '<p class="b-note">' + escapeHTML(b.note) + '</p>' +
        '<div class="b-actions">' +
          '<button class="text-btn" type="button" data-open-bouquet="' + escapeAttr(b.id) + '">查看配方 →</button>' +
          '<button class="text-btn b-print" type="button" data-print-bouquet="' + escapeAttr(b.id) + '">打印 A5</button>' +
        '</div>' +
      "</article>";
    }).join("");
  }

  /* -------------------------------------------------------
     Drawer
     ------------------------------------------------------- */


  /* -------------------------------------------------------
     Modal shell, basket, compare, taboo checker
     ------------------------------------------------------- */

  function openModal(html, modifier) {
    if (modalEl) closeModal({ instant: true, restore: false });
    modalLastFocus = document.activeElement;
    el.modalRoot.innerHTML =
      '<div class="modal-backdrop" data-close-modal></div>' +
      '<div class="modal ' + (modifier || "") + '" role="dialog" aria-modal="true" aria-labelledby="modalTitle">' + html + "</div>";
    modalEl = $(".modal", el.modalRoot);
    modalBackdrop = $(".modal-backdrop", el.modalRoot);
    document.body.classList.add("modal-open");
    requestAnimationFrame(function () {
      if (modalBackdrop) modalBackdrop.classList.add("is-open");
      if (modalEl) modalEl.classList.add("is-open");
    });
    const close = $(".modal-close", modalEl);
    if (close) setTimeout(function () { close.focus({ preventScroll: true }); }, 30);
  }

  function closeModal(options) {
    options = options || {};
    if (!modalEl) return;
    const dying = modalEl;
    const dyingBackdrop = modalBackdrop;
    const restore = modalLastFocus;
    modalEl = null;
    modalBackdrop = null;
    document.body.classList.remove("modal-open");
    if (options.instant) {
      el.modalRoot.innerHTML = "";
    } else {
      dying.classList.remove("is-open");
      if (dyingBackdrop) dyingBackdrop.classList.remove("is-open");
      setTimeout(function () {
        if (dying.parentNode) dying.remove();
        if (dyingBackdrop && dyingBackdrop.parentNode) dyingBackdrop.remove();
      }, 260);
    }
    if (options.restore !== false && restore && restore.isConnected) {
      setTimeout(function () { restore.focus({ preventScroll: true }); }, options.instant ? 0 : 260);
    }
  }

  function toolTabsHTML() {
    return '<div class="modal-tabs" role="tablist">' +
      '<button class="modal-tab ' + (state.toolTab === "basket" ? "is-active" : "") + '" type="button" data-tool-tab="basket" role="tab" aria-selected="' + (state.toolTab === "basket") + '">花篮 <span class="tab-count">' + state.favs.length + '</span></button>' +
      '<button class="modal-tab ' + (state.toolTab === "compare" ? "is-active" : "") + '" type="button" data-tool-tab="compare" role="tab" aria-selected="' + (state.toolTab === "compare") + '">对比 <span class="tab-count">' + state.compare.length + '</span></button>' +
      '<button class="modal-tab ' + (state.toolTab === "checker" ? "is-active" : "") + '" type="button" data-tool-tab="checker" role="tab" aria-selected="' + (state.toolTab === "checker") + '">禁忌检查</button>' +
    '</div>';
  }

  function openTool(tab) {
    state.toolTab = tab || state.toolTab || "basket";
    if (modalEl && modalEl.classList.contains("tool-modal")) {
      renderToolBody();
      return;
    }
    openModal(
      '<div class="modal-head"><div><p class="modal-kicker">YOUR FLOWER BASKET</p><h2 class="modal-title" id="modalTitle">花篮与工具</h2><p class="modal-sub">收藏、对比，或按使用场景做一次风险初筛。最多 8 朵，对比最多 4 朵。</p></div><button class="modal-close" type="button" data-close-modal aria-label="关闭">×</button></div>' +
      toolTabsHTML() +
      '<div class="modal-body" id="toolBody"></div>',
      "tool-modal"
    );
    renderToolBody();
  }

  function updateToolTabCounts() {
    if (!modalEl) return;
    $$(".modal-tab", modalEl).forEach(function (btn) {
      const key = btn.getAttribute("data-tool-tab");
      const active = key === state.toolTab;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", String(active));
      const count = btn.querySelector(".tab-count");
      if (count) {
        if (key === "basket") count.textContent = String(state.favs.length);
        if (key === "compare") count.textContent = String(state.compare.length);
      }
    });
  }

  function updateCompareInputs() {
    if (!modalEl) return;
    $$("[data-compare-id]", modalEl).forEach(function (cb) {
      const id = cb.getAttribute("data-compare-id");
      const on = state.compare.indexOf(id) > -1;
      cb.checked = on;
      cb.disabled = !on && state.compare.length >= MAX_COMPARE;
      const item = cb.closest(".basket-item");
      if (item) item.classList.toggle("is-compare", on);
    });
    updateToolTabCounts();
  }

  function renderToolBody() {
    if (!modalEl || !$("#toolBody")) return;
    const body = $("#toolBody");
    if (state.toolTab === "basket") body.innerHTML = basketBodyHTML();
    else if (state.toolTab === "compare") body.innerHTML = compareBodyHTML();
    else body.innerHTML = checkerBodyHTML();
    updateToolTabCounts();
    if (state.toolTab === "basket") updateCompareInputs();
  }

  function basketBodyHTML() {
    const favs = state.favs.map(flowerById).filter(Boolean);
    if (!favs.length) {
      return '<div class="basket-empty"><strong>花篮还是空的</strong>在花卡右上角点「＋」，或在详情抽屉里点「加入花篮」。<div class="empty-suggestions" style="margin-top:16px"><button type="button" data-close-modal>继续看花</button></div></div>';
    }
    const items = favs.map(function (f) {
      const picked = state.compare.indexOf(f.id) > -1;
      const disabled = !picked && state.compare.length >= MAX_COMPARE;
      return '<article class="basket-item ' + (picked ? "is-compare" : "") + '">' +
        '<div class="basket-fig">' + flowerSVG(f) + '</div>' +
        '<div class="basket-meta"><button class="basket-name" type="button" data-open-flower="' + escapeAttr(f.id) + '">' + escapeHTML(f.name) + '</button>' +
          '<span class="basket-latin">' + escapeHTML(f.latin) + '</span>' +
          '<span class="basket-latin">花期 ' + escapeHTML(formatMonths(f.bloom)) + ' · 毒性 ' + escapeHTML(f.toxicity.level) + '</span></div>' +
        '<div class="basket-actions">' +
          '<label class="compare-pick"><input type="checkbox" data-compare-id="' + escapeAttr(f.id) + '" ' + (picked ? "checked" : "") + ' ' + (disabled ? "disabled" : "") + '> 对比</label>' +
          '<button class="basket-remove" type="button" data-remove-fav="' + escapeAttr(f.id) + '">移除</button>' +
        '</div>' +
      '</article>';
    }).join("");
    return '<div class="basket-toolbar"><span>已选 ' + favs.length + ' / ' + MAX_FAVS + ' 朵</span><div class="basket-toolbar-actions">' +
      '<button class="mini-action" type="button" data-export-basket>导出 CSV</button>' +
      '<button class="mini-action" type="button" data-print-basket>打印清单</button>' +
      '<button class="mini-action is-danger" type="button" data-clear-basket>清空</button>' +
    '</div></div>' +
    '<div class="basket-grid">' + items + '</div>' +
    '<p class="compare-note" style="margin-top:14px">勾选 2–4 朵进入「对比」。花篮存在本机 localStorage，不会上传。</p>';
  }

  function compareBodyHTML() {
    const list = state.compare.map(flowerById).filter(Boolean);
    if (list.length < 2) {
      return '<div class="basket-empty"><strong>先选 2–4 朵花</strong>回到「花篮」勾选要对比的花。对比会并排列出花期、花色、毒性、三文化花语和禁忌。<div class="empty-suggestions" style="margin-top:16px"><button type="button" data-tool-tab="basket">去花篮勾选</button></div></div>';
    }
    const head = list.map(function (f) {
      return '<th><span class="compare-head-name">' + escapeHTML(f.name) + '</span><span class="compare-head-latin">' + escapeHTML(f.latin) + '</span></th>';
    }).join("");
    function row(label, values) {
      return '<tr><td class="row-label">' + label + '</td>' + values.map(function (v) { return '<td>' + v + '</td>'; }).join("") + '</tr>';
    }
    const colorCell = function (f) {
      return (f.colors || []).map(function (c) {
        return '<span class="compare-dot"><i style="background:' + escapeAttr(c.hex) + '"></i>' + escapeHTML(c.name) + '</span>';
      }).join("");
    };
    const flowersCell = function (f) {
      return (f.occasions || []).map(function (o) { return escapeHTML(o); }).join(" / ") || "—";
    };
    const tabooCell = function (f) {
      return (f.taboos || []).slice(0, 2).map(function (t) { return escapeHTML(t); }).join("<br>");
    };
    const pairCell = function (f) {
      return (f.pairs.ids || []).map(function (id) { const p = flowerById(id); return p ? escapeHTML(p.name) : ""; }).join(" / ");
    };
    const rows = [
      row("花期", list.map(function (f) { return escapeHTML(formatMonths(f.bloom)); })),
      row("花色", list.map(colorCell)),
      row("花形", list.map(function (f) { return escapeHTML(f.form); })),
      row("花香", list.map(function (f) { return escapeHTML(f.scent.level); })),
      row("毒性", list.map(function (f) { const r = riskText(f); return escapeHTML(f.toxicity.level) + (r ? " · " + escapeHTML(r) : ""); })),
      row("适合", list.map(flowersCell)),
      row("禁忌", list.map(tabooCell)),
      row("中式", list.map(function (f) { return '<span class="compare-culture">' + escapeHTML(f.cultureMeanings.cn) + '</span>'; })),
      row("西式", list.map(function (f) { return '<span class="compare-culture">' + escapeHTML(f.cultureMeanings.west) + '</span>'; })),
      row("日式", list.map(function (f) { return '<span class="compare-culture">' + escapeHTML(f.cultureMeanings.jp) + '</span>'; })),
      row("搭配", list.map(function (f) { return '<span class="compare-culture">' + pairCell(f) + '</span>'; }))
    ].join("");
    return '<div class="basket-toolbar"><span>并排对比 ' + list.length + ' / ' + MAX_COMPARE + ' 朵</span><div class="basket-toolbar-actions"><button class="mini-action" type="button" data-clear-compare>清空对比</button></div></div>' +
      '<div class="compare-scroll"><table class="compare-table"><thead><tr><th class="row-label">项目</th>' + head + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="compare-note" style="margin-top:12px">对比只用于写作与选花参考；毒性标签不是兽医诊断，具体风险还取决于花材部位、摄入量和个体差异。</p>';
  }

  function checkerFlags(f) {
    const flags = [];
    const ctx = state.checkContexts;
    const tabooText = (f.taboos || []).join(" ");
    if (ctx.indexOf("pets") > -1 && f.toxicity.petsRisk) flags.push("猫狗风险");
    if (ctx.indexOf("children") > -1 && f.toxicity.childRisk) flags.push("儿童风险");
    if (ctx.indexOf("hospital") > -1) {
      if (f.scent.level === "浓") flags.push("探病：浓香");
      if (f.toxicity.petsRisk || f.toxicity.childRisk) flags.push("探病：误食风险");
      if (/白菊|黄菊|悼念|葬礼/.test(tabooText) || f.name === "菊花" || f.name === "乒乓菊" || f.name === "彼岸花") flags.push("探病：悼念语境");
    }
    if (ctx.indexOf("wedding") > -1) {
      if (f.scent.level === "浓") flags.push("婚礼：浓香");
      if (/悼念|葬礼|白菊|黄菊/.test(tabooText) || (f.occasions || []).indexOf("悼念") > -1) flags.push("婚礼：悼念语境");
      if (f.toxicity.petsRisk || f.toxicity.childRisk) flags.push("婚礼：误食风险");
    }
    if (ctx.indexOf("mourning") > -1) {
      if ((f.occasions || []).indexOf("婚礼") > -1 || (f.occasions || []).indexOf("祝贺") > -1) flags.push("悼念：喜庆场合常用");
      if (f.scent.level === "浓") flags.push("悼念：浓香");
    }
    if (ctx.indexOf("scent") > -1 && f.scent.level === "浓") flags.push("浓香");
    return Array.from(new Set(flags));
  }

  function checkerBodyHTML() {
    const favs = state.favs.map(flowerById).filter(Boolean);
    if (!favs.length) {
      return '<div class="basket-empty"><strong>先放几朵花进花篮</strong>禁忌检查会基于花篮里的花，按「猫狗 / 儿童 / 探病 / 婚礼 / 悼念 / 浓香」逐项标出风险。<div class="empty-suggestions" style="margin-top:16px"><button type="button" data-close-modal>继续看花</button></div></div>';
    }
    const contexts = [
      ["pets", "猫狗"], ["children", "儿童"], ["hospital", "探病"],
      ["wedding", "婚礼"], ["mourning", "悼念"], ["scent", "忌浓香"]
    ];
    const chips = contexts.map(function (c) {
      const on = state.checkContexts.indexOf(c[0]) > -1;
      return '<button class="check-chip ' + (on ? "is-on" : "") + '" type="button" data-check-context="' + c[0] + '" aria-pressed="' + on + '">' + c[1] + '</button>';
    }).join("");
    if (!state.checkContexts.length) {
      return '<div class="check-contexts" role="group" aria-label="选择使用场景">' + chips + '</div>' +
        '<div class="checker-summary">先勾选至少一个场景，检查器才会给出风险提示。默认会检查猫狗与儿童。</div>';
    }
    let risky = 0;
    const items = favs.map(function (f) {
      const flags = checkerFlags(f);
      if (flags.length) risky++;
      const flagHTML = flags.length
        ? flags.map(function (x) { return '<span class="checker-flag">' + escapeHTML(x) + '</span>'; }).join("")
        : '<span class="checker-flag is-ok">未触发所选风险</span>';
      const suggestions = (f.pairs.ids || []).map(function (id) {
        const p = flowerById(id);
        if (!p) return "";
        return '<button class="mini-action" type="button" data-open-flower="' + escapeAttr(p.id) + '">' + escapeHTML(p.name) + '</button>';
      }).join(" ");
      return '<article class="checker-item ' + (flags.length ? "is-risk" : "") + '">' +
        '<div class="checker-top"><span class="checker-name">' + escapeHTML(f.name) + '</span><span class="checker-level ' + (flags.length ? "is-risk" : "") + '">' + (flags.length ? "需注意" : "相对稳定") + '</span></div>' +
        '<div class="checker-flags">' + flagHTML + '</div>' +
        (suggestions ? '<p class="checker-suggest">可参考的相近花：<b>' + suggestions + '</b></p>' : "") +
      '</article>';
    }).join("");
    const summary = risky
      ? '花篮里 ' + favs.length + ' 朵，有 ' + risky + ' 朵触发当前所选风险。把「探病/婚礼/悼念」的花分开考虑会更安全。'
      : '花篮里 ' + favs.length + ' 朵，当前所选条件下没有触发明显风险；仍请确认花粉过敏与实际花材来源。';
    return '<div class="check-contexts" role="group" aria-label="选择使用场景">' + chips + '</div>' +
      '<div class="checker-summary ' + (risky ? "is-warn" : "") + '">' + summary + '</div>' +
      '<div class="checker-list">' + items + '</div>' +
      '<p class="compare-note" style="margin-top:12px">这是按标签做的初筛，不是兽医/医疗建议；花材部位、摄入量、农药残留与个体过敏都会改变风险。</p>';
  }

  function exportBasket() {
    const favs = state.favs.map(flowerById).filter(Boolean);
    if (!favs.length) { toast("花篮还是空的"); return; }
    function cell(v) {
      return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"';
    }
    const rows = [["id", "中文名", "English", "学名", "科属", "花期", "花色", "场合", "毒性", "猫狗风险", "儿童风险", "禁忌"]];
    favs.forEach(function (f) {
      rows.push([
        f.id, f.name, f.en, f.latin, f.family, formatMonths(f.bloom),
        (f.colors || []).map(function (c) { return c.name + " " + c.hex; }).join(" / "),
        (f.occasions || []).join(" / "), f.toxicity.level,
        f.toxicity.petsRisk ? "有" : "低", f.toxicity.childRisk ? "有" : "低",
        (f.taboos || []).join(" | ")
      ]);
    });
    const csv = "\uFEFF" + rows.map(function (r) { return r.map(cell).join(","); }).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "huapu-basket.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    toast("花篮 CSV 已导出");
  }

  function buildBasketPrint() {
    const favs = state.favs.map(flowerById).filter(Boolean);
    const rows = favs.map(function (f) {
      return '<div class="pc-basket-row"><div><b>' + escapeHTML(f.name) + '</b><small>' + escapeHTML(f.latin) + '</small></div>' +
        '<span>' + escapeHTML(formatMonths(f.bloom)) + ' · 毒性 ' + escapeHTML(f.toxicity.level) + '</span>' +
        '<span>' + escapeHTML((f.occasions || []).slice(0, 2).join(" / ")) + '</span></div>' +
        '<p class="pc-basket-why">“' + escapeHTML(f.language.positive) + '”</p>';
    }).join("");
    return '<div class="pc-inner">' +
      '<div class="pc-top"><div class="pc-brand">花谱<small>FLOWER CODEX</small></div><div class="pc-no">BASKET<br>选花清单 / A5</div></div>' +
      '<h2 class="pc-title">我的花篮</h2>' +
      '<p class="pc-latin">' + formatDateKey().replace(/-/g, ".") + ' · 共 ' + favs.length + ' 朵</p>' +
      '<div class="pc-basket-list">' + rows + '</div>' +
      '<div class="pc-foot"><p class="pc-disclaimer">免责声明：花语与毒性仅供创作参考，不要据此食用或药用。请使用园艺栽培花材，并先确认对方的花粉过敏、宠物与宗教/文化语境。</p><p class="pc-credit">Simon Workshop™</p></div>' +
    '</div>';
  }

  function printBasket() {
    if (!state.favs.length) { toast("花篮还是空的"); return; }
    doPrint(buildBasketPrint());
  }

  /* -------------------------------------------------------
     Daily flower card
     ------------------------------------------------------- */

  function dailyCardHTML(f) {
    const colors = (f.colors || []).map(function (c) {
      return '<span style="background:' + escapeAttr(c.hex) + '" title="' + escapeAttr(c.name) + '"></span>';
    }).join("");
    return '<div class="modal-head"><div><p class="modal-kicker">FLOWER OF THE DAY · ' + formatDateKey().replace(/-/g, ".") + '</p><h2 class="modal-title" id="modalTitle">今日花签</h2><p class="modal-sub">每天固定一支花；不是随机，是今天的注脚。</p></div><button class="modal-close" type="button" data-close-modal aria-label="关闭">×</button></div>' +
      '<div class="modal-body">' +
        '<div class="daily-card"><div>' +
          '<p class="daily-label">NO. ' + pad(f.no) + ' / FLOWER OF THE DAY</p>' +
          '<h2 class="daily-name">' + escapeHTML(f.name) + '</h2>' +
          '<p class="daily-latin">' + escapeHTML(f.latin) + '</p>' +
          '<p class="daily-family">' + escapeHTML(f.family) + '</p>' +
          '<p class="daily-line">“' + escapeHTML(f.language.positive) + '”</p>' +
          '<div class="daily-meta"><span>花期 ' + escapeHTML(formatMonths(f.bloom)) + '</span><span>花香 ' + escapeHTML(f.scent.level) + '</span><span>毒性 ' + escapeHTML(f.toxicity.level) + '</span></div>' +
          '<div class="daily-palette">' + colors + '</div>' +
        '</div><figure class="daily-fig">' + flowerSVG(f) + '<figcaption>形态示意</figcaption></figure></div>' +
        '<div class="daily-actions"><button class="btn btn-solid" type="button" data-daily-save>保存花签 PNG</button><button class="btn btn-ghost" type="button" data-open-flower="' + escapeAttr(f.id) + '">看详情</button><button class="btn btn-ghost" type="button" data-close-modal>关闭</button></div>' +
        '<p class="daily-footnote">花签是每日固定的创作提示，不是运势。花语因文化而异；毒性仅供创作参考，不要据此食用或药用。</p>' +
      '</div>';
  }

  function openDaily() {
    const f = getDailyFlower();
    if (!f) return;
    openModal(dailyCardHTML(f), "modal--daily");
  }

  function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
    let line = "";
    const chars = String(text).split("");
    for (let i = 0; i < chars.length; i++) {
      const next = line + chars[i];
      if (ctx.measureText(next).width > maxWidth && line) {
        ctx.fillText(line, x, y);
        y += lineHeight;
        line = chars[i];
      } else {
        line = next;
      }
    }
    if (line) ctx.fillText(line, x, y);
    return y + lineHeight;
  }

  function saveDailyImage() {
    const f = getDailyFlower();
    if (!f) return;
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1440;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#F7F2E9";
    ctx.fillRect(0, 0, 1080, 1440);
    ctx.strokeStyle = "#A0432B";
    ctx.lineWidth = 3;
    ctx.strokeRect(46, 46, 988, 1348);
    ctx.fillStyle = "#A0432B";
    ctx.font = "20px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("花谱 / FLOWER CODEX", 86, 128);
    ctx.textAlign = "right";
    ctx.fillStyle = "#211C17";
    ctx.font = "20px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText(formatDateKey().replace(/-/g, "."), 994, 128);
    ctx.textAlign = "left";
    ctx.fillStyle = "#A0432B";
    ctx.font = "18px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("NO. " + pad(f.no) + " / FLOWER OF THE DAY", 86, 220);
    ctx.fillStyle = "#211C17";
    ctx.font = "76px 'Songti SC', 'STSong', serif";
    ctx.fillText(f.name, 86, 360);
    ctx.font = "italic 26px 'Songti SC', 'STSong', serif";
    ctx.fillStyle = "rgba(33,28,23,.7)";
    ctx.fillText(f.latin, 88, 404);
    ctx.font = "20px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillStyle = "rgba(33,28,23,.65)";
    ctx.fillText(f.family, 88, 442);
    ctx.fillStyle = "#211C17";
    ctx.font = "30px 'Songti SC', 'STSong', serif";
    const lineEnd = wrapCanvasText(ctx, "“" + f.language.positive + "”", 86, 540, 560, 48);
    ctx.fillStyle = "rgba(33,28,23,.72)";
    ctx.font = "20px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("花期 " + formatMonths(f.bloom) + " · 花香 " + f.scent.level + " · 毒性 " + f.toxicity.level, 86, lineEnd + 12);
    (f.colors || []).forEach(function (c, i) {
      const x = 86 + i * 52;
      ctx.fillStyle = c.hex;
      ctx.fillRect(x, lineEnd + 46, 34, 34);
      ctx.strokeStyle = "rgba(33,28,23,.25)";
      ctx.strokeRect(x, lineEnd + 46, 34, 34);
      ctx.fillStyle = "rgba(33,28,23,.62)";
      ctx.font = "16px -apple-system, BlinkMacSystemFont, sans-serif";
      ctx.fillText(c.name, x, lineEnd + 106);
    });
    const cultureY = lineEnd + 188;
    ctx.strokeStyle = "rgba(33,28,23,.22)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(86, cultureY - 28);
    ctx.lineTo(994, cultureY - 28);
    ctx.stroke();
    ctx.fillStyle = "#A0432B";
    ctx.font = "17px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("文化注记 / CULTURE", 86, cultureY);
    ctx.fillStyle = "rgba(33,28,23,.72)";
    ctx.font = "20px -apple-system, BlinkMacSystemFont, sans-serif";
    const afterCulture = wrapCanvasText(ctx, f.language.cultural, 86, cultureY + 32, 900, 30);
    const promptY = Math.min(Math.max(afterCulture + 22, cultureY + 150), 1120);
    ctx.fillStyle = "#A0432B";
    ctx.font = "17px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("创作提示 / PROMPT", 86, promptY);
    ctx.fillStyle = "rgba(33,28,23,.72)";
    ctx.font = "21px -apple-system, BlinkMacSystemFont, sans-serif";
    wrapCanvasText(ctx, f.prompt, 86, promptY + 32, 900, 31);
    ctx.fillStyle = "rgba(33,28,23,.55)";
    ctx.font = "18px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("花语因文化而异；毒性仅供创作参考，不要据此食用或药用。", 86, 1270);
    ctx.fillText("这束花，该送什么？ · Simon Workshop™", 86, 1310);

    const svgText = flowerSVG(f);
    const svgBlob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 690, 190, 300, 375);
      URL.revokeObjectURL(url);
      downloadCanvas(canvas);
    };
    img.onerror = function () {
      URL.revokeObjectURL(url);
      downloadCanvas(canvas);
    };
    img.src = url;
  }

  function downloadCanvas(canvas) {
    canvas.toBlob(function (blob) {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "huapu-daily-" + formatDateKey() + ".png";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      toast("今日花签已保存");
    }, "image/png");
  }

  function openFlower(id, options) {
    const f = flowerById(id);
    if (!f) return;
    options = options || {};
    if (options.fromDrawer && currentDrawer) drawerStack.push(currentDrawer);
    ensureDrawer();
    currentDrawer = { type: "flower", id: id };
    $("#drawerBody").innerHTML = flowerDrawerHTML(f);
    $("#drawerKicker").textContent = "FLOWER / NO. " + pad(f.no);
    document.title = "花谱 · " + f.name;
    var scroll = $(".drawer-scroll");
    if (scroll) scroll.scrollTop = 0;
    if (options.push !== false) setHash(id);
    updateDrawerBack();
    if (options.focus !== false) focusDrawer();
  }

  function openBouquet(id, options) {
    const b = bouquetById(id);
    if (!b) return;
    options = options || {};
    if (options.fromDrawer && currentDrawer) drawerStack.push(currentDrawer);
    ensureDrawer();
    currentDrawer = { type: "bouquet", id: id };
    $("#drawerBody").innerHTML = bouquetDrawerHTML(b);
    $("#drawerKicker").textContent = "FORMULA / " + b.no;
    document.title = "花谱 · " + b.name;
    var scroll = $(".drawer-scroll");
    if (scroll) scroll.scrollTop = 0;
    if (options.push !== false) setHash(id);
    updateDrawerBack();
    if (options.focus !== false) focusDrawer();
  }

  function updateDrawerBack() {
    const btn = drawerEl && $("[data-drawer-back]", drawerEl);
    if (!btn) return;
    btn.hidden = drawerStack.length === 0;
    btn.setAttribute("aria-label", drawerStack.length ? "返回上一朵花" : "返回上一朵花");
  }

  function ensureDrawer() {
    if (drawerEl) return;
    lastFocus = document.activeElement;
    el.drawerRoot.innerHTML =
      '<div class="drawer-backdrop" data-close-drawer></div>' +
      '<aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="drawerTitle">' +
        '<div class="drawer-head">' +
          '<div class="drawer-head-left"><button class="drawer-back" type="button" data-drawer-back hidden aria-label="返回上一朵花">←</button><span class="drawer-kicker" id="drawerKicker">FLOWER / DETAIL</span></div>' +
          '<div class="drawer-head-right"><button class="drawer-close" type="button" data-close-drawer aria-label="关闭详情">×</button></div>' +
        '</div>' +
        '<div class="drawer-scroll"><div class="drawer-body" id="drawerBody"></div></div>' +
      '</aside>';
    backdropEl = $(".drawer-backdrop", el.drawerRoot);
    drawerEl = $(".drawer", el.drawerRoot);
    document.body.classList.add("drawer-open");
    requestAnimationFrame(function () {
      if (backdropEl) backdropEl.classList.add("is-open");
      if (drawerEl) drawerEl.classList.add("is-open");
    });
    backdropEl.addEventListener("click", function () { closeDrawer(); });
  }

  function focusDrawer() {
    const close = $(".drawer-close", el.drawerRoot);
    if (close) close.focus({ preventScroll: true });
  }

  function closeDrawer(options) {
    options = options || {};
    if (!drawerEl) return;
    const dyingDrawer = drawerEl;
    const dyingBackdrop = backdropEl;
    const restore = lastFocus;
    drawerEl = null;
    backdropEl = null;
    currentDrawer = null;
    drawerStack = [];
    document.body.classList.remove("drawer-open");
    dyingDrawer.classList.remove("is-open");
    if (dyingBackdrop) dyingBackdrop.classList.remove("is-open");
    clearTimeout(closeTimer);
    closeTimer = setTimeout(function () {
      if (dyingDrawer.parentNode) dyingDrawer.remove();
      if (dyingBackdrop && dyingBackdrop.parentNode) dyingBackdrop.remove();
      if (restore && restore.isConnected) restore.focus({ preventScroll: true });
    }, 320);
    document.title = "花谱 · 这束花，该送什么？";
    if (options.clearHash !== false) clearHash();
  }

  function setHash(id) {
    try {
      history.replaceState(null, "", location.href.split("#")[0] + "#" + id);
    } catch (err) {
      /* file:// can be restrictive in some browsers; hash still works via click. */
    }
  }

  function clearHash() {
    try {
      history.replaceState(null, "", location.href.split("#")[0]);
    } catch (err) { /* ignore */ }
  }

  function flowerDrawerHTML(f) {
    const occ = (f.occasions || []).map(function (o) { return "<span>" + escapeHTML(o) + "</span>"; }).join("");
    const taboos = (f.taboos || []).map(function (t) { return "<span>" + escapeHTML(t) + "</span>"; }).join("");
    const colors = (f.colors || []).map(function (c) {
      return '<span class="d-color"><i style="background:' + escapeAttr(c.hex) + '"></i>' + escapeHTML(c.name) + ' <code>' + escapeHTML(c.hex) + "</code></span>";
    }).join("");
    const bloom = MONTH_SHORT.map(function (_, idx) {
      const m = idx + 1;
      const on = f.bloom.indexOf(m) > -1;
      return '<span class="d-bloom-cell ' + (on ? "is-on" : "") + '"><i></i><span>' + m + "</span></span>";
    }).join("");
    const pairLinks = (f.pairs.ids || []).map(function (id) {
      const p = flowerById(id);
      if (!p) return "";
      return '<button class="pair-link" type="button" data-open-flower="' + escapeAttr(p.id) + '"><i style="background:' + escapeAttr(firstColor(p)) + '"></i>' + escapeHTML(p.name) + "</button>";
    }).join("");

    const data = [
      ["花形", f.form],
      ["花序", f.inflorescence],
      ["花径", f.diameter],
      ["株高", f.height],
      ["花色", (f.colors || []).map(function (c) { return c.name; }).join(" / ")],
      ["花香", f.scent.level + " · " + f.scent.desc],
      ["产地", f.origin],
      ["生境", f.habitat]
    ];

    return '<div class="d-hero">' +
        '<div>' +
          '<p class="d-no">NO. ' + pad(f.no) + ' / FLOWER</p>' +
          '<h2 class="d-name" id="drawerTitle">' + escapeHTML(f.name) + '</h2>' +
          '<p class="d-latin">' + escapeHTML(f.latin) + '</p>' +
          '<p class="d-family">' + escapeHTML(f.family) + '</p>' +
          '<p class="d-aliases">别名 / ' + escapeHTML((f.aliases || []).join(" · ") || "—") + '</p>' +
        '</div>' +
        '<figure class="d-fig">' + flowerSVG(f) + '<figcaption>形态示意 · 非照片</figcaption></figure>' +
      '</div>' +
      '<div class="d-stats">' +
        '<div class="d-stat"><span>花期</span><strong>' + escapeHTML(formatMonths(f.bloom)) + '</strong></div>' +
        '<div class="d-stat"><span>花香</span><strong>' + escapeHTML(f.scent.level) + '</strong></div>' +
        '<div class="d-stat"><span>瓶插</span><strong>' + escapeHTML(f.vaseLife) + '</strong></div>' +
        '<div class="d-stat"><span>毒性</span><strong>' + escapeHTML(f.toxicity.level) + '</strong></div>' +
      '</div>' +
      '<div class="d-bloom" aria-label="花期月份">' + bloom + '</div>' +
      '<div class="d-colors">' + colors + '</div>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>花语</h3><span class="d-section-no">LANGUAGE</span></div>' +
        '<div class="mean-grid">' +
          '<div class="mean-cell"><span>中式</span><p>' + escapeHTML(f.cultureMeanings.cn) + '</p></div>' +
          '<div class="mean-cell"><span>西式</span><p>' + escapeHTML(f.cultureMeanings.west) + '</p></div>' +
          '<div class="mean-cell"><span>日式</span><p>' + escapeHTML(f.cultureMeanings.jp) + '</p></div>' +
        '</div>' +
        '<div class="lang-pair">' +
          '<div class="lang-block"><span>正面</span><p>' + escapeHTML(f.language.positive) + '</p></div>' +
          '<div class="lang-block is-negative"><span>负面 / 阴影</span><p>' + escapeHTML(f.language.negative) + '</p></div>' +
        '</div>' +
        '<p class="d-prose" style="margin-top:14px">' + escapeHTML(f.language.cultural) + '</p>' +
      '</section>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>适合 / 不要送</h3><span class="d-section-no">OCCASION</span></div>' +
        '<div class="tag-row">' + occ + '</div>' +
        '<div class="tag-row is-taboo" style="margin-top:8px">' + taboos + '</div>' +
      '</section>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>安全</h3><span class="d-section-no">SAFETY</span></div>' +
        '<div class="safety">' +
          '<div class="safety-level">毒性等级 / <b>' + escapeHTML(f.toxicity.level) + '</b></div>' +
          '<p><strong>猫狗</strong> · ' + escapeHTML(f.toxicity.pets) + '</p>' +
          '<p><strong>儿童</strong> · ' + escapeHTML(f.toxicity.children) + '</p>' +
          '<p class="safety-note">' + escapeHTML(f.toxicity.note) + ' 花语与毒性仅供创作参考，不要据此食用或药用。</p>' +
        '</div>' +
      '</section>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>形态档案</h3><span class="d-section-no">BOTANY</span></div>' +
        '<div class="data-grid">' + data.map(function (row) {
          return '<div class="data-row"><span>' + escapeHTML(row[0]) + '</span><strong>' + escapeHTML(row[1]) + '</strong></div>';
        }).join("") + '</div>' +
      '</section>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>压花 / 干花</h3><span class="d-section-no">PRESSED</span></div>' +
        '<p class="d-prose">' + escapeHTML(f.press) + '</p>' +
      '</section>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>文化 · 诗词 · 神话</h3><span class="d-section-no">CULTURE</span></div>' +
        '<div class="note-list">' +
          '<div class="note-item"><strong>文化</strong><p>' + escapeHTML(f.culture) + '</p></div>' +
          '<div class="note-item"><strong>诗词</strong><p>' + escapeHTML(f.poetry) + '</p></div>' +
          '<div class="note-item"><strong>神话 / 传说</strong><p>' + escapeHTML(f.myth) + '</p></div>' +
        '</div>' +
      '</section>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>创作笔记</h3><span class="d-section-no">NOTES</span></div>' +
        '<div class="note-list">' +
          '<div class="note-item"><strong>创作提示</strong><p>' + escapeHTML(f.prompt) + '</p></div>' +
          '<div class="note-item"><strong>常见误用</strong><p>' + escapeHTML(f.misuse) + '</p></div>' +
          '<div class="note-item"><strong>冷知识</strong><p>' + escapeHTML(f.trivia) + '</p></div>' +
        '</div>' +
      '</section>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>搭配</h3><span class="d-section-no">PAIRS</span></div>' +
        '<div class="pair-links">' + pairLinks + '</div>' +
        '<p class="pair-line">' + escapeHTML(f.pairs.line) + '</p>' +
      '</section>' +

      '<div class="d-actions">' +
        '<button class="btn btn-solid" type="button" data-print-flower="' + escapeAttr(f.id) + '">打印 A5 花卡</button>' +
        '<button class="btn btn-ghost ' + (isFav(f.id) ? "is-on" : "") + '" type="button" data-fav="' + escapeAttr(f.id) + '" data-fav-style="action" aria-pressed="' + isFav(f.id) + '">' + (isFav(f.id) ? "已加入花篮" : "加入花篮") + '</button>' +
        '<button class="btn btn-ghost" type="button" data-copy="' + escapeAttr(f.id) + '">复制深链接</button>' +
        '<button class="btn btn-ghost" type="button" data-close-drawer>关闭</button>' +
      '</div>' +
      '<p class="d-footnote">免责声明：花语与毒性仅供创作参考，不要据此食用或药用。花图是按花瓣数、花形与花色生成的「形态示意」，不是照片，也不能替代植物学鉴定。</p>';
  }

  function bouquetDrawerHTML(b) {
    const flowers = (b.flowers || []).map(flowerById).filter(Boolean);
    const flowerRows = flowers.map(function (f) {
      return '<button class="bd-flower" type="button" data-open-flower="' + escapeAttr(f.id) + '">' +
        flowerSVG(f) +
        '<span class="nf"><b>' + escapeHTML(f.name) + '</b><small>' + escapeHTML(f.latin) + '</small></span>' +
      "</button>";
    }).join("");
    const palette = (b.palette || []).map(function (hex, idx) {
      const name = (b.paletteNames || [])[idx] || hex;
      return '<span style="background:' + escapeAttr(hex) + '" title="' + escapeAttr(name) + ' ' + escapeAttr(hex) + '"></span>';
    }).join("");
    const warnings = (b.warnings || []).map(function (w) {
      return "<p><strong>注意</strong> · " + escapeHTML(w) + "</p>";
    }).join("");

    return '<div class="bd-hero">' +
        '<p class="d-no">FORMULA ' + escapeHTML(b.no) + " / " + escapeHTML(b.occasion) + '</p>' +
        '<h2 class="bd-title" id="drawerTitle">' + escapeHTML(b.name) + '</h2>' +
        '<p class="bd-sub">' + escapeHTML(b.en) + '</p>' +
        '<p class="bd-line">“' + escapeHTML(b.line) + '”</p>' +
        '<div class="bd-palette" aria-label="配色">' + palette + '</div>' +
      '</div>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>花材</h3><span class="d-section-no">INGREDIENTS</span></div>' +
        '<div class="bd-flowers">' + flowerRows + '</div>' +
      '</section>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>为什么这样配</h3><span class="d-section-no">WHY</span></div>' +
        '<p class="bd-note">' + escapeHTML(b.why) + '</p>' +
      '</section>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>配方说明</h3><span class="d-section-no">RECIPE</span></div>' +
        '<p class="bd-note">' + escapeHTML(b.note) + '</p>' +
        '<p class="bd-note" style="margin-top:10px"><strong>规格</strong> · ' + escapeHTML(b.size) + '</p>' +
      '</section>' +

      '<section class="d-section">' +
        '<div class="d-section-head"><h3>养护与风险</h3><span class="d-section-no">CARE</span></div>' +
        '<p class="bd-note">' + escapeHTML(b.care) + '</p>' +
        '<div class="bd-warn">' + warnings + '</div>' +
      '</section>' +

      '<div class="d-actions">' +
        '<button class="btn btn-solid" type="button" data-print-bouquet="' + escapeAttr(b.id) + '">打印 A5 花卡</button>' +
        '<button class="btn btn-ghost" type="button" data-copy="' + escapeAttr(b.id) + '">复制深链接</button>' +
        '<button class="btn btn-ghost" type="button" data-close-drawer>关闭</button>' +
      '</div>' +
      '<p class="d-footnote">免责声明：花语与毒性仅供创作参考，不要据此食用或药用。请使用园艺栽培花材，并先确认对方的花粉过敏、宠物与宗教/文化语境。</p>';
  }

  /* -------------------------------------------------------
     Print A5 cards
     ------------------------------------------------------- */

  function printBloom(months) {
    let bars = "";
    let labels = "";
    for (let m = 1; m <= 12; m++) {
      const on = months.indexOf(m) > -1;
      bars += '<i class="' + (on ? "on" : "") + '"></i>';
      labels += "<span>" + m + "</span>";
    }
    return '<div class="pc-bloom">' + bars + '</div><div class="pc-bloom-labels">' + labels + "</div>";
  }

  function buildPrintFlower(f) {
    const facts = [
      ["花期", formatMonths(f.bloom)],
      ["花香", f.scent.level],
      ["瓶插", f.vaseLife],
      ["毒性", f.toxicity.level]
    ];
    const meaning = [
      ["中式", f.cultureMeanings.cn],
      ["西式", f.cultureMeanings.west],
      ["日式", f.cultureMeanings.jp]
    ];
    const tags = (f.occasions || []).slice(0, 3).map(function (o) {
      return "<span>适合 · " + escapeHTML(o) + "</span>";
    }).join("") + (f.taboos || []).slice(0, 1).map(function (t) {
      const short = t.length > 42 ? t.slice(0, 42) + "…" : t;
      return "<span>避开 · " + escapeHTML(short) + "</span>";
    }).join("");

    return '<div class="pc-inner">' +
      '<div class="pc-top"><div class="pc-brand">花谱<small>FLOWER CODEX</small></div><div class="pc-no">NO. ' + pad(f.no) + '<br>形态示意 / A5 花卡</div></div>' +
      '<div class="pc-head"><div>' +
        '<h2 class="pc-title">' + escapeHTML(f.name) + '</h2>' +
        '<p class="pc-latin">' + escapeHTML(f.latin) + '</p>' +
        '<p class="pc-family">' + escapeHTML(f.family) + '</p>' +
        '<p class="pc-alias">别名 / ' + escapeHTML((f.aliases || []).join(" · ") || "—") + '</p>' +
      '</div><figure class="pc-fig">' + flowerSVG(f) + '<figcaption>形态示意</figcaption></figure></div>' +
      printBloom(f.bloom) +
      '<div class="pc-facts">' + facts.map(function (row) {
        return '<div class="pc-fact"><span>' + escapeHTML(row[0]) + '</span><strong>' + escapeHTML(row[1]) + '</strong></div>';
      }).join("") + '</div>' +
      '<div class="pc-section"><h4>花语 · 三种文化</h4><div class="pc-meaning">' +
        meaning.map(function (m) {
          return '<div><b>' + escapeHTML(m[0]) + '</b>' + escapeHTML(m[1]) + '</div>';
        }).join("") +
      '</div></div>' +
      '<div class="pc-section"><h4>正面 / 阴影</h4><div class="pc-lang">' +
        '<div><b>正面</b>' + escapeHTML(f.language.positive) + '</div>' +
        '<div class="neg"><b>负面</b>' + escapeHTML(f.language.negative) + '</div>' +
      '</div></div>' +
      '<div class="pc-section"><h4>适合 / 不要送</h4><div class="pc-tags">' + tags + '</div></div>' +
      '<div class="pc-section"><h4>文化注记</h4><p class="pc-note">' + escapeHTML(f.language.cultural) + '</p></div>' +
      '<div class="pc-section"><h4>安全</h4><div class="pc-safety"><strong>毒性 ' + escapeHTML(f.toxicity.level) + '</strong> · 猫狗：' + escapeHTML(f.toxicity.pets) + ' 儿童：' + escapeHTML(f.toxicity.children) + '</div></div>' +
      '<div class="pc-foot"><p class="pc-disclaimer">免责声明：花语与毒性仅供创作参考，不要据此食用或药用。花图是形态示意，不是照片，也不能替代植物学鉴定。</p><p class="pc-credit">Simon Workshop™</p></div>' +
    '</div>';
  }

  function buildPrintBouquet(b) {
    const flowers = (b.flowers || []).map(flowerById).filter(Boolean);
    const occ = OCCASIONS.find(function (o) { return o.name === b.occasion; });
    const paletteNames = (b.paletteNames || []).join(" / ");
    const palette = (b.palette || []).map(function (hex) {
      return '<span style="background:' + escapeAttr(hex) + '"></span>';
    }).join("");
    const rows = flowers.map(function (f) {
      return '<div class="pc-bq-flower"><b>' + escapeHTML(f.name) + '</b><small>' + escapeHTML(f.latin) + '</small></div>';
    }).join("");
    const warnings = (b.warnings || []).slice(0, 2).map(function (w) {
      return "<p><strong>注意</strong> · " + escapeHTML(w) + "</p>";
    }).join("");

    return '<div class="pc-inner">' +
      '<div class="pc-top"><div class="pc-brand">花谱<small>FLOWER CODEX</small></div><div class="pc-no">FORMULA ' + escapeHTML(b.no) + '<br>A5 花卡</div></div>' +
      '<div class="pc-head" style="display:block;padding-bottom:2mm">' +
        '<h2 class="pc-bq-title">' + escapeHTML(b.name) + '</h2>' +
        '<p class="pc-bq-occ">' + escapeHTML(b.occasion) + " / " + escapeHTML(b.en) + '</p>' +
        '<div class="pc-bq-line">“' + escapeHTML(b.line) + '”</div>' +
        '<div class="pc-bq-palette">' + palette + '</div>' +
      '</div>' +
      '<div class="pc-section"><h4>为什么这样配</h4><p class="pc-bq-note">' + escapeHTML(b.why) + '</p></div>' +
      '<div class="pc-section"><h4>花材</h4><div class="pc-bq-flowers">' + rows + '</div></div>' +
      '<div class="pc-section"><h4>配方说明</h4><p class="pc-bq-note">' + escapeHTML(b.note) + '</p><p class="pc-bq-note" style="margin-top:1.4mm"><b>规格</b> · ' + escapeHTML(b.size) + '</p></div>' +
      '<div class="pc-section"><h4>配色</h4><p class="pc-bq-note">' + escapeHTML(paletteNames || "见色块") + '</p></div>' +
      (occ ? '<div class="pc-section"><h4>场合提醒</h4><p class="pc-bq-note">' + escapeHTML(occ.avoid) + '</p></div>' : '') +
      '<div class="pc-section"><h4>养护</h4><p class="pc-bq-note">' + escapeHTML(b.care) + '</p></div>' +
      '<div class="pc-section"><h4>注意</h4><div class="pc-safety">' + warnings + '</div></div>' +
      '<div class="pc-foot"><p class="pc-disclaimer">免责声明：花语与毒性仅供创作参考，不要据此食用或药用。请使用园艺栽培花材，并先确认对方的花粉过敏、宠物与宗教/文化语境。</p><p class="pc-credit">Simon Workshop™</p></div>' +
    '</div>';
  }

  function doPrint(html) {
    if (!el.printCard) return;
    el.printCard.innerHTML = html;
    el.printCard.setAttribute("aria-hidden", "false");
    window.print();
  }

  function printFlower(id) {
    const f = flowerById(id);
    if (f) doPrint(buildPrintFlower(f));
  }

  function printBouquet(id) {
    const b = bouquetById(id);
    if (b) doPrint(buildPrintBouquet(b));
  }

  window.addEventListener("afterprint", function () {
    if (el.printCard) {
      el.printCard.innerHTML = "";
      el.printCard.setAttribute("aria-hidden", "true");
    }
  });

  window.addEventListener("beforeprint", function () {
    if (!el.printCard || el.printCard.innerHTML.trim()) return;
    if (currentDrawer && currentDrawer.type === "flower") {
      const f = flowerById(currentDrawer.id);
      if (f) el.printCard.innerHTML = buildPrintFlower(f);
    } else if (currentDrawer && currentDrawer.type === "bouquet") {
      const b = bouquetById(currentDrawer.id);
      if (b) el.printCard.innerHTML = buildPrintBouquet(b);
    }
  });

  /* -------------------------------------------------------
     Links, copy, hash, keyboard
     ------------------------------------------------------- */

  function copyLink(id) {
    const url = location.href.split("#")[0] + "#" + id;
    function fallback() {
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
      document.body.removeChild(ta);
      toast(ok ? "链接已复制" : "复制失败，请手动复制地址栏");
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () {
        toast("链接已复制");
      }).catch(fallback);
    } else {
      fallback();
    }
  }

  function handleHash(initial) {
    const raw = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    if (!raw) {
      if (!initial && currentDrawer) closeDrawer({ clearHash: false });
      return;
    }
    const f = flowerById(raw);
    if (f) {
      openFlower(raw, { push: false, focus: !initial });
      return;
    }
    const b = bouquetById(raw);
    if (b) {
      openBouquet(raw, { push: false, focus: !initial });
      return;
    }
    if (currentDrawer) closeDrawer({ clearHash: false });
  }

  function isTypingTarget(target) {
    if (!target) return false;
    const tag = (target.tagName || "").toLowerCase();
    return tag === "input" || tag === "textarea" || tag === "select" || target.isContentEditable;
  }

  function trapFocus(e, root) {
    const container = root || drawerEl;
    if (!container) return;
    const focusable = $$('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', container).filter(function (node) {
      return node.offsetParent !== null || node === document.activeElement;
    });
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  /* -------------------------------------------------------
     Events
     ------------------------------------------------------- */

  document.addEventListener("click", function (e) {
    const target = e.target.closest("[data-open-flower], [data-open-bouquet], [data-occ-bouquet], [data-print-flower], [data-print-bouquet], [data-copy], [data-close-drawer], [data-close-modal], [data-drawer-back], [data-occasion], [data-filter-occasion], [data-month], [data-page], [data-remove-filter], [data-color], [data-month-all], [data-fav], [data-remove-fav], [data-clear-basket], [data-clear-compare], [data-export-basket], [data-print-basket], [data-tool-tab], [data-check-context], [data-daily-save], [data-quick-search]");
    if (!target) return;

    if (target.hasAttribute("data-fav")) {
      toggleFav(target.getAttribute("data-fav"));
      return;
    }
    if (target.hasAttribute("data-remove-fav")) {
      const id = target.getAttribute("data-remove-fav");
      state.favs = state.favs.filter(function (x) { return x !== id; });
      state.compare = state.compare.filter(function (x) { return x !== id; });
      saveBasketState();
      updateFavButtons();
      renderToolBody();
      return;
    }
    if (target.hasAttribute("data-drawer-back")) {
      const prev = drawerStack.pop();
      if (!prev) return;
      if (prev.type === "flower") openFlower(prev.id, { fromDrawer: false });
      else openBouquet(prev.id, { fromDrawer: false });
      return;
    }
    if (target.hasAttribute("data-close-modal")) {
      closeModal();
      return;
    }
    if (target.hasAttribute("data-tool-tab")) {
      state.toolTab = target.getAttribute("data-tool-tab");
      renderToolBody();
      return;
    }
    if (target.hasAttribute("data-check-context")) {
      const key = target.getAttribute("data-check-context");
      const at = state.checkContexts.indexOf(key);
      if (at > -1) state.checkContexts.splice(at, 1);
      else state.checkContexts.push(key);
      renderToolBody();
      return;
    }
    if (target.hasAttribute("data-clear-basket")) {
      state.favs = [];
      state.compare = [];
      saveBasketState();
      updateFavButtons();
      renderToolBody();
      toast("花篮已清空");
      return;
    }
    if (target.hasAttribute("data-clear-compare")) {
      state.compare = [];
      saveBasketState();
      renderToolBody();
      return;
    }
    if (target.hasAttribute("data-export-basket")) { exportBasket(); return; }
    if (target.hasAttribute("data-print-basket")) { printBasket(); return; }
    if (target.hasAttribute("data-daily-save")) { saveDailyImage(); return; }
    if (target.hasAttribute("data-quick-search")) {
      const q = target.getAttribute("data-quick-search");
      state.q = q;
      state.page = 1;
      if (el.search) el.search.value = q;
      renderFlowers();
      return;
    }

    if (target.hasAttribute("data-open-flower")) {
      const inModal = target.closest(".modal");
      const inDrawer = target.closest(".drawer");
      if (inModal) closeModal({ instant: true, restore: false });
      openFlower(target.getAttribute("data-open-flower"), inDrawer ? { fromDrawer: true } : {});
      return;
    }
    if (target.hasAttribute("data-open-bouquet")) {
      const inModal = target.closest(".modal");
      const inDrawer = target.closest(".drawer");
      if (inModal) closeModal({ instant: true, restore: false });
      openBouquet(target.getAttribute("data-open-bouquet"), inDrawer ? { fromDrawer: true } : {});
      return;
    }
    if (target.hasAttribute("data-print-flower")) {
      printFlower(target.getAttribute("data-print-flower"));
      return;
    }
    if (target.hasAttribute("data-print-bouquet")) {
      printBouquet(target.getAttribute("data-print-bouquet"));
      return;
    }
    if (target.hasAttribute("data-copy")) {
      copyLink(target.getAttribute("data-copy"));
      return;
    }
    if (target.hasAttribute("data-close-drawer")) {
      closeDrawer();
      return;
    }
    if (target.hasAttribute("data-occasion")) {
      const id = target.getAttribute("data-occasion");
      state.selectedOccasion = state.selectedOccasion === id ? null : id;
      renderOccasionChips();
      renderOccasionPanel();
      return;
    }
    if (target.hasAttribute("data-filter-occasion")) {
      const occ = target.getAttribute("data-filter-occasion");
      setFilter("occasion", occ);
      scrollToIndex();
      return;
    }
    if (target.hasAttribute("data-month")) {
      const m = Number(target.getAttribute("data-month"));
      state.calendarMonth = m;
      state.month = state.month === m ? null : m;
      state.page = 1;
      renderCalendar();
      renderSeason();
      renderFlowers();
      return;
    }
    if (target.hasAttribute("data-month-all")) {
      state.month = state.calendarMonth;
      state.page = 1;
      renderFlowers();
      scrollToIndex();
      return;
    }
    if (target.hasAttribute("data-page")) {
      const p = Number(target.getAttribute("data-page"));
      if (!p || p < 1) return;
      state.page = p;
      renderFlowers();
      scrollToIndex();
      return;
    }
    if (target.hasAttribute("data-remove-filter")) {
      const key = target.getAttribute("data-remove-filter");
      if (key === "q") {
        state.q = "";
        el.search.value = "";
        el.searchClear.hidden = true;
      } else if (key === "month") {
        state.month = null;
      } else {
        state[key] = "";
      }
      state.page = 1;
      renderFlowers();
      if (key === "month") {
        renderCalendar();
        renderSeason();
      }
      return;
    }
    if (target.hasAttribute("data-color")) {
      const color = target.getAttribute("data-color");
      state.color = state.color === color ? "" : color;
      state.page = 1;
      renderFlowers();
    }
  });

  if (el.search) {
    let searchTimer = null;
    el.search.addEventListener("input", function () {
      clearTimeout(searchTimer);
      const value = el.search.value;
      searchTimer = setTimeout(function () {
        state.q = value.trim();
        state.page = 1;
        renderFlowers();
      }, 120);
    });
    el.search.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (el.search.value) {
          el.search.value = "";
          state.q = "";
          state.page = 1;
          renderFlowers();
        } else {
          el.search.blur();
        }
      } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const cards = $$(".tag-hit");
        if (!cards.length) return;
        e.preventDefault();
        if (e.key === "ArrowDown") cards[0].focus();
        else cards[cards.length - 1].focus();
      }
    });
  }

  if (el.themeToggle) {
    el.themeToggle.addEventListener("click", function () {
      const night = document.documentElement.dataset.theme === "night";
      applyTheme(night ? "light" : "night", true);
    });
  }

  if (el.basketBtn) el.basketBtn.addEventListener("click", function () { openTool("basket"); });
  if (el.dailyBtn) el.dailyBtn.addEventListener("click", openDaily);

  document.addEventListener("change", function (e) {
    const cb = e.target.closest("[data-compare-id]");
    if (!cb) return;
    const id = cb.getAttribute("data-compare-id");
    if (cb.checked) {
      if (state.compare.length >= MAX_COMPARE) {
        cb.checked = false;
        toast("对比最多选 " + MAX_COMPARE + " 朵");
        return;
      }
      if (state.compare.indexOf(id) === -1) state.compare.push(id);
    } else {
      state.compare = state.compare.filter(function (x) { return x !== id; });
    }
    saveBasketState();
    if (state.toolTab === "compare") renderToolBody();
    else updateCompareInputs();
  });

  if (el.searchClear) {
    el.searchClear.addEventListener("click", function () {
      el.search.value = "";
      state.q = "";
      state.page = 1;
      renderFlowers();
      el.search.focus();
    });
  }

  if (el.monthFilter) el.monthFilter.addEventListener("change", function () { setFilter("month", el.monthFilter.value ? Number(el.monthFilter.value) : null); });
  if (el.occasionFilter) el.occasionFilter.addEventListener("change", function () { setFilter("occasion", el.occasionFilter.value); });
  if (el.scentFilter) el.scentFilter.addEventListener("change", function () { setFilter("scent", el.scentFilter.value); });
  if (el.riskFilter) el.riskFilter.addEventListener("change", function () { setFilter("risk", el.riskFilter.value); });
  if (el.shapeFilter) el.shapeFilter.addEventListener("change", function () { setFilter("shape", el.shapeFilter.value); });

  if (el.resetFilters) {
    el.resetFilters.addEventListener("click", function () {
      clearAllFilters(true);
    });
  }

  if (el.seasonAll) {
    el.seasonAll.addEventListener("click", function () {
      state.month = state.calendarMonth;
      state.page = 1;
      renderFlowers();
      scrollToIndex();
    });
  }

  const randomBtns = [$("#randomBtn"), $("#heroRandom")].filter(Boolean);
  randomBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let pool = FLOWERS;
      if (currentDrawer && currentDrawer.type === "flower" && FLOWERS.length > 1) {
        pool = FLOWERS.filter(function (f) { return f.id !== currentDrawer.id; });
      }
      const f = pool[Math.floor(Math.random() * pool.length)];
      if (f) openFlower(f.id);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (modalEl) {
        e.preventDefault();
        closeModal();
        return;
      }
      if (drawerEl) {
        e.preventDefault();
        closeDrawer();
        return;
      }
      if (document.activeElement === el.search && !el.search.value) {
        el.search.blur();
      }
      return;
    }
    if (e.key === "/" && !isTypingTarget(e.target) && !drawerEl && !modalEl) {
      e.preventDefault();
      el.search.focus();
      el.search.select();
      return;
    }
    if (modalEl && e.key === "Tab") {
      trapFocus(e, modalEl);
      return;
    }
    if (drawerEl && e.key === "Tab") {
      trapFocus(e, drawerEl);
      return;
    }
    if ((e.key === "ArrowDown" || e.key === "ArrowUp") && !isTypingTarget(e.target) && !modalEl && !drawerEl) {
      const cards = $$(".tag-hit");
      if (!cards.length) return;
      e.preventDefault();
      let idx = cards.indexOf(document.activeElement);
      if (e.key === "ArrowDown") idx = idx < 0 ? 0 : Math.min(cards.length - 1, idx + 1);
      else idx = idx < 0 ? cards.length - 1 : Math.max(0, idx - 1);
      cards[idx].focus();
    }
  });

  window.addEventListener("hashchange", function () { handleHash(false); });

  /* -------------------------------------------------------
     Init
     ------------------------------------------------------- */

  function init() {
    if (!FLOWERS.length) return;
    if (el.statFlowers) el.statFlowers.textContent = String(FLOWERS.length);
    if (el.aboutCount) el.aboutCount.textContent = String(FLOWERS.length);
    if (el.aboutBouquetCount) el.aboutBouquetCount.textContent = String(BOUQUETS.length);

    initTheme();
    loadBasketState();
    readURLState();

    populateFilters();
    renderOccasionChips();
    renderBouquets();

    if (!state.calendarMonth) {
      const nowMonth = new Date().getMonth() + 1;
      state.calendarMonth = countInMonth(nowMonth) ? nowMonth : (countInMonth(5) ? 5 : 1);
    }
    if (!countInMonth(state.calendarMonth)) {
      for (let m = 1; m <= 12; m++) {
        if (countInMonth(m)) { state.calendarMonth = m; break; }
      }
    }

    renderCalendar();
    renderSeason();
    renderFlowers();
    updateFavButtons();
    handleHash(true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  /* Exposed for the static-site QA harness only. No app dependency. */
  window.Huapu = {
    state: state,
    flowers: FLOWERS,
    bouquets: BOUQUETS,
    openFlower: openFlower,
    openBouquet: openBouquet,
    printFlower: printFlower,
    printBouquet: printBouquet,
    buildPrintFlower: buildPrintFlower,
    buildPrintBouquet: buildPrintBouquet,
    getFiltered: getFiltered,
    renderFlowers: renderFlowers
  };
})();
