const fs = require('fs');

const b2l1Data = {
  'company': { ru: 'компания', zh: '公司', es: 'empresa', fr: 'entreprise', de: 'Unternehmen', tr: 'şirket', ja: '会社' },
  'operate': { ru: 'работать / действовать', zh: '运营 / 运作', es: 'operar / funcionar', fr: 'fonctionner', de: 'operieren / arbeiten', tr: 'işlemek / faaliyet göstermek', ja: '運営する' },
  'rapid': { ru: 'быстрый', zh: '迅速的', es: 'rápido', fr: 'rapide', de: 'schnell', tr: 'hızlı', ja: '急速な' },
  'competitive': { ru: 'конкурентный', zh: '有竞争力的', es: 'competitivo', fr: 'compétitif', de: 'wettbewerbsfähig', tr: 'rekabetçi', ja: '競争の激しい' },
  'crucial': { ru: 'ключевой / решающий', zh: '至关重要的', es: 'crucial', fr: 'crucial', de: 'entscheidend', tr: 'çok önemli', ja: '極めて重要な' },
  'adapt': { ru: 'адаптироваться', zh: '适应', es: 'adaptar', fr: 'adapter', de: 'anpassen', tr: 'uyum sağlamak', ja: '適応する' },
  'issue': { ru: 'проблема / вопрос', zh: '问题 / 议题', es: 'problema / asunto', fr: 'problème / question', de: 'Problem / Ausgabe', tr: 'sorun / mesele', ja: '問題 / 発行' },
  'resilient': { ru: 'устойчивый / стойкий', zh: '有韧性的', es: 'resiliente', fr: 'résilient', de: 'belastbar / widerstandsfähig', tr: 'dirençli', ja: '回復力のある' },
  'overcome': { ru: 'преодолевать', zh: '克服', es: 'superar', fr: 'surmonter', de: 'überwinden', tr: 'üstesinden gelmek', ja: '克服する' },
  'fulfill': { ru: 'выполнять', zh: '履行 / 实现', es: 'cumplir', fr: 'accomplir / réaliser', de: 'erfüllen', tr: 'yerine getirmek', ja: '果たす / 満たす' }
};

const b2l2Data = {
  'decade': { ru: 'десятилетие', zh: '十年', es: 'década', fr: 'décennie', de: 'Jahrzehnt', tr: 'on yıl', ja: '10年' },
  'witness': { ru: 'быть свидетелем', zh: '见证', es: 'presenciar', fr: 'témoigner', de: 'bezeugen', tr: 'tanık olmak', ja: '目撃する' },
  'environment': { ru: 'среда', zh: '环境', es: 'entorno / medio ambiente', fr: 'environnement', de: 'Umgebung / Umwelt', tr: 'çevre', ja: '環境' },
  'strategy': { ru: 'стратегия', zh: '战略', es: 'estrategia', fr: 'stratégie', de: 'Strategie', tr: 'strateji', ja: '戦略' },
  'obsolete': { ru: 'устаревший', zh: '过时的', es: 'obsoleto', fr: 'obsolète', de: 'veraltet', tr: 'modası geçmiş', ja: '時代遅れの' },
  'frequently': { ru: 'часто', zh: '频繁地', es: 'frecuentemente', fr: 'fréquemment', de: 'häufig', tr: 'sık sık', ja: '頻繁に' },
  'network': { ru: 'сеть', zh: '网络', es: 'red', fr: 'réseau', de: 'Netzwerk', tr: 'ağ', ja: 'ネットワーク' },
  'sensitive': { ru: 'чувствительный / конфиденциальный', zh: '敏感的', es: 'sensible', fr: 'sensible', de: 'sensibel', tr: 'hassas', ja: '機密の' },
  'refuse': { ru: 'отказываться', zh: '拒绝', es: 'rechazar', fr: 'refuser', de: 'sich weigern', tr: 'reddetmek', ja: '拒否する' },
  'integrate': { ru: 'интегрировать', zh: '整合', es: 'integrar', fr: 'intégrer', de: 'integrieren', tr: 'entegre etmek', ja: '統合する' }
};

function fixFile(file, data) {
  let content = fs.readFileSync(file, 'utf8');
  
  Object.keys(data).forEach(word => {
    const trans = data[word];
    const transStr = `{ ru: '${trans.ru}', zh: '${trans.zh}', es: '${trans.es}', fr: '${trans.fr}', de: '${trans.de}', tr: '${trans.tr}', ja: '${trans.ja}' }`;
    
    // Using regex to safely replace the translations object for each word.
    // E.g., translations: { ru: '...', zh: '...', es: '...' }
    // It's a bit tricky because the file has 'translations:' followed by the object.
    
    // We can just find the block for the specific word. The words are defined like `word: 'company',`
    // Then we find `translations: { ... }` that comes after it.
    
    const wordRegex = new RegExp(`word:\\s*'${word}'.*?translations:\\s*{.*?}`, 's');
    content = content.replace(wordRegex, (match) => {
      return match.replace(/translations:\s*{.*?}/s, `translations: ${transStr}`);
    });
  });
  
  fs.writeFileSync(file, content);
}

fixFile('src/data/b2-lesson-1.ts', b2l1Data);
fixFile('src/data/b2-lesson-2.ts', b2l2Data);
