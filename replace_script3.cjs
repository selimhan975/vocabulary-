const fs = require('fs');

const data = {
  "src/data/b2-lesson-44.ts": [
    {
      old: "legislation",
      obj: {
        id: "w433",
        word: "referendum",
        pronunciation: "/ˌref.əˈren.dəm/",
        partOfSpeech: "noun",
        level: "B2",
        synonyms: ["vote", "ballot", "poll"],
        collocations: ["hold a referendum", "a national referendum"],
        translations: { ru: "референдум", zh: "全民公投", es: "referéndum", fr: "référendum", de: "Referendum / Volksabstimmung", tr: "referandum / halk oylaması", ja: "国民投票" },
        meanings: [
          {
            id: "w433-m1",
            definition: "a vote in which all the people in a country or an area are asked to give their opinion about or decide an important political or social question",
            translation: { ru: "голосование, в котором всех жителей страны или региона просят высказать свое мнение или решить важный политический или социальный вопрос", zh: "一种投票，要求一个国家或地区的所有人民就一个重要的政治或社会问题发表意见或做出决定", es: "una votación en la que se pide a todas las personas de un país o área que den su opinión sobre o decidan una cuestión política o social importante" },
            examples: [
              {
                id: "w433-m1-e1",
                sentence: "The government decided to hold a referendum on the new constitution.",
                translation: { ru: "Правительство решило провести референдум по новой конституции.", zh: "政府决定就新宪法举行全民公投。", es: "El gobierno decidió celebrar un referéndum sobre la nueva constitución.", fr: "Le gouvernement a décidé d'organiser un référendum sur la nouvelle constitution.", de: "Die Regierung beschloss, ein Referendum über die neue Verfassung abzuhalten.", tr: "Hükümet yeni anayasa konusunda referandum yapmaya karar verdi.", ja: "政府は新憲法に関する国民投票の実施を決定した。" }
              },
              {
                id: "w433-m1-e2",
                sentence: "The results of the nationwide referendum were clear.",
                translation: { ru: "Результаты общенационального референдума были ясны.", zh: "全国公投的结果是明确的。", es: "Los resultados del referéndum a nivel nacional fueron claros.", fr: "Les résultats du référendum national ont été clairs.", de: "Die Ergebnisse des landesweiten Referendums waren eindeutig.", tr: "Ülke çapındaki referandumun sonuçları netti.", ja: "全国的な国民投票の結果は明らかであった。" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "campaign",
      obj: {
        id: "w440",
        word: "veto",
        pronunciation: "/ˈviː.təʊ/",
        partOfSpeech: "verb",
        level: "B2",
        synonyms: ["reject", "block", "turn down"],
        collocations: ["veto a bill", "power of veto"],
        translations: { ru: "накладывать вето", zh: "否决", es: "vetar", fr: "mettre son veto", de: "sein Veto einlegen", tr: "veto etmek", ja: "拒否権を行使する" },
        meanings: [
          {
            id: "w440-m1",
            definition: "to refuse to allow something, especially officially, to refuse to allow a bill to become law",
            translation: { ru: "отказаться разрешить что-либо, особенно официально, отказаться разрешить законопроекту стать законом", zh: "拒绝允许某事，尤指正式拒绝允许法案成为法律", es: "negarse a permitir algo, especialmente oficialmente, negarse a permitir que un proyecto de ley se convierta en ley" },
            examples: [
              {
                id: "w440-m1-e1",
                sentence: "The president threatened to veto the new tax legislation.",
                translation: { ru: "Президент пригрозил наложить вето на новое налоговое законодательство.", zh: "总统威胁要否决新的税收立法。", es: "El presidente amenazó con vetar la nueva legislación fiscal.", fr: "Le président a menacé de mettre son veto à la nouvelle législation fiscale.", de: "Der Präsident drohte, sein Veto gegen das neue Steuergesetz einzulegen.", tr: "Başkan yeni vergi mevzuatını veto etmekle tehdit etti.", ja: "大統領は新たな税法案に拒否権を行使すると脅した。" }
              },
              {
                id: "w440-m1-e2",
                sentence: "The council can veto any building plans that destroy the environment.",
                translation: { ru: "Совет может наложить вето на любые планы строительства, которые разрушают окружающую среду.", zh: "理事会可以否决任何破坏环境的建筑计划。", es: "El consejo puede vetar cualquier plan de construcción que destruya el medio ambiente.", fr: "Le conseil peut mettre son veto à tout projet de construction qui détruit l'environnement.", de: "Der Rat kann sein Veto gegen alle Baupläne einlegen, die die Umwelt zerstören.", tr: "Konsey, çevreyi tahrip eden her türlü inşaat planını veto edebilir.", ja: "議会は環境を破壊する建設計画を拒否することができる。" }
              }
            ]
          }
        ]
      }
    }
  ]
};

function formatObj(obj, indent) {
    const i = " ".repeat(indent);
    const i2 = " ".repeat(indent + 2);
    const i3 = " ".repeat(indent + 4);
    const i4 = " ".repeat(indent + 6);
    const i5 = " ".repeat(indent + 8);

    let str = `{\n${i2}id: "${obj.id}",\n${i2}word: "${obj.word}",\n${i2}pronunciation: "${obj.pronunciation}",\n${i2}partOfSpeech: "${obj.partOfSpeech}",\n${i2}level: "${obj.level}",\n`;
    str += `${i2}synonyms: ${JSON.stringify(obj.synonyms)},\n`;
    str += `${i2}collocations: ${JSON.stringify(obj.collocations)},\n`;
    str += `${i2}translations: ${JSON.stringify(obj.translations)},\n`;
    str += `${i2}meanings: [\n`;
    for (const m of obj.meanings) {
        str += `${i3}{\n${i4}id: "${m.id}",\n${i4}definition: "${m.definition.replace(/"/g, '\\"')}",\n${i4}translation: ${JSON.stringify(m.translation)},\n${i4}examples: [\n`;
        for (const e of m.examples) {
            str += `${i5}{\n${i5}  id: "${e.id}",\n${i5}  sentence: "${e.sentence.replace(/"/g, '\\"')}",\n${i5}  translation: ${JSON.stringify(e.translation)}\n${i5}},\n`;
        }
        str = str.replace(/,\n$/, '\n');
        str += `${i4}]\n${i3}},\n`;
    }
    str = str.replace(/,\n$/, '\n');
    str += `${i2}]\n${i}}`;
    return str;
}

for (const file of Object.keys(data)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const item of data[file]) {
        // match w440 or similar
        const regex = new RegExp(`\\{\\s*id:\\s*"w\\d+",\\s*word:\\s*"${item.old}"[\\s\\S]*?(?=\\{\\s*id:\\s*"w\\d+"|\\]\\s*,|\\];)`, 'g');
        const replacement = formatObj(item.obj, 4) + ',\n    ';
        
        let match = regex.exec(content);
        if (match) {
            content = content.replace(regex, replacement);
            console.log(`Replaced ${item.old} in ${file}`);
        } else {
            console.log(`Could not match ${item.old} in ${file}!`);
        }
    }
    // Fix trailing commas if they happen right before ]
    content = content.replace(/,\n\s*\]/g, '\n    ]');
    fs.writeFileSync(file, content, 'utf8');
}
