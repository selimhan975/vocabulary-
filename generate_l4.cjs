const fs = require('fs');

const lesson4 = `import { Lesson } from '../types';

export const b2Lesson4: Lesson = {
  id: 'b2-l4',
  level: 'B2',
  number: 4,
  title: 'Communication & Relationships',
  words: [
    {
      id: 'w31',
      word: 'clarify',
      pronunciation: '/ˈklærɪfaɪ/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['explain', 'clear up', 'simplify'],
      collocations: ['clarify a point', 'seek to clarify'],
      translations: { ru: 'прояснить', zh: '澄清', es: 'aclarar', fr: 'clarifier', de: 'klären', tr: 'açıklığa kavuşturmak', ja: '明確にする' },
      meanings: [
        {
          id: 'w31-m1',
          definition: 'to make something clear or easier to understand by explaining it in more detail',
          translation: { ru: 'сделать что-то ясным или более легким для понимания, объяснив это более подробно', zh: '通过更详细地解释使某事清楚或更容易理解', es: 'hacer algo claro o más fácil de entender explicándolo con más detalle', fr: 'rendre quelque chose clair ou plus facile à comprendre en l\\'expliquant plus en détail', de: 'etwas durch detailliertere Erklärungen klarer oder leichter verständlich machen', tr: 'bir şeyi daha ayrıntılı açıklayarak netleştirmek veya anlaşılmasını kolaylaştırmak', ja: 'より詳細に説明することで、何かを明確にしたり理解しやすくしたりする' },
          examples: [
            {
              id: 'w31-m1-e1',
              sentence: 'Could you please clarify what you mean by "unexpected costs"?',
              translation: { ru: 'Не могли бы вы прояснить, что вы имеете в виду под «непредвиденными расходами»?', zh: '请您澄清一下“意外费用”是什么意思好吗？', es: '¿Podría aclarar a qué se refiere con "costos inesperados"?', fr: 'Pourriez-vous clarifier ce que vous entendez par « coûts imprévus » ?', de: 'Könnten Sie bitte klären, was Sie mit "unerwarteten Kosten" meinen?', tr: '"Beklenmedik maliyetler" derken ne demek istediğinizi lütfen açıklar mısınız?', ja: '「予期せぬ費用」とはどういう意味か明確にしていただけますか？' }
            },
            {
              id: 'w31-m1-e2',
              sentence: 'The speaker had to clarify his statement after it was misunderstood by the press.',
              translation: { ru: 'Оратору пришлось прояснить свое заявление после того, как пресса неправильно его поняла.', zh: '在被媒体误解后，发言人不得不澄清他的声明。', es: 'El orador tuvo que aclarar su declaración después de que la prensa la malinterpretara.', fr: 'L\\'orateur a dû clarifier sa déclaration après qu\\'elle ait été mal comprise par la presse.', de: 'Der Sprecher musste seine Aussage klären, nachdem sie von der Presse missverstanden worden war.', tr: 'Konuşmacı, basın tarafından yanlış anlaşıldıktan sonra açıklamasını netleştirmek zorunda kaldı.', ja: '講演者は、プレスに誤解された後、声明を明確にしなければなりませんでした。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w32',
      word: 'convince',
      pronunciation: '/kənˈvɪns/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['persuade', 'satisfy', 'assure'],
      collocations: ['convince someone', 'try to convince'],
      translations: { ru: 'убеждать', zh: '说服', es: 'convencer', fr: 'convaincre', de: 'überzeugen', tr: 'ikna etmek', ja: '納得させる' },
      meanings: [
        {
          id: 'w32-m1',
          definition: 'to persuade someone or make someone certain',
          translation: { ru: 'уговорить кого-то или сделать кого-то уверенным в чем-то', zh: '说服某人或使某人确信', es: 'persuadir a alguien o hacer que alguien esté seguro', fr: 'persuader quelqu\\'un ou rendre quelqu\\'un certain', de: 'jemanden überreden oder sicher machen', tr: 'birini ikna etmek veya emin olmasını sağlamak', ja: '誰かを説得する、または確信させる' },
          examples: [
            {
              id: 'w32-m1-e1',
              sentence: 'He managed to convince the jury of his innocence.',
              translation: { ru: 'Ему удалось убедить присяжных в своей невиновности.', zh: '他成功地说服了陪审团相信他是无辜的。', es: 'Logró convencer al jurado de su inocencia.', fr: 'Il a réussi à convaincre le jury de son innocence.', de: 'Es gelang ihm, die Geschworenen von seiner Unschuld zu überzeugen.', tr: 'Jüriyi masumiyetine ikna etmeyi başardı.', ja: '彼は自分が無罪であることを陪審員に納得させることができた。' }
            },
            {
              id: 'w32-m1-e2',
              sentence: 'I am trying to convince my parents to let me study abroad next year.',
              translation: { ru: 'Я пытаюсь убедить родителей отпустить меня учиться за границу в следующем году.', zh: '我正在努力说服我父母明年让我出国留学。', es: 'Estoy tratando de convencer a mis padres de que me dejen estudiar en el extranjero el próximo año.', fr: 'J\\'essaie de convaincre mes parents de me laisser étudier à l\\'étranger l\\'année prochaine.', de: 'Ich versuche, meine Eltern davon zu überzeugen, mich nächstes Jahr im Ausland studieren zu lassen.', tr: 'Ailemi gelecek yıl yurtdışında okumama izin vermeleri için ikna etmeye çalışıyorum.', ja: '私は来年海外留学を許可してもらうよう両親を説得しようとしています。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w33',
      word: 'perspective',
      pronunciation: '/pəˈspɛktɪv/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['viewpoint', 'outlook', 'standpoint'],
      collocations: ['different perspective', 'from my perspective'],
      translations: { ru: 'перспектива / точка зрения', zh: '观点 / 视角', es: 'perspectiva', fr: 'perspective', de: 'Perspektive', tr: 'bakış açısı', ja: '視点' },
      meanings: [
        {
          id: 'w33-m1',
          definition: 'a particular way of considering something',
          translation: { ru: 'определенный способ рассмотрения чего-либо, точка зрения', zh: '思考某事的特定方式，观点', es: 'una forma particular de considerar algo', fr: 'une façon particulière de considérer quelque chose', de: 'eine bestimmte Art, etwas zu betrachten', tr: 'bir şeyi değerlendirmenin belirli bir yolu', ja: '何かを考慮する特定の方法、視点' },
          examples: [
            {
              id: 'w33-m1-e1',
              sentence: 'Traveling to different countries helps you gain a new perspective on life.',
              translation: { ru: 'Путешествия в разные страны помогают получить новый взгляд на жизнь.', zh: '去不同的国家旅行有助于你获得新的人生视角。', es: 'Viajar a diferentes países te ayuda a obtener una nueva perspectiva de la vida.', fr: 'Voyager dans différents pays vous aide à acquérir une nouvelle perspective sur la vie.', de: 'Reisen in verschiedene Länder hilft Ihnen, eine neue Perspektive auf das Leben zu gewinnen.', tr: 'Farklı ülkelere seyahat etmek, hayata yeni bir bakış açısı kazanmanıza yardımcı olur.', ja: '様々な国を旅することは、人生に新しい視点を得るのに役立ちます。' }
            },
            {
              id: 'w33-m1-e2',
              sentence: 'From a financial perspective, this investment makes a lot of sense.',
              translation: { ru: 'С финансовой точки зрения, эта инвестиция имеет большой смысл.', zh: '从财务的角度来看，这项投资非常有意义。', es: 'Desde una perspectiva financiera, esta inversión tiene mucho sentido.', fr: 'D\\'un point de vue financier, cet investissement est très logique.', de: 'Aus finanzieller Sicht ist diese Investition sehr sinnvoll.', tr: 'Finansal bir bakış açısıyla, bu yatırım çok mantıklı.', ja: '財務的な視点から見ると、この投資は非常に理にかなっています。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w34',
      word: 'interact',
      pronunciation: '/ˌɪntərˈækt/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['communicate', 'connect', 'mingle'],
      collocations: ['interact with', 'socially interact'],
      translations: { ru: 'взаимодействовать', zh: '互动 / 交流', es: 'interactuar', fr: 'interagir', de: 'interagieren', tr: 'etkileşimde bulunmak', ja: '相互作用する / 交流する' },
      meanings: [
        {
          id: 'w34-m1',
          definition: 'to communicate with or react to each other',
          translation: { ru: 'общаться с кем-либо или реагировать друг на друга', zh: '互相沟通或对彼此做出反应', es: 'comunicarse o reaccionar entre sí', fr: 'communiquer ou réagir l\\'un à l\\'autre', de: 'miteinander kommunizieren oder aufeinander reagieren', tr: 'birbirleriyle iletişim kurmak veya tepki vermek', ja: '互いにコミュニケーションをとる、または反応し合う' },
          examples: [
            {
              id: 'w34-m1-e1',
              sentence: 'Online learning often changes the way students interact with their teachers.',
              translation: { ru: 'Онлайн-обучение часто меняет то, как студенты взаимодействуют со своими преподавателями.', zh: '在线学习经常改变学生与老师互动的方式。', es: 'El aprendizaje en línea a menudo cambia la forma en que los estudiantes interactúan con sus maestros.', fr: 'L\\'apprentissage en ligne modifie souvent la façon dont les étudiants interagissent avec leurs enseignants.', de: 'Online-Lernen verändert oft die Art und Weise, wie Schüler mit ihren Lehrern interagieren.', tr: 'Çevrimiçi öğrenme, öğrencilerin öğretmenleriyle etkileşim kurma biçimini sıklıkla değiştirir.', ja: 'オンライン学習は、生徒が教師と交流する方法を頻繁に変えます。' }
            },
            {
              id: 'w34-m1-e2',
              sentence: 'He prefers jobs where he can interact directly with customers.',
              translation: { ru: 'Он предпочитает работу, где он может напрямую взаимодействовать с клиентами.', zh: '他更喜欢可以直接与客户互动的工作。', es: 'Prefiere trabajos donde pueda interactuar directamente con los clientes.', fr: 'Il préfère les emplois où il peut interagir directement avec les clients.', de: 'Er bevorzugt Jobs, bei denen er direkt mit Kunden interagieren kann.', tr: 'Müşterilerle doğrudan etkileşim kurabileceği işleri tercih ediyor.', ja: '彼は顧客と直接交流できる仕事を好みます。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w35',
      word: 'conflict',
      pronunciation: '/ˈkɒnflɪkt/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['dispute', 'disagreement', 'clash'],
      collocations: ['resolve a conflict', 'internal conflict'],
      translations: { ru: 'конфликт', zh: '冲突 / 矛盾', es: 'conflicto', fr: 'conflit', de: 'Konflikt', tr: 'çatışma', ja: '紛争 / 対立' },
      meanings: [
        {
          id: 'w35-m1',
          definition: 'an active disagreement between people with opposing opinions or principles',
          translation: { ru: 'активное разногласие между людьми с противоположными мнениями или принципами', zh: '持相反观点或原则的人之间积极的意见分歧', es: 'un desacuerdo activo entre personas con opiniones o principios opuestos', fr: 'un désaccord actif entre des personnes ayant des opinions ou des principes opposés', de: 'eine aktive Meinungsverschiedenheit zwischen Menschen mit gegensätzlichen Meinungen oder Prinzipien', tr: 'zıt görüşlere veya ilkelere sahip insanlar arasında aktif bir anlaşmazlık', ja: '反対の意見や原則を持つ人々の間の活発な意見の不一致' },
          examples: [
            {
              id: 'w35-m1-e1',
              sentence: 'The new policy caused a lot of conflict between the management and the staff.',
              translation: { ru: 'Новая политика вызвала много конфликтов между руководством и персоналом.', zh: '新政策在管理层和员工之间引起了很多冲突。', es: 'La nueva política causó mucho conflicto entre la gerencia y el personal.', fr: 'La nouvelle politique a causé beaucoup de conflits entre la direction et le personnel.', de: 'Die neue Richtlinie verursachte viele Konflikte zwischen dem Management und den Mitarbeitern.', tr: 'Yeni politika, yönetim ve personel arasında çok fazla çatışmaya neden oldu.', ja: '新しい方針は、経営陣とスタッフの間に多くの対立を引き起こしました。' }
            },
            {
              id: 'w35-m1-e2',
              sentence: 'It is essential to address workplace conflicts before they escalate into bigger problems.',
              translation: { ru: 'Крайне важно решать конфликты на рабочем месте до того, как они перерастут в более серьезные проблемы.', zh: '在职场冲突升级为更大的问题之前解决它们是至关重要的。', es: 'Es esencial abordar los conflictos en el lugar de trabajo antes de que se conviertan en problemas mayores.', fr: 'Il est essentiel d\\'aborder les conflits au travail avant qu\\'ils ne s\\'aggravent en problèmes plus importants.', de: 'Es ist wichtig, Konflikte am Arbeitsplatz anzugehen, bevor sie zu größeren Problemen eskalieren.', tr: 'İşyeri çatışmalarını daha büyük sorunlara dönüşmeden ele almak çok önemlidir.', ja: '職場の対立がより大きな問題にエスカレートする前に対処することが不可欠です。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w36',
      word: 'interpret',
      pronunciation: '/ɪnˈtɜːprɪt/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['explain', 'understand', 'translate'],
      collocations: ['interpret data', 'difficult to interpret'],
      translations: { ru: 'интерпретировать / толковать', zh: '解释 / 理解为', es: 'interpretar', fr: 'interpréter', de: 'interpretieren / deuten', tr: 'yorumlamak', ja: '解釈する' },
      meanings: [
        {
          id: 'w36-m1',
          definition: 'to decide what the intended meaning of something is',
          translation: { ru: 'решать, каков предполагаемый смысл чего-либо', zh: '决定某事物的预期含义是什么', es: 'decidir cuál es el significado pretendido de algo', fr: 'décider quel est le sens voulu de quelque chose', de: 'entscheiden, was die beabsichtigte Bedeutung von etwas ist', tr: 'bir şeyin kastedilen anlamının ne olduğuna karar vermek', ja: '何かの意図された意味が何であるかを決定する' },
          examples: [
            {
              id: 'w36-m1-e1',
              sentence: 'Different people may interpret the meaning of this poem in entirely different ways.',
              translation: { ru: 'Разные люди могут интерпретировать смысл этого стихотворения совершенно по-разному.', zh: '不同的人可能会以完全不同的方式解释这首诗的含义。', es: 'Diferentes personas pueden interpretar el significado de este poema de maneras completamente diferentes.', fr: 'Différentes personnes peuvent interpréter le sens de ce poème de manières totalement différentes.', de: 'Verschiedene Menschen können die Bedeutung dieses Gedichts auf völlig unterschiedliche Weise interpretieren.', tr: 'Farklı insanlar bu şiirin anlamını tamamen farklı şekillerde yorumlayabilir.', ja: '人によって、この詩の意味をまったく異なる方法で解釈する場合があります。' }
            },
            {
              id: 'w36-m1-e2',
              sentence: 'I did not know how to interpret his sudden silence during the conversation.',
              translation: { ru: 'Я не знал, как расценить его внезапное молчание во время разговора.', zh: '我不知道该如何理解他在谈话中突然的沉默。', es: 'No sabía cómo interpretar su repentino silencio durante la conversación.', fr: 'Je ne savais pas comment interpréter son silence soudain pendant la conversation.', de: 'Ich wusste nicht, wie ich sein plötzliches Schweigen während des Gesprächs deuten sollte.', tr: 'Konuşma sırasındaki ani sessizliğini nasıl yorumlayacağımı bilemedim.', ja: '会話中の彼の突然の沈黙をどう解釈していいのかわかりませんでした。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w37',
      word: 'mutual',
      pronunciation: '/ˈmjuːtʃuəl/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['shared', 'common', 'reciprocal'],
      collocations: ['mutual respect', 'mutual friend'],
      translations: { ru: 'взаимный / общий', zh: '相互的 / 共同的', es: 'mutuo', fr: 'mutuel', de: 'gegenseitig', tr: 'karşılıklı', ja: '相互の' },
      meanings: [
        {
          id: 'w37-m1',
          definition: '(of two or more people or groups) feeling the same emotion, or doing the same thing to or for each other',
          translation: { ru: 'испытывающий одинаковые эмоции или делающий то же самое по отношению друг к другу', zh: '（两个或多个个人或群体）有相同的情感，或为彼此做同样的事情', es: '(de dos o más personas o grupos) sentir la misma emoción, o hacer lo mismo el uno al o para el otro', fr: '(de deux ou plusieurs personnes ou groupes) ressentir la même émotion, ou faire la même chose l\\'un envers l\\'autre', de: '(von zwei oder mehr Personen oder Gruppen), die das gleiche Gefühl haben oder das Gleiche für- oder miteinander tun', tr: '(iki veya daha fazla kişi veya grubun) aynı duyguyu hissetmesi veya birbirlerine aynı şeyi yapması', ja: '（2人以上の人またはグループについて）同じ感情を抱く、または互いに同じことをする' },
          examples: [
            {
              id: 'w37-m1-e1',
              sentence: 'A healthy partnership must be based on trust and mutual respect.',
              translation: { ru: 'Здоровое партнерство должно основываться на доверии и взаимном уважении.', zh: '健康的伙伴关系必须建立在信任和相互尊重的基础上。', es: 'Una asociación saludable debe basarse en la confianza y el respeto mutuo.', fr: 'Un partenariat sain doit être fondé sur la confiance et le respect mutuel.', de: 'Eine gesunde Partnerschaft muss auf Vertrauen und gegenseitigem Respekt basieren.', tr: 'Sağlıklı bir ortaklık, güvene ve karşılıklı saygıya dayanmalıdır.', ja: '健全なパートナーシップは、信頼と相互の尊敬に基づいている必要があります。' }
            },
            {
              id: 'w37-m1-e2',
              sentence: 'We decided to end the business agreement by mutual consent.',
              translation: { ru: 'Мы решили расторгнуть коммерческое соглашение по обоюдному согласию.', zh: '我们决定经双方同意终止商业协议。', es: 'Decidimos rescindir el acuerdo comercial de mutuo acuerdo.', fr: 'Nous avons décidé de mettre fin à l\\'accord commercial par consentement mutuel.', de: 'Wir haben beschlossen, die Geschäftsvereinbarung in gegenseitigem Einvernehmen zu beenden.', tr: 'İş anlaşmasını karşılıklı rızayla bitirmeye karar verdik.', ja: '私たちは相互の同意により、ビジネス契約を終了することにしました。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w38',
      word: 'barrier',
      pronunciation: '/ˈbæriər/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['obstacle', 'hurdle', 'block'],
      collocations: ['language barrier', 'overcome a barrier'],
      translations: { ru: 'барьер / препятствие', zh: '障碍', es: 'barrera', fr: 'barrière', de: 'Barriere', tr: 'engel', ja: '障壁' },
      meanings: [
        {
          id: 'w38-m1',
          definition: 'anything that prevents people from being together or understanding each other',
          translation: { ru: 'всё, что мешает людям быть вместе или понимать друг друга', zh: '阻碍人们在一起或相互理解的任何事物', es: 'cualquier cosa que impida que las personas estén juntas o se entiendan', fr: 'tout ce qui empêche les gens d\\'être ensemble ou de se comprendre', de: 'alles, was Menschen daran hindert, zusammen zu sein oder einander zu verstehen', tr: 'insanların bir arada olmasını veya birbirini anlamasını engelleyen herhangi bir şey', ja: '人々が一緒にいたり、互いを理解したりするのを妨げるすべてのもの' },
          examples: [
            {
              id: 'w38-m1-e1',
              sentence: 'The language barrier made it difficult for the tourists to ask for directions.',
              translation: { ru: 'Языковой барьер мешал туристам спросить дорогу.', zh: '语言障碍使游客很难问路。', es: 'La barrera del idioma dificultó que los turistas preguntaran por direcciones.', fr: 'La barrière de la langue a empêché les touristes de demander leur chemin.', de: 'Die Sprachbarriere machte es den Touristen schwer, nach dem Weg zu fragen.', tr: 'Dil engeli turistlerin yol sormasını zorlaştırdı.', ja: '言葉の壁のせいで、観光客は道を尋ねるのが困難でした。' }
            },
            {
              id: 'w38-m1-e2',
              sentence: 'Lack of education can be a serious barrier to finding a good job.',
              translation: { ru: 'Недостаток образования может стать серьезным препятствием для поиска хорошей работы.', zh: '缺乏教育可能是寻找好工作的严重障碍。', es: 'La falta de educación puede ser una barrera importante para encontrar un buen trabajo.', fr: 'Le manque d\\'éducation peut être un obstacle majeur pour trouver un bon emploi.', de: 'Mangelnde Bildung kann ein ernsthaftes Hindernis bei der Suche nach einem guten Arbeitsplatz sein.', tr: 'Eğitim eksikliği iyi bir iş bulmanın önünde ciddi bir engel olabilir.', ja: '教育の不足は、良い仕事を見つける上での深刻な障壁になる可能性があります。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w39',
      word: 'feedback',
      pronunciation: '/ˈfiːdbæk/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['reaction', 'response', 'assessment'],
      collocations: ['positive feedback', 'provide feedback'],
      translations: { ru: 'обратная связь / отзыв', zh: '反馈', es: 'comentarios', fr: 'retour', de: 'Feedback', tr: 'geri bildirim', ja: 'フィードバック / 反応' },
      meanings: [
        {
          id: 'w39-m1',
          definition: 'information or statements of opinion about something, such as a new product, that can tell you if it is successful or liked',
          translation: { ru: 'информация или мнения о чем-либо, например, о новом продукте, которые показывают, насколько это успешно', zh: '有关某事（如新产品）的信息或意见陈述，可以告诉您它是否成功或受欢迎', es: 'información o declaraciones de opinión sobre algo, como un nuevo producto, que pueden indicarle si tiene éxito o es apreciado', fr: 'informations ou déclarations d\\'opinion sur quelque chose, comme un nouveau produit, qui peuvent vous dire s\\'il a du succès ou est apprécié', de: 'Informationen oder Meinungsäußerungen zu etwas, wie z. B. einem neuen Produkt, die Ihnen sagen können, ob es erfolgreich ist oder gemocht wird', tr: 'yeni bir ürün gibi bir şey hakkında, başarılı olup olmadığını veya beğenilip beğenilmediğini size söyleyebilecek bilgi veya görüş ifadeleri', ja: '新製品など、成功しているか、好まれているかを示すことができる、何かに関する情報または意見の陳述' },
          examples: [
            {
              id: 'w39-m1-e1',
              sentence: 'We have received a lot of positive feedback from customers about the new design.',
              translation: { ru: 'Мы получили много положительных отзывов от клиентов о новом дизайне.', zh: '关于新设计，我们收到了很多客户的积极反馈。', es: 'Hemos recibido muchos comentarios positivos de los clientes sobre el nuevo diseño.', fr: 'Nous avons reçu de nombreux retours positifs des clients sur le nouveau design.', de: 'Wir haben viele positive Rückmeldungen von Kunden zum neuen Design erhalten.', tr: 'Yeni tasarımla ilgili müşterilerden çok sayıda olumlu geri bildirim aldık.', ja: '新しいデザインについて、顧客から多くの好意的なフィードバックをいただきました。' }
            },
            {
              id: 'w39-m1-e2',
              sentence: 'Constructive feedback helps employees understand how they can improve their skills.',
              translation: { ru: 'Конструктивная обратная связь помогает сотрудникам понять, как они могут улучшить свои навыки.', zh: '建设性的反馈有助于员工了解如何提高自己的技能。', es: 'Los comentarios constructivos ayudan a los empleados a comprender cómo pueden mejorar sus habilidades.', fr: 'Les retours constructifs aident les employés à comprendre comment ils peuvent améliorer leurs compétences.', de: 'Konstruktives Feedback hilft Mitarbeitern zu verstehen, wie sie ihre Fähigkeiten verbessern können.', tr: 'Yapıcı geri bildirim, çalışanların becerilerini nasıl geliştirebileceklerini anlamalarına yardımcı olur.', ja: '建設的なフィードバックは、従業員がスキルを向上させる方法を理解するのに役立ちます。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w40',
      word: 'acknowledge',
      pronunciation: '/əkˈnɒlɪdʒ/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['admit', 'recognize', 'accept'],
      collocations: ['acknowledge a mistake', 'widely acknowledged'],
      translations: { ru: 'признавать / подтверждать', zh: '承认 / 确认', es: 'reconocer', fr: 'reconnaître', de: 'anerkennen / bestätigen', tr: 'kabul etmek', ja: '認める' },
      meanings: [
        {
          id: 'w40-m1',
          definition: 'to accept, admit, or recognize something, or the truth or existence of something',
          translation: { ru: 'принимать, допускать или признавать что-либо, или истинность/существование чего-либо', zh: '接受、承认或认识到某事物，或某事物的真相或存在', es: 'aceptar, admitir o reconocer algo, o la verdad o existencia de algo', fr: 'accepter, admettre ou reconnaître quelque chose, ou la vérité ou l\\'existence de quelque chose', de: 'etwas akzeptieren, zugeben oder anerkennen, oder die Wahrheit oder Existenz von etwas', tr: 'bir şeyi veya bir şeyin gerçeğini veya varlığını kabul etmek veya onaylamak', ja: '何か、あるいは何かの真実や存在を受け入れる、認める、または認識すること' },
          examples: [
            {
              id: 'w40-m1-e1',
              sentence: 'It is important to acknowledge your mistakes if you want to learn from them.',
              translation: { ru: 'Важно признавать свои ошибки, если вы хотите учиться на них.', zh: '如果你想从错误中学习，承认自己的错误是很重要的。', es: 'Es importante reconocer tus errores si quieres aprender de ellos.', fr: 'Il est important de reconnaître vos erreurs si vous voulez en tirer des leçons.', de: 'Es ist wichtig, Ihre Fehler anzuerkennen, wenn Sie daraus lernen wollen.', tr: 'Hatalarınızdan ders çıkarmak istiyorsanız, onları kabul etmek önemlidir.', ja: '間違いから学びたいのであれば、自分の間違いを認めることが重要です。' }
            },
            {
              id: 'w40-m1-e2',
              sentence: 'Please acknowledge receipt of this email as soon as possible.',
              translation: { ru: 'Пожалуйста, подтвердите получение этого электронного письма как можно скорее.', zh: '请尽快确认收到此电子邮件。', es: 'Por favor acuse recibo de este correo electrónico lo antes posible.', fr: 'Veuillez accuser réception de cet e-mail dès que possible.', de: 'Bitte bestätigen Sie den Erhalt dieser E-Mail so schnell wie möglich.', tr: 'Lütfen bu e-postayı aldığınızı en kısa sürede onaylayın.', ja: 'このメールを受け取ったことをできるだけ早く確認してください。' }
            }
          ]
        }
      ]
    }
  ],
  reading: {
    title: 'The Art of Conversation',
    content: "Good communication requires effort from both sides. To effectively interact with others, you must first acknowledge that everyone brings a different perspective to the table. When individuals fail to understand these differences, conflict often arises. The language we use, our tone, and even cultural assumptions can act as a barrier to clear understanding.\n\nWhen a disagreement occurs, it is essential to clarify your own thoughts and carefully interpret what the other person is saying. Rather than just trying to convince someone that you are right, you should seek mutual understanding. Providing honest yet respectful feedback can completely change a conversation. True communication is not just about speaking clearly, but also about listening well enough to bridge any gap between people."
  }
};
`;

fs.writeFileSync('src/data/b2-lesson-4.ts', lesson4);
