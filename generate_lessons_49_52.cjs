const fs = require('fs');

const lesson49 = `import { Lesson } from '../types';

export const b2Lesson49: Lesson = {
  "id": "b2-lesson-49",
  "title": "Workplace Communication",
  "number": 49,
  "level": "B2",
  "words": [
    {
      "id": "w481",
      "word": "follow up",
      "pronunciation": "/ˈfɒləʊ ʌp/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "последовать (за чем-то) / дополнительно связаться",
        "zh": "跟进",
        "es": "hacer un seguimiento",
        "fr": "donner suite / relancer",
        "de": "nachfassen / weiterverfolgen",
        "tr": "takip etmek",
        "ja": "フォローアップする / 追って連絡する"
      },
      "examples": [
        {
          "en": "I will follow up on this issue with the IT department tomorrow.",
          "ru": "Завтра я дополнительно свяжусь с ИТ-отделом по этому вопросу.",
          "zh": "我明天会和IT部门跟进这个问题。",
          "es": "Haré un seguimiento de este problema con el departamento de TI mañana.",
          "fr": "Je donnerai suite à ce problème avec le département informatique demain.",
          "de": "Ich werde diese Angelegenheit morgen mit der IT-Abteilung nachfassen.",
          "tr": "Yarın BT departmanı ile bu sorunu takip edeceğim.",
          "ja": "明日、IT部門にこの問題についてフォローアップします。"
        },
        {
          "en": "She decided to follow up her email with a quick phone call.",
          "ru": "Она решила вдобавок к электронному письму сделать короткий телефонный звонок.",
          "zh": "她决定在发邮件后打个简短的电话跟进。",
          "es": "Decidió hacer un seguimiento de su correo electrónico con una rápida llamada telefónica.",
          "fr": "Elle a décidé de relancer son e-mail par un rapide appel téléphonique.",
          "de": "Sie beschloss, ihrer E-Mail einen kurzen Anruf folgen zu lassen.",
          "tr": "E-postasının ardından kısa bir telefon görüşmesi ile takip etmeye karar verdi.",
          "ja": "彼女はメールの後に短い電話でフォローアップすることに決めました。"
        }
      ]
    },
    {
      "id": "w482",
      "word": "deal with",
      "pronunciation": "/diːl wɪð/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "иметь дело с / справляться",
        "zh": "处理 / 应对",
        "es": "lidiar con / ocuparse de",
        "fr": "s'occuper de / gérer",
        "de": "sich befassen mit / umgehen mit",
        "tr": "başa çıkmak / ilgilenmek",
        "ja": "対処する / 扱う"
      },
      "examples": [
        {
          "en": "The manager has to deal with customer complaints on a daily basis.",
          "ru": "Менеджеру приходится ежедневно разбираться с жалобами клиентов.",
          "zh": "经理每天都必须处理客户的投诉。",
          "es": "El gerente tiene que lidiar con las quejas de los clientes a diario.",
          "fr": "Le manager doit gérer les plaintes des clients au quotidien.",
          "de": "Der Manager muss sich täglich mit Kundenbeschwerden befassen.",
          "tr": "Yönetici günlük olarak müşteri şikayetleriyle ilgilenmek zorundadır.",
          "ja": "マネージャーは日常的に顧客からのクレームに対処しなければなりません。"
        },
        {
          "en": "We need to find a better way to deal with this technical issue.",
          "ru": "Нам нужно найти лучший способ справиться с этой технической проблемой.",
          "zh": "我们需要找到更好的方法来应对这个技术问题。",
          "es": "Necesitamos encontrar una mejor manera de ocuparnos de este problema técnico.",
          "fr": "Nous devons trouver une meilleure façon de nous occuper de ce problème technique.",
          "de": "Wir müssen einen besseren Weg finden, um mit diesem technischen Problem umzugehen.",
          "tr": "Bu teknik sorunla başa çıkmak için daha iyi bir yol bulmalıyız.",
          "ja": "この技術的な問題に対処するためのより良い方法を見つける必要があります。"
        }
      ]
    },
    {
      "id": "w483",
      "word": "point out",
      "pronunciation": "/pɔɪnt aʊt/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "указывать / обращать внимание",
        "zh": "指出",
        "es": "señalar / apuntar",
        "fr": "faire remarquer / souligner",
        "de": "hinweisen auf / aufzeigen",
        "tr": "belirtmek / dikkat çekmek",
        "ja": "指摘する"
      },
      "examples": [
        {
          "en": "During the meeting, he pointed out a significant error in the report.",
          "ru": "Во время собрания он указал на значительную ошибку в отчете.",
          "zh": "在会议期间，他指出了报告中的一个重大错误。",
          "es": "Durante la reunión, señaló un error significativo en el informe.",
          "fr": "Pendant la réunion, il a fait remarquer une erreur significative dans le rapport.",
          "de": "Während der Besprechung wies er auf einen wesentlichen Fehler im Bericht hin.",
          "tr": "Toplantı sırasında, rapordaki önemli bir hataya dikkat çekti.",
          "ja": "会議中、彼は報告書の重大なエラーを指摘しました。"
        },
        {
          "en": "I would like to point out that we have limited resources for this project.",
          "ru": "Я хотел бы обратить внимание на то, что у нас ограничены ресурсы для этого проекта.",
          "zh": "我想指出，我们这个项目的资源有限。",
          "es": "Me gustaría señalar que tenemos recursos limitados para este proyecto.",
          "fr": "Je tiens à souligner que nous avons des ressources limitées pour ce projet.",
          "de": "Ich möchte darauf hinweisen, dass wir für dieses Projekt nur begrenzte Ressourcen haben.",
          "tr": "Bu proje için sınırlı kaynaklarımız olduğunu belirtmek isterim.",
          "ja": "このプロジェクトのためのリソースが限られていることを指摘しておきたいと思います。"
        }
      ]
    },
    {
      "id": "w484",
      "word": "outline",
      "pronunciation": "/ˈaʊtlaɪn/",
      "partOfSpeech": "verb, noun",
      "level": "B2",
      "translations": {
        "ru": "излагать вкратце / намечать / план",
        "zh": "概述 / 大纲",
        "es": "esbozar / resumen",
        "fr": "exposer dans les grandes lignes / plan",
        "de": "skizzieren / Entwurf",
        "tr": "özetlemek / taslak",
        "ja": "概要を説明する / 概要"
      },
      "examples": [
        {
          "en": "Could you briefly outline your main strategy for the upcoming quarter?",
          "ru": "Не могли бы вы вкратце изложить свою основную стратегию на предстоящий квартал?",
          "zh": "你能简要概述一下下个季度的主要战略吗？",
          "es": "¿Podría esbozar brevemente su estrategia principal para el próximo trimestre?",
          "fr": "Pourriez-vous exposer brièvement votre stratégie principale pour le trimestre à venir ?",
          "de": "Könnten Sie Ihre Hauptstrategie für das kommende Quartal kurz skizzieren?",
          "tr": "Önümüzdeki çeyrek için ana stratejinizi kısaca özetleyebilir misiniz?",
          "ja": "来四半期の主要な戦略について、簡単に概要を説明していただけますか？"
        },
        {
          "en": "The document provides a clear outline of our project goals.",
          "ru": "В документе содержится четкий план целей нашего проекта.",
          "zh": "该文件清晰地列出了我们项目目标的大纲。",
          "es": "El documento proporciona un resumen claro de los objetivos de nuestro proyecto.",
          "fr": "Le document fournit un plan clair des objectifs de notre projet.",
          "de": "Das Dokument bietet einen klaren Entwurf unserer Projektziele.",
          "tr": "Belge, proje hedeflerimizin net bir taslağını sunmaktadır.",
          "ja": "その文書は、私たちのプロジェクトの目標の明確な概要を提供しています。"
        }
      ]
    },
    {
      "id": "w485",
      "word": "update",
      "pronunciation": "/ʌpˈdeɪt/",
      "partOfSpeech": "verb, noun",
      "level": "B2",
      "translations": {
        "ru": "обновлять / обновление (информации)",
        "zh": "更新 / 最新消息",
        "es": "actualizar / actualización",
        "fr": "mettre à jour / mise à jour",
        "de": "aktualisieren / Update",
        "tr": "güncellemek / güncelleme",
        "ja": "最新情報にする / アップデート"
      },
      "examples": [
        {
          "en": "Please provide a quick update on the current status of the client presentation.",
          "ru": "Пожалуйста, предоставьте краткую информацию о текущем статусе презентации для клиента.",
          "zh": "请提供关于客户演示当前状态的快速更新。",
          "es": "Por favor, proporcione una rápida actualización sobre el estado actual de la presentación al cliente.",
          "fr": "Veuillez fournir une rapide mise à jour sur l'état actuel de la présentation client.",
          "de": "Bitte geben Sie ein kurzes Update zum aktuellen Stand der Kundenpräsentation.",
          "tr": "Lütfen müşteri sunumunun mevcut durumu hakkında kısa bir güncelleme yapın.",
          "ja": "クライアントへのプレゼンテーションの現在の進捗について、簡単なアップデートをお願いします。"
        },
        {
          "en": "We will update the software system over the weekend to fix the bugs.",
          "ru": "На выходных мы обновим систему программного обеспечения, чтобы исправить ошибки.",
          "zh": "我们将在周末更新软件系统以修复错误。",
          "es": "Actualizaremos el sistema de software durante el fin de semana para corregir los errores.",
          "fr": "Nous mettrons à jour le système logiciel ce week-end pour corriger les bugs.",
          "de": "Wir werden das Softwaresystem am Wochenende aktualisieren, um die Fehler zu beheben.",
          "tr": "Hataları düzeltmek için hafta sonu yazılım sistemini güncelleyeceğiz.",
          "ja": "バグを修正するため、週末にソフトウェアシステムをアップデートします。"
        }
      ]
    },
    {
      "id": "w486",
      "word": "address",
      "pronunciation": "/əˈdres/",
      "partOfSpeech": "verb",
      "level": "B2",
      "translations": {
        "ru": "решать (проблему) / обращаться к",
        "zh": "着手解决 / 对...讲话",
        "es": "abordar / dirigirse a",
        "fr": "aborder / s'adresser à",
        "de": "ansprechen / sich befassen mit",
        "tr": "ele almak / hitap etmek",
        "ja": "取り組む / 呼びかける"
      },
      "examples": [
        {
          "en": "The board met to address the growing concerns about the company's finances.",
          "ru": "Совет директоров собрался, чтобы решить растущие проблемы с финансами компании.",
          "zh": "董事会开会着手解决对公司财务日益增长的担忧。",
          "es": "La junta se reunió para abordar las crecientes preocupaciones sobre las finanzas de la empresa.",
          "fr": "Le conseil s'est réuni pour aborder les inquiétudes croissantes concernant les finances de l'entreprise.",
          "de": "Der Vorstand trat zusammen, um die wachsenden Bedenken hinsichtlich der Finanzen des Unternehmens anzusprechen.",
          "tr": "Yönetim kurulu, şirketin finansmanıyla ilgili artan endişeleri ele almak için toplandı.",
          "ja": "取締役会は、会社の財務に関する懸念の高まりに取り組むために開催されました。"
        },
        {
          "en": "It is vital to address these issues before they turn into a crisis.",
          "ru": "Жизненно важно решить эти проблемы до того, как они превратятся в кризис.",
          "zh": "在这些问题演变成危机之前着手解决它们至关重要。",
          "es": "Es vital abordar estos problemas antes de que se conviertan en una crisis.",
          "fr": "Il est vital d'aborder ces problèmes avant qu'ils ne se transforment en crise.",
          "de": "Es ist wichtig, diese Probleme anzusprechen, bevor sie sich zu einer Krise entwickeln.",
          "tr": "Bu sorunları bir krize dönüşmeden önce ele almak hayati önem taşır.",
          "ja": "これらの問題が危機に発展する前に取り組むことが極めて重要です。"
        }
      ]
    },
    {
      "id": "w487",
      "word": "consequently",
      "pronunciation": "/ˈkɒnsɪkwəntli/",
      "partOfSpeech": "adverb",
      "level": "B2",
      "translations": {
        "ru": "следовательно / в результате",
        "zh": "因此 / 结果",
        "es": "en consecuencia / por consiguiente",
        "fr": "par conséquent",
        "de": "folglich / infolgedessen",
        "tr": "sonuç olarak / dolayısıyla",
        "ja": "その結果として / したがって"
      },
      "examples": [
        {
          "en": "The supplier was late; consequently, the entire production process was delayed.",
          "ru": "Поставщик опоздал; следовательно, весь производственный процесс был задержан.",
          "zh": "供应商迟到了；因此，整个生产过程都被延误了。",
          "es": "El proveedor llegó tarde; en consecuencia, todo el proceso de producción se retrasó.",
          "fr": "Le fournisseur était en retard ; par conséquent, tout le processus de production a été retardé.",
          "de": "Der Lieferant war spät dran; folglich verzögerte sich der gesamte Produktionsprozess.",
          "tr": "Tedarikçi geç kaldı; sonuç olarak tüm üretim süreci gecikti.",
          "ja": "サプライヤーが遅れたため、その結果として生産プロセス全体が遅延しました。"
        },
        {
          "en": "He didn't study for the exam and consequently failed it.",
          "ru": "Он не готовился к экзамену и в результате провалил его.",
          "zh": "他没有复习考试，结果不及格。",
          "es": "No estudió para el examen y, por consiguiente, lo suspendió.",
          "fr": "Il n'a pas étudié pour l'examen et l'a par conséquent raté.",
          "de": "Er hat nicht für die Prüfung gelernt und sie infolgedessen nicht bestanden.",
          "tr": "Sınava çalışmadı ve dolayısıyla kaldı.",
          "ja": "彼は試験勉強をしなかったので、その結果として不合格になりました。"
        }
      ]
    },
    {
      "id": "w488",
      "word": "furthermore",
      "pronunciation": "/ˌfɜːðəˈmɔː(r)/",
      "partOfSpeech": "adverb",
      "level": "B2",
      "translations": {
        "ru": "кроме того / более того",
        "zh": "此外 / 而且",
        "es": "además / por otra parte",
        "fr": "de plus / en outre",
        "de": "außerdem / ferner",
        "tr": "ayrıca / dahası",
        "ja": "さらに / その上"
      },
      "examples": [
        {
          "en": "The new system is faster. Furthermore, it is much more secure.",
          "ru": "Новая система работает быстрее. Более того, она гораздо безопаснее.",
          "zh": "新系统速度更快。此外，它还要安全得多。",
          "es": "El nuevo sistema es más rápido. Además, es mucho más seguro.",
          "fr": "Le nouveau système est plus rapide. De plus, il est beaucoup plus sécurisé.",
          "de": "Das neue System ist schneller. Außerdem ist es viel sicherer.",
          "tr": "Yeni sistem daha hızlı. Dahası, çok daha güvenli.",
          "ja": "新しいシステムはより高速です。さらに、セキュリティもはるかに高くなっています。"
        },
        {
          "en": "I do not want to go to that restaurant; furthermore, we simply cannot afford it.",
          "ru": "Я не хочу идти в тот ресторан; кроме того, мы просто не можем себе этого позволить.",
          "zh": "我不想去那家餐厅；而且，我们也实在负担不起。",
          "es": "No quiero ir a ese restaurante; por otra parte, simplemente no podemos pagarlo.",
          "fr": "Je ne veux pas aller dans ce restaurant ; en outre, nous ne pouvons tout simplement pas nous le permettre.",
          "de": "Ich möchte nicht in dieses Restaurant gehen; ferner können wir es uns einfach nicht leisten.",
          "tr": "O restorana gitmek istemiyorum; ayrıca, bunu kesinlikle karşılayamayız.",
          "ja": "あのレストランには行きたくありません。その上、金銭的な余裕もまったくありません。"
        }
      ]
    },
    {
      "id": "w489",
      "word": "input",
      "pronunciation": "/ˈɪnpʊt/",
      "partOfSpeech": "noun",
      "level": "B2",
      "translations": {
        "ru": "вклад / мнение (совет)",
        "zh": "投入 / 意见",
        "es": "aporte / opinión",
        "fr": "contribution / avis",
        "de": "Beitrag / Input",
        "tr": "katkı / görüş",
        "ja": "意見 / 投入"
      },
      "examples": [
        {
          "en": "We highly value your input on this new marketing strategy.",
          "ru": "Мы высоко ценим ваше мнение по поводу этой новой маркетинговой стратегии.",
          "zh": "我们非常看重您对这个新营销策略的意见。",
          "es": "Valoramos enormemente su aporte sobre esta nueva estrategia de marketing.",
          "fr": "Nous apprécions grandement votre contribution à cette nouvelle stratégie marketing.",
          "de": "Wir schätzen Ihren Beitrag zu dieser neuen Marketingstrategie sehr.",
          "tr": "Bu yeni pazarlama stratejisiyle ilgili görüşünüze büyük değer veriyoruz.",
          "ja": "この新しいマーケティング戦略に関するあなたの意見を高く評価しています。"
        },
        {
          "en": "Before making a final decision, the manager asked for input from the entire team.",
          "ru": "Прежде чем принять окончательное решение, менеджер попросил всю команду высказать свое мнение.",
          "zh": "在做出最终决定之前，经理征求了整个团队的意见。",
          "es": "Antes de tomar una decisión final, el gerente pidió la opinión de todo el equipo.",
          "fr": "Avant de prendre une décision finale, le manager a demandé l'avis de toute l'équipe.",
          "de": "Vor der endgültigen Entscheidung bat der Manager das gesamte Team um Input.",
          "tr": "Nihai kararı vermeden önce, yönetici tüm ekipten görüş istedi.",
          "ja": "最終決定を下す前に、マネージャーはチーム全体からの意見を求めました。"
        }
      ]
    },
    {
      "id": "w490",
      "word": "query",
      "pronunciation": "/ˈkwɪəri/",
      "partOfSpeech": "noun, verb",
      "level": "B2",
      "translations": {
        "ru": "запрос / вопрос",
        "zh": "疑问 / 查询",
        "es": "consulta / duda",
        "fr": "requête / question",
        "de": "Anfrage / Rückfrage",
        "tr": "sorgu / soru",
        "ja": "質問 / 問い合わせ"
      },
      "examples": [
        {
          "en": "If you have any queries regarding the contract, please contact human resources.",
          "ru": "Если у вас есть какие-либо вопросы относительно контракта, пожалуйста, свяжитесь с отделом кадров.",
          "zh": "如果您对合同有任何疑问，请联系人力资源部。",
          "es": "Si tiene alguna consulta con respecto al contrato, comuníquese con recursos humanos.",
          "fr": "Si vous avez des questions concernant le contrat, veuillez contacter les ressources humaines.",
          "de": "Wenn Sie Rückfragen zum Vertrag haben, wenden Sie sich bitte an die Personalabteilung.",
          "tr": "Sözleşmeyle ilgili herhangi bir sorunuz varsa, lütfen insan kaynakları ile iletişime geçin.",
          "ja": "契約に関するご質問がある場合は、人事部までご連絡ください。"
        },
        {
          "en": "Customer service aims to respond to every query within 24 hours.",
          "ru": "Служба поддержки стремится отвечать на каждый запрос в течение 24 часов.",
          "zh": "客户服务旨在在24小时内回复每一个查询。",
          "es": "El servicio de atención al cliente tiene como objetivo responder a cada consulta en 24 horas.",
          "fr": "Le service client a pour objectif de répondre à chaque requête sous 24 heures.",
          "de": "Der Kundenservice ist bestrebt, jede Anfrage innerhalb von 24 Stunden zu beantworten.",
          "tr": "Müşteri hizmetleri, her sorguya 24 saat içinde yanıt vermeyi amaçlar.",
          "ja": "カスタマーサービスは、すべての問い合わせに24時間以内に対応することを目指しています。"
        }
      ]
    }
  ],
  "reading": {
    "title": "Clear Communication in the Workplace",
    "text": "Effective professional communication requires more than just exchanging information; it requires clarity and proactive coordination. When working on a team project, it is essential to outline your main objectives early on, so everyone understands their responsibilities. If unexpected challenges arise, managers must address the issue promptly before it impacts the timeline. \n\nFurthermore, when someone makes a request, it is professional courtesy to respond and follow up on the matter, even if it is just to provide a brief update. Ignoring a colleague’s query can lead to confusion and inefficiency. Consequently, many successful companies train their employees to value team input and deal with difficult interactions constructively. By doing so, they ensure that everyone is aligned and that when an error occurs, colleagues can point out mistakes politely and objectively, preventing minor misunderstandings from turning into major disputes.",
    "questions": [
      {
        "question": "What should be done early on when working on a team project?",
        "options": [
          "Outline the main objectives",
          "Follow up on emails immediately",
          "Address all future problems",
          "Point out minor mistakes"
        ],
        "answer": 0
      },
      {
        "question": "According to the text, what can ignoring a query lead to?",
        "options": [
          "Confusion and inefficiency",
          "A better understanding of the rules",
          "A faster production process",
          "Increased team input"
        ],
        "answer": 0
      },
      {
        "question": "How should colleagues handle mistakes when an error occurs?",
        "options": [
          "Point them out politely and objectively",
          "Deal with them in private without telling the manager",
          "Follow up on them after the project is over",
          "Consequently ignore them to avoid disputes"
        ],
        "answer": 0
      }
    ]
  }
};
`;

const lesson50 = `import { Lesson } from '../types';

export const b2Lesson50: Lesson = {
  "id": "b2-lesson-50",
  "title": "Meetings, Priorities & Deadlines",
  "number": 50,
  "level": "B2",
  "words": [
    {
      "id": "w491",
      "word": "schedule",
      "pronunciation": "/ˈʃedjuːl/ (UK), /ˈskedʒuːl/ (US)",
      "partOfSpeech": "verb, noun",
      "level": "B2",
      "translations": {
        "ru": "назначать / расписание",
        "zh": "安排 / 日程表",
        "es": "programar / horario",
        "fr": "planifier / emploi du temps",
        "de": "planen / Zeitplan",
        "tr": "planlamak / program",
        "ja": "スケジュールを組む / 予定"
      },
      "examples": [
        {
          "en": "We need to schedule a meeting to discuss the new budget priorities.",
          "ru": "Нам нужно назначить собрание, чтобы обсудить новые приоритеты бюджета.",
          "zh": "我们需要安排一次会议来讨论新的预算优先事项。",
          "es": "Necesitamos programar una reunión para discutir las nuevas prioridades del presupuesto.",
          "fr": "Nous devons planifier une réunion pour discuter des nouvelles priorités budgétaires.",
          "de": "Wir müssen ein Meeting planen, um die neuen Budgetprioritäten zu besprechen.",
          "tr": "Yeni bütçe önceliklerini tartışmak için bir toplantı planlamamız gerekiyor.",
          "ja": "新しい予算の優先順位について話し合うために、会議のスケジュールを組む必要があります。"
        },
        {
          "en": "My work schedule is incredibly demanding this week.",
          "ru": "Мое рабочее расписание на этой неделе невероятно насыщенное.",
          "zh": "本周我的工作日程安排得非常满。",
          "es": "Mi horario de trabajo es increíblemente exigente esta semana.",
          "fr": "Mon emploi du temps de travail est incroyablement chargé cette semaine.",
          "de": "Mein Arbeitszeitplan ist diese Woche unglaublich anspruchsvoll.",
          "tr": "Çalışma programım bu hafta inanılmaz derecede yoğun.",
          "ja": "今週の私の仕事のスケジュールは信じられないほど厳しいです。"
        }
      ]
    },
    {
      "id": "w492",
      "word": "put off",
      "pronunciation": "/pʊt ɒf/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "откладывать",
        "zh": "推迟",
        "es": "posponer / aplazar",
        "fr": "repousser / remettre à plus tard",
        "de": "verschieben / aufschieben",
        "tr": "ertelemek",
        "ja": "延期する / 後回しにする"
      },
      "examples": [
        {
          "en": "Due to the CEO's absence, we had to put off the presentation until next Monday.",
          "ru": "Из-за отсутствия генерального директора нам пришлось отложить презентацию до следующего понедельника.",
          "zh": "由于首席执行官不在，我们不得不把演示推迟到下周一。",
          "es": "Debido a la ausencia del CEO, tuvimos que aplazar la presentación hasta el próximo lunes.",
          "fr": "En raison de l'absence du PDG, nous avons dû repousser la présentation à lundi prochain.",
          "de": "Aufgrund der Abwesenheit des CEO mussten wir die Präsentation auf nächsten Montag verschieben.",
          "tr": "CEO'nun yokluğu nedeniyle, sunumu önümüzdeki pazartesiye ertelemek zorunda kaldık.",
          "ja": "CEOが不在のため、プレゼンテーションを来週の月曜日まで延期しなければなりませんでした。"
        },
        {
          "en": "Don't put off making a decision, as time is running out.",
          "ru": "Не откладывай принятие решения, так как время истекает.",
          "zh": "不要推迟做决定，因为时间不多了。",
          "es": "No pospongas la toma de decisiones, ya que el tiempo se acaba.",
          "fr": "Ne remettez pas à plus tard la prise de décision, car le temps presse.",
          "de": "Schieben Sie eine Entscheidung nicht auf, da die Zeit knapp wird.",
          "tr": "Karar vermeyi ertelemeyin, çünkü zaman tükeniyor.",
          "ja": "時間がなくなってきているので、決定を後回しにしないでください。"
        }
      ]
    },
    {
      "id": "w493",
      "word": "workload",
      "pronunciation": "/ˈwɜːkləʊd/",
      "partOfSpeech": "noun",
      "level": "B2",
      "translations": {
        "ru": "рабочая нагрузка / объем работы",
        "zh": "工作量",
        "es": "carga de trabajo",
        "fr": "charge de travail",
        "de": "Arbeitspensum / Arbeitsbelastung",
        "tr": "iş yükü",
        "ja": "仕事量"
      },
      "examples": [
        {
          "en": "The team has been struggling with a heavy workload since three colleagues resigned.",
          "ru": "Команда с трудом справляется с большой рабочей нагрузкой с тех пор, как уволились трое коллег.",
          "zh": "自从三位同事辞职后，团队一直在艰难应对繁重的工作量。",
          "es": "El equipo ha estado luchando con una pesada carga de trabajo desde que tres colegas renunciaron.",
          "fr": "L'équipe lutte contre une lourde charge de travail depuis que trois collègues ont démissionné.",
          "de": "Das Team kämpft mit einem hohen Arbeitspensum, seit drei Kollegen gekündigt haben.",
          "tr": "Üç meslektaşın istifa etmesinden bu yana ekip ağır bir iş yüküyle mücadele ediyor.",
          "ja": "3人の同僚が辞任して以来、チームは重い仕事量に苦労しています。"
        },
        {
          "en": "Managers must ensure that the workload is distributed evenly among staff members.",
          "ru": "Менеджеры должны следить за тем, чтобы объем работы распределялся равномерно между сотрудниками.",
          "zh": "管理者必须确保员工之间的工作量分配合理。",
          "es": "Los gerentes deben asegurarse de que la carga de trabajo se distribuya de manera uniforme entre los miembros del personal.",
          "fr": "Les managers doivent s'assurer que la charge de travail est répartie équitablement entre les membres du personnel.",
          "de": "Führungskräfte müssen sicherstellen, dass die Arbeitsbelastung gleichmäßig auf die Mitarbeiter verteilt wird.",
          "tr": "Yöneticiler, iş yükünün personel arasında eşit olarak dağıtıldığından emin olmalıdır.",
          "ja": "管理者は、仕事量がスタッフ間で均等に分配されるようにしなければなりません。"
        }
      ]
    },
    {
      "id": "w494",
      "word": "tight",
      "pronunciation": "/taɪt/",
      "partOfSpeech": "adjective",
      "level": "B2",
      "translations": {
        "ru": "жесткий / ограниченный / тесный",
        "zh": "紧迫的 / 紧的",
        "es": "apretado / ajustado",
        "fr": "serré / strict",
        "de": "knapp / eng",
        "tr": "sıkı / kısıtlı",
        "ja": "厳しい / きつい"
      },
      "examples": [
        {
          "en": "We are working under a very tight deadline for this project.",
          "ru": "Мы работаем в условиях очень жестких сроков по этому проекту.",
          "zh": "我们做这个项目的时间非常紧迫。",
          "es": "Estamos trabajando bajo un plazo muy ajustado para este proyecto.",
          "fr": "Nous travaillons avec un délai très serré pour ce projet.",
          "de": "Wir arbeiten bei diesem Projekt unter einer sehr knappen Frist.",
          "tr": "Bu proje için çok sıkı bir teslim tarihi altında çalışıyoruz.",
          "ja": "私たちはこのプロジェクトで非常に厳しいスケジュールの下で働いています。"
        },
        {
          "en": "The budget is extremely tight this year, so no extra spending is allowed.",
          "ru": "Бюджет в этом году крайне ограничен, поэтому дополнительные расходы не допускаются.",
          "zh": "今年的预算非常紧张，所以不允许有额外开支。",
          "es": "El presupuesto es extremadamente apretado este año, por lo que no se permiten gastos adicionales.",
          "fr": "Le budget est extrêmement serré cette année, aucune dépense supplémentaire n'est donc autorisée.",
          "de": "Das Budget ist dieses Jahr extrem knapp, sodass keine zusätzlichen Ausgaben erlaubt sind.",
          "tr": "Bütçe bu yıl son derece kısıtlı, bu nedenle ekstra harcamalara izin verilmiyor.",
          "ja": "今年の予算は非常に厳しいため、追加の支出は許可されていません。"
        }
      ]
    },
    {
      "id": "w495",
      "word": "fall behind",
      "pronunciation": "/fɔːl bɪˈhaɪnd/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "отставать",
        "zh": "落后",
        "es": "quedarse atrás / retrasarse",
        "fr": "prendre du retard / se laisser distancer",
        "de": "in Rückstand geraten / zurückfallen",
        "tr": "geride kalmak / gecikmek",
        "ja": "遅れをとる"
      },
      "examples": [
        {
          "en": "If we fall behind schedule, we might lose our most important client.",
          "ru": "Если мы отстанем от графика, мы можем потерять нашего самого важного клиента.",
          "zh": "如果我们进度落后，我们可能会失去最重要的客户。",
          "es": "Si nos retrasamos con el horario, podríamos perder a nuestro cliente más importante.",
          "fr": "Si nous prenons du retard sur le planning, nous pourrions perdre notre client le plus important.",
          "de": "Wenn wir mit dem Zeitplan in Rückstand geraten, könnten wir unseren wichtigsten Kunden verlieren.",
          "tr": "Eğer programın gerisinde kalırsak, en önemli müşterimizi kaybedebiliriz.",
          "ja": "スケジュールに遅れをとると、最も重要なクライアントを失う可能性があります。"
        },
        {
          "en": "She was ill for two weeks and fell behind in her studies.",
          "ru": "Она болела две недели и отстала в учебе.",
          "zh": "她病了两周，学习落后了。",
          "es": "Estuvo enferma durante dos semanas y se quedó atrás en sus estudios.",
          "fr": "Elle a été malade pendant deux semaines et a pris du retard dans ses études.",
          "de": "Sie war zwei Wochen lang krank und fiel im Studium zurück.",
          "tr": "İki hafta hastaydı ve derslerinde geride kaldı.",
          "ja": "彼女は2週間病気になり、勉強に遅れをとりました。"
        }
      ]
    },
    {
      "id": "w496",
      "word": "catch up",
      "pronunciation": "/kætʃ ʌp/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "догонять / наверстывать",
        "zh": "赶上 / 弥补（落下的工作）",
        "es": "ponerse al día / alcanzar",
        "fr": "rattraper son retard / se tenir au courant",
        "de": "aufholen / nacharbeiten",
        "tr": "yetişmek / arayı kapatmak",
        "ja": "追いつく / 遅れを取り戻す"
      },
      "examples": [
        {
          "en": "I need to work late tonight to catch up on some urgent emails.",
          "ru": "Мне нужно сегодня поработать допоздна, чтобы наверстать упущенное и ответить на срочные письма.",
          "zh": "我今晚需要加班来处理一些紧急邮件，弥补落下的工作。",
          "es": "Necesito trabajar hasta tarde esta noche para ponerme al día con algunos correos urgentes.",
          "fr": "Je dois travailler tard ce soir pour rattraper mon retard sur quelques e-mails urgents.",
          "de": "Ich muss heute Abend lange arbeiten, um bei einigen dringenden E-Mails aufzuholen.",
          "tr": "Bazı acil e-postalara yetişmek için bu gece geç saatlere kadar çalışmam gerekiyor.",
          "ja": "いくつかの緊急のメールの遅れを取り戻すために、今夜は遅くまで残業する必要があります。"
        },
        {
          "en": "Let's schedule a meeting next week so we can catch up on your progress.",
          "ru": "Давайте назначим встречу на следующей неделе, чтобы обсудить ваши успехи и ввести меня в курс дела.",
          "zh": "我们下周安排一次会议吧，这样我们可以了解一下你的进展。",
          "es": "Programemos una reunión la próxima semana para que podamos ponernos al día sobre su progreso.",
          "fr": "Planifions une réunion la semaine prochaine pour que nous puissions nous tenir au courant de vos progrès.",
          "de": "Lassen Sie uns nächste Woche ein Meeting planen, damit wir uns über Ihre Fortschritte austauschen können.",
          "tr": "İlerlemeniz hakkında arayı kapatmak için gelecek hafta bir toplantı planlayalım.",
          "ja": "あなたの進捗状況について把握するために、来週会議の予定を入れましょう。"
        }
      ]
    },
    {
      "id": "w497",
      "word": "sort out",
      "pronunciation": "/sɔːt aʊt/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "разбираться с (проблемой) / улаживать",
        "zh": "解决 / 整理好",
        "es": "resolver / solucionar",
        "fr": "régler / résoudre",
        "de": "klären / in Ordnung bringen",
        "tr": "çözmek / halletmek",
        "ja": "解決する / 整理する"
      },
      "examples": [
        {
          "en": "It took them months to sort out the legal complications of the merger.",
          "ru": "У них ушли месяцы, чтобы разобраться с юридическими сложностями слияния.",
          "zh": "他们花了好几个月的时间才解决了合并的法律纠纷。",
          "es": "Les tomó meses resolver las complicaciones legales de la fusión.",
          "fr": "Il leur a fallu des mois pour régler les complications juridiques de la fusion.",
          "de": "Es dauerte Monate, um die rechtlichen Komplikationen der Fusion zu klären.",
          "tr": "Birleşmenin yasal karmaşıklıklarını çözmek ayları aldı.",
          "ja": "合併の法的な複雑な問題を解決するのに彼らは数ヶ月かかりました。"
        },
        {
          "en": "Don't worry about the booking error; I'll sort it out tomorrow morning.",
          "ru": "Не беспокойтесь об ошибке бронирования; я улажу это завтра утром.",
          "zh": "别担心预订错误；我明早会处理好的。",
          "es": "No te preocupes por el error de reserva; lo solucionaré mañana por la mañana.",
          "fr": "Ne vous inquiétez pas pour l'erreur de réservation ; je la réglerai demain matin.",
          "de": "Machen Sie sich keine Sorgen wegen des Buchungsfehlers; ich bringe das morgen früh in Ordnung.",
          "tr": "Rezervasyon hatası için endişelenmeyin; yarın sabah halledeceğim.",
          "ja": "予約のミスについては心配しないでください。明日の朝に解決しておきます。"
        }
      ]
    },
    {
      "id": "w498",
      "word": "milestone",
      "pronunciation": "/ˈmaɪlstəʊn/",
      "partOfSpeech": "noun",
      "level": "B2",
      "translations": {
        "ru": "веха / важный этап",
        "zh": "里程碑 / 重要阶段",
        "es": "hito",
        "fr": "étape importante / jalon",
        "de": "Meilenstein",
        "tr": "dönüm noktası / kilometre taşı",
        "ja": "節目 / マイルストーン"
      },
      "examples": [
        {
          "en": "Completing the first phase of the software on time is a major milestone for our team.",
          "ru": "Своевременное завершение первого этапа разработки ПО — это важная веха для нашей команды.",
          "zh": "按时完成软件的第一阶段是我们团队的一个重要里程碑。",
          "es": "Completar la primera fase del software a tiempo es un gran hito para nuestro equipo.",
          "fr": "Terminer la première phase du logiciel à temps est une étape majeure pour notre équipe.",
          "de": "Der pünktliche Abschluss der ersten Phase der Software ist ein wichtiger Meilenstein für unser Team.",
          "tr": "Yazılımın ilk aşamasını zamanında tamamlamak ekibimiz için önemli bir kilometre taşıdır.",
          "ja": "ソフトウェアの最初のフェーズを予定通りに完了することは、チームにとって大きなマイルストーンです。"
        },
        {
          "en": "The invention of the internet was a significant milestone in human history.",
          "ru": "Изобретение интернета стало значительной вехой в истории человечества.",
          "zh": "互联网的发明是人类历史上的一个重要里程碑。",
          "es": "La invención de Internet fue un hito significativo en la historia de la humanidad.",
          "fr": "L'invention d'Internet a été une étape significative dans l'histoire de l'humanité.",
          "de": "Die Erfindung des Internets war ein bedeutender Meilenstein in der Geschichte der Menschheit.",
          "tr": "İnternetin icadı insanlık tarihinde önemli bir dönüm noktasıydı.",
          "ja": "インターネットの発明は人類の歴史において重要な節目でした。"
        }
      ]
    },
    {
      "id": "w499",
      "word": "whereas",
      "pronunciation": "/ˌweərˈæz/",
      "partOfSpeech": "conjunction",
      "level": "B2",
      "translations": {
        "ru": "в то время как / тогда как",
        "zh": "然而 / 相比之下",
        "es": "mientras que",
        "fr": "tandis que / alors que",
        "de": "während / wohingegen",
        "tr": "oysa / halbuki",
        "ja": "～であるのに対し / その一方で"
      },
      "examples": [
        {
          "en": "He prefers to organize meetings in the morning, whereas she prefers the afternoon.",
          "ru": "Он предпочитает организовывать встречи утром, тогда как она предпочитает после обеда.",
          "zh": "他喜欢在早上安排会议，而她则喜欢在下午。",
          "es": "Él prefiere organizar reuniones por la mañana, mientras que ella prefiere la tarde.",
          "fr": "Il préfère organiser les réunions le matin, tandis qu'elle préfère l'après-midi.",
          "de": "Er organisiert Meetings lieber morgens, wohingegen sie den Nachmittag bevorzugt.",
          "tr": "O toplantıları sabah düzenlemeyi tercih eder, oysa o öğleden sonrayı tercih eder.",
          "ja": "彼は午前中に会議を設定するのを好みますが、その一方で彼女は午後を好みます。"
        },
        {
          "en": "In the north the climate is cold, whereas in the south it is quite warm.",
          "ru": "На севере климат холодный, в то время как на юге довольно теплый.",
          "zh": "北方气候寒冷，而南方却相当温暖。",
          "es": "En el norte el clima es frío, mientras que en el sur es bastante cálido.",
          "fr": "Dans le nord le climat est froid, alors que dans le sud il fait plutôt chaud.",
          "de": "Im Norden ist das Klima kalt, während es im Süden recht warm ist.",
          "tr": "Kuzeyde iklim soğuktur, halbuki güneyde oldukça sıcaktır.",
          "ja": "北部では気候が寒いですが、一方で南部はかなり暖かいです。"
        }
      ]
    },
    {
      "id": "w500",
      "word": "feasible",
      "pronunciation": "/ˈfiːzəbl/",
      "partOfSpeech": "adjective",
      "level": "B2",
      "translations": {
        "ru": "осуществимый / возможный",
        "zh": "可行的 / 行得通的",
        "es": "factible / viable",
        "fr": "réalisable / faisable",
        "de": "machbar / durchführbar",
        "tr": "uygulanabilir / yapılabilir",
        "ja": "実現可能な / 実行可能な"
      },
      "examples": [
        {
          "en": "We need to determine if it is financially feasible to expand into the Asian market.",
          "ru": "Нам нужно определить, финансово ли осуществимо расширение на азиатский рынок.",
          "zh": "我们需要确定向亚洲市场扩张在财务上是否可行。",
          "es": "Necesitamos determinar si es financieramente factible expandirnos al mercado asiático.",
          "fr": "Nous devons déterminer s'il est financièrement réalisable de s'étendre sur le marché asiatique.",
          "de": "Wir müssen feststellen, ob es finanziell machbar ist, auf den asiatischen Markt zu expandieren.",
          "tr": "Asya pazarına açılmanın finansal olarak uygulanabilir olup olmadığını belirlememiz gerekiyor.",
          "ja": "アジア市場への進出が財務的に実行可能かどうかを判断する必要があります。"
        },
        {
          "en": "Although your idea sounds great, it is simply not feasible given our current tight deadline.",
          "ru": "Хотя ваша идея звучит отлично, она просто неосуществима, учитывая наши текущие жесткие сроки.",
          "zh": "尽管你的想法听起来很棒，但考虑到我们目前紧迫的期限，它根本行不通。",
          "es": "Aunque su idea suena genial, simplemente no es factible dado nuestro ajustado plazo actual.",
          "fr": "Bien que votre idée semble excellente, elle n'est tout simplement pas faisable étant donné notre délai actuel très serré.",
          "de": "Obwohl Ihre Idee großartig klingt, ist sie angesichts unserer derzeitigen knappen Frist einfach nicht durchführbar.",
          "tr": "Fikriniz kulağa harika gelse de, mevcut kısıtlı teslim tarihimiz göz önüne alındığında uygulanabilir değil.",
          "ja": "あなたのアイデアは素晴らしいように聞こえますが、現在の厳しいスケジュールを考えると、単に実現不可能です。"
        }
      ]
    }
  ],
  "reading": {
    "title": "Managing Projects and Priorities",
    "text": "In any professional environment, the ability to manage a demanding workload is a vital skill. Project managers often have to schedule multiple tasks simultaneously, ensuring that no team member will fall behind. When deadlines are exceptionally tight, it is easy to panic, but successful teams know how to prioritize and catch up on overdue assignments logically.\n\nOccasionally, unforeseen circumstances arise, and you might have to put off a less urgent meeting to sort out a sudden emergency. For instance, whereas an internal review can be delayed, a presentation for an essential client cannot. Before committing to a new timeline, it is important to analyze whether the adjusted schedule is actually feasible. Achieving every significant milestone gives the team momentum, transforming a stressful environment into a productive one where priorities are clearly defined.",
    "questions": [
      {
        "question": "What is essential when managing a demanding workload?",
        "options": [
          "Prioritizing and organizing tasks logically",
          "Putting off all internal meetings indefinitely",
          "Asking clients for an extended deadline",
          "Refusing any new milestones"
        ],
        "answer": 0
      },
      {
        "question": "According to the text, what might happen if a sudden emergency arises?",
        "options": [
          "You might need to put off a less urgent meeting",
          "You must fall behind schedule",
          "You should declare the project no longer feasible",
          "You will fail to achieve the milestone"
        ],
        "answer": 0
      },
      {
        "question": "Why is it important to analyze an adjusted schedule?",
        "options": [
          "To determine if it is actually feasible",
          "To see if the workload has increased",
          "To explain to clients why you fell behind",
          "Because tight deadlines are always illegal"
        ],
        "answer": 0
      }
    ]
  }
};
`;

const lesson51 = `import { Lesson } from '../types';

export const b2Lesson51: Lesson = {
  "id": "b2-lesson-51",
  "title": "Negotiation & Conflict Resolution",
  "number": 51,
  "level": "B2",
  "words": [
    {
      "id": "w501",
      "word": "work out",
      "pronunciation": "/wɜːk aʊt/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "разрабатывать / находить решение",
        "zh": "解决 / 算出 / 制定出",
        "es": "resolver / elaborar",
        "fr": "trouver une solution / élaborer",
        "de": "erarbeiten / eine Lösung finden",
        "tr": "çözmek / halletmek",
        "ja": "解決する / 案を練る"
      },
      "examples": [
        {
          "en": "The two companies managed to work out a mutually beneficial agreement.",
          "ru": "Двум компаниям удалось выработать взаимовыгодное соглашение.",
          "zh": "两家公司设法达成了一项互惠互利的协议。",
          "es": "Las dos empresas lograron elaborar un acuerdo mutuamente beneficioso.",
          "fr": "Les deux entreprises ont réussi à élaborer un accord mutuellement bénéfique.",
          "de": "Den beiden Unternehmen gelang es, ein für beide Seiten vorteilhaftes Abkommen zu erarbeiten.",
          "tr": "İki şirket karşılıklı yarar sağlayan bir anlaşma çözmeyi başardı.",
          "ja": "両社は互いに利益のある合意案を練り上げることができました。"
        },
        {
          "en": "We still need to work out the exact details of the delivery schedule.",
          "ru": "Нам еще нужно проработать точные детали графика поставок.",
          "zh": "我们仍然需要制定出交付时间表的具体细节。",
          "es": "Todavía necesitamos resolver los detalles exactos del horario de entrega.",
          "fr": "Nous devons encore trouver une solution pour les détails exacts du calendrier de livraison.",
          "de": "Wir müssen noch die genauen Details des Lieferplans erarbeiten.",
          "tr": "Teslimat programının kesin ayrıntılarını hala çözmemiz gerekiyor.",
          "ja": "納品スケジュールの正確な詳細をまだ決める必要があります。"
        }
      ]
    },
    {
      "id": "w502",
      "word": "give in",
      "pronunciation": "/ɡɪv ɪn/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "уступать / сдаваться",
        "zh": "屈服 / 让步",
        "es": "ceder / rendirse",
        "fr": "céder / capituler",
        "de": "nachgeben",
        "tr": "pes etmek / boyun eğmek",
        "ja": "屈する / 譲歩する"
      },
      "examples": [
        {
          "en": "Despite the union's protests, the management refused to give in to their demands.",
          "ru": "Несмотря на протесты профсоюза, руководство отказалось уступить их требованиям.",
          "zh": "尽管工会抗议，管理层还是拒绝向他们的要求让步。",
          "es": "A pesar de las protestas del sindicato, la dirección se negó a ceder a sus demandas.",
          "fr": "Malgré les protestations du syndicat, la direction a refusé de céder à leurs revendications.",
          "de": "Trotz der Proteste der Gewerkschaft weigerte sich die Geschäftsführung, ihren Forderungen nachzugeben.",
          "tr": "Sendikanın protestolarına rağmen, yönetim taleplerine boyun eğmeyi reddetti.",
          "ja": "労働組合の抗議にもかかわらず、経営陣は彼らの要求に譲歩することを拒否しました。"
        },
        {
          "en": "In a successful negotiation, neither side should feel like they were forced to give in entirely.",
          "ru": "В успешных переговорах ни одна из сторон не должна чувствовать, что ее заставили полностью сдаться.",
          "zh": "在一次成功的谈判中，双方都不应该觉得他们是被迫完全让步的。",
          "es": "En una negociación exitosa, ninguna de las partes debería sentir que fue forzada a ceder por completo.",
          "fr": "Dans une négociation réussie, aucune des parties ne devrait avoir l'impression d'avoir été obligée de céder entièrement.",
          "de": "Bei einer erfolgreichen Verhandlung sollte keine Seite das Gefühl haben, völlig nachgeben zu müssen.",
          "tr": "Başarılı bir müzakerede, hiçbir taraf tamamen pes etmeye zorlandığını hissetmemelidir.",
          "ja": "成功した交渉においては、どちらの側も完全に譲歩を強いられたと感じるべきではありません。"
        }
      ]
    },
    {
      "id": "w503",
      "word": "bring up",
      "pronunciation": "/brɪŋ ʌp/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "поднимать (вопрос) / упоминать",
        "zh": "提出 / 提及",
        "es": "sacar a colación / mencionar",
        "fr": "soulever (une question) / aborder",
        "de": "zur Sprache bringen / erwähnen",
        "tr": "gündeme getirmek / bahsetmek",
        "ja": "話題に出す / 提起する"
      },
      "examples": [
        {
          "en": "I didn't want to bring up the issue of the budget, but it is unavoidable.",
          "ru": "Я не хотел поднимать вопрос о бюджете, но это неизбежно.",
          "zh": "我不想提出预算问题，但这是不可避免的。",
          "es": "No quería sacar a colación el tema del presupuesto, pero es inevitable.",
          "fr": "Je ne voulais pas soulever la question du budget, mais c'est inévitable.",
          "de": "Ich wollte das Thema Budget nicht zur Sprache bringen, aber es ist unvermeidlich.",
          "tr": "Bütçe konusunu gündeme getirmek istemedim ama bu kaçınılmaz.",
          "ja": "予算の問題は話題に出したくありませんでしたが、避けられません。"
        },
        {
          "en": "She brings up a very valid point regarding customer satisfaction.",
          "ru": "Она поднимает очень важный вопрос, касающийся удовлетворенности клиентов.",
          "zh": "关于客户满意度，她提出了一个非常合理的观点。",
          "es": "Ella saca a colación un punto muy válido con respecto a la satisfacción del cliente.",
          "fr": "Elle aborde un point très pertinent concernant la satisfaction client.",
          "de": "Sie bringt einen sehr stichhaltigen Punkt hinsichtlich der Kundenzufriedenheit zur Sprache.",
          "tr": "Müşteri memnuniyeti ile ilgili çok geçerli bir noktayı gündeme getiriyor.",
          "ja": "彼女は顧客満足度に関する非常に妥当な指摘を提起しています。"
        }
      ]
    },
    {
      "id": "w504",
      "word": "nevertheless",
      "pronunciation": "/ˌnevəðəˈles/",
      "partOfSpeech": "adverb",
      "level": "B2",
      "translations": {
        "ru": "тем не менее / однако",
        "zh": "然而 / 尽管如此",
        "es": "sin embargo / no obstante",
        "fr": "néanmoins / cependant",
        "de": "dennoch / nichtsdestotrotz",
        "tr": "yine de / buna rağmen",
        "ja": "それにもかかわらず"
      },
      "examples": [
        {
          "en": "The proposal has a few flaws; nevertheless, we believe it has great potential.",
          "ru": "В предложении есть несколько недостатков; тем не менее, мы считаем, что у него большой потенциал.",
          "zh": "该提案有一些缺陷；尽管如此，我们认为它有很大的潜力。",
          "es": "La propuesta tiene algunas fallas; no obstante, creemos que tiene un gran potencial.",
          "fr": "La proposition a quelques défauts ; néanmoins, nous pensons qu'elle a un grand potentiel.",
          "de": "Der Vorschlag hat einige Mängel; dennoch glauben wir, dass er großes Potenzial hat.",
          "tr": "Teklifin birkaç kusuru var; yine de, büyük bir potansiyele sahip olduğuna inanıyoruz.",
          "ja": "その提案にはいくつかの欠陥がありますが、それにもかかわらず、私たちはそれに大きな可能性があると信じています。"
        },
        {
          "en": "We were deeply disappointed by the delay. Nevertheless, we are committed to finishing the project.",
          "ru": "Мы были глубоко разочарованы задержкой. Тем не менее, мы полны решимости закончить проект.",
          "zh": "我们对延误感到非常失望。尽管如此，我们仍致力于完成该项目。",
          "es": "Estábamos profundamente decepcionados por el retraso. Sin embargo, estamos comprometidos a terminar el proyecto.",
          "fr": "Nous avons été profondément déçus par le retard. Cependant, nous nous engageons à terminer le projet.",
          "de": "Wir waren zutiefst enttäuscht über die Verzögerung. Nichtsdestotrotz sind wir entschlossen, das Projekt abzuschließen.",
          "tr": "Gecikmeden dolayı derin bir hayal kırıklığına uğradık. Buna rağmen, projeyi bitirmeye kararlıyız.",
          "ja": "遅延には深く失望しました。それにもかかわらず、私たちはプロジェクトを完了することに尽力します。"
        }
      ]
    },
    {
      "id": "w505",
      "word": "objection",
      "pronunciation": "/əbˈdʒekʃn/",
      "partOfSpeech": "noun",
      "level": "B2",
      "translations": {
        "ru": "возражение / протест",
        "zh": "反对 / 异议",
        "es": "objeción / reparo",
        "fr": "objection / opposition",
        "de": "Einwand / Widerspruch",
        "tr": "itiraz / karşı çıkma",
        "ja": "異議 / 反対"
      },
      "examples": [
        {
          "en": "Does anyone have any strong objections to the new company policy?",
          "ru": "Есть ли у кого-нибудь серьезные возражения против новой политики компании?",
          "zh": "有人对公司的新政策有强烈异议吗？",
          "es": "¿Alguien tiene alguna fuerte objeción a la nueva política de la empresa?",
          "fr": "Quelqu'un a-t-il de fortes objections à la nouvelle politique de l'entreprise ?",
          "de": "Hat jemand ernsthafte Einwände gegen die neue Unternehmensrichtlinie?",
          "tr": "Yeni şirket politikasına güçlü bir itirazı olan var mı?",
          "ja": "会社の新しい方針に強い異議がある人はいますか？"
        },
        {
          "en": "She raised a valid objection regarding the safety of the equipment.",
          "ru": "Она выдвинула обоснованное возражение касательно безопасности оборудования.",
          "zh": "她对设备的安全提出了合理的反对意见。",
          "es": "Ella planteó una objeción válida con respecto a la seguridad del equipo.",
          "fr": "Elle a soulevé une objection valable concernant la sécurité de l'équipement.",
          "de": "Sie erhob einen berechtigten Einwand bezüglich der Sicherheit der Ausrüstung.",
          "tr": "Ekipmanın güvenliği ile ilgili geçerli bir itirazda bulundu.",
          "ja": "彼女は機器の安全性に関して正当な異議を唱えました。"
        }
      ]
    },
    {
      "id": "w506",
      "word": "concession",
      "pronunciation": "/kənˈseʃn/",
      "partOfSpeech": "noun",
      "level": "B2",
      "translations": {
        "ru": "уступка",
        "zh": "让步 / 妥协",
        "es": "concesión",
        "fr": "concession",
        "de": "Zugeständnis",
        "tr": "ödün / taviz",
        "ja": "譲歩 / 妥協"
      },
      "examples": [
        {
          "en": "To reach an agreement, both sides will have to make some concessions.",
          "ru": "Чтобы достичь соглашения, обеим сторонам придется пойти на некоторые уступки.",
          "zh": "为了达成协议，双方都必须做出一些让步。",
          "es": "Para llegar a un acuerdo, ambas partes tendrán que hacer algunas concesiones.",
          "fr": "Pour parvenir à un accord, les deux parties devront faire quelques concessions.",
          "de": "Um eine Einigung zu erzielen, müssen beide Seiten einige Zugeständnisse machen.",
          "tr": "Bir anlaşmaya varmak için her iki tarafın da bazı tavizler vermesi gerekecek.",
          "ja": "合意に達するために、双方がいくつかの譲歩をしなければなりません。"
        },
        {
          "en": "The government refused to offer any concessions to the striking workers.",
          "ru": "Правительство отказалось пойти на какие-либо уступки бастующим рабочим.",
          "zh": "政府拒绝向罢工工人提供任何妥协。",
          "es": "El gobierno se negó a ofrecer ninguna concesión a los trabajadores en huelga.",
          "fr": "Le gouvernement a refusé d'offrir toute concession aux travailleurs en grève.",
          "de": "Die Regierung weigerte sich, den streikenden Arbeitern irgendwelche Zugeständnisse anzubieten.",
          "tr": "Hükümet, grev yapan işçilere herhangi bir ödün vermeyi reddetti.",
          "ja": "政府は、ストライキ中の労働者に対していかなる譲歩も提供することを拒否しました。"
        }
      ]
    },
    {
      "id": "w507",
      "word": "tentative",
      "pronunciation": "/ˈtentətɪv/",
      "partOfSpeech": "adjective",
      "level": "B2",
      "translations": {
        "ru": "предварительный / неуверенный",
        "zh": "初步的 / 试探性的",
        "es": "tentativo / provisional",
        "fr": "provisoire / hésitant",
        "de": "vorläufig / zaghaft",
        "tr": "geçici / kesin olmayan",
        "ja": "仮の / 暫定的な"
      },
      "examples": [
        {
          "en": "We have reached a tentative agreement, but the final details are yet to be confirmed.",
          "ru": "Мы достигли предварительного соглашения, но окончательные детали еще не подтверждены.",
          "zh": "我们已经达成了一项初步协议，但最终细节尚未确认。",
          "es": "Hemos llegado a un acuerdo tentativo, pero los detalles finales aún están por confirmar.",
          "fr": "Nous avons conclu un accord provisoire, mais les détails finaux restent à confirmer.",
          "de": "Wir haben eine vorläufige Einigung erzielt, aber die endgültigen Details müssen noch bestätigt werden.",
          "tr": "Geçici bir anlaşmaya vardık, ancak nihai ayrıntılar henüz onaylanmadı.",
          "ja": "仮の合意には達しましたが、最終的な詳細はまだ確認されていません。"
        },
        {
          "en": "He made a tentative suggestion about changing the deadline.",
          "ru": "Он сделал неуверенное предложение об изменении сроков.",
          "zh": "他试探性地提出了关于改变截止日期的建议。",
          "es": "Hizo una sugerencia tentativa sobre cambiar la fecha límite.",
          "fr": "Il a fait une suggestion hésitante concernant le changement de délai.",
          "de": "Er machte einen zaghaften Vorschlag, die Frist zu ändern.",
          "tr": "Teslim tarihini değiştirmeyle ilgili kesin olmayan bir öneride bulundu.",
          "ja": "彼は締め切りの変更について、控えめな提案をしました。"
        }
      ]
    },
    {
      "id": "w508",
      "word": "viable",
      "pronunciation": "/ˈvaɪəbl/",
      "partOfSpeech": "adjective",
      "level": "B2",
      "translations": {
        "ru": "жизнеспособный / реальный",
        "zh": "切实可行的",
        "es": "viable / factible",
        "fr": "viable / réalisable",
        "de": "rentabel / machbar",
        "tr": "uygulanabilir / yaşayabilir",
        "ja": "実行可能な / 実用的な"
      },
      "examples": [
        {
          "en": "We must find a commercially viable solution to this problem.",
          "ru": "Мы должны найти коммерчески жизнеспособное решение этой проблемы.",
          "zh": "我们必须找到一个在商业上切实可行的解决方案。",
          "es": "Debemos encontrar una solución comercialmente viable a este problema.",
          "fr": "Nous devons trouver une solution commercialement viable à ce problème.",
          "de": "Wir müssen eine kommerziell rentable Lösung für dieses Problem finden.",
          "tr": "Bu soruna ticari olarak uygulanabilir bir çözüm bulmalıyız.",
          "ja": "この問題に対して商業的に実行可能な解決策を見つける必要があります。"
        },
        {
          "en": "Without funding, the project is no longer viable.",
          "ru": "Без финансирования проект больше не является жизнеспособным.",
          "zh": "没有资金，该项目将不再可行。",
          "es": "Sin financiación, el proyecto ya no es viable.",
          "fr": "Sans financement, le projet n'est plus viable.",
          "de": "Ohne Finanzierung ist das Projekt nicht mehr machbar.",
          "tr": "Finansman olmadan, proje artık uygulanabilir değil.",
          "ja": "資金がなければ、このプロジェクトはもはや実用的ではありません。"
        }
      ]
    },
    {
      "id": "w509",
      "word": "leverage",
      "pronunciation": "/ˈliːvərɪdʒ/ (UK), /ˈlevərɪdʒ/ (US)",
      "partOfSpeech": "noun, verb",
      "level": "B2",
      "translations": {
        "ru": "рычаг давления / использовать с выгодой",
        "zh": "影响力 / 利用",
        "es": "ventaja (influencia) / aprovechar",
        "fr": "moyen de pression / tirer parti de",
        "de": "Druckmittel / wirksam einsetzen",
        "tr": "koz / avantaj sağlamak",
        "ja": "影響力 / 活用する"
      },
      "examples": [
        {
          "en": "The union used the upcoming deadline as leverage during the negotiations.",
          "ru": "Профсоюз использовал приближающийся срок как рычаг давления во время переговоров.",
          "zh": "工会在谈判中把即将到来的截止日期作为谈判筹码。",
          "es": "El sindicato utilizó el plazo inminente como ventaja durante las negociaciones.",
          "fr": "Le syndicat a utilisé l'échéance imminente comme moyen de pression lors des négociations.",
          "de": "Die Gewerkschaft nutzte die bevorstehende Frist als Druckmittel während der Verhandlungen.",
          "tr": "Sendika, müzakereler sırasında yaklaşan teslim tarihini koz olarak kullandı.",
          "ja": "労働組合は交渉中、迫り来る締め切りを交渉の材料（影響力）として使いました。"
        },
        {
          "en": "We need to leverage our existing technology to enter the new market.",
          "ru": "Нам нужно использовать с выгодой нашу существующую технологию, чтобы выйти на новый рынок.",
          "zh": "我们需要利用现有的技术进入新市场。",
          "es": "Necesitamos aprovechar nuestra tecnología existente para ingresar al nuevo mercado.",
          "fr": "Nous devons tirer parti de notre technologie existante pour pénétrer le nouveau marché.",
          "de": "Wir müssen unsere bestehende Technologie wirksam einsetzen, um in den neuen Markt einzutreten.",
          "tr": "Yeni pazara girmek için mevcut teknolojimizi avantaja çevirmeliyiz.",
          "ja": "新しい市場に参入するために、既存の技術を活用する必要があります。"
        }
      ]
    },
    {
      "id": "w510",
      "word": "accordingly",
      "pronunciation": "/əˈkɔːdɪŋli/",
      "partOfSpeech": "adverb",
      "level": "B2",
      "translations": {
        "ru": "соответственно / должным образом",
        "zh": "相应地",
        "es": "en consecuencia / debidamente",
        "fr": "en conséquence",
        "de": "dementsprechend / entsprechend",
        "tr": "buna göre / uygun şekilde",
        "ja": "それに応じて"
      },
      "examples": [
        {
          "en": "The budget has been reduced, so we must adjust our plans accordingly.",
          "ru": "Бюджет был сокращен, поэтому мы должны соответствующим образом скорректировать наши планы.",
          "zh": "预算已经削减，因此我们必须相应地调整我们的计划。",
          "es": "El presupuesto se ha reducido, por lo que debemos ajustar nuestros planes en consecuencia.",
          "fr": "Le budget a été réduit, nous devons donc ajuster nos plans en conséquence.",
          "de": "Das Budget wurde gekürzt, daher müssen wir unsere Pläne dementsprechend anpassen.",
          "tr": "Bütçe küçültüldü, bu yüzden planlarımızı buna göre ayarlamalıyız.",
          "ja": "予算が削減されたため、それに応じて計画を調整しなければなりません。"
        },
        {
          "en": "Please read the new safety regulations and act accordingly.",
          "ru": "Пожалуйста, прочитайте новые правила техники безопасности и действуйте должным образом.",
          "zh": "请阅读新的安全规定并采取相应行动。",
          "es": "Por favor, lea las nuevas regulaciones de seguridad y actúe debidamente.",
          "fr": "Veuillez lire les nouvelles règles de sécurité et agir en conséquence.",
          "de": "Bitte lesen Sie die neuen Sicherheitsvorschriften und handeln Sie entsprechend.",
          "tr": "Lütfen yeni güvenlik düzenlemelerini okuyun ve uygun şekilde hareket edin.",
          "ja": "新しい安全規制を読み、それに応じて行動してください。"
        }
      ]
    }
  ],
  "reading": {
    "title": "Resolving Conflicts and Reaching Outcomes",
    "text": "Negotiation is an essential part of business, particularly when partners need to work out a complex agreement. Often, one party will bring up an objection that threatens to stop the process entirely. In these moments, understanding what leverage you possess is crucial. A strong position allows you to guide the discussion without appearing hostile.\n\nNevertheless, a successful negotiation requires flexibility. Neither side wants to feel that they are forced to give in entirely. Therefore, offering a concession can demonstrate goodwill and help both sides reach a tentative agreement. Once a viable compromise is found, the teams can adjust their expectations accordingly and proceed with confidence. Professional conflict resolution is not about defeating the other party; it is about finding a solution that allows both organizations to succeed together.",
    "questions": [
      {
        "question": "What is a common threat to the negotiation process mentioned in the text?",
        "options": [
          "When a party brings up an objection",
          "When neither side brings up leverage",
          "When the agreement is too viable",
          "When companies give in too quickly"
        ],
        "answer": 0
      },
      {
        "question": "Why is offering a concession useful?",
        "options": [
          "It demonstrates goodwill and helps reach an agreement",
          "It forces the other side to give in entirely",
          "It proves that your leverage is weak",
          "It makes the compromise less viable"
        ],
        "answer": 0
      },
      {
        "question": "What is the true goal of professional conflict resolution?",
        "options": [
          "Finding a solution where both organizations succeed",
          "Defeating the other party entirely",
          "Refusing to make any tentative changes",
          "Adjusting the agreement accordingly to ruin the partner"
        ],
        "answer": 0
      }
    ]
  }
};
`;

const lesson52 = `import { Lesson } from '../types';

export const b2Lesson52: Lesson = {
  "id": "b2-lesson-52",
  "title": "Professional Emails, Proposals & Feedback",
  "number": 52,
  "level": "B2",
  "words": [
    {
      "id": "w511",
      "word": "proposal",
      "pronunciation": "/prəˈpəʊzl/",
      "partOfSpeech": "noun",
      "level": "B2",
      "translations": {
        "ru": "предложение (проект, план)",
        "zh": "提议 / 提案",
        "es": "propuesta",
        "fr": "proposition",
        "de": "Vorschlag / Angebot",
        "tr": "teklif / öneri",
        "ja": "提案 / 企画案"
      },
      "examples": [
        {
          "en": "We will review your project proposal and get back to you by Friday.",
          "ru": "Мы рассмотрим ваше проектное предложение и свяжемся с вами до пятницы.",
          "zh": "我们将审查您的项目提案，并在周五之前给您回复。",
          "es": "Revisaremos su propuesta de proyecto y le responderemos antes del viernes.",
          "fr": "Nous examinerons votre proposition de projet et vous répondrons d'ici vendredi.",
          "de": "Wir werden Ihren Projektvorschlag prüfen und uns bis Freitag bei Ihnen melden.",
          "tr": "Proje teklifinizi inceleyip cuma gününe kadar size geri döneceğiz.",
          "ja": "プロジェクトの提案を検討し、金曜日までにご連絡いたします。"
        },
        {
          "en": "The committee drafted a proposal to improve workplace safety.",
          "ru": "Комитет подготовил предложение по улучшению безопасности на рабочем месте.",
          "zh": "委员会起草了一份改善工作场所安全的提案。",
          "es": "El comité redactó una propuesta para mejorar la seguridad en el lugar de trabajo.",
          "fr": "Le comité a rédigé une proposition pour améliorer la sécurité au travail.",
          "de": "Der Ausschuss entwarf einen Vorschlag zur Verbesserung der Sicherheit am Arbeitsplatz.",
          "tr": "Komite, işyeri güvenliğini artırmak için bir teklif hazırladı.",
          "ja": "委員会は職場の安全性を向上させるための提案を作成しました。"
        }
      ]
    },
    {
      "id": "w512",
      "word": "elaborate",
      "pronunciation": "/ɪˈlæbəreɪt/ (verb), /ɪˈlæbərət/ (adj)",
      "partOfSpeech": "verb, adjective",
      "level": "B2",
      "translations": {
        "ru": "вдаваться в подробности / продуманный",
        "zh": "详尽说明 / 复杂的",
        "es": "entrar en detalles / elaborado",
        "fr": "développer (une idée) / élaboré",
        "de": "näher ausführen / ausführlich",
        "tr": "ayrıntıya girmek / detaylı",
        "ja": "詳しく説明する / 念入りな"
      },
      "examples": [
        {
          "en": "Could you please elaborate on the points you made in your email?",
          "ru": "Не могли бы вы подробнее остановиться на пунктах, которые вы упомянули в своем письме?",
          "zh": "你能详细说明一下你在邮件中提出的观点吗？",
          "es": "¿Podría entrar en detalles sobre los puntos que mencionó en su correo electrónico?",
          "fr": "Pourriez-vous développer les points que vous avez mentionnés dans votre e-mail ?",
          "de": "Könnten Sie die Punkte, die Sie in Ihrer E-Mail genannt haben, bitte näher ausführen?",
          "tr": "E-postanızda belirttiğiniz noktaları biraz daha ayrıntılı açıklar mısınız?",
          "ja": "メールで指摘された点について、もう少し詳しく説明していただけますか？"
        },
        {
          "en": "They created an elaborate plan to launch the new product.",
          "ru": "Они создали детально продуманный план запуска нового продукта.",
          "zh": "他们制定了一个详尽的计划来推出新产品。",
          "es": "Crearon un plan elaborado para lanzar el nuevo producto.",
          "fr": "Ils ont créé un plan élaboré pour lancer le nouveau produit.",
          "de": "Sie haben einen ausführlichen Plan zur Einführung des neuen Produkts erstellt.",
          "tr": "Yeni ürünü piyasaya sürmek için detaylı bir plan oluşturdular.",
          "ja": "彼らは新製品を発表するための念入りな計画を立てました。"
        }
      ]
    },
    {
      "id": "w513",
      "word": "constructive",
      "pronunciation": "/kənˈstrʌktɪv/",
      "partOfSpeech": "adjective",
      "level": "B2",
      "translations": {
        "ru": "конструктивный / созидательный",
        "zh": "建设性的",
        "es": "constructivo",
        "fr": "constructif",
        "de": "konstruktiv",
        "tr": "yapıcı",
        "ja": "建設的な"
      },
      "examples": [
        {
          "en": "We welcome any constructive criticism that will help improve our service.",
          "ru": "Мы приветствуем любую конструктивную критику, которая поможет улучшить наш сервис.",
          "zh": "我们欢迎任何有助于改善我们服务的建设性批评。",
          "es": "Agradecemos cualquier crítica constructiva que nos ayude a mejorar nuestro servicio.",
          "fr": "Nous accueillons toute critique constructive qui aidera à améliorer notre service.",
          "de": "Wir begrüßen jede konstruktive Kritik, die dazu beiträgt, unseren Service zu verbessern.",
          "tr": "Hizmetimizi iyileştirmeye yardımcı olacak her türlü yapıcı eleştiriyi memnuniyetle karşılıyoruz.",
          "ja": "当社のサービス向上に役立つ建設的な批判を歓迎します。"
        },
        {
          "en": "The feedback she provided was highly constructive and professional.",
          "ru": "Отзыв, который она предоставила, был весьма конструктивным и профессиональным.",
          "zh": "她提供的反馈极具建设性且非常专业。",
          "es": "Los comentarios que proporcionó fueron muy constructivos y profesionales.",
          "fr": "Les retours qu'elle a fournis étaient très constructifs et professionnels.",
          "de": "Das Feedback, das sie gab, war äußerst konstruktiv und professionell.",
          "tr": "Sağladığı geri bildirim son derece yapıcı ve profesyoneldi.",
          "ja": "彼女が提供したフィードバックは非常に建設的でプロフェッショナルなものでした。"
        }
      ]
    },
    {
      "id": "w514",
      "word": "promptly",
      "pronunciation": "/ˈprɒmptli/",
      "partOfSpeech": "adverb",
      "level": "B2",
      "translations": {
        "ru": "быстро / без задержки / точно в срок",
        "zh": "迅速地 / 准时地",
        "es": "prontamente / rápidamente",
        "fr": "rapidement / ponctuellement",
        "de": "umgehend / pünktlich",
        "tr": "derhal / anında",
        "ja": "迅速に / 期限通りに"
      },
      "examples": [
        {
          "en": "Please review the attached document and reply promptly.",
          "ru": "Пожалуйста, просмотрите прикрепленный документ и ответьте без задержки.",
          "zh": "请查阅附件文件并尽快回复。",
          "es": "Revise el documento adjunto y responda prontamente.",
          "fr": "Veuillez examiner le document ci-joint et répondre rapidement.",
          "de": "Bitte prüfen Sie das angehängte Dokument und antworten Sie umgehend.",
          "tr": "Lütfen ekteki belgeyi inceleyin ve derhal yanıtlayın.",
          "ja": "添付ファイルを確認し、迅速に返信してください。"
        },
        {
          "en": "The meeting will start promptly at 9:00 AM.",
          "ru": "Собрание начнется ровно в 9:00 утра.",
          "zh": "会议将于上午9点准时开始。",
          "es": "La reunión comenzará puntualmente a las 9:00 AM.",
          "fr": "La réunion commencera ponctuellement à 9h00.",
          "de": "Die Besprechung beginnt pünktlich um 9:00 Uhr.",
          "tr": "Toplantı saat tam 09:00'da başlayacaktır.",
          "ja": "会議は午前9時ちょうどに開始されます。"
        }
      ]
    },
    {
      "id": "w515",
      "word": "therefore",
      "pronunciation": "/ˈðeəfɔː(r)/",
      "partOfSpeech": "adverb",
      "level": "B2",
      "translations": {
        "ru": "поэтому / следовательно",
        "zh": "因此 / 所以",
        "es": "por lo tanto",
        "fr": "par conséquent / donc",
        "de": "deshalb / daher",
        "tr": "bu nedenle / dolayısıyla",
        "ja": "それゆえに / したがって"
      },
      "examples": [
        {
          "en": "The server crashed; therefore, we lost some of the recent data.",
          "ru": "Сервер упал; поэтому мы потеряли часть последних данных.",
          "zh": "服务器崩溃了；因此，我们丢失了一些最近的数据。",
          "es": "El servidor colapsó; por lo tanto, perdimos algunos de los datos recientes.",
          "fr": "Le serveur est tombé en panne ; par conséquent, nous avons perdu une partie des données récentes.",
          "de": "Der Server ist abgestürzt; deshalb haben wir einige der neuesten Daten verloren.",
          "tr": "Sunucu çöktü; bu nedenle son verilerin bir kısmını kaybettik.",
          "ja": "サーバーがクラッシュしたため、したがって最近のデータの一部が失われました。"
        },
        {
          "en": "She lacked the necessary experience and therefore was not offered the job.",
          "ru": "У нее не было необходимого опыта, и следовательно, ей не предложили работу.",
          "zh": "她缺乏必要的经验，因此没有被录用。",
          "es": "Le faltaba la experiencia necesaria y, por lo tanto, no se le ofreció el trabajo.",
          "fr": "Elle manquait d'expérience, elle n'a donc pas obtenu le poste.",
          "de": "Ihr fehlte die nötige Erfahrung und daher wurde ihr der Job nicht angeboten.",
          "tr": "Gerekli tecrübeye sahip değildi ve dolayısıyla iş teklif edilmedi.",
          "ja": "彼女には必要な経験が欠けていたため、その仕事は提供されませんでした。"
        }
      ]
    },
    {
      "id": "w516",
      "word": "look into",
      "pronunciation": "/lʊk ˈɪntuː/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "расследовать / изучать (вопрос)",
        "zh": "调查 / 研究",
        "es": "investigar / examinar",
        "fr": "examiner / se renseigner sur",
        "de": "untersuchen / prüfen",
        "tr": "incelemek / araştırmak",
        "ja": "調査する / 詳しく調べる"
      },
      "examples": [
        {
          "en": "Thank you for bringing this to our attention; we will look into the matter immediately.",
          "ru": "Спасибо, что обратили на это наше внимание; мы немедленно изучим этот вопрос.",
          "zh": "感谢您提醒我们注意此事；我们将立即调查此事。",
          "es": "Gracias por informarnos sobre esto; investigaremos el asunto de inmediato.",
          "fr": "Merci d'avoir porté ceci à notre attention ; nous allons examiner la question immédiatement.",
          "de": "Vielen Dank, dass Sie uns darauf aufmerksam gemacht haben; wir werden die Angelegenheit umgehend untersuchen.",
          "tr": "Bunu dikkatimize sunduğunuz için teşekkür ederiz; konuyu hemen araştıracağız.",
          "ja": "この件についてお知らせいただきありがとうございます。直ちに調査いたします。"
        },
        {
          "en": "The manager promised to look into the complaints raised by the staff.",
          "ru": "Менеджер пообещал разобраться с жалобами, поданными персоналом.",
          "zh": "经理承诺调查员工提出的投诉。",
          "es": "El gerente prometió examinar las quejas presentadas por el personal.",
          "fr": "Le manager a promis de se renseigner sur les plaintes soulevées par le personnel.",
          "de": "Der Manager versprach, die von den Mitarbeitern vorgebrachten Beschwerden zu prüfen.",
          "tr": "Yönetici, personelin şikayetlerini inceleyeceğine söz verdi.",
          "ja": "マネージャーは、スタッフから提起された不満について詳しく調べることを約束しました。"
        }
      ]
    },
    {
      "id": "w517",
      "word": "turn down",
      "pronunciation": "/tɜːn daʊn/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "отклонять (предложение) / отказывать",
        "zh": "拒绝",
        "es": "rechazar",
        "fr": "rejeter / refuser",
        "de": "ablehnen",
        "tr": "reddetmek / geri çevirmek",
        "ja": "断る / 却下する"
      },
      "examples": [
        {
          "en": "Unfortunately, they decided to turn down our business proposal.",
          "ru": "К сожалению, они решили отклонить наше коммерческое предложение.",
          "zh": "不幸的是，他们决定拒绝我们的商业提案。",
          "es": "Desafortunadamente, decidieron rechazar nuestra propuesta comercial.",
          "fr": "Malheureusement, ils ont décidé de rejeter notre proposition commerciale.",
          "de": "Leider haben sie beschlossen, unser Geschäftsangebot abzulehnen.",
          "tr": "Ne yazık ki, iş teklifimizi reddetmeye karar verdiler.",
          "ja": "残念ながら、彼らは私たちの事業提案を断ることに決めました。"
        },
        {
          "en": "He had to turn down the job offer because the salary was too low.",
          "ru": "Ему пришлось отказаться от предложения о работе, потому что зарплата была слишком низкой.",
          "zh": "他不得不拒绝了这份工作邀约，因为薪水太低了。",
          "es": "Tuvo que rechazar la oferta de trabajo porque el salario era demasiado bajo.",
          "fr": "Il a dû refuser l'offre d'emploi car le salaire était trop bas.",
          "de": "Er musste das Stellenangebot ablehnen, weil das Gehalt zu niedrig war.",
          "tr": "Maaş çok düşük olduğu için iş teklifini geri çevirmek zorunda kaldı.",
          "ja": "給与が低すぎたため、彼はその仕事のオファーを断らざるを得ませんでした。"
        }
      ]
    },
    {
      "id": "w518",
      "word": "get back",
      "pronunciation": "/ɡet bæk/",
      "partOfSpeech": "phrasal verb",
      "level": "B2",
      "translations": {
        "ru": "связаться (позже) / ответить",
        "zh": "回复 / 恢复联系",
        "es": "responder / volver a contactar",
        "fr": "recontacter / répondre",
        "de": "sich wieder melden / zurückkommen auf",
        "tr": "geri dönmek (cevap vermek)",
        "ja": "返事をする / 後で連絡する"
      },
      "examples": [
        {
          "en": "I don't have the figures right now, but I will get back to you this afternoon.",
          "ru": "У меня сейчас нет цифр, но я свяжусь с вами сегодня днем.",
          "zh": "我现在没有数据，但我会在今天下午给您回复。",
          "es": "No tengo las cifras en este momento, pero le responderé esta tarde.",
          "fr": "Je n'ai pas les chiffres pour le moment, mais je vous recontacterai cet après-midi.",
          "de": "Ich habe die Zahlen im Moment nicht, werde mich aber heute Nachmittag wieder bei Ihnen melden.",
          "tr": "Şu an rakamlar elimde yok, ama bu öğleden sonra size geri döneceğim.",
          "ja": "今は数字が手元にありませんが、今日の午後改めてご連絡します。"
        },
        {
          "en": "Please get back to us as soon as you have reviewed the contract.",
          "ru": "Пожалуйста, свяжитесь с нами, как только вы рассмотрите контракт.",
          "zh": "在您审核完合同后，请尽快回复我们。",
          "es": "Por favor, vuelva a contactarnos tan pronto como haya revisado el contrato.",
          "fr": "Veuillez nous recontacter dès que vous aurez examiné le contrat.",
          "de": "Bitte melden Sie sich bei uns, sobald Sie den Vertrag geprüft haben.",
          "tr": "Sözleşmeyi incelediğinizde lütfen en kısa sürede bize geri dönün.",
          "ja": "契約書の確認が完了し次第、折り返しご連絡ください。"
        }
      ]
    },
    {
      "id": "w519",
      "word": "inquiry",
      "pronunciation": "/ɪnˈkwaɪəri/ (UK), /ˈɪnkwəri/ (US)",
      "partOfSpeech": "noun",
      "level": "B2",
      "translations": {
        "ru": "наведение справок / запрос / расследование",
        "zh": "咨询 / 调查",
        "es": "consulta / investigación",
        "fr": "demande de renseignements / enquête",
        "de": "Anfrage / Untersuchung",
        "tr": "soruşturma / bilgi alma",
        "ja": "問い合わせ / 調査"
      },
      "examples": [
        {
          "en": "We have received a high volume of inquiries regarding the new policy.",
          "ru": "Мы получили большое количество запросов относительно новой политики.",
          "zh": "我们收到了大量关于新政策的咨询。",
          "es": "Hemos recibido un gran volumen de consultas con respecto a la nueva política.",
          "fr": "Nous avons reçu un grand nombre de demandes de renseignements concernant la nouvelle politique.",
          "de": "Wir haben eine große Anzahl von Anfragen zur neuen Richtlinie erhalten.",
          "tr": "Yeni politikayla ilgili çok sayıda bilgi alma talebi aldık.",
          "ja": "新しい方針に関する多数の問い合わせをいただいております。"
        },
        {
          "en": "The board has launched an official inquiry into the accounting practices.",
          "ru": "Совет директоров начал официальное расследование бухгалтерской практики.",
          "zh": "董事会已对会计做法展开官方调查。",
          "es": "La junta ha iniciado una investigación oficial sobre las prácticas contables.",
          "fr": "Le conseil a lancé une enquête officielle sur les pratiques comptables.",
          "de": "Der Vorstand hat eine offizielle Untersuchung der Buchhaltungspraktiken eingeleitet.",
          "tr": "Yönetim kurulu, muhasebe uygulamalarıyla ilgili resmi bir soruşturma başlattı.",
          "ja": "取締役会は、会計慣行に関する公式な調査を開始しました。"
        }
      ]
    },
    {
      "id": "w520",
      "word": "behalf",
      "pronunciation": "/bɪˈhɑːf/",
      "partOfSpeech": "noun",
      "level": "B2",
      "translations": {
        "ru": "от имени / ради (on behalf of)",
        "zh": "代表",
        "es": "en nombre de",
        "fr": "au nom de",
        "de": "im Namen von",
        "tr": "adına",
        "ja": "（〜の）代わりに / （〜を）代表して"
      },
      "examples": [
        {
          "en": "I am writing to you on behalf of the entire management team.",
          "ru": "Я пишу вам от имени всей руководящей команды.",
          "zh": "我代表整个管理团队给您写信。",
          "es": "Le escribo en nombre de todo el equipo de gestión.",
          "fr": "Je vous écris au nom de toute l'équipe de direction.",
          "de": "Ich schreibe Ihnen im Namen des gesamten Managementteams.",
          "tr": "Size tüm yönetim ekibi adına yazıyorum.",
          "ja": "経営陣全体を代表して、あなたに手紙を書いています。"
        },
        {
          "en": "He accepted the award on behalf of his colleagues who could not attend.",
          "ru": "Он принял награду от имени своих коллег, которые не смогли присутствовать.",
          "zh": "他代表未能出席的同事接受了该奖项。",
          "es": "Aceptó el premio en nombre de sus colegas que no pudieron asistir.",
          "fr": "Il a accepté le prix au nom de ses collègues qui n'ont pas pu être présents.",
          "de": "Er nahm die Auszeichnung im Namen seiner Kollegen entgegen, die nicht teilnehmen konnten.",
          "tr": "Katılamayan meslektaşları adına ödülü kabul etti.",
          "ja": "彼は、出席できなかった同僚を代表して賞を受け取りました。"
        }
      ]
    }
  ],
  "reading": {
    "title": "Professional Correspondence",
    "text": "Writing effective emails requires a respectful tone and clear structure. When you draft a business proposal, it is important to anticipate questions and elaborate on complex points so the recipient understands your goals. If you receive an unexpected inquiry from a client, you should acknowledge it promptly. If you cannot provide a full answer immediately, inform them that you will look into the matter and get back to them by the end of the day.\n\nProviding feedback via email can also be challenging. If you must turn down a request, do so politely, offering an explanation or a constructive alternative. Therefore, the tone you set reflects both your professionalism and your respect for the recipient’s time. When communicating on behalf of your company, remember that your words carry the organization's reputation. Clear, well-structured emails prevent misunderstandings and build trust in the workplace.",
    "questions": [
      {
        "question": "What should you do if you cannot answer a client's inquiry immediately?",
        "options": [
          "Inform them you will look into it and get back to them",
          "Turn down the request immediately",
          "Elaborate on why you are too busy",
          "Ignore the email until you have the full answer"
        ],
        "answer": 0
      },
      {
        "question": "How should you handle turning down a request via email?",
        "options": [
          "Politely, offering a constructive alternative",
          "Promptly, without any explanation",
          "By asking someone else to write on your behalf",
          "By making a new proposal"
        ],
        "answer": 0
      },
      {
        "question": "Why is the tone of an email important?",
        "options": [
          "It reflects your professionalism and respect",
          "It ensures the client will accept your proposal",
          "It guarantees they will reply promptly",
          "It proves you are writing on behalf of the CEO"
        ],
        "answer": 0
      }
    ]
  }
};
`;

fs.writeFileSync('src/data/b2-lesson-49.ts', lesson49);
fs.writeFileSync('src/data/b2-lesson-50.ts', lesson50);
fs.writeFileSync('src/data/b2-lesson-51.ts', lesson51);
fs.writeFileSync('src/data/b2-lesson-52.ts', lesson52);

console.log('Created 49, 50, 51, 52');
