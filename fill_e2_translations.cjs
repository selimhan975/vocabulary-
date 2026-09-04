const fs = require('fs');

const l1Translations = {
  'resilient': {
    ru: 'Она оказалась очень стойкой, быстро восстановившись после травмы.',
    zh: '她证明了自己非常有韧性，受伤后很快就恢复了。',
    es: 'Demostró ser muy resiliente, recuperándose rápidamente después de la lesión.',
    fr: 'Elle s\'est avérée très résiliente, se remettant rapidement après la blessure.',
    de: 'Sie erwies sich als sehr belastbar und erholte sich schnell nach der Verletzung.',
    tr: 'Sakatlıktan sonra hızla iyileşerek oldukça dirençli olduğunu kanıtladı.',
    ja: '彼女は非常に回復力があることを証明し、怪我の後にすぐに立ち直った。'
  },
  'implement': {
    ru: 'Менеджер планирует внедрить новый дресс-код к следующему месяцу.',
    zh: '经理计划在下个月前实施新的着装要求。',
    es: 'El gerente planea implementar un nuevo código de vestimenta para el próximo mes.',
    fr: 'Le directeur prévoit de mettre en œuvre un nouveau code vestimentaire d\'ici le mois prochain.',
    de: 'Der Manager plant, bis nächsten Monat eine neue Kleiderordnung einzuführen.',
    tr: 'Yönetici önümüzdeki aya kadar yeni bir kıyafet kuralı uygulamayı planlıyor.',
    ja: 'マネージャーは来月までに新しい服装規定を導入する予定です。'
  },
  'maintain': {
    ru: 'Вы должны поддерживать постоянную скорость при движении по шоссе.',
    zh: '在高速公路上行驶时，您必须保持稳定的速度。',
    es: 'Debe mantener una velocidad constante mientras conduce por la autopista.',
    fr: 'Vous devez maintenir une vitesse constante lorsque vous conduisez sur l\'autoroute.',
    de: 'Sie müssen auf der Autobahn eine konstante Geschwindigkeit beibehalten.',
    tr: 'Otoyolda araç kullanırken sabit bir hızı korumalısınız.',
    ja: '高速道路を運転するときは、一定の速度を維持する必要があります。'
  },
  'crucial': {
    ru: 'При вождении крайне важно пристегиваться ремнем безопасности.',
    zh: '开车时系好安全带至关重要。',
    es: 'Es crucial usar el cinturón de seguridad al conducir.',
    fr: 'Il est crucial de porter la ceinture de sécurité au volant.',
    de: 'Es ist entscheidend, beim Fahren einen Sicherheitsgurt zu tragen.',
    tr: 'Araç kullanırken emniyet kemeri takmak çok önemlidir.',
    ja: '運転時にシートベルトを着用することは極めて重要です。'
  },
  'evolve': {
    ru: 'Программное обеспечение продолжало развиваться с момента первого выпуска.',
    zh: '该软件自首次发布以来不断发展。',
    es: 'El software ha continuado evolucionando desde su primer lanzamiento.',
    fr: 'Le logiciel a continué d\'évoluer depuis sa première version.',
    de: 'Die Software hat sich seit ihrer ersten Veröffentlichung weiterentwickelt.',
    tr: 'Yazılım ilk sürümünden bu yana gelişmeye devam etti.',
    ja: 'ソフトウェアは最初のリリース以来進化し続けています。'
  },
  'constant': {
    ru: 'Он страдал от постоянных головных болей из-за стресса.',
    zh: '由于压力，他经常头痛。',
    es: 'Sufría de dolores de cabeza constantes debido al estrés.',
    fr: 'Il souffrait de maux de tête constants dus au stress.',
    de: 'Er litt unter ständigen Kopfschmerzen aufgrund von Stress.',
    tr: 'Stres nedeniyle sürekli baş ağrısı çekiyordu.',
    ja: '彼はストレスによる絶え間ない頭痛に苦しんでいた。'
  },
  'significant': {
    ru: 'Произошло значительное улучшение ее результатов тестов.',
    zh: '她的考试成绩有了显著提高。',
    es: 'Hubo una mejora significativa en las calificaciones de sus exámenes.',
    fr: 'Il y a eu une amélioration significative de ses résultats aux tests.',
    de: 'Es gab eine signifikante Verbesserung ihrer Testergebnisse.',
    tr: 'Sınav puanlarında önemli bir gelişme oldu.',
    ja: '彼女のテストの点数には有意な改善が見られました。'
  },
  'obtain': {
    ru: 'Наконец-то она смогла получить водительские права.',
    zh: '她终于拿到了驾照。',
    es: 'Finalmente pudo obtener su licencia de conducir.',
    fr: 'Elle a finalement pu obtenir son permis de conduire.',
    de: 'Sie konnte endlich ihren Führerschein erhalten.',
    tr: 'Sonunda ehliyetini alabildi.',
    ja: '彼女はついに運転免許証を取得することができました。'
  },
  'adapt': {
    ru: 'Ему потребовалось время, чтобы адаптироваться к более холодному климату.',
    zh: '他花了一段时间才适应较冷的气候。',
    es: 'Le tomó un tiempo adaptarse al clima más frío.',
    fr: 'Il lui a fallu un certain temps pour s\'adapter au climat plus froid.',
    de: 'Er brauchte eine Weile, um sich an das kältere Klima anzupassen.',
    tr: 'Daha soğuk iklime uyum sağlaması biraz zaman aldı.',
    ja: '彼がより寒い気候に順応するにはしばらく時間がかかりました。'
  },
  'fulfill': {
    ru: 'Он усердно работал, чтобы выполнить обещание, данное родителям.',
    zh: '他努力工作以兑现对他父母的承诺。',
    es: 'Trabajó duro para cumplir la promesa que les hizo a sus padres.',
    fr: 'Il a travaillé dur pour tenir la promesse faite à ses parents.',
    de: 'Er arbeitete hart, um sein Versprechen gegenüber seinen Eltern zu erfüllen.',
    tr: 'Ailesine verdiği sözü yerine getirmek için çok çalıştı.',
    ja: '彼は両親への約束を果たすために一生懸命働いた。'
  }
};

const l2Translations = {
  'innovative': {
    ru: 'Компания выпустила инновационный продукт, который изменил рынок.',
    zh: '公司发布了一款改变市场的创新产品。',
    es: 'La empresa lanzó un producto innovador que cambió el mercado.',
    fr: 'L\'entreprise a lancé un produit innovant qui a changé le marché.',
    de: 'Das Unternehmen brachte ein innovatives Produkt auf den Markt, das den Markt veränderte.',
    tr: 'Şirket piyasayı değiştiren yenilikçi bir ürün piyasaya sürdü.',
    ja: '同社は市場を変える革新的な製品を発売した。'
  },
  'obsolete': {
    ru: 'Многие старые сотовые телефоны стали полностью устаревшими.',
    zh: '许多旧手机已经完全过时了。',
    es: 'Muchos teléfonos celulares viejos se han vuelto completamente obsoletos.',
    fr: 'De nombreux vieux téléphones portables sont devenus complètement obsolètes.',
    de: 'Viele alte Handys sind völlig veraltet.',
    tr: 'Birçok eski cep telefonu tamamen modası geçmiş hale geldi.',
    ja: '多くの古い携帯電話は完全に時代遅れになっています。'
  },
  'virtual': {
    ru: 'Они организовали виртуальную встречу, потому что команда работала удаленно.',
    zh: '他们组织了一次虚拟会议，因为团队是远程工作的。',
    es: 'Organizaron una reunión virtual porque el equipo estaba trabajando de forma remota.',
    fr: 'Ils ont organisé une réunion virtuelle car l\'équipe travaillait à distance.',
    de: 'Sie organisierten ein virtuelles Meeting, da das Team remote arbeitete.',
    tr: 'Ekip uzaktan çalıştığı için sanal bir toplantı düzenlediler.',
    ja: 'チームがリモートで作業していたため、彼らは仮想会議を開催しました。'
  },
  'access': {
    ru: 'Только уполномоченный персонал может получить доступ в охраняемое здание.',
    zh: '只有授权人员才能进入安全大楼。',
    es: 'Solo el personal autorizado puede acceder al edificio seguro.',
    fr: 'Seul le personnel autorisé peut accéder au bâtiment sécurisé.',
    de: 'Nur autorisiertes Personal hat Zugang zum gesicherten Gebäude.',
    tr: 'Güvenli binaya sadece yetkili personel erişebilir.',
    ja: '許可された人員のみが安全な建物にアクセスできます。'
  },
  'automated': {
    ru: 'На фабрике используется автоматизированная система для упаковки товаров.',
    zh: '工厂使用自动化系统包装货物。',
    es: 'La fábrica utiliza un sistema automatizado para empaquetar los productos.',
    fr: 'L\'usine utilise un système automatisé pour emballer les marchandises.',
    de: 'Die Fabrik verwendet ein automatisiertes System zum Verpacken der Waren.',
    tr: 'Fabrika malları paketlemek için otomatik bir sistem kullanıyor.',
    ja: '工場では商品を梱包するために自動化システムを使用しています。'
  },
  'data': {
    ru: 'Во время эксперимента ученые собрали новые данные.',
    zh: '科学家们在实验过程中收集了新数据。',
    es: 'Los científicos recopilaron nuevos datos durante su experimento.',
    fr: 'Les scientifiques ont collecté de nouvelles données lors de leur expérience.',
    de: 'Die Wissenschaftler sammelten während ihres Experiments neue Daten.',
    tr: 'Bilim adamları deneyleri sırasında yeni veriler topladılar.',
    ja: '科学者たちは実験中に新しいデータを収集しました。'
  },
  'device': {
    ru: 'Это электронное устройство помогает отслеживать ваши ежедневные шаги.',
    zh: '这款电子设备可帮助追踪您的日常步数。',
    es: 'Este dispositivo electrónico ayuda a rastrear sus pasos diarios.',
    fr: 'Cet appareil électronique permet de suivre vos pas quotidiens.',
    de: 'Dieses elektronische Gerät hilft dabei, Ihre täglichen Schritte zu verfolgen.',
    tr: 'Bu elektronik cihaz günlük adımlarınızı takip etmenize yardımcı olur.',
    ja: 'この電子デバイスは、毎日の歩数を追跡するのに役立ちます。'
  },
  'network': {
    ru: 'В нашей компьютерной сети произошел временный сбой.',
    zh: '我们的计算机网络出现了暂时性故障。',
    es: 'Experimentamos una falla temporal en nuestra red informática.',
    fr: 'Nous avons connu une panne temporaire sur notre réseau informatique.',
    de: 'Wir hatten einen vorübergehenden Ausfall in unserem Computernetzwerk.',
    tr: 'Bilgisayar ağımızda geçici bir arıza yaşadık.',
    ja: 'コンピュータネットワークで一時的な障害が発生しました。'
  },
  'process': {
    ru: 'Подача заявления на получение визы может быть очень долгим процессом.',
    zh: '申请签证可能是一个非常漫长的过程。',
    es: 'Solicitar una visa puede ser un proceso muy largo.',
    fr: 'Demander un visa peut être un processus très long.',
    de: 'Die Beantragung eines Visums kann ein sehr langer Prozess sein.',
    tr: 'Vize başvurusu yapmak çok uzun bir süreç olabilir.',
    ja: 'ビザの申請は非常に長いプロセスになる場合があります。'
  },
  'secure': {
    ru: 'Обязательно заприте двери перед уходом из дома.',
    zh: '出门前一定要锁好门。',
    es: 'Asegúrese de asegurar las puertas antes de salir de la casa.',
    fr: 'Assurez-vous de sécuriser les portes avant de quitter la maison.',
    de: 'Stellen Sie sicher, dass Sie die Türen sichern, bevor Sie das Haus verlassen.',
    tr: 'Evden çıkmadan önce kapıları güvenceye aldığınızdan emin olun.',
    ja: '家を出る前に必ずドアを施錠してください。'
  }
};

let l1 = fs.readFileSync('src/data/b2-lesson-1.ts', 'utf-8');
for (const [word, trans] of Object.entries(l1Translations)) {
  const transStr = JSON.stringify(trans).replace(/"([^"]+)":/g, "$1:").replace(/"/g, "'");
  const regex = new RegExp(`(word:\\s*'${word}'[\\s\\S]*?id:\\s*'w\\d+-m1-e2',[\\s\\S]*?translation:\\s*)\\{[^\\}]*\\}`);
  l1 = l1.replace(regex, `$1${transStr}`);
}
fs.writeFileSync('src/data/b2-lesson-1.ts', l1);

let l2 = fs.readFileSync('src/data/b2-lesson-2.ts', 'utf-8');
for (const [word, trans] of Object.entries(l2Translations)) {
  const transStr = JSON.stringify(trans).replace(/"([^"]+)":/g, "$1:").replace(/"/g, "'");
  const regex = new RegExp(`(word:\\s*'${word}'[\\s\\S]*?id:\\s*'w\\d+-m1-e2',[\\s\\S]*?translation:\\s*)\\{[^\\}]*\\}`);
  l2 = l2.replace(regex, `$1${transStr}`);
}
fs.writeFileSync('src/data/b2-lesson-2.ts', l2);

