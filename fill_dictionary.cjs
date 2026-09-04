const fs = require('fs');

const b2l1 = require('./src/data/b2-lesson-1.ts');
// since it's TS, I can't require it directly without transpiling, let's just parse it.
let content = fs.readFileSync('src/data/dictionary.ts', 'utf-8');

const additionalWords = {
  // Lesson 1
  'resilient': { ru: 'устойчивый / стойкий', zh: '有韧性的', es: 'resiliente', fr: 'résilient', de: 'belastbar / widerstandsfähig', tr: 'dirençli', ja: '回復力のある' },
  'implement': { ru: 'внедрять', zh: '实施', es: 'implementar', fr: 'mettre en œuvre', de: 'implementieren', tr: 'uygulamak', ja: '実行する' },
  'maintain': { ru: 'поддерживать', zh: '保持', es: 'mantener', fr: 'maintenir', de: 'aufrechterhalten', tr: 'sürdürmek', ja: '維持する' },
  'crucial': { ru: 'ключевой / решающий', zh: '至关重要的', es: 'crucial', fr: 'crucial', de: 'entscheidend', tr: 'çok önemli', ja: '極めて重要な' },
  'evolve': { ru: 'эволюционировать', zh: '进化 / 发展', es: 'evolucionar', fr: 'évoluer', de: 'sich entwickeln', tr: 'gelişmek', ja: '進化する' },
  'constant': { ru: 'постоянный', zh: '持续的 / 不断的', es: 'constante', fr: 'constant', de: 'konstant', tr: 'sürekli', ja: '一定の' },
  'significant': { ru: 'значительный', zh: '重大的', es: 'significativo', fr: 'significatif', de: 'bedeutend', tr: 'önemli', ja: '重要な' },
  'obtain': { ru: 'получать / приобретать', zh: '获得', es: 'obtener', fr: 'obtenir', de: 'erhalten', tr: 'elde etmek', ja: '得る' },
  'adapt': { ru: 'адаптироваться / приспосабливаться', zh: '适应', es: 'adaptarse', fr: 'adapter', de: 'anpassen', tr: 'uyum sağlamak', ja: '適応する' },
  'fulfill': { ru: 'выполнять / удовлетворять', zh: '履行 / 满足', es: 'cumplir', fr: 'remplir', de: 'erfüllen', tr: 'yerine getirmek', ja: '果たす' },

  // Lesson 2
  'innovative': { ru: 'инновационный / передовой', zh: '创新的', es: 'innovador', fr: 'innovant', de: 'innovativ', tr: 'yenilikçi', ja: '革新的な' },
  'obsolete': { ru: 'устаревший', zh: '过时的', es: 'obsoleto', fr: 'obsolète', de: 'veraltet', tr: 'modası geçmiş', ja: '時代遅れの' },
  'virtual': { ru: 'виртуальный / фактический', zh: '虚拟的', es: 'virtual', fr: 'virtuel', de: 'virtuell', tr: 'sanal', ja: '仮想の' },
  'access': { ru: 'доступ / иметь доступ', zh: '访问 / 接触', es: 'acceso / acceder', fr: 'accès / accéder', de: 'Zugang / zugreifen', tr: 'erişim / erişmek', ja: 'アクセス / アクセスする' },
  'automated': { ru: 'автоматизированный', zh: '自动化的', es: 'automatizado', fr: 'automatisé', de: 'automatisiert', tr: 'otomatik', ja: '自動化された' },
  'data': { ru: 'данные / информация', zh: '数据', es: 'datos', fr: 'données', de: 'Daten', tr: 'veri', ja: 'データ' },
  'device': { ru: 'устройство / прибор', zh: '设备 / 装置', es: 'dispositivo', fr: 'appareil', de: 'Gerät', tr: 'cihaz', ja: 'デバイス' },
  'network': { ru: 'сеть', zh: '网络', es: 'red', fr: 'réseau', de: 'Netzwerk', tr: 'ağ', ja: 'ネットワーク' },
  'process': { ru: 'процесс / обрабатывать', zh: '过程 / 处理', es: 'proceso / procesar', fr: 'processus / traiter', de: 'Prozess / verarbeiten', tr: 'süreç / işlemek', ja: 'プロセス / 処理する' },
  'secure': { ru: 'безопасный / надежный', zh: '安全的', es: 'seguro', fr: 'sécurisé', de: 'sicher', tr: 'güvenli', ja: '安全な' }
};

let entries = '';
for (const [word, trans] of Object.entries(additionalWords)) {
  const transStr = JSON.stringify(trans).replace(/"([^"]+)":/g, "$1:").replace(/"/g, "'");
  entries += `  '${word}': ${transStr},\n`;
}

content = content.replace(
  "export const globalDictionary: Record<string, TranslationMap> = {",
  `export const globalDictionary: Record<string, TranslationMap> = {\n${entries}`
);

fs.writeFileSync('src/data/dictionary.ts', content);

