const fs = require('fs');

const words = [
  // 53
  { word: "assert", es: "afirmar, asegurar", ru: "утверждать, заявлять", zh: "断言，坚持", fr: "affirmer, soutenir", de: "behaupten, versichern", tr: "iddia etmek, ileri sürmek", ja: "断言する、主張する" },
  { word: "stance", es: "postura, actitud", ru: "позиция, точка зрения", zh: "立场，态度", fr: "position, point de vue", de: "Haltung, Standpunkt", tr: "tutum, duruş", ja: "立場、態度" },
  { word: "premise", es: "premisa", ru: "предпосылка", zh: "前提，假定", fr: "prémisse", de: "Prämisse, Voraussetzung", tr: "öncül, temel dayanak", ja: "前提" },
  { word: "contend", es: "sostener, argumentar", ru: "утверждать, заявлять", zh: "声称，主张", fr: "soutenir, prétendre", de: "behaupten, verfechten", tr: "ileri sürmek, iddia etmek", ja: "強く主張する" },
  { word: "put forward", es: "proponer, plantear", ru: "выдвигать (идею), предлагать", zh: "提出，提议", fr: "avancer, proposer", de: "vorbringen, vorschlagen", tr: "öne sürmek, teklif etmek", ja: "提案する、提出する" },
  { word: "viewpoint", es: "punto de vista", ru: "точка зрения", zh: "观点，看法", fr: "point de vue", de: "Gesichtspunkt, Sichtweise", tr: "bakış açısı", ja: "観点、見解" },
  { word: "advocate", es: "abogar por, defender", ru: "выступать за, отстаивать", zh: "提倡，主张", fr: "prôner, défendre", de: "befürworten, sich einsetzen für", tr: "savunmak, desteklemek", ja: "提唱する、主張する" },
  { word: "articulate", es: "articular, expresar claramente", ru: "четко формулировать, выражать", zh: "清楚地表达", fr: "exprimer clairement, articuler", de: "deutlich formulieren", tr: "açıkça ifade etmek", ja: "明確に表現する" },
  { word: "emphasize", es: "enfatizar, destacar", ru: "подчеркивать, акцентировать", zh: "强调，着重", fr: "souligner, mettre en évidence", de: "betonen, hervorheben", tr: "vurgulamak, altını çizmek", ja: "強調する" },
  { word: "essentially", es: "esencialmente, fundamentalmente", ru: "по сути, в сущности", zh: "本质上，基本上", fr: "essentiellement, fondamentalement", de: "im Grunde, im Wesentlichen", tr: "aslında, temelde", ja: "本質的に、基本的には" },
  // 54
  { word: "reasoning", es: "razonamiento", ru: "рассуждение, аргументация", zh: "推理，推论", fr: "raisonnement", de: "logisches Denken, Argumentation", tr: "akıl yürütme", ja: "推論、論理的思考" },
  { word: "assumption", es: "suposición, supuesto", ru: "предположение, допущение", zh: "假设，设想", fr: "hypothèse, supposition", de: "Annahme, Vermutung", tr: "varsayım", ja: "仮定、思い込み" },
  { word: "implication", es: "implicación, consecuencia", ru: "скрытый смысл, последствие", zh: "暗示，可能的结果", fr: "implication, conséquence", de: "Auswirkung, Andeutung", tr: "çıkarım, olası sonuç", ja: "暗示、影響" },
  { word: "deduce", es: "deducir", ru: "делать вывод, выводить (заключение)", zh: "推断，推论", fr: "déduire", de: "ableiten, schlussfolgern", tr: "sonuç çıkarmak", ja: "推論する、演繹する" },
  { word: "correlation", es: "correlación", ru: "корреляция, взаимосвязь", zh: "相关性，关联", fr: "corrélation", de: "Korrelation, Wechselbeziehung", tr: "korelasyon, ilişki", ja: "相関関係" },
  { word: "merit", es: "mérito, valor", ru: "заслуга, достоинство", zh: "价值，优点", fr: "mérite", de: "Verdienst, Wert", tr: "değer, erdem", ja: "価値、長所" },
  { word: "back up", es: "respaldar, apoyar", ru: "подкреплять (доказательствами), поддерживать", zh: "支持，证实", fr: "appuyer, soutenir", de: "untermauern, unterstützen", tr: "desteklemek (kanıtla)", ja: "（証拠などで）裏付ける" },
  { word: "rule out", es: "descartar", ru: "исключать", zh: "排除，取消...的可能性", fr: "exclure, écarter", de: "ausschließen", tr: "göz ardı etmek, elemek", ja: "除外する、排除する" },
  { word: "subsequently", es: "posteriormente, consecuentemente", ru: "впоследствии, затем", zh: "随后，后来", fr: "par la suite, ultérieurement", de: "anschließend, in der Folge", tr: "daha sonra, akabinde", ja: "その後、続いて" },
  { word: "derive", es: "derivar, obtener", ru: "извлекать, выводить", zh: "源于，得出", fr: "tirer, dériver", de: "ableiten, beziehen", tr: "türetmek, elde etmek", ja: "引き出す、由来する" },
  // 55
  { word: "contradict", es: "contradecir", ru: "противоречить, возражать", zh: "反驳，与...矛盾", fr: "contredire", de: "widersprechen", tr: "çelişmek, aksini iddia etmek", ja: "矛盾する、反論する" },
  { word: "discrepancy", es: "discrepancia, diferencia", ru: "расхождение, несоответствие", zh: "差异，不一致", fr: "divergence, écart", de: "Unstimmigkeit, Abweichung", tr: "tutarsızlık, farklılık", ja: "相違、食い違い" },
  { word: "flaw", es: "defecto, fallo", ru: "недостаток, изъян", zh: "缺陷，瑕疵", fr: "défaut, faille", de: "Mangel, Fehler", tr: "kusur, hata", ja: "欠陥、欠点" },
  { word: "limitation", es: "limitación, límite", ru: "ограничение, недостаток", zh: "局限，限制", fr: "limitation, limite", de: "Einschränkung, Grenze", tr: "kısıtlama, sınırlama", ja: "制限、限界" },
  { word: "subjective", es: "subjetivo", ru: "субъективный", zh: "主观的", fr: "subjectif", de: "subjektiv", tr: "öznel", ja: "主観的な" },
  { word: "dispute", es: "disputar, cuestionar", ru: "оспаривать, спорить", zh: "对...提出质疑，争论", fr: "contester, disputer", de: "bestreiten, anfechten", tr: "itiraz etmek, tartışmak", ja: "異議を唱える、論争する" },
  { word: "arguably", es: "podría decirse que, posiblemente", ru: "возможно, вероятно (с полным основанием)", zh: "可以说是，大概", fr: "sans doute, on peut soutenir que", de: "wohl, vertretbarer Weise", tr: "tartışılabilir bir şekilde, muhtemelen", ja: "おそらく、間違いなく" },
  { word: "refute", es: "refutar", ru: "опровергать", zh: "驳斥，反驳", fr: "réfuter", de: "widerlegen", tr: "çürütmek, yalanlamak", ja: "論破する、反論する" },
  { word: "critique", es: "criticar (constructivamente), analizar", ru: "критиковать, давать критическую оценку", zh: "批评，评论", fr: "critiquer, faire la critique de", de: "kritisieren, bewerten", tr: "eleştirmek, eleştirel değerlendirmek", ja: "批評する、論評する" },
  { word: "brush off", es: "no hacer caso, restar importancia", ru: "отмахиваться (от кого-л./чего-л.), игнорировать", zh: "不理睬，对...不屑一顾", fr: "ignorer, balayer d'un revers de main", de: "abtun, abweisen", tr: "kulak ardı etmek, umursamamak", ja: "無視する、払い退ける" },
  // 56
  { word: "compelling", es: "convincente, cautivador", ru: "убедительный, захватывающий", zh: "令人信服的，引人入胜的", fr: "convaincant, captivant", de: "überzeugend, fesselnd", tr: "ikna edici, ilgi çekici", ja: "説得力のある、人を惹きつける" },
  { word: "sway", es: "influir, persuadir", ru: "влиять (на мнение), склонять", zh: "影响，使动摇", fr: "influencer, faire pencher", de: "beeinflussen, umstimmen", tr: "etkilemek, fikrini değiştirmek", ja: "影響を与える、心を動かす" },
  { word: "rationale", es: "lógica, razón fundamental", ru: "обоснование, логика", zh: "基本理由，理论基础", fr: "justification, logique", de: "Begründung, Grundprinzip", tr: "gerekçe, mantık", ja: "根本的理由、論理的根拠" },
  { word: "inevitably", es: "inevitablemente", ru: "неизбежно", zh: "不可避免地，必然地", fr: "inévitablement", de: "zwangsläufig, unvermeidlich", tr: "kaçınılmaz olarak", ja: "必然的に、不可避的に" },
  { word: "coherent", es: "coherente, lógico", ru: "связный, логичный", zh: "连贯的，条理清楚的", fr: "cohérent, logique", de: "zusammenhängend, schlüssig", tr: "tutarlı, anlaşılır", ja: "筋の通った、首尾一貫した" },
  { word: "plausible", es: "plausible, verosímil", ru: "правдоподобный", zh: "貌似有理的，看似真实的", fr: "plausible, vraisemblable", de: "plausibel, glaubwürdig", tr: "makul, akla yatkın", ja: "もっともらしい、妥当な" },
  { word: "win over", es: "convencer, ganarse a alguien", ru: "склонить на свою сторону, завоевать", zh: "说服，把...争取过来", fr: "gagner à sa cause, convaincre", de: "für sich gewinnen, überzeugen", tr: "kendi tarafına çekmek, ikna etmek", ja: "味方につける、説得する" },
  { word: "legitimate", es: "legítimo, razonable", ru: "законный, обоснованный", zh: "合法的，合理的", fr: "légitime, justifié", de: "legitim, berechtigt", tr: "meşru, haklı", ja: "正当な、合法的な" },
  { word: "ultimately", es: "en última instancia, finalmente", ru: "в конечном счете, в конце концов", zh: "最终，归根结底", fr: "finalement, en fin de compte", de: "letztendlich, schließlich", tr: "nihayetinde, sonuç olarak", ja: "最終的に、結局のところ" },
  { word: "reiterate", es: "reiterar, repetir", ru: "повторять (снова и снова)", zh: "重申，反复地说", fr: "réitérer, répéter", de: "wiederholen, bekräftigen", tr: "tekrarlamak, yinelemek", ja: "繰り返して言う、反復する" }
];

let dictContent = fs.readFileSync('src/data/dictionary.ts', 'utf8');

// Find the last closing brace
const lastBraceIndex = dictContent.lastIndexOf('}');
if (lastBraceIndex !== -1) {
  let newEntries = "";
  for (const w of words) {
    newEntries += `  "${w.word}": {
    "ru": "${w.ru}",
    "zh": "${w.zh}",
    "es": "${w.es}",
    "fr": "${w.fr}",
    "de": "${w.de}",
    "tr": "${w.tr}",
    "ja": "${w.ja}"
  },\n`;
  }
  
  // check if there's a trailing comma before the last brace
  const beforeBrace = dictContent.substring(0, lastBraceIndex).trim();
  const needsComma = !beforeBrace.endsWith(',');
  
  let updatedContent = dictContent.substring(0, lastBraceIndex);
  if (needsComma) {
    updatedContent += ",\n";
  }
  updatedContent += newEntries;
  // remove the trailing comma from the last new entry
  updatedContent = updatedContent.replace(/,\n$/, '\n');
  updatedContent += "};\n";
  
  fs.writeFileSync('src/data/dictionary.ts', updatedContent);
}

