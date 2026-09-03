const fs = require('fs');

const b2l1Data = {
  'implement': { ru: 'внедрять', zh: '实施', es: 'implementar', fr: 'mettre en œuvre', de: 'implementieren', tr: 'uygulamak', ja: '実行する' },
  'maintain': { ru: 'поддерживать', zh: '保持', es: 'mantener', fr: 'maintenir', de: 'aufrechterhalten', tr: 'sürdürmek', ja: '維持する' },
  'evolve': { ru: 'эволюционировать', zh: '进化 / 发展', es: 'evolucionar', fr: 'évoluer', de: 'sich entwickeln', tr: 'gelişmek', ja: '進化する' },
  'constant': { ru: 'постоянный', zh: '不断的', es: 'constante', fr: 'constant', de: 'konstant', tr: 'sürekli', ja: '一定の' },
  'significant': { ru: 'значительный', zh: '重大的', es: 'significativo', fr: 'significatif', de: 'bedeutend', tr: 'önemli', ja: '重要な' },
  'obtain': { ru: 'получать', zh: '获得', es: 'obtener', fr: 'obtenir', de: 'erhalten', tr: 'elde etmek', ja: '得る' }
};

const b2l2Data = {
  'innovative': { ru: 'инновационный', zh: '创新的', es: 'innovador', fr: 'innovant', de: 'innovativ', tr: 'yenilikçi', ja: '革新的な' },
  'obsolete': { ru: 'устаревший', zh: '过时的', es: 'obsoleto', fr: 'obsolète', de: 'veraltet', tr: 'modası geçmiş', ja: '時代遅れの' },
  'virtual': { ru: 'виртуальный', zh: '虚拟的', es: 'virtual', fr: 'virtuel', de: 'virtuell', tr: 'sanal', ja: '仮想の' },
  'access': { ru: 'доступ', zh: '访问', es: 'acceso', fr: 'accès', de: 'Zugang', tr: 'erişim', ja: 'アクセス' },
  'automated': { ru: 'автоматизированный', zh: '自动化的', es: 'automatizado', fr: 'automatisé', de: 'automatisiert', tr: 'otomatik', ja: '自動化された' },
  'data': { ru: 'данные', zh: '数据', es: 'datos', fr: 'données', de: 'Daten', tr: 'veri', ja: 'データ' },
  'device': { ru: 'устройство', zh: '设备', es: 'dispositivo', fr: 'appareil', de: 'Gerät', tr: 'cihaz', ja: 'デバイス' },
  'process': { ru: 'обрабатывать / процесс', zh: '处理 / 过程', es: 'procesar / proceso', fr: 'traiter / processus', de: 'verarbeiten / Prozess', tr: 'işlemek / süreç', ja: '処理する / プロセス' },
  'secure': { ru: 'безопасный', zh: '安全的', es: 'seguro', fr: 'sécurisé', de: 'sicher', tr: 'güvenli', ja: '安全な' }
};

function fixFile(file, data) {
  let content = fs.readFileSync(file, 'utf8');
  
  Object.keys(data).forEach(word => {
    const trans = data[word];
    const transStr = `{ ru: '${trans.ru}', zh: '${trans.zh}', es: '${trans.es}', fr: '${trans.fr}', de: '${trans.de}', tr: '${trans.tr}', ja: '${trans.ja}' }`;
    
    const wordRegex = new RegExp(`word:\\s*'${word}'.*?translations:\\s*{.*?}`, 's');
    content = content.replace(wordRegex, (match) => {
      return match.replace(/translations:\s*{.*?}/s, `translations: ${transStr}`);
    });
  });
  
  fs.writeFileSync(file, content);
}

fixFile('src/data/b2-lesson-1.ts', b2l1Data);
fixFile('src/data/b2-lesson-2.ts', b2l2Data);
