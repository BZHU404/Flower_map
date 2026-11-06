/* 花谱 · 花数据
   数据以全局变量挂载，避免 fetch，双击 index.html 亦可运行。
   花语为民间流变与花艺常用说法的整理，不宣称唯一正确；
   毒性仅用于创作与安全提醒，不构成兽医、医疗或食用建议。 */

window.FLOWERS = [
  {
    id: "rose",
    no: 1,
    name: "玫瑰",
    en: "Rugosa Rose",
    latin: "Rosa rugosa",
    family: "蔷薇科 · 蔷薇属",
    aliases: ["滨玫瑰", "皱叶蔷薇"],
    colors: [
      { hex: "#A0432B", name: "胭脂", group: "红" },
      { hex: "#C98B8B", name: "藕粉", group: "粉" },
      { hex: "#F3E7D8", name: "纸白", group: "白" }
    ],
    form: "重瓣杯状",
    shapeGroup: "杯状",
    inflorescence: "单生或伞房状",
    diameter: "6–10 cm",
    height: "100–200 cm",
    bloom: [5, 6, 7],
    scent: { level: "浓", desc: "甜润的玫瑰香，清晨与阴天更稳；花瓣揉碎后有青草尾调。" },
    language: {
      positive: "热烈的爱、真心的重量、美与刺并存",
      negative: "以爱为名的占有；把刺痛浪漫化",
      cultural: "中文语境常把玫瑰直接等同爱情，西式花语按颜色分化更细，日式「薔薇」更强调美与秘密；三者不能互相替代。"
    },
    cultureMeanings: {
      cn: "现代中文花语多取「爱情、热恋、真心」。传统文献里的「玫瑰」也指美玉与珍奇之物；平阴玫瑰以栽培与香料传统闻名（不作食用建议）。",
      west: "红玫瑰是浪漫爱情的强符号；白玫瑰常指纯洁或婚礼，黄玫瑰在英语花语里多指友谊，也可能表示嫉妒或歉意，取决于语境与地区。",
      jp: "日式花语中「薔薇」常取「愛、美、情熱」。红蔷薇偏爱情，白蔷薇偏纯洁；日本花店也会按品种另立花语。"
    },
    occasions: ["告白", "暗恋"],
    taboos: [
      "刺多，儿童与宠物家庭需先去刺并收好残枝",
      "不要用「黄玫瑰＝分手」覆盖所有语境：在西方它常是友谊或歉意",
      "花材不可入口；装饰珠、包装丝带也要远离幼儿"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "玫瑰本身未见明确猫狗毒性记录；刺与残留农药是更现实的风险。",
      children: "花材不可入口；去刺后仍建议放在幼儿够不到的地方。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国东北、华北沿海及日本、朝鲜半岛",
    habitat: "海滨沙地、崖岸与林缘；园艺栽培广泛",
    vaseLife: "5–7 天",
    press: "花瓣层叠，压前拆开；干燥后颜色会加深，适合做暗红标本。",
    culture: "古希腊与罗马把玫瑰献给阿佛洛狄忒/维纳斯；英国玫瑰战争以红白玫瑰为徽记；中国平阴玫瑰栽培史常被追溯到明清。",
    poetry: "杨万里《红玫瑰》：『非关月季姓名同，不与蔷薇谱牒通。接叶连枝千万绿，一花两色浅深红。』",
    myth: "阿佛洛狄忒奔向受伤的阿多尼斯，脚被玫瑰刺伤，血把白玫瑰染红——版本众多，是西方最常用的玫瑰起源叙事之一。",
    prompt: "写「带刺的真心」时，别只写红；让香气先于人物出现，再让刺制造一次具体的停顿。",
    misuse: "把花店里的切花「玫瑰」都当成植物学玫瑰 Rosa rugosa——它们多是月季杂交品种；也不要把黄玫瑰一律写成分手。",
    trivia: "玫瑰果是蔷薇属的果实，但本站不提供任何食用建议；花瓣香气在清晨与阴天更稳定。",
    pairs: { ids: ["china-rose", "iris"], line: "玫瑰做主角，月季把香气续长，鸢尾在红里放一笔冷色。" },
    svg: { type: "rosette", petals: 5, leaves: 3 }
  },
  {
    id: "china-rose",
    no: 2,
    name: "月季",
    en: "China Rose",
    latin: "Rosa chinensis",
    family: "蔷薇科 · 蔷薇属",
    aliases: ["月月红", "长春花", "中国月季"],
    colors: [
      { hex: "#B04A4A", name: "暖胭脂", group: "红" },
      { hex: "#D9A0A0", name: "浅藕粉", group: "粉" },
      { hex: "#F5E9DC", name: "米白", group: "白" }
    ],
    form: "重瓣碗状",
    shapeGroup: "杯状",
    inflorescence: "单生或伞房状",
    diameter: "5–9 cm",
    height: "100–200 cm",
    bloom: [4, 5, 6, 7, 8, 9, 10, 11],
    scent: { level: "淡", desc: "清甜的淡香，部分品种几乎无香；比植物学玫瑰更轻。" },
    language: {
      positive: "长久的爱、坚韧、友谊与日常的温柔",
      negative: "被误认为「廉价玫瑰」；也可能指反复消耗的关系",
      cultural: "中文里的「月季」强调月月开花，西式多称 China rose 并归入爱情/美丽，日式花语常取「愛情、美、平和」。"
    },
    cultureMeanings: {
      cn: "月季原产中国，宋代起广泛栽培；「月月红」之名强调四季开花。它也是北京、天津等城市的市花之一。",
      west: "18 世纪传入欧洲后参与现代月季育种；英语花语中月季与玫瑰常混用，红为爱、粉为优雅、黄为友谊。",
      jp: "日式花语常见「愛情、美、平和」；与「薔薇」的界限在日常用语中并不严格。"
    },
    occasions: ["道歉", "探病", "祝贺"],
    taboos: [
      "刺需处理，避免儿童抓握",
      "不要把它当作「次一等的玫瑰」；在花艺里它是独立花材",
      "花材不可入口"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "月季本身未见明确猫狗毒性记录；刺与农药残留更值得注意。",
      children: "花材不可入口；修剪后的刺要收好。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国西南部；全球园艺栽培",
    habitat: "山地灌丛、林缘；栽培品种极多",
    vaseLife: "5–7 天",
    press: "花瓣较多，压前拆层；颜色保持度中等，干燥后偏暗。",
    culture: "中国月季经印度洋航线传入欧洲，参与杂交茶香月季的血统；「月季」与「玫瑰」在中文日常中常被混用。",
    poetry: "苏轼《月季》：『花落花开无间断，春来春去不相关。……唯有此花开不厌，一年长占四时春。』",
    myth: "月季没有单一的神话源头；它更多以「月月红」「长春花」的民俗名进入日常生活。",
    prompt: "用「月月红」写一段长期关系：不是一次盛放，而是反复修剪后仍然开花。",
    misuse: "把月季与植物学玫瑰混为一谈；或把「月季」只写成廉价替代品。",
    trivia: "现代切花月季的育种血统里，中国月季是关键亲本之一；「玫瑰」与「月季」的混淆有植物学与商业双重原因。",
    pairs: { ids: ["carnation", "herb-peony"], line: "月季的粉做底，康乃馨的皱边做层次，芍药收住甜度。" },
    svg: { type: "rosette", petals: 5, leaves: 3 }
  },
  {
    id: "peony-tree",
    no: 3,
    name: "牡丹",
    en: "Tree Peony",
    latin: "Paeonia suffruticosa",
    family: "芍药科 · 芍药属",
    aliases: ["洛阳花", "富贵花", "木芍药"],
    colors: [
      { hex: "#A0432B", name: "胭脂", group: "红" },
      { hex: "#C98B8B", name: "藕粉", group: "粉" },
      { hex: "#F4E9DA", name: "纸白", group: "白" },
      { hex: "#C9A227", name: "蕊金", group: "黄" }
    ],
    form: "重瓣球状",
    shapeGroup: "球状",
    inflorescence: "单生枝顶",
    diameter: "15–25 cm",
    height: "100–200 cm",
    bloom: [4, 5],
    scent: { level: "淡", desc: "多数品种香气淡，带一点青草与蜂蜜气；少数品种较浓。" },
    language: {
      positive: "富贵、圆满、雍容与盛大的祝福",
      negative: "把富贵当成唯一价值；盛极而衰的暗示",
      cultural: "中式几乎固定为富贵/国色，西式 peony 更常指浪漫与繁荣，日式牡丹强调富貴与壮丽；「白牡丹」在不同场合并不等同。"
    },
    cultureMeanings: {
      cn: "牡丹原产中国，洛阳、菏泽并称栽培重镇；「国色天香」几乎成为它的固定形容词。",
      west: "英语花语中 peony 常指 romance、prosperity、good fortune；婚礼与花园都常见，但不像中国那样绑定「富贵」。",
      jp: "日式花语常见「富貴、壮麗、王者の風格」；牡丹纹样在工艺与建筑中很常见。"
    },
    occasions: ["祝贺", "婚礼"],
    taboos: [
      "花期短、怕热，不适合远途或长时间活动",
      "送整束白牡丹前先确认对方语境：白色在部分场合偏哀悼",
      "芍药科植物对猫狗有毒性，花材不可入口"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "芍药科（牡丹/芍药）被 ASPCA 列为对猫狗有毒，误食可能引起呕吐、腹泻。",
      children: "误食根、叶、花均可引起肠胃不适，需远离幼儿。",
      note: "不提供任何食用或药用建议。"
    },
    origin: "中国中部与西部山地；长期园艺栽培",
    habitat: "山坡林缘、灌丛；栽培于温带花园",
    vaseLife: "3–5 天",
    press: "花瓣厚，需单层压制并勤换吸水纸；干燥后颜色偏暗。",
    culture: "武则天贬牡丹的传说让「洛阳牡丹」带上倔强叙事；牡丹也是中国传统吉祥纹样中的「花中之王」。",
    poetry: "刘禹锡《赏牡丹》：『唯有牡丹真国色，花开时节动京城。』",
    myth: "传说武则天冬日令百花齐放，唯牡丹抗旨被贬洛阳——版本众多，核心是「不肯逢迎」的品格。",
    prompt: "写「国色」时别只写富贵；把盛大的场面与短暂的花期并置，权力就有了代价。",
    misuse: "把牡丹与芍药混为一谈；或以为所有牡丹都香气浓烈——多数牡丹香气淡，甚至有青草气。",
    trivia: "牡丹是木本，芍药是草本；冬天地上部分枯死的是芍药，牡丹的木质枝干会留在地面。",
    pairs: { ids: ["iris", "herb-peony"], line: "牡丹压住场面，鸢尾给一笔冷紫，芍药把富贵拉回将离的柔软。" },
    svg: { type: "rosette", petals: 7, leaves: 3 }
  },
  {
    id: "herb-peony",
    no: 4,
    name: "芍药",
    en: "Herbaceous Peony",
    latin: "Paeonia lactiflora",
    family: "芍药科 · 芍药属",
    aliases: ["将离", "红药", "没骨花"],
    colors: [
      { hex: "#D49A9A", name: "藕粉", group: "粉" },
      { hex: "#A0432B", name: "胭脂", group: "红" },
      { hex: "#F7EEE2", name: "纸白", group: "白" }
    ],
    form: "重瓣碗状",
    shapeGroup: "球状",
    inflorescence: "单生或数朵顶生",
    diameter: "10–16 cm",
    height: "60–100 cm",
    bloom: [5, 6],
    scent: { level: "淡", desc: "清甜的淡香，靠近才有；不像百合那样具有侵略性。" },
    language: {
      positive: "惜别、情有独钟、温柔的留恋",
      negative: "分离的预感；过度缠绵",
      cultural: "中文「将离」是芍药最特别的注脚，西式 peony 多取浪漫/繁荣，日式芍药常取「恥じらい、清楚」。"
    },
    cultureMeanings: {
      cn: "《诗经》「赠之以勺药」是芍药进入离别叙事的最早注脚之一；扬州芍药在宋代极盛。",
      west: "英语中 herbaceous peony 与 tree peony 共享 peony 的花语：romance、prosperity、bashfulness。",
      jp: "日式花语常见「恥じらい、はにかみ、清楚」；与牡丹的「富贵」区分明显。"
    },
    occasions: ["送别", "道歉"],
    taboos: [
      "送别场合可用，但别把它写成「永别」——「将离」是留恋，不是诅咒",
      "芍药科对猫狗有毒，花材不可入口",
      "花期短，不适合需要长时间摆放的场合"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "芍药科植物对猫狗有毒，误食可能引起呕吐、腹泻。",
      children: "误食花、叶、根均可引起肠胃不适，需远离幼儿。",
      note: "不提供任何食用或药用建议。"
    },
    origin: "中国北方、西伯利亚与朝鲜半岛",
    habitat: "草甸、林缘；温带花园栽培",
    vaseLife: "3–5 天",
    press: "花瓣薄而多，适合分层压；花心易发黑，可只保留外瓣。",
    culture: "「将离」之名让芍药成为中国古代送别诗里的常客；扬州芍药、亳州芍药都是栽培传统。",
    poetry: "姜夔《扬州慢》：『念桥边红药，年年知为谁生。』「红药」即芍药。",
    myth: "芍药与牡丹常被写成姐妹花：一草本一木本，一个富贵一个将离，民间传说版本不一。",
    prompt: "用「将离」写告别：不是撕心裂肺，而是把一句话留到花谢之后。",
    misuse: "把芍药当成牡丹的「小号」；或忽略它的花期极短，把它用在需要长时间陈列的场合。",
    trivia: "芍药是多年生草本，地上部分每年枯萎再萌发；「将离」之名来自《诗经》的赠别传统。",
    pairs: { ids: ["iris", "lavender"], line: "粉芍药做旧，鸢尾写一封没有寄出的信，薰衣草把香气留在最后。" },
    svg: { type: "rosette", petals: 6, leaves: 3 }
  },
  {
    id: "lily",
    no: 5,
    name: "百合",
    en: "Lily",
    latin: "Lilium spp.",
    family: "百合科 · 百合属",
    aliases: ["强瞿", "番韭", "山丹"],
    colors: [
      { hex: "#F6EFE2", name: "纸白", group: "白" },
      { hex: "#D9A6A6", name: "藕粉", group: "粉" },
      { hex: "#D8B25A", name: "花药金", group: "黄" }
    ],
    form: "喇叭状",
    shapeGroup: "喇叭",
    inflorescence: "总状或伞房状",
    diameter: "10–20 cm",
    height: "60–150 cm",
    bloom: [5, 6, 7, 8],
    scent: { level: "浓", desc: "甜而厚重的白花香气，密闭空间里会显得压迫；花粉易染色。" },
    language: {
      positive: "百年好合、纯洁、庄重的祝福",
      negative: "浓香带来的压迫；白色在部分语境中的哀悼",
      cultural: "中文既可婚礼「百年好合」，也可白百合悼念；西式白百合常见于葬礼与复活节；日式白百合强调纯洁无垢。"
    },
    cultureMeanings: {
      cn: "「百年好合」让百合成为婚礼常用花；但白百合在部分中国葬礼与追思场合也出现，必须看语境。",
      west: "白百合在基督教艺术中常与圣母、复活节相关，也常用于葬礼；橙色百合偏热情，黄色百合在部分花语中与「虚假」相关。",
      jp: "日式花语常见「純潔、無垢、威厳」；白百合尤其强烈，常与神圣/仪式感相连。"
    },
    occasions: ["婚礼", "悼念", "告白"],
    taboos: [
      "猫家庭不要养：百合对猫有致命风险，花粉、叶、花瓶水都需防范",
      "探病避免浓香与花粉；可让花店去蕊",
      "不要把白百合只当婚礼花，也不要在悼念场合强行配红"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "百合对猫高度有毒，少量花粉、叶片或花瓶水即可导致急性肾损伤；对狗的风险较低但仍不应误食。",
      children: "误食可引起口腔刺激、呕吐；花粉易被幼儿接触，需放在够不到的地方。",
      note: "猫家庭建议完全不摆放百合；不提供任何食用建议。"
    },
    origin: "北半球温带（欧亚大陆为主）",
    habitat: "林缘、草甸、山地；园艺百合品种极多",
    vaseLife: "7–10 天",
    press: "花瓣薄，适合单层压；花粉会染色，压前去掉花药。",
    culture: "圣母百合（Lilium candidum）在西方宗教图像中象征纯洁；中国婚礼用「百合」取「百年好合」的口彩。",
    poetry: "陆游曾写：『更乞两丛香百合，老翁七十尚童心。』",
    myth: "希腊神话中，百合与赫拉的乳汁有关；另一条叙事里，它是从夏娃的泪水里长出的花。",
    prompt: "写「纯洁」时别忽略香气：百合的浓香可以成为压迫感、控制欲或过度关怀的隐喻。",
    misuse: "把「百合」当成一种花——Lilium 是整属；也忽略猫的致命风险，或把白百合无条件用于婚礼。",
    trivia: "百合的花药很容易把浅色衣服染黄；花店常建议婚礼用百合提前去蕊。",
    pairs: { ids: ["rose", "hydrangea"], line: "白百合定调，玫瑰给热度，绣球把香气托成一团雾。" },
    svg: { type: "trumpet", petals: 6, leaves: 3 }
  },
  {
    id: "tulip",
    no: 6,
    name: "郁金香",
    en: "Tulip",
    latin: "Tulipa gesneriana",
    family: "百合科 · 郁金香属",
    aliases: ["洋荷花", "草麝香", "郁香"],
    colors: [
      { hex: "#A0432B", name: "胭脂", group: "红" },
      { hex: "#D9A62E", name: "金", group: "黄" },
      { hex: "#F5ECDD", name: "纸白", group: "白" },
      { hex: "#6B4C7A", name: "深紫", group: "紫" }
    ],
    form: "杯状",
    shapeGroup: "杯状",
    inflorescence: "单生",
    diameter: "4–8 cm",
    height: "30–60 cm",
    bloom: [3, 4, 5],
    scent: { level: "淡", desc: "多数品种几乎无香，少数有清甜的青绿气；不靠香气取胜。" },
    language: {
      positive: "爱的告白、优雅、恰到好处的郑重",
      negative: "易逝的热情；黄色在部分语境中的失恋/无望",
      cultural: "中文现代花语多取「爱的告白」，西式按颜色分化极细，日式常见「博愛、思いやり」；黄色郁金香尤其容易跨文化误读。"
    },
    cultureMeanings: {
      cn: "郁金香传入中国较晚，现代花语主要受商业花艺影响；「爱的告白」是最常见的用法。",
      west: "红郁金香 = 热烈爱意；黄郁金香在不同花语体系中可指阳光/友谊，也可指无望的爱；白 = 歉意/纯洁；紫 = 皇室/永恒。",
      jp: "日式花语常见「博愛、思いやり、名声」；红色偏「愛の告白」，黄色偏「望みのない恋」等，版本不一。"
    },
    occasions: ["告白", "道歉", "拒绝"],
    taboos: [
      "黄色郁金香不要一律当成分手：先看地区与关系语境",
      "球根对猫狗有毒，花材不可入口",
      "花瓣易掉，远途携带需保护"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "郁金香球根含草酸钙等刺激物，猫狗误食可流涎、呕吐；花茎/花瓣风险较低但仍不应入口。",
      children: "误食球根风险较高，需远离幼儿与挖土玩耍的宠物。",
      note: "不提供食用建议；球根尤其要收好。"
    },
    origin: "中亚天山一带；荷兰为现代栽培与贸易中心",
    habitat: "山地草原、碎石坡；温带球根花卉",
    vaseLife: "5–7 天",
    press: "花瓣薄而挺，压制效果好；颜色可能轻微褪去。",
    culture: "17 世纪荷兰「郁金香狂热」是金融史常引的泡沫案例；郁金香也是土耳其、荷兰等国的文化符号。",
    poetry: "李白「兰陵美酒郁金香」中的「郁金香」多指香草/酒香，并非本种；这是中文引文里最常见的误配。",
    myth: "波斯与土耳其传说中，郁金香是爱与牺牲的象征；欧洲则更常讲「狂热」而非神话。",
    prompt: "用「郁金香狂热」写欲望：花本身没有变，变的是出价的人。",
    misuse: "把李白诗里的「郁金香」当成郁金香花；或把黄郁金香在所有语境里写成分手。",
    trivia: "郁金香切花在花瓶里还会继续向上生长，花茎会弯；这是它区别于多数切花的特性。",
    pairs: { ids: ["iris", "lavender"], line: "郁金香做单焦点，鸢尾给冷色回声，薰衣草把春天拉成一条细线。" },
    svg: { type: "cup", petals: 6, leaves: 3 }
  },
  {
    id: "iris",
    no: 7,
    name: "鸢尾",
    en: "Roof Iris",
    latin: "Iris tectorum",
    family: "鸢尾科 · 鸢尾属",
    aliases: ["蓝蝴蝶", "扁竹花", "屋顶鸢尾"],
    colors: [
      { hex: "#6B4C7A", name: "深紫", group: "紫" },
      { hex: "#7A6A9E", name: "蓝紫", group: "蓝" },
      { hex: "#F4EEE2", name: "纸白", group: "白" },
      { hex: "#D8B25A", name: "喉金", group: "黄" }
    ],
    form: "蝶形",
    shapeGroup: "蝶形",
    inflorescence: "总状花序",
    diameter: "8–12 cm",
    height: "30–50 cm",
    bloom: [4, 5],
    scent: { level: "淡", desc: "清淡的粉香，靠近才能闻到；根茎有土腥气。" },
    language: {
      positive: "信使、希望、想念与克制的优雅",
      negative: "消息迟到的遗憾；被误读的沉默",
      cultural: "西式鸢尾常与信仰/希望/勇气相连，日式常见「希望、消息」，中文现代花语多取「爱的使者、想念」；三套系统并不完全重合。"
    },
    cultureMeanings: {
      cn: "鸢尾在中国有「蓝蝴蝶」「扁竹花」等别名；现代花艺常取「爱的使者、想念」。",
      west: "鸢尾是法国王室纹章 fleur-de-lis 的原型之一；紫色鸢尾常指 wisdom、faith、hope，也用于纪念。",
      jp: "日式花语常见「希望、信じる心、消息」；「アイリス」之名直接来自希腊彩虹女神。"
    },
    occasions: ["暗恋", "送别", "道歉"],
    taboos: [
      "根茎对猫狗有毒，花材不可入口",
      "不要把它写成「百合」的替代品，花形与语义都不同",
      "紫色在部分悼念语境中可用，但需整体配色克制"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "鸢尾属植物（尤其根茎）对猫狗有毒，误食可致呕吐、腹泻、流涎。",
      children: "根茎风险较高，花材也不应入口。",
      note: "不提供食用或药用建议；鸢尾根在香料工业中的用途不代表家庭可用。"
    },
    origin: "中国西南、华中；日本也有分布",
    habitat: "林下、溪边、山坡草地",
    vaseLife: "3–5 天",
    press: "花瓣薄，压后颜色偏灰紫；适合做小尺寸标本。",
    culture: "鸢尾属名 Iris 来自希腊彩虹女神；法国王室以 fleur-de-lis 为纹章，但纹章原型是否为本种仍有争议。",
    poetry: "中国古诗少以鸢尾入题；《楚辞》香草传统中的「荃」「蕙」并非鸢尾，引用时需谨慎。",
    myth: "彩虹女神 Iris 在众神之间传递消息，她的披肩被说成彩虹；鸢尾因此常被写成「信使」。",
    prompt: "用「信使」写一封没有寄出的信：花到了，话没有到。",
    misuse: "把鸢尾与百合/唐菖蒲混为一谈；或把 fleur-de-lis 直接等同于植物学鸢尾。",
    trivia: "鸢尾的「旗瓣」与「垂瓣」结构很适合做花形速写；梵高在圣雷米时期画过多幅鸢尾。",
    pairs: { ids: ["herb-peony", "lavender"], line: "芍药做旧粉，鸢尾给冷紫，薰衣草把「消息」藏进香气里。" },
    svg: { type: "iris", petals: 6, leaves: 3 }
  },
  {
    id: "lavender",
    no: 8,
    name: "薰衣草",
    en: "Lavender",
    latin: "Lavandula angustifolia",
    family: "唇形科 · 薰衣草属",
    aliases: ["真正薰衣草", "英国薰衣草", "狹叶薰衣草"],
    colors: [
      { hex: "#6E5A8A", name: "灰紫", group: "紫" },
      { hex: "#8E86A8", name: "雾紫", group: "紫" },
      { hex: "#9AA98C", name: "银绿", group: "绿" }
    ],
    form: "穗状",
    shapeGroup: "穗状",
    inflorescence: "轮伞花序组成的穗状",
    diameter: "花穗 5–12 cm",
    height: "30–60 cm",
    bloom: [6, 7],
    scent: { level: "浓", desc: "清冽的樟脑—花香，揉叶后更冲；干燥后仍能留香很久。" },
    language: {
      positive: "等待、宁静、忠诚与干燥后仍留存的记忆",
      negative: "沉默过度；把等待写成消耗",
      cultural: "西式花语常取 devotion/calm/silence，中文现代花语多取「等待爱情」，日式常见「沈黙、期待」；商业文案常把三者混成一种。"
    },
    cultureMeanings: {
      cn: "薰衣草在中国现代花艺中多取「等待爱情、宁静」；「普罗旺斯」是常见的商业联想。",
      west: "维多利亚花语中 lavender 可指 silence、devotion、distrust（版本不一）；现代英语更多取 calm、cleanliness。",
      jp: "日式花语常见「沈黙、期待、あなたを待っています」；与「孤独」并不完全等同。"
    },
    occasions: ["暗恋", "送别", "道歉"],
    taboos: [
      "猫狗误食风险：ASPCA 将薰衣草列为对猫狗有毒，精油风险更高",
      "不要写「助眠/疗效」等医疗承诺",
      "浓香不适合探病或密闭空间"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "薰衣草对猫狗有毒性（含芳樟醇等），误食可致呕吐、食欲下降；精油绝不建议用于宠物。",
      children: "误食花材或精油风险高，需远离幼儿。",
      note: "不提供香疗、食用或药用建议。"
    },
    origin: "地中海西部（法国南部、西班牙等）",
    habitat: "干燥石灰质山坡；栽培于温带",
    vaseLife: "3–5 天；干燥后观赏期更长",
    press: "花穗干燥后形态稳定，适合做香囊或标本；但不要据此食用。",
    culture: "普罗旺斯的薰衣草田是 20 世纪旅游与香氛工业共同塑造的意象；「等待爱情」更多是现代花语文案。",
    poetry: "中国古诗没有对应的薰衣草意象；现代诗常把它写成远方、信件与干燥的记忆。",
    myth: "欧洲民间有圣母在薰衣草丛上晾晒婴儿衣物的传说，版本不一；它更接近地方传说而非古典神话。",
    prompt: "用「干燥后仍留香」写记忆：有些人走了，气味还在衣柜里。",
    misuse: "把「薰衣草」当成一种统一植物（真正薰衣草、醒目薰衣草、杂薰衣草不同）；或把它写成无风险的安眠花草。",
    trivia: "真正薰衣草（Lavandula angustifolia）与醒目薰衣草（L. × intermedia）在花穗形态与香气上不同；花店常混称。",
    pairs: { ids: ["iris", "hydrangea"], line: "薰衣草做细线，鸢尾给冷紫，绣球把紫色托成一团雾。" },
    svg: { type: "spike", petals: 0, leaves: 3 }
  },
  {
    id: "sunflower",
    no: 9,
    name: "向日葵",
    en: "Sunflower",
    latin: "Helianthus annuus",
    family: "菊科 · 向日葵属",
    aliases: ["葵花", "朝阳花", "日头花"],
    colors: [
      { hex: "#D9A62E", name: "葵金", group: "黄" },
      { hex: "#5A3A28", name: "花心褐", group: "橙" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "头状",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "10–30 cm",
    height: "100–300 cm",
    bloom: [7, 8, 9],
    scent: { level: "淡", desc: "青绿的花盘气，靠近花心有一点坚果/树脂感。" },
    language: {
      positive: "忠诚、仰望、沉默的爱与明亮的祝福",
      negative: "单向凝视；把阳光当成唯一答案",
      cultural: "西式常取 adoration/loyalty/happiness，中文现代花语多取「沉默的爱、向阳」，日式常见「憧れ、あなただけを見つめて」；三者的重点分别是忠诚、暗恋、注视。"
    },
    cultureMeanings: {
      cn: "向日葵在中国现代花语中常与「沉默的爱、向阳而生」相连；也是毕业、开业与祝贺场合的常用花。",
      west: "英语花语中 sunflower 常指 adoration、loyalty、happiness；维多利亚花语里也可能有 haughtiness/false riches 的负面版本。",
      jp: "日式花语常见「憧れ、愛慕、あなただけを見つめて」；向日葵在夏季花火与校园题材中很常见。"
    },
    occasions: ["祝贺", "暗恋"],
    taboos: [
      "花盘重，不适合小瓶或长途携带",
      "不要只写「阳光正能量」；它的背面是单向注视",
      "宠物误食风险低，但花材与包装不可入口"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "向日葵未见明确猫狗毒性记录；大量误食可能引起肠胃不适。",
      children: "花材不可入口；花粉与花盘碎屑可能刺激。",
      note: "不提供食用建议；不要给宠物喂食花材。"
    },
    origin: "北美洲",
    habitat: "草原、开阔地；全球栽培",
    vaseLife: "7–10 天",
    press: "花瓣与花盘分开压；花盘厚，需勤换纸。",
    culture: "梵高在阿尔勒画的向日葵把这种花推成现代艺术符号；乌克兰以向日葵为国花之一。",
    poetry: "司马光「更无柳絮因风起，惟有葵花向日倾」常被当作向日葵诗，但「葵」在古汉语中也可能指葵菜/蜀葵，需注明。",
    myth: "希腊神话中，水泽仙女克吕提厄凝视太阳神赫利俄斯，化为向日葵——这是最常见的西方起源叙事。",
    prompt: "用「追光」写单向的爱：被照亮的人未必知道自己在发光。",
    misuse: "把古诗里的「葵」都当成向日葵；或把向日葵只写成正能量，忽略它的沉重花盘与单向性。",
    trivia: "向日葵幼嫩花盘有向日性，成熟后通常固定朝东；一个「花盘」其实是许多小花组成的头状花序。",
    pairs: { ids: ["chrysanthemum", "iris"], line: "向日葵给主光，菊花压低饱和度，鸢尾在黄花里放一笔冷色。" },
    svg: { type: "disc", petals: 16, leaves: 3 }
  },
  {
    id: "hydrangea",
    no: 10,
    name: "绣球",
    en: "Bigleaf Hydrangea",
    latin: "Hydrangea macrophylla",
    family: "绣球科 · 绣球属",
    aliases: ["八仙花", "紫阳花", "粉团花"],
    colors: [
      { hex: "#6D86A8", name: "雾蓝", group: "蓝" },
      { hex: "#8A6F9E", name: "灰紫", group: "紫" },
      { hex: "#C98B8B", name: "藕粉", group: "粉" },
      { hex: "#F3EDE1", name: "纸白", group: "白" }
    ],
    form: "球状伞房",
    shapeGroup: "球状",
    inflorescence: "伞房状聚伞花序",
    diameter: "12–25 cm（花球）",
    height: "100–200 cm",
    bloom: [6, 7, 8],
    scent: { level: "无", desc: "几乎无香；近距离只有一点青草与湿土气。" },
    language: {
      positive: "团圆、希望、被环境温柔改变的颜色",
      negative: "善变/冷淡（部分西方花语）；把「变色」误读为不忠",
      cultural: "中式多取团圆/美满，西式常取 gratitude/grace，也有 coldness/heartlessness 的旧义，日式紫阳花常带「移り気」与梅雨氛围；差异很大。"
    },
    cultureMeanings: {
      cn: "绣球在中文语境中常与「团圆、美满、希望」相连；「抛绣球」的民俗与植物绣球并非同一件事。",
      west: "英语花语中 hydrangea 常指 gratitude、grace、heartfelt emotion；维多利亚花语里也可能指 coldness 或 heartlessness。",
      jp: "日式「紫陽花」常与梅雨、寺院、无常相连，花语有「移り気、家族の絆、団結」等版本。"
    },
    occasions: ["婚礼", "祝贺", "探病"],
    taboos: [
      "全株有毒，猫狗与儿童误食风险高",
      "不要写「颜色代表品种」——多数大叶绣球的花色受土壤 pH/铝离子影响",
      "不适合放在儿童可触及的低处"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "绣球含氰苷，猫狗误食可致呕吐、腹泻、精神沉郁，严重时影响呼吸。",
      children: "误食花、叶均可中毒，需远离幼儿。",
      note: "不提供食用或药用建议；花瓶水也要倒掉并远离宠物。"
    },
    origin: "日本、中国；全球温带栽培",
    habitat: "山地林缘、溪边；喜半阴湿润",
    vaseLife: "5–7 天；也可倒挂干燥",
    press: "单朵小花可拆下压；整球压会发霉，需分层。",
    culture: "日本寺院与梅雨季节的紫阳花是重要的视觉传统；欧洲则常把绣球用于花园与婚礼。",
    poetry: "中国古诗少以绣球入题；日本俳句与近代文学中的「紫陽花」意象更丰富。",
    myth: "日本各地有与紫阳花相关的寺院传说，版本不一；不要把它简化成单一的「善变」符号。",
    prompt: "用「土壤决定颜色」写环境如何塑造一个人：同一株花，换一片土就换一种蓝。",
    misuse: "以为蓝绣球与粉绣球是不同品种；或忽略全株毒性，让儿童/宠物接触。",
    trivia: "大叶绣球的花色常随土壤 pH 与铝离子变化；我们看到的大「花球」多由不孕花组成。",
    pairs: { ids: ["rose", "lily"], line: "绣球做体量，玫瑰做焦点，百合把边缘修干净。" },
    svg: { type: "cluster", petals: 4, leaves: 3 }
  },
  {
    id: "camellia",
    no: 11,
    name: "山茶",
    en: "Camellia",
    latin: "Camellia japonica",
    family: "山茶科 · 山茶属",
    aliases: ["茶花", "海石榴", "曼陀罗树"],
    colors: [
      { hex: "#A0432B", name: "胭脂", group: "红" },
      { hex: "#C98B8B", name: "藕粉", group: "粉" },
      { hex: "#F4EBDD", name: "纸白", group: "白" }
    ],
    form: "重瓣杯状",
    shapeGroup: "杯状",
    inflorescence: "单生或对生",
    diameter: "6–12 cm",
    height: "200–600 cm（灌木/小乔木）",
    bloom: [12, 1, 2, 3, 4],
    scent: { level: "淡", desc: "清淡的绿叶气，部分品种有隐约的甜香；不靠香气夺人。" },
    language: {
      positive: "理想的爱、谦让、冬日里耐久的美",
      negative: "整朵凋落的决绝；被误读为「不祥」",
      cultural: "中式多取谦让/理想的爱，西式常取 admiration/perfect beauty，日式「椿」有慎ましさ/理想の愛，也有落椿的忌讳；同一朵花在三种语境里温度不同。"
    },
    cultureMeanings: {
      cn: "山茶在中国有「雪里开花到春晚」的耐久意象；云南山茶、华东山茶栽培传统都很深。",
      west: "英语花语中 camellia 常指 admiration、perfect beauty；白茶花因《茶花女》带上悲剧与交际花的联想。",
      jp: "日式「椿」常取「慎ましさ、理想の愛、誇り」；但「落椿」——整朵花突然落下——在部分语境中被视为不吉，尤其与医院/仪式并置时。"
    },
    occasions: ["暗恋", "婚礼", "悼念"],
    taboos: [
      "整朵落花在部分日本语境中被视为不吉，送前需确认",
      "花材不可入口；种子/叶片也不应给宠物啃咬",
      "不要把它写成「玫瑰的替代品」"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "山茶未见明确猫狗毒性记录；大量误食可能引起肠胃不适。",
      children: "花材不可入口；果实与种子需收好。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国、日本",
    habitat: "山地常绿林；温带园艺栽培",
    vaseLife: "5–7 天",
    press: "花瓣厚，压前单层分开；干燥后呈深红/褐红。",
    culture: "小仲马《茶花女》让白茶花成为 19 世纪巴黎的文学符号；日本「椿」在能剧与茶道中也很常见。",
    poetry: "陆游《山茶》：『东园三日雨兼风，桃李飘零扫地空。惟有山茶偏耐久，绿丛又放数枝红。』",
    myth: "日本有「椿」与武士、断首联想的地方性忌讳，但并非全国统一；不要把它写成普世禁忌。",
    prompt: "用「整朵落下」写决绝：不是一瓣一瓣地告别，而是在某一天整朵离开。",
    misuse: "把山茶、茶梅、茶花混为一谈；或把「落椿」的日本忌讳当成所有文化都成立的规则。",
    trivia: "山茶的花冠会整朵脱落，这是它区别于许多蔷薇科花的特点；《茶花女》佩戴的是白茶花。",
    pairs: { ids: ["narcissus", "plum"], line: "山茶做深红，水仙给一点冷金，梅花把冬天的骨架撑起来。" },
    svg: { type: "rosette", petals: 5, leaves: 3 }
  },
  {
    id: "plum",
    no: 12,
    name: "梅花",
    en: "Plum Blossom",
    latin: "Prunus mume",
    family: "蔷薇科 · 李属",
    aliases: ["梅", "春梅", "红梅"],
    colors: [
      { hex: "#A0432B", name: "胭脂", group: "红" },
      { hex: "#D9A6A6", name: "藕粉", group: "粉" },
      { hex: "#F7EEE4", name: "纸白", group: "白" }
    ],
    form: "五瓣轮状",
    shapeGroup: "轮状",
    inflorescence: "单生或两朵并生",
    diameter: "2–3 cm",
    height: "400–1000 cm（小乔木）",
    bloom: [1, 2, 3],
    scent: { level: "浓", desc: "清冷的暗香，离得远反而更明显；靠近时香气会退。" },
    language: {
      positive: "傲骨、坚贞、报春与克制的香气",
      negative: "苦寒叙事被过度美化；「梅花香自苦寒来」也可能成为对苦难的颂扬",
      cultural: "中式几乎固定为傲骨/报春/五福，西式 plum blossom 更常指 beauty/hope，日式「梅」常与新春、忍耐、高潔相连；三者共享「早春」但价值不同。"
    },
    cultureMeanings: {
      cn: "梅花是「岁寒三友」「四君子」之一；五瓣常被附会为「五福」，是典型的民俗再解释。",
      west: "英语世界对 plum blossom 的花语不如玫瑰固定，多取 beauty、hope、winter's end；不要把它写成普世符号。",
      jp: "日式「梅」常取「忍耐、高潔、忠実」，也是新年与梅見的季语；与樱花相比更早、更静。"
    },
    occasions: ["送别", "暗恋", "祝贺"],
    taboos: [
      "果核含氰苷，猫狗/儿童误食有风险；不要用「梅子」做任何食用建议",
      "不要在悼念场合用大红梅枝配喜庆包装",
      "梅花枝条不要自行折取，使用园艺栽培花材"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "李属（Prunus）的果核/种子含氰苷，猫狗啃咬有风险；花本身风险较低但仍不应入口。",
      children: "果核误食风险高，需收好；不要让孩子把梅枝当玩具啃咬。",
      note: "不提供任何食用或药用建议。"
    },
    origin: "中国",
    habitat: "山地林缘、溪边；东亚温带栽培",
    vaseLife: "5–7 天（枝条）",
    press: "花瓣薄，适合压；枝条可做线条标本。",
    culture: "林逋「梅妻鹤子」、王安石《梅花》与「岁寒三友」共同塑造了梅的文化形象；日本「梅見」则更接近春季花事。",
    poetry: "王安石《梅花》：『墙角数枝梅，凌寒独自开。遥知不是雪，为有暗香来。』",
    myth: "寿阳公主「梅花妆」的传说：梅花落在额上留下花痕，成为古代妆容典故；版本不一。",
    prompt: "用「暗香」写不在场的人：看不见，但一进门就知道他来过了。",
    misuse: "把梅花与樱花/桃花混为一谈；或把「梅花香自苦寒来」直接当成对苦难的赞美。",
    trivia: "梅花是李属（Prunus）植物，和樱桃、桃、李是近亲；「五瓣＝五福」是民俗解释，不是植物学。",
    pairs: { ids: ["camellia", "narcissus"], line: "梅枝做骨架，山茶给重量，水仙把香气提到最前。" },
    svg: { type: "branch", petals: 5, leaves: 3 }
  },
{
    id: "lily-of-valley",
    no: 13,
    name: "铃兰",
    en: "Lily of the Valley",
    latin: "Convallaria majalis",
    family: "天门冬科 · 铃兰属",
    aliases: ["山谷百合", "君影草", "铃铛花"],
    colors: [
      { hex: "#F8F1E4", name: "纸白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "钟状",
    shapeGroup: "钟状",
    inflorescence: "总状花序",
    diameter: "0.8–1.2 cm（单花）",
    height: "15–30 cm",
    bloom: [5],
    scent: { level: "浓", desc: "清甜的白花香，靠近时很浓；花茎与叶片有青草气。" },
    language: {
      positive: "幸福归来、纯洁、谦逊",
      negative: "幸福迟到；易碎的承诺",
      cultural: "中文现代花艺多取「幸福归来」，西式与圣母传说、法国五一相连，日式常见「幸福が訪れる、純粋、謙虚」；三者共享「幸福」但来源不同。"
    },
    cultureMeanings: {
      cn: "铃兰在现代中文花艺中多取「幸福归来、纯洁」；它不是兰科，名字里的「兰」只是俗称。",
      west: "法国五一有赠铃兰的传统；英国王室婚礼也用过铃兰。西方花语常见 return of happiness、humility、tears of Mary。",
      jp: "日式花语常见「幸福が訪れる、純粋、謙虚」；北海道等地有野生分布，但花店花材应来自园艺栽培。"
    },
    occasions: ["婚礼", "暗恋"],
    taboos: [
      "全株有毒，儿童与宠物家庭不要放在低处",
      "不要与食材或饮品混放，花瓶水也要及时倒掉",
      "不要把它当成可入口的花草——它是高毒植物"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "含强心苷，猫狗误食（包括花瓶水）可致呕吐、心律异常，需立即就医。",
      children: "全株有毒，误食可致恶心、呕吐与心律问题，必须远离幼儿。",
      note: "不提供任何食用或药用建议；处理时戴手套，完成后洗手。"
    },
    origin: "北半球温带（欧洲、亚洲、北美）",
    habitat: "林下、山谷阴湿处",
    vaseLife: "3–5 天",
    press: "花茎细，压前拆分；干燥后容易褪色，适合做小尺寸标本。",
    culture: "法国五一「铃兰节」与英国王室婚礼让铃兰成为「幸福归来」的符号；它也是欧洲春季花市的重要花材。",
    poetry: "中国古诗没有对应的铃兰意象；西方文学里它常与圣母的眼泪、夜莺的歌声相连。",
    myth: "传说圣母玛利亚在逃往埃及途中流下眼泪，泪珠落地化为铃兰；另一版本说夜莺的歌声催开了铃兰。",
    prompt: "用「倒垂的铃」写未说出口的祝福：声音很小，但一直在响。",
    misuse: "把铃兰当成兰科植物；或因为它小巧白色就放进儿童房、宠物可及处。",
    trivia: "铃兰不是兰；法国五一赠铃兰的传统可追溯到 16 世纪，1982 年起成为法国的正式节日。",
    pairs: { ids: ["rose", "hydrangea"], line: "铃兰做香气的引子，玫瑰给重量，绣球把白色托成一团雾。" },
    svg: { type: "bell", petals: 0, leaves: 2 }
  },
  {
    id: "narcissus",
    no: 14,
    name: "水仙",
    en: "Chinese Narcissus",
    latin: "Narcissus tazetta var. chinensis",
    family: "石蒜科 · 水仙属",
    aliases: ["凌波仙子", "雅蒜", "天葱"],
    colors: [
      { hex: "#F8F1E4", name: "纸白", group: "白" },
      { hex: "#D9A62E", name: "副冠金", group: "黄" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "杯状副冠",
    shapeGroup: "杯状",
    inflorescence: "伞形花序",
    diameter: "3–5 cm",
    height: "20–40 cm",
    bloom: [1, 2],
    scent: { level: "浓", desc: "清冽的白花香气，室内一盆就能占满房间；鳞茎有辛辣气。" },
    language: {
      positive: "吉祥、团圆、思念、凌波仙子的清冷",
      negative: "自恋、自我沉溺；临水自照的孤独",
      cultural: "中文语境里水仙是年花与「凌波仙子」，西式因希腊神话常取 self-love/vanity，日式常见「自己愛、尊敬、神秘」；同一朵花在三种语境里温度完全不同。"
    },
    cultureMeanings: {
      cn: "水仙是中国春节前后的年花，漳州水仙尤其有名；「凌波仙子」来自黄庭坚的诗，强调水上的清冷姿态。",
      west: "英语花语中 narcissus 常指 self-love、vanity，来自希腊神话那喀索斯；维多利亚花语里也可能指「希望」或「再生」。",
      jp: "日式花语常见「自己愛、尊敬、神秘」；水仙也是日本新年花材之一。"
    },
    occasions: ["祝贺", "送别"],
    taboos: [
      "全株有毒，鳞茎尤其危险；外形像蒜/洋葱，绝不能与食材混放",
      "猫狗与儿童误食可致严重中毒，花瓶水也要远离",
      "不要把它当成可入口的植物；鳞茎尤其危险"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "含石蒜碱与草酸钙，猫狗误食（尤其鳞茎）可流涎、呕吐、腹泻，严重时出现心律或神经症状。",
      children: "误食鳞茎风险高，可能引起口腔灼痛、呕吐与腹痛，必须远离幼儿。",
      note: "不提供任何食用或药用建议；处理鳞茎后洗手。"
    },
    origin: "地中海沿岸；中国长期园艺栽培",
    habitat: "沿海坡地、园艺水培",
    vaseLife: "5–7 天",
    press: "花瓣薄，适合单层压；副冠较厚，可单独压。",
    culture: "漳州水仙在明清时期已成产业；中国春节把水仙与「岁朝清供」并置，西方则把水仙与那喀索斯神话绑定。",
    poetry: "黄庭坚《王充道送水仙花五十枝》：『凌波仙子生尘袜，水上轻盈步微月。』",
    myth: "希腊神话中，那喀索斯凝视水中自己的倒影不肯离开，死后化为水仙；这是「自恋」一词的来源之一。",
    prompt: "用「临水自照」写自恋与孤独：他爱的不是水，是水里那个不会离开的人。",
    misuse: "把水仙鳞茎当蒜苗或洋葱；或把「自恋」当成所有文化里唯一的水仙花语。",
    trivia: "中国水仙多为三倍体，通常靠鳞茎分球繁殖；它与蒜外形相似，但含有毒成分。",
    pairs: { ids: ["camellia", "plum"], line: "水仙给冷金，山茶做深红，梅花把冬天的骨架撑起来。" },
    svg: { type: "narcissus", petals: 6, leaves: 3 }
  },
  {
    id: "azalea",
    no: 15,
    name: "杜鹃",
    en: "Azalea",
    latin: "Rhododendron simsii",
    family: "杜鹃花科 · 杜鹃花属",
    aliases: ["映山红", "山踯躅", "照山红"],
    colors: [
      { hex: "#B0473F", name: "映山红", group: "红" },
      { hex: "#D79C9C", name: "藕粉", group: "粉" },
      { hex: "#F5EDE2", name: "纸白", group: "白" }
    ],
    form: "漏斗状 / 钟状",
    shapeGroup: "钟状",
    inflorescence: "伞形或簇生",
    diameter: "4–6 cm",
    height: "50–200 cm",
    bloom: [3, 4, 5],
    scent: { level: "淡", desc: "清淡的青草气，部分品种几乎无香；不靠气味吸引。" },
    language: {
      positive: "思乡、节制、爱的喜悦",
      negative: "啼血般的哀伤；危险的美",
      cultural: "中文因「杜鹃啼血」常带思乡与哀伤，西式花语常取 caution/temperance，日式「躑躅」常取「節制、初恋、慎み」；不要把「思乡」当成普世解释。"
    },
    cultureMeanings: {
      cn: "杜鹃在中国文学里与望帝化鸟、啼血传说相连，因此常带思乡与哀愁；映山红也是山野春天的视觉记忆。",
      west: "英语花语中 azalea 常指 caution、temperance、fragile passion；它与 rhododendron 同属，毒性提醒也常一起出现。",
      jp: "日式「躑躅」常取「節制、初恋、慎み」；「躑躅」原意与「踯躅不前」有关，花名本身带犹豫感。"
    },
    occasions: ["送别", "暗恋"],
    taboos: [
      "全株有毒，花蜜也可能有毒；儿童与宠物误食风险高",
      "不要采食野生杜鹃，也不要让宠物啃咬落花",
      "不要送儿童房或医院低处；送前确认对方是否养宠"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "含木藜芦毒素，猫狗误食可流涎、呕吐、腹泻与心律异常；花蜜也可能含毒。",
      children: "误食花、叶可中毒，出现口腔灼痛、呕吐与精神萎靡，需立即就医。",
      note: "不提供任何食用或药用建议；不要用野生杜鹃泡水。"
    },
    origin: "中国",
    habitat: "山地灌丛、林缘、酸性土",
    vaseLife: "5–7 天",
    press: "花瓣薄，适合压；花冠漏斗形，压后层次会变平。",
    culture: "杜鹃啼血是中国文学中最著名的花鸟互文之一；日本「躑躅」则更强调「踯躅不前」的犹豫。",
    poetry: "李白《宣城见杜鹃花》：『蜀国曾闻子规鸟，宣城还见杜鹃花。一叫一回肠一断，三春三月忆三巴。』",
    myth: "望帝杜宇死后化为杜鹃鸟，啼血染红山花，故有「杜鹃啼血」之说；版本因地域而异。",
    prompt: "用「啼血」写无法归乡：不是不想回，是每一条路都通向旧事。",
    misuse: "把杜鹃当成野菜或花蜜来源；或把「思乡」当成所有文化里的唯一花语。",
    trivia: "杜鹃花蜜可能含有木藜芦毒素；杜鹃鸟与杜鹃花是两种不同的「杜鹃」，不要混写。",
    pairs: { ids: ["camellia", "iris"], line: "杜鹃做山野的红，山茶压深，鸢尾给一条冷色的路。" },
    svg: { type: "branch", petals: 5, leaves: 2 }
  },
  {
    id: "chamomile",
    no: 16,
    name: "洋甘菊",
    en: "German Chamomile",
    latin: "Matricaria chamomilla",
    family: "菊科 · 母菊属",
    aliases: ["母菊", "德国洋甘菊", "小春菊"],
    colors: [
      { hex: "#F7F0E3", name: "纸白", group: "白" },
      { hex: "#D9B23E", name: "花心金", group: "黄" },
      { hex: "#7A8564", name: "叶绿", group: "绿" }
    ],
    form: "头状",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "1–2 cm",
    height: "30–60 cm",
    bloom: [5, 6, 7],
    scent: { level: "淡", desc: "清甜的苹果—青草气，揉花后更明显；不具侵略性。" },
    language: {
      positive: "逆境中的力量、耐心、低处的安慰",
      negative: "被过度医疗化的「安慰」；甜味掩盖的疲惫",
      cultural: "中文现代花艺多取「苦难中的力量」，西式常取 patience/calm，日式常见「逆境に負けない強さ」；三者共享「韧性」，但都不是药效。"
    },
    cultureMeanings: {
      cn: "洋甘菊在中国现代花艺中多取「苦难中的力量、宁静」；它进入中文花语体系较晚，商业文案影响很大。",
      west: "欧洲草药传统让洋甘菊与「安抚」相连，英语花语常取 patience、calm；但传统使用不等于安全，尤其对宠物。",
      jp: "日式花语常见「逆境に負けない強さ、親交」；在香草与花艺语境中都被使用。"
    },
    occasions: ["道歉", "探病"],
    taboos: [
      "对猫狗有毒性（ASPCA），不要让宠物啃咬或饮用花瓶水",
      "不要把它当成可安全入口的花草；不提供任何疗效承诺",
      "花粉过敏者需谨慎；探病先确认对方过敏史"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "洋甘菊对猫狗有毒性，误食可致呕吐、腹泻、食欲下降；精油风险更高。",
      children: "大量误食可致肠胃不适；不要让孩子把花材当零食。",
      note: "不提供食用、香疗或药用建议；孕期与过敏人群尤其不要自行使用。"
    },
    origin: "欧洲、西亚",
    habitat: "田野、路旁、栽培",
    vaseLife: "4–6 天；干燥后也可观赏",
    press: "小花干燥快，适合做标本；花心厚，压时需多换纸。",
    culture: "洋甘菊在欧洲草药与花园传统中地位很深；「植物的医生」是民间说法，不是科学结论。",
    poetry: "中国古诗没有对应的洋甘菊意象；现代诗常把它写成低处的白色小灯。",
    myth: "欧洲民间称洋甘菊为「植物的医生」，说它能让邻近植物长得更好；这属于园艺传说，不是医学结论。",
    prompt: "用「低处的安慰」写一个人：他不解决问题，只是让你在床边坐一会儿。",
    misuse: "把洋甘菊当成无风险的可入口花草；或忽略它对猫狗的毒性。",
    trivia: "德国洋甘菊与罗马洋甘菊是不同物种；德国洋甘菊的花心内部中空，是识别特征之一。",
    pairs: { ids: ["lavender", "gypsophila"], line: "洋甘菊做低处的小灯，薰衣草拉长，满天星把空气留出来。" },
    svg: { type: "disc", petals: 14, leaves: 3 }
  },
  {
    id: "gardenia",
    no: 17,
    name: "栀子",
    en: "Gardenia",
    latin: "Gardenia jasminoides",
    family: "茜草科 · 栀子属",
    aliases: ["栀子花", "黄栀", "山栀"],
    colors: [
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#7A8564", name: "叶绿", group: "绿" }
    ],
    form: "重瓣轮状",
    shapeGroup: "轮状",
    inflorescence: "单生",
    diameter: "5–8 cm",
    height: "100–200 cm",
    bloom: [5, 6, 7],
    scent: { level: "浓", desc: "甜润的白花香，夜间更明显；花瓣揉碎后有青草尾调。" },
    language: {
      positive: "永恒的爱、喜悦、守候",
      negative: "香气过浓的压迫；说不出口的秘密",
      cultural: "中文多取「永恒的爱、喜悦」，西式常取 secret love/refinement，日式常见「とても幸せ、清潔、純真」；「秘密的爱」不是中式的主调。"
    },
    cultureMeanings: {
      cn: "栀子花在江南夏季很常见，中文花语多取「永恒的爱、喜悦、守候」；「栀子」也因果实可作黄色染料而进入工艺史。",
      west: "英语花语中 gardenia 常指 secret love、refinement；20 世纪爵士乐与香水文化也强化了它的「夜与秘密」气质。",
      jp: "日式花语常见「とても幸せ、清潔、純真」；「くちなし」之名与「口無し」的谐音也常被拿来做文章。"
    },
    occasions: ["暗恋", "告白"],
    taboos: [
      "对猫狗有毒性（ASPCA），误食可致肠胃不适",
      "浓香不适合探病或密闭小空间",
      "花瓣易褐，不适合需要长时间摆放的场合"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "栀子对猫狗有毒性，误食可致呕吐、腹泻；花材与果实都不应入口。",
      children: "误食花、叶、果可致肠胃不适，需远离幼儿。",
      note: "不提供食用或药用建议；栀子黄是工业染料话题，与家庭使用无关。"
    },
    origin: "中国",
    habitat: "山地林下、溪边；江南庭院栽培",
    vaseLife: "3–5 天",
    press: "花瓣厚而白，压后容易转褐；可先用吸水纸勤换。",
    culture: "栀子花是江南夏天的气味记忆；它的果实可提取「栀子黄」，在染料与工业中有使用，但这不等于家庭可入口。",
    poetry: "杜甫《栀子》：『栀子比众木，人间诚未多。』",
    myth: "中国民间关于栀子花的传说版本不一，常与纯洁、守候相连；不要把它写成单一来源的神话。",
    prompt: "用「香气先于人抵达」写暗恋：他还没进门，你已经知道是他。",
    misuse: "把栀子果实当家庭染料；或把浓香栀子放在探病花束里。",
    trivia: "栀子属名 Gardenia 纪念美国植物学家 Alexander Garden；「くちなし」在日语中与「口無し」同音，常被用作双关。",
    pairs: { ids: ["gypsophila", "china-rose"], line: "栀子做香气的主调，满天星留白，月季把白托成粉。" },
    svg: { type: "rosette", petals: 6, leaves: 3 }
  },
  {
    id: "osmanthus",
    no: 18,
    name: "桂花",
    en: "Sweet Osmanthus",
    latin: "Osmanthus fragrans",
    family: "木樨科 · 木樨属",
    aliases: ["木樨", "金桂", "九里香"],
    colors: [
      { hex: "#D9A62E", name: "金桂", group: "黄" },
      { hex: "#F7EFE1", name: "银桂", group: "白" },
      { hex: "#C9762F", name: "丹桂", group: "橙" }
    ],
    form: "小四瓣 / 簇生",
    shapeGroup: "枝状",
    inflorescence: "聚伞簇生",
    diameter: "0.6–1 cm（单花）",
    height: "300–1200 cm（乔木）",
    bloom: [9, 10],
    scent: { level: "浓", desc: "甜润的桂花香，夜里更明显；一树开花可覆盖整条街。" },
    language: {
      positive: "收获、吉祥、折桂、团圆",
      negative: "被商业化的「富贵」；香气过度占据空间",
      cultural: "中文与中秋、折桂、团圆绑定，西式没有固定体系（多取 sweet olive 的香气），日式「金木犀」常取「謙虚、真実、初恋」；三者差别很大。"
    },
    cultureMeanings: {
      cn: "桂花与中秋、科举「折桂」、杭州满觉陇赏桂相连；「桂」与「贵」同音，也让它带上吉祥意味。",
      west: "英语世界对 osmanthus 的花语不如玫瑰固定，多取 fragrance、autumn；「sweet olive」是常见英文名。",
      jp: "日式「金木犀」常取「謙虚、真実、初恋」，「銀木犀」也常与初恋相连；不同花色与品种有不同版本。"
    },
    occasions: ["祝贺", "暗恋"],
    taboos: [
      "不要给宠物啃咬花枝；也不要把它当成可入口的花草",
      "香气浓，探病与密闭空间慎用",
      "花期短，不适合需要长时间摆放的场合"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "桂花未见明确猫狗毒性记录；仍不建议让宠物啃咬花枝。",
      children: "花材不可入口；香气浓时注意通风。",
      note: "不提供食用或药用建议；相关饮食话题不在本站讨论。"
    },
    origin: "中国",
    habitat: "山地林缘、庭院栽培",
    vaseLife: "3–5 天（枝条）",
    press: "小花密集，可整枝压；干燥后香气会减弱。",
    culture: "桂花是中秋的嗅觉符号；杭州满觉陇、桂林（以桂树得名）都把桂花写进地方记忆。",
    poetry: "李清照《鹧鸪天·桂花》：『暗淡轻黄体性柔，情疏迹远只香留。何须浅碧深红色，自是花中第一流。』",
    myth: "吴刚伐桂是月中桂树最著名的传说：树随砍随合，伐木者永远留在月宫。",
    prompt: "用「看不见的花」写气味记忆：花很小，香却先一步占满房间。",
    misuse: "把桂花当成可随意入口的花；或把金桂、银桂、丹桂、四季桂混为一谈。",
    trivia: "桂花按花色与花期可分金桂、银桂、丹桂、四季桂等；「桂」与「贵」同音，是吉祥话的常见来源。",
    pairs: { ids: ["chrysanthemum", "camellia"], line: "桂花做嗅觉的底，菊花给秋色，山茶在冷天里压住香。" },
    svg: { type: "branch", petals: 4, leaves: 2 }
  },
  {
    id: "chrysanthemum",
    no: 19,
    name: "菊花",
    en: "Chrysanthemum",
    latin: "Chrysanthemum morifolium",
    family: "菊科 · 菊属",
    aliases: ["黄花", "秋菊", "陶菊"],
    colors: [
      { hex: "#D9A62E", name: "秋金", group: "黄" },
      { hex: "#F7F0E3", name: "纸白", group: "白" },
      { hex: "#A0432B", name: "胭脂", group: "红" },
      { hex: "#7A5A7E", name: "灰紫", group: "紫" }
    ],
    form: "重瓣球状 / 舌状",
    shapeGroup: "球状",
    inflorescence: "头状花序",
    diameter: "5–20 cm",
    height: "60–150 cm",
    bloom: [9, 10, 11],
    scent: { level: "淡", desc: "清苦的青草—药气，部分品种几乎无香；比桂花克制得多。" },
    language: {
      positive: "高洁、长寿、隐逸、秋日的清苦",
      negative: "悼念与葬礼（部分文化）；被误读的「不吉利」",
      cultural: "中文有重阳、长寿、隐逸的一面，也有白菊悼念的一面；西欧多国把菊花与死亡/万圣节相连；日式既是皇室象征，也用于葬礼。必须看颜色与场合。"
    },
    cultureMeanings: {
      cn: "菊花在中文里有「高洁、长寿、隐逸」的传统，重阳赏菊、陶渊明采菊都是正面意象；但白菊、黄菊在现代葬礼与追思中也极常见。",
      west: "在法国、意大利、西班牙等欧洲国家，菊花常与万圣节、墓地与哀悼相连；在美国它也可能只是秋季花园花。",
      jp: "菊花是日本皇室纹章（菊纹）的象征，也用于葬礼；「高貴、長寿」与「葬儀」的两面并存。"
    },
    occasions: ["悼念", "祝贺"],
    taboos: [
      "白菊在中国、日本与部分欧洲国家常用于悼念；黄菊在中国也常见于追思，但在日本更多与皇室/秋季相连。不要送病人、开业或喜事",
      "对猫狗有毒，花材不可入口",
      "不要把它当成可入口的花草；不提供任何食用建议"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "菊花含除虫菊酯类等成分，猫狗误食可流涎、呕吐、腹泻、共济失调。",
      children: "误食花、叶可致肠胃不适与口腔刺激，需远离幼儿。",
      note: "不提供食用或药用建议；相关饮食话题不在本站讨论。"
    },
    origin: "中国",
    habitat: "山地、林缘；全球园艺栽培",
    vaseLife: "7–10 天",
    press: "花瓣多，压前拆层；干燥后颜色会变深。",
    culture: "陶渊明「采菊东篱下」把菊花写成隐逸符号；日本皇室以菊纹为象征；欧洲则把菊花与万圣节、墓地相连。",
    poetry: "陶渊明《饮酒·其五》：『采菊东篱下，悠然见南山。』",
    myth: "重阳赏菊、饮菊花酒的习俗在民间流传；本站只记录文化意象，不提供任何饮用建议。",
    prompt: "用「葬礼与重阳同一朵花」写文化错位：在同一座城市，它既被摆上喜宴，也被放在墓前。",
    misuse: "把白菊送给病人或开业场合；或把「菊花」只当成中国重阳花，忽略欧洲的葬礼语义。",
    trivia: "菊花是短日照植物；花型极多，从单瓣到重瓣球状都有。日本皇室菊纹通常是十六瓣八重表菊。",
    pairs: { ids: ["osmanthus", "camellia"], line: "菊花给秋的骨架，桂花添香，山茶在冷色里收尾。" },
    svg: { type: "pom", petals: 0, leaves: 3 }
  },
  {
    id: "carnation",
    no: 20,
    name: "康乃馨",
    en: "Carnation",
    latin: "Dianthus caryophyllus",
    family: "石竹科 · 石竹属",
    aliases: ["香石竹", "狮头石竹", "麝香石竹"],
    colors: [
      { hex: "#D79C9C", name: "藕粉", group: "粉" },
      { hex: "#A0432B", name: "胭脂", group: "红" },
      { hex: "#F6EEE2", name: "纸白", group: "白" },
      { hex: "#D9B23E", name: "淡黄", group: "黄" }
    ],
    form: "重瓣皱边",
    shapeGroup: "球状",
    inflorescence: "单生或聚伞",
    diameter: "5–8 cm",
    height: "40–80 cm",
    bloom: [4, 5, 6],
    scent: { level: "淡", desc: "丁香—辛香，靠近才明显；部分品种几乎无香。" },
    language: {
      positive: "母爱、感恩、祝福、温柔的力量",
      negative: "被母亲节规定的感恩；黄色在部分花语中的失意",
      cultural: "中文多取「母爱、感恩」，西式常取 admiration/mother's love，日式常见「母の愛、感謝」；但中国传统的母亲花常指萱草，不是康乃馨。"
    },
    cultureMeanings: {
      cn: "康乃馨在 20 世纪后期随母亲节进入中文语境；中国传统的母亲花常指萱草（忘忧草），两者不要混为一谈。",
      west: "康乃馨与母亲节的绑定来自 Anna Jarvis 的倡导；英语花语中粉色常指 gratitude，红色偏爱，白色偏纪念，黄色在部分维多利亚花语中偏拒绝/失望。",
      jp: "日式花语常见「母の愛、感謝、尊敬」；母亲节赠康乃馨在日本也很普遍。"
    },
    occasions: ["探病", "婚礼"],
    taboos: [
      "对猫狗有轻毒，误食可致肠胃不适",
      "不要把康乃馨说成中国传统的母亲花；萱草才是更早的本土意象",
      "黄色康乃馨在部分花语中表示拒绝/失望，送前看语境"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "康乃馨对猫狗有轻毒，误食可致呕吐、腹泻与口腔刺激。",
      children: "误食花材可致肠胃不适，需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "地中海沿岸",
    habitat: "岩坡、草甸；全球温室栽培",
    vaseLife: "7–10 天",
    press: "花瓣厚而皱，压前拆层；干燥后颜色保持较好。",
    culture: "母亲节让康乃馨成为全球最常见的「感恩花」；中国本土的母亲花传统更常指向萱草。",
    poetry: "孟郊《游子吟》常被用来配康乃馨，但诗中并没有康乃馨；这是现代花艺的「主题借用」。",
    myth: "Dianthus 在希腊语中意为「神的花」；康乃馨的学名由此而来。",
    prompt: "用母亲节的反面写「被规定的感恩」：花店替你选好了颜色，但你和母亲之间的话还没选好。",
    misuse: "把康乃馨当成中国本土的母亲花；或忽略黄色康乃馨在部分花语中的拒绝含义。",
    trivia: "康乃馨是石竹属植物；花语按颜色分化很细，同一束里不同颜色可能互相打架。",
    pairs: { ids: ["china-rose", "lisianthus"], line: "康乃馨做皱边，月季给粉底，洋桔梗把甜度收住。" },
    svg: { type: "rosette", petals: 8, leaves: 3 }
  },
  {
    id: "gypsophila",
    no: 21,
    name: "满天星",
    en: "Baby's Breath",
    latin: "Gypsophila paniculata",
    family: "石竹科 · 石头花属",
    aliases: ["圆锥石头花", "霞草", "宿根满天星"],
    colors: [
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#E0B4B4", name: "淡粉", group: "粉" }
    ],
    form: "圆锥聚伞 / 小花",
    shapeGroup: "枝状",
    inflorescence: "圆锥聚伞花序",
    diameter: "0.3–0.6 cm（单花）",
    height: "60–100 cm",
    bloom: [5, 6, 7, 8],
    scent: { level: "淡", desc: "几乎无香，只有一点青草气；干燥后气味更淡。" },
    language: {
      positive: "思念、守护、永恒的爱、留白",
      negative: "被当作配角；过度甜腻的「永远」",
      cultural: "中文多取「思念、守护」，西式常取 everlasting love/innocence，日式「かすみ草」常取「純粋、永遠の愛、幸福」；三者的共同点是「轻」。"
    },
    cultureMeanings: {
      cn: "满天星在现代中文花束里常被当作「配花」，花语多取「思念、守护」；单独成束则是近年的花艺趋势。",
      west: "英语花语中 baby's breath 常指 everlasting love、innocence、purity；婚礼花束里很常见。",
      jp: "日式「かすみ草」常取「純粋、永遠の愛、幸福」；「霞」的意象强调朦胧与留白。"
    },
    occasions: ["婚礼", "暗恋"],
    taboos: [
      "花粉/粉尘敏感者需注意；花材不可入口",
      "不要只用满天星填满整束花，它需要留白才好看",
      "染色满天星可能掉色，接触浅色衣物需小心"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "满天星未见明确猫狗毒性记录；仍不建议让宠物啃咬。",
      children: "花材不可入口；干燥后的小花容易散落，注意幼儿误食。",
      note: "不提供食用或药用建议。"
    },
    origin: "欧亚大陆",
    habitat: "草原、石灰质坡地；园艺栽培",
    vaseLife: "7–14 天；干燥后更久",
    press: "最适合压花的花材之一；小花干燥后仍能保持形状。",
    culture: "满天星从「配花」变成「主角」是近二十年花艺审美变化的结果；它也是婚礼花束里最常见的「空气感」来源。",
    poetry: "中国古诗没有对应的满天星意象；现代花艺文案常把它写成「隐藏的注视」。",
    myth: "满天星没有强神话源头；它的名字更多来自花序的视觉联想。",
    prompt: "用「配角」写被忽略的注视：镜头永远对准主角，但光是从她身后打过来的。",
    misuse: "把满天星只当成填充物；或忽略染色花材可能掉色、花粉可能引发过敏。",
    trivia: "市场上也有染成蓝、粉、紫的满天星；干花后颜色会变淡。它的属名 Gypsophila 意为「爱石灰的」。",
    pairs: { ids: ["rose", "lisianthus"], line: "满天星把空气留出来，玫瑰做重量，洋桔梗给一条干净的边。" },
    svg: { type: "cluster", petals: 5, leaves: 2 }
  },
  {
    id: "forget-me-not",
    no: 22,
    name: "勿忘我",
    en: "Forget-me-not",
    latin: "Myosotis sylvatica",
    family: "紫草科 · 勿忘我属",
    aliases: ["勿忘草", "森林勿忘我"],
    colors: [
      { hex: "#7D9BB8", name: "雾蓝", group: "蓝" },
      { hex: "#D8A8B8", name: "淡粉", group: "粉" },
      { hex: "#F7F0E4", name: "纸白", group: "白" }
    ],
    form: "小五瓣 / 聚伞",
    shapeGroup: "轮状",
    inflorescence: "聚伞花序",
    diameter: "0.5–0.8 cm",
    height: "15–40 cm",
    bloom: [4, 5, 6],
    scent: { level: "淡", desc: "几乎没有香气；靠近只有青草与湿土气。" },
    language: {
      positive: "永恒的记忆、真爱、勿忘",
      negative: "执念、无法放下；被名字绑架的深情",
      cultural: "中文多取「永恒的记忆、勿忘」，西式常取 remembrance/true love，日式常见「私を忘れないで、真実の愛」；三者都围绕「记住」，但语气不同。"
    },
    cultureMeanings: {
      cn: "「勿忘我」在中文里几乎是一个直白的祈使句，现代花艺多取「永恒的记忆」；但市场常把补血草也叫「勿忘我」。",
      west: "英语世界把 forget-me-not 与纪念、一战阵亡将士、阿尔茨海默症关怀相连；它也是阿拉斯加州花。",
      jp: "日式花语常见「私を忘れないで、真実の愛」；「勿忘草」的字面意思与中文相近。"
    },
    occasions: ["送别", "暗恋", "悼念"],
    taboos: [
      "市场「勿忘我」常指补血草（Limonium），不是真正的勿忘我；买前看清楚",
      "资料对宠物毒性不一致，按「不可误食」处理",
      "不要用「你忘了我吗」写操控式的情感"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "勿忘我的宠物毒性资料不一致，未见明确高风险记录；仍不应让宠物啃咬。",
      children: "花材不可入口；干燥花易碎，注意幼儿误食。",
      note: "不提供食用或药用建议；资料有限，不作安全保证。"
    },
    origin: "欧洲、亚洲温带",
    habitat: "林缘、草甸、溪边",
    vaseLife: "5–7 天",
    press: "小花适合压；干燥后蓝色会变淡，需避光保存。",
    culture: "勿忘我在一战后成为纪念花，也被用于阿尔茨海默症关怀；它的名字本身就是一个跨语言的祈使句。",
    poetry: "西方有「Forget me not」的民谣与纪念诗传统；中国古诗没有对应意象。",
    myth: "常见传说是骑士在河边为恋人摘花，被水流冲走前把花抛上岸并喊出「Forget me not」；版本因地区而异。",
    prompt: "用「名字被市场偷走」写错认：你买到的不是那朵花，但思念是真的。",
    misuse: "把补血草（Limonium）当成勿忘我；或把「勿忘」写成对别人的情感绑架。",
    trivia: "花店常见的「勿忘我」干花多为补血草；真正的勿忘我是紫草科的小蓝花，花心常有黄色小点。",
    pairs: { ids: ["gypsophila", "stock"], line: "勿忘我做记忆的点，满天星留白，紫罗兰把香气收进信里。" },
    svg: { type: "cluster", petals: 5, leaves: 2 }
  },
  {
    id: "cornflower",
    no: 23,
    name: "矢车菊",
    en: "Cornflower",
    latin: "Centaurea cyanus",
    family: "菊科 · 矢车菊属",
    aliases: ["蓝芙蓉", "车菊", "麦田蓝"],
    colors: [
      { hex: "#5E7FA8", name: "麦田蓝", group: "蓝" },
      { hex: "#8A6F9E", name: "灰紫", group: "紫" },
      { hex: "#D8A8B8", name: "淡粉", group: "粉" }
    ],
    form: "头状",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "3–5 cm",
    height: "40–90 cm",
    bloom: [5, 6, 7],
    scent: { level: "淡", desc: "清淡的青草气，几乎不构成花束的主要气味。" },
    language: {
      positive: "遇见、希望、优雅、麦田里的自由",
      negative: "易逝的蓝；被遗忘的野花",
      cultural: "中文现代花艺多取「遇见、幸福」，西式常取 hope in love/delicacy，日式常见「優雅、教育、信頼」；德国把它视为国花之一。"
    },
    cultureMeanings: {
      cn: "矢车菊在中国现代花艺中多取「遇见、幸福、优雅」；它不是本土传统花，而是欧洲麦田意象的移植。",
      west: "矢车菊是德国国花之一，也与普鲁士王后路易丝的故事相连；英语花语常取 hope in love、delicacy。",
      jp: "日式花语常见「優雅、教育、信頼」；「矢車」之名来自花序形状像车轮。"
    },
    occasions: ["暗恋", "祝贺"],
    taboos: [
      "不要与翠菊、矢车菊属的其他园艺种混为一谈",
      "野花不要采；使用园艺栽培花材",
      "花材不可入口；花粉敏感者注意"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "矢车菊未见明确猫狗毒性记录；仍不应让宠物啃食。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "欧洲",
    habitat: "麦田、路旁、草甸",
    vaseLife: "5–7 天",
    press: "花瓣薄，压后蓝色会变浅；适合做小标本。",
    culture: "矢车菊是德国国花之一，也是欧洲麦田中的「蓝眼睛」；它随农业与花艺传播到东亚。",
    poetry: "中国古诗没有对应的矢车菊意象；德语文学与民歌中它常与故乡、麦田相连。",
    myth: "传说青年 Cyanus 痴迷蓝色花，死后化为矢车菊；版本不一，是欧洲民间故事而非古典神话。",
    prompt: "用「麦田里的蓝」写被遗忘的野花：整片田只有它不肯黄。",
    misuse: "把矢车菊与翠菊混淆；或把德国国花的故事套到所有蓝色菊科花上。",
    trivia: "矢车菊的属名 Centaurea 与半人马 Chiron 有关；它曾是欧洲麦田常见杂草，如今也因除草剂而减少。",
    pairs: { ids: ["chamomile", "gypsophila"], line: "矢车菊给蓝，洋甘菊给白，满天星把麦田的风留出来。" },
    svg: { type: "disc", petals: 12, leaves: 3 }
  },
  {
    id: "hyacinth",
    no: 24,
    name: "风信子",
    en: "Hyacinth",
    latin: "Hyacinthus orientalis",
    family: "天门冬科 · 风信子属",
    aliases: ["洋水仙", "五色水仙", "时样锦"],
    colors: [
      { hex: "#6E5A8A", name: "深紫", group: "紫" },
      { hex: "#6D86A8", name: "雾蓝", group: "蓝" },
      { hex: "#D79C9C", name: "藕粉", group: "粉" },
      { hex: "#F7F0E3", name: "纸白", group: "白" }
    ],
    form: "穗状 / 总状",
    shapeGroup: "穗状",
    inflorescence: "总状花序",
    diameter: "花穗 5–10 cm",
    height: "20–40 cm",
    bloom: [3, 4],
    scent: { level: "浓", desc: "甜而粉的香气，室内一盆就足够；不同花色香气略有差异。" },
    language: {
      positive: "重生、恒心、真诚、春天的第一口气",
      negative: "嫉妒、游戏人间的旧义；香气过浓的压迫",
      cultural: "中文多取「重生的爱、胜利」，西式常取 constancy/sincerity，日式常见「スポーツ、ゲーム、富」；黄色风信子在部分花语中与嫉妒相连。"
    },
    cultureMeanings: {
      cn: "风信子在中文花艺中多取「重生的爱、胜利、忘记过去的爱」；它是球根花市里最早报春的花之一。",
      west: "英语花语中 hyacinth 常指 constancy、sincerity；紫色偏「请原谅我」，蓝色偏「真诚」，黄色在部分版本中偏嫉妒。",
      jp: "日式花语常见「スポーツ、ゲーム、富」；与希腊神话中的少年 Hyacinthus 同名。"
    },
    occasions: ["祝贺", "道歉"],
    taboos: [
      "球根有毒，猫狗与儿童误食风险高；水培水也要远离",
      "浓香不适合探病或密闭小空间",
      "不要与洋葱/蒜等食材混放"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "风信子球根含草酸钙等刺激物，猫狗误食可流涎、呕吐、腹泻；水培水也不应饮用。",
      children: "误食球根风险较高，需远离幼儿与玩土的宠物。",
      note: "不提供食用或药用建议；处理球根后洗手。"
    },
    origin: "地中海东部",
    habitat: "山地、草甸；温带球根花卉",
    vaseLife: "5–7 天",
    press: "花瓣薄，适合压；花穗可分段压。",
    culture: "风信子是荷兰球根贸易的重要花材；它的名字来自希腊神话中被阿波罗与西风神争夺的少年。",
    poetry: "中国古诗没有对应的风信子意象；它是近代传入的球根花卉。",
    myth: "阿波罗与西风神泽费罗斯在掷铁饼时误伤少年 Hyacinthus，血泊中长出风信子；花瓣上的纹路被解释为哀悼的痕迹。",
    prompt: "用「球根休眠」写重生：地上部分枯死，不代表地下没有在准备下一次开花。",
    misuse: "把风信子当水仙或洋葱；或忽略球根与宠物/儿童的风险。",
    trivia: "风信子可以水培，根须白色；球根在花期后需要养叶才能复花。它的香气在室温下会变得很浓。",
    pairs: { ids: ["tulip", "iris"], line: "风信子做香气的柱，郁金香给杯形，鸢尾在紫里加一道冷光。" },
    svg: { type: "spike", petals: 6, leaves: 3 }
  },
  {
    id: "lisianthus",
    no: 25,
    name: "洋桔梗",
    en: "Lisianthus",
    latin: "Eustoma grandiflorum",
    family: "龙胆科 · 洋桔梗属",
    aliases: ["土耳其桔梗", "草原龙胆", "丽钵花"],
    colors: [
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#8A6F9E", name: "灰紫", group: "紫" },
      { hex: "#9AA98C", name: "叶绿", group: "绿" }
    ],
    form: "杯状 / 重瓣",
    shapeGroup: "杯状",
    inflorescence: "单生或聚伞",
    diameter: "5–8 cm",
    height: "40–90 cm",
    bloom: [6, 7, 8],
    scent: { level: "无", desc: "几乎没有香气；对探病与密闭空间友好。" },
    language: {
      positive: "真诚不变的爱、纯洁、感谢、克制的温柔",
      negative: "无香的克制；被误认为「桔梗」的替身",
      cultural: "中文多取「真诚不变的爱」，西式常取 appreciation/charm，日式常见「希望、誠実、変わらぬ愛」；它的日本名「土耳其桔梗」与原产地并不相符。"
    },
    cultureMeanings: {
      cn: "洋桔梗是近年中文花艺的常见切花，花语多取「真诚不变的爱、纯洁」；它与中药里的桔梗不是同一种。",
      west: "英语花语中 lisianthus 常指 appreciation、charm、showy gratitude；婚礼与手捧花中很常见。",
      jp: "日式花语常见「希望、誠実、変わらぬ愛」；日本是洋桔梗的重要育种与生产国。"
    },
    occasions: ["婚礼", "探病", "告白"],
    taboos: [
      "不要与桔梗（Platycodon）混为一谈，两者科属不同",
      "花材不可入口；对猫狗未见明确高毒记录，但仍不应啃咬",
      "无香适合探病，但仍需先确认医院规定"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "洋桔梗未见明确猫狗毒性记录；仍不建议让宠物啃咬。",
      children: "花材不可入口；花瓶水要倒掉。",
      note: "不提供食用或药用建议。"
    },
    origin: "北美南部、墨西哥",
    habitat: "草原、湿润开阔地；全球温室栽培",
    vaseLife: "7–10 天",
    press: "花瓣薄，适合压；重瓣品种压后层次会变平。",
    culture: "洋桔梗在日本被大量育种，日文名「トルコキキョウ」容易让人误以为原产土耳其；它其实是北美植物。",
    poetry: "中国古诗没有对应的洋桔梗意象；它是现代切花市场的产物。",
    myth: "洋桔梗没有强神话源头；它的名字 Eustoma 意为「美丽的嘴」，指花冠形状。",
    prompt: "用「没有香味」写克制的爱：它不靠气味宣告自己，只靠花瓣的边线。",
    misuse: "把洋桔梗当成桔梗；或因为它无香就忽略医院对盆栽/土壤的限制。",
    trivia: "洋桔梗的日文名是「土耳其桔梗」，但它原产北美；「桔梗」在中文里另有一种蓝紫色五瓣花。",
    pairs: { ids: ["rose", "gypsophila"], line: "洋桔梗做柔边，玫瑰给重心，满天星把白留成雾。" },
    svg: { type: "rosette", petals: 6, leaves: 3 }
  },
  {
    id: "hibiscus",
    no: 26,
    name: "木槿",
    en: "Rose of Sharon",
    latin: "Hibiscus syriacus",
    family: "锦葵科 · 木槿属",
    aliases: ["无穷花", "朝开暮落花", "白槿花"],
    colors: [
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#8A6F9E", name: "灰紫", group: "紫" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#B0574F", name: "砖红", group: "红" }
    ],
    form: "五瓣喇叭 / 轮状",
    shapeGroup: "喇叭",
    inflorescence: "单生或簇生",
    diameter: "5–8 cm",
    height: "200–400 cm",
    bloom: [7, 8, 9],
    scent: { level: "淡", desc: "清淡的青草气，几乎没有香味；单朵花只开一日。" },
    language: {
      positive: "温柔的坚持、朝开暮落、生生不息",
      negative: "一日之美；被误读为「短命」",
      cultural: "中文多取「温柔的坚持、朝开暮落」，西式常取 delicate beauty/consumed by love，日式常见「信念、新しい美」；韩国称它「无穷花」，强调反复开放。"
    },
    cultureMeanings: {
      cn: "木槿在《诗经》里以「舜华」出现，形容女子容颜；「朝开暮落」让它在中文里既有短暂，也有「第二天还会开」的韧性。",
      west: "英语花语中 rose of Sharon 常指 delicate beauty、consumed by love；《雅歌》中的「沙仑玫瑰」常被误配到它身上，具体植物身份有争议。",
      jp: "日式花语常见「信念、新しい美」；「ムクゲ」是日本夏季常见的庭园花。"
    },
    occasions: ["送别", "暗恋"],
    taboos: [
      "单朵花只开一日，不适合远途或需要长时间陈列的场合",
      "不要与扶桑/朱槿（Hibiscus rosa-sinensis）混为一谈",
      "花材不可入口；花粉敏感者注意"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "木槿未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议；韩国的「无穷花」是文化符号，不是食用建议。"
    },
    origin: "中国、印度",
    habitat: "山地、庭院栽培",
    vaseLife: "1–2 天（单朵）",
    press: "花瓣薄，需当天压；隔夜容易合拢或褪色。",
    culture: "木槿是韩国国花「无穷花」，也是中国《诗经》里的「舜华」；它的单朵花只开一日，但整株花期很长。",
    poetry: "《诗经·郑风·有女同车》：『有女同车，颜如舜华。』「舜华」即木槿花。",
    myth: "木槿「朝开暮落」的习性被用来比喻容颜易逝，也被反转为「日复一日地重新开放」；两种读法并存。",
    prompt: "用「一日花」写短暂与重复：每一朵都只活一天，但整棵树没有停过。",
    misuse: "把木槿与扶桑/朱槿混淆；或只写「短命」，忽略它反复开花的韧性。",
    trivia: "木槿单朵花只开一日，但整株花期可从夏到秋；韩国国歌中提到的「无穷花」就是木槿。",
    pairs: { ids: ["lotus", "gardenia"], line: "木槿做一日的粉，荷花给静水，栀子把香气留在傍晚。" },
    svg: { type: "hibiscus", petals: 5, leaves: 3 }
  },
  {
    id: "lotus",
    no: 27,
    name: "荷花",
    en: "Lotus",
    latin: "Nelumbo nucifera",
    family: "莲科 · 莲属",
    aliases: ["莲花", "芙蕖", "水华"],
    colors: [
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#B0574F", name: "胭脂", group: "红" },
      { hex: "#D9B23E", name: "莲心金", group: "黄" }
    ],
    form: "杯状 / 重瓣",
    shapeGroup: "杯状",
    inflorescence: "单生",
    diameter: "10–25 cm",
    height: "100–200 cm（挺水）",
    bloom: [6, 7, 8, 9],
    scent: { level: "淡", desc: "清淡的水汽与粉香，靠近才有；荷叶有青草气。" },
    language: {
      positive: "清廉、纯洁、君子、觉悟",
      negative: "被道德化的「出淤泥」；只被允许纯洁",
      cultural: "中文多取「清廉、君子、佛教」，西式常取 enlightenment/purity，日式常见「清らか、悟り、極楽」；三者都与「不染」有关，但宗教背景不同。"
    },
    cultureMeanings: {
      cn: "周敦颐《爱莲说》把荷花写成「出淤泥而不染」的君子；荷花也是佛教莲座的意象，中国园林与年画里都很常见。",
      west: "英语世界把 lotus 与「忘忧」「觉悟」相连，但有时会把荷花与睡莲（water lily）混为一谈；两者是不同科。",
      jp: "日式花语常见「清らか、悟り、極楽」；荷花在佛教语境中象征净土，也常用于佛前供花。"
    },
    occasions: ["婚礼", "祝贺"],
    taboos: [
      "不要与睡莲（Nymphaea）混为一谈；荷花叶片挺水，睡莲多浮水",
      "不要写采莲、采藕或食用建议；水域植物也可能有农药/污染",
      "花材不可入口；花粉敏感者注意"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "荷花未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；相关饮食话题不在本站讨论。",
      note: "不提供食用或药用建议；不要自行采食水生植物。"
    },
    origin: "亚洲、澳大利亚",
    habitat: "静水池塘、湖泊、水田",
    vaseLife: "3–5 天",
    press: "花瓣薄，压后颜色会淡；花托厚，可单独干燥。",
    culture: "荷花在中国文化里同时属于文人、佛教与民间年画；「莲」与「廉」同音，也让它在官场语境里成为清廉符号。",
    poetry: "杨万里《晓出净慈寺送林子方》：『接天莲叶无穷碧，映日荷花别样红。』",
    myth: "哪吒「莲花化身」与佛教莲座是两个不同的叙事传统；它们共享莲花意象，但来源不同。",
    prompt: "用「出淤泥」写道德表演：所有人都在夸它干净，没人问它愿不愿意一直站在水里。",
    misuse: "把荷花与睡莲混为一谈；或把「出淤泥而不染」当成对所有人的道德要求。",
    trivia: "荷花是莲科，睡莲是睡莲科；荷花叶片通常挺出水面，睡莲叶片多浮在水面。荷花的花托就是莲蓬。",
    pairs: { ids: ["hibiscus", "gardenia"], line: "荷花给静水，木槿给一日的粉，栀子把香气压在水面。" },
    svg: { type: "lotus", petals: 8, leaves: 2 }
  },
  {
    id: "stock",
    no: 28,
    name: "紫罗兰",
    en: "Stock",
    latin: "Matthiola incana",
    family: "十字花科 · 紫罗兰属",
    aliases: ["草紫罗兰", "香紫罗兰", "Matthiola"],
    colors: [
      { hex: "#6E5A8A", name: "深紫", group: "紫" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" }
    ],
    form: "穗状 / 重瓣",
    shapeGroup: "穗状",
    inflorescence: "总状花序",
    diameter: "花穗 5–10 cm",
    height: "30–60 cm",
    bloom: [3, 4, 5],
    scent: { level: "浓", desc: "甜而粉的丁香—紫罗兰香，室内会显得很满；重瓣品种更香。" },
    language: {
      positive: "永恒的美、忠实、质朴的优雅",
      negative: "名字被占用的替身；浓香造成的压迫",
      cultural: "中文多取「永恒的美、质朴」，西式常取 faithfulness/eternal love/lasting beauty，日式常见「永遠の美、愛の絆」；它常被与非洲紫罗兰、Viola 混淆。"
    },
    cultureMeanings: {
      cn: "紫罗兰在中文花艺中多取「永恒的美、清凉、质朴」；但「紫罗兰」这个名字在市场上常被用于不同植物。",
      west: "英语花语中 stock 常指 lasting beauty、faithfulness、eternal love；维多利亚花束里很常见。",
      jp: "日式花语常见「永遠の美、愛の絆」；「ストック」也是日本春季花市的常见切花。"
    },
    occasions: ["暗恋", "婚礼"],
    taboos: [
      "不要与非洲紫罗兰（Saintpaulia）或堇菜属的紫罗兰（Viola）混淆",
      "浓香不适合探病或密闭小空间",
      "花材不可入口；花粉敏感者注意"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "紫罗兰（Matthiola）未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；浓香时注意通风。",
      note: "不提供食用或药用建议。"
    },
    origin: "地中海沿岸",
    habitat: "岩坡、海岸；园艺栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄，压后颜色保持较好；花穗可分小段压。",
    culture: "紫罗兰是欧洲春季花市与维多利亚花束的常客；「stock」在英语里也有「库存/基底」之意，常被用作花束的香气骨架。",
    poetry: "中国古诗没有对应的紫罗兰意象；现代诗常把它写成「名字被占用的花」。",
    myth: "紫罗兰没有强神话源头；它的名字 Matthiola 纪念意大利植物学家 Pietro Andrea Mattioli。",
    prompt: "用「名字被占用」写替身：你叫紫罗兰，但花店里的紫罗兰是另一个物种。",
    misuse: "把紫罗兰（Matthiola）与非洲紫罗兰、Viola 混为一谈；或忽略浓香对探病场合的影响。",
    trivia: "花店里的「紫罗兰」通常是十字花科的 Matthiola incana，不是堇菜科的 Viola；非洲紫罗兰又是另一科。",
    pairs: { ids: ["iris", "forget-me-not"], line: "紫罗兰做香气的柱，鸢尾给冷紫，勿忘我把记忆压小。" },
    svg: { type: "spike", petals: 4, leaves: 3 }
  },
  {
    id: "calendula",
    no: 29,
    name: "金盏花",
    en: "Calendula",
    latin: "Calendula officinalis",
    family: "菊科 · 金盏花属",
    aliases: ["金盏菊", "常春花", "黄金盏"],
    colors: [
      { hex: "#D9A62E", name: "金盏", group: "黄" },
      { hex: "#C9762F", name: "橙金", group: "橙" }
    ],
    form: "头状",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "3–6 cm",
    height: "30–60 cm",
    bloom: [4, 5, 6, 7, 8, 9, 10, 11],
    scent: { level: "淡", desc: "淡淡的树脂—青草气，花瓣有黏感；不靠香气取胜。" },
    language: {
      positive: "守护、温暖、别离后的安慰",
      negative: "悲伤、失望、嫉妒（维多利亚花语常见于 marigold，需区分）",
      cultural: "中文现代花艺对金盏花的花语并不固定，常取「离别、守护」；西式维多利亚花语常把 marigold 写成 grief/despair/jealousy；日式常见「失望、悲しみ、別れ」。"
    },
    cultureMeanings: {
      cn: "金盏花在中国现代花艺中常取「离别、守护、温暖」，但并非固定传统；它更多是欧洲花坛植物。",
      west: "英语花语中 marigold 常指 grief、despair、jealousy，也有「comfort」的版本；金盏花（Calendula）与万寿菊（Tagetes）常被混称。",
      jp: "日式花语常见「失望、悲しみ、別れ」；「マリーゴールド」多指万寿菊，与金盏花并非同属。"
    },
    occasions: ["送别", "道歉"],
    taboos: [
      "不要与万寿菊（Tagetes）混为一谈；两者同科不同属",
      "不要入口花瓣；本站不作食用建议",
      "墨西哥亡灵节用的是万寿菊，不是金盏花，引用时需区分"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "金盏花未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；过敏体质注意。",
      note: "不提供食用、药用或护肤建议。"
    },
    origin: "地中海沿岸",
    habitat: "田野、花园；温带栽培",
    vaseLife: "5–7 天",
    press: "花瓣厚，压前拆层；干燥后颜色偏橙褐。",
    culture: "金盏花在欧洲花园与草药传统中很常见；墨西哥亡灵节的万寿菊是另一属植物，常被中文误配。",
    poetry: "中国古诗没有对应的金盏花意象；它是近代传入的花坛植物。",
    myth: "金盏花没有强神话源头；「marigold」之名常与圣母玛利亚的节日相连，但词源与植物对应关系有争议。",
    prompt: "用「被误认的悲伤」写替身：别人把万寿菊的故事安在你头上，你只能开着另一种橙。",
    misuse: "把金盏花与万寿菊混为一谈；或把墨西哥亡灵节的万寿菊意象直接套到金盏花上。",
    trivia: "金盏花（Calendula）与万寿菊（Tagetes）同属菊科但不同属；花店常把两者都叫「marigold」。",
    pairs: { ids: ["sunflower", "chrysanthemum"], line: "金盏花压低橙色，向日葵给主光，菊花把秋天收住。" },
    svg: { type: "disc", petals: 16, leaves: 3 }
  },
  {
    id: "dandelion",
    no: 30,
    name: "蒲公英",
    en: "Dandelion",
    latin: "Taraxacum officinale",
    family: "菊科 · 蒲公英属",
    aliases: ["婆婆丁", "黄花地丁", "蒲公草"],
    colors: [
      { hex: "#D9B23E", name: "蒲公英黄", group: "黄" },
      { hex: "#F8F1E5", name: "冠毛白", group: "白" },
      { hex: "#7A8564", name: "叶绿", group: "绿" }
    ],
    form: "头状 / 舌状",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "2–4 cm",
    height: "10–30 cm",
    bloom: [3, 4, 5, 6],
    scent: { level: "淡", desc: "淡淡的青草气，花心有一点蜜味；不构成花束香气。" },
    language: {
      positive: "无法停留的爱、自由、勇敢、许愿",
      negative: "漂泊、无根；被风吹散的承诺",
      cultural: "中文现代花语多取「无法停留的爱、自由」，西式常取 love's oracle/wishes，日式常见「愛の神託、幸福、別離」；三者都围绕「风把种子带走」。"
    },
    cultureMeanings: {
      cn: "蒲公英在中国现代花艺中多取「无法停留的爱、自由、勇敢」；它也是乡野与童年的常见意象。",
      west: "英语世界常把蒲公英种子与「许愿」相连，也有「love me, love me not」的占卜游戏；花语并不固定。",
      jp: "日式花语常见「愛の神託、幸福、別離」；「タンポポ」是春季季语。"
    },
    occasions: ["送别", "暗恋"],
    taboos: [
      "不要自行采食路边植物；可能有农药或污染",
      "种子冠毛易飞散，室内与过敏人群需注意",
      "花材不可入口；不要让宠物啃咬"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "蒲公英未见明确猫狗毒性记录；路边植物可能有农药，仍不应让宠物啃咬。",
      children: "花材不可入口；种子冠毛可能引起呼吸道刺激。",
      note: "不提供食用或药用建议；不要自行采食野生植物。"
    },
    origin: "欧亚大陆",
    habitat: "草地、路旁、荒地",
    vaseLife: "1–2 天（花/种子）",
    press: "花朵可压；种子冠毛不适合压，可单独干燥。",
    culture: "蒲公英在歐洲、日本与中国都是常见的乡野植物；「吹蒲公英许愿」是现代全球共享的童年动作。",
    poetry: "中国古诗没有固定的蒲公英意象；现代诗常把它写成离开、漂泊与许愿。",
    myth: "蒲公英没有强神话源头；「吹散种子许愿」是民间习俗，不是古典神话。",
    prompt: "用「种子」写离开：它没有选择风向，但选择了起飞。",
    misuse: "把蒲公英只当杂草；或自行采食路边植物。",
    trivia: "蒲公英的「绒球」是种子上的冠毛；一个头状花序由许多小花组成。它在温带可全年开花。",
    pairs: { ids: ["cornflower", "chamomile"], line: "蒲公英给风，矢车菊给蓝，洋甘菊把低处照亮。" },
    svg: { type: "disc", petals: 16, leaves: 3 }
  },
{
    id: "moonflower",
    no: 31,
    name: "月光花",
    en: "Moonflower",
    latin: "Ipomoea alba",
    family: "旋花科 · 番薯属",
    aliases: ["夜光花", "月华花"],
    colors: [
      { hex: "#F8F1E5", name: "月白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#6E7A58", name: "藤绿", group: "绿" }
    ],
    form: "漏斗状",
    shapeGroup: "喇叭",
    inflorescence: "单生或聚伞",
    diameter: "8–15 cm",
    height: "藤本 2–5 m",
    bloom: [7, 8, 9],
    scent: { level: "浓", desc: "夜间开放的甜香，越晚越明显；白天几乎闻不到。" },
    language: {
      positive: "夜晚的思念、短暂的相遇、等待",
      negative: "只在夜里出现的关系；见不得光的温柔",
      cultural: "中文多取「夜之思念」，西式常与 moon garden、夜间绽放相连，日式常写「夜咲き」的虚幻；三者都围绕「夜里才出现」。"
    },
    cultureMeanings: {
      cn: "月光花在中文花艺里常取「夜之思念、等待」，名字本身就把「月」与「夜」绑在一起。",
      west: "英语中 moonflower 常指夜间开花的旋花科植物，是 moon garden（月园）的核心花材；花语多取 mystery、night beauty。",
      jp: "日式花语中「夜咲き」常与短暂、隐秘相连；月光花不是日本传统花材，更多是现代园艺引进。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "种子与汁液不可入口；猫狗、儿童误食需就医",
      "不要与牵牛花、昙花（月下美人）混为一谈",
      "夜间开花，白天观赏性差；不适合白天活动的主花"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "旋花科植物种子与汁液可能含生物碱，猫狗误食可致呕吐、腹泻；不要让宠物啃咬藤叶。",
      children: "种子与汁液不可入口，误食需就医；藤蔓也会缠绕幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "热带美洲",
    habitat: "篱垣、林缘、河岸灌丛",
    vaseLife: "1–2 天（夜间开放）",
    press: "花瓣薄，适合单层压；干燥后白色会转米黄。",
    culture: "月光花与牵牛花同科，欧美月园常把它种在窗边，等夜里开花；它的花期短，香气比花本身更持久。",
    poetry: "中国古诗没有对应的月光花意象；现代诗常把它写成「只在晚上出现的人」。",
    myth: "月光花没有强神话源头；「月下开花」更多是园艺传统与夜晚想象。",
    prompt: "用「只在夜里开」写秘密：白天看不见，不代表它不存在。",
    misuse: "把月光花当成牵牛花或昙花（月下美人）；或忽略它夜间开放、白天闭合的特性。",
    trivia: "月光花的花在傍晚开放、清晨闭合；它属于旋花科，和牵牛花是近亲，不是昙花。",
    pairs: { ids: ["jasmine", "gardenia"], line: "月光花做夜色，茉莉添香，栀子把白留在窗边。" },
    svg: { type: "trumpet", petals: 6, leaves: 3 }
  },
  {
    id: "silk-tree",
    no: 32,
    name: "合欢",
    en: "Silk Tree",
    latin: "Albizia julibrissin",
    family: "豆科 · 合欢属",
    aliases: ["绒花树", "马缨花", "合昏"],
    colors: [
      { hex: "#D98FA0", name: "合欢粉", group: "粉" },
      { hex: "#F2D7D5", name: "浅粉", group: "粉" },
      { hex: "#6E7A58", name: "羽叶绿", group: "绿" }
    ],
    form: "绒球状头状花序",
    shapeGroup: "球状",
    inflorescence: "头状花序",
    diameter: "3–5 cm",
    height: "400–1200 cm",
    bloom: [6, 7],
    scent: { level: "淡", desc: "清淡的甜香，靠近才有；羽状叶有青草气。" },
    language: {
      positive: "言归于好、和睦、欢乐",
      negative: "表面和气；夜合昼开的反复",
      cultural: "中文「合欢蠲忿」把合欢写成消解怨气的树，西式 silk tree 没有固定花语，日式「合歓」常取「歓喜、和睦」；三者都指向「和好」。"
    },
    cultureMeanings: {
      cn: "嵇康《养生论》有「合欢蠲忿，萱草忘忧」，合欢因此成为和解、和睦的象征；合欢树也常种在庭院。",
      west: "英语世界多称 silk tree 或 mimosa tree，花语不如玫瑰固定，常取 delicate beauty、summer shade。",
      jp: "日式「合歓の花」常取「歓喜、和睦」；「ねむの木」的叶在夜间闭合，也被写成「睡」的意象。"
    },
    occasions: ["婚礼", "道歉", "祝贺"],
    taboos: [
      "花粉与绒毛可能引发过敏；敏感人群注意",
      "种子与荚果不可入口，不要让宠物啃咬",
      "不要与银合欢、含羞草混为一谈"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "合欢未见明确猫狗毒性记录；种子与荚果仍不应入口。",
      children: "花材不可入口；花粉/绒毛敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国、东亚",
    habitat: "山地、林缘、庭院栽培",
    vaseLife: "2–3 天（绒花易落）",
    press: "绒状花不适合传统压花；可整朵干燥，形态会塌。",
    culture: "合欢在中国庭院里既是遮阴树，也是「蠲忿」的和解符号；日本「合歓」与「眠」的读音联想，让它带上一层夜合昼开的柔意。",
    poetry: "嵇康《养生论》：『合欢蠲忿，萱草忘忧。』这是「合欢」最常被引用的句子之一。",
    myth: "传说虞舜南巡去世，娥皇、女英的泪水洒在树上，叶随夜合、花带粉色，化为合欢；版本因地区而异。",
    prompt: "用「合欢蠲忿」写和解：不是忘记，而是把刺收起来，先让叶子在夜里合上。",
    misuse: "把合欢与银合欢、含羞草混为一谈；或把「合欢」直接当成爱情，而忽略它更核心的「和解」。",
    trivia: "合欢的羽状叶在夜间闭合，所以又名「合昏」；它的粉色「绒球」其实是许多小花的花丝。",
    pairs: { ids: ["rose", "hydrangea"], line: "合欢做一团粉雾，玫瑰给重量，绣球把「和好」托圆。" },
    svg: { type: "silk", petals: 0, leaves: 3 }
  },
  {
    id: "lilac",
    no: 33,
    name: "紫丁香",
    en: "Lilac",
    latin: "Syringa vulgaris",
    family: "木犀科 · 丁香属",
    aliases: ["丁香", "洋丁香"],
    colors: [
      { hex: "#8A6F9E", name: "丁香紫", group: "紫" },
      { hex: "#B39BC4", name: "浅紫", group: "紫" },
      { hex: "#F7F0E4", name: "纸白", group: "白" }
    ],
    form: "小四瓣 / 圆锥花序",
    shapeGroup: "枝状",
    inflorescence: "圆锥花序",
    diameter: "单花 1–1.5 cm / 花序 10–20 cm",
    height: "200–700 cm",
    bloom: [4, 5],
    scent: { level: "浓", desc: "甜而粉的丁香香，一树开花能覆盖整个院子；阴天更明显。" },
    language: {
      positive: "初恋、纯洁、青春的记忆",
      negative: "丁香结般的愁怨；未解的心事",
      cultural: "中文「丁香结」常写愁，西式 lilac 常取 first love、youthful innocence，日式「ライラック」常取「初恋、友情」；三者共享「青春」，但中文更偏「结」。"
    },
    cultureMeanings: {
      cn: "紫丁香在中文文学里常与「丁香结」相连，李璟「丁香空结雨中愁」、戴望舒《雨巷》都把它写成未解的愁。",
      west: "英语花语中 lilac 常指 first love、youthful innocence、memory；紫色偏「初恋」，白色偏「纯洁」。",
      jp: "日式花语常见「初恋、友情、青春の思い出」；北海道等地的丁香花季也很有名。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "与香料丁香（Syzygium aromaticum）不是同一种，不要混用",
      "浓香不适合探病或密闭小空间",
      "花材不可入口；花粉敏感者注意"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "丁香属未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；浓香时注意通风。",
      note: "不提供食用或药用建议；香料丁香是另一种植物。"
    },
    origin: "巴尔干半岛、欧洲东南部",
    habitat: "山地、林缘；温带庭院栽培",
    vaseLife: "5–7 天",
    press: "小花可整簇压；干燥后紫色会变深。",
    culture: "紫丁香是欧洲春季庭院与哈尔滨等北方城市的常见花；中文「丁香结」让它带上愁绪，西式则更偏青春与初恋。",
    poetry: "李璟《摊破浣溪沙》：『青鸟不传云外信，丁香空结雨中愁。』戴望舒《雨巷》也把丁香写成「结着愁怨的姑娘」。",
    myth: "紫丁香没有强神话源头；「丁香结」是文学比喻，不是植物学结构。",
    prompt: "用「丁香结」写未解的心事：花开了，结还在。",
    misuse: "把紫丁香与香料丁香（桃金娘科）混为一谈；或把「丁香」一律写成愁，忽略西式的初恋/青春。",
    trivia: "紫丁香是木犀科丁香属；香料丁香是桃金娘科蒲桃属，两者只是中文名相同。",
    pairs: { ids: ["lavender", "iris"], line: "紫丁香做香气的云，薰衣草拉长，鸢尾给一条冷色的路。" },
    svg: { type: "cluster", petals: 4, leaves: 3 }
  },
  {
    id: "moth-orchid",
    no: 34,
    name: "蝴蝶兰",
    en: "Moth Orchid",
    latin: "Phalaenopsis spp.",
    family: "兰科 · 蝴蝶兰属",
    aliases: ["蝶兰", "台湾蝴蝶兰"],
    colors: [
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#8A6F9E", name: "兰紫", group: "紫" },
      { hex: "#D9B23E", name: "蕊金", group: "黄" }
    ],
    form: "蝶形",
    shapeGroup: "蝶形",
    inflorescence: "总状花序",
    diameter: "5–10 cm",
    height: "30–80 cm",
    bloom: [1, 2, 3, 4, 5],
    scent: { level: "无", desc: "多数品种几乎无香；少数有清淡的兰香。" },
    language: {
      positive: "幸福向你飞来、高洁、仕途顺畅",
      negative: "被摆布的优雅；花期过长的「塑料感」",
      cultural: "中文多取「幸福向你飞来」，西式 moth orchid 常取 elegance、luxury、refined love，日式「胡蝶蘭」常取「幸福が飛んでくる」；三者都把「蝴蝶」当成祝福。"
    },
    cultureMeanings: {
      cn: "蝴蝶兰是中文年花与开业花篮的常客，「幸福向你飞来」是最常见的商业花语；台湾也是重要产区。",
      west: "英语世界称它为 moth orchid，常与 elegance、luxury、refined beauty 相连；婚礼与高级花艺中常见。",
      jp: "日式花语常见「幸福が飛んでくる、純粋な愛、華やかさ」；「胡蝶蘭」在开业与婚礼中很常用。"
    },
    occasions: ["祝贺", "婚礼"],
    taboos: [
      "花材不可入口；猫狗误食风险低但仍不应啃咬",
      "不要用铁丝强行扭出「自然」造型，花梗会受伤",
      "不要与石斛、卡特兰等兰花混为一谈"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "蝴蝶兰未见明确猫狗毒性记录；兰花类通常风险较低，但仍不应让宠物啃咬。",
      children: "花材不可入口；花梗与固定铁丝需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "东南亚、热带亚洲",
    habitat: "热带雨林附生",
    vaseLife: "2–4 周（切花）",
    press: "花瓣厚，压前拆开；干燥后颜色会变深，适合做小标本。",
    culture: "蝴蝶兰因花形像停驻的蝴蝶而得名；它在中文语境里从「兰花」的高洁，逐渐变成开业/年花的「飞来好运」。",
    poetry: "中国古诗没有对应的蝴蝶兰意象；它是近代热带兰花栽培与商业花艺的产物。",
    myth: "蝴蝶兰没有强神话源头；「蝴蝶」的联想更多来自花形，而不是古典神话。",
    prompt: "用「蝴蝶停在枝上」写短暂的好运：它没有飞走，但也没有答应留下。",
    misuse: "把蝴蝶兰与石斛、卡特兰混为一谈；或忽略它是附生植物，不能按普通土培方式理解。",
    trivia: "蝴蝶兰是附生兰，根常暴露在空气中；它的花期可以很长，花梗会在花后继续分化新花苞。",
    pairs: { ids: ["rose", "calla"], line: "蝴蝶兰做蝴蝶，玫瑰给重心，马蹄莲把白收成漏斗。" },
    svg: { type: "orchid", petals: 5, leaves: 2 }
  },
  {
    id: "calla",
    no: 35,
    name: "马蹄莲",
    en: "Calla Lily",
    latin: "Zantedeschia aethiopica",
    family: "天南星科 · 马蹄莲属",
    aliases: ["慈姑花", "水芋"],
    colors: [
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9B23E", name: "肉穗金", group: "黄" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "佛焰苞 / 漏斗",
    shapeGroup: "杯状",
    inflorescence: "单生",
    diameter: "8–15 cm",
    height: "60–100 cm",
    bloom: [4, 5, 6, 7],
    scent: { level: "淡", desc: "清淡的青草气，几乎无香；佛焰苞本身没有明显香气。" },
    language: {
      positive: "纯洁无瑕、优雅、永恒的爱",
      negative: "白色葬礼的冷；被误当莲花的高洁",
      cultural: "中文多取「纯洁、优雅」，西式 calla lily 常取 magnificence、purity、rebirth，也常见于葬礼；日式「カラー」常取「清純、華麗」。"
    },
    cultureMeanings: {
      cn: "马蹄莲在中文婚礼与花艺中常取「纯洁无瑕、优雅」，名字里的「马蹄」来自佛焰苞的形状，不是马。",
      west: "英语中 calla lily 常指 Zantedeschia，婚礼手捧与葬礼花艺都用；花语多为 magnificence、purity、rebirth。",
      jp: "日式花语常见「清純、華麗、乙女の息吹」；「カラー」在婚礼与装饰花中很常见。"
    },
    occasions: ["婚礼", "悼念"],
    taboos: [
      "全株含草酸钙，猫狗、儿童误食可致口腔灼痛、流涎、呕吐",
      "不要与荷花、芋头混为一谈；它不是莲，也不是可食用芋",
      "汁液接触皮肤需清洗；花瓶水远离宠物"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "天南星科含不溶性草酸钙，猫狗误食可致口腔灼痛、流涎、呕吐；严重时需就医。",
      children: "误食佛焰苞/茎叶可致口腔与咽喉刺激，需远离幼儿。",
      note: "不提供食用或药用建议；处理时避免汁液接触眼睛。"
    },
    origin: "南非",
    habitat: "湿地、溪边；园艺栽培",
    vaseLife: "7–10 天",
    press: "佛焰苞较厚，压前纵切；干燥后白色会转米黄。",
    culture: "马蹄莲的白色佛焰苞常被误认为「花瓣」，真正的花是中间黄色的肉穗花序；它在婚礼与葬礼之间来回，是「纯洁」最双面的花之一。",
    poetry: "中国古诗没有对应的马蹄莲意象；它是近代传入的南非植物。",
    myth: "马蹄莲没有强神话源头；「Calla」在希腊语中意为「美丽」，更多是命名传统。",
    prompt: "用「白色漏斗」写优雅：它把话收进去，只留一个入口。",
    misuse: "把马蹄莲当成荷花或可食用芋头；或忽略天南星科的草酸钙风险。",
    trivia: "马蹄莲的白色「花瓣」其实是佛焰苞，真正的花是中间的黄色肉穗；它与荷花、芋头都不是同一科。",
    pairs: { ids: ["rose", "moth-orchid"], line: "马蹄莲做白漏斗，玫瑰给重量，蝴蝶兰把边缘提亮。" },
    svg: { type: "calla", petals: 0, leaves: 3 }
  },
  {
    id: "gladiolus",
    no: 36,
    name: "剑兰",
    en: "Gladiolus",
    latin: "Gladiolus × hortulanus",
    family: "鸢尾科 · 唐菖蒲属",
    aliases: ["唐菖蒲", "十样锦", "扁竹莲"],
    colors: [
      { hex: "#B0473F", name: "砖红", group: "红" },
      { hex: "#D79C9C", name: "藕粉", group: "粉" },
      { hex: "#F7F0E3", name: "纸白", group: "白" },
      { hex: "#7A5A7E", name: "灰紫", group: "紫" }
    ],
    form: "漏斗状 / 穗状",
    shapeGroup: "穗状",
    inflorescence: "穗状花序",
    diameter: "8–12 cm",
    height: "80–150 cm",
    bloom: [6, 7, 8, 9],
    scent: { level: "无", desc: "几乎没有香气；只有切口的青草气。" },
    language: {
      positive: "步步高升、用心、坚固",
      negative: "被当成「兰花」的误认；锋利感",
      cultural: "中文因「剑兰」与「步步高升」的彩头常用于祝贺，西式 gladiolus 常取 strength、remembrance，日式「グラジオラス」常取「用心、堅固」。"
    },
    cultureMeanings: {
      cn: "剑兰在中文花篮里常取「步步高升、用心」，名字里的「剑」来自叶片形状；它不是兰科。",
      west: "英语花语中 gladiolus 常指 strength、moral integrity、remembrance；也用于纪念与葬礼。",
      jp: "日式花语常见「用心、堅固、勝利」；「グラジオラス」在夏季花市很常见。"
    },
    occasions: ["祝贺", "送别"],
    taboos: [
      "球茎有毒，猫狗、儿童误食可致呕吐、流涎",
      "不要与番红花、鸢尾混为一谈",
      "花穗高，瓶插需深水与重瓶，避免倾倒"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "剑兰球茎含草酸钙等刺激物，猫狗误食可致流涎、呕吐、腹泻。",
      children: "球茎风险较高，花材也不应入口。",
      note: "不提供食用或药用建议。"
    },
    origin: "南非；园艺杂交",
    habitat: "草地、山坡；温带栽培",
    vaseLife: "7–10 天",
    press: "花瓣薄，适合单层压；花穗可分段压。",
    culture: "剑兰的属名 Gladiolus 来自拉丁语 gladius（剑），指它的叶片；中文「剑兰」又把这种锋利感变成「步步高升」的彩头。",
    poetry: "中国古诗没有对应的剑兰意象；「唐菖蒲」是近代园艺名。",
    myth: "剑兰没有强神话源头；罗马角斗士（gladiator）与 gladius 的词源联想更常见。",
    prompt: "用「剑」写祝贺：向上生长，但每一片叶子都带着锋芒。",
    misuse: "把剑兰当成兰科；或忽略球茎对猫狗/儿童的毒性。",
    trivia: "剑兰不是兰，是鸢尾科唐菖蒲属；它的花从穗的下部向上依次开放。",
    pairs: { ids: ["sunflower", "chrysanthemum"], line: "剑兰做向上的线，向日葵给光，菊花把秋色收住。" },
    svg: { type: "gladiolus", petals: 0, leaves: 3 }
  },
  {
    id: "balloon-flower",
    no: 37,
    name: "桔梗",
    en: "Balloon Flower",
    latin: "Platycodon grandiflorus",
    family: "桔梗科 · 桔梗属",
    aliases: ["铃铛花", "包袱花", "僧冠帽"],
    colors: [
      { hex: "#6E5A8A", name: "桔梗紫", group: "紫" },
      { hex: "#6D86A8", name: "雾蓝", group: "蓝" },
      { hex: "#F8F1E5", name: "纸白", group: "白" }
    ],
    form: "钟状 / 星形",
    shapeGroup: "钟状",
    inflorescence: "单生或聚伞",
    diameter: "4–6 cm",
    height: "40–90 cm",
    bloom: [7, 8, 9],
    scent: { level: "淡", desc: "几乎没有香气；根有土腥气，花只有青草味。" },
    language: {
      positive: "永恒的爱、诚实、无望的爱",
      negative: "说不出口的告白；等待的疲惫",
      cultural: "中文多取「永恒的爱、无望的爱」，西式 balloon flower 常取 gratitude、endless love，日式「キキョウ」常取「永遠の愛、誠実、従順」。"
    },
    cultureMeanings: {
      cn: "桔梗在中文花语中常与「永恒的爱、无望的爱」相连；它的根在东亚饮食/草药传统中被使用（本站不作任何食用建议）。",
      west: "英语中 balloon flower 常取 gratitude、endless love；花苞像气球，开放后成五角星。",
      jp: "日式花语常见「永遠の愛、誠実、従順」；桔梗是日本秋七草之一，桔梗纹也很常见。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "不要与洋桔梗（Eustoma）混为一谈，两者科属不同",
      "根含皂苷，资料不一致；不提供食用/药用建议",
      "花材不可入口；猫狗/儿童误食需注意"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "桔梗含皂苷，宠物毒性资料不一致；按「不可入口」处理，误食可致肠胃不适。",
      children: "根与花材不可入口；不要让孩子咀嚼。",
      note: "不提供食用或药用建议；桔梗根在传统饮食/药用中的使用不属于本站建议。"
    },
    origin: "中国、日本、朝鲜半岛",
    habitat: "山坡草地、林缘",
    vaseLife: "5–7 天",
    press: "花瓣薄，压后紫色会变淡；花苞可单独压。",
    culture: "桔梗的花苞像气球，开放后成五角星；它在日本是秋七草之一，在中国则常被写进「无望的爱」。",
    poetry: "中国古诗没有固定的桔梗花意象；日本《万叶集》与秋七草传统更常提到它。",
    myth: "日本有「桔梗姬」的地方传说，版本不一；不要把它当成全国统一的故事。",
    prompt: "用「气球」写未说出口：鼓起来，却没有飞走。",
    misuse: "把桔梗与洋桔梗混为一谈；或把桔梗根的传统用途当成可随意食用的建议。",
    trivia: "桔梗的花苞在开放前像气球，英文名 balloon flower 由此而来；它和花店里的洋桔梗不是同一科。",
    pairs: { ids: ["iris", "lavender"], line: "桔梗做钟形，鸢尾给冷紫，薰衣草把等待拉长。" },
    svg: { type: "balloon", petals: 5, leaves: 3 }
  },
  {
    id: "china-aster",
    no: 38,
    name: "翠菊",
    en: "China Aster",
    latin: "Callistephus chinensis",
    family: "菊科 · 翠菊属",
    aliases: ["江西腊", "八月菊", "蓝菊"],
    colors: [
      { hex: "#8A6F9E", name: "翠紫", group: "紫" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#7D9BB8", name: "雾蓝", group: "蓝" }
    ],
    form: "头状",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "5–10 cm",
    height: "30–80 cm",
    bloom: [7, 8, 9, 10],
    scent: { level: "淡", desc: "清淡的青草气，几乎无香；花瓣密集。", },
    language: {
      positive: "可靠的爱、追忆、变化",
      negative: "迟到的告别；易逝的秋色",
      cultural: "中文多取「追忆、可靠的爱」，西式 aster 常取 patience、daintiness，日式「アスター」常取「信じる心、変化」；三者都带「时间」。"
    },
    cultureMeanings: {
      cn: "翠菊原产中国，中文花语常取「可靠的爱、追忆」；它是秋季花坛与切花的常见花。",
      west: "英语中 China aster 常取 patience、daintiness、variety；与真正的 aster 属有分类差异。",
      jp: "日式花语常见「信じる心、変化、追憶」；日本培育了丰富的翠菊品种。"
    },
    occasions: ["送别", "暗恋"],
    taboos: [
      "不要与紫菀、矢车菊混为一谈",
      "花材不可入口；花粉敏感者注意",
      "花瓣易掉，远途携带需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "翠菊未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国",
    habitat: "林缘、草甸；全球园艺栽培",
    vaseLife: "7–10 天",
    press: "花瓣多，压前拆层；干燥后颜色会变深。",
    culture: "翠菊是中国原产的菊科植物，英文却叫 China aster；它在日本被大量育种，成为秋季花市的重要花材。",
    poetry: "中国古诗没有固定的翠菊意象；它更多出现在近代园艺与花坛里。",
    myth: "翠菊没有强神话源头；「aster」在希腊语中意为「星」，来自花形。",
    prompt: "用「追忆」写旧友：不是每朵花都在当下开放，有些是替过去开的。",
    misuse: "把翠菊与紫菀、矢车菊混为一谈；或忽略它原产中国、却以 China aster 之名被世界认识。",
    trivia: "翠菊是菊科翠菊属，和中国常见的紫菀不是同一属；它的英文名 China aster 直接写着原产地。",
    pairs: { ids: ["chrysanthemum", "gypsophila"], line: "翠菊做秋色，菊花压深，满天星把边缘留轻。" },
    svg: { type: "disc", petals: 20, leaves: 3 }
  },
  {
    id: "dahlia",
    no: 39,
    name: "大丽花",
    en: "Dahlia",
    latin: "Dahlia pinnata",
    family: "菊科 · 大丽花属",
    aliases: ["大丽菊", "天竺牡丹", "地瓜花"],
    colors: [
      { hex: "#A0432B", name: "胭脂", group: "红" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#C9762F", name: "橙", group: "橙" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#7A5A7E", name: "灰紫", group: "紫" }
    ],
    form: "重瓣球状 / 舌状",
    shapeGroup: "球状",
    inflorescence: "头状花序",
    diameter: "5–30 cm",
    height: "40–150 cm",
    bloom: [6, 7, 8, 9, 10],
    scent: { level: "无", desc: "几乎没有香气；只有块根与叶的青草气。" },
    language: {
      positive: "大吉大利、华丽、雍容",
      negative: "不稳定 / 善变（部分花语）；过度繁复",
      cultural: "中文多取「大吉大利、华丽」，西式 dahlia 常取 dignity、elegance、change，日式「ダリア」常取「華麗、優雅、移り気」；「移り気」不是中文的主调。"
    },
    cultureMeanings: {
      cn: "大丽花在中文花艺里常取「大吉大利、华丽」，因花头大、颜色多，常用于庆典与婚礼。",
      west: "英语花语中 dahlia 常指 dignity、elegance、inner strength；维多利亚花语里也可能指 change、instability。",
      jp: "日式花语常见「華麗、優雅、移り気」；日本的大丽花育种与花坛栽培很发达。"
    },
    occasions: ["祝贺", "婚礼"],
    taboos: [
      "块根/叶对猫狗有毒，误食可致呕吐、腹泻",
      "不要与牡丹、菊花混为一谈",
      "花头重易垂，瓶插需支撑"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "大丽花对猫狗有毒，块根与叶误食可致呕吐、腹泻、流涎。",
      children: "块根与花材不可入口；需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "墨西哥",
    habitat: "山地、林缘；全球园艺栽培",
    vaseLife: "5–7 天",
    press: "花瓣厚，压前拆层；干燥后颜色会变深。",
    culture: "大丽花是墨西哥国花之一，19 世纪传入欧洲后掀起育种热潮；它的块根像地瓜，所以中文也叫「地瓜花」。",
    poetry: "中国古诗没有对应的大丽花意象；它是近代传入的园艺花。",
    myth: "大丽花没有强神话源头；属名 Dahlia 纪念瑞典植物学家 Anders Dahl。",
    prompt: "用「层叠」写华丽：每一层都在加码，直到看不清最里面那一瓣。",
    misuse: "把大丽花与牡丹、菊花混为一谈；或忽略块根/叶对宠物的毒性。",
    trivia: "大丽花是墨西哥国花之一；它的「花瓣」其实是舌状花，花头由许多小花组成。",
    pairs: { ids: ["rose", "chrysanthemum"], line: "大丽花做层叠，玫瑰给重心，菊花把秋色收住。" },
    svg: { type: "pom", petals: 0, leaves: 3 }
  },
  {
    id: "bird-of-paradise",
    no: 40,
    name: "天堂鸟",
    en: "Bird of Paradise",
    latin: "Strelitzia reginae",
    family: "鹤望兰科 · 鹤望兰属",
    aliases: ["鹤望兰", "极乐鸟花"],
    colors: [
      { hex: "#D97B2E", name: "天堂橙", group: "橙" },
      { hex: "#4E6FA8", name: "天堂蓝", group: "蓝" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "鸟形 / 舟形",
    shapeGroup: "蝶形",
    inflorescence: "单生或聚伞",
    diameter: "10–15 cm",
    height: "100–200 cm",
    bloom: [5, 6, 7, 8, 9],
    scent: { level: "无", desc: "几乎没有香气；叶片与茎有青草气。" },
    language: {
      positive: "自由、幸福、热恋中的情侣",
      negative: "想飞却飞不走；被观赏的自由",
      cultural: "中文多取「自由、幸福、热恋」，西式 bird of paradise 常取 joy、freedom、faithfulness，日式「ストレリチア」常取「幸福、自由、輝かしい未来」。"
    },
    cultureMeanings: {
      cn: "天堂鸟在中文花艺里常取「自由、幸福、热恋中的情侣」，花形像一只停在枝头的鸟。",
      west: "英语中 bird of paradise 常指 joy、freedom、faithfulness；也是南非的象征花之一。",
      jp: "日式花语常见「幸福、自由、輝かしい未来」；「ストレリチア」常用于婚礼与大型花艺。"
    },
    occasions: ["祝贺", "婚礼", "送别"],
    taboos: [
      "花与种子对猫狗有毒，误食可致呕吐、腹泻",
      "不要与真正的「天堂鸟」鸟类混为一谈",
      "花头重，瓶插需重瓶与支撑"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "鹤望兰对猫狗有毒，花与种子误食可致呕吐、腹泻、精神沉郁。",
      children: "花材与种子不可入口；需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "南非",
    habitat: "亚热带草地、河岸；园艺栽培",
    vaseLife: "7–14 天",
    press: "花头厚，压前拆开；干燥后橙色会变深。",
    culture: "天堂鸟的学名 Strelitzia 纪念英国夏洛特王后（梅克伦堡-施特雷利茨），花形像鹤/极乐鸟；它是南非的象征植物之一。",
    poetry: "中国古诗没有对应的天堂鸟意象；它是近代传入的南非植物。",
    myth: "天堂鸟没有强神话源头；「鸟」的联想来自花形，不是古典神话。",
    prompt: "用「飞不走的鸟」写自由：它有翅膀，但被插在瓶里。",
    misuse: "把天堂鸟与真正的鸟类混为一谈；或忽略花/种子对猫狗的毒性。",
    trivia: "天堂鸟的花不是一只鸟：橙色是苞片，蓝色是花瓣状结构；它和香蕉同属鹤望兰科。",
    pairs: { ids: ["sunflower", "iris"], line: "天堂鸟做飞翔，向日葵给光，鸢尾把蓝色收进花心。" },
    svg: { type: "bird", petals: 0, leaves: 3 }
  },
  {
    id: "pansy",
    no: 41,
    name: "三色堇",
    en: "Pansy",
    latin: "Viola × wittrockiana",
    family: "堇菜科 · 堇菜属",
    aliases: ["蝴蝶花", "鬼脸花", "猫儿脸"],
    colors: [
      { hex: "#6E5A8A", name: "堇紫", group: "紫" },
      { hex: "#D9B23E", name: "花心黄", group: "黄" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#6D86A8", name: "雾蓝", group: "蓝" }
    ],
    form: "五瓣 / 脸形",
    shapeGroup: "轮状",
    inflorescence: "单生",
    diameter: "4–8 cm",
    height: "15–30 cm",
    bloom: [3, 4, 5, 6],
    scent: { level: "淡", desc: "清淡的甜香，靠近才有；部分品种几乎无香。" },
    language: {
      positive: "思念、快乐、请想念我",
      negative: "多疑 / 犹豫；被表情包化的花",
      cultural: "中文多取「思念、快乐」，西式 pansy 常取 loving thoughts、remembrance，日式「パンジー」常取「物思い、私を思って」；三者都围绕「想」。"
    },
    cultureMeanings: {
      cn: "三色堇在中文花艺里常取「思念、快乐」，花心像一张小脸，所以也叫「鬼脸花」。",
      west: "英语 pansy 来自法语 pensée（思想、思念），花语常指 loving thoughts、remembrance；维多利亚花束里很常见。",
      jp: "日式花语常见「物思い、私を思って、快活」；「パンジー」是春季花坛的常客。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "不要与角堇、堇菜混为一谈；园艺品种不同",
      "花材不可入口；不要用「可食用装饰」的说法",
      "花瓣薄，远途携带需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "堇菜属通常对猫狗风险较低；仍不应让宠物啃咬。",
      children: "花材不可入口；花坛植物可能有农药。",
      note: "不提供食用或药用建议。"
    },
    origin: "欧洲",
    habitat: "花坛、草地；温带栽培",
    vaseLife: "3–5 天",
    press: "花瓣薄，压花效果很好；颜色保持度中等。",
    culture: "三色堇是欧洲花坛的春季主角，花心像脸；「pansy」来自法语 pensée，把「思念」直接写进名字。",
    poetry: "中国古诗没有对应的三色堇意象；它是近代传入的园艺花。",
    myth: "三色堇没有强神话源头；「pensée」的词源比神话更常被引用。",
    prompt: "用「鬼脸」写表情：一张小花脸，替你说出不敢说的话。",
    misuse: "把三色堇与角堇、堇菜混为一谈；或把花坛花当成可食用装饰。",
    trivia: "三色堇不是「三色」固定三色，而是常有紫、黄、白三色组合；它的英文名来自法语「思想」。",
    pairs: { ids: ["forget-me-not", "gypsophila"], line: "三色堇做表情，勿忘我写记忆，满天星把声音放轻。" },
    svg: { type: "pansy", petals: 5, leaves: 3 }
  },
  {
    id: "jasmine",
    no: 42,
    name: "茉莉",
    en: "Arabian Jasmine",
    latin: "Jasminum sambac",
    family: "木犀科 · 素馨属",
    aliases: ["茉莉花", "抹厉", "末利"],
    colors: [
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "星形 / 重瓣",
    shapeGroup: "轮状",
    inflorescence: "聚伞花序",
    diameter: "2–3 cm",
    height: "100–300 cm",
    bloom: [5, 6, 7, 8, 9],
    scent: { level: "浓", desc: "清甜的白花香，夏夜最明显；一盆就能占满房间。" },
    language: {
      positive: "忠贞、纯洁、亲切",
      negative: "浓香压迫；被采摘的温柔",
      cultural: "中文多取「忠贞、纯洁」，西式 jasmine 常取 love、beauty、sensuality，日式「ジャスミン」常取「愛らしさ、清純」；三者都围绕白花与香气。"
    },
    cultureMeanings: {
      cn: "茉莉在中文语境里常与「忠贞、纯洁」相连；福州茉莉花与《茉莉花》民歌都让它成为江南/华南的嗅觉记忆（不作食用建议）。",
      west: "英语花语中 jasmine 常指 love、beauty、sensuality；茉莉香也是香水工业的重要香调。",
      jp: "日式花语常见「愛らしさ、清純、優雅」；「ジャスミン」多指茉莉属的观赏/香料植物。"
    },
    occasions: ["婚礼", "暗恋", "探病"],
    taboos: [
      "茉莉属对猫狗有毒，误食可致呕吐、腹泻、神经症状",
      "浓香不适合探病或密闭小空间",
      "不要写茉莉花茶/精油等食用、香疗建议"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "茉莉属植物对猫狗有毒，误食可致呕吐、腹泻、共济失调；精油风险更高。",
      children: "花材不可入口；浓香时注意通风。",
      note: "不提供食用、香疗或药用建议。"
    },
    origin: "南亚、中国南方",
    habitat: "温暖灌丛、庭院栽培",
    vaseLife: "2–3 天",
    press: "花瓣薄，压后容易转黄；适合小尺寸标本。",
    culture: "茉莉是福州等地的夏季香花，也是菲律宾国花（Sampaguita）；《茉莉花》民歌让它成为最容易被听见的中国花名之一。",
    poetry: "中国民歌《茉莉花》广为流传；古典诗词中也有茉莉，但多写香气与夏夜。",
    myth: "茉莉没有强神话源头；它的文化形象更多来自香气、民歌与庭院生活。",
    prompt: "用「香气」写夏夜：花很小，香却先一步进门。",
    misuse: "把茉莉与茉莉花茶/精油等食用、香疗用途混为一谈；或忽略茉莉属对猫狗的毒性。",
    trivia: "茉莉不是「茉莉花茶」的茶；它是木犀科素馨属植物。菲律宾国花 Sampaguita 就是茉莉的一种。",
    pairs: { ids: ["gardenia", "rose"], line: "茉莉做香气，栀子压白，玫瑰给一点重量。" },
    svg: { type: "jasmine", petals: 8, leaves: 3 }
  },
  {
    id: "kapok",
    no: 43,
    name: "木棉",
    en: "Kapok Tree",
    latin: "Bombax ceiba",
    family: "锦葵科 · 木棉属",
    aliases: ["英雄树", "攀枝花", "红棉"],
    colors: [
      { hex: "#B0473F", name: "木棉红", group: "红" },
      { hex: "#C9762F", name: "橙红", group: "橙" },
      { hex: "#F7EEE2", name: "纸白", group: "白" }
    ],
    form: "杯状 / 厚瓣",
    shapeGroup: "杯状",
    inflorescence: "单生或簇生",
    diameter: "8–12 cm",
    height: "1000–2500 cm",
    bloom: [3, 4],
    scent: { level: "淡", desc: "清淡的青草气，几乎没有香味；花蜜吸引鸟类。" },
    language: {
      positive: "珍惜、英雄、热烈",
      negative: "高处不胜寒；花落不回枝",
      cultural: "中文多取「英雄树、珍惜」，西式 kapok 没有固定花语，日式「木棉」也不如樱花/梅固定；三者不要互相替代。"
    },
    cultureMeanings: {
      cn: "木棉在岭南常被称为「英雄树」，花开时满树红，花落不褪色；广州、高雄等城市以它为市花/市树。",
      west: "英语中 kapok 更多指木棉纤维与热带大树，花语体系不如玫瑰固定；不要把它写成普世爱情符号。",
      jp: "日式「木棉（キワタ）」不如樱花、梅那样常见于花语；更多是热带植物的观赏名。"
    },
    occasions: ["祝贺", "送别"],
    taboos: [
      "木棉不是棉花，不要混为一谈",
      "棉絮/花粉可能引发过敏；果絮易燃",
      "花材不可入口；不要自行采食"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "木棉未见明确猫狗毒性记录；果絮与花粉可能刺激呼吸道。",
      children: "花材不可入口；果絮易燃，需远离火源。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国南方、南亚、东南亚",
    habitat: "热带、亚热带河谷与村落",
    vaseLife: "2–3 天",
    press: "花瓣厚，压前拆层；干燥后红色会变深。",
    culture: "木棉是岭南的「英雄树」：先花后叶，花落不褪色；广州、高雄都把木棉写进城市记忆。",
    poetry: "中国古诗中木棉题材较少；岭南竹枝词与地方志更常写木棉，而不是中原古典诗。",
    myth: "木棉「英雄树」的名字来自挺拔树形与红花，不是单一神话；各地传说版本不一。",
    prompt: "用「英雄树」写告别：花落的时候，颜色还没有退。",
    misuse: "把木棉与棉花混为一谈；或把「英雄树」的阳刚叙事套到所有木棉科植物上。",
    trivia: "木棉是锦葵科木棉属，棉花是锦葵科棉属；两者同科不同属。木棉的果絮可作填充材料。",
    pairs: { ids: ["camellia", "hibiscus"], line: "木棉做英雄红，山茶压深，木槿给一日的柔。" },
    svg: { type: "kapok", petals: 5, leaves: 3 }
  },
  {
    id: "wintersweet",
    no: 44,
    name: "腊梅",
    en: "Wintersweet",
    latin: "Chimonanthus praecox",
    family: "蜡梅科 · 蜡梅属",
    aliases: ["蜡梅", "黄梅", "素心蜡梅"],
    colors: [
      { hex: "#D9B23E", name: "蜡黄", group: "黄" },
      { hex: "#F7EFE1", name: "素心白", group: "白" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "蜡质杯状",
    shapeGroup: "枝状",
    inflorescence: "单生或簇生",
    diameter: "2–3 cm",
    height: "200–500 cm",
    bloom: [12, 1, 2],
    scent: { level: "浓", desc: "清冷的甜香，冬天隔着院子也能闻到；花瓣有蜡质感。" },
    language: {
      positive: "坚贞、高洁、慈爱",
      negative: "苦寒被过度美化；香气太满",
      cultural: "中文多取「坚贞、高洁、慈爱」，西式 wintersweet 没有固定花语，日式「ロウバイ」常取「慈愛、優しい心」；三者共享「冬」，但价值不同。"
    },
    cultureMeanings: {
      cn: "腊梅在中文语境里常与「坚贞、高洁」相连；它是蜡梅科，不是梅花，也不是「腊月开的梅」。",
      west: "英语中 wintersweet 常取 winter fragrance、quiet beauty；花语体系不如玫瑰固定。",
      jp: "日式花语常见「慈愛、優しい心、先見の明」；「ロウバイ」是冬季庭院花。"
    },
    occasions: ["送别", "祝贺"],
    taboos: [
      "与梅花不是同一种；腊梅是蜡梅科，梅花是蔷薇科",
      "种子/叶有毒，猫狗、儿童误食需注意",
      "浓香不适合密闭空间；花香过敏者注意"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "腊梅含生物碱，宠物毒性资料有限；按「不可入口」处理，误食可致肠胃不适。",
      children: "种子与叶不可入口；需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国",
    habitat: "山地、林缘；温带庭院栽培",
    vaseLife: "5–7 天",
    press: "花瓣蜡质，压后不易褪色；适合小尺寸标本。",
    culture: "腊梅在寒冬开花，香气清冷；它是蜡梅科，不是梅花。中文「腊梅」与「蜡梅」两种写法都常见，后者更贴近花瓣的蜡质感。",
    poetry: "黄庭坚写蜡梅：『金蓓锁春寒，恼人香未展。』腊梅常与「凌寒」相连，但它不是梅花。",
    myth: "腊梅没有强神话源头；「腊月开花」是物候观察，不是神话。",
    prompt: "用「蜡」写冬天：花瓣像被冻住的光，香气却还在走。",
    misuse: "把腊梅与梅花混为一谈；或把「腊梅」写成「腊月开的梅花」。",
    trivia: "腊梅是蜡梅科蜡梅属，梅花是蔷薇科李属；两者的「梅」只是中文名相同。",
    pairs: { ids: ["camellia", "plum"], line: "腊梅做蜡黄，山茶给深红，梅花把冬天的骨架撑起来。" },
    svg: { type: "wintersweet", petals: 6, leaves: 2 }
  },
  {
    id: "begonia",
    no: 45,
    name: "秋海棠",
    en: "Begonia",
    latin: "Begonia spp.",
    family: "秋海棠科 · 秋海棠属",
    aliases: ["相思草", "断肠花", "八月春"],
    colors: [
      { hex: "#D9A6B4", name: "秋海棠粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "不对称叶 / 小聚伞",
    shapeGroup: "轮状",
    inflorescence: "聚伞花序",
    diameter: "2–4 cm",
    height: "20–60 cm",
    bloom: [7, 8, 9, 10],
    scent: { level: "淡", desc: "几乎没有香气；叶片有青草与湿土气。" },
    language: {
      positive: "苦恋、断肠、离愁",
      negative: "自我消耗的深情；把痛苦浪漫化",
      cultural: "中文多取「苦恋、断肠」，西式 begonia 旧花语常指 beware、dark thoughts，日式「ベゴニア」常取「親切、幸福な日々」；三者差别很大。"
    },
    cultureMeanings: {
      cn: "秋海棠在中文文学里常与「断肠花、相思草」相连，花名本身带秋与愁；民间传说版本不一。",
      west: "英语花语中 begonia 常指 beware、dark thoughts、a warning；维多利亚花束里不是温柔的花。",
      jp: "日式花语常见「親切、幸福な日々、片思い」；与中文的「断肠」并不完全同调。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "对猫狗有毒（可溶性草酸钙），误食可致口腔灼痛、呕吐",
      "不要与海棠（Malus）混为一谈",
      "花材不可入口；汁液接触皮肤需清洗"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "秋海棠含可溶性草酸钙，猫狗误食可致口腔灼痛、流涎、呕吐。",
      children: "误食叶/花可致口腔与咽喉刺激，需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "热带、亚热带",
    habitat: "林下、溪边；园艺栽培",
    vaseLife: "3–5 天（花）",
    press: "花瓣薄，适合压；叶片肉质，压前需干燥处理。",
    culture: "秋海棠的叶子常不对称，花名在中文里自带「断肠」；它在西方旧花语里却是「警惕」。同一朵花，三种语境完全不同。",
    poetry: "中国古诗中「秋海棠」题材较少；「断肠花」更多是民间与戏曲意象。",
    myth: "秋海棠「断肠花」的传说版本不一，常与相思、离别相连；不要把它写成单一来源的神话。",
    prompt: "用「断肠」写旧情：不是流血，是叶子从中间不对称地裂开。",
    misuse: "把秋海棠与海棠（Malus）混为一谈；或把「断肠」当成所有文化里的唯一花语。",
    trivia: "秋海棠的叶片常不对称，是识别特征之一；它与蔷薇科的海棠不是同一类植物。",
    pairs: { ids: ["gardenia", "hydrangea"], line: "秋海棠做碎花，栀子压香，绣球把粉色团起来。" },
    svg: { type: "begonia", petals: 4, leaves: 2 }
  },
  {
    id: "redbean",
    no: 46,
    name: "红豆",
    en: "Rosary Pea",
    latin: "Abrus precatorius",
    family: "豆科 · 相思子属",
    aliases: ["相思子", "鸡母珠"],
    colors: [
      { hex: "#B33A2E", name: "相思红", group: "红" },
      { hex: "#D8A0A8", name: "浅粉", group: "粉" },
      { hex: "#F7EEE2", name: "纸白", group: "白" }
    ],
    form: "蝶形花冠",
    shapeGroup: "蝶形",
    inflorescence: "总状花序",
    diameter: "1–1.5 cm",
    height: "藤本 1–3 m",
    bloom: [7, 8, 9],
    scent: { level: "淡", desc: "清淡的豆花香，靠近才有；种子没有气味。" },
    language: {
      positive: "相思、铭记、遥远的爱",
      negative: "执念、危险的美；种子的毒性",
      cultural: "中文「红豆」是王维《相思》的符号，但植物学上的红豆不止一种；西式 rosary pea 更多与念珠/毒种相连，日式「相思子」多是汉诗意象的移植。"
    },
    cultureMeanings: {
      cn: "王维《相思》让红豆成为相思的符号；植物学上的「红豆」可能指红豆树、海红豆、相思子等，文学与花市常混用。",
      west: "英语中 Abrus precatorius 常叫 rosary pea、jequirity bean；红黑种子被用作念珠/装饰，但含剧毒相思子毒素（abrin）。",
      jp: "日式花语中「相思子」并不如樱花/梅固定；更多是汉诗「相思」意象的移植。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "种子含相思子毒素，极毒；儿童/宠物误食可致命",
      "不要与红豆树、海红豆、食用红豆混淆",
      "红豆树（Ormosia）属于保护植物，不要采挖或购买野生来源"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "相思子种子含 abrin，猫狗误食少量即可出现严重呕吐、腹泻、脱水，需立即就医。",
      children: "种子极毒，误食可致命；必须远离幼儿，不要做手串/装饰。",
      note: "不提供食用、药用或手作建议；处理种子戴手套。"
    },
    origin: "热带亚洲",
    habitat: "灌丛、林缘、藤本",
    vaseLife: "3–5 天（枝叶）",
    press: "花小，压后易褪色；种子不适合压花。",
    culture: "红豆在中文里是相思的代名词，但「红豆」不是一种植物的正式名；王维诗中的红豆身份至今有争议，花市与文学常把红豆树、海红豆、相思子混在一起。",
    poetry: "王维《相思》：『红豆生南国，春来发几枝。愿君多采撷，此物最相思。』",
    myth: "传说女子在树下等待爱人，泪尽而亡，血泪化为红豆；版本因地区而异，不能当作植物学来源。",
    prompt: "用「红豆」写距离：真正危险的不是相思，是把相思子当成食用红豆。",
    misuse: "把相思子当食用红豆；把红豆树、海红豆、相思子混为一谈；或忽略种子的剧毒。",
    trivia: "相思子的种子红黑相间，常被串成念珠；它含 abrin，毒性极强。文学里的「红豆」植物身份并不唯一。",
    pairs: { ids: ["forget-me-not", "camellia"], line: "红豆做念想，勿忘我写记忆，山茶把红压深。" },
    svg: { type: "redbean", petals: 0, leaves: 2 }
  },
  {
    id: "cotton",
    no: 47,
    name: "棉花",
    en: "Cotton",
    latin: "Gossypium spp.",
    family: "锦葵科 · 棉属",
    aliases: ["棉", "棉花树", "棉桃"],
    colors: [
      { hex: "#F8F1E5", name: "棉白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#D9B23E", name: "棉黄", group: "黄" },
      { hex: "#D9A6B4", name: "棉粉", group: "粉" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "棉铃 / 五瓣",
    shapeGroup: "球状",
    inflorescence: "单生",
    diameter: "5–8 cm（棉铃）",
    height: "100–200 cm",
    bloom: [6, 7, 8, 9],
    scent: { level: "淡", desc: "几乎没有香气；棉絮与叶片有干燥的植物气。" },
    language: {
      positive: "温暖、珍惜身边人、平凡的爱",
      negative: "被利用的温柔；棉絮般的纠缠",
      cultural: "中文多取「温暖、珍惜」，西式 cotton 没有固定花语（更多是纺织意象），日式「綿の花」常取「有用、感謝」；三者都指向「日常」。"
    },
    cultureMeanings: {
      cn: "棉花在中文花艺里常取「温暖、珍惜身边人」，它不是传统观赏花，而是把「日常」直接变成花材。",
      west: "英语世界对 cotton 的花语不如玫瑰固定，多取 comfort、home、industry；棉铃与棉絮是主要视觉符号。",
      jp: "日式花语中「綿の花」常取「有用、感謝、温もり」；棉花作为切花更多是现代花艺用法。"
    },
    occasions: ["探病", "祝贺"],
    taboos: [
      "棉籽含棉酚，猫狗、儿童误食有风险",
      "棉花与木棉不是同一种，不要混写",
      "棉絮可能引发过敏/呼吸道刺激；远离火源"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "棉籽含棉酚，猫狗误食可致肠胃与全身性反应；棉絮大量吞食也可能堵塞肠道。",
      children: "棉籽不可入口；棉絮可能引起呼吸道刺激，需远离幼儿。",
      note: "不提供食用或药用建议；棉籽油等工业话题不在本站讨论。"
    },
    origin: "热带、亚热带",
    habitat: "农田、河谷；全球栽培",
    vaseLife: "5–7 天（棉铃）",
    press: "棉絮不适合压；可保留棉铃干燥。",
    culture: "棉花把「花」变成「纤维」：它的观赏性来自棉铃裂开后露出的白色棉絮，而不是花瓣。黄道婆与棉纺织史是它更重要的文化背景。",
    poetry: "中国古诗中棉花题材较少；它更多进入农书、纺织史与民间生活，而不是花间词。",
    myth: "棉花没有强神话源头；它的文化形象来自纺织、衣被与日常劳动。",
    prompt: "用「棉」写日常：它不香、不艳，却替你挡住冬天的风。",
    misuse: "把棉花与木棉混为一谈；或把棉籽/棉絮当成可随意接触的儿童玩具。",
    trivia: "棉花是锦葵科棉属，木棉是锦葵科木棉属；两者同科不同属。棉铃裂开后露出的是种子上的纤维。",
    pairs: { ids: ["gypsophila", "sunflower"], line: "棉花做柔软的底，满天星留白，向日葵给一点暖。" },
    svg: { type: "cotton", petals: 0, leaves: 3 }
  },
  {
    id: "snapdragon",
    no: 48,
    name: "金鱼草",
    en: "Snapdragon",
    latin: "Antirrhinum majus",
    family: "车前科 · 金鱼草属",
    aliases: ["龙头花", "龙口花", "洋彩雀"],
    colors: [
      { hex: "#B0473F", name: "砖红", group: "红" },
      { hex: "#D79C9C", name: "藕粉", group: "粉" },
      { hex: "#D9B23E", name: "金鱼黄", group: "黄" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#7A5A7E", name: "灰紫", group: "紫" }
    ],
    form: "唇形 / 穗状",
    shapeGroup: "穗状",
    inflorescence: "总状花序",
    diameter: "3–5 cm",
    height: "30–90 cm",
    bloom: [3, 4, 5, 6],
    scent: { level: "淡", desc: "清淡的青草气，几乎无香；花瓣揉碎有一点甜味。" },
    language: {
      positive: "清纯的心、多嘴、热闹",
      negative: "口无遮拦 / 欺骗（部分旧花语）",
      cultural: "中文多取「清纯、多嘴」，西式 snapdragon 常取 graciousness，也有 deception、presumption 的旧义，日式「キンギョソウ」常取「おしゃべり、清純」。"
    },
    cultureMeanings: {
      cn: "金鱼草因花形像金鱼/龙嘴而名，中文花语常取「清纯、多嘴、热闹」；它是春季花坛与切花。",
      west: "英语 snapdragon 指花冠像龙嘴，压一下会「咬」；花语常取 graciousness，维多利亚花语里也可能指 deception。",
      jp: "日式花语常见「おしゃべり、清純、元気」；「キンギョソウ」是春季花坛的常见花。"
    },
    occasions: ["祝贺", "暗恋"],
    taboos: [
      "不要与龙头花/金鱼混淆；花材不可入口",
      "花瓣易落，远途携带需保护",
      "不要写「可食用花」的装饰建议"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "金鱼草未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花坛植物可能有农药。",
      note: "不提供食用或药用建议。"
    },
    origin: "地中海沿岸",
    habitat: "岩坡、花坛；温带栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄，压后颜色保持较好；适合做小标本。",
    culture: "金鱼草的花冠像一张会开合的嘴，英文 snapdragon 就是「咬人的龙」；它在中文里又变成「金鱼」。",
    poetry: "中国古诗没有对应的金鱼草意象；它是近代传入的园艺花。",
    myth: "金鱼草没有强神话源头；「龙嘴」与「金鱼」都是花形联想。",
    prompt: "用「金鱼嘴」写秘密：一张一合，却始终没有说出声。",
    misuse: "把金鱼草与真正的金鱼/龙头花混淆；或把花坛花当成可食用装饰。",
    trivia: "金鱼草的花冠可以用手指轻轻捏开，像龙嘴；它属于车前科，不是金鱼。",
    pairs: { ids: ["tulip", "gypsophila"], line: "金鱼草做一排小鱼，郁金香给杯形，满天星把水留出来。" },
    svg: { type: "snapdragon", petals: 0, leaves: 3 }
  },
  {
    id: "freesia",
    no: 49,
    name: "香雪兰",
    en: "Freesia",
    latin: "Freesia spp.",
    family: "鸢尾科 · 香雪兰属",
    aliases: ["小苍兰", "香鸢兰", "洋晚香玉"],
    colors: [
      { hex: "#D9B23E", name: "香雪黄", group: "黄" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#7A5A7E", name: "灰紫", group: "紫" }
    ],
    form: "漏斗状 / 穗状",
    shapeGroup: "穗状",
    inflorescence: "穗状 / 总状",
    diameter: "3–5 cm",
    height: "30–60 cm",
    bloom: [3, 4, 5],
    scent: { level: "浓", desc: "清甜的果香—花香，室内一束就能占满房间；黄色品种最香。" },
    language: {
      positive: "纯洁、清香、幸福",
      negative: "香气过甜；被误当兰花",
      cultural: "中文多取「纯洁、清香」，西式 freesia 常取 innocence、friendship、trust，日式「フリージア」常取「清香、親愛」；三者都围绕「干净的香」。"
    },
    cultureMeanings: {
      cn: "香雪兰在中文花艺里常取「纯洁、清香、幸福」；它常被误当兰花，其实是鸢尾科球根花。",
      west: "英语花语中 freesia 常指 innocence、friendship、trust；婚礼与春季花束里很常见。",
      jp: "日式花语常见「清香、親愛、純白」；「フリージア」是日本春季切花的重要品类。"
    },
    occasions: ["婚礼", "探病", "送别"],
    taboos: [
      "球茎有毒，猫狗、儿童误食可致呕吐",
      "不要与兰花混淆；香雪兰是鸢尾科",
      "浓香不适合探病或密闭小空间"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "香雪兰球茎/花对猫狗有毒性，误食可致呕吐、腹泻、流涎。",
      children: "球茎风险较高，花材也不应入口。",
      note: "不提供食用或药用建议。"
    },
    origin: "南非",
    habitat: "球根、山坡；全球栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄，压后颜色保持较好；适合小标本。",
    culture: "香雪兰是南非球根植物，荷兰与日本是重要育种/生产地；它的香气比花形更有名。",
    poetry: "中国古诗没有对应的香雪兰意象；它是近代传入的球根花。",
    myth: "香雪兰没有强神话源头；名字里的「雪」来自白/黄花的清冷感。",
    prompt: "用「香」写春天：花还没看见，香气先到了。",
    misuse: "把香雪兰当成兰花或小苍兰（其实是同一类）；或忽略球茎对猫狗/儿童的毒性。",
    trivia: "香雪兰是鸢尾科，不是兰科；它的英文 freesia 纪念德国植物学家 Friedrich Freese。",
    pairs: { ids: ["tulip", "iris"], line: "香雪兰做香气，郁金香给杯形，鸢尾把春天拉成一条线。" },
    svg: { type: "freesia", petals: 0, leaves: 3 }
  },
  {
    id: "gerbera",
    no: 50,
    name: "非洲菊",
    en: "Gerbera",
    latin: "Gerbera jamesonii",
    family: "菊科 · 非洲菊属",
    aliases: ["扶郎花", "太阳花", "猩猩菊"],
    colors: [
      { hex: "#B0473F", name: "砖红", group: "红" },
      { hex: "#C9762F", name: "橙", group: "橙" },
      { hex: "#D9B23E", name: "葵黄", group: "黄" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" }
    ],
    form: "头状 / 舌状",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "7–12 cm",
    height: "30–60 cm",
    bloom: [4, 5, 6, 7, 8, 9, 10],
    scent: { level: "淡", desc: "几乎没有香气；花心与茎有青草气。" },
    language: {
      positive: "互敬互爱、有毅力、不畏艰难",
      negative: "过度阳光；把疲惫藏在笑脸后",
      cultural: "中文多取「互敬互爱、毅力」，西式 gerbera 常取 cheerfulness、happiness，日式「ガーベラ」常取「希望、前向き」；三者都把「太阳」写在脸上。"
    },
    cultureMeanings: {
      cn: "非洲菊在中文花艺里常取「互敬互爱、有毅力、不畏艰难」，也叫「扶郎花」，常用于祝贺与探病。",
      west: "英语花语中 gerbera 常指 cheerfulness、happiness、innocence；花店最常见的「小太阳」。",
      jp: "日式花语常见「希望、常に前向き、元気」；「ガーベラ」是日本花店的高频花材。"
    },
    occasions: ["祝贺", "探病"],
    taboos: [
      "不要与向日葵、扶郎花（同一类）混淆；花材不可入口",
      "花心易藏水，瓶插需勤换水",
      "花粉/花心敏感者注意"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "非洲菊未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "南非",
    habitat: "草地、山坡；全球栽培",
    vaseLife: "7–10 天",
    press: "花瓣薄，适合压；花心厚，需勤换纸。",
    culture: "非洲菊原产南非，因花形像太阳、颜色多，成为全球花店最常用的「情绪花」之一；中文「扶郎花」来自它的另一别名。",
    poetry: "中国古诗没有对应的非洲菊意象；它是近代传入的园艺花。",
    myth: "非洲菊没有强神话源头；属名 Gerbera 纪念德国植物学家 Traugott Gerber。",
    prompt: "用「小太阳」写疲惫：它一直在笑，但花心已经藏了水。",
    misuse: "把非洲菊与向日葵混为一谈；或忽略花心容易积水、需要勤换水。",
    trivia: "非洲菊是菊科，花心由许多小花组成；它的花茎是空的，容易弯头。",
    pairs: { ids: ["sunflower", "gypsophila"], line: "非洲菊做小太阳，向日葵给大光，满天星把热度分散。" },
    svg: { type: "disc", petals: 24, leaves: 3 }
  },
{
    id: "ranunculus",
    no: 51,
    name: "洋牡丹",
    en: "Ranunculus",
    latin: "Ranunculus asiaticus",
    family: "毛茛科 · 花毛茛属",
    aliases: ["花毛茛", "波斯毛茛", "芹菜花"],
    colors: [
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#A0432B", name: "胭脂", group: "红" },
      { hex: "#C9762F", name: "橙", group: "橙" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9B23E", name: "奶油黄", group: "黄" }
    ],
    form: "重瓣杯状 / 层叠",
    shapeGroup: "杯状",
    inflorescence: "单生或聚伞",
    diameter: "5–10 cm",
    height: "30–60 cm",
    bloom: [3, 4, 5],
    scent: { level: "淡", desc: "几乎没有香气；叶片有青草气，花心紧密。" },
    language: {
      positive: "受欢迎、迷人的魅力、明亮的吸引",
      negative: "被观赏的甜美；层层包裹的讨好",
      cultural: "中文花市叫「洋牡丹」，西式 ranunculus 常取「I am dazzled by your charms」，日式「ラナンキュラス」常取「魅力的、晴れやかな魅力」；三者都围绕「被吸引」。"
    },
    cultureMeanings: {
      cn: "洋牡丹是花市对花毛茛的俗称，因花形层叠像牡丹；它和真正的牡丹不是同一科。",
      west: "英语花语中 ranunculus 常指「I am dazzled by your charms」、attractiveness；维多利亚花束里很常见。",
      jp: "日式花语常见「魅力的、晴れやかな魅力、あなたは魅力的」；「ラナンキュラス」是春季花市的重要切花。"
    },
    occasions: ["婚礼", "祝贺"],
    taboos: [
      "毛茛科汁液有刺激性，猫狗/儿童误食需注意",
      "不要与牡丹、芍药混为一谈",
      "花材不可入口；处理时避免汁液接触眼睛"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "毛茛科植物含原白头翁素等刺激物，猫狗误食可致流涎、呕吐、口腔刺激。",
      children: "花材与汁液不可入口；接触后洗手。",
      note: "不提供食用或药用建议。"
    },
    origin: "地中海沿岸、西亚",
    habitat: "山地草甸；温带球根/块根栽培",
    vaseLife: "5–7 天",
    press: "花瓣多，压前拆层；干燥后颜色会变深。",
    culture: "洋牡丹是花毛茛的切花名，因层层花瓣像牡丹；它在春季花市里常被当成「小牡丹」卖。",
    poetry: "中国古诗没有对应的洋牡丹意象；它是近代传入的园艺花。",
    myth: "洋牡丹没有强神话源头；「ranunculus」在拉丁语中意为「小青蛙」，指它喜欢湿润环境。",
    prompt: "用「层叠」写魅力：每一层都在说「再看我一眼」。",
    misuse: "把洋牡丹当成牡丹/芍药；或忽略毛茛科汁液的刺激性。",
    trivia: "洋牡丹是毛茛科花毛茛，不是牡丹；它的花心紧密，花瓣层层包裹。",
    pairs: { ids: ["rose", "lisianthus"], line: "洋牡丹做层叠，玫瑰给重心，洋桔梗把边缘修干净。" },
    svg: { type: "rosette", petals: 8, leaves: 3 }
  },
  {
    id: "delphinium",
    no: 52,
    name: "大飞燕",
    en: "Delphinium",
    latin: "Delphinium elatum",
    family: "毛茛科 · 翠雀属",
    aliases: ["大花飞燕草", "翠雀", "飞燕草"],
    colors: [
      { hex: "#5E7FA8", name: "飞燕蓝", group: "蓝" },
      { hex: "#6E5A8A", name: "深紫", group: "紫" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" }
    ],
    form: "穗状 / 漏斗状",
    shapeGroup: "穗状",
    inflorescence: "总状花序",
    diameter: "单花 3–5 cm / 花穗 30–80 cm",
    height: "100–180 cm",
    bloom: [5, 6, 7],
    scent: { level: "淡", desc: "清淡的青草气，几乎无香；花穗高，视觉存在感强。" },
    language: {
      positive: "自由、正义、轻盈的飞翔",
      negative: "高傲的距离感；高处的孤独",
      cultural: "中文多取「自由、轻盈」，西式 delphinium 常取 levity、fun、big-hearted，日式「デルフィニウム」常取「幸せ、自由」；三者都围绕「飞」。"
    },
    cultureMeanings: {
      cn: "大飞燕在中文花市里指花穗较大的翠雀/飞燕草，常取「自由、轻盈」；它是毛茛科，不是燕子的花。",
      west: "英语花语中 delphinium 常指 levity、fun、big-hearted；花穗高，常用于婚礼与大型花艺。",
      jp: "日式花语常见「幸せ、自由、壮大」；「デルフィニウム」在初夏花市很常见。"
    },
    occasions: ["婚礼", "祝贺"],
    taboos: [
      "全株有毒，猫狗/儿童误食可致呕吐、心律异常",
      "不要与小飞燕、飞燕草混为一谈（花市名有重叠）",
      "花穗高，瓶插需深水与重瓶"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "翠雀属含二萜生物碱，猫狗误食可致流涎、呕吐、腹泻、心律异常，需就医。",
      children: "全株有毒，误食可致口腔刺激与神经症状，需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "欧洲、亚洲温带",
    habitat: "山地草甸、林缘",
    vaseLife: "5–7 天",
    press: "单朵花可压；整穗压会太厚，建议拆花。",
    culture: "大飞燕的花穗像一群停驻的燕子，英文 delphinium 来自希腊语「海豚」，指花蕾形状；它在欧洲婚礼里常做高线花材。",
    poetry: "中国古诗没有对应的大飞燕意象；「飞燕草」是近代园艺名。",
    myth: "大飞燕没有强神话源头；「海豚」的词源比神话更常被引用。",
    prompt: "用「飞燕」写自由：它们排成一列，却没有一只真的飞走。",
    misuse: "把大飞燕与小飞燕/飞燕草混为一谈；或忽略全株毒性。",
    trivia: "大飞燕是毛茛科翠雀属，花穗上的花从下往上开；「delphinium」意为海豚。",
    pairs: { ids: ["rose", "lisianthus"], line: "大飞燕做高线，玫瑰给重心，洋桔梗把蓝托轻。" },
    svg: { type: "gladiolus", petals: 0, leaves: 3 }
  },
  {
    id: "larkspur",
    no: 53,
    name: "小飞燕",
    en: "Larkspur",
    latin: "Consolida ajacis",
    family: "毛茛科 · 飞燕草属",
    aliases: ["飞燕草", "千鸟草", "小飞燕草"],
    colors: [
      { hex: "#6D86A8", name: "雾蓝", group: "蓝" },
      { hex: "#8A6F9E", name: "灰紫", group: "紫" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" }
    ],
    form: "穗状 / 小漏斗",
    shapeGroup: "穗状",
    inflorescence: "总状花序",
    diameter: "单花 1.5–3 cm / 花穗 15–40 cm",
    height: "40–90 cm",
    bloom: [5, 6, 7],
    scent: { level: "淡", desc: "清淡的青草气，几乎没有香气；花穗比大飞燕轻。" },
    language: {
      positive: "轻盈、自由、清新的心情",
      negative: "轻飘飘的承诺；容易被忽略的细声",
      cultural: "中文花市多叫「小飞燕/千鸟草」，西式 larkspur 常取 levity、lightness，日式「千鳥草」常取「自由、軽やか」；三者都指向「轻」。"
    },
    cultureMeanings: {
      cn: "小飞燕在中文花市里常指花穗较小的飞燕草类，花语多取「轻盈、自由」；花市名与植物学名并不完全对应。",
      west: "英语 larkspur 常指 Consolida 属，花语常取 levity、lightness、positivity；维多利亚花语里也可能指「轻率」。",
      jp: "日式花语常见「自由、軽やか、晴れやかな心」；「千鳥草」的名字来自花形像千鸟。"
    },
    occasions: ["婚礼", "暗恋"],
    taboos: [
      "全株有毒，猫狗/儿童误食可致呕吐、心律异常",
      "不要与大飞燕混为一谈；花市名常按花穗大小混用",
      "花穗细，瓶插需支撑"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "飞燕草属含二萜生物碱，猫狗误食可致流涎、呕吐、心律异常，需就医。",
      children: "全株有毒，误食可致口腔刺激与神经症状，需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "地中海、欧洲",
    habitat: "田野、草甸；温带栽培",
    vaseLife: "5–7 天",
    press: "单朵花可压；整穗压会太厚，建议拆花。",
    culture: "小飞燕与大飞燕在花市里常按花穗大小区分，植物学上可能涉及飞燕草属与翠雀属；买花时说「小飞燕」比学名更常用。",
    poetry: "中国古诗没有对应的小飞燕意象；「千鸟草」是近代园艺名。",
    myth: "小飞燕没有强神话源头；「larkspur」的名字来自花尾像云雀的距。",
    prompt: "用「轻」写承诺：它很轻，所以风一吹就改了口。",
    misuse: "把小飞燕与大飞燕混为一谈；或忽略全株毒性。",
    trivia: "小飞燕的花尾有长距，英文 larkspur 意为「云雀的距」；它与大飞燕同科不同属。",
    pairs: { ids: ["iris", "gypsophila"], line: "小飞燕做轻线，鸢尾给冷蓝，满天星把风留出来。" },
    svg: { type: "gladiolus", petals: 0, leaves: 3 }
  },
  {
    id: "blue-star",
    no: 54,
    name: "蓝星花",
    en: "Blue Star Flower",
    latin: "Oxypetalum coeruleum",
    family: "夹竹桃科 · 蓝星花属",
    aliases: ["星花", "天蓝星", "蓝星"],
    colors: [
      { hex: "#5E8FBF", name: "蓝星", group: "蓝" },
      { hex: "#8A6F9E", name: "紫星", group: "紫" },
      { hex: "#F8F1E5", name: "纸白", group: "白" }
    ],
    form: "五角星形",
    shapeGroup: "轮状",
    inflorescence: "聚伞花序",
    diameter: "2–3 cm",
    height: "30–60 cm",
    bloom: [5, 6, 7, 8],
    scent: { level: "淡", desc: "几乎没有香气；茎叶有青草气，汁液呈乳白。" },
    language: {
      positive: "互相信任、把握现在、幸福的爱",
      negative: "蓝色幻觉；看似温柔的距离",
      cultural: "中文多取「互信、把握现在」，西式 blue star 常取 trust、hope，日式「ブルースター」常取「幸福な愛、信じる心」；三者都围绕「相信」。"
    },
    cultureMeanings: {
      cn: "蓝星花在中文花艺里常取「互相信任、把握现在」，蓝色五角星花形是它的识别点。",
      west: "英语中 blue star flower 常取 trust、hope、faithfulness；夹竹桃科的乳汁需要避免接触。",
      jp: "日式花语常见「幸福な愛、信じる心、信頼」；「ブルースター」是婚礼与手捧花的常见蓝花。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "夹竹桃科乳汁有刺激性，猫狗/儿童误食需注意",
      "修剪时避免汁液接触眼睛与皮肤",
      "不要与真正的水星/星花混为一谈"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "蓝星花含乳汁，猫狗误食可致口腔刺激、呕吐、腹泻；需避免啃咬。",
      children: "汁液接触皮肤/眼睛需清洗；花材不可入口。",
      note: "不提供食用或药用建议。"
    },
    origin: "南美（巴西、乌拉圭）",
    habitat: "草原、灌丛；温带栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄，压后蓝色会变浅；适合做小标本。",
    culture: "蓝星花的蓝色在切花里很稀有，因此常被用作婚礼手捧的「一点蓝」；它和勿忘我、矢车菊的蓝不是同一种。",
    poetry: "中国古诗没有对应的蓝星花意象；它是近代传入的南美植物。",
    myth: "蓝星花没有强神话源头；「star」来自五角星花形。",
    prompt: "用「蓝色星星」写信任：它不是夜空，是被摘下来的一小颗。",
    misuse: "把蓝星花与勿忘我、矢车菊混为一谈；或忽略夹竹桃科乳汁的刺激性。",
    trivia: "蓝星花是夹竹桃科，乳汁呈白色；它原产南美，不是中国本土的「星花」。",
    pairs: { ids: ["forget-me-not", "gypsophila"], line: "蓝星花做星星，勿忘我写记忆，满天星把夜空留出来。" },
    svg: { type: "bluestar", petals: 5, leaves: 3 }
  },
  {
    id: "sweet-pea",
    no: 55,
    name: "香豌豆",
    en: "Sweet Pea",
    latin: "Lathyrus odoratus",
    family: "豆科 · 山黧豆属",
    aliases: ["香豌豆花", "麝香豌豆", "花豌豆"],
    colors: [
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#8A6F9E", name: "灰紫", group: "紫" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#B0473F", name: "砖红", group: "红" }
    ],
    form: "蝶形 / 小蝶",
    shapeGroup: "蝶形",
    inflorescence: "总状花序",
    diameter: "2–3 cm",
    height: "藤本 1–2 m",
    bloom: [3, 4, 5],
    scent: { level: "浓", desc: "甜而粉的豌豆花香，清晨最明显；一束就能让房间变甜。" },
    language: {
      positive: "甜蜜的回忆、出发、温柔的告别",
      negative: "过度甜美的怀旧；被美化的离别",
      cultural: "中文多取「甜蜜的回忆、出发」，西式 sweet pea 常取 blissful pleasure、departure，日式「スイートピー」常取「門出、優しい思い出」；三者都带「走」。"
    },
    cultureMeanings: {
      cn: "香豌豆在中文花艺里常取「甜蜜的回忆、出发」，是春季花束与毕业/送别花材。",
      west: "英语花语中 sweet pea 常指 blissful pleasure、thank you、departure；爱德华时代的花束里很常见。",
      jp: "日式花语常见「門出、優しい思い出、別れの喜び」；「スイートピー」是春季花市的重要香花。"
    },
    occasions: ["婚礼", "暗恋", "送别"],
    taboos: [
      "种子/荚果有毒，猫狗/儿童误食需注意",
      "不要与食用豌豆混为一谈",
      "花香浓，密闭空间慎用"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "香豌豆种子与荚果含毒性成分，猫狗误食可致呕吐、腹泻与神经症状，需就医。",
      children: "种子不可入口；豆荚也不要让孩子把玩。",
      note: "不提供食用或药用建议。"
    },
    origin: "地中海（西西里岛）",
    habitat: "山坡、灌丛；温带栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄，压后颜色保持较好；适合小标本。",
    culture: "香豌豆是爱德华时代花束的「甜香担当」，也是查尔斯王子婚礼花束的常用花；它的种子有毒，不能与食用豌豆混为一谈。",
    poetry: "中国古诗没有对应的香豌豆意象；它是近代传入的欧洲藤本花。",
    myth: "香豌豆没有强神话源头；「sweet pea」的名字来自香气与豌豆形花。",
    prompt: "用「甜」写告别：它把离别说得很好听，但仍然是离别。",
    misuse: "把香豌豆与食用豌豆混为一谈；或忽略种子/荚果的毒性。",
    trivia: "香豌豆是豆科山黧豆属，不是可食用的豌豆；它的香气在清晨最明显。",
    pairs: { ids: ["rose", "lisianthus"], line: "香豌豆做香气的云，玫瑰给重量，洋桔梗把甜度收住。" },
    svg: { type: "sweetpea", petals: 0, leaves: 2 }
  },
  {
    id: "wisteria",
    no: 56,
    name: "紫藤",
    en: "Wisteria",
    latin: "Wisteria sinensis",
    family: "豆科 · 紫藤属",
    aliases: ["藤萝", "朱藤", "黄环"],
    colors: [
      { hex: "#8A6F9E", name: "藤紫", group: "紫" },
      { hex: "#B39BC4", name: "浅藤紫", group: "紫" },
      { hex: "#F7F0E4", name: "纸白", group: "白" }
    ],
    form: "蝶形 / 总状下垂",
    shapeGroup: "枝状",
    inflorescence: "总状花序",
    diameter: "单花 2–2.5 cm / 花序 15–30 cm",
    height: "藤本 3–10 m",
    bloom: [4, 5],
    scent: { level: "浓", desc: "甜而粉的藤花香，傍晚更明显；花序下垂，香气从下往上飘。" },
    language: {
      positive: "沉醉、思念、为爱而生",
      negative: "缠绕的执念；美到窒息的依赖",
      cultural: "中文多取「沉醉、思念」，西式 wisteria 常取 welcome、steadfast，日式「藤」常取「恋に酔う、優しさ」；三者都带「缠绕」。"
    },
    cultureMeanings: {
      cn: "紫藤在中文园林里常与「藤萝」相连，花语多取「沉醉、思念」；李白《紫藤树》把它写成春日攀附的美。",
      west: "英语花语中 wisteria 常指 welcome、steadfast、affection；它的藤蔓也被视为「依附」的隐喻。",
      jp: "日式花语常见「恋に酔う、優しさ、歓迎」；「藤」在家族纹章与和歌中都很常见。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "种子/荚果有毒，猫狗/儿童误食需注意",
      "藤蔓会缠绕其他植物，不要随意种在墙边",
      "花序重，瓶插需支撑"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "紫藤种子与荚果含毒性成分，猫狗误食可致呕吐、腹泻、腹痛，需就医。",
      children: "种子与荚果不可入口；需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国",
    habitat: "山地、林缘；庭院棚架栽培",
    vaseLife: "3–5 天",
    press: "单朵花可压；整串压会太厚，建议拆花。",
    culture: "紫藤在中国园林里是棚架花，在日本则与「藤」的家族纹章、和歌相连；它的美来自下垂与缠绕。",
    poetry: "李白《紫藤树》：『紫藤挂云木，花蔓宜阳春。』",
    myth: "紫藤没有强神话源头；「藤」的缠绕常被写成依恋，但各地故事版本不一。",
    prompt: "用「缠绕」写依恋：它开得很美，但树已经被勒出痕。",
    misuse: "把紫藤与藤萝（同一类）分开当成两种；或忽略种子/荚果的毒性。",
    trivia: "紫藤是豆科，花序从棚架上垂下；它的种子与荚果有毒，不能食用。",
    pairs: { ids: ["iris", "lavender"], line: "紫藤做垂线，鸢尾给冷紫，薰衣草把香气拉长。" },
    svg: { type: "wisteria", petals: 4, leaves: 2 }
  },
  {
    id: "peach-blossom",
    no: 57,
    name: "桃花",
    en: "Peach Blossom",
    latin: "Prunus persica",
    family: "蔷薇科 · 李属",
    aliases: ["桃", "碧桃", "毛桃"],
    colors: [
      { hex: "#D98FA0", name: "桃花粉", group: "粉" },
      { hex: "#F2D7D5", name: "浅粉", group: "粉" },
      { hex: "#F7EEE4", name: "纸白", group: "白" },
      { hex: "#A0432B", name: "胭脂", group: "红" }
    ],
    form: "五瓣轮状",
    shapeGroup: "轮状",
    inflorescence: "单生或两朵并生",
    diameter: "2.5–3.5 cm",
    height: "300–800 cm",
    bloom: [3, 4],
    scent: { level: "淡", desc: "清淡的甜香，靠近才有；花瓣薄，风一吹就落。" },
    language: {
      positive: "爱情、桃花运、春天的勇气",
      negative: "短暂的花期；被误读的「桃花劫」",
      cultural: "中文多取「爱情、桃花运」，西式 peach blossom 常取 longevity、love，日式「桃の花」常取「恋のとりこ、春の訪れ」；三者都围绕「春」。"
    },
    cultureMeanings: {
      cn: "桃花在中文里既是春天，也是「桃花运」；《诗经·桃夭》把它写成新娘的青春。",
      west: "英语花语中 peach blossom 常指 longevity、love、spring；它不如玫瑰那样固定，更多是春日象征。",
      jp: "日式花语常见「恋のとりこ、春の訪れ、チャーム」；桃花与女儿节（雏祭）也有联系。"
    },
    occasions: ["告白", "暗恋"],
    taboos: [
      "果核含氰苷，猫狗/儿童误食有风险",
      "不要与樱花、梅花混为一谈",
      "花瓣薄，远途携带需保护"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "桃的果核/种子含氰苷，猫狗啃咬有风险；花本身风险较低但仍不应入口。",
      children: "果核误食风险高，需收好；不要让孩子啃咬桃枝。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国",
    habitat: "山地、果园；温带栽培",
    vaseLife: "3–5 天",
    press: "花瓣薄，适合压；干燥后粉色会变淡。",
    culture: "桃花是中国春天最直接的视觉符号之一；「桃之夭夭」写新娘，「桃花源」写理想世界，「桃花运」写爱情。",
    poetry: "《诗经·周南·桃夭》：『桃之夭夭，灼灼其华。』",
    myth: "桃花源是陶渊明笔下的理想世界，不是植物学神话；「桃花运」则是后来的命理/民俗说法。",
    prompt: "用「桃花」写春天：它开得很快，落得也很快。",
    misuse: "把桃花与樱花、梅花混为一谈；或把「桃花运」当成所有文化里都成立的词。",
    trivia: "桃花是李属植物，和樱花、梅、李是近亲；「桃花运」是民俗词，不是植物学。",
    pairs: { ids: ["camellia", "plum"], line: "桃花做春粉，山茶压深，梅花把冬天的尾巴收住。" },
    svg: { type: "branch", petals: 5, leaves: 2 }
  },
  {
    id: "cherry-blossom",
    no: 58,
    name: "樱花",
    en: "Cherry Blossom",
    latin: "Prunus serrulata",
    family: "蔷薇科 · 李属",
    aliases: ["山樱花", "日本樱花", "染井吉野"],
    colors: [
      { hex: "#E3B7C4", name: "樱粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D98FA0", name: "深樱粉", group: "粉" }
    ],
    form: "五瓣轮状 / 重瓣",
    shapeGroup: "轮状",
    inflorescence: "伞形或总状",
    diameter: "2–4 cm",
    height: "300–1000 cm",
    bloom: [3, 4],
    scent: { level: "淡", desc: "几乎没有香气；花瓣薄，成片开放时像一层雾。" },
    language: {
      positive: "纯洁、短暂的美、春天的相遇",
      negative: "物哀、易逝；被浪漫化的告别",
      cultural: "中文多取「纯洁、短暂」，西式 cherry blossom 常取 transient beauty，日式「桜」常取「純潔、精神美、はかない」；三者共享「短」，但语气不同。"
    },
    cultureMeanings: {
      cn: "樱花在中国现代花艺里常取「纯洁、短暂的美」，也是春季赏花与校园记忆的符号。",
      west: "英语花语中 cherry blossom 常指 transient beauty、gentleness；它更多是春日象征，而不是固定爱情花。",
      jp: "日式花语常见「純潔、精神美、はかない」；「物哀」与花吹雪是日本樱花文化的核心意象。"
    },
    occasions: ["送别", "暗恋"],
    taboos: [
      "果核含氰苷，猫狗/儿童误食有风险",
      "不要与桃花、梅花混为一谈",
      "花瓣薄，远途携带需保护"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "樱的果核/种子含氰苷，猫狗啃咬有风险；花本身风险较低但仍不应入口。",
      children: "果核误食风险高，需收好；不要让孩子啃咬樱枝。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国、日本、朝鲜半岛",
    habitat: "山地、公园；温带栽培",
    vaseLife: "3–5 天",
    press: "花瓣薄，压后颜色会变淡；适合做小标本。",
    culture: "樱花在中文里是春日花事，在日本则与「物哀」、花吹雪、入学/毕业季紧密相连；同一种花，两种时间感。",
    poetry: "中国古诗中樱花意象较少；日本《古今和歌集》有大量樱花和歌。",
    myth: "日本神话中木花开耶姬与樱花相关，版本不一；「樱花」不是单一神话人物。",
    prompt: "用「花吹雪」写告别：最美的时刻，也是开始落下的时候。",
    misuse: "把樱花与桃花、梅花混为一谈；或把日本的「物哀」直接套到所有文化。",
    trivia: "樱花是李属植物，和桃、梅、李是近亲；「染井吉野」是栽培品种，不是野生种。",
    pairs: { ids: ["magnolia", "peach-blossom"], line: "樱花做春雾，玉兰给大朵，桃花把粉色推近。" },
    svg: { type: "branch", petals: 5, leaves: 2 }
  },
  {
    id: "magnolia",
    no: 59,
    name: "玉兰",
    en: "Yulan Magnolia",
    latin: "Magnolia denudata",
    family: "木兰科 · 木兰属",
    aliases: ["白玉兰", "望春花", "玉堂春"],
    colors: [
      { hex: "#F8F1E5", name: "玉白", group: "白" },
      { hex: "#F2E3E6", name: "浅粉", group: "粉" },
      { hex: "#D9B23E", name: "蕊金", group: "黄" },
      { hex: "#6E7A58", name: "芽绿", group: "绿" }
    ],
    form: "杯状 / 大瓣",
    shapeGroup: "杯状",
    inflorescence: "单生枝顶",
    diameter: "8–15 cm",
    height: "500–1500 cm",
    bloom: [2, 3, 4],
    scent: { level: "浓", desc: "清甜的柠檬—香草气，靠近很浓；先花后叶，香气在冷空气里更清楚。" },
    language: {
      positive: "高洁、报春、端庄的爱",
      negative: "高处不胜寒；先花后叶的孤独",
      cultural: "中文多取「高洁、报春」，西式 magnolia 常取 dignity、magnificence，日式「木蓮」常取「高潔、自然の愛」；三者都指向「高」。"
    },
    cultureMeanings: {
      cn: "玉兰在中文园林里是早春大花，常取「高洁、报春」；上海市花是白玉兰，让它带上城市身份。",
      west: "英语花语中 magnolia 常指 dignity、magnificence、love of nature；美国南方的木兰花也常被写成优雅的象征。",
      jp: "日式花语常见「高潔、自然の愛、崇高」；「木蓮」与「白木蓮」在早春庭院中很常见。"
    },
    occasions: ["祝贺", "婚礼"],
    taboos: [
      "花材不可入口；猫狗/儿童误食需注意",
      "不要与辛夷、木兰混为一谈（同属近亲）",
      "花瓣厚，压花需分层"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "玉兰未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花瓣厚，注意幼儿误食。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国",
    habitat: "山地、林缘；温带庭院栽培",
    vaseLife: "3–5 天",
    press: "花瓣厚，压前分层；干燥后白色会转米黄。",
    culture: "玉兰先花后叶，早春满树白花；它是上海市花，也是中国庭院里「玉堂春」的吉祥名。",
    poetry: "《楚辞·离骚》有「朝饮木兰之坠露兮」，但「木兰」是木兰属的泛称，不等于今天的白玉兰。",
    myth: "玉兰没有强神话源头；「玉堂春」是庭院吉祥名，不是古典神话。",
    prompt: "用「先花后叶」写孤独：它先开给天空看，叶子后来才到。",
    misuse: "把玉兰与辛夷、木兰属其他种混为一谈；或把《楚辞》的「木兰」直接等同于白玉兰。",
    trivia: "玉兰先花后叶，花大而厚；它是上海市花。木兰属的分类近年有修订，部分学者把它归入玉兰属。",
    pairs: { ids: ["camellia", "plum"], line: "玉兰做大朵，山茶压深，梅花把早春的骨架撑起来。" },
    svg: { type: "magnolia", petals: 6, leaves: 2 }
  },
  {
    id: "crabapple",
    no: 60,
    name: "海棠",
    en: "Crabapple",
    latin: "Malus spectabilis",
    family: "蔷薇科 · 苹果属",
    aliases: ["海棠花", "西府海棠", "垂丝海棠"],
    colors: [
      { hex: "#D98FA0", name: "海棠粉", group: "粉" },
      { hex: "#B0473F", name: "砖红", group: "红" },
      { hex: "#F8F1E5", name: "纸白", group: "白" }
    ],
    form: "五瓣轮状",
    shapeGroup: "轮状",
    inflorescence: "伞形总状",
    diameter: "3–5 cm",
    height: "300–800 cm",
    bloom: [4, 5],
    scent: { level: "淡", desc: "清淡的甜香，靠近才有；花瓣薄，成片时像云。" },
    language: {
      positive: "温柔的思念、美丽的等待",
      negative: "苦恋、断肠；「海棠春睡」的慵懒",
      cultural: "中文多取「温柔思念、苦恋」，西式 crabapple 常取 love、beauty，日式「海棠」常取「美人、温和」；中文的「断肠」不是西式主调。"
    },
    cultureMeanings: {
      cn: "海棠在中文文学里常与「海棠春睡」、苦恋相连；苏轼「只恐夜深花睡去」让它成为夜色里的美人。",
      west: "英语花语中 crabapple 常指 love、beauty、spring；它不如玫瑰固定，更多是庭院春色。",
      jp: "日式花语常见「美人、温和、あなたは私の心を奪う」；「海棠」在庭院与盆栽中常见。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "果核含氰苷，猫狗/儿童误食有风险",
      "不要与秋海棠混为一谈（完全不同的科）",
      "花瓣薄，远途携带需保护"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "海棠果核/种子含氰苷，猫狗啃咬有风险；花本身风险较低但仍不应入口。",
      children: "果核误食风险高，需收好；不要让孩子啃咬枝条。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国",
    habitat: "山地、庭院；温带栽培",
    vaseLife: "3–5 天",
    press: "花瓣薄，适合压；干燥后粉色会变淡。",
    culture: "海棠在中国庭院里是「花中神仙」，苏轼的海棠诗让它带上夜色与美人；它和秋海棠不是同一类。",
    poetry: "苏轼《海棠》：『只恐夜深花睡去，故烧高烛照红妆。』",
    myth: "「海棠春睡」典出杨贵妃醉酒未醒，唐玄宗说她像海棠春睡；这是典故，不是植物神话。",
    prompt: "用「海棠春睡」写慵懒：她不是不开，是还没醒。",
    misuse: "把海棠与秋海棠混为一谈；或把「断肠」当成所有文化里的海棠花语。",
    trivia: "海棠是蔷薇科苹果属，秋海棠是秋海棠科；两者只是中文名都有「海棠」。",
    pairs: { ids: ["peach-blossom", "magnolia"], line: "海棠做粉云，桃花推近，玉兰把高度撑起来。" },
    svg: { type: "branch", petals: 5, leaves: 2 }
  },
  {
    id: "pomegranate",
    no: 61,
    name: "石榴花",
    en: "Pomegranate Flower",
    latin: "Punica granatum",
    family: "千屈菜科 · 石榴属",
    aliases: ["安石榴", "丹若", "涂林"],
    colors: [
      { hex: "#C0392B", name: "石榴红", group: "红" },
      { hex: "#C9762F", name: "橙红", group: "橙" },
      { hex: "#F7EEE2", name: "纸白", group: "白" }
    ],
    form: "杯状 / 筒状",
    shapeGroup: "杯状",
    inflorescence: "单生或簇生",
    diameter: "3–5 cm",
    height: "200–500 cm",
    bloom: [5, 6, 7],
    scent: { level: "淡", desc: "几乎没有香气；花萼厚，花瓣薄而皱。" },
    language: {
      positive: "多子、热烈、繁荣",
      negative: "被生育绑定的祝福；过度的红",
      cultural: "中文多取「多子、繁荣、热烈」，西式 pomegranate 常取 fertility、abundance，日式「石榴」常取「子孫繁栄、情熱」；三者都围绕「多」。"
    },
    cultureMeanings: {
      cn: "石榴在中文里因多籽而象征多子、繁荣；石榴花是端午前后的红，常与「丹若」并用。",
      west: "英语花语中 pomegranate 常指 fertility、abundance、ambition；希腊神话的珀耳塞福涅也让它带上「冥界」的阴影。",
      jp: "日式花语常见「子孫繁栄、情熱、豊穣」；石榴在庭院与盆栽中常见。"
    },
    occasions: ["祝贺", "婚礼"],
    taboos: [
      "花材不可入口；果皮/根皮在传统药用中有使用，本站不作建议",
      "不要用「多子」祝福所有家庭，先看对方语境",
      "花萼硬，儿童误食需注意"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "石榴花未见明确猫狗毒性记录；果皮/根皮不建议让宠物啃咬。",
      children: "花材不可入口；花萼硬，注意幼儿误食。",
      note: "不提供食用或药用建议。"
    },
    origin: "西亚、伊朗",
    habitat: "干旱山坡；温带/亚热带栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄而皱，压后红色会变深；花萼厚，可单独干燥。",
    culture: "石榴从西亚传入中国，因多籽成为「多子」的吉祥符号；它的花、果、籽都被写进婚俗与年画。",
    poetry: "韩愈《题张十一旅舍三咏·榴花》：『五月榴花照眼明，枝间时见子初成。』",
    myth: "希腊神话中珀耳塞福涅吃了石榴籽，因此每年要回冥界；这是「石榴＝绑定」的西方叙事。",
    prompt: "用「多籽」写繁荣：每一颗都是一个未来，也都是一份负担。",
    misuse: "把「多子」当成对所有家庭的祝福；或忽略石榴花与果实/果皮的区别。",
    trivia: "石榴是千屈菜科石榴属，不是蔷薇科；它的花萼硬而厚，果实里的籽才是「多子」符号。",
    pairs: { ids: ["peony-tree", "camellia"], line: "石榴花做热烈的红，牡丹压场，山茶把红收深。" },
    svg: { type: "pomegranate", petals: 5, leaves: 3 }
  },
  {
    id: "snowball-viburnum",
    no: 62,
    name: "木绣球",
    en: "Chinese Snowball Viburnum",
    latin: "Viburnum macrocephalum",
    family: "五福花科 · 荚蒾属",
    aliases: ["绣球荚蒾", "木绣球花", "大绣球"],
    colors: [
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "球状聚伞",
    shapeGroup: "球状",
    inflorescence: "聚伞花序",
    diameter: "10–20 cm（花球）",
    height: "200–400 cm",
    bloom: [4, 5],
    scent: { level: "淡", desc: "清淡的青草气，几乎没有香气；花球由许多不孕花组成。" },
    language: {
      positive: "团圆、希望、纯洁的守候",
      negative: "被误当绣球（Hydrangea）的替身；白色过盛的空",
      cultural: "中文多取「团圆、希望」，西式 snowball viburnum 没有固定花语，日式「大手鞠」常取「家族の絆、約束」；三者都围绕「团」。"
    },
    cultureMeanings: {
      cn: "木绣球在中文庭院里是春季白花球，常取「团圆、希望」；它和绣球（Hydrangea）不是同一科。",
      west: "英语中 Chinese snowball viburnum 常取 spring、home、gathering；花语体系不如玫瑰固定。",
      jp: "日式花语常见「家族の絆、約束、団結」；「大手鞠」的花球像手鞠。"
    },
    occasions: ["婚礼", "探病", "祝贺"],
    taboos: [
      "不要与绣球（Hydrangea）混为一谈；木绣球是荚蒾属",
      "花材不可入口；果实也不应让宠物啃咬",
      "花球重，瓶插需支撑"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "木绣球未见明确猫狗毒性记录；果实仍不应让宠物啃咬。",
      children: "花材不可入口；花球重，注意花瓶倾倒。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国",
    habitat: "山地、林缘；庭院栽培",
    vaseLife: "5–7 天",
    press: "单朵小花可拆下压；整球压会发霉，需分层。",
    culture: "木绣球是荚蒾属，不是绣球属；它的白色花球像手鞠，因此日式名「大手鞠」很贴切。",
    poetry: "中国古诗中木绣球题材较少；它更多是庭院与近代花艺里的春季白花。",
    myth: "木绣球没有强神话源头；「手鞠」的联想来自花球形状。",
    prompt: "用「花球」写团圆：所有小花挤在一起，才像一个完整的家。",
    misuse: "把木绣球与绣球（Hydrangea）混为一谈；或忽略花球重量对瓶插的影响。",
    trivia: "木绣球是五福花科荚蒾属，绣球是绣球科绣球属；两者同叫「绣球」，科属不同。",
    pairs: { ids: ["rose", "lily"], line: "木绣球做白球，玫瑰给重心，百合把香气托住。" },
    svg: { type: "cluster", petals: 5, leaves: 3 }
  },
  {
    id: "cymbidium",
    no: 63,
    name: "大花蕙兰",
    en: "Cymbidium",
    latin: "Cymbidium hybrids",
    family: "兰科 · 兰属",
    aliases: ["蕙兰", "洋蕙兰", "虎头兰杂交"],
    colors: [
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9B23E", name: "蕊黄", group: "黄" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "杯状 / 兰花形",
    shapeGroup: "杯状",
    inflorescence: "总状花序",
    diameter: "5–8 cm",
    height: "60–120 cm",
    bloom: [1, 2, 3, 4],
    scent: { level: "淡", desc: "清淡的兰香，部分品种几乎无香；花穗长，花期久。" },
    language: {
      positive: "高贵、丰盛、优雅的祝福",
      negative: "被摆放的富贵；花期过长的塑料感",
      cultural: "中文多取「高贵、丰盛」，西式 cymbidium 常取 luxury、refinement，日式「シンビジウム」常取「飾らない美、誠実」；三者都围绕「雅」。"
    },
    cultureMeanings: {
      cn: "大花蕙兰是年花与开业花篮的常客，中文多取「高贵、丰盛」；它是兰属杂交，不是传统国兰。",
      west: "英语花语中 cymbidium 常指 luxury、refinement、elegance；婚礼与酒店花艺中很常见。",
      jp: "日式花语常见「飾らない美、誠実、華やか」；「シンビジウム」是冬季花市的重要兰花。"
    },
    occasions: ["祝贺", "婚礼"],
    taboos: [
      "花材不可入口；猫狗误食风险低但仍不应啃咬",
      "不要与国兰/春兰混为一谈",
      "花穗重，瓶插需支撑"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "大花蕙兰未见明确猫狗毒性记录；兰花类通常风险较低，但仍不应啃咬。",
      children: "花材不可入口；固定铁丝需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "亚洲热带/亚热带（园艺杂交）",
    habitat: "附生/地生；温室栽培",
    vaseLife: "2–4 周（切花）",
    press: "花瓣厚，压前拆开；干燥后颜色会变深。",
    culture: "大花蕙兰是兰属的大花杂交，常作年花；它与中国传统「国兰」的审美不同，更强调花大、色艳、花期长。",
    poetry: "中国古诗中的「兰」多指国兰/香草，不是大花蕙兰；引用时需区分。",
    myth: "大花蕙兰没有强神话源头；它是近代园艺杂交的产物。",
    prompt: "用「兰」写高贵：它被摆在高处，但根还在盆里。",
    misuse: "把大花蕙兰与国兰/春兰混为一谈；或把「兰」的古诗直接套到热带兰花上。",
    trivia: "大花蕙兰是兰属杂交，不是国兰；它的花穗可以开很久，但需要支撑。",
    pairs: { ids: ["rose", "moth-orchid"], line: "大花蕙兰做体量，玫瑰给重心，蝴蝶兰把边缘提亮。" },
    svg: { type: "orchid", petals: 5, leaves: 3 }
  },
  {
    id: "dendrobium",
    no: 64,
    name: "石斛兰",
    en: "Dendrobium",
    latin: "Dendrobium spp.",
    family: "兰科 · 石斛属",
    aliases: ["石斛", "金钗石斛", "蝴蝶石斛"],
    colors: [
      { hex: "#8A6F9E", name: "石斛紫", group: "紫" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#D9B23E", name: "蕊黄", group: "黄" }
    ],
    form: "蝶形 / 兰花形",
    shapeGroup: "蝶形",
    inflorescence: "总状花序",
    diameter: "3–6 cm",
    height: "30–80 cm",
    bloom: [3, 4, 5],
    scent: { level: "淡", desc: "清淡的兰香，部分品种几乎无香；茎节明显。" },
    language: {
      positive: "坚毅、祝福、优雅的坚持",
      negative: "被药用标签绑架；只看功效不看花",
      cultural: "中文多取「坚毅、祝福」，西式 dendrobium 常取 elegance、strength，日式「デンドロビウム」常取「わがままな美人、天性の華」；三者都围绕「韧」。"
    },
    cultureMeanings: {
      cn: "石斛兰在中文花艺里常取「坚毅、祝福」；石斛属中的一些种在传统药用中有使用，但本站不作任何药用建议。",
      west: "英语花语中 dendrobium 常指 elegance、strength、refinement；婚礼与胸花中常见。",
      jp: "日式花语常见「わがままな美人、天性の華、華やか」；「デンドロビウム」是兰花切花的重要类别。"
    },
    occasions: ["祝贺", "探病"],
    taboos: [
      "不要写石斛的药用/食用功效；本站不作建议",
      "花材不可入口；猫狗误食风险低但仍不应啃咬",
      "不要与铁皮石斛等药用种混为一谈"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "石斛兰未见明确猫狗毒性记录；兰花类通常风险较低，但仍不应啃咬。",
      children: "花材不可入口；固定铁丝需远离幼儿。",
      note: "不提供食用或药用建议；石斛属的药用话题不在本站展开。"
    },
    origin: "亚洲热带/亚热带、大洋洲",
    habitat: "附生兰；温室栽培",
    vaseLife: "1–3 周（切花）",
    press: "花瓣厚，压前拆开；干燥后颜色会变深。",
    culture: "石斛兰是兰花切花的大类，茎节明显；它常被药用标签覆盖，但在花艺里首先是一朵花。",
    poetry: "中国古诗中的「兰」多指国兰/香草，不是石斛兰；引用时需区分。",
    myth: "石斛兰没有强神话源头；它是热带兰花的园艺大类。",
    prompt: "用「石斛」写坚韧：它长在石头上，却开出兰花。",
    misuse: "把石斛兰的药用话题当成花语；或把石斛兰与国兰混为一谈。",
    trivia: "石斛兰是兰科石斛属，很多种附生在树上/石上；「铁皮石斛」是另一种，药用话题不在本站展开。",
    pairs: { ids: ["cymbidium", "cattleya"], line: "石斛兰做细线，大花蕙兰给体量，卡特兰把兰香压住。" },
    svg: { type: "orchid", petals: 5, leaves: 2 }
  },
  {
    id: "oncidium",
    no: 65,
    name: "文心兰",
    en: "Oncidium",
    latin: "Oncidium spp.",
    family: "兰科 · 文心兰属",
    aliases: ["舞女兰", "跳舞兰", "金粉蝶"],
    colors: [
      { hex: "#D9B23E", name: "舞女黄", group: "黄" },
      { hex: "#C9762F", name: "褐斑橙", group: "橙" },
      { hex: "#F8F1E5", name: "纸白", group: "白" }
    ],
    form: "舞女形 / 兰花形",
    shapeGroup: "蝶形",
    inflorescence: "圆锥/总状花序",
    diameter: "2–4 cm",
    height: "30–60 cm",
    bloom: [8, 9, 10, 11],
    scent: { level: "淡", desc: "几乎没有香气；花形像穿裙子的舞女。" },
    language: {
      positive: "快乐、隐藏的爱、轻盈的舞",
      negative: "被观赏的表演；笑得越甜越累",
      cultural: "中文多取「快乐、隐藏的爱」，西式 oncidium 常取 dancing lady、joy，日式「オンシジウム」常取「一緒に踊って、華やか」；三者都围绕「舞」。"
    },
    cultureMeanings: {
      cn: "文心兰在中文花艺里常取「快乐、隐藏的爱」，花形像穿裙子的舞女，所以也叫「舞女兰」。",
      west: "英语中 oncidium 常称 dancing lady orchid，花语多取 joy、playfulness、grace。",
      jp: "日式花语常见「一緒に踊って、華やか、楽しい時間」；「オンシジウム」是兰花切花中的明亮色。"
    },
    occasions: ["祝贺", "暗恋"],
    taboos: [
      "花材不可入口；猫狗误食风险低但仍不应啃咬",
      "不要与蝴蝶兰/石斛兰混为一谈",
      "花穗轻，运输需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "文心兰未见明确猫狗毒性记录；兰花类通常风险较低，但仍不应啃咬。",
      children: "花材不可入口；固定铁丝需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "美洲热带/亚热带",
    habitat: "附生兰；温室栽培",
    vaseLife: "1–2 周（切花）",
    press: "花瓣薄，压后黄色会变深；适合小标本。",
    culture: "文心兰的花形像穿裙子的舞女，英文叫 dancing lady orchid；它在兰花切花里属于「轻快」的那一类。",
    poetry: "中国古诗没有对应的文心兰意象；它是热带兰花的园艺类群。",
    myth: "文心兰没有强神话源头；「舞女」的联想来自花形。",
    prompt: "用「跳舞」写快乐：它一直在转圈，但舞台是别人搭的。",
    misuse: "把文心兰与蝴蝶兰、石斛兰混为一谈；或把「兰」的古诗直接套到热带兰花上。",
    trivia: "文心兰是兰科文心兰属，原产美洲热带；它的花形像穿裙子的舞女，因此英文叫 dancing lady。",
    pairs: { ids: ["cymbidium", "gerbera"], line: "文心兰做舞步，大花蕙兰给体量，非洲菊把黄色提亮。" },
    svg: { type: "orchid", petals: 5, leaves: 2 }
  },
  {
    id: "cattleya",
    no: 66,
    name: "卡特兰",
    en: "Cattleya",
    latin: "Cattleya spp.",
    family: "兰科 · 卡特兰属",
    aliases: ["嘉德丽亚兰", "卡特利亚兰"],
    colors: [
      { hex: "#D9A6B4", name: "卡特粉", group: "粉" },
      { hex: "#8A6F9E", name: "兰紫", group: "紫" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9B23E", name: "蕊黄", group: "黄" }
    ],
    form: "兰花形 / 大唇瓣",
    shapeGroup: "蝶形",
    inflorescence: "单生或总状",
    diameter: "8–15 cm",
    height: "30–60 cm",
    bloom: [3, 4, 5, 9, 10, 11],
    scent: { level: "浓", desc: "部分品种有浓烈的甜香，部分几乎无香；大唇瓣是识别点。" },
    language: {
      positive: "成熟的魅力、敬爱、优雅的骄傲",
      negative: "被观赏的昂贵；只可远观的距离",
      cultural: "中文多取「敬爱、魅力」，西式 cattleya 常取 mature charm、elegance，日式「カトレア」常取「優雅、成熟した魅力」；三者都围绕「成熟」。"
    },
    cultureMeanings: {
      cn: "卡特兰在中文花艺里常取「敬爱、成熟的魅力」，是兰花中的「大花皇后」；它常作胸花与高级花束。",
      west: "英语花语中 cattleya 常指 mature charm、elegance、admiration；维多利亚时代它是贵族温室的象征。",
      jp: "日式花语常见「優雅、成熟した魅力、あなたは美しい」；「カトレア」是兰花切花的经典。"
    },
    occasions: ["婚礼", "祝贺"],
    taboos: [
      "花材不可入口；猫狗误食风险低但仍不应啃咬",
      "不要与蝴蝶兰/大花蕙兰混为一谈",
      "花香浓的品种不适合密闭空间"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "卡特兰未见明确猫狗毒性记录；兰花类通常风险较低，但仍不应啃咬。",
      children: "花材不可入口；固定铁丝需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "中南美洲热带",
    habitat: "附生兰；温室栽培",
    vaseLife: "1–3 周（切花）",
    press: "花瓣厚，压前拆开；干燥后颜色会变深。",
    culture: "卡特兰是热带兰花的代表，19 世纪欧洲温室热让它成为「兰花贵族」；大唇瓣是它最醒目的结构。",
    poetry: "中国古诗中的「兰」多指国兰/香草，不是卡特兰；引用时需区分。",
    myth: "卡特兰没有强神话源头；属名 Cattleya 纪念英国园艺家 William Cattley。",
    prompt: "用「大唇瓣」写魅力：它把最艳的部分放在最前面。",
    misuse: "把卡特兰与蝴蝶兰、大花蕙兰混为一谈；或把「兰」的古诗直接套到热带兰花上。",
    trivia: "卡特兰是兰科卡特兰属，原产中南美洲；它的属名纪念 William Cattley。",
    pairs: { ids: ["rose", "cymbidium"], line: "卡特兰做主角，玫瑰给重心，大花蕙兰把体量托住。" },
    svg: { type: "orchid", petals: 5, leaves: 2 }
  },
  {
    id: "amaryllis",
    no: 67,
    name: "朱顶红",
    en: "Amaryllis",
    latin: "Hippeastrum rutilum",
    family: "石蒜科 · 朱顶红属",
    aliases: ["孤挺花", "对对红", "朱顶兰"],
    colors: [
      { hex: "#B0473F", name: "朱红", group: "红" },
      { hex: "#D98FA0", name: "藕粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#C9762F", name: "橙红", group: "橙" }
    ],
    form: "喇叭状 / 大杯",
    shapeGroup: "喇叭",
    inflorescence: "伞形",
    diameter: "10–15 cm",
    height: "40–70 cm",
    bloom: [3, 4, 5],
    scent: { level: "淡", desc: "几乎没有香气；花大，茎粗，视觉存在感强。" },
    language: {
      positive: "渴望、追求、华丽的爱",
      negative: "骄傲、被观赏的盛大；花期短的失落",
      cultural: "中文多取「渴望、追求」，西式 amaryllis 常取 pride、splendid beauty，日式「アマリリス」常取「誇り、おしゃべり」；三者都围绕「大」。"
    },
    cultureMeanings: {
      cn: "朱顶红在中文年花里常取「渴望、追求、华丽」，因花大色艳而受欢迎；它是石蒜科，不是百合。",
      west: "英语中 amaryllis 常指 Hippeastrum，花语多取 pride、splendid beauty、success；冬季催花很常见。",
      jp: "日式花语常见「誇り、おしゃべり、華やか」；「アマリリス」是球根花市的重要品类。"
    },
    occasions: ["祝贺", "婚礼"],
    taboos: [
      "球茎有毒，猫狗/儿童误食可致呕吐、腹泻",
      "不要与百合、水仙混为一谈",
      "花茎中空，瓶插需深水"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "朱顶红球茎含石蒜科生物碱，猫狗误食可致流涎、呕吐、腹泻。",
      children: "球茎风险较高，花材也不应入口。",
      note: "不提供食用或药用建议。"
    },
    origin: "南美",
    habitat: "山地、草原；球根栽培",
    vaseLife: "5–7 天",
    press: "花瓣厚，压前拆层；干燥后红色会变深。",
    culture: "朱顶红是石蒜科球根花，常被误叫「阿玛丽丽丝」；它的花大、茎粗，是冬季催花的主角。",
    poetry: "中国古诗没有对应的朱顶红意象；它是近代传入的南美球根花。",
    myth: "朱顶红没有强神话源头；「Amaryllis」在希腊神话中是牧羊女的名字，但植物学归属另有故事。",
    prompt: "用「大花」写渴望：它开得很大，因为不想被忽略。",
    misuse: "把朱顶红与百合、水仙混为一谈；或忽略球茎对猫狗/儿童的毒性。",
    trivia: "朱顶红是石蒜科朱顶红属，不是百合；花市常叫它 amaryllis，但真正的 Amaryllis 是另一属。",
    pairs: { ids: ["rose", "camellia"], line: "朱顶红做盛大，玫瑰给重心，山茶把红压深。" },
    svg: { type: "trumpet", petals: 6, leaves: 3 }
  },
  {
    id: "tuberose",
    no: 68,
    name: "晚香玉",
    en: "Tuberose",
    latin: "Polianthes tuberosa",
    family: "天门冬科 · 晚香玉属",
    aliases: ["月下香", "夜情花"],
    colors: [
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "漏斗状 / 穗状",
    shapeGroup: "穗状",
    inflorescence: "穗状花序",
    diameter: "3–5 cm",
    height: "60–100 cm",
    bloom: [7, 8, 9, 10],
    scent: { level: "浓", desc: "夜里最明显的甜香，带一点奶感与辛辣；一束就能占满房间。" },
    language: {
      positive: "夜之香、危险的魅力、沉醉",
      negative: "过度浓香；被浪漫化的危险",
      cultural: "中文多取「夜之香、危险的魅力」，西式 tuberose 常取 dangerous pleasure，日式「チューベローズ」常取「危険な香り、官能」；三者都围绕「夜」。"
    },
    cultureMeanings: {
      cn: "晚香玉在中文花艺里常取「夜之香、危险的魅力」，因为它在夜里最香；它也常被用于香水调。",
      west: "英语花语中 tuberose 常指 dangerous pleasure、voluptuousness；维多利亚时代它既是香水花，也是「不要靠近」的花。",
      jp: "日式花语常见「危険な香り、官能、妖艶」；「チューベローズ」是夏夜香花。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "球茎有毒，猫狗/儿童误食可致呕吐、腹泻",
      "浓香不适合探病或密闭空间",
      "不要写「晚香玉香水/精油」的食用或香疗建议"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "晚香玉球茎含毒性成分，猫狗误食可致呕吐、腹泻、流涎。",
      children: "球茎风险较高，花材也不应入口。",
      note: "不提供食用、香疗或药用建议。"
    },
    origin: "墨西哥",
    habitat: "山地、球根栽培",
    vaseLife: "5–7 天",
    press: "花瓣厚，压前拆层；干燥后白色会转米黄。",
    culture: "晚香玉是香水工业的重要香花，也是「夜里才香」的典型；它的香气比花形更有名。",
    poetry: "中国古诗没有对应的晚香玉意象；它是近代传入的球根花。",
    myth: "晚香玉没有强神话源头；「夜之香」是物候观察，不是神话。",
    prompt: "用「夜香」写危险的吸引：它不让你看见，只让你闻到。",
    misuse: "把晚香玉与夜来香（Cestrum nocturnum）混为一谈；或忽略球茎毒性。",
    trivia: "晚香玉是石蒜科/天门冬科（分类有修订）球根花，原产墨西哥；它的香气在夜间更明显。",
    pairs: { ids: ["gardenia", "jasmine"], line: "晚香玉做夜香，栀子压白，茉莉把甜度推高。" },
    svg: { type: "freesia", petals: 0, leaves: 3 }
  },
  {
    id: "alstroemeria",
    no: 69,
    name: "六出花",
    en: "Alstroemeria",
    latin: "Alstroemeria spp.",
    family: "六出花科 · 六出花属",
    aliases: ["秘鲁百合", "水仙百合", "六出花"],
    colors: [
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#C9762F", name: "橙", group: "橙" },
      { hex: "#D9B23E", name: "黄", group: "黄" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#7A5A7E", name: "灰紫", group: "紫" }
    ],
    form: "六瓣 / 百合形",
    shapeGroup: "喇叭",
    inflorescence: "伞形/总状",
    diameter: "4–6 cm",
    height: "40–100 cm",
    bloom: [5, 6, 7, 8],
    scent: { level: "淡", desc: "几乎没有香气；花瓣常有斑点/条纹。" },
    language: {
      positive: "友情、喜悦、对未来的憧憬",
      negative: "被误当百合；看似坚强其实易折",
      cultural: "中文多取「友情、喜悦」，西式 alstroemeria 常取 friendship、devotion，日式「アルストロメリア」常取「未来への憧憬、友情」；三者都围绕「陪伴」。"
    },
    cultureMeanings: {
      cn: "六出花在中文花艺里常取「友情、喜悦、对未来的憧憬」，也叫「秘鲁百合」；它不是百合科。",
      west: "英语花语中 alstroemeria 常指 friendship、devotion、fortune；它是花束里很常见的「持久花」。",
      jp: "日式花语常见「未来への憧憬、友情、持続」；「アルストロメリア」是婚礼与日常花束的常客。"
    },
    occasions: ["婚礼", "探病"],
    taboos: [
      "对猫狗有毒，误食可致呕吐、腹泻",
      "不要与百合混为一谈；六出花不是百合科",
      "花瓣易掉，远途携带需保护"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "六出花对猫狗有毒，误食可致呕吐、腹泻、流涎。",
      children: "花材不可入口；需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "南美（智利、巴西）",
    habitat: "山地、林缘；全球栽培",
    vaseLife: "7–14 天",
    press: "花瓣薄，压后颜色保持较好；斑点会变淡。",
    culture: "六出花是南美植物，因花瓣常有斑点而像「被画过的百合」；它在花束里以花期长著称。",
    poetry: "中国古诗没有对应的六出花意象；它是近代传入的南美花。",
    myth: "六出花没有强神话源头；属名 Alstroemeria 纪念瑞典植物学家 Clas Alströmer。",
    prompt: "用「斑点」写友情：不完美的地方，反而最像你。",
    misuse: "把六出花与百合混为一谈；或忽略它对猫狗的毒性。",
    trivia: "六出花是六出花科，不是百合科；花瓣上的斑点/条纹是它的识别点。",
    pairs: { ids: ["rose", "gypsophila"], line: "六出花做斑点，玫瑰给重心，满天星把花束放轻。" },
    svg: { type: "trumpet", petals: 6, leaves: 3 }
  },
  {
    id: "ornithogalum",
    no: 70,
    name: "天鹅绒",
    en: "Star of Bethlehem",
    latin: "Ornithogalum saundersiae",
    family: "天门冬科 · 虎眼万年青属",
    aliases: ["伯利恒之星", "天鹅绒", "白花虎眼万年青"],
    colors: [
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#6E7A58", name: "花心绿", group: "绿" }
    ],
    form: "星形 / 伞形",
    shapeGroup: "轮状",
    inflorescence: "伞形/总状",
    diameter: "3–5 cm",
    height: "60–100 cm",
    bloom: [5, 6, 7],
    scent: { level: "淡", desc: "几乎没有香气；花心有一点绿，花茎粗壮。" },
    language: {
      positive: "纯洁、希望、伯利恒之星",
      negative: "被误当百合的替身；白色过盛的冷",
      cultural: "中文花市叫「天鹅绒/伯利恒之星」，西式 star of Bethlehem 常取 hope、purity，日式「オーニソガラム」常取「純粋、希望」；三者都围绕「星」。"
    },
    cultureMeanings: {
      cn: "天鹅绒是花市名，正式名常叫「伯利恒之星」，学名 Ornithogalum；它常被用作百合的替代花材。",
      west: "英语中 star of Bethlehem 常取 hope、purity、guidance；它与圣诞星传说相连。",
      jp: "日式花语常见「純粋、希望、才能」；「オーニソガラム」是白色星形花材。"
    },
    occasions: ["婚礼", "悼念"],
    taboos: [
      "球茎/花对猫狗有毒，误食可致呕吐、心律异常",
      "不要与百合、水仙混为一谈",
      "白色花材在部分语境偏悼念，送前确认"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "虎眼万年青属含强心苷类/其他毒性成分，猫狗误食可致呕吐、腹泻、心律异常。",
      children: "球茎风险较高，花材也不应入口。",
      note: "不提供食用或药用建议。"
    },
    origin: "南非",
    habitat: "山地、草原；球根栽培",
    vaseLife: "7–14 天",
    press: "花瓣薄，压后白色会转米黄；花心绿色可保留。",
    culture: "天鹅绒的花市名来自它「绒白」的质感，正式名「伯利恒之星」则来自圣诞星传说；它是球根花，不是百合。",
    poetry: "中国古诗没有对应的天鹅绒意象；它是近代传入的球根花。",
    myth: "伯利恒之星与耶稣诞生的指引之星相连；这是宗教传说，不是植物学。",
    prompt: "用「星」写希望：它没有照亮整条路，只照亮下一步。",
    misuse: "把天鹅绒与百合、水仙混为一谈；或忽略球茎/花的毒性。",
    trivia: "天鹅绒是花市名，正式名常叫伯利恒之星；它是天门冬科球根花，不是百合。",
    pairs: { ids: ["rose", "lily"], line: "天鹅绒做星点，玫瑰给重心，百合把白色托高。" },
    svg: { type: "cluster", petals: 6, leaves: 3 }
  },
  {
    id: "orlaya",
    no: 71,
    name: "蕾丝花",
    en: "Lace Flower",
    latin: "Orlaya grandiflora",
    family: "伞形科 · 蕾丝花属",
    aliases: ["白蕾丝", "大花蕾丝", "Orlaya"],
    colors: [
      { hex: "#F8F1E5", name: "蕾丝白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "伞形 / 小花",
    shapeGroup: "枝状",
    inflorescence: "复伞形花序",
    diameter: "5–8 cm（伞形）",
    height: "40–80 cm",
    bloom: [5, 6, 7],
    scent: { level: "淡", desc: "清淡的青草气，几乎没有香气；小花像蕾丝。" },
    language: {
      positive: "惹人怜爱、纯洁、细致的心",
      negative: "被当配角的细碎；过度轻盈的承诺",
      cultural: "中文多取「惹人怜爱、纯洁」，西式 lace flower 常取 delicate beauty，日式「レースフラワー」常取「繊細、純粋」；三者都围绕「细」。"
    },
    cultureMeanings: {
      cn: "蕾丝花在中文花艺里常取「惹人怜爱、纯洁」，多作花束的轻盈填充；它和野胡萝卜花/Ammi 常被混称。",
      west: "英语中 lace flower 常指 Orlaya grandiflora，花语多取 delicate beauty、elegance；婚礼花束里很常见。",
      jp: "日式花语常见「繊細、純粋、可憐」；「レースフラワー」是白色伞形花材的统称。"
    },
    occasions: ["婚礼", "探病"],
    taboos: [
      "不要与野胡萝卜花、Ammi majus 混为一谈；花市常统称「蕾丝」",
      "花材不可入口；伞形科植物可能引起过敏",
      "小花易掉，远途携带需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "蕾丝花未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "地中海",
    habitat: "田野、石灰质坡地",
    vaseLife: "5–7 天",
    press: "小花可整伞压；干燥后仍保留蕾丝感。",
    culture: "蕾丝花是伞形科的「白色蕾丝」，常被用作婚礼花束的轻盈层；花市里的「蕾丝」可能指不同属的伞形花。",
    poetry: "中国古诗没有对应的蕾丝花意象；它是近代传入的欧洲野花。",
    myth: "蕾丝花没有强神话源头；「lace」来自伞形花序的视觉。",
    prompt: "用「蕾丝」写细碎的爱：它不占中心，但少了它，整束花就硬了。",
    misuse: "把蕾丝花与野胡萝卜花/Ammi 混为一谈；或忽略伞形科花粉过敏。",
    trivia: "蕾丝花是伞形科 Orlaya，花市里的「蕾丝」也可能指 Ammi majus；两者花形相近但不同属。",
    pairs: { ids: ["rose", "gypsophila"], line: "蕾丝花做轻边，玫瑰给重心，满天星把白留成雾。" },
    svg: { type: "lace", petals: 5, leaves: 2 }
  },
  {
    id: "trachymene",
    no: 72,
    name: "翠珠",
    en: "Blue Lace Flower",
    latin: "Trachymene coerulea",
    family: "伞形科 · 翠珠属",
    aliases: ["翠珠花", "蓝蕾丝", "蓝饰带花"],
    colors: [
      { hex: "#7D9BB8", name: "翠蓝", group: "蓝" },
      { hex: "#8A6F9E", name: "灰紫", group: "紫" },
      { hex: "#F8F1E5", name: "纸白", group: "白" }
    ],
    form: "伞形 / 小花",
    shapeGroup: "枝状",
    inflorescence: "复伞形花序",
    diameter: "4–6 cm（伞形）",
    height: "40–70 cm",
    bloom: [5, 6, 7],
    scent: { level: "淡", desc: "几乎没有香气；小花密集，像蓝色蕾丝。" },
    language: {
      positive: "梦幻、优雅、温柔的注视",
      negative: "过于轻的承诺；藏在蓝色里的距离",
      cultural: "中文多取「梦幻、优雅」，西式 blue lace flower 常取 delicate beauty，日式「ブルーレース」常取「優雅、夢見る」；三者都围绕「蓝」。"
    },
    cultureMeanings: {
      cn: "翠珠在中文花艺里常取「梦幻、优雅」，是蓝色系花束的轻盈填充；它和蕾丝花同科不同属。",
      west: "英语中 blue lace flower 常取 delicate beauty、grace；它在婚礼花束里常作蓝色点缀。",
      jp: "日式花语常见「優雅、夢見る、繊細」；「ブルーレース」是蓝色伞形花材。"
    },
    occasions: ["婚礼", "暗恋"],
    taboos: [
      "不要与蕾丝花、野胡萝卜花混为一谈",
      "花材不可入口；伞形科花粉敏感者注意",
      "小花易掉，远途携带需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "翠珠未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "澳大利亚",
    habitat: "干燥草地；园艺栽培",
    vaseLife: "5–7 天",
    press: "小花可整伞压；干燥后蓝色会变浅。",
    culture: "翠珠是伞形科的蓝色小花，原产澳大利亚；它在中文花市里常被叫作「蓝蕾丝」。",
    poetry: "中国古诗没有对应的翠珠意象；它是近代传入的澳洲植物。",
    myth: "翠珠没有强神话源头；「蓝蕾丝」来自伞形花序的视觉。",
    prompt: "用「蓝蕾丝」写注视：它不抢镜，但整张照片都靠它透气。",
    misuse: "把翠珠与蕾丝花混为一谈；或忽略伞形科花粉过敏。",
    trivia: "翠珠是伞形科翠珠属，原产澳大利亚；它和白色蕾丝花（Orlaya）同科不同属。",
    pairs: { ids: ["blue-star", "orlaya"], line: "翠珠做蓝雾，蓝星花给星星，蕾丝花把白留出来。" },
    svg: { type: "lace", petals: 5, leaves: 2 }
  },
  {
    id: "scabiosa",
    no: 73,
    name: "松虫草",
    en: "Pincushion Flower",
    latin: "Scabiosa atropurpurea",
    family: "忍冬科 · 蓝盆花属",
    aliases: ["蓝盆花", "轮锋菊", "松虫草"],
    colors: [
      { hex: "#6E5A8A", name: "松虫紫", group: "紫" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#6D86A8", name: "雾蓝", group: "蓝" }
    ],
    form: "头状 / 垫状",
    shapeGroup: "球状",
    inflorescence: "头状花序",
    diameter: "3–5 cm",
    height: "60–100 cm",
    bloom: [5, 6, 7, 8],
    scent: { level: "淡", desc: "清淡的青草气，几乎无香；花心像针垫。" },
    language: {
      positive: "思念、寂寞的等待、温柔的心",
      negative: "寡妇的悲哀（旧花语）；被留在原地的等待",
      cultural: "中文多取「思念、等待」，西式 scabiosa 旧花语常指 unfortunate love、widowhood，日式「マツムシソウ」常取「悲恋、寂しさ」；三者都带「等」。"
    },
    cultureMeanings: {
      cn: "松虫草在中文花艺里常取「思念、等待」，花心像针垫，所以英文叫 pincushion flower。",
      west: "英语花语中 scabiosa 旧义常指 unfortunate love、widowhood；现代花艺更多取 delicate beauty。",
      jp: "日式花语常见「悲恋、寂しさ、待つ」；「マツムシソウ」是秋日山野花。"
    },
    occasions: ["送别", "暗恋"],
    taboos: [
      "不要与蓝盆花/松虫草的不同园艺种混为一谈",
      "花材不可入口；花粉敏感者注意",
      "花心易藏水，瓶插需勤换水"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "松虫草未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "南欧、地中海",
    habitat: "草甸、石灰质坡地",
    vaseLife: "5–7 天",
    press: "花心厚，压前拆层；干燥后颜色会变深。",
    culture: "松虫草的花心像针垫，英文叫 pincushion flower；它在旧花语里常与「不幸的爱」相连，现代花艺则更看重它的野趣。",
    poetry: "中国古诗没有对应的松虫草意象；它是近代传入的欧洲野花。",
    myth: "松虫草没有强神话源头；「pincushion」来自花形。",
    prompt: "用「针垫」写等待：每一根针都朝着同一个方向。",
    misuse: "把松虫草与蓝盆花的不同园艺种混为一谈；或把旧花语的「寡妇」当成唯一解释。",
    trivia: "松虫草是忍冬科蓝盆花属，花心像针垫；它和「虫草」不是同一种东西。",
    pairs: { ids: ["lavender", "orlaya"], line: "松虫草做针垫，薰衣草拉长，蕾丝花把边缘放轻。" },
    svg: { type: "pincushion", petals: 0, leaves: 3 }
  },
  {
    id: "spiraea",
    no: 74,
    name: "雪柳",
    en: "Bridal Wreath Spiraea",
    latin: "Spiraea thunbergii",
    family: "蔷薇科 · 绣线菊属",
    aliases: ["喷雪花", "珍珠花", "雪柳"],
    colors: [
      { hex: "#F8F1E5", name: "雪白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "小五瓣 / 枝条",
    shapeGroup: "枝状",
    inflorescence: "伞形/总状",
    diameter: "0.8–1.2 cm",
    height: "100–200 cm",
    bloom: [3, 4],
    scent: { level: "淡", desc: "几乎没有香气；枝条细，白花密集像雪。" },
    language: {
      positive: "纯洁、春天、雪一样的温柔",
      negative: "易散的雪；被风一吹就空的承诺",
      cultural: "中文多取「纯洁、春天」，西式 bridal wreath 常取 elegance、grace，日式「雪柳」常取「純白、希望」；三者都围绕「雪」。"
    },
    cultureMeanings: {
      cn: "雪柳在中文花艺里常取「纯洁、春天」，枝条细密白花像雪；它是春季花束的轻盈线材。",
      west: "英语中 bridal wreath spiraea 常取 elegance、grace、new beginnings；婚礼花束里很常见。",
      jp: "日式花语常见「純白、希望、可憐」；「雪柳」是春季花材。"
    },
    occasions: ["婚礼", "送别"],
    taboos: [
      "不要与柳树（Salix）混为一谈；雪柳是蔷薇科",
      "花材不可入口；花粉敏感者注意",
      "枝条细，运输需防折"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "雪柳未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国、日本",
    habitat: "山坡、灌丛；庭院栽培",
    vaseLife: "5–7 天",
    press: "小花可整枝压；干燥后白色会转米黄。",
    culture: "雪柳是绣线菊属，枝条细密白花像雪；它在婚礼花束里常做「喷雪」的线材，不是柳树。",
    poetry: "中国古诗中雪柳题材较少；它更多是庭院与近代花艺里的春季白花。",
    myth: "雪柳没有强神话源头；「雪」来自白花密度。",
    prompt: "用「喷雪」写春天：它没有声音，但整棵树都在落雪。",
    misuse: "把雪柳与柳树（Salix）混为一谈；或忽略枝条细、易折。",
    trivia: "雪柳是蔷薇科绣线菊属，不是柳树；它的白花密集，英文叫 bridal wreath。",
    pairs: { ids: ["peach-blossom", "magnolia"], line: "雪柳做雪线，桃花给粉，玉兰把春天撑高。" },
    svg: { type: "branch", petals: 5, leaves: 2 }
  },
  {
    id: "pingpong-chrysanthemum",
    no: 75,
    name: "乒乓菊",
    en: "Pingpong Chrysanthemum",
    latin: "Chrysanthemum morifolium 'Pingpong'",
    family: "菊科 · 菊属",
    aliases: ["球菊", "乒乓小菊", "乒乓菊"],
    colors: [
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9B23E", name: "鹅黄", group: "黄" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "球状 / 重瓣",
    shapeGroup: "球状",
    inflorescence: "头状花序",
    diameter: "4–6 cm",
    height: "50–90 cm",
    bloom: [9, 10, 11],
    scent: { level: "淡", desc: "清淡的青草气，几乎无香；花头紧实像小球。" },
    language: {
      positive: "圆满、可爱、团聚",
      negative: "被可爱化的圆满；过度整齐的甜",
      cultural: "中文多取「圆满、可爱、团聚」，西式 pompon chrysanthemum 常取 cheerfulness，日式「ポンポン菊」常取「円満、可愛い」；三者都围绕「圆」。"
    },
    cultureMeanings: {
      cn: "乒乓菊是菊花的重瓣小球品种，中文花艺里常取「圆满、可爱、团聚」；它仍是菊花，悼念语境要看颜色。",
      west: "英语中 pompon chrysanthemum 常取 cheerfulness、perfection；花店常把它当「小球」卖。",
      jp: "日式花语常见「円満、可愛い、団らん」；「ポンポン菊」是秋季花材。"
    },
    occasions: ["祝贺", "探病"],
    taboos: [
      "对猫狗有毒，误食可致呕吐、腹泻",
      "白菊/黄菊在部分语境偏悼念，送前看场合",
      "花头紧实，易藏水，瓶插需勤换水"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "菊花含对猫狗有毒的成分，误食可致流涎、呕吐、腹泻、共济失调。",
      children: "花材不可入口；需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国（园艺品种）",
    habitat: "栽培",
    vaseLife: "7–10 天",
    press: "花头厚，压前拆层；干燥后颜色会变深。",
    culture: "乒乓菊是菊花的重瓣小球品种，因花头圆得像乒乓球而得名；它把菊花的「秋」变成了「可爱」。",
    poetry: "中国古诗中的菊花多指秋菊/野菊，不是乒乓菊；引用时需区分。",
    myth: "乒乓菊没有强神话源头；它是近代园艺选育的品种。",
    prompt: "用「小球」写圆满：它没有棱角，但也没有出口。",
    misuse: "把乒乓菊与白菊/黄菊的悼念语境混为一谈；或忽略菊花对猫狗的毒性。",
    trivia: "乒乓菊是菊花的重瓣品种，不是独立物种；它的花头由许多小花组成。",
    pairs: { ids: ["chrysanthemum", "rose"], line: "乒乓菊做圆球，菊花给秋色，玫瑰把圆收出层次。" },
    svg: { type: "pom", petals: 0, leaves: 3 }
  },
{
    id: "epiphyllum",
    no: 76,
    name: "昙花",
    en: "Queen of the Night",
    latin: "Epiphyllum oxypetalum",
    family: "仙人掌科 · 昙花属",
    aliases: ["月下美人", "夜会草", "韦陀花"],
    colors: [
      { hex: "#F8F1E5", name: "月白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "漏斗状 / 多瓣",
    shapeGroup: "喇叭",
    inflorescence: "单生",
    diameter: "15–25 cm",
    height: "附生灌木 1–2 m",
    bloom: [6, 7, 8, 9, 10],
    scent: { level: "浓", desc: "夜里开放的清甜白花香，几小时内最浓；天亮后迅速转淡。" },
    language: {
      positive: "刹那的美丽、短暂的相遇、等待",
      negative: "留不住、只在夜里出现的关系",
      cultural: "中文用「昙花一现」写短暂，西式称 queen of the night，日式「月下美人」也写夜开；三者都围绕「一瞬」。"
    },
    cultureMeanings: {
      cn: "昙花在中文里几乎等同于「短暂的美」；「昙花一现」原指优昙钵花，不是今天的昙花，引用时需分清。",
      west: "英语中 queen of the night / night-blooming cereus 常指夜间开花的仙人掌类，花语多取 fleeting beauty、mystery。",
      jp: "日式「月下美人」常取「はかない美、一夜の恋」；它与「月下美人」昙花的文化形象紧密相连。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "花材不可入口；猫狗误食风险低但仍不应啃咬",
      "夜间开花、白天闭合，不适合白天的主花",
      "不要与令箭荷花、量天尺混为一谈"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "昙花未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花大，注意幼儿误食。",
      note: "不提供食用或药用建议。"
    },
    origin: "墨西哥、中美洲",
    habitat: "热带雨林附生",
    vaseLife: "1 夜（花）",
    press: "花瓣薄而多，压前拆层；干燥后白色会转米黄。",
    culture: "昙花是附生仙人掌，花在夜里开放、天亮前闭合；「昙花一现」让它的短暂变成成语。",
    poetry: "「昙花一现」出自佛经中的优昙钵花，不是今天的昙花；这是中文里最常见的植物误配之一。",
    myth: "民间有韦陀与昙花的爱情传说，版本不一；不要把它当成植物学来源。",
    prompt: "用「一夜」写相遇：它开的时候，所有人都在睡。",
    misuse: "把昙花与令箭荷花、量天尺混为一谈；或把「昙花一现」的佛经原典直接等同于今天的昙花。",
    trivia: "昙花是仙人掌科附生植物，花在夜间开放；「昙花一现」原指优昙钵花，不是它。",
    pairs: { ids: ["jasmine", "gardenia"], line: "昙花做一夜的白，茉莉添香，栀子把夜色压住。" },
    svg: { type: "epiphyllum", petals: 0, leaves: 2 }
  },
  {
    id: "night-jasmine",
    no: 77,
    name: "夜来香",
    en: "Night-blooming Jasmine",
    latin: "Cestrum nocturnum",
    family: "茄科 · 夜香树属",
    aliases: ["夜香树", "夜丁香", "木本夜来香"],
    colors: [
      { hex: "#F8F1E5", name: "夜白", group: "白" },
      { hex: "#EFE6D4", name: "米白", group: "白" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "筒状 / 星形",
    shapeGroup: "喇叭",
    inflorescence: "聚伞花序",
    diameter: "1.5–2.5 cm",
    height: "200–400 cm",
    bloom: [6, 7, 8, 9, 10],
    scent: { level: "浓", desc: "夜里极浓的甜香，能飘很远；白天香气明显减弱。" },
    language: {
      positive: "夜的思念、秘密的吸引",
      negative: "只在夜里香；见不得光的关系",
      cultural: "中文多取「夜的思念」，西式 night jasmine 常取 night magic，日式「夜来香」也写夜香；三者都围绕「夜」。"
    },
    cultureMeanings: {
      cn: "夜来香在中文里是「夜里香」的直白命名，常与夏夜、秘密、思念相连。",
      west: "英语中 night-blooming jasmine 常取 night magic、mystery；它是茄科，不是真正的茉莉。",
      jp: "日式「夜来香」常取「夜の香り、秘密の恋」；它也不是茉莉属。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "全株有毒（茄科），猫狗/儿童误食需就医",
      "浓香不适合卧室/密闭空间；花香过敏者注意",
      "不要与晚香玉、茉莉混为一谈"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "夜香树含茄科生物碱，猫狗误食可致流涎、呕吐、腹泻、精神沉郁，需就医。",
      children: "全株有毒，误食可致口腔刺激与肠胃症状，需远离幼儿。",
      note: "不提供食用、药用或香疗建议。"
    },
    origin: "美洲热带",
    habitat: "灌丛、林缘；温暖地区栽培",
    vaseLife: "2–3 天",
    press: "花小，压后易褪色；不适合做长期标本。",
    culture: "夜来香是茄科夜香树，不是茉莉；它在夜里香得霸道，白天却几乎闻不到。",
    poetry: "中国古诗没有对应的夜来香意象；它是近代传入的美洲植物。",
    myth: "夜来香没有强神话源头；「夜香」是物候观察，不是神话。",
    prompt: "用「夜香」写秘密：白天它是绿的，晚上才说出话。",
    misuse: "把夜来香与晚香玉、茉莉混为一谈；或把浓香花放在卧室。",
    trivia: "夜来香是茄科夜香树属，不是茉莉；它的香气在夜间最浓，花却很小。",
    pairs: { ids: ["gardenia", "jasmine"], line: "夜来香做夜香，栀子压白，茉莉把甜度推高。" },
    svg: { type: "trumpet", petals: 5, leaves: 3 }
  },
  {
    id: "datura",
    no: 78,
    name: "曼陀罗",
    en: "Devil's Trumpet",
    latin: "Datura stramonium",
    family: "茄科 · 曼陀罗属",
    aliases: ["洋金花", "醉心花", "狗核桃"],
    colors: [
      { hex: "#F8F1E5", name: "月白", group: "白" },
      { hex: "#8A6F9E", name: "曼陀罗紫", group: "紫" },
      { hex: "#EFE6D4", name: "米白", group: "白" }
    ],
    form: "喇叭状 / 五裂",
    shapeGroup: "喇叭",
    inflorescence: "单生",
    diameter: "8–15 cm",
    height: "60–150 cm",
    bloom: [6, 7, 8, 9, 10],
    scent: { level: "浓", desc: "夜里浓烈的甜香；全株有毒，不要靠近儿童与宠物。" },
    language: {
      positive: "神秘的吸引、不可触碰的美",
      negative: "致幻、危险、疯狂的边界",
      cultural: "中文「曼陀罗」既可指佛教曼陀罗（mandala），也可指茄科曼陀罗属；西式 devil's trumpet 强调危险，日式「曼陀罗」也多指这种毒花。"
    },
    cultureMeanings: {
      cn: "中文「曼陀罗」有两个系统：佛教的曼陀罗（mandala）是宇宙图式，茄科的曼陀罗是毒花；两者不是一回事。",
      west: "英语中 devil's trumpet / jimsonweed 常指 Datura，花语多取 dangerous beauty、hallucination；它含托烷生物碱，极毒。",
      jp: "日式「曼陀罗」多指 Datura/曼陀罗属，常与「危険な美、幻覚」相连。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "全株剧毒（托烷生物碱），猫狗/儿童误食可致命",
      "不要种在儿童/宠物可及处；不要用花泡水/药用/致幻",
      "不要与佛教「曼陀罗」（mandala）混为一谈"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "曼陀罗含阿托品/东莨菪碱等托烷生物碱，猫狗误食可致瞳孔散大、心律异常、抽搐，需立即就医。",
      children: "全株剧毒，误食花/种子可致严重神经症状，必须远离幼儿。",
      note: "不提供食用、药用或致幻建议；仅作创作与安全提醒。"
    },
    origin: "中美洲、南美",
    habitat: "荒地、路旁；温带栽培",
    vaseLife: "2–3 天",
    press: "花瓣薄，压前戴手套；不要用嘴接触。",
    culture: "曼陀罗在西方是「魔鬼的喇叭」，在中文里却常被佛教曼陀罗的光环覆盖；这是最需要分清的植物同名之一。",
    poetry: "中国古诗中的「曼陀罗」多与佛教/曼陀罗花（mandala）相关，不等于茄科曼陀罗；引用时需谨慎。",
    myth: "佛教曼陀罗是宇宙图式/坛城，不是这朵毒花；把两者混写是常见的文化误配。",
    prompt: "用「曼陀罗」写危险的美：它吹得像喇叭，但吹的是幻觉。",
    misuse: "把茄科曼陀罗与佛教曼陀罗混为一谈；或把「致幻」当成可尝试的体验。",
    trivia: "曼陀罗是茄科，含托烷生物碱；它的种子/花都极毒。佛教「曼陀罗」是 mandala，不是同一种东西。",
    pairs: { ids: ["lycoris", "redbean"], line: "三朵危险的花，只适合写在纸上，不适合放在儿童能碰到的地方。" },
    svg: { type: "datura", petals: 5, leaves: 3 }
  },
  {
    id: "lycoris",
    no: 79,
    name: "彼岸花",
    en: "Red Spider Lily",
    latin: "Lycoris radiata",
    family: "石蒜科 · 石蒜属",
    aliases: ["红花石蒜", "曼珠沙华", "舍子花"],
    colors: [
      { hex: "#B33A2E", name: "彼岸红", group: "红" },
      { hex: "#C9762F", name: "橙红", group: "橙" }
    ],
    form: "蜘蛛形 / 反卷",
    shapeGroup: "蝶形",
    inflorescence: "伞形花序",
    diameter: "10–15 cm",
    height: "30–60 cm",
    bloom: [8, 9],
    scent: { level: "淡", desc: "几乎没有香气；花与叶不相见，花期短。" },
    language: {
      positive: "彼岸的思念、重逢的约定",
      negative: "死亡、别离、忘川；被浪漫化的危险",
      cultural: "中文多取「彼岸花/曼珠沙华」的生死意象，日式「彼岸花」与秋彼岸、三途川相连，西式 red spider lily 也常被写成 farewell；三者都指向「彼岸」。"
    },
    cultureMeanings: {
      cn: "彼岸花在中文里常与「花叶不相见」、生死相隔相连；「曼珠沙华」来自佛经，不等于植物学名。",
      west: "英语中 red spider lily 常取 farewell、death、rebirth；它的花与叶在不同季节出现，强化了「分离」意象。",
      jp: "日式「彼岸花」与秋彼岸、墓地、三途川相连，常被视为「死人花」；这是日本语境，不是所有文化都如此。"
    },
    occasions: ["悼念", "送别"],
    taboos: [
      "全株有毒（石蒜碱），猫狗/儿童误食可致呕吐、腹泻、神经症状",
      "不要与可食用野菜/葱蒜混放；不要用花泡水",
      "不要种在儿童/宠物可及处；墓地/悼念语境需尊重家属"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "彼岸花含石蒜碱等生物碱，猫狗误食可致流涎、呕吐、腹泻、抽搐，需就医。",
      children: "全株有毒，误食可致严重肠胃与神经症状，必须远离幼儿。",
      note: "不提供食用或药用建议；不要用球茎/花泡水。"
    },
    origin: "中国、日本",
    habitat: "林下、溪边、墓地附近",
    vaseLife: "3–5 天",
    press: "花瓣薄而反卷，压后红色会变深；雄蕊长，需单独固定。",
    culture: "彼岸花的花与叶永不相见：开花时无叶，长叶时无花；这种物候让它成为「生死相隔」的完美隐喻。",
    poetry: "中国古诗没有固定的彼岸花意象；「曼珠沙华」来自佛经，不是古诗里的花名。",
    myth: "日本传说中彼岸花开在三途川边，是亡者最后的记忆；版本因地区而异。",
    prompt: "用「花叶不相见」写离别：它们住在同一颗球根里，却永远错开。",
    misuse: "把彼岸花与「曼珠沙华」的佛经原义混为一谈；或把日本「死人花」的忌讳当成所有文化都成立。",
    trivia: "彼岸花是石蒜科，花与叶不同时出现；「曼珠沙华」是佛经中的花名，不是它的学名。",
    pairs: { ids: ["chrysanthemum", "lily"], line: "彼岸花做红，白菊压住，百合把悼念的空白托起来。" },
    svg: { type: "lycoris", petals: 0, leaves: 0 }
  },
  {
    id: "saffron-crocus",
    no: 80,
    name: "藏红花",
    en: "Saffron Crocus",
    latin: "Crocus sativus",
    family: "鸢尾科 · 番红花属",
    aliases: ["番红花", "西红花", "藏红"],
    colors: [
      { hex: "#6E5A8A", name: "番红花紫", group: "紫" },
      { hex: "#D97B2E", name: "柱头橙", group: "橙" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "杯状 / 六瓣",
    shapeGroup: "杯状",
    inflorescence: "单生",
    diameter: "4–6 cm",
    height: "10–20 cm",
    bloom: [10, 11],
    scent: { level: "淡", desc: "清淡的干草—蜂蜜气；真正浓烈的是干燥柱头，不是花。" },
    language: {
      positive: "喜悦、珍贵、秋日的火",
      negative: "昂贵/被药用绑架；只看柱头不看花",
      cultural: "中文多取「珍贵、喜悦」，西式 saffron crocus 常取 preciousness，日式「サフラン」常取「喜び、富」；三者都围绕「贵」。"
    },
    cultureMeanings: {
      cn: "藏红花在中文里常被当成「药材/香料」，但它首先是一朵紫色秋花；「藏红花」不是西藏原产，也不等于红花（Carthamus）。",
      west: "英语中 saffron crocus 的柱头是昂贵香料；花语多取 preciousness、joy。",
      jp: "日式花语常见「喜び、富、歓喜」；「サフラン」在秋季开花。"
    },
    occasions: ["祝贺", "婚礼"],
    taboos: [
      "柱头/球茎不可随意入口；猫狗/儿童误食需注意",
      "不要与红花（Carthamus tinctorius）混为一谈",
      "不提供药用/食用/剂量建议；藏红花不是普通调味品"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "番红花属/柱头大量误食可致肠胃与神经症状；猫狗需避免接触。",
      children: "柱头与球茎不可入口；需远离幼儿。",
      note: "不提供食用、药用或剂量建议；孕期尤其不要自行使用。"
    },
    origin: "希腊、西亚（长期栽培）",
    habitat: "干燥山坡；秋季球根",
    vaseLife: "3–5 天",
    press: "花瓣薄，压后紫色会变深；柱头可单独干燥。",
    culture: "藏红花是「最贵的香料」之一，但它的花是紫色秋番红花；「藏红花」名字里的「藏」常让人误以为原产西藏。",
    poetry: "中国古诗没有对应的藏红花意象；它是经丝绸之路传入的球根/香料植物。",
    myth: "希腊神话中 Crocus 是少年，死后化为番红花；版本不一，属于命名传说。",
    prompt: "用「柱头」写珍贵：整朵花的价值，只集中在三根细线。",
    misuse: "把藏红花与红花（Carthamus）混为一谈；或把「藏」当成西藏原产。",
    trivia: "藏红花是鸢尾科番红花属，秋天开花；香料来自三根红色柱头，不是花瓣。",
    pairs: { ids: ["tulip", "ranunculus"], line: "藏红花做秋紫，郁金香给杯形，洋牡丹把层叠托住。" },
    svg: { type: "crocus", petals: 6, leaves: 3 }
  },
  {
    id: "daisy",
    no: 81,
    name: "雏菊",
    en: "Daisy",
    latin: "Bellis perennis",
    family: "菊科 · 雏菊属",
    aliases: ["延命菊", "春菊", "地菊"],
    colors: [
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#B0473F", name: "砖红", group: "红" }
    ],
    form: "头状",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "2–3 cm",
    height: "10–20 cm",
    bloom: [3, 4, 5, 6],
    scent: { level: "淡", desc: "几乎没有香气；只有青草气。" },
    language: {
      positive: "天真、纯洁、藏在心里的爱",
      negative: "幼稚/不敢说；被占卜消耗的喜欢",
      cultural: "中文多取「天真、纯洁」，西式 daisy 常取 innocence、loyal love，日式「デイジー」常取「希望、純潔」；三者都围绕「简单」。"
    },
    cultureMeanings: {
      cn: "雏菊在中文花艺里常取「天真、纯洁、暗恋」，是春季小花束的常客。",
      west: "英语 daisy 来自「day's eye」，花语常取 innocence、loyal love；「he loves me, he loves me not」的占卜也用它。",
      jp: "日式花语常见「希望、純潔、平和」；「デイジー」是春季花坛与花束的常见花。"
    },
    occasions: ["暗恋", "探病"],
    taboos: [
      "不要与玛格丽特、波斯菊混为一谈",
      "花材不可入口；花粉敏感者注意",
      "花瓣易掉，远途携带需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "雏菊未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "欧洲",
    habitat: "草地、草坪；温带栽培",
    vaseLife: "3–5 天",
    press: "花瓣薄，压花效果很好；花心厚，需勤换纸。",
    culture: "雏菊是欧洲草坪上的「白日之眼」，也是「他爱我/不爱我」占卜的花；它的简单让它成为最容易被低估的花。",
    poetry: "中国古诗没有对应的雏菊意象；它是近代传入的欧洲小花。",
    myth: "雏菊没有强神话源头；「day's eye」来自花在白天开放。",
    prompt: "用「占卜」写暗恋：每撕一瓣，都希望最后一片是「爱」。",
    misuse: "把雏菊与玛格丽特、波斯菊混为一谈；或把「占卜」当成真实答案。",
    trivia: "雏菊是菊科雏菊属，英文 daisy 意为「白日之眼」；它和玛格丽特不是同一属。",
    pairs: { ids: ["gypsophila", "forget-me-not"], line: "雏菊做小白，满天星留白，勿忘我把名字写小。" },
    svg: { type: "disc", petals: 16, leaves: 3 }
  },
  {
    id: "marguerite",
    no: 82,
    name: "玛格丽特",
    en: "Marguerite Daisy",
    latin: "Argyranthemum frutescens",
    family: "菊科 · 木茼蒿属",
    aliases: ["木茼蒿", "少女花", "延命菊"],
    colors: [
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#D9B23E", name: "花心黄", group: "黄" }
    ],
    form: "头状",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "3–5 cm",
    height: "40–80 cm",
    bloom: [3, 4, 5, 6, 7],
    scent: { level: "淡", desc: "清淡的青草气，几乎无香；花心黄色明显。" },
    language: {
      positive: "期待的爱、真实的爱、少女的心",
      negative: "占卜式的犹豫；不敢确认的喜欢",
      cultural: "中文多取「期待的爱、少女花」，西式 marguerite 常取 secret love，日式「マーガレット」常取「恋占い、真実の愛」；三者都围绕「猜」。"
    },
    cultureMeanings: {
      cn: "玛格丽特在中文花艺里常取「期待的爱、少女花」，是春季花束的常客；它和雏菊常被混称。",
      west: "英语 marguerite 常指 Argyranthemum，花语多取 secret love、truth；「他爱我/不爱我」的占卜也常配它。",
      jp: "日式花语常见「恋占い、真実の愛、期待」；「マーガレット」是春季花坛/花束的常见花。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "不要与雏菊、波斯菊混为一谈",
      "花材不可入口；花粉敏感者注意",
      "花瓣易掉，远途携带需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "玛格丽特未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "加那利群岛",
    habitat: "岩坡；温带栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄，压花效果好；花心厚，需勤换纸。",
    culture: "玛格丽特是加那利群岛的木茼蒿，因花心黄、花瓣白而像「小太阳」；它在中文里常被当成雏菊的近亲。",
    poetry: "中国古诗没有对应的玛格丽特意象；它是近代传入的园艺花。",
    myth: "玛格丽特没有强神话源头；「marguerite」在法语中是雏菊的泛称。",
    prompt: "用「猜」写喜欢：每一瓣都是问题，没有一瓣是答案。",
    misuse: "把玛格丽特与雏菊、波斯菊混为一谈；或把「占卜」当成真实答案。",
    trivia: "玛格丽特是菊科木茼蒿属，不是雏菊属；它的花心通常是黄色。",
    pairs: { ids: ["daisy", "gypsophila"], line: "玛格丽特做小太阳，雏菊给白，满天星把边缘放轻。" },
    svg: { type: "disc", petals: 18, leaves: 3 }
  },
  {
    id: "cosmos",
    no: 83,
    name: "波斯菊",
    en: "Cosmos",
    latin: "Cosmos bipinnatus",
    family: "菊科 · 秋英属",
    aliases: ["秋英", "格桑花", "大波斯菊"],
    colors: [
      { hex: "#D98FA0", name: "波斯粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#B0473F", name: "砖红", group: "红" },
      { hex: "#8A6F9E", name: "灰紫", group: "紫" }
    ],
    form: "头状",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "5–8 cm",
    height: "60–150 cm",
    bloom: [6, 7, 8, 9, 10],
    scent: { level: "淡", desc: "几乎没有香气；叶片细裂，有青草气。" },
    language: {
      positive: "少女的真心、自由、秩序",
      negative: "被误叫格桑花；秋天一过就散",
      cultural: "中文多取「少女的真心、自由」，西式 cosmos 常取 order/balance，日式「コスモス」常取「乙女の真心、調和」；三者都围绕「轻」。"
    },
    cultureMeanings: {
      cn: "波斯菊在中文里常被叫作「格桑花」，但「格桑花」是藏语里的泛称，并不专指波斯菊；引用时需注明。",
      west: "英语 cosmos 来自希腊语「秩序/和谐」，花语常取 order、balance、modesty。",
      jp: "日式花语常见「乙女の真心、調和、自由」；「コスモス」是秋季花海的代表。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "不要与格桑花（泛称）直接等同；格桑花并非波斯菊的正式名",
      "花材不可入口；花粉敏感者注意",
      "花瓣易掉，远途携带需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "波斯菊未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "墨西哥",
    habitat: "草地、路旁；温带栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄，压后颜色会变淡；适合做小标本。",
    culture: "波斯菊是墨西哥原产的秋英，因细裂叶与轻盈花形成为「秋日花海」的常客；「格桑花」是藏语泛称，不是它的学名。",
    poetry: "中国古诗没有对应的波斯菊意象；它是近代传入的园艺花。",
    myth: "波斯菊没有强神话源头；「cosmos」的「秩序」来自希腊语，不是花神。",
    prompt: "用「格桑」写误认：所有人都叫它格桑，没有人问它原本叫什么。",
    misuse: "把波斯菊与格桑花直接等同；或把「格桑花」当成一种固定植物。",
    trivia: "波斯菊是菊科秋英属，「格桑花」是藏语泛称；它的叶片细裂，花形轻盈。",
    pairs: { ids: ["daisy", "marguerite"], line: "波斯菊做秋光，雏菊给白，玛格丽特把粉色推近。" },
    svg: { type: "disc", petals: 16, leaves: 3 }
  },
  {
    id: "coreopsis",
    no: 84,
    name: "金鸡菊",
    en: "Coreopsis",
    latin: "Coreopsis spp.",
    family: "菊科 · 金鸡菊属",
    aliases: ["小波斯菊", "金钱菊", "孔雀菊"],
    colors: [
      { hex: "#D9B23E", name: "金鸡黄", group: "黄" },
      { hex: "#C9762F", name: "橙心", group: "橙" }
    ],
    form: "头状",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "3–5 cm",
    height: "30–60 cm",
    bloom: [5, 6, 7, 8],
    scent: { level: "淡", desc: "清淡的青草气，几乎无香；花心黄色/橙色。" },
    language: {
      positive: "欢乐、阳光、竞争心",
      negative: "过于明亮；被当成背景的黄",
      cultural: "中文多取「欢乐、阳光」，西式 coreopsis 常取 cheerfulness，日式「キンケイギク」常取「元気、陽気」；三者都围绕「亮」。"
    },
    cultureMeanings: {
      cn: "金鸡菊在中文花艺里常取「欢乐、阳光」，是夏季花境的明亮色；它和万寿菊/金盏花不是同一属。",
      west: "英语 coreopsis 常取 cheerfulness、always cheerful；也是北美草原的常见花。",
      jp: "日式花语常见「元気、陽気、いつも愉快」；「キンケイギク」是夏季花坛植物。"
    },
    occasions: ["祝贺", "探病"],
    taboos: [
      "不要与金盏花、万寿菊混为一谈",
      "花材不可入口；花粉敏感者注意",
      "花瓣易掉，远途携带需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "金鸡菊未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "北美洲",
    habitat: "草原、路旁；温带栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄，压后黄色会变深；适合小标本。",
    culture: "金鸡菊是北美草原的黄色菊科花，因花心像鸡眼而得名；它在花境里常被用作「亮色背景」。",
    poetry: "中国古诗没有对应的金鸡菊意象；它是近代传入的园艺花。",
    myth: "金鸡菊没有强神话源头；「coreopsis」来自希腊语「臭虫」，指果实形状。",
    prompt: "用「亮」写背景：它一直在照亮别人，自己却不被记住。",
    misuse: "把金鸡菊与金盏花、万寿菊混为一谈；或忽略它只是「背景花」。",
    trivia: "金鸡菊是菊科金鸡菊属，和万寿菊/金盏花不同属；属名 coreopsis 意为「像臭虫的」。",
    pairs: { ids: ["sunflower", "gypsophila"], line: "金鸡菊做亮边，向日葵给主光，满天星把黄分散。" },
    svg: { type: "disc", petals: 14, leaves: 3 }
  },
  {
    id: "echinacea",
    no: 85,
    name: "松果菊",
    en: "Coneflower",
    latin: "Echinacea purpurea",
    family: "菊科 · 松果菊属",
    aliases: ["紫锥花", "紫松果菊", "锥花"],
    colors: [
      { hex: "#8A6F9E", name: "紫锥", group: "紫" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#D9B23E", name: "锥心黄", group: "黄" }
    ],
    form: "头状 / 锥形",
    shapeGroup: "头状",
    inflorescence: "头状花序",
    diameter: "7–10 cm",
    height: "60–120 cm",
    bloom: [6, 7, 8, 9],
    scent: { level: "淡", desc: "清淡的青草气，几乎无香；花心凸起像松果。" },
    language: {
      positive: "健康、坚韧、疗愈",
      negative: "被药用标签绑架；只看功效不看花",
      cultural: "中文多取「健康、坚韧」，西式 coneflower 常取 strength/healing，日式「ムラサキバレンギク」常取「健康、強さ」；三者都围绕「恢复」。"
    },
    cultureMeanings: {
      cn: "松果菊在中文花艺里常取「健康、坚韧」，也是北美草原的常见花；它的药用话题不在本站展开。",
      west: "英语 coneflower 常取 strength、healing；北美原住民有使用历史，但本站不作药用建议。",
      jp: "日式花语常见「健康、強さ、癒し」；「ムラサキバレンギク」是夏季花境植物。"
    },
    occasions: ["探病", "祝贺"],
    taboos: [
      "不要写松果菊的药用/免疫功效；本站不作建议",
      "花材不可入口；猫狗误食风险低但仍不应啃咬",
      "不要与紫锥花/金光菊混为一谈"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "松果菊未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议；紫锥花的药用话题不在本站展开。"
    },
    origin: "北美洲",
    habitat: "草原、林缘；温带栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄，花心厚；压前拆层并勤换纸。",
    culture: "松果菊的花心凸起像松果，英文叫 coneflower；它在北美草原上是传粉昆虫的加油站。",
    poetry: "中国古诗没有对应的松果菊意象；它是近代传入的北美植物。",
    myth: "松果菊没有强神话源头；北美原住民的使用历史属于民族植物学，不是神话。",
    prompt: "用「锥」写恢复：它不是药，只是把身体朝向太阳。",
    misuse: "把松果菊的药用话题当成花语；或把它与紫锥花/金光菊混为一谈。",
    trivia: "松果菊是菊科松果菊属，花心凸起像松果；它的药用话题不在本站展开。",
    pairs: { ids: ["chamomile", "lavender"], line: "松果菊做锥心，洋甘菊给白，薰衣草把恢复拉长。" },
    svg: { type: "echinacea", petals: 14, leaves: 3 }
  },
  {
    id: "marigold",
    no: 86,
    name: "万寿菊",
    en: "Marigold",
    latin: "Tagetes erecta",
    family: "菊科 · 万寿菊属",
    aliases: ["臭菊", "大万寿菊", "非洲万寿菊"],
    colors: [
      { hex: "#D9B23E", name: "万寿黄", group: "黄" },
      { hex: "#C9762F", name: "万寿橙", group: "橙" }
    ],
    form: "头状 / 重瓣",
    shapeGroup: "球状",
    inflorescence: "头状花序",
    diameter: "5–10 cm",
    height: "30–90 cm",
    bloom: [6, 7, 8, 9, 10],
    scent: { level: "浓", desc: "浓烈的辛辣—树脂气，靠近就明显；有人觉得刺鼻。" },
    language: {
      positive: "长寿、热烈、守护",
      negative: "死亡/亡灵节；浓烈气味与「臭菊」的绰号",
      cultural: "中文多取「长寿、热烈」，西式 marigold 旧花语常指 grief/jealousy，墨西哥亡灵节用万寿菊，日式「マリーゴールド」常取「絶望、悲しみ」；同一朵花，三种温度。"
    },
    cultureMeanings: {
      cn: "万寿菊在中文里因「万寿」而得名，常取长寿、热烈；但它也是「臭菊」，气味并不讨所有人喜欢。",
      west: "英语 marigold 在维多利亚花语里常指 grief、despair、jealousy；墨西哥亡灵节用万寿菊引导亡灵。",
      jp: "日式花语常见「絶望、悲しみ、別れ」；「マリーゴールド」在花坛中很常见。"
    },
    occasions: ["祝贺", "悼念"],
    taboos: [
      "不要与金盏花（Calendula）混为一谈",
      "墨西哥亡灵节用的是万寿菊（Tagetes），不是金盏花",
      "对猫狗有毒性；浓香不适合密闭空间"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "万寿菊对猫狗有毒性，误食可致呕吐、腹泻、口腔刺激。",
      children: "花材不可入口；浓香可能引起不适。",
      note: "不提供食用或药用建议。"
    },
    origin: "墨西哥、中美洲",
    habitat: "草原、花坛；全球栽培",
    vaseLife: "5–7 天",
    press: "花瓣多，压前拆层；干燥后橙色会变深。",
    culture: "万寿菊是墨西哥亡灵节的花，也是中文里的「长寿」；同一个 Tagetes，在两种文化里一边是死亡，一边是长寿。",
    poetry: "中国古诗没有对应的万寿菊意象；它是近代传入的美洲花。",
    myth: "墨西哥亡灵节用万寿菊的花瓣/花径引导亡灵；这是民俗，不是植物学。",
    prompt: "用「万寿」写反讽：它叫万寿，却常被放在墓前。",
    misuse: "把万寿菊与金盏花混为一谈；或把「长寿」当成所有文化里的唯一花语。",
    trivia: "万寿菊是菊科万寿菊属，金盏花是菊科金盏花属；墨西哥亡灵节用的是万寿菊。",
    pairs: { ids: ["sunflower", "chrysanthemum"], line: "万寿菊做浓橙，向日葵给主光，菊花把秋色收住。" },
    svg: { type: "pom", petals: 0, leaves: 3 }
  },
  {
    id: "zinnia",
    no: 87,
    name: "百日草",
    en: "Zinnia",
    latin: "Zinnia elegans",
    family: "菊科 · 百日菊属",
    aliases: ["百日菊", "步步高", "火球花"],
    colors: [
      { hex: "#B0473F", name: "砖红", group: "红" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#C9762F", name: "橙", group: "橙" },
      { hex: "#D9B23E", name: "黄", group: "黄" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#8A6F9E", name: "灰紫", group: "紫" }
    ],
    form: "头状 / 重瓣",
    shapeGroup: "球状",
    inflorescence: "头状花序",
    diameter: "5–10 cm",
    height: "30–90 cm",
    bloom: [6, 7, 8, 9, 10],
    scent: { level: "淡", desc: "几乎没有香气；叶片有青草气。" },
    language: {
      positive: "长久的爱、友谊、步步高",
      negative: "花期满/被误当百日菊；颜色太多反而失焦",
      cultural: "中文多取「长久的爱、步步高」，西式 zinnia 常取 lasting affection，日式「ジニア」常取「幸福、長寿」；三者都围绕「久」。"
    },
    cultureMeanings: {
      cn: "百日草在中文里因花期长而得名，常取「长久的爱、步步高」；「百日草」和「百日菊」是同一类。",
      west: "英语 zinnia 常取 lasting affection、remembrance；花坛与切花都很常见。",
      jp: "日式花语常见「幸福、長寿、遠くの友を思う」；「ジニア」是夏季花坛的常客。"
    },
    occasions: ["祝贺", "探病"],
    taboos: [
      "不要与万寿菊、百日菊（同一类）混为一谈",
      "花材不可入口；花粉敏感者注意",
      "花瓣易掉，远途携带需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "百日草未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "墨西哥",
    habitat: "草原、花坛；全球栽培",
    vaseLife: "5–7 天",
    press: "花瓣多，压前拆层；干燥后颜色会变深。",
    culture: "百日草因花期长而叫「百日」，在中文里也常被写成「步步高」；它是花坛里最容易被低估的长期花。",
    poetry: "中国古诗没有对应的百日草意象；它是近代传入的美洲花。",
    myth: "百日草没有强神话源头；属名 Zinnia 纪念德国植物学家 Johann Zinn。",
    prompt: "用「百日」写长久：它不是最香的花，但一直在开。",
    misuse: "把百日草与万寿菊混为一谈；或把「百日」误当成一百天整。",
    trivia: "百日草是菊科百日菊属，原产墨西哥；它的花期长，但「百日」不是精确的一百天。",
    pairs: { ids: ["marigold", "gerbera"], line: "百日草做层叠，万寿菊给浓橙，非洲菊把颜色提亮。" },
    svg: { type: "pom", petals: 0, leaves: 3 }
  },
  {
    id: "gomphrena",
    no: 88,
    name: "千日红",
    en: "Globe Amaranth",
    latin: "Gomphrena globosa",
    family: "苋科 · 千日红属",
    aliases: ["火球花", "百日红", "圆仔花"],
    colors: [
      { hex: "#B0473F", name: "千日红", group: "红" },
      { hex: "#D98FA0", name: "藕粉", group: "粉" },
      { hex: "#8A6F9E", name: "紫", group: "紫" },
      { hex: "#F8F1E5", name: "纸白", group: "白" }
    ],
    form: "球状 / 头状",
    shapeGroup: "球状",
    inflorescence: "头状花序",
    diameter: "2–3 cm",
    height: "30–60 cm",
    bloom: [7, 8, 9, 10],
    scent: { level: "无", desc: "几乎没有香气；干燥后颜色仍能保持。" },
    language: {
      positive: "不朽的爱、永恒、不变的思念",
      negative: "干枯后的执念；颜色不褪，关系却停了",
      cultural: "中文多取「不朽的爱、永恒」，西式 globe amaranth 常取 unfading love，日式「センニチコウ」常取「不朽、変わらぬ愛」；三者都围绕「不褪色」。"
    },
    cultureMeanings: {
      cn: "千日红在中文花艺里常取「不朽的爱、永恒」，因为干燥后颜色仍鲜；它和鸡冠花同科不同属。",
      west: "英语 globe amaranth 常取 unfading love、everlasting；干花花束里很常见。",
      jp: "日式花语常见「不朽、変わらぬ愛、永遠」；「センティチョウ」是干花常用花材。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "不要与鸡冠花混为一谈；两者同科不同属",
      "花材不可入口；干花易积灰，过敏者注意",
      "干燥花不要放在儿童/宠物可啃咬处"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "千日红未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；干花易碎，注意幼儿误食。",
      note: "不提供食用或药用建议。"
    },
    origin: "中美洲",
    habitat: "热带草原；全球栽培",
    vaseLife: "7–14 天；干燥后更久",
    press: "最适合干花的花材之一；花头厚，需勤换纸。",
    culture: "千日红的花头干燥后仍能保持颜色，所以成为「不褪色」的花语；它的红不是花瓣，而是苞片。",
    poetry: "中国古诗没有对应的千日红意象；它是近代传入的美洲花。",
    myth: "千日红没有强神话源头；「千日」来自干燥后颜色持久。",
    prompt: "用「不褪色」写执念：颜色还在，关系已经干了。",
    misuse: "把千日红与鸡冠花混为一谈；或把干花当成永久保存的「不会坏」。",
    trivia: "千日红是苋科千日红属，花头的红色来自苞片；干燥后颜色仍能保持。",
    pairs: { ids: ["forget-me-not", "rose"], line: "千日红做不褪色，勿忘我写记忆，玫瑰给一点重量。" },
    svg: { type: "pom", petals: 0, leaves: 3 }
  },
  {
    id: "cockscomb",
    no: 89,
    name: "鸡冠花",
    en: "Cockscomb",
    latin: "Celosia argentea var. cristata",
    family: "苋科 · 青葙属",
    aliases: ["鸡冠", "鸡公花", "鸡冠头"],
    colors: [
      { hex: "#B0473F", name: "鸡冠红", group: "红" },
      { hex: "#C9762F", name: "橙红", group: "橙" },
      { hex: "#D9B23E", name: "黄", group: "黄" },
      { hex: "#8A6F9E", name: "紫红", group: "紫" }
    ],
    form: "冠状 / 肉质",
    shapeGroup: "球状",
    inflorescence: "鸡冠状花序",
    diameter: "5–15 cm",
    height: "30–90 cm",
    bloom: [7, 8, 9, 10],
    scent: { level: "淡", desc: "几乎没有香气；花头肉质，触感像绒布。" },
    language: {
      positive: "真挚的爱、永恒、骄傲",
      negative: "自负/被看的红；外形太像「鸡冠」而难被浪漫化",
      cultural: "中文多取「真挚的爱、永恒」，西式 cockscomb 常取 affectation、singularity，日式「ケイトウ」常取「おしゃれ、気取り」；三者都围绕「显眼」。"
    },
    cultureMeanings: {
      cn: "鸡冠花在中文里常取「真挚的爱、永恒」，花头肉质、像鸡冠；它和青葙同属。",
      west: "英语 cockscomb 常取 affectation、singularity、humor；维多利亚花语里不是温柔的花。",
      jp: "日式花语常见「おしゃれ、気取り、情熱」；「ケイトウ」是秋季花坛植物。"
    },
    occasions: ["暗恋", "祝贺"],
    taboos: [
      "不要与青葙（Celosia argentea）混为一谈",
      "花材不可入口；花头重，瓶插需支撑",
      "不要用「鸡冠」外形开不合适的玩笑"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "鸡冠花未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花头重，注意花瓶倾倒。",
      note: "不提供食用或药用建议。"
    },
    origin: "热带亚洲、非洲",
    habitat: "热带草原；全球栽培",
    vaseLife: "5–7 天；干燥后更久",
    press: "花头厚，压前拆小；干燥后颜色会变深。",
    culture: "鸡冠花的花序像鸡冠，是苋科青葙的栽培变种；它在中国庭院里常见，也常被写成「鸡公花」。",
    poetry: "中国古诗中鸡冠花题材较少；它更多是庭院与民间花。",
    myth: "鸡冠花没有强神话源头；「鸡冠」来自花序形状。",
    prompt: "用「鸡冠」写骄傲：它把头抬得很高，所以只能被仰视。",
    misuse: "把鸡冠花与青葙混为一谈；或只写外形，不写它的肉质触感。",
    trivia: "鸡冠花是苋科青葙的栽培变种，花头由许多小花组成；它的红色来自花序，不是花瓣。",
    pairs: { ids: ["marigold", "zinnia"], line: "鸡冠花做绒布，万寿菊给浓橙，百日草把颜色托住。" },
    svg: { type: "cockscomb", petals: 0, leaves: 3 }
  },
  {
    id: "impatiens",
    no: 90,
    name: "凤仙花",
    en: "Balsam",
    latin: "Impatiens balsamina",
    family: "凤仙花科 · 凤仙花属",
    aliases: ["指甲花", "透骨草", "急性子"],
    colors: [
      { hex: "#D98FA0", name: "凤仙粉", group: "粉" },
      { hex: "#B0473F", name: "砖红", group: "红" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#8A6F9E", name: "紫", group: "紫" }
    ],
    form: "蝶形 / 杯状",
    shapeGroup: "蝶形",
    inflorescence: "单生或簇生",
    diameter: "3–5 cm",
    height: "40–80 cm",
    bloom: [6, 7, 8, 9],
    scent: { level: "淡", desc: "几乎没有香气；花瓣揉碎有青草气。" },
    language: {
      positive: "别碰我、急切的爱、怀旧",
      negative: "急躁/一触即落；被当成童年玩具",
      cultural: "中文多取「急切的爱、怀旧」，西式 balsam 常取 impatient affection，日式「ホウセンカ」常取「心を開く、短気」；三者都围绕「急」。"
    },
    cultureMeanings: {
      cn: "凤仙花在中文里常与「指甲花」相连，是童年染指甲的记忆；它也是「急性子」，果荚一碰就弹。",
      west: "英语 balsam 常取 impatient affection、touch-me-not；果荚成熟时一碰就裂。",
      jp: "日式花语常见「心を開く、短気、触らないで」；「ホウセンカ」是夏季庭院花。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "不要与指甲花（Lawsonia inermis）混为一谈；两者都叫「指甲花」",
      "花材/种子不可入口；汁液可能刺激皮肤",
      "不要用花汁给儿童染指甲/皮肤"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "凤仙花汁液/种子可能刺激猫狗肠胃与皮肤，误食需注意。",
      children: "花材不可入口；不要用花汁直接涂儿童皮肤。",
      note: "不提供食用、药用或染发/染甲建议。"
    },
    origin: "南亚、东南亚",
    habitat: "林缘、庭院；温带栽培",
    vaseLife: "3–5 天",
    press: "花瓣薄，压后颜色保持较好；适合小标本。",
    culture: "凤仙花在中国是「指甲花」的童年记忆，在英文里是 touch-me-not；同一个果荚，两种动作。",
    poetry: "中国古诗中凤仙花题材较少；它更多出现在庭院、染甲与民间生活。",
    myth: "凤仙花没有强神话源头；「指甲花」来自染色用途。",
    prompt: "用「一碰就炸」写急性子：它把种子藏得很好，却不许你碰。",
    misuse: "把凤仙花与指甲花（Lawsonia inermis）混为一谈；或把花汁直接用在儿童皮肤上。",
    trivia: "凤仙花的果荚成熟时一碰就弹开，所以英文叫 touch-me-not；它和散沫花（指甲花）不是同一种。",
    pairs: { ids: ["pansy", "forget-me-not"], line: "凤仙花做鬼脸，三色堇给表情，勿忘我把童年写小。" },
    svg: { type: "impatiens", petals: 5, leaves: 3 }
  },
  {
    id: "mirabilis",
    no: 91,
    name: "紫茉莉",
    en: "Four O'Clock Flower",
    latin: "Mirabilis jalapa",
    family: "紫茉莉科 · 紫茉莉属",
    aliases: ["晚饭花", "地雷花", "胭脂花"],
    colors: [
      { hex: "#D98FA0", name: "胭脂粉", group: "粉" },
      { hex: "#D9B23E", name: "黄", group: "黄" },
      { hex: "#F8F1E5", name: "纸白", group: "白" },
      { hex: "#B0473F", name: "红", group: "红" }
    ],
    form: "喇叭状",
    shapeGroup: "喇叭",
    inflorescence: "单生或簇生",
    diameter: "3–5 cm",
    height: "50–100 cm",
    bloom: [6, 7, 8, 9, 10],
    scent: { level: "浓", desc: "傍晚开放的甜香，夜里更明显；白天闭合。" },
    language: {
      positive: "胆怯、等待、夜晚的约定",
      negative: "只在傍晚出现；不敢在白天说的话",
      cultural: "中文多取「胆怯、等待」，西式 four o'clock 常取 timidity，日式「オシロイバナ」常取「臆病、内気」；三者都围绕「傍晚」。"
    },
    cultureMeanings: {
      cn: "紫茉莉在中文里叫「晚饭花/地雷花」，因为傍晚开花、种子像小地雷；它和茉莉不是同一科。",
      west: "英语 four o'clock flower 常取 timidity、evening love；花在下午四点左右开放。",
      jp: "日式花语常见「臆病、内気、夜の約束」；「オシロイバナ」是夏夜庭院花。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "种子/根有毒，猫狗/儿童误食需注意",
      "不要与茉莉混为一谈（不同科）",
      "浓香不适合密闭卧室；夜间开花"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "紫茉莉种子/根含毒性成分，猫狗误食可致呕吐、腹泻。",
      children: "种子像小地雷，易被幼儿误食；需远离。",
      note: "不提供食用或药用建议。"
    },
    origin: "美洲热带",
    habitat: "路旁、庭院；温暖地区栽培",
    vaseLife: "2–3 天",
    press: "花瓣薄，压后颜色会变；花在傍晚开放，建议傍晚采。",
    culture: "紫茉莉是「晚饭花」：傍晚开、白天合，种子像小地雷；它的时间感比花形更有名。",
    poetry: "中国古诗没有对应的紫茉莉意象；它是近代传入的美洲花。",
    myth: "紫茉莉没有强神话源头；「晚饭花」来自开花时间。",
    prompt: "用「晚饭」写等待：它每天在你回家的时候开。",
    misuse: "把紫茉莉与茉莉混为一谈；或忽略种子/根的毒性。",
    trivia: "紫茉莉是紫茉莉科，不是茉莉；它的种子像小地雷，因此也叫「地雷花」。",
    pairs: { ids: ["jasmine", "night-jasmine"], line: "紫茉莉做晚饭花，茉莉给白，夜来香把夜色推浓。" },
    svg: { type: "trumpet", petals: 5, leaves: 3 }
  },
  {
    id: "morning-glory",
    no: 92,
    name: "牵牛花",
    en: "Morning Glory",
    latin: "Ipomoea nil",
    family: "旋花科 · 番薯属",
    aliases: ["喇叭花", "朝颜", "勤娘子"],
    colors: [
      { hex: "#6D86A8", name: "朝颜蓝", group: "蓝" },
      { hex: "#8A6F9E", name: "紫", group: "紫" },
      { hex: "#D98FA0", name: "粉", group: "粉" },
      { hex: "#F8F1E5", name: "白", group: "白" },
      { hex: "#B0473F", name: "红", group: "红" }
    ],
    form: "喇叭状",
    shapeGroup: "喇叭",
    inflorescence: "单生或簇生",
    diameter: "5–10 cm",
    height: "藤本 2–4 m",
    bloom: [6, 7, 8, 9, 10],
    scent: { level: "淡", desc: "几乎没有香气；清晨开放，午后闭合。" },
    language: {
      positive: "爱情、平静、明日的梦",
      negative: "短暂/只在清晨；被阳光催走的承诺",
      cultural: "中文多取「爱情、平静」，西式 morning glory 常取 affection，日式「朝顔」常取「はかない恋、明日の夢」；三者都围绕「早晨」。"
    },
    cultureMeanings: {
      cn: "牵牛花在中文里是「喇叭花」，也常与牛郎织女的「牵牛星」联想；但花名与星名不是同一回事。",
      west: "英语 morning glory 常取 affection、love in vain；花在清晨开放、午后闭合。",
      jp: "日式「朝顔」常取「はかない恋、明日の夢、愛情」；它是日本夏季风铃/朝颜文化的代表。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "种子有毒，猫狗/儿童误食需注意",
      "不要与月光花混为一谈（同科不同种）",
      "藤蔓会缠绕其他植物，需引导"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "牵牛花种子含毒性成分，猫狗误食可致呕吐、腹泻、共济失调。",
      children: "种子不可入口；需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "热带美洲",
    habitat: "藤本、篱垣；全球栽培",
    vaseLife: "1–2 天",
    press: "花瓣薄，压后颜色会变淡；花在清晨采最好。",
    culture: "牵牛花是「朝颜」：清晨开、午后合；它在日本是夏季风铃与朝颜文化的代表。",
    poetry: "中国古诗中牵牛花题材较多，但「牵牛」也可能指星名；引用时需看上下文。",
    myth: "牵牛花与牛郎织女的「牵牛星」是名字联想，不是植物学；不要把星名当成花神。",
    prompt: "用「朝颜」写短暂：它只在你起床前开一会儿。",
    misuse: "把牵牛花与月光花混为一谈；或把「牵牛星」的传说直接当成花名来源。",
    trivia: "牵牛花是旋花科番薯属，和月光花同科不同种；它的花在清晨开放、午后闭合。",
    pairs: { ids: ["moonflower", "iris"], line: "牵牛花做清晨，月光花做夜，鸢尾把两种时间接起来。" },
    svg: { type: "trumpet", petals: 5, leaves: 3 }
  },
  {
    id: "cypress-vine",
    no: 93,
    name: "茑萝",
    en: "Cypress Vine",
    latin: "Ipomoea quamoclit",
    family: "旋花科 · 番薯属",
    aliases: ["五角星花", "茑萝松", "游龙草"],
    colors: [
      { hex: "#B0473F", name: "茑萝红", group: "红" },
      { hex: "#F8F1E5", name: "白", group: "白" }
    ],
    form: "五角星形",
    shapeGroup: "轮状",
    inflorescence: "单生或簇生",
    diameter: "2–3 cm",
    height: "藤本 2–4 m",
    bloom: [7, 8, 9, 10],
    scent: { level: "淡", desc: "几乎没有香气；叶片细裂像羽毛。" },
    language: {
      positive: "忙碌的爱、星形的思念、自由",
      negative: "纠缠/细碎的依附；星星落进篱笆",
      cultural: "中文多取「忙碌的爱、五角星花」，西式 cypress vine 常取 affection，日式「茑萝」常取「忙しい愛、星」；三者都围绕「细」。"
    },
    cultureMeanings: {
      cn: "茑萝在中文里叫「五角星花」，因花形像五角星；《诗经》的「茑与女萝」并不是这种植物，引用时需小心。",
      west: "英语 cypress vine 常取 affection、busy love；叶片细裂像柏树。",
      jp: "日式花语常见「忙しい愛、星、繊細」；「茑萝」是夏季藤本花。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "种子有毒，猫狗/儿童误食需注意",
      "不要与牵牛花混为一谈（同科不同种）",
      "藤蔓细，需给攀爬支撑"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "茑萝种子含毒性成分，猫狗误食可致呕吐、腹泻。",
      children: "种子不可入口；需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "墨西哥",
    habitat: "藤本、篱垣；温暖地区栽培",
    vaseLife: "2–3 天",
    press: "花瓣薄，压后红色会变深；适合小标本。",
    culture: "茑萝的花是五角星，叶是羽毛状细裂；它在篱笆上开成一片小红星，和牵牛花同科不同种。",
    poetry: "《诗经》有「茑与女萝」，但那是两种附生/蔓生植物，不是今天的茑萝；这是常见的植物误配。",
    myth: "茑萝没有强神话源头；「五角星花」来自花形。",
    prompt: "用「五角星」写暗恋：它把星星开在篱笆上，没有人抬头。",
    misuse: "把茑萝与牵牛花混为一谈；或把《诗经》的「茑与女萝」直接当成这种花。",
    trivia: "茑萝是旋花科番薯属，花是五角星形；它和牵牛花同科不同种。",
    pairs: { ids: ["morning-glory", "blue-star"], line: "茑萝做红星，牵牛花给蓝，蓝星花把星星接上。" },
    svg: { type: "bluestar", petals: 5, leaves: 2 }
  },
  {
    id: "hollyhock",
    no: 94,
    name: "蜀葵",
    en: "Hollyhock",
    latin: "Alcea rosea",
    family: "锦葵科 · 蜀葵属",
    aliases: ["一丈红", "大蜀季", "端午花"],
    colors: [
      { hex: "#D98FA0", name: "蜀葵粉", group: "粉" },
      { hex: "#B0473F", name: "红", group: "红" },
      { hex: "#F8F1E5", name: "白", group: "白" },
      { hex: "#8A6F9E", name: "紫", group: "紫" },
      { hex: "#D9B23E", name: "黄", group: "黄" }
    ],
    form: "杯状 / 穗状",
    shapeGroup: "杯状",
    inflorescence: "总状花序",
    diameter: "6–12 cm",
    height: "150–250 cm",
    bloom: [5, 6, 7, 8],
    scent: { level: "淡", desc: "清淡的青草气，几乎无香；花大而薄。" },
    language: {
      positive: "梦想、丰盛、热恋",
      negative: "高处的孤独；被观赏的「一丈红」",
      cultural: "中文多取「梦想、丰盛」，西式 hollyhock 常取 ambition/fertility，日式「タチアオイ」常取「豊かな実り、野心」；三者都围绕「高」。"
    },
    cultureMeanings: {
      cn: "蜀葵在中文里叫「一丈红」，因花茎高、花大；它常种在院墙边，是端午前后的花。",
      west: "英语 hollyhock 常取 ambition、fruitfulness；维多利亚花园里很常见。",
      jp: "日式花语常见「豊かな実り、野心、熱望」；「タチアオイ」是夏季高杆花。"
    },
    occasions: ["祝贺", "婚礼"],
    taboos: [
      "不要与木槿、扶桑混为一谈",
      "花材不可入口；高杆易倒，需支撑",
      "花瓣薄，远途携带需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "蜀葵未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；高杆易倒，注意砸伤。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国、西亚",
    habitat: "庭院、路旁；温带栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄，压后颜色保持较好；适合大尺寸标本。",
    culture: "蜀葵是「一丈红」，花茎可长到两米；它在中国院墙边常见，在欧洲是乡村花园的 vertical accent。",
    poetry: "中国古诗中蜀葵题材较少；「一丈红」更多是民间名。",
    myth: "蜀葵没有强神话源头；「一丈红」来自株高。",
    prompt: "用「一丈红」写高：它把花举过头顶，所以只能被仰望。",
    misuse: "把蜀葵与木槿、扶桑混为一谈；或忽略高杆的支撑需求。",
    trivia: "蜀葵是锦葵科蜀葵属，花茎可长到两米；它和木槿/扶桑同科不同属。",
    pairs: { ids: ["rose", "peony-tree"], line: "蜀葵做高杆，玫瑰给重心，牡丹把富贵压住。" },
    svg: { type: "hollyhock", petals: 0, leaves: 3 }
  },
  {
    id: "hibiscus-rosa-sinensis",
    no: 95,
    name: "扶桑",
    en: "Chinese Hibiscus",
    latin: "Hibiscus rosa-sinensis",
    family: "锦葵科 · 木槿属",
    aliases: ["朱槿", "大红花", "佛桑"],
    colors: [
      { hex: "#B0473F", name: "朱红", group: "红" },
      { hex: "#D98FA0", name: "粉", group: "粉" },
      { hex: "#D9B23E", name: "黄", group: "黄" },
      { hex: "#F8F1E5", name: "白", group: "白" }
    ],
    form: "五瓣 / 喇叭",
    shapeGroup: "喇叭",
    inflorescence: "单生",
    diameter: "8–12 cm",
    height: "200–400 cm",
    bloom: [5, 6, 7, 8, 9, 10],
    scent: { level: "淡", desc: "几乎没有香气；花心有长雄蕊柱。" },
    language: {
      positive: "新鲜的爱情、热情、美丽",
      negative: "短暂/一日花；被观赏的热带",
      cultural: "中文多取「新鲜的爱情、热情」，西式 hibiscus 常取 delicate beauty，日式「ハイビスカス」常取「新しい美、常に新しい美」；三者都围绕「新」。"
    },
    cultureMeanings: {
      cn: "扶桑在中文里是朱槿/大红花，常取「新鲜的爱情、热情」；「扶桑」在神话中又是日出之地的树名，需分清。",
      west: "英语 hibiscus 常取 delicate beauty、consumed by love；热带花。",
      jp: "日式花语常见「新しい美、常に新しい美、情熱」；「ハイビスカス」是夏威夷/热带意象。"
    },
    occasions: ["婚礼", "祝贺"],
    taboos: [
      "不要与木槿、木芙蓉混为一谈",
      "花材不可入口；单朵花只开一日",
      "「扶桑」神话中的树名不是这朵花"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "扶桑未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花心雄蕊柱长，注意幼儿误食。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国南部、热带亚洲",
    habitat: "热带、亚热带；庭院栽培",
    vaseLife: "1–2 天",
    press: "花瓣薄，需当天压；隔夜容易合拢。",
    culture: "扶桑是朱槿，单朵花只开一日；「扶桑」在神话中是日出之地的树，和这朵热带花不是同一回事。",
    poetry: "中国古诗中的「扶桑」多指神话中的日出之树，不是朱槿；引用时需区分。",
    myth: "扶桑树是神话中的日出之地，不是植物学上的朱槿；这是最容易被混用的名字之一。",
    prompt: "用「一日」写热情：它只开一天，但每一天都重新开。",
    misuse: "把扶桑与木槿/木芙蓉混为一谈；或把神话「扶桑树」直接当成这朵花。",
    trivia: "扶桑是锦葵科木槿属，单朵花只开一日；「扶桑」神话中的树名不是它。",
    pairs: { ids: ["hibiscus", "lotus"], line: "扶桑做热带红，木槿给一日，荷花把水气收住。" },
    svg: { type: "hibiscus", petals: 5, leaves: 3 }
  },
  {
    id: "cotton-rose",
    no: 96,
    name: "木芙蓉",
    en: "Cotton Rose",
    latin: "Hibiscus mutabilis",
    family: "锦葵科 · 木槿属",
    aliases: ["芙蓉花", "拒霜花", "三醉芙蓉"],
    colors: [
      { hex: "#D98FA0", name: "芙蓉粉", group: "粉" },
      { hex: "#F8F1E5", name: "白", group: "白" },
      { hex: "#B0473F", name: "红", group: "红" }
    ],
    form: "五瓣 / 重瓣",
    shapeGroup: "杯状",
    inflorescence: "单生或簇生",
    diameter: "8–12 cm",
    height: "200–400 cm",
    bloom: [8, 9, 10, 11],
    scent: { level: "淡", desc: "几乎没有香气；花色一日内会由白转粉/红。" },
    language: {
      positive: "纤细的美、迟开的爱、坚韧",
      negative: "花色一日三变/难以捉摸；被误当荷花",
      cultural: "中文多取「纤细的美、迟开的爱」，西式 cotton rose 常取 delicate beauty，日式「フヨウ」常取「繊細な美、しとやか」；三者都围绕「柔」。"
    },
    cultureMeanings: {
      cn: "木芙蓉在中文里常与「拒霜」相连：深秋开花，花色一日内由白转粉/红；它和荷花（水芙蓉）不是同一种。",
      west: "英语 cotton rose 常取 delicate beauty、autumn; 它不是荷花，也不是棉花。",
      jp: "日式花语常见「繊細な美、しとやか、待ち人」；「フヨウ」是秋季庭院花。"
    },
    occasions: ["暗恋", "送别"],
    taboos: [
      "不要与荷花、扶桑、木棉混为一谈",
      "花材不可入口；花色变化不是「变色龙」魔法",
      "单朵花期短，远途携带需保护"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "木芙蓉未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；花粉敏感者注意。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国",
    habitat: "山地、庭院；温带/亚热带栽培",
    vaseLife: "1–2 天",
    press: "花瓣薄，需当天压；颜色会随开放时间变化。",
    culture: "木芙蓉是「拒霜花」：深秋开花，花色一日内由白转粉/红；它和荷花（水芙蓉）只是名字相近。",
    poetry: "苏轼《和陈述古拒霜花》：『千林扫作一番黄，只有芙蓉独自芳。』这里的「芙蓉」是木芙蓉。",
    myth: "木芙蓉有「芙蓉仙子」的地方传说，版本不一；不要把它与荷花仙子的故事混在一起。",
    prompt: "用「一日三变」写迟来的爱：它早上是白的，晚上才红。",
    misuse: "把木芙蓉与荷花、扶桑、木棉混为一谈；或把「芙蓉」一律当成荷花。",
    trivia: "木芙蓉是锦葵科木槿属，花色会随开放时间变化；荷花是莲科，两者不是同一种。",
    pairs: { ids: ["hibiscus", "camellia"], line: "木芙蓉做一日三变，扶桑给热带红，山茶把秋色压深。" },
    svg: { type: "hibiscus", petals: 5, leaves: 3 }
  },
  {
    id: "sasanqua",
    no: 97,
    name: "茶梅",
    en: "Sasanqua Camellia",
    latin: "Camellia sasanqua",
    family: "山茶科 · 山茶属",
    aliases: ["茶梅花", "早茶梅", "山茶梅"],
    colors: [
      { hex: "#B0473F", name: "茶梅红", group: "红" },
      { hex: "#D9A6B4", name: "藕粉", group: "粉" },
      { hex: "#F8F1E5", name: "纸白", group: "白" }
    ],
    form: "重瓣 / 杯状",
    shapeGroup: "杯状",
    inflorescence: "单生或对生",
    diameter: "5–8 cm",
    height: "100–300 cm",
    bloom: [11, 12, 1, 2, 3],
    scent: { level: "淡", desc: "清淡的绿叶气，部分品种有隐约甜香；比山茶更早开。" },
    language: {
      positive: "谦让、理想的爱、冬日的坚持",
      negative: "与山茶混淆；落花时的决绝",
      cultural: "中文多取「谦让、理想的爱」，西式 sasanqua 常取 admiration，日式「サザンカ」常取「困難に打ち勝つ、ひたむきさ」；三者都围绕「冬」。"
    },
    cultureMeanings: {
      cn: "茶梅在中文里常与山茶并称，但它花期更早、花更小；它和山茶同属不同种，落花方式也不同。",
      west: "英语 sasanqua 常取 admiration、winter beauty；它是冬季庭院花。",
      jp: "日式花语常见「困難に打ち勝つ、ひたむきさ、理想の愛」；「サザンカ」是冬春庭院花。"
    },
    occasions: ["婚礼", "暗恋"],
    taboos: [
      "不要与山茶（Camellia japonica）混为一谈",
      "花材不可入口；种子/叶不应让宠物啃咬",
      "落花在部分日本语境中被视为不吉，送前确认"
    ],
    toxicity: {
      level: "低",
      petsRisk: false,
      childRisk: false,
      pets: "茶梅未见明确猫狗毒性记录；仍不应让宠物啃咬。",
      children: "花材不可入口；果实/种子需收好。",
      note: "不提供食用或药用建议。"
    },
    origin: "日本",
    habitat: "山地常绿林；庭院栽培",
    vaseLife: "5–7 天",
    press: "花瓣厚，压前单层分开；干燥后呈深红/褐红。",
    culture: "茶梅比山茶早开，花更小，落花也常整朵掉；在日本，它和山茶一样被写进冬春庭院。",
    poetry: "中国古诗中的「山茶」常指山茶，茶梅题材较少；引用时需区分。",
    myth: "茶梅没有强神话源头；「サザンカ」的冬春意象来自物候。",
    prompt: "用「早开」写抢先：山茶还在酝酿，它已经把冬天打开。",
    misuse: "把茶梅与山茶混为一谈；或把「落花不吉」当成所有文化都成立。",
    trivia: "茶梅是山茶属，花期比山茶早、花更小；它和山茶同属不同种。",
    pairs: { ids: ["camellia", "narcissus"], line: "茶梅做早红，山茶压深，水仙把冬天提亮。" },
    svg: { type: "rosette", petals: 5, leaves: 3 }
  },
  {
    id: "daphne",
    no: 98,
    name: "瑞香",
    en: "Winter Daphne",
    latin: "Daphne odora",
    family: "瑞香科 · 瑞香属",
    aliases: ["睡香", "蓬莱花", "风流树"],
    colors: [
      { hex: "#D98FA0", name: "瑞香粉", group: "粉" },
      { hex: "#F8F1E5", name: "白", group: "白" },
      { hex: "#8A6F9E", name: "紫", group: "紫" }
    ],
    form: "小四瓣 / 簇生",
    shapeGroup: "枝状",
    inflorescence: "头状/簇生",
    diameter: "1–1.5 cm",
    height: "100–200 cm",
    bloom: [2, 3, 4],
    scent: { level: "浓", desc: "清冽的甜香，冬天隔着院子也能闻到；花小，香极强。" },
    language: {
      positive: "吉祥、瑞气、春天的信",
      negative: "浓香/全株有毒；被「瑞」字美化的危险",
      cultural: "中文多取「吉祥、瑞气」，西式 daphne 常取 glory/sweetness，日式「沈丁花」常取「栄光、不死」；三者都围绕「香」。"
    },
    cultureMeanings: {
      cn: "瑞香在中文里因「瑞」字而吉祥，冬春开花、香极浓；它是瑞香科，全株有毒。",
      west: "英语 daphne 常取 glory、sweetness；它也是希腊神话中 Daphne 的名字来源。",
      jp: "日式花语常见「栄光、不死、甘い香り」；「沈丁花」是早春香花。"
    },
    occasions: ["祝贺", "婚礼"],
    taboos: [
      "全株有毒（瑞香毒素），猫狗/儿童误食可致口腔灼痛、呕吐",
      "浓香不适合密闭空间；花香过敏者注意",
      "不要与结香混为一谈；两者同科不同属"
    ],
    toxicity: {
      level: "高",
      petsRisk: true,
      childRisk: true,
      pets: "瑞香含瑞香毒素，猫狗误食可致口腔灼痛、流涎、呕吐、腹泻，需就医。",
      children: "全株有毒，误食可致严重口腔/肠胃刺激，必须远离幼儿。",
      note: "不提供食用或药用建议；不要用枝条/花泡水。"
    },
    origin: "中国、日本",
    habitat: "山地林下；庭院栽培",
    vaseLife: "3–5 天",
    press: "花小，压后香气会散；适合小尺寸标本。",
    culture: "瑞香是早春香花，花小香浓；「瑞」字让它吉祥，但全株有毒，不能因为香就靠近。",
    poetry: "中国古诗中瑞香题材较少；它更多是庭院香花。",
    myth: "瑞香没有强神话源头；希腊神话中的 Daphne 是月桂/达芙妮，不是瑞香属。",
    prompt: "用「瑞」写吉祥：它把香气当祝福，但根茎是毒的。",
    misuse: "把瑞香与结香混为一谈；或因为「瑞」字就忽略毒性。",
    trivia: "瑞香是瑞香科瑞香属，全株有毒；希腊神话的 Daphne 与瑞香属共享名字，但不是同一种植物。",
    pairs: { ids: ["camellia", "wintersweet"], line: "瑞香做早春香，山茶压红，腊梅把冬天收住。" },
    svg: { type: "cluster", petals: 4, leaves: 3 }
  },
  {
    id: "edgeworthia",
    no: 99,
    name: "结香",
    en: "Paperbush",
    latin: "Edgeworthia chrysantha",
    family: "瑞香科 · 结香属",
    aliases: ["打结花", "梦花", "黄瑞香"],
    colors: [
      { hex: "#D9B23E", name: "结香黄", group: "黄" },
      { hex: "#F7EFE1", name: "素心白", group: "白" },
      { hex: "#6E7A58", name: "叶绿", group: "绿" }
    ],
    form: "小筒状 / 簇生",
    shapeGroup: "枝状",
    inflorescence: "头状/簇生",
    diameter: "1–2 cm",
    height: "100–200 cm",
    bloom: [3, 4],
    scent: { level: "浓", desc: "清甜的蜜香，早春先花后叶；枝条柔韧，可打结。" },
    language: {
      positive: "结缘、梦想、温柔",
      negative: "被打结的枝/纠缠；把愿望绑在树上",
      cultural: "中文多取「结缘、梦想」，西式 paperbush 没有固定花语，日式「ミツマタ」常取「強靭、柔軟」；三者都围绕「结」。"
    },
    cultureMeanings: {
      cn: "结香在中文里叫「打结花/梦花」，枝条柔韧，常被用来打结许愿；它和瑞香同科不同属。",
      west: "英语 paperbush 常取 resilience、flexibility；树皮是造纸原料。",
      jp: "日式花语常见「強靭、柔軟、結びつき」；「ミツマタ」是早春先花后叶的灌木。"
    },
    occasions: ["婚礼", "暗恋"],
    taboos: [
      "全株有毒（瑞香科），猫狗/儿童误食需注意",
      "不要真的把枝条打成死结；会伤枝/影响来年开花",
      "浓香不适合密闭空间"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "结香含瑞香科毒性成分，猫狗误食可致口腔/肠胃刺激。",
      children: "花材不可入口；打结枝条可能伤手，需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "中国",
    habitat: "山地林下；庭院栽培",
    vaseLife: "5–7 天",
    press: "花小，可整簇压；枝条可做线条标本。",
    culture: "结香先花后叶，枝条柔韧可打结；「梦花」的名字来自人们在枝上打结许愿的习俗。",
    poetry: "中国古诗中结香题材较少；「梦花/打结花」更多是民间名。",
    myth: "结香「打结许愿」是民俗，不是植物学；不要为了许愿把枝条打成死结。",
    prompt: "用「打结」写愿望：你把心事绑在枝上，树却要带着它过冬。",
    misuse: "把结香与瑞香混为一谈；或为了拍照/许愿把枝条打成死结。",
    trivia: "结香是瑞香科结香属，枝条柔韧可打结；树皮是传统造纸原料。",
    pairs: { ids: ["daphne", "camellia"], line: "结香做黄色的结，瑞香给早春香，山茶把红压深。" },
    svg: { type: "edgeworthia", petals: 4, leaves: 2 }
  },
  {
    id: "jacaranda",
    no: 100,
    name: "蓝花楹",
    en: "Jacaranda",
    latin: "Jacaranda mimosifolia",
    family: "紫葳科 · 蓝花楹属",
    aliases: ["蓝楹", "紫云木", "巴西紫葳"],
    colors: [
      { hex: "#6D86A8", name: "蓝花楹蓝", group: "蓝" },
      { hex: "#8A6F9E", name: "紫", group: "紫" }
    ],
    form: "喇叭状 / 簇生",
    shapeGroup: "喇叭",
    inflorescence: "圆锥花序",
    diameter: "3–5 cm",
    height: "800–1500 cm",
    bloom: [5, 6],
    scent: { level: "淡", desc: "几乎没有香气；落花铺成蓝紫色地毯。" },
    language: {
      positive: "宁静、深远、在绝望中等待",
      negative: "落花成毯的告别；被浪漫化的「等待」",
      cultural: "中文多取「宁静、深远」，西式 jacaranda 常取 wisdom/rebirth，日式「ジャカランダ」常取「名誉、栄光」；三者都围绕「远」。"
    },
    cultureMeanings: {
      cn: "蓝花楹在中文里常取「宁静、深远、在绝望中等待」，是南方城市的蓝紫色行道树。",
      west: "英语 jacaranda 常取 wisdom、rebirth、a long journey；澳洲/南非的蓝花楹季很有名。",
      jp: "日式花语常见「名誉、栄光、輝かしい未来」；「ジャカランダ」是热带/亚热带行道树。"
    },
    occasions: ["送别", "暗恋"],
    taboos: [
      "种子/荚果有毒，猫狗/儿童误食需注意",
      "不要与紫藤/蓝花楹混淆；两者不同科",
      "落花湿滑，行道树下注意"
    ],
    toxicity: {
      level: "中",
      petsRisk: true,
      childRisk: true,
      pets: "蓝花楹种子/荚果含毒性成分，猫狗误食可致呕吐、腹泻。",
      children: "种子/荚果不可入口；需远离幼儿。",
      note: "不提供食用或药用建议。"
    },
    origin: "南美洲（阿根廷、玻利维亚）",
    habitat: "亚热带/热带；行道树栽培",
    vaseLife: "5–7 天",
    press: "花瓣薄，压后蓝紫色会变淡；适合小标本。",
    culture: "蓝花楹是南美的蓝紫色行道树，花期落花成毯；它和紫藤不是同科，颜色相近但气质不同。",
    poetry: "中国古诗没有对应的蓝花楹意象；它是近代传入的南美树种。",
    myth: "蓝花楹没有强神话源头；「jacaranda」来自南美原住民语言。",
    prompt: "用「蓝紫色地毯」写告别：它把整条路铺满，然后让你踩过去。",
    misuse: "把蓝花楹与紫藤混为一谈；或忽略种子/荚果的毒性。",
    trivia: "蓝花楹是紫葳科，原产南美；它的落花成毯，但花本身没有香气。",
    pairs: { ids: ["wisteria", "lavender"], line: "蓝花楹做蓝紫，紫藤给垂线，薰衣草把香气拉远。" },
    svg: { type: "jacaranda", petals: 5, leaves: 2 }
  }
];
