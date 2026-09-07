import { Lesson } from '../types';

export const b2Lesson10: Lesson = {
  id: 'b2-l10',
  level: 'B2',
  number: 10,
  title: 'Health & Lifestyle',
  words: [
    {
      id: 'w91',
      word: 'symptom',
      pronunciation: '/ˈsɪmptəm/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['sign', 'indication', 'manifestation'],
      collocations: ['common symptom', 'display symptoms'],
      translations: { ru: 'симптом / признак', zh: '症状', es: 'síntoma', fr: 'symptôme', de: 'Symptom', tr: 'belirti / semptom', ja: '症状' },
      meanings: [
        {
          id: 'w91-m1',
          definition: 'any feeling of illness or physical or mental change that is caused by a particular disease',
          translation: { ru: 'любое чувство болезни или физическое или психическое изменение, вызванное определенным заболеванием', zh: '由特定疾病引起的任何疾病感或身体或精神的变化', es: 'cualquier sensación de enfermedad o cambio físico o mental causado por una enfermedad en particular', fr: 'tout sentiment de maladie ou changement physique ou mental causé par une maladie particulière', de: 'jedes Krankheitsgefühl oder körperliche oder geistige Veränderung, die durch eine bestimmte Krankheit verursacht wird', tr: 'belirli bir hastalığın neden olduğu herhangi bir hastalık hissi veya fiziksel veya zihinsel değişiklik', ja: '特定の病気によって引き起こされる、病気や身体的・精神的な変化の感覚' },
          examples: [
            {
              id: 'w91-m1-e1',
              sentence: 'A persistent cough and a high fever are common symptoms of the flu.',
              translation: { ru: 'Постоянный кашель и высокая температура являются частыми симптомами гриппа.', zh: '持续咳嗽和高烧是流感的常见症状。', es: 'Una tos persistente y fiebre alta son síntomas comunes de la gripe.', fr: 'Une toux persistante et une forte fièvre sont des symptômes courants de la grippe.', de: 'Anhaltender Husten und hohes Fieber sind häufige Symptome der Grippe.', tr: 'Sürekli öksürük ve yüksek ateş, gribin yaygın belirtileridir.', ja: '持続的な咳と高熱はインフルエンザの一般的な症状です。' }
            },
            {
              id: 'w91-m1-e2',
              sentence: 'If you experience any unusual symptoms, you should consult a doctor immediately.',
              translation: { ru: 'Если вы испытываете какие-либо необычные симптомы, вам следует немедленно обратиться к врачу.', zh: '如果您遇到任何异常症状，应立即咨询医生。', es: 'Si experimenta algún síntoma inusual, debe consultar a un médico de inmediato.', fr: 'Si vous ressentez des symptômes inhabituels, vous devez consulter un médecin immédiatement.', de: 'Wenn bei Ihnen ungewöhnliche Symptome auftreten, sollten Sie sofort einen Arzt aufsuchen.', tr: 'Herhangi bir olağandışı belirti yaşarsanız derhal bir doktora danışmalısınız.', ja: '異常な症状が出た場合は、すぐに医師に相談してください。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w92',
      word: 'diagnose',
      pronunciation: '/ˌdaɪəɡˈnoʊs/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['identify', 'determine', 'recognize'],
      collocations: ['diagnose a disease', 'be diagnosed with'],
      translations: { ru: 'диагностировать / ставить диагноз', zh: '诊断', es: 'diagnosticar', fr: 'diagnostiquer', de: 'diagnostizieren', tr: 'teşhis etmek', ja: '診断する' },
      meanings: [
        {
          id: 'w92-m1',
          definition: 'to recognize and name the exact character of a disease or a problem, by examining it',
          translation: { ru: 'распознать и назвать точный характер заболевания или проблемы путем их изучения', zh: '通过检查，识别并说出疾病或问题的确切性质', es: 'reconocer y nombrar el carácter exacto de una enfermedad o problema, al examinarlo', fr: 'reconnaître et nommer le caractère exact d\'une maladie ou d\'un problème, en l\'examinant', de: 'den genauen Charakter einer Krankheit oder eines Problems durch Untersuchung erkennen und benennen', tr: 'inceleyerek bir hastalığın veya sorunun tam niteliğini tanımak ve adlandırmak', ja: '病気や問題の正確な性質を調べて特定し、名前を付けること' },
          examples: [
            {
              id: 'w92-m1-e1',
              sentence: 'The specialist was finally able to diagnose the rare condition after months of testing.',
              translation: { ru: 'Специалист, наконец, смог диагностировать редкое заболевание после месяцев тестирования.', zh: '经过几个月的测试，专家终于能够诊断出这种罕见的疾病。', es: 'El especialista finalmente pudo diagnosticar la rara condición después de meses de pruebas.', fr: 'Le spécialiste a finalement pu diagnostiquer la maladie rare après des mois de tests.', de: 'Der Spezialist konnte die seltene Erkrankung nach monatelangen Tests endlich diagnostizieren.', tr: 'Uzman, aylarca süren testlerden sonra nihayet nadir görülen durumu teşhis edebildi.', ja: '専門家は数ヶ月の検査の後、ついにそのまれな状態を診断することができました。' }
            },
            {
              id: 'w92-m1-e2',
              sentence: 'She was diagnosed with diabetes and had to completely change her diet.',
              translation: { ru: 'У нее диагностировали диабет, и ей пришлось полностью изменить свой рацион.', zh: '她被诊断出患有糖尿病，不得不彻底改变她的饮食。', es: 'Le diagnosticaron diabetes y tuvo que cambiar por completo su dieta.', fr: 'Elle a été diagnostiquée avec un diabète et a dû complètement changer son alimentation.', de: 'Bei ihr wurde Diabetes diagnostiziert und sie musste ihre Ernährung komplett umstellen.', tr: 'Kendisine diyabet teşhisi kondu ve beslenmesini tamamen değiştirmek zorunda kaldı.', ja: '彼女は糖尿病と診断され、食生活を完全に変えなければなりませんでした。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w93',
      word: 'recover',
      pronunciation: '/rɪˈkʌvər/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['get better', 'heal', 'recuperate'],
      collocations: ['fully recover', 'recover from an illness'],
      translations: { ru: 'выздоравливать / восстанавливаться', zh: '恢复 / 康复', es: 'recuperarse', fr: 'récupérer / se rétablir', de: 'sich erholen', tr: 'iyileşmek / toparlanmak', ja: '回復する' },
      meanings: [
        {
          id: 'w93-m1',
          definition: 'to become completely well again after an illness or injury',
          translation: { ru: 'снова стать полностью здоровым после болезни или травмы', zh: '在生病或受伤后再次完全康复', es: 'volver a estar completamente bien después de una enfermedad o lesión', fr: 'redevenir complètement en bonne santé après une maladie ou une blessure', de: 'nach einer Krankheit oder Verletzung wieder vollständig gesund werden', tr: 'hastalıktan veya yaralanmadan sonra tekrar tamamen iyi olmak', ja: '病気や怪我の後に再び完全に健康になること' },
          examples: [
            {
              id: 'w93-m1-e1',
              sentence: 'It took him several weeks to fully recover from the severe chest infection.',
              translation: { ru: 'Ему потребовалось несколько недель, чтобы полностью оправиться от тяжелой инфекции грудной клетки.', zh: '他花了几个星期才从严重的胸腔感染中完全康复。', es: 'Le tomó varias semanas recuperarse por completo de la grave infección en el pecho.', fr: 'Il lui a fallu plusieurs semaines pour se remettre complètement de la grave infection pulmonaire.', de: 'Er brauchte mehrere Wochen, um sich vollständig von der schweren Brustinfektion zu erholen.', tr: 'Şiddetli göğüs enfeksiyonundan tamamen iyileşmesi birkaç hafta sürdü.', ja: '彼が重度の胸部感染症から完全に回復するのに数週間かかりました。' }
            },
            {
              id: 'w93-m1-e2',
              sentence: 'The athletes are given three days to rest and recover before the next match.',
              translation: { ru: 'Спортсменам дается три дня на отдых и восстановление перед следующим матчем.', zh: '运动员在下一场比赛前有三天时间休息和恢复。', es: 'A los atletas se les dan tres días para descansar y recuperarse antes del próximo partido.', fr: 'Les athlètes ont trois jours pour se reposer et récupérer avant le prochain match.', de: 'Die Athleten bekommen drei Tage Zeit, um sich auszuruhen und zu erholen, bevor das nächste Spiel stattfindet.', tr: 'Sporculara bir sonraki maçtan önce dinlenmeleri ve toparlanmaları için üç gün verilir.', ja: 'アスリートには次の試合の前に休んで回復するための3日間が与えられます。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w94',
      word: 'therapy',
      pronunciation: '/ˈθerəpi/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['treatment', 'counseling', 'rehabilitation'],
      collocations: ['physical therapy', 'undergo therapy'],
      translations: { ru: 'терапия / лечение', zh: '疗法 / 治疗', es: 'terapia', fr: 'thérapie', de: 'Therapie', tr: 'terapi / tedavi', ja: '治療 / 療法' },
      meanings: [
        {
          id: 'w94-m1',
          definition: 'a treatment that helps someone feel better, grow stronger, etc., especially after an illness',
          translation: { ru: 'лечение, которое помогает кому-то чувствовать себя лучше, становиться сильнее и т. д., особенно после болезни', zh: '帮助某人感觉更好、变得更强壮等的治疗，尤其是在生病之后', es: 'un tratamiento que ayuda a alguien a sentirse mejor, hacerse más fuerte, etc., especialmente después de una enfermedad', fr: 'un traitement qui aide quelqu\'un à se sentir mieux, à devenir plus fort, etc., surtout après une maladie', de: 'eine Behandlung, die jemandem hilft, sich besser zu fühlen, stärker zu werden usw., insbesondere nach einer Krankheit', tr: 'özellikle bir hastalıktan sonra birinin kendini daha iyi hissetmesine, daha güçlü olmasına vb. yardımcı olan tedavi', ja: '特に病気の後に、気分を良くしたり、体を強くしたりするのに役立つ治療' },
          examples: [
            {
              id: 'w94-m1-e1',
              sentence: 'After the car accident, she needed months of physical therapy to walk normally again.',
              translation: { ru: 'После автомобильной аварии ей потребовались месяцы физиотерапии, чтобы снова нормально ходить.', zh: '车祸发生后，她需要数月的物理治疗才能再次正常行走。', es: 'Después del accidente automovilístico, necesitó meses de terapia física para volver a caminar normalmente.', fr: 'Après l\'accident de voiture, elle a eu besoin de mois de physiothérapie pour marcher à nouveau normalement.', de: 'Nach dem Autounfall brauchte sie monatelange Physiotherapie, um wieder normal gehen zu können.', tr: 'Araba kazasından sonra tekrar normal yürüyebilmesi için aylarca fizik tedavi görmesi gerekti.', ja: '交通事故の後、彼女が再び普通に歩けるようになるには数ヶ月の理学療法が必要でした。' }
            },
            {
              id: 'w94-m1-e2',
              sentence: 'Talking to a professional during cognitive therapy really helped him manage his stress.',
              translation: { ru: 'Беседа с профессионалом во время когнитивной терапии действительно помогла ему справиться со стрессом.', zh: '在认知治疗期间与专业人士交谈确实帮助他控制了压力。', es: 'Hablar con un profesional durante la terapia cognitiva realmente lo ayudó a controlar su estrés.', fr: 'Parler à un professionnel pendant la thérapie cognitive l\'a vraiment aidé à gérer son stress.', de: 'Das Gespräch mit einem Fachmann während der kognitiven Therapie hat ihm wirklich geholfen, seinen Stress zu bewältigen.', tr: 'Bilişsel terapi sırasında bir profesyonelle konuşmak stresini yönetmesine gerçekten yardımcı oldu.', ja: '認知療法中に専門家と話すことは、彼がストレスを管理するのに本当に役立ちました。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w95',
      word: 'fitness',
      pronunciation: '/ˈfɪtnəs/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['health', 'strength', 'condition'],
      collocations: ['fitness level', 'improve fitness'],
      translations: { ru: 'физическая форма / фитнес', zh: '健康 / 健美', es: 'condición física / fitness', fr: 'forme physique', de: 'Fitness / Kondition', tr: 'zindelik / fiziksel uygunluk', ja: 'フィットネス / 健康' },
      meanings: [
        {
          id: 'w95-m1',
          definition: 'the condition of being physically strong and healthy',
          translation: { ru: 'состояние физической силы и здоровья', zh: '身体强壮和健康的状况', es: 'la condición de ser físicamente fuerte y saludable', fr: 'l\'état d\'être physiquement fort et en bonne santé', de: 'der Zustand, körperlich stark und gesund zu sein', tr: 'fiziksel olarak güçlü ve sağlıklı olma durumu', ja: '肉体的に強く健康である状態' },
          examples: [
            {
              id: 'w95-m1-e1',
              sentence: 'He goes to the gym every morning because he takes his fitness very seriously.',
              translation: { ru: 'Каждое утро он ходит в спортзал, потому что очень серьезно относится к своей физической форме.', zh: '他每天早上都去健身房，因为他非常重视自己的健康。', es: 'Va al gimnasio todas las mañanas porque se toma muy en serio su condición física.', fr: 'Il va au gymnase tous les matins parce qu\'il prend sa forme physique très au sérieux.', de: 'Er geht jeden Morgen ins Fitnessstudio, weil er seine Fitness sehr ernst nimmt.', tr: 'Her sabah spor salonuna gidiyor çünkü zindeliğini çok ciddiye alıyor.', ja: '彼は健康をとても真剣に考えているので、毎朝ジムに行きます。' }
            },
            {
              id: 'w95-m1-e2',
              sentence: 'Swimming is an excellent way to improve your overall cardiovascular fitness.',
              translation: { ru: 'Плавание — отличный способ улучшить общую физическую форму сердечно-сосудистой системы.', zh: '游泳是改善整体心血管健康的好方法。', es: 'Nadar es una excelente manera de mejorar tu condición cardiovascular general.', fr: 'La natation est un excellent moyen d\'améliorer votre forme cardiovasculaire globale.', de: 'Schwimmen ist eine ausgezeichnete Möglichkeit, Ihre allgemeine Herz-Kreislauf-Fitness zu verbessern.', tr: 'Yüzme, genel kardiyovasküler zindeliğinizi geliştirmenin mükemmel bir yoludur.', ja: '水泳は、心血管系の全体的な健康状態を改善する優れた方法です。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w96',
      word: 'nutrition',
      pronunciation: '/nuːˈtrɪʃən/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['nourishment', 'diet'],
      collocations: ['poor nutrition', 'good nutrition'],
      translations: { ru: 'питание', zh: '营养', es: 'nutrición', fr: 'nutrition', de: 'Ernährung', tr: 'beslenme', ja: '栄養' },
      meanings: [
        {
          id: 'w96-m1',
          definition: 'the substances that you take into your body as food and the way that they influence your health',
          translation: { ru: 'вещества, которые вы принимаете в свой организм в качестве пищи, и то, как они влияют на ваше здоровье', zh: '作为食物摄入体内的物质以及它们影响健康的方式', es: 'las sustancias que ingieres en tu cuerpo como alimento y la forma en que influyen en tu salud', fr: 'les substances que vous absorbez dans votre corps sous forme de nourriture et la façon dont elles influencent votre santé', de: 'die Substanzen, die Sie als Nahrung aufnehmen, und die Art und Weise, wie sie Ihre Gesundheit beeinflussen', tr: 'yiyecek olarak vücudunuza aldığınız maddeler ve bunların sağlığınızı etkileme şekli', ja: '食物として体内に取り入れる物質と、それらが健康に影響を与える方法' },
          examples: [
            {
              id: 'w96-m1-e1',
              sentence: 'Good nutrition is essential if you want your child to grow up strong and healthy.',
              translation: { ru: 'Хорошее питание имеет важное значение, если вы хотите, чтобы ваш ребенок рос сильным и здоровым.', zh: '如果您希望孩子健康强壮地成长，良好的营养是必不可少的。', es: 'Una buena nutrición es esencial si quieres que tu hijo crezca fuerte y sano.', fr: 'Une bonne nutrition est essentielle si vous voulez que votre enfant grandisse fort et en bonne santé.', de: 'Eine gute Ernährung ist wichtig, wenn Ihr Kind stark und gesund aufwachsen soll.', tr: 'Çocuğunuzun güçlü ve sağlıklı büyümesini istiyorsanız iyi beslenme şarttır.', ja: '子供が強く健康に育つためには、良好な栄養が不可欠です。' }
            },
            {
              id: 'w96-m1-e2',
              sentence: 'Many processed foods offer very little actual nutrition despite being high in calories.',
              translation: { ru: 'Многие обработанные пищевые продукты обладают очень низкой фактической питательной ценностью, несмотря на высокую калорийность.', zh: '许多加工食品尽管热量很高，但提供的实际营养却很少。', es: 'Muchos alimentos procesados ofrecen muy poca nutrición real a pesar de ser altos en calorías.', fr: 'De nombreux aliments transformés offrent très peu de véritable nutrition malgré leur teneur élevée en calories.', de: 'Viele verarbeitete Lebensmittel bieten trotz ihres hohen Kaloriengehalts nur sehr wenig echte Ernährung.', tr: 'Pek çok işlenmiş gıda, kalorisi yüksek olmasına rağmen çok az gerçek besin değeri sunar.', ja: '多くの加工食品はカロリーが高いにもかかわらず、実際の栄養はほとんどありません。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w97',
      word: 'mental',
      pronunciation: '/ˈmɛntəl/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['intellectual', 'psychological', 'cognitive'],
      collocations: ['mental health', 'mental illness'],
      translations: { ru: 'умственный / психический', zh: '精神的 / 心理的', es: 'mental', fr: 'mental', de: 'geistig / psychisch', tr: 'zihinsel', ja: '精神の / メンタル' },
      meanings: [
        {
          id: 'w97-m1',
          definition: 'relating to the mind, or involving the process of thinking',
          translation: { ru: 'относящийся к разуму или включающий процесс мышления', zh: '与大脑有关的，或涉及思考过程的', es: 'relacionado con la mente o que involucra el proceso de pensamiento', fr: 'relatif à l\'esprit, ou impliquant le processus de réflexion', de: 'sich auf den Geist beziehend oder den Denkprozess beinhaltend', tr: 'zihinle ilgili veya düşünme sürecini içeren', ja: '心に関する、または思考プロセスを含む' },
          examples: [
            {
              id: 'w97-m1-e1',
              sentence: 'Stress and lack of sleep can have a severely negative effect on your mental health.',
              translation: { ru: 'Стресс и недостаток сна могут оказать крайне негативное влияние на ваше психическое здоровье.', zh: '压力和睡眠不足会对你的心理健康产生严重的负面影响。', es: 'El estrés y la falta de sueño pueden tener un efecto muy negativo en su salud mental.', fr: 'Le stress et le manque de sommeil peuvent avoir un effet très négatif sur votre santé mentale.', de: 'Stress und Schlafmangel können sich stark negativ auf Ihre psychische Gesundheit auswirken.', tr: 'Stres ve uyku eksikliği zihinsel sağlığınız üzerinde ciddi şekilde olumsuz bir etkiye sahip olabilir.', ja: 'ストレスや睡眠不足は、精神的健康に深刻な悪影響を及ぼす可能性があります。' }
            },
            {
              id: 'w97-m1-e2',
              sentence: 'Chess is a game that requires great mental effort and deep concentration.',
              translation: { ru: 'Шахматы — это игра, требующая больших умственных усилий и глубокой концентрации.', zh: '国际象棋是一项需要巨大精神努力和高度集中的游戏。', es: 'El ajedrez es un juego que requiere un gran esfuerzo mental y una profunda concentración.', fr: 'Les échecs sont un jeu qui demande un grand effort mental et une profonde concentration.', de: 'Schach ist ein Spiel, das große geistige Anstrengung und tiefe Konzentration erfordert.', tr: 'Satranç büyük bir zihinsel çaba ve derin konsantrasyon gerektiren bir oyundur.', ja: 'チェスは多大な精神的努力と深い集中力を必要とするゲームです。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w98',
      word: 'surgery',
      pronunciation: '/ˈsɜːrdʒəri/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['operation', 'medical procedure'],
      collocations: ['undergo surgery', 'heart surgery'],
      translations: { ru: 'операция / хирургия', zh: '手术', es: 'cirugía', fr: 'chirurgie / opération', de: 'Operation / Chirurgie', tr: 'ameliyat / cerrahi', ja: '手術 / 外科' },
      meanings: [
        {
          id: 'w98-m1',
          definition: 'the medical treatment of an illness or injury that involves cutting open a person\'s body',
          translation: { ru: 'медицинское лечение болезни или травмы, которое включает вскрытие тела человека', zh: '对疾病或损伤的医疗方法，包括切开人的身体', es: 'el tratamiento médico de una enfermedad o lesión que implica abrir el cuerpo de una persona', fr: 'le traitement médical d\'une maladie ou d\'une blessure qui implique d\'ouvrir le corps d\'une personne', de: 'die medizinische Behandlung einer Krankheit oder Verletzung, bei der der Körper einer Person aufgeschnitten wird', tr: 'bir kişinin vücudunun kesilerek açılmasını içeren hastalık veya yaralanmanın tıbbi tedavisi', ja: '人の体を切開することを伴う、病気や怪我の医療処置' },
          examples: [
            {
              id: 'w98-m1-e1',
              sentence: 'He will need to undergo surgery to repair the damaged ligaments in his knee.',
              translation: { ru: 'Ему нужно будет перенести операцию, чтобы восстановить поврежденные связки в колене.', zh: '他将需要接受手术来修复膝盖受损的韧带。', es: 'Tendrá que someterse a una cirugía para reparar los ligamentos dañados de su rodilla.', fr: 'Il devra subir une intervention chirurgicale pour réparer les ligaments endommagés de son genou.', de: 'Er muss sich einer Operation unterziehen, um die beschädigten Bänder in seinem Knie zu reparieren.', tr: 'Dizindeki hasarlı bağları onarmak için ameliyat olması gerekecek.', ja: '彼は膝の損傷した靭帯を修復するために手術を受ける必要があります。' }
            },
            {
              id: 'w98-m1-e2',
              sentence: 'Advances in medical technology have made heart surgery much safer today.',
              translation: { ru: 'Достижения в области медицинских технологий сделали операции на сердце сегодня намного безопаснее.', zh: '医疗技术的进步使今天的心脏手术变得更加安全。', es: 'Los avances en tecnología médica han hecho que la cirugía cardíaca sea mucho más segura hoy en día.', fr: 'Les progrès de la technologie médicale ont rendu la chirurgie cardiaque beaucoup plus sûre aujourd\'hui.', de: 'Fortschritte in der Medizintechnik haben Herzoperationen heute viel sicherer gemacht.', tr: 'Tıbbi teknolojideki gelişmeler günümüzde kalp ameliyatlarını çok daha güvenli hale getirdi.', ja: '医療技術の進歩により、今日の心臓手術ははるかに安全になりました。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w99',
      word: 'immune',
      pronunciation: '/ɪˈmjuːn/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['resistant', 'protected'],
      collocations: ['immune system', 'become immune'],
      translations: { ru: 'иммунный / невосприимчивый', zh: '免疫的', es: 'inmune', fr: 'immunisé', de: 'immun', tr: 'bağışık', ja: '免疫のある' },
      meanings: [
        {
          id: 'w99-m1',
          definition: 'protected against a particular disease by particular substances in the blood',
          translation: { ru: 'защищен от определенного заболевания особыми веществами в крови', zh: '通过血液中的特定物质防止患上某种特定疾病', es: 'protegido contra una enfermedad particular por sustancias particulares en la sangre', fr: 'protégé contre une maladie particulière par des substances particulières dans le sang', de: 'durch bestimmte Substanzen im Blut vor einer bestimmten Krankheit geschützt', tr: 'kandaki belirli maddeler tarafından belirli bir hastalığa karşı korunmak', ja: '血液中の特定の物質によって特定の病気から保護されている' },
          examples: [
            {
              id: 'w99-m1-e1',
              sentence: 'A healthy diet and plenty of sleep help to strengthen your immune system.',
              translation: { ru: 'Здоровое питание и достаточный сон помогают укрепить вашу иммунную систему.', zh: '健康的饮食和充足的睡眠有助于增强你的免疫系统。', es: 'Una dieta saludable y dormir lo suficiente ayudan a fortalecer su sistema inmunológico.', fr: 'Une alimentation saine et beaucoup de sommeil aident à renforcer votre système immunitaire.', de: 'Eine gesunde Ernährung und viel Schlaf helfen, Ihr Immunsystem zu stärken.', tr: 'Sağlıklı beslenme ve bol uyku bağışıklık sisteminizi güçlendirmeye yardımcı olur.', ja: '健康的な食事と十分な睡眠は、免疫システムを強化するのに役立ちます。' }
            },
            {
              id: 'w99-m1-e2',
              sentence: 'Most adults who had chickenpox as children are now completely immune to it.',
              translation: { ru: 'Большинство взрослых, которые в детстве переболели ветрянкой, теперь к ней полностью невосприимчивы.', zh: '大多数在童年时期出过水痘的成年人现在都对它完全免疫。', es: 'La mayoría de los adultos que tuvieron varicela en la infancia ahora son completamente inmunes a ella.', fr: 'La plupart des adultes qui ont eu la varicelle dans leur enfance y sont désormais totalement immunisés.', de: 'Die meisten Erwachsenen, die als Kinder Windpocken hatten, sind heute völlig immun dagegen.', tr: 'Çocukluklarında suçiçeği geçiren yetişkinlerin çoğu artık buna karşı tamamen bağışıktır.', ja: '子供の頃に水痘にかかった成人のほとんどは、今ではそれに完全に免疫があります。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w100',
      word: 'hygiene',
      pronunciation: '/ˈhaɪdʒiːn/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['cleanliness', 'sanitation'],
      collocations: ['personal hygiene', 'poor hygiene'],
      translations: { ru: 'гигиена', zh: '卫生', es: 'higiene', fr: 'hygiène', de: 'Hygiene', tr: 'hijyen / temizlik', ja: '衛生' },
      meanings: [
        {
          id: 'w100-m1',
          definition: 'the degree to which people keep themselves or their environment clean, especially to prevent disease',
          translation: { ru: 'степень, в которой люди содержат себя или окружающую среду в чистоте, особенно для предотвращения болезней', zh: '人们保持自身或环境清洁的程度，尤指为了预防疾病', es: 'el grado en que las personas se mantienen a sí mismas o a su entorno limpias, especialmente para prevenir enfermedades', fr: 'le degré auquel les gens se maintiennent ou maintiennent leur environnement propre, en particulier pour prévenir les maladies', de: 'das Maß, in dem Menschen sich oder ihre Umgebung sauber halten, insbesondere um Krankheiten vorzubeugen', tr: 'insanların özellikle hastalıkları önlemek için kendilerini veya çevrelerini temiz tutma derecesi', ja: '特に病気を防ぐために、人々が自分自身や環境を清潔に保つ程度' },
          examples: [
            {
              id: 'w100-m1-e1',
              sentence: 'Washing your hands frequently is a basic rule of good personal hygiene.',
              translation: { ru: 'Частое мытье рук — базовое правило хорошей личной гигиены.', zh: '勤洗手是良好个人卫生的基本规则。', es: 'Lavarse las manos con frecuencia es una regla básica de buena higiene personal.', fr: 'Se laver les mains fréquemment est une règle de base d\'une bonne hygiène personnelle.', de: 'Häufiges Händewaschen ist eine Grundregel für gute persönliche Hygiene.', tr: 'Ellerinizi sık sık yıkamak iyi bir kişisel hijyenin temel kuralıdır.', ja: '頻繁に手を洗うことは、良好な個人の衛生状態の基本規則です。' }
            },
            {
              id: 'w100-m1-e2',
              sentence: 'The restaurant was forced to close due to a severe lack of food hygiene in the kitchen.',
              translation: { ru: 'Ресторан был вынужден закрыться из-за серьезного несоблюдения пищевой гигиены на кухне.', zh: '由于厨房食品卫生严重不合格，这家餐厅被迫关闭。', es: 'El restaurante se vio obligado a cerrar debido a una grave falta de higiene alimentaria en la cocina.', fr: 'Le restaurant a été contraint de fermer en raison d\'un grave manque d\'hygiène alimentaire dans la cuisine.', de: 'Das Restaurant musste wegen mangelnder Lebensmittelhygiene in der Küche schließen.', tr: 'Mutfaktaki ciddi gıda hijyeni eksikliği nedeniyle restoran kapanmak zorunda kaldı.', ja: 'キッチンの深刻な食品衛生上の欠如により、レストランは閉店を余儀なくされました。' }
            }
          ]
        }
      ]
    }
  ],
  reading: {
    id: 'b2-l10-reading',
    title: 'The Balance of Well-being',
    content: `Modern medicine has made incredible advances, meaning doctors can quickly diagnose complex illnesses and successfully perform life-saving surgery. As a result, the time it takes for a patient to recover from physical trauma is shorter than ever. However, maintaining good health is not just about relying on doctors; our daily habits play a crucial role.\n\nPersonal hygiene and proper nutrition are the foundations of physical fitness. Eating fresh foods and staying active naturally strengthen the immune system, preventing diseases before any symptom can appear. Unfortunately, many people forget that mental health is equally important. In a fast-paced society, stress can silently damage our overall well-being. Practicing relaxation techniques or seeking professional therapy can help individuals manage this pressure. Ultimately, total health requires finding a balance between caring for our bodies and protecting our minds.`,
    translations: {
      ru: 'Современная медицина добилась невероятных успехов, что означает, что врачи могут быстро диагностировать сложные заболевания и успешно проводить спасающие жизни операции. В результате время, необходимое пациенту для восстановления после физической травмы, короче, чем когда-либо. Однако поддержание хорошего здоровья зависит не только от врачей; наши повседневные привычки играют решающую роль.\n\nЛичная гигиена и правильное питание являются основой физической формы. Употребление свежих продуктов и активный образ жизни естественным образом укрепляют иммунную систему, предотвращая заболевания еще до появления каких-либо симптомов. К сожалению, многие люди забывают, что психическое здоровье не менее важно. В быстро меняющемся обществе стресс может незаметно нанести ущерб нашему общему благополучию. Практика методов релаксации или обращение за профессиональной терапией могут помочь людям справиться с этим давлением. В конечном счете, полное здоровье требует поиска баланса между заботой о нашем теле и защитой нашего разума.',
      zh: '现代医学取得了令人难以置信的进步，这意味着医生可以快速诊断复杂的疾病并成功进行挽救生命的手术。结果，患者从身体创伤中恢复的时间比以往任何时候都短。然而，保持良好的健康不仅仅是依赖医生；我们的日常习惯起着至关重要的作用。\n\n个人卫生和适当的营养是强健体魄的基础。吃新鲜食物和保持活跃可以自然地增强免疫系统，在任何症状出现之前预防疾病。不幸的是，许多人忘记了心理健康同样重要。在快节奏的社会中，压力会悄无声息地损害我们的整体健康。练习放松技巧或寻求专业治疗可以帮助个人缓解这种压力。最终，完全的健康需要在照顾我们的身体和保护我们的思想之间找到平衡。',
      es: 'La medicina moderna ha logrado avances increíbles, lo que significa que los médicos pueden diagnosticar rápidamente enfermedades complejas y realizar con éxito cirugías que salvan vidas. Como resultado, el tiempo que tarda un paciente en recuperarse de un trauma físico es más corto que nunca. Sin embargo, mantener una buena salud no se trata solo de depender de los médicos; nuestros hábitos diarios juegan un papel crucial.\n\nLa higiene personal y la nutrición adecuada son las bases de la condición física. Comer alimentos frescos y mantenerse activo fortalece naturalmente el sistema inmunológico, previniendo enfermedades antes de que pueda aparecer cualquier síntoma. Desafortunadamente, muchas personas olvidan que la salud mental es igualmente importante. En una sociedad acelerada, el estrés puede dañar silenciosamente nuestro bienestar general. Practicar técnicas de relajación o buscar terapia profesional puede ayudar a las personas a controlar esta presión. En última instancia, la salud total requiere encontrar un equilibrio entre cuidar nuestros cuerpos y proteger nuestras mentes.',
      fr: 'La médecine moderne a fait des progrès incroyables, ce qui signifie que les médecins peuvent rapidement diagnostiquer des maladies complexes et effectuer avec succès des interventions chirurgicales qui sauvent des vies. En conséquence, le temps nécessaire à un patient pour récupérer d\'un traumatisme physique est plus court que jamais. Cependant, rester en bonne santé ne consiste pas seulement à s\'en remettre aux médecins ; nos habitudes quotidiennes jouent un rôle crucial.\n\nL\'hygiène personnelle et une bonne nutrition sont les fondations de la forme physique. Manger des aliments frais et rester actif renforce naturellement le système immunitaire, prévenant les maladies avant même l\'apparition de tout symptôme. Malheureusement, de nombreuses personnes oublient que la santé mentale est tout aussi importante. Dans une société au rythme effréné, le stress peut nuire silencieusement à notre bien-être général. Pratiquer des techniques de relaxation ou rechercher une thérapie professionnelle peut aider les individus à gérer cette pression. En fin de compte, la santé totale nécessite de trouver un équilibre entre prendre soin de notre corps et protéger notre esprit.',
      de: 'Die moderne Medizin hat unglaubliche Fortschritte gemacht, was bedeutet, dass Ärzte komplexe Krankheiten schnell diagnostizieren und lebensrettende Operationen erfolgreich durchführen können. Dadurch ist die Zeit, die ein Patient benötigt, um sich von einem physischen Trauma zu erholen, kürzer als je zuvor. Die Erhaltung der Gesundheit besteht jedoch nicht nur darin, sich auf Ärzte zu verlassen. Unsere täglichen Gewohnheiten spielen eine entscheidende Rolle.\n\nPersönliche Hygiene und richtige Ernährung sind die Grundlagen der körperlichen Fitness. Der Verzehr frischer Lebensmittel und ein aktiver Lebensstil stärken auf natürliche Weise das Immunsystem und beugen Krankheiten vor, bevor ein Symptom auftreten kann. Leider vergessen viele Menschen, dass die psychische Gesundheit genauso wichtig ist. In einer schnelllebigen Gesellschaft kann Stress stillschweigend unser allgemeines Wohlbefinden schädigen. Das Üben von Entspannungstechniken oder die Suche nach professioneller Therapie können dem Einzelnen helfen, mit diesem Druck umzugehen. Letztendlich erfordert völlige Gesundheit ein Gleichgewicht zwischen der Pflege unseres Körpers und dem Schutz unseres Geistes.',
      tr: 'Modern tıp inanılmaz ilerlemeler kaydetti; bu da doktorların karmaşık hastalıkları hızla teşhis edebilmesi ve hayat kurtaran ameliyatları başarıyla gerçekleştirebilmesi anlamına geliyor. Sonuç olarak, bir hastanın fiziksel bir travmadan kurtulması için geçen süre her zamankinden daha kısadır. Ancak sağlığı korumak sadece doktorlara güvenmekten ibaret değildir; günlük alışkanlıklarımız çok önemli bir rol oynamaktadır.\n\nKişisel hijyen ve doğru beslenme fiziksel zindeliğin temelleridir. Taze yiyecekler yemek ve aktif kalmak bağışıklık sistemini doğal olarak güçlendirerek herhangi bir belirti ortaya çıkmadan önce hastalıkları önler. Ne yazık ki pek çok insan zihinsel sağlığın da aynı derecede önemli olduğunu unutuyor. Hızlı tempolu bir toplumda stres genel refahımıza sessizce zarar verebilir. Gevşeme teknikleri uygulamak veya profesyonel terapi almak, bireylerin bu baskıyı yönetmesine yardımcı olabilir. Nihayetinde, tam bir sağlık, bedenlerimize bakmak ve zihinlerimizi korumak arasında bir denge bulmayı gerektirir.',
      ja: '現代医学は驚くべき進歩を遂げており、医師は複雑な病気を迅速に診断し、命を救う手術を成功裏に実行することができます。その結果、患者が肉体的外傷から回復するのにかかる時間は、かつてないほど短くなっています。しかし、良好な健康を維持することは、医師に頼ることだけではありません。私たちの毎日の習慣は重要な役割を果たしています。\n\n個人の衛生状態と適切な栄養は、健康の基盤です。新鮮な食品を食べ、活動的でいることは、免疫システムを自然に強化し、症状が現れる前に病気を防ぎます。残念ながら、多くの人は精神的健康も同様に重要であることを忘れています。ペースの速い社会では、ストレスが私たちの全体的な健康を静かに損なう可能性があります。リラクゼーションのテクニックを練習したり、専門的な治療を受けたりすることは、個人がこのプレッシャーを管理するのに役立ちます。最終的に、完全な健康には、体の世話をすることと心を守ることのバランスを見つける必要があります。'
    },
    comprehensionQuestions: [
      {
        id: 'b2-l10-q1',
        question: 'What is the consequence of advances in modern medicine according to the text?',
        options: [
          'People no longer need to eat fresh foods.',
          'Doctors are unable to diagnose complex illnesses.',
          'Patients recover from physical trauma more quickly.',
          'Mental health is becoming less important.'
        ],
        correctAnswerIndex: 2
      },
      {
        id: 'b2-l10-q2',
        question: 'How can people strengthen their immune system naturally?',
        options: [
          'By relying entirely on doctors for everything.',
          'By eating fresh foods and maintaining physical fitness.',
          'By ignoring personal hygiene.',
          'By waiting until a symptom appears before acting.'
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'b2-l10-q3',
        question: 'What point does the text make about mental health?',
        options: [
          'It is rarely affected by stress in a fast-paced society.',
          'It is equally important as physical health.',
          'It can be easily fixed without any professional therapy.',
          'It is the only thing we should focus on to achieve total health.'
        ],
        correctAnswerIndex: 1
      }
    ]
  }
};
