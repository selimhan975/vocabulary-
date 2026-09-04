const fs = require('fs');

const lesson5 = `import { Lesson } from '../types';

export const b2Lesson5: Lesson = {
  id: 'b2-l5',
  level: 'B2',
  number: 5,
  title: 'Society & Modern Life',
  words: [
    {
      id: 'w41',
      word: 'diverse',
      pronunciation: '/daɪˈvɜːs/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['varied', 'different', 'mixed'],
      collocations: ['culturally diverse', 'diverse group'],
      translations: { ru: 'разнообразный', zh: '多样的', es: 'diverso', fr: 'diversifié', de: 'vielfältig', tr: 'çeşitli', ja: '多様な' },
      meanings: [
        {
          id: 'w41-m1',
          definition: 'including many different types of people or things',
          translation: { ru: 'включающий множество различных типов людей или вещей', zh: '包括许多不同类型的人或事物', es: 'que incluye muchos tipos diferentes de personas o cosas', fr: 'comprenant de nombreux types de personnes ou de choses différents', de: 'einschließlich vieler verschiedener Arten von Menschen oder Dingen', tr: 'birçok farklı türde insanı veya şeyi içeren', ja: '多くの異なる種類の人々や物事を含む' },
          examples: [
            {
              id: 'w41-m1-e1',
              sentence: 'London is a culturally diverse city with people from all over the world.',
              translation: { ru: 'Лондон — это культурно разнообразный город, в котором живут люди со всего мира.', zh: '伦敦是一个文化多元的城市，拥有来自世界各地的人们。', es: 'Londres es una ciudad culturalmente diversa con personas de todo el mundo.', fr: 'Londres est une ville culturellement diversifiée avec des gens du monde entier.', de: 'London ist eine kulturell vielfältige Stadt mit Menschen aus aller Welt.', tr: 'Londra, dünyanın her yerinden insanların bulunduğu kültürel açıdan çeşitli bir şehirdir.', ja: 'ロンドンは世界中から人々が集まる文化的に多様な都市です。' }
            },
            {
              id: 'w41-m1-e2',
              sentence: 'The university offers a very diverse range of courses for its students.',
              translation: { ru: 'Университет предлагает очень разнообразный спектр курсов для своих студентов.', zh: '这所大学为学生提供了非常多样的课程。', es: 'La universidad ofrece una gama muy diversa de cursos para sus estudiantes.', fr: 'L\\'université propose une gamme très diversifiée de cours à ses étudiants.', de: 'Die Universität bietet ein sehr vielfältiges Kursangebot für ihre Studenten.', tr: 'Üniversite öğrencilerine çok çeşitli kurslar sunmaktadır.', ja: '大学は学生に非常に多様なコースを提供しています。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w42',
      word: 'domestic',
      pronunciation: '/dəˈmɛstɪk/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['national', 'internal', 'home'],
      collocations: ['domestic market', 'domestic flights'],
      translations: { ru: 'внутренний / домашний', zh: '国内的 / 家庭的', es: 'nacional / doméstico', fr: 'national / domestique', de: 'inländisch / häuslich', tr: 'yurtiçi / ev', ja: '国内の / 家庭の' },
      meanings: [
        {
          id: 'w42-m1',
          definition: 'relating to a person\\'s own country',
          translation: { ru: 'относящийся к собственной стране человека', zh: '与某人自己的国家有关', es: 'relativo al propio país de una persona', fr: 'relatif au propre pays d\\'une personne', de: 'sich auf das eigene Land einer Person beziehend', tr: 'kişinin kendi ülkesiyle ilgili', ja: '人の自国に関する' },
          examples: [
            {
              id: 'w42-m1-e1',
              sentence: 'The government is trying to encourage domestic production rather than importing goods.',
              translation: { ru: 'Правительство пытается стимулировать внутреннее производство, а не импортировать товары.', zh: '政府正在努力鼓励国内生产而不是进口商品。', es: 'El gobierno está tratando de fomentar la producción nacional en lugar de importar bienes.', fr: 'Le gouvernement tente d\\'encourager la production nationale plutôt que d\\'importer des marchandises.', de: 'Die Regierung versucht, die inländische Produktion zu fördern, anstatt Waren zu importieren.', tr: 'Hükümet mal ithal etmek yerine yerli üretimi teşvik etmeye çalışıyor.', ja: '政府は商品を輸入するのではなく、国内生産を奨励しようとしています。' }
            },
            {
              id: 'w42-m1-e2',
              sentence: 'Domestic flights are usually much cheaper than international ones.',
              translation: { ru: 'Внутренние рейсы обычно намного дешевле международных.', zh: '国内航班通常比国际航班便宜得多。', es: 'Los vuelos nacionales suelen ser mucho más baratos que los internacionales.', fr: 'Les vols intérieurs sont généralement beaucoup moins chers que les vols internationaux.', de: 'Inlandsflüge sind in der Regel viel billiger als internationale Flüge.', tr: 'Yurtiçi uçuşlar genellikle uluslararası uçuşlardan çok daha ucuzdur.', ja: '国内線は通常、国際線よりもはるかに安価です。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w43',
      word: 'infrastructure',
      pronunciation: '/ˈɪnfrəˌstrʌktʃər/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['base', 'foundation', 'facilities'],
      collocations: ['public infrastructure', 'improve infrastructure'],
      translations: { ru: 'инфраструктура', zh: '基础设施', es: 'infraestructura', fr: 'infrastructure', de: 'Infrastruktur', tr: 'altyapı', ja: 'インフラ' },
      meanings: [
        {
          id: 'w43-m1',
          definition: 'the basic systems and services, such as transport and power supplies, that a country or organization uses in order to work effectively',
          translation: { ru: 'основные системы и услуги, такие как транспорт и электроснабжение, которые страна использует для эффективной работы', zh: '一个国家或组织为了有效运作而使用的基本系统和服务，例如交通和电力供应', es: 'los sistemas y servicios básicos, como el transporte y el suministro de energía, que un país u organización utiliza para trabajar de manera efectiva', fr: 'les systèmes et services de base, tels que les transports et l\\'alimentation électrique, qu\\'un pays ou une organisation utilise pour fonctionner efficacement', de: 'die grundlegenden Systeme und Dienstleistungen wie Verkehr und Energieversorgung, die ein Land oder eine Organisation benötigt, um effektiv zu arbeiten', tr: 'bir ülkenin veya kuruluşun etkili bir şekilde çalışabilmesi için kullandığı ulaşım ve güç kaynakları gibi temel sistemler ve hizmetler', ja: '国や組織が効果的に機能するために使用する、交通機関や電力供給などの基本的なシステムやサービス' },
          examples: [
            {
              id: 'w43-m1-e1',
              sentence: 'The country needs to invest more money in its aging transport infrastructure.',
              translation: { ru: 'Стране необходимо вкладывать больше денег в свою устаревающую транспортную инфраструктуру.', zh: '该国需要向其老化的交通基础设施投入更多资金。', es: 'El país necesita invertir más dinero en su envejecida infraestructura de transporte.', fr: 'Le pays doit investir davantage d\\'argent dans ses infrastructures de transport vieillissantes.', de: 'Das Land muss mehr Geld in seine veraltete Verkehrsinfrastruktur investieren.', tr: 'Ülkenin yaşlanan ulaşım altyapısına daha fazla para yatırması gerekiyor.', ja: '国は老朽化し​​た交通インフラにもっと投資する必要があります。' }
            },
            {
              id: 'w43-m1-e2',
              sentence: 'Building new schools and hospitals will greatly improve the city\\'s infrastructure.',
              translation: { ru: 'Строительство новых школ и больниц значительно улучшит инфраструктуру города.', zh: '建立新的学校和医院将大大改善城市的基础设施。', es: 'La construcción de nuevas escuelas y hospitales mejorará en gran medida la infraestructura de la ciudad.', fr: 'La construction de nouvelles écoles et de nouveaux hôpitaux améliorera grandement les infrastructures de la ville.', de: 'Der Bau neuer Schulen und Krankenhäuser wird die Infrastruktur der Stadt erheblich verbessern.', tr: 'Yeni okullar ve hastaneler inşa etmek şehrin altyapısını büyük ölçüde iyileştirecektir.', ja: '新しい学校や病院の建設は、都市のインフラを大幅に改善します。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w44',
      word: 'regulation',
      pronunciation: '/ˌrɛɡjʊˈleɪʃən/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['rule', 'law', 'guideline'],
      collocations: ['strict regulations', 'safety regulations'],
      translations: { ru: 'регулирование / правило', zh: '规定 / 管理', es: 'regulación', fr: 'règlement', de: 'Vorschrift / Regelung', tr: 'yönetmelik / kural', ja: '規制 / 規則' },
      meanings: [
        {
          id: 'w44-m1',
          definition: 'an official rule or the act of controlling something',
          translation: { ru: 'официальное правило или процесс управления чем-либо', zh: '官方规则或控制某事的行为', es: 'una regla oficial o el acto de controlar algo', fr: 'une règle officielle ou le fait de contrôler quelque chose', de: 'eine offizielle Regel oder der Akt der Kontrolle über etwas', tr: 'resmi bir kural veya bir şeyi kontrol etme eylemi', ja: '公式な規則、または何かを制御する行為' },
          examples: [
            {
              id: 'w44-m1-e1',
              sentence: 'New safety regulations have been introduced in the workplace.',
              translation: { ru: 'На рабочем месте были введены новые правила техники безопасности.', zh: '工作场所引入了新的安全规定。', es: 'Se han introducido nuevas regulaciones de seguridad en el lugar de trabajo.', fr: 'De nouvelles règles de sécurité ont été introduites sur le lieu de travail.', de: 'Am Arbeitsplatz wurden neue Sicherheitsvorschriften eingeführt.', tr: 'İşyerinde yeni güvenlik yönetmelikleri uygulamaya konuldu.', ja: '職場で新しい安全規制が導入されました。' }
            },
            {
              id: 'w44-m1-e2',
              sentence: 'Strict environmental regulations are necessary to reduce air pollution.',
              translation: { ru: 'Строгие экологические нормы необходимы для снижения загрязнения воздуха.', zh: '严格的环境法规对于减少空气污染是必要的。', es: 'Las estrictas regulaciones ambientales son necesarias para reducir la contaminación del aire.', fr: 'Des réglementations environnementales strictes sont nécessaires pour réduire la pollution de l\\'air.', de: 'Strenge Umweltvorschriften sind notwendig, um die Luftverschmutzung zu verringern.', tr: 'Hava kirliliğini azaltmak için sıkı çevre düzenlemeleri gereklidir.', ja: '大気汚染を減らすためには、厳しい環境規制が必要です。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w45',
      word: 'sustain',
      pronunciation: '/səˈsteɪn/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['maintain', 'keep up', 'support'],
      collocations: ['sustain economic growth', 'difficult to sustain'],
      translations: { ru: 'поддерживать / сохранять', zh: '维持 / 保持', es: 'sostener', fr: 'maintenir', de: 'aufrechterhalten', tr: 'sürdürmek', ja: '維持する' },
      meanings: [
        {
          id: 'w45-m1',
          definition: 'to cause or allow something to continue for a period of time',
          translation: { ru: 'заставлять или позволять чему-либо продолжаться в течение определенного периода времени', zh: '导致或允许某事持续一段时间', es: 'causar o permitir que algo continúe por un período de tiempo', fr: 'provoquer ou permettre à quelque chose de continuer pendant une période de temps', de: 'verursachen oder zulassen, dass etwas über einen bestimmten Zeitraum andauert', tr: 'bir şeyin bir süre devam etmesine neden olmak veya izin vermek', ja: '何かが一定期間続くようにする、または許可する' },
          examples: [
            {
              id: 'w45-m1-e1',
              sentence: 'The economy has been growing rapidly, but this level of growth is hard to sustain.',
              translation: { ru: 'Экономика быстро росла, но такой уровень роста трудно поддерживать.', zh: '经济一直在快速增长，但这种增长水平很难维持。', es: 'La economía ha estado creciendo rápidamente, pero este nivel de crecimiento es difícil de sostener.', fr: 'L\\'économie a connu une croissance rapide, mais ce niveau de croissance est difficile à maintenir.', de: 'Die Wirtschaft ist schnell gewachsen, aber dieses Wachstumsniveau ist schwer aufrechtzuerhalten.', tr: 'Ekonomi hızla büyüyor, ancak bu büyüme seviyesini sürdürmek zor.', ja: '経済は急速に成長していますが、このレベルの成長を維持するのは困難です。' }
            },
            {
              id: 'w45-m1-e2',
              sentence: 'He found it difficult to sustain his interest in the project after several months.',
              translation: { ru: 'Ему было трудно сохранять интерес к проекту спустя несколько месяцев.', zh: '几个月后，他发现很难保持对该项目的兴趣。', es: 'Le resultó difícil mantener su interés en el proyecto después de varios meses.', fr: 'Il a trouvé difficile de maintenir son intérêt pour le projet après plusieurs mois.', de: 'Es fiel ihm schwer, sein Interesse an dem Projekt nach einigen Monaten aufrechtzuerhalten.', tr: 'Birkaç ay sonra projeye olan ilgisini sürdürmekte zorlandı.', ja: '数ヶ月後、彼はそのプロジェクトへの関心を維持するのが難しいと感じました。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w46',
      word: 'welfare',
      pronunciation: '/ˈwɛlfɛər/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['well-being', 'benefit', 'health'],
      collocations: ['animal welfare', 'child welfare'],
      translations: { ru: 'благосостояние', zh: '福利 / 幸福', es: 'bienestar', fr: 'bien-être', de: 'Wohlergehen / Sozialhilfe', tr: 'refah', ja: '福祉' },
      meanings: [
        {
          id: 'w46-m1',
          definition: 'physical and mental health and happiness, especially of a person',
          translation: { ru: 'физическое и психическое здоровье и счастье, особенно человека', zh: '身心健康和幸福，尤其是对一个人而言', es: 'salud física y mental y felicidad, especialmente de una persona', fr: 'santé physique et mentale et bonheur, en particulier d\\'une personne', de: 'körperliche und geistige Gesundheit und Glück, insbesondere einer Person', tr: 'fiziksel ve zihinsel sağlık ve mutluluk, özellikle bir kişinin', ja: '身体的・精神的な健康と幸福、特に個人の' },
          examples: [
            {
              id: 'w46-m1-e1',
              sentence: 'The government has promised to improve the welfare of vulnerable families.',
              translation: { ru: 'Правительство пообещало улучшить благосостояние уязвимых семей.', zh: '政府已承诺改善弱势家庭的福利。', es: 'El gobierno ha prometido mejorar el bienestar de las familias vulnerables.', fr: 'Le gouvernement a promis d\\'améliorer le bien-être des familles vulnérables.', de: 'Die Regierung hat versprochen, das Wohlergehen gefährdeter Familien zu verbessern.', tr: 'Hükümet savunmasız ailelerin refahını iyileştirme sözü verdi.', ja: '政府は社会的弱者の家族の福祉を改善すると約束した。' }
            },
            {
              id: 'w46-m1-e2',
              sentence: 'Animal welfare groups are protesting against the use of animals in circuses.',
              translation: { ru: 'Группы по защите животных протестуют против использования животных в цирках.', zh: '动物福利组织正在抗议在马戏团中使用动物。', es: 'Los grupos de bienestar animal están protestando contra el uso de animales en los circos.', fr: 'Les groupes de protection des animaux protestent contre l\\'utilisation d\\'animaux dans les cirques.', de: 'Tierschutzgruppen protestieren gegen den Einsatz von Tieren in Zirkussen.', tr: 'Hayvan refahı grupları sirklerde hayvanların kullanılmasını protesto ediyor.', ja: '動物福祉団体はサーカスでの動物の使用に抗議している。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w47',
      word: 'proportion',
      pronunciation: '/prəˈpɔːʃən/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['part', 'share', 'percentage'],
      collocations: ['large proportion', 'significant proportion'],
      translations: { ru: 'пропорция / доля', zh: '比例 / 部分', es: 'proporción', fr: 'proportion', de: 'Anteil', tr: 'oran / kısım', ja: '割合 / 部分' },
      meanings: [
        {
          id: 'w47-m1',
          definition: 'the number or amount of a group or part of something when compared to the whole',
          translation: { ru: 'число или количество группы или части чего-либо по сравнению с целым', zh: '与整体相比，一组或某物一部分的数量或多少', es: 'el número o la cantidad de un grupo o parte de algo en comparación con el todo', fr: 'le nombre ou la quantité d\\'un groupe ou d\\'une partie de quelque chose par rapport à l\\'ensemble', de: 'die Anzahl oder Menge einer Gruppe oder eines Teils von etwas im Vergleich zum Ganzen', tr: 'bütünüyle karşılaştırıldığında bir grubun veya bir şeyin bir parçasının sayısı veya miktarı', ja: '全体と比較したグループまたは何かの部分の数または量' },
          examples: [
            {
              id: 'w47-m1-e1',
              sentence: 'A large proportion of the city\\'s population relies on public transportation.',
              translation: { ru: 'Большая часть населения города полагается на общественный транспорт.', zh: '该市很大一部分人口依赖公共交通工具。', es: 'Una gran proporción de la población de la ciudad depende del transporte público.', fr: 'Une grande proportion de la population de la ville dépend des transports en commun.', de: 'Ein großer Teil der Stadtbevölkerung ist auf öffentliche Verkehrsmittel angewiesen.', tr: 'Şehir nüfusunun büyük bir kısmı toplu taşımaya güveniyor.', ja: '市の人口の大部分は公共交通機関に依存しています。' }
            },
            {
              id: 'w47-m1-e2',
              sentence: 'Children make up a significant proportion of the refugees arriving at the border.',
              translation: { ru: 'Дети составляют значительную долю беженцев, прибывающих на границу.', zh: '儿童占到达边境的难民的很大一部分。', es: 'Los niños constituyen una proporción significativa de los refugiados que llegan a la frontera.', fr: 'Les enfants représentent une proportion importante des réfugiés arrivant à la frontière.', de: 'Kinder machen einen erheblichen Teil der an der Grenze ankommenden Flüchtlinge aus.', tr: 'Çocuklar sınıra gelen mültecilerin önemli bir bölümünü oluşturuyor.', ja: '子供たちは国境に到着する難民のかなりの割合を占めています。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w48',
      word: 'urban',
      pronunciation: '/ˈɜːbən/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['city', 'civic', 'metropolitan'],
      collocations: ['urban areas', 'urban development'],
      translations: { ru: 'городской', zh: '城市的', es: 'urbano', fr: 'urbain', de: 'städtisch', tr: 'kentsel', ja: '都市の' },
      meanings: [
        {
          id: 'w48-m1',
          definition: 'of or in a city or town',
          translation: { ru: 'относящийся к городу', zh: '城市的或在城镇中的', es: 'de o en una ciudad o pueblo', fr: 'd\\'une ou dans une ville ou un village', de: 'in oder von einer Stadt', tr: 'bir şehir veya kasabaya ait veya orada bulunan', ja: '都市または町の、または都市または町にある' },
          examples: [
            {
              id: 'w48-m1-e1',
              sentence: 'Pollution has become a major problem in many large urban areas.',
              translation: { ru: 'Загрязнение стало серьезной проблемой во многих крупных городских районах.', zh: '污染已成为许多大城市地区的一个主要问题。', es: 'La contaminación se ha convertido en un problema importante en muchas grandes áreas urbanas.', fr: 'La pollution est devenue un problème majeur dans de nombreuses grandes zones urbaines.', de: 'Umweltverschmutzung ist in vielen großen städtischen Gebieten zu einem großen Problem geworden.', tr: 'Kirlilik, birçok büyük kentsel alanda önemli bir sorun haline gelmiştir.', ja: '汚染は多くの大都市圏で大きな問題となっています。' }
            },
            {
              id: 'w48-m1-e2',
              sentence: 'Urban development must be carefully planned to preserve green spaces.',
              translation: { ru: 'Развитие городов должно тщательно планироваться, чтобы сохранить зеленые зоны.', zh: '必须精心规划城市发展以保护绿地。', es: 'El desarrollo urbano debe planificarse cuidadosamente para preservar los espacios verdes.', fr: 'Le développement urbain doit être soigneusement planifié pour préserver les espaces verts.', de: 'Die Stadtentwicklung muss sorgfältig geplant werden, um Grünflächen zu erhalten.', tr: 'Yeşil alanları korumak için kentsel gelişim dikkatlice planlanmalıdır.', ja: '緑地を保護するために、都市開発は慎重に計画されなければなりません。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w49',
      word: 'contemporary',
      pronunciation: '/kənˈtɛmpərəri/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['modern', 'current', 'present-day'],
      collocations: ['contemporary art', 'contemporary society'],
      translations: { ru: 'современный', zh: '当代的', es: 'contemporáneo', fr: 'contemporain', de: 'zeitgenössisch', tr: 'çağdaş', ja: '現代の' },
      meanings: [
        {
          id: 'w49-m1',
          definition: 'existing or happening now',
          translation: { ru: 'существующий или происходящий в настоящее время', zh: '现在存在的或正在发生的', es: 'existente o que sucede ahora', fr: 'existant ou se produisant maintenant', de: 'jetzt existierend oder passierend', tr: 'şu anda var olan veya meydana gelen', ja: '現在存在している、または起こっている' },
          examples: [
            {
              id: 'w49-m1-e1',
              sentence: 'The museum has a fascinating exhibition of contemporary art from South America.',
              translation: { ru: 'В музее проходит увлекательная выставка современного искусства из Южной Америки.', zh: '博物馆举办了一场引人入胜的南美当代艺术展。', es: 'El museo tiene una fascinante exposición de arte contemporáneo de América del Sur.', fr: 'Le musée présente une exposition fascinante d\\'art contemporain d\\'Amérique du Sud.', de: 'Das Museum hat eine faszinierende Ausstellung zeitgenössischer Kunst aus Südamerika.', tr: 'Müzede Güney Amerika\\'dan büyüleyici bir çağdaş sanat sergisi var.', ja: '美術館では南米の魅力的な現代美術の展覧会が開催されています。' }
            },
            {
              id: 'w49-m1-e2',
              sentence: 'Many traditional ideas are no longer relevant in contemporary society.',
              translation: { ru: 'Многие традиционные идеи больше не актуальны в современном обществе.', zh: '许多传统观念在当代社会不再适用。', es: 'Muchas ideas tradicionales ya no son relevantes en la sociedad contemporánea.', fr: 'De nombreuses idées traditionnelles ne sont plus pertinentes dans la société contemporaine.', de: 'Viele traditionelle Ideen sind in der heutigen Gesellschaft nicht mehr relevant.', tr: 'Geleneksel fikirlerin çoğu çağdaş toplumda artık geçerli değil.', ja: '多くの伝統的な考え方は、現代社会ではもはや関連性がありません。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w50',
      word: 'trend',
      pronunciation: '/trɛnd/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['tendency', 'movement', 'direction'],
      collocations: ['current trend', 'follow a trend'],
      translations: { ru: 'тенденция / тренд', zh: '趋势', es: 'tendencia', fr: 'tendance', de: 'Trend', tr: 'eğilim', ja: '傾向 / トレンド' },
      meanings: [
        {
          id: 'w50-m1',
          definition: 'a general development or change in a situation or in the way that people are behaving',
          translation: { ru: 'общее развитие или изменение ситуации или поведения людей', zh: '情况或人们行为方式的总体发展或变化', es: 'un desarrollo o cambio general en una situación o en la forma en que las personas se comportan', fr: 'un développement général ou un changement dans une situation ou dans la façon dont les gens se comportent', de: 'eine allgemeine Entwicklung oder Veränderung einer Situation oder der Art und Weise, wie sich Menschen verhalten', tr: 'bir durumdaki veya insanların davranış biçimindeki genel bir gelişme veya değişiklik', ja: '状況や人々の行動における一般的な発展や変化' },
          examples: [
            {
              id: 'w50-m1-e1',
              sentence: 'There is a growing trend towards eating healthier, plant-based foods.',
              translation: { ru: 'Наблюдается растущая тенденция к употреблению более здоровой растительной пищи.', zh: '人们越来越倾向于吃更健康的植物性食物。', es: 'Hay una tendencia creciente hacia comer alimentos más saludables a base de plantas.', fr: 'Il y a une tendance croissante à manger des aliments plus sains à base de plantes.', de: 'Es gibt einen wachsenden Trend zu einer gesünderen, pflanzlichen Ernährung.', tr: 'Daha sağlıklı, bitki bazlı yiyecekler yemeye doğru artan bir eğilim var.', ja: 'より健康的な植物由来の食品を食べるという傾向が高まっています。' }
            },
            {
              id: 'w50-m1-e2',
              sentence: 'The research shows a downward trend in the number of people watching traditional television.',
              translation: { ru: 'Исследование показывает тенденцию к снижению числа людей, смотрящих традиционное телевидение.', zh: '研究表明，观看传统电视的人数呈下降趋势。', es: 'La investigación muestra una tendencia a la baja en el número de personas que ven la televisión tradicional.', fr: 'La recherche montre une tendance à la baisse du nombre de personnes regardant la télévision traditionnelle.', de: 'Die Forschung zeigt einen Abwärtstrend bei der Zahl der Menschen, die traditionelles Fernsehen schauen.', tr: 'Araştırma, geleneksel televizyon izleyenlerin sayısında düşüş eğilimi olduğunu gösteriyor.', ja: '調査によると、従来のテレビを見る人の数は減少傾向にあります。' }
            }
          ]
        }
      ]
    }
  ],
  reading: {
    title: 'The Changing Face of Cities',
    content: "Our contemporary world is experiencing a significant shift. Today, a large proportion of the global population lives in urban areas, and this trend is only accelerating. As cities become more culturally diverse, they require massive changes to their infrastructure to sustain this rapid growth.\n\nLocal governments must balance economic expansion with public welfare, ensuring that both long-term residents and newcomers have access to basic services. This often means introducing a new regulation to manage housing or protect green spaces. While domestic businesses thrive in these densely populated centers, the challenge lies in creating sustainable environments. If cities fail to prepare for these changes, the resulting social pressures could be overwhelming."
  }
};
`;

fs.writeFileSync('src/data/b2-lesson-5.ts', lesson5);
