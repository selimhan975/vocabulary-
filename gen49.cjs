const fs = require('fs');
const content = `import { Lesson } from '../types';

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
      "synonyms": ["pursue", "continue", "investigate further"],
      "collocations": ["follow up on an issue", "follow up with a client"],
      "meanings": [
        {
          "id": "m481_1",
          "definition": "To take further action on something.",
          "translation": {
            "ru": "Предпринять дальнейшие действия по какому-либо вопросу.",
            "zh": "对某事采取进一步行动。",
            "es": "Tomar más medidas sobre algo.",
            "fr": "Prendre d'autres mesures concernant quelque chose.",
            "de": "Weitere Maßnahmen bezüglich etwas ergreifen.",
            "tr": "Bir şey hakkında daha fazla eylemde bulunmak.",
            "ja": "何かについてさらに行動を起こすこと。"
          },
          "examples": [
            {
              "id": "ex481_1",
              "sentence": "I will follow up on this issue with the IT department tomorrow.",
              "translation": {
                "ru": "Завтра я дополнительно свяжусь с ИТ-отделом по этому вопросу.",
                "zh": "我明天会和IT部门跟进这个问题。",
                "es": "Haré un seguimiento de este problema con el departamento de TI mañana.",
                "fr": "Je donnerai suite à ce problème avec le département informatique demain.",
                "de": "Ich werde diese Angelegenheit morgen mit der IT-Abteilung nachfassen.",
                "tr": "Yarın BT departmanı ile bu sorunu takip edeceğim.",
                "ja": "明日、IT部門にこの問題についてフォローアップします。"
              }
            },
            {
              "id": "ex481_2",
              "sentence": "She decided to follow up her email with a quick phone call.",
              "translation": {
                "ru": "Она решила вдобавок к электронному письму сделать короткий телефонный звонок.",
                "zh": "她决定在发邮件后打个简短的电话跟进。",
                "es": "Decidió hacer un seguimiento de su correo electrónico con una rápida llamada telefónica.",
                "fr": "Elle a décidé de relancer son e-mail par un rapide appel téléphonique.",
                "de": "Sie beschloss, ihrer E-Mail einen kurzen Anruf folgen zu lassen.",
                "tr": "E-postasının ardından kısa bir telefon görüşmesi ile takip etmeye karar verdi.",
                "ja": "彼女はメールの後に短い電話でフォローアップすることに決めました。"
              }
            }
          ]
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
      "synonyms": ["handle", "manage", "tackle"],
      "collocations": ["deal with a problem", "deal with a customer"],
      "meanings": [
        {
          "id": "m482_1",
          "definition": "To take action to solve a problem.",
          "translation": {
            "ru": "Предпринять действия для решения проблемы.",
            "zh": "采取行动解决问题。",
            "es": "Tomar medidas para resolver un problema.",
            "fr": "Prendre des mesures pour résoudre un problème.",
            "de": "Maßnahmen ergreifen, um ein Problem zu lösen.",
            "tr": "Bir sorunu çözmek için eyleme geçmek.",
            "ja": "問題を解決するために行動を起こすこと。"
          },
          "examples": [
            {
              "id": "ex482_1",
              "sentence": "The manager has to deal with customer complaints on a daily basis.",
              "translation": {
                "ru": "Менеджеру приходится ежедневно разбираться с жалобами клиентов.",
                "zh": "经理每天都必须处理客户的投诉。",
                "es": "El gerente tiene que lidiar con las quejas de los clientes a diario.",
                "fr": "Le manager doit gérer les plaintes des clients au quotidien.",
                "de": "Der Manager muss sich täglich mit Kundenbeschwerden befassen.",
                "tr": "Yönetici günlük olarak müşteri şikayetleriyle ilgilenmek zorundadır.",
                "ja": "マネージャーは日常的に顧客からのクレームに対処しなければなりません。"
              }
            },
            {
              "id": "ex482_2",
              "sentence": "We need to find a better way to deal with this technical issue.",
              "translation": {
                "ru": "Нам нужно найти лучший способ справиться с этой технической проблемой.",
                "zh": "我们需要找到更好的方法来应对这个技术问题。",
                "es": "Necesitamos encontrar una mejor manera de ocuparnos de este problema técnico.",
                "fr": "Nous devons trouver une meilleure façon de nous occuper de ce problème technique.",
                "de": "Wir müssen einen besseren Weg finden, um mit diesem technischen Problem umzugehen.",
                "tr": "Bu teknik sorunla başa çıkmak için daha iyi bir yol bulmalıyız.",
                "ja": "この技術的な問題に対処するためのより良い方法を見つける必要があります。"
              }
            }
          ]
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
      "synonyms": ["highlight", "indicate", "draw attention to"],
      "collocations": ["point out a mistake", "point out a fact"],
      "meanings": [
        {
          "id": "m483_1",
          "definition": "To direct someone's attention to something.",
          "translation": {
            "ru": "Направлять чье-либо внимание на что-либо.",
            "zh": "将某人的注意力引向某事。",
            "es": "Dirigir la atención de alguien hacia algo.",
            "fr": "Attirer l'attention de quelqu'un sur quelque chose.",
            "de": "Jemandes Aufmerksamkeit auf etwas lenken.",
            "tr": "Birinin dikkatini bir şeye yönlendirmek.",
            "ja": "誰かの注意を何かに向けること。"
          },
          "examples": [
            {
              "id": "ex483_1",
              "sentence": "During the meeting, he pointed out a significant error in the report.",
              "translation": {
                "ru": "Во время собрания он указал на значительную ошибку в отчете.",
                "zh": "在会议期间，他指出了报告中的一个重大错误。",
                "es": "Durante la reunión, señaló un error significativo en el informe.",
                "fr": "Pendant la réunion, il a fait remarquer une erreur significative dans le rapport.",
                "de": "Während der Besprechung wies er auf einen wesentlichen Fehler im Bericht hin.",
                "tr": "Toplantı sırasında, rapordaki önemli bir hataya dikkat çekti.",
                "ja": "会議中、彼は報告書の重大なエラーを指摘しました。"
              }
            },
            {
              "id": "ex483_2",
              "sentence": "I would like to point out that we have limited resources for this project.",
              "translation": {
                "ru": "Я хотел бы обратить внимание на то, что у нас ограничены ресурсы для этого проекта.",
                "zh": "我想指出，我们这个项目的资源有限。",
                "es": "Me gustaría señalar que tenemos recursos limitados para este proyecto.",
                "fr": "Je tiens à souligner que nous avons des ressources limitées pour ce projet.",
                "de": "Ich möchte darauf hinweisen, dass wir für dieses Projekt nur begrenzte Ressourcen haben.",
                "tr": "Bu proje için sınırlı kaynaklarımız olduğunu belirtmek isterim.",
                "ja": "このプロジェクトのためのリソースが限られていることを指摘しておきたいと思います。"
              }
            }
          ]
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
        "ru": "излагать вкратце / план",
        "zh": "概述 / 大纲",
        "es": "esbozar / resumen",
        "fr": "exposer dans les grandes lignes / plan",
        "de": "skizzieren / Entwurf",
        "tr": "özetlemek / taslak",
        "ja": "概要を説明する / 概要"
      },
      "synonyms": ["draft", "summarize", "sketch"],
      "collocations": ["outline a plan", "a brief outline"],
      "meanings": [
        {
          "id": "m484_1",
          "definition": "To give the main facts or points of something.",
          "translation": {
            "ru": "Приводить основные факты или пункты чего-либо.",
            "zh": "给出某事的主要事实或要点。",
            "es": "Dar los principales hechos o puntos de algo.",
            "fr": "Donner les principaux faits ou points de quelque chose.",
            "de": "Die wichtigsten Fakten oder Punkte von etwas angeben.",
            "tr": "Bir şeyin ana gerçeklerini veya noktalarını vermek.",
            "ja": "何かの主要な事実やポイントを示すこと。"
          },
          "examples": [
            {
              "id": "ex484_1",
              "sentence": "Could you briefly outline your main strategy for the upcoming quarter?",
              "translation": {
                "ru": "Не могли бы вы вкратце изложить свою основную стратегию на предстоящий квартал?",
                "zh": "你能简要概述一下下个季度的主要战略吗？",
                "es": "¿Podría esbozar brevemente su estrategia principal para el próximo trimestre?",
                "fr": "Pourriez-vous exposer brièvement votre stratégie principale pour le trimestre à venir ?",
                "de": "Könnten Sie Ihre Hauptstrategie für das kommende Quartal kurz skizzieren?",
                "tr": "Önümüzdeki çeyrek için ana stratejinizi kısaca özetleyebilir misiniz?",
                "ja": "来四半期の主要な戦略について、簡単に概要を説明していただけますか？"
              }
            },
            {
              "id": "ex484_2",
              "sentence": "The document provides a clear outline of our project goals.",
              "translation": {
                "ru": "В документе содержится четкий план целей нашего проекта.",
                "zh": "该文件清晰地列出了我们项目目标的大纲。",
                "es": "El documento proporciona un resumen claro de los objetivos de nuestro proyecto.",
                "fr": "Le document fournit un plan clair des objectifs de notre projet.",
                "de": "Das Dokument bietet einen klaren Entwurf unserer Projektziele.",
                "tr": "Belge, proje hedeflerimizin net bir taslağını sunmaktadır.",
                "ja": "その文書は、私たちのプロジェクトの目標の明確な概要を提供しています。"
              }
            }
          ]
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
        "ru": "обновлять / обновление",
        "zh": "更新 / 最新消息",
        "es": "actualizar / actualización",
        "fr": "mettre à jour / mise à jour",
        "de": "aktualisieren / Update",
        "tr": "güncellemek / güncelleme",
        "ja": "最新情報にする / アップデート"
      },
      "synonyms": ["inform", "upgrade", "brief"],
      "collocations": ["provide an update", "update someone on a project"],
      "meanings": [
        {
          "id": "m485_1",
          "definition": "To make something more modern or give someone the most recent information.",
          "translation": {
            "ru": "Сделать что-то более современным или предоставить кому-то самую свежую информацию.",
            "zh": "使某物更现代化，或向某人提供最新信息。",
            "es": "Hacer algo más moderno o dar a alguien la información más reciente.",
            "fr": "Moderniser quelque chose ou donner à quelqu'un les informations les plus récentes.",
            "de": "Etwas moderner machen oder jemandem die neuesten Informationen geben.",
            "tr": "Bir şeyi daha modern hale getirmek veya birine en son bilgileri vermek.",
            "ja": "何かをより近代的にする、または誰かに最新の情報を提供すること。"
          },
          "examples": [
            {
              "id": "ex485_1",
              "sentence": "Please provide a quick update on the current status of the client presentation.",
              "translation": {
                "ru": "Пожалуйста, предоставьте краткую информацию о текущем статусе презентации для клиента.",
                "zh": "请提供关于客户演示当前状态的快速更新。",
                "es": "Por favor, proporcione una rápida actualización sobre el estado actual de la presentación al cliente.",
                "fr": "Veuillez fournir une rapide mise à jour sur l'état actuel de la présentation client.",
                "de": "Bitte geben Sie ein kurzes Update zum aktuellen Stand der Kundenpräsentation.",
                "tr": "Lütfen müşteri sunumunun mevcut durumu hakkında kısa bir güncelleme yapın.",
                "ja": "クライアントへのプレゼンテーションの現在の進捗について、簡単なアップデートをお願いします。"
              }
            },
            {
              "id": "ex485_2",
              "sentence": "We will update the software system over the weekend to fix the bugs.",
              "translation": {
                "ru": "На выходных мы обновим систему программного обеспечения, чтобы исправить ошибки.",
                "zh": "我们将在周末更新软件系统以修复错误。",
                "es": "Actualizaremos el sistema de software durante el fin de semana para corregir los errores.",
                "fr": "Nous mettrons à jour le système logiciel ce week-end pour corriger les bugs.",
                "de": "Wir werden das Softwaresystem am Wochenende aktualisieren, um die Fehler zu beheben.",
                "tr": "Hataları düzeltmek için hafta sonu yazılım sistemini güncelleyeceğiz.",
                "ja": "バグを修正するため、週末にソフトウェアシステムをアップデートします。"
              }
            }
          ]
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
      "synonyms": ["tackle", "deal with", "confront"],
      "collocations": ["address a concern", "address an issue"],
      "meanings": [
        {
          "id": "m486_1",
          "definition": "To give attention to or deal with a matter or problem.",
          "translation": {
            "ru": "Уделять внимание или решать дело или проблему.",
            "zh": "关注或处理某事或问题。",
            "es": "Prestar atención o lidiar con un asunto o problema.",
            "fr": "Prêter attention à ou traiter une question ou un problème.",
            "de": "Sich einer Angelegenheit oder einem Problem widmen oder sich damit befassen.",
            "tr": "Bir konuya veya soruna dikkat etmek veya bununla ilgilenmek.",
            "ja": "問題や事柄に注意を払う、または対処すること。"
          },
          "examples": [
            {
              "id": "ex486_1",
              "sentence": "The board met to address the growing concerns about the company's finances.",
              "translation": {
                "ru": "Совет директоров собрался, чтобы решить растущие проблемы с финансами компании.",
                "zh": "董事会开会着手解决对公司财务日益增长的担忧。",
                "es": "La junta se reunió para abordar las crecientes preocupaciones sobre las finanzas de la empresa.",
                "fr": "Le conseil s'est réuni pour aborder les inquiétudes croissantes concernant les finances de l'entreprise.",
                "de": "Der Vorstand trat zusammen, um die wachsenden Bedenken hinsichtlich der Finanzen des Unternehmens anzusprechen.",
                "tr": "Yönetim kurulu, şirketin finansmanıyla ilgili artan endişeleri ele almak için toplandı.",
                "ja": "取締役会は、会社の財務に関する懸念の高まりに取り組むために開催されました。"
              }
            },
            {
              "id": "ex486_2",
              "sentence": "It is vital to address these issues before they turn into a crisis.",
              "translation": {
                "ru": "Жизненно важно решить эти проблемы до того, как они превратятся в кризис.",
                "zh": "在这些问题演变成危机之前着手解决它们至关重要。",
                "es": "Es vital abordar estos problemas antes de que se conviertan en una crisis.",
                "fr": "Il est vital d'aborder ces problèmes avant qu'ils ne se transforment en crise.",
                "de": "Es ist wichtig, diese Probleme anzusprechen, bevor sie sich zu einer Krise entwickeln.",
                "tr": "Bu sorunları bir krize dönüşmeden önce ele almak hayati önem taşır.",
                "ja": "これらの問題が危機に発展する前に取り組むことが極めて重要です。"
              }
            }
          ]
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
      "synonyms": ["therefore", "as a result", "thus"],
      "collocations": ["and consequently"],
      "meanings": [
        {
          "id": "m487_1",
          "definition": "As a result of something.",
          "translation": {
            "ru": "В результате чего-либо.",
            "zh": "作为某事的结果。",
            "es": "Como resultado de algo.",
            "fr": "En conséquence de quelque chose.",
            "de": "Als Folge von etwas.",
            "tr": "Bir şeyin sonucu olarak.",
            "ja": "何かの結果として。"
          },
          "examples": [
            {
              "id": "ex487_1",
              "sentence": "The supplier was late; consequently, the entire production process was delayed.",
              "translation": {
                "ru": "Поставщик опоздал; следовательно, весь производственный процесс был задержан.",
                "zh": "供应商迟到了；因此，整个生产过程都被延误了。",
                "es": "El proveedor llegó tarde; en consecuencia, todo el proceso de producción se retrasó.",
                "fr": "Le fournisseur était en retard ; par conséquent, tout le processus de production a été retardé.",
                "de": "Der Lieferant war spät dran; folglich verzögerte sich der gesamte Produktionsprozess.",
                "tr": "Tedarikçi geç kaldı; sonuç olarak tüm üretim süreci gecikti.",
                "ja": "サプライヤーが遅れたため、その結果として生産プロセス全体が遅延しました。"
              }
            },
            {
              "id": "ex487_2",
              "sentence": "He didn't study for the exam and consequently failed it.",
              "translation": {
                "ru": "Он не готовился к экзамену и в результате провалил его.",
                "zh": "他没有复习考试，结果不及格。",
                "es": "No estudió para el examen y, por consiguiente, lo suspendió.",
                "fr": "Il n'a pas étudié pour l'examen et l'a par conséquent raté.",
                "de": "Er hat nicht für die Prüfung gelernt und sie infolgedessen nicht bestanden.",
                "tr": "Sınava çalışmadı ve dolayısıyla kaldı.",
                "ja": "彼は試験勉強をしなかったので、その結果として不合格になりました。"
              }
            }
          ]
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
      "synonyms": ["moreover", "in addition", "additionally"],
      "collocations": ["; furthermore,"],
      "meanings": [
        {
          "id": "m488_1",
          "definition": "In addition to what has just been stated.",
          "translation": {
            "ru": "В дополнение к только что сказанному.",
            "zh": "除了刚才所说的话之外。",
            "es": "Además de lo que se acaba de decir.",
            "fr": "En plus de ce qui vient d'être dit.",
            "de": "Zusätzlich zu dem, was gerade gesagt wurde.",
            "tr": "Az önce söylenenlere ek olarak.",
            "ja": "今述べられたことに加えて。"
          },
          "examples": [
            {
              "id": "ex488_1",
              "sentence": "The new system is faster. Furthermore, it is much more secure.",
              "translation": {
                "ru": "Новая система работает быстрее. Более того, она гораздо безопаснее.",
                "zh": "新系统速度更快。此外，它还要安全得多。",
                "es": "El nuevo sistema es más rápido. Además, es mucho más seguro.",
                "fr": "Le nouveau système est plus rapide. De plus, il est beaucoup plus sécurisé.",
                "de": "Das neue System ist schneller. Außerdem ist es viel sicherer.",
                "tr": "Yeni sistem daha hızlı. Dahası, çok daha güvenli.",
                "ja": "新しいシステムはより高速です。さらに、セキュリティもはるかに高くなっています。"
              }
            },
            {
              "id": "ex488_2",
              "sentence": "I do not want to go to that restaurant; furthermore, we simply cannot afford it.",
              "translation": {
                "ru": "Я не хочу идти в тот ресторан; кроме того, мы просто не можем себе этого позволить.",
                "zh": "我不想去那家餐厅；而且，我们也实在负担不起。",
                "es": "No quiero ir a ese restaurante; por otra parte, simplemente no podemos pagarlo.",
                "fr": "Je ne veux pas aller dans ce restaurant ; en outre, nous ne pouvons tout simplement pas nous le permettre.",
                "de": "Ich möchte nicht in dieses Restaurant gehen; ferner können wir es uns einfach nicht leisten.",
                "tr": "O restorana gitmek istemiyorum; ayrıca, bunu kesinlikle karşılayamayız.",
                "ja": "あのレストランには行きたくありません。その上、金銭的な余裕もまったくありません。"
              }
            }
          ]
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
      "synonyms": ["contribution", "feedback", "advice"],
      "collocations": ["valuable input", "ask for input"],
      "meanings": [
        {
          "id": "m489_1",
          "definition": "Help, ideas, or knowledge that someone gives to a project or discussion.",
          "translation": {
            "ru": "Помощь, идеи или знания, которые кто-то привносит в проект или обсуждение.",
            "zh": "某人为项目或讨论提供的帮助、想法或知识。",
            "es": "Ayuda, ideas o conocimiento que alguien aporta a un proyecto o discusión.",
            "fr": "Aide, idées ou connaissances que quelqu'un apporte à un projet ou à une discussion.",
            "de": "Hilfe, Ideen oder Wissen, das jemand zu einem Projekt oder einer Diskussion beisteuert.",
            "tr": "Birinin bir projeye veya tartışmaya verdiği yardım, fikir veya bilgi.",
            "ja": "プロジェクトや議論に対して誰かが提供する助け、アイデア、または知識。"
          },
          "examples": [
            {
              "id": "ex489_1",
              "sentence": "We highly value your input on this new marketing strategy.",
              "translation": {
                "ru": "Мы высоко ценим ваше мнение по поводу этой новой маркетинговой стратегии.",
                "zh": "我们非常看重您对这个新营销策略的意见。",
                "es": "Valoramos enormemente su aporte sobre esta nueva estrategia de marketing.",
                "fr": "Nous apprécions grandement votre contribution à cette nouvelle stratégie marketing.",
                "de": "Wir schätzen Ihren Beitrag zu dieser neuen Marketingstrategie sehr.",
                "tr": "Bu yeni pazarlama stratejisiyle ilgili görüşünüze büyük değer veriyoruz.",
                "ja": "この新しいマーケティング戦略に関するあなたの意見を高く評価しています。"
              }
            },
            {
              "id": "ex489_2",
              "sentence": "Before making a final decision, the manager asked for input from the entire team.",
              "translation": {
                "ru": "Прежде чем принять окончательное решение, менеджер попросил всю команду высказать свое мнение.",
                "zh": "在做出最终决定之前，经理征求了整个团队的意见。",
                "es": "Antes de tomar una decisión final, el gerente pidió la opinión de todo el equipo.",
                "fr": "Avant de prendre une décision finale, le manager a demandé l'avis de toute l'équipe.",
                "de": "Vor der endgültigen Entscheidung bat der Manager das gesamte Team um Input.",
                "tr": "Nihai kararı vermeden önce, yönetici tüm ekipten görüş istedi.",
                "ja": "最終決定を下す前に、マネージャーはチーム全体からの意見を求めました。"
              }
            }
          ]
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
      "synonyms": ["question", "inquiry", "doubt"],
      "collocations": ["respond to a query", "raise a query"],
      "meanings": [
        {
          "id": "m490_1",
          "definition": "A question, often expressing doubt about something or looking for an answer from an authority.",
          "translation": {
            "ru": "Вопрос, часто выражающий сомнение в чем-либо или требующий ответа от авторитетного лица.",
            "zh": "一个问题，通常表达对某事的怀疑或寻求权威的回答。",
            "es": "Una pregunta, a menudo expresando dudas sobre algo o buscando una respuesta de una autoridad.",
            "fr": "Une question, exprimant souvent un doute sur quelque chose ou cherchant une réponse d'une autorité.",
            "de": "Eine Frage, die oft Zweifel an etwas ausdrückt oder eine Antwort von einer Autorität sucht.",
            "tr": "Genellikle bir şey hakkında şüphe ifade eden veya yetkili birinden cevap arayan bir soru.",
            "ja": "何かに疑問を呈したり、権威からの回答を求めたりする質問。"
          },
          "examples": [
            {
              "id": "ex490_1",
              "sentence": "If you have any queries regarding the contract, please contact human resources.",
              "translation": {
                "ru": "Если у вас есть какие-либо вопросы относительно контракта, пожалуйста, свяжитесь с отделом кадров.",
                "zh": "如果您对合同有任何疑问，请联系人力资源部。",
                "es": "Si tiene alguna consulta con respecto al contrato, comuníquese con recursos humanos.",
                "fr": "Si vous avez des questions concernant le contrat, veuillez contacter les ressources humaines.",
                "de": "Wenn Sie Rückfragen zum Vertrag haben, wenden Sie sich bitte an die Personalabteilung.",
                "tr": "Sözleşmeyle ilgili herhangi bir sorunuz varsa, lütfen insan kaynakları ile iletişime geçin.",
                "ja": "契約に関するご質問がある場合は、人事部までご連絡ください。"
              }
            },
            {
              "id": "ex490_2",
              "sentence": "Customer service aims to respond to every query within 24 hours.",
              "translation": {
                "ru": "Служба поддержки стремится отвечать на каждый запрос в течение 24 часов.",
                "zh": "客户服务旨在在24小时内回复每一个查询。",
                "es": "El servicio de atención al cliente tiene como objetivo responder a cada consulta en 24 horas.",
                "fr": "Le service client a pour objectif de répondre à chaque requête sous 24 heures.",
                "de": "Der Kundenservice ist bestrebt, jede Anfrage innerhalb von 24 Stunden zu beantworten.",
                "tr": "Müşteri hizmetleri, her sorguya 24 saat içinde yanıt vermeyi amaçlar.",
                "ja": "カスタマーサービスは、すべての問い合わせに24時間以内に対応することを目指しています。"
              }
            }
          ]
        }
      ]
    }
  ],
  "reading": {
    "id": "r49",
    "title": "Clear Communication in the Workplace",
    "content": "Effective professional communication requires more than just exchanging information; it requires clarity and proactive coordination. When working on a team project, it is essential to outline your main objectives early on, so everyone understands their responsibilities. If unexpected challenges arise, managers must address the issue promptly before it impacts the timeline.\n\nFurthermore, when someone makes a request, it is professional courtesy to respond and follow up on the matter, even if it is just to provide a brief update. Ignoring a colleague’s query can lead to confusion and inefficiency. Consequently, many successful companies train their employees to value team input and deal with difficult interactions constructively. By doing so, they ensure that everyone is aligned and that when an error occurs, colleagues can point out mistakes politely and objectively, preventing minor misunderstandings from turning into major disputes.",
    "translations": {
      "ru": "Эффективная профессиональная коммуникация требует большего, чем просто обмен информацией; она требует ясности и проактивной координации. При работе над командным проектом важно с самого начала изложить основные цели, чтобы каждый понимал свои обязанности. Если возникают непредвиденные проблемы, менеджеры должны оперативно решать этот вопрос, пока он не повлиял на сроки. Кроме того, когда кто-то обращается с просьбой, профессиональная вежливость требует ответить и проконтролировать этот вопрос, даже если это всего лишь краткое обновление информации. Игнорирование запроса коллеги может привести к путанице и неэффективности. Следовательно, многие успешные компании обучают своих сотрудников ценить вклад команды и конструктивно справляться со сложными взаимодействиями. Делая это, они гарантируют, что все действуют согласованно, и что при возникновении ошибки коллеги могут вежливо и объективно указать на нее, предотвращая перерастание мелких недоразумений в серьезные споры.",
      "zh": "有效的专业沟通不仅仅需要交换信息；它还需要清晰度和积极的协调。在进行团队项目时，尽早概述主要目标至关重要，以便每个人都了解自己的责任。如果出现意外挑战，管理人员必须在问题影响进度之前迅速解决它。此外，当有人提出要求时，出于职业礼貌，应该做出回应并跟进此事，即使只是提供一个简短的最新情况。无视同事的查询可能会导致混乱和效率低下。因此，许多成功的公司都会培训员工重视团队投入，并建设性地处理困难的互动。通过这样做，他们可以确保每个人都保持一致，并且当发生错误时，同事可以礼貌客观地指出错误，防止小误会变成大争端。",
      "es": "La comunicación profesional eficaz requiere algo más que el simple intercambio de información; requiere claridad y coordinación proactiva. Al trabajar en un proyecto de equipo, es esencial esbozar sus objetivos principales desde el principio, para que todos comprendan sus responsabilidades. Si surgen desafíos inesperados, los gerentes deben abordar el problema de inmediato antes de que afecte el cronograma. Además, cuando alguien hace una solicitud, es cortesía profesional responder y hacer un seguimiento del asunto, incluso si es solo para proporcionar una breve actualización. Ignorar la consulta de un colega puede provocar confusión e ineficiencia. En consecuencia, muchas empresas exitosas capacitan a sus empleados para que valoren el aporte del equipo y lidien con interacciones difíciles de manera constructiva. Al hacerlo, se aseguran de que todos estén alineados y de que cuando ocurra un error, los colegas puedan señalar los errores de manera educada y objetiva, evitando que pequeños malentendidos se conviertan en disputas mayores.",
      "fr": "Une communication professionnelle efficace exige plus qu'un simple échange d'informations ; elle exige de la clarté et une coordination proactive. Lorsque vous travaillez sur un projet d'équipe, il est essentiel de définir vos principaux objectifs dès le début, afin que chacun comprenne ses responsabilités. Si des défis inattendus surviennent, les responsables doivent résoudre le problème rapidement avant qu'il n'impacte le calendrier. De plus, lorsque quelqu'un fait une demande, c'est une courtoisie professionnelle d'y répondre et de donner suite à l'affaire, même si c'est juste pour fournir une brève mise à jour. Ignorer la requête d'un collègue peut entraîner de la confusion et de l'inefficacité. Par conséquent, de nombreuses entreprises prospères forment leurs employés à valoriser la contribution de l'équipe et à gérer les interactions difficiles de manière constructive. En faisant cela, ils s'assurent que tout le monde est sur la même longueur d'onde et que lorsqu'une erreur se produit, les collègues peuvent signaler les erreurs poliment et objectivement, empêchant les malentendus mineurs de se transformer en litiges majeurs.",
      "de": "Eine effektive professionelle Kommunikation erfordert mehr als nur den Austausch von Informationen; sie erfordert Klarheit und proaktive Koordination. Bei der Arbeit an einem Teamprojekt ist es wichtig, die Hauptziele frühzeitig zu skizzieren, damit jeder seine Verantwortlichkeiten versteht. Wenn unerwartete Herausforderungen auftreten, müssen Manager das Problem umgehend angehen, bevor es sich auf den Zeitplan auswirkt. Darüber hinaus ist es professionelle Höflichkeit, auf eine Anfrage zu antworten und die Angelegenheit weiterzuverfolgen, selbst wenn es nur darum geht, ein kurzes Update zu geben. Das Ignorieren der Rückfrage eines Kollegen kann zu Verwirrung und Ineffizienz führen. Folglich schulen viele erfolgreiche Unternehmen ihre Mitarbeiter darin, den Input des Teams zu schätzen und mit schwierigen Interaktionen konstruktiv umzugehen. Dadurch stellen sie sicher, dass alle auf einer Linie sind und dass Kollegen, wenn ein Fehler auftritt, höflich und objektiv auf Fehler hinweisen können, um zu verhindern, dass aus kleinen Missverständnissen große Streitigkeiten werden.",
      "tr": "Etkili profesyonel iletişim, sadece bilgi alışverişinden daha fazlasını gerektirir; netlik ve proaktif koordinasyon gerektirir. Bir ekip projesi üzerinde çalışırken, herkesin sorumluluklarını anlaması için ana hedeflerinizi erkenden özetlemek önemlidir. Beklenmedik zorluklar ortaya çıkarsa, yöneticiler zaman çizelgesini etkilemeden önce sorunu derhal ele almalıdır. Ayrıca, birisi bir istekte bulunduğunda, sadece kısa bir güncelleme sağlamak için bile olsa yanıt vermek ve konuyu takip etmek profesyonel bir nezakettir. Bir meslektaşın sorgusunu görmezden gelmek kafa karışıklığına ve verimsizliğe yol açabilir. Sonuç olarak, birçok başarılı şirket çalışanlarını ekip katkısına değer vermeleri ve zorlu etkileşimlerle yapıcı bir şekilde başa çıkmaları için eğitir. Bunu yaparak, herkesin aynı hizada olmasını ve bir hata meydana geldiğinde meslektaşların hataları kibarca ve nesnel bir şekilde belirtebilmesini sağlayarak küçük yanlış anlaşılmaların büyük anlaşmazlıklara dönüşmesini engellerler.",
      "ja": "効果的なプロフェッショナルなコミュニケーションには、単なる情報交換以上のものが必要です。それは明確さと積極的な調整を必要とします。チームプロジェクトに取り組むときは、全員が自分の責任を理解できるように、早い段階で主な目標の概要を説明することが不可欠です。予期せぬ課題が発生した場合、マネージャーはスケジュールに影響が出る前に問題に迅速に対処しなければなりません。さらに、誰かが要求をしたときは、たとえ短いアップデートを提供するだけであっても、応答してその件をフォローアップするのがプロとしての礼儀です。同僚の問い合わせを無視すると、混乱や非効率を招く可能性があります。その結果、多くの成功している企業は、チームの意見を大切にし、困難なやり取りに建設的に対処するように従業員を訓練しています。そうすることで、全員の認識が一致し、エラーが発生した場合には、同僚が礼儀正しく客観的に間違いを指摘し、小さな誤解が大きな紛争に発展するのを防ぐことができます。"
    },
    "comprehensionQuestions": [
      {
        "id": "q49_1",
        "question": "What should be done early on when working on a team project?",
        "options": [
          "Outline the main objectives",
          "Follow up on emails immediately",
          "Address all future problems",
          "Point out minor mistakes"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q49_2",
        "question": "According to the text, what can ignoring a query lead to?",
        "options": [
          "Confusion and inefficiency",
          "A better understanding of the rules",
          "A faster production process",
          "Increased team input"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q49_3",
        "question": "How should colleagues handle mistakes when an error occurs?",
        "options": [
          "Point them out politely and objectively",
          "Deal with them in private without telling the manager",
          "Follow up on them after the project is over",
          "Consequently ignore them to avoid disputes"
        ],
        "correctAnswerIndex": 0
      }
    ]
  }
};
`;

fs.writeFileSync('src/data/b2-lesson-49.ts', content);
