const fs = require('fs');

const b2Lesson50 = {
  id: "b2-lesson-50",
  title: "Meetings, Priorities & Deadlines",
  number: 50,
  level: "B2",
  words: [
    {
      id: "w491",
      word: "schedule",
      pronunciation: "/ˈʃedjuːl/ (UK), /ˈskedʒuːl/ (US)",
      partOfSpeech: "verb, noun",
      level: "B2",
      translations: { ru: "назначать / расписание", zh: "安排 / 日程表", es: "programar / horario", fr: "planifier / emploi du temps", de: "planen / Zeitplan", tr: "planlamak / program", ja: "スケジュールを組む / 予定" },
      synonyms: ["plan", "arrange", "timetable"],
      collocations: ["schedule a meeting", "busy schedule"],
      meanings: [
        {
          id: "m491_1",
          definition: "To arrange that an event or activity will happen at a particular time.",
          translation: { ru: "Организовать событие или мероприятие на определенное время.", zh: "安排某事件或活动在特定时间发生。", es: "Organizar que un evento o actividad suceda en un momento particular.", fr: "Prévoir qu'un événement ou une activité aura lieu à un moment précis.", de: "Vereinbaren, dass ein Ereignis oder eine Aktivität zu einem bestimmten Zeitpunkt stattfindet.", tr: "Bir olayın veya etkinliğin belirli bir zamanda gerçekleşmesini ayarlamak.", ja: "イベントや活動が特定の時間に起こるように手配すること。" },
          examples: [
            { id: "ex491_1", sentence: "We need to schedule a meeting to discuss the new budget priorities.", translation: { ru: "Нам нужно назначить собрание, чтобы обсудить новые приоритеты бюджета.", zh: "我们需要安排一次会议来讨论新的预算优先事项。", es: "Necesitamos programar una reunión para discutir las nuevas prioridades del presupuesto.", fr: "Nous devons planifier une réunion pour discuter des nouvelles prioridades budgétaires.", de: "Wir müssen ein Meeting planen, um die neuen Budgetprioritäten zu besprechen.", tr: "Yeni bütçe önceliklerini tartışmak için bir toplantı planlamamız gerekiyor.", ja: "新しい予算の優先順位について話し合うために、会議のスケジュールを組む必要があります。" } },
            { id: "ex491_2", sentence: "My work schedule is incredibly demanding this week.", translation: { ru: "Мое рабочее расписание на этой неделе невероятно насыщенное.", zh: "本周我的工作日程安排得非常满。", es: "Mi horario de trabajo es increíblemente exigente esta semana.", fr: "Mon emploi du temps de travail est incroyablement chargé cette semaine.", de: "Mein Arbeitszeitplan ist diese Woche unglaublich anspruchsvoll.", tr: "Çalışma programım bu hafta inanılmaz derecede yoğun.", ja: "今週の私の仕事のスケジュールは信じられないほど厳しいです。" } }
          ]
        }
      ]
    },
    {
      id: "w492",
      word: "put off",
      pronunciation: "/pʊt ɒf/",
      partOfSpeech: "phrasal verb",
      level: "B2",
      translations: { ru: "откладывать", zh: "推迟", es: "posponer / aplazar", fr: "repousser / remettre à plus tard", de: "verschieben / aufschieben", tr: "ertelemek", ja: "延期する / 後回しにする" },
      synonyms: ["postpone", "delay", "defer"],
      collocations: ["put off a meeting", "put off making a decision"],
      meanings: [
        {
          id: "m492_1",
          definition: "To decide or arrange to delay an event or activity until a later time or date.",
          translation: { ru: "Отложить событие или мероприятие на более позднее время или дату.", zh: "决定或安排将事件或活动推迟到较晚的时间或日期。", es: "Decidir o arreglar retrasar un evento o actividad hasta una hora o fecha posterior.", fr: "Décider ou s'arranger pour retarder un événement ou une activité à une heure ou une date ultérieure.", de: "Beschließen oder veranlassen, ein Ereignis oder eine Aktivität auf eine spätere Zeit oder ein späteres Datum zu verschieben.", tr: "Bir olayı veya etkinliği daha ileri bir zamana veya tarihe ertelemeye karar vermek veya ayarlamak.", ja: "イベントや活動を後日または後回しにすることを決定または手配すること。" },
          examples: [
            { id: "ex492_1", sentence: "Due to the CEO's absence, we had to put off the presentation until next Monday.", translation: { ru: "Из-за отсутствия генерального директора нам пришлось отложить презентацию до следующего понедельника.", zh: "由于首席执行官不在，我们不得不把演示推迟到下周一。", es: "Debido a la ausencia del CEO, tuvimos que aplazar la presentación hasta el próximo lunes.", fr: "En raison de l'absence du PDG, nous avons dû repousser la présentation à lundi prochain.", de: "Aufgrund der Abwesenheit des CEO mussten wir die Präsentation auf nächsten Montag verschieben.", tr: "CEO'nun yokluğu nedeniyle, sunumu önümüzdeki pazartesiye ertelemek zorunda kaldık.", ja: "CEOが不在のため、プレゼンテーションを来週の月曜日まで延期しなければなりませんでした。" } },
            { id: "ex492_2", sentence: "Don't put off making a decision, as time is running out.", translation: { ru: "Не откладывай принятие решения, так как время истекает.", zh: "不要推迟做决定，因为时间不多了。", es: "No pospongas la toma de decisiones, ya que el tiempo se acaba.", fr: "Ne remettez pas à plus tard la prise de décision, car le temps presse.", de: "Schieben Sie eine Entscheidung nicht auf, da die Zeit knapp wird.", tr: "Karar vermeyi ertelemeyin, çünkü zaman tükeniyor.", ja: "時間がなくなってきているので、決定を後回しにしないでください。" } }
          ]
        }
      ]
    },
    {
      id: "w493",
      word: "workload",
      pronunciation: "/ˈwɜːkləʊd/",
      partOfSpeech: "noun",
      level: "B2",
      translations: { ru: "рабочая нагрузка / объем работы", zh: "工作量", es: "carga de trabajo", fr: "charge de travail", de: "Arbeitspensum / Arbeitsbelastung", tr: "iş yükü", ja: "仕事量" },
      synonyms: ["amount of work", "tasks", "duties"],
      collocations: ["heavy workload", "manage the workload"],
      meanings: [
        {
          id: "m493_1",
          definition: "The amount of work to be done by someone or something.",
          translation: { ru: "Объем работы, который должен быть выполнен кем-то или чем-то.", zh: "某人或某物要完成的工作量。", es: "La cantidad de trabajo que debe realizar alguien o algo.", fr: "La quantité de travail à accomplir par quelqu'un ou quelque chose.", de: "Die Menge an Arbeit, die von jemandem oder etwas erledigt werden muss.", tr: "Birisi veya bir şey tarafından yapılacak iş miktarı.", ja: "誰かまたは何かが行うべき仕事の量。" },
          examples: [
            { id: "ex493_1", sentence: "The team has been struggling with a heavy workload since three colleagues resigned.", translation: { ru: "Команда с трудом справляется с большой рабочей нагрузкой с тех пор, как уволились трое коллег.", zh: "自从三位同事辞职后，团队一直在艰难应对繁重的工作量。", es: "El equipo ha estado luchando con una pesada carga de trabajo desde que tres colegas renunciaron.", fr: "L'équipe lutte contre une lourde charge de travail depuis que trois collègues ont démissionné.", de: "Das Team kämpft mit einem hohen Arbeitspensum, seit drei Kollegen gekündigt haben.", tr: "Üç meslektaşın istifa etmesinden bu yana ekip ağır bir iş yüküyle mücadele ediyor.", ja: "3人の同僚が辞任して以来、チームは重い仕事量に苦労しています。" } },
            { id: "ex493_2", sentence: "Managers must ensure that the workload is distributed evenly among staff members.", translation: { ru: "Менеджеры должны следить за тем, чтобы объем работы распределялся равномерно между сотрудниками.", zh: "管理者必须确保员工之间的工作量分配合理。", es: "Los gerentes deben asegurarse de que la carga de trabajo se distribuya de manera uniforme entre los miembros del personal.", fr: "Les managers doivent s'assurer que la charge de travail est répartie équitablement entre les membres du personnel.", de: "Führungskräfte müssen sicherstellen, dass die Arbeitsbelastung gleichmäßig auf die Mitarbeiter verteilt wird.", tr: "Yöneticiler, iş yükünün personel arasında eşit olarak dağıtıldığından emin olmalıdır.", ja: "管理者は、仕事量がスタッフ間で均等に分配されるようにしなければなりません。" } }
          ]
        }
      ]
    },
    {
      id: "w494",
      word: "tight",
      pronunciation: "/taɪt/",
      partOfSpeech: "adjective",
      level: "B2",
      translations: { ru: "жесткий / ограниченный / тесный", zh: "紧迫的 / 紧的", es: "apretado / ajustado", fr: "serré / strict", de: "knapp / eng", tr: "sıkı / kısıtlı", ja: "厳しい / きつい" },
      synonyms: ["strict", "limited", "firm"],
      collocations: ["tight deadline", "tight budget"],
      meanings: [
        {
          id: "m494_1",
          definition: "Leaving little time or room for flexibility or error.",
          translation: { ru: "Оставляющий мало времени или места для гибкости или ошибки.", zh: "留给灵活性或错误的时间或空间很少。", es: "Dejando poco tiempo o espacio para la flexibilidad o el error.", fr: "Laissant peu de temps ou de marge pour la flexibilité ou l'erreur.", de: "Lässt wenig Zeit oder Raum für Flexibilität oder Fehler.", tr: "Esneklik veya hata için çok az zaman veya yer bırakmak.", ja: "柔軟性やエラーのための時間や余地をほとんど残さない。" },
          examples: [
            { id: "ex494_1", sentence: "We are working under a very tight deadline for this project.", translation: { ru: "Мы работаем в условиях очень жестких сроков по этому проекту.", zh: "我们做这个项目的时间非常紧迫。", es: "Estamos trabajando bajo un plazo muy ajustado para este proyecto.", fr: "Nous travaillons avec un délai très serré pour ce projet.", de: "Wir arbeiten bei diesem Projekt unter einer sehr knappen Frist.", tr: "Bu proje için çok sıkı bir teslim tarihi altında çalışıyoruz.", ja: "私たちはこのプロジェクトで非常に厳しいスケジュールの下で働いています。" } },
            { id: "ex494_2", sentence: "The budget is extremely tight this year, so no extra spending is allowed.", translation: { ru: "Бюджет в этом году крайне ограничен, поэтому дополнительные расходы не допускаются.", zh: "今年的预算非常紧张，所以不允许有额外开支。", es: "El presupuesto es extremadamente apretado este año, por lo que no se permiten gastos adicionales.", fr: "Le budget est extrêmement serré cette année, aucune dépense supplémentaire n'est donc autorisée.", de: "Das Budget ist dieses Jahr extrem knapp, sodass keine zusätzlichen Ausgaben erlaubt sind.", tr: "Bütçe bu yıl son derece kısıtlı, bu nedenle ekstra harcamalara izin verilmiyor.", ja: "今年の予算は非常に厳しいため、追加の支出は許可されていません。" } }
          ]
        }
      ]
    },
    {
      id: "w495",
      word: "fall behind",
      pronunciation: "/fɔːl bɪˈhaɪnd/",
      partOfSpeech: "phrasal verb",
      level: "B2",
      translations: { ru: "отставать", zh: "落后", es: "quedarse atrás / retrasarse", fr: "prendre du retard / se laisser distancer", de: "in Rückstand geraten / zurückfallen", tr: "geride kalmak / gecikmek", ja: "遅れをとる" },
      synonyms: ["lag", "trail", "drop back"],
      collocations: ["fall behind schedule", "fall behind in studies"],
      meanings: [
        {
          id: "m495_1",
          definition: "To fail to do something fast enough or on time.",
          translation: { ru: "Не успеть сделать что-то достаточно быстро или вовремя.", zh: "未能足够快地或按时做某事。", es: "No hacer algo lo suficientemente rápido o a tiempo.", fr: "Ne pas réussir à faire quelque chose assez rapidement ou à temps.", de: "Etwas nicht schnell genug oder pünktlich tun.", tr: "Bir şeyi yeterince hızlı veya zamanında yapamamak.", ja: "何かを十分に早く、または時間通りに行うことができないこと。" },
          examples: [
            { id: "ex495_1", sentence: "If we fall behind schedule, we might lose our most important client.", translation: { ru: "Если мы отстанем от графика, мы можем потерять нашего самого важного клиента.", zh: "如果我们进度落后，我们可能会失去最重要的客户。", es: "Si nos retrasamos con el horario, podríamos perder a nuestro cliente más importante.", fr: "Si nous prenons du retard sur le planning, nous pourrions perdre notre client le plus important.", de: "Wenn wir mit dem Zeitplan in Rückstand geraten, könnten wir unseren wichtigsten Kunden verlieren.", tr: "Eğer programın gerisinde kalırsak, en önemli müşterimizi kaybedebiliriz.", ja: "スケジュールに遅れをとると、最も重要なクライアントを失う可能性があります。" } },
            { id: "ex495_2", sentence: "She was ill for two weeks and fell behind in her studies.", translation: { ru: "Она болела две недели и отстала в учебе.", zh: "她病了两周，学习落后了。", es: "Estuvo enferma durante dos semanas y se quedó atrás en sus estudios.", fr: "Elle a été malade pendant deux semaines et a pris du retard dans ses études.", de: "Sie war zwei Wochen lang krank und fiel im Studium zurück.", tr: "İki hafta hastaydı ve derslerinde geride kaldı.", ja: "彼女は2週間病気になり、勉強に遅れをとりました。" } }
          ]
        }
      ]
    },
    {
      id: "w496",
      word: "catch up",
      pronunciation: "/kætʃ ʌp/",
      partOfSpeech: "phrasal verb",
      level: "B2",
      translations: { ru: "догонять / наверстывать", zh: "赶上 / 弥补（落下的工作）", es: "ponerse al día / alcanzar", fr: "rattraper son retard / se tenir au courant", de: "aufholen / nacharbeiten", tr: "yetişmek / arayı kapatmak", ja: "追いつく / 遅れを取り戻す" },
      synonyms: ["make up for lost time", "draw level"],
      collocations: ["catch up on work", "catch up with someone"],
      meanings: [
        {
          id: "m496_1",
          definition: "To do something you did not have time to do earlier.",
          translation: { ru: "Сделать то, на что раньше не было времени.", zh: "做你以前没有时间做的事情。", es: "Hacer algo que no tuviste tiempo de hacer antes.", fr: "Faire quelque chose que vous n'avez pas eu le temps de faire plus tôt.", de: "Etwas tun, wofür Sie früher keine Zeit hatten.", tr: "Daha önce yapmaya vaktiniz olmayan bir şeyi yapmak.", ja: "以前にやる時間がなかったことをやること。" },
          examples: [
            { id: "ex496_1", sentence: "I need to work late tonight to catch up on some urgent emails.", translation: { ru: "Мне нужно сегодня поработать допоздна, чтобы наверстать упущенное и ответить на срочные письма.", zh: "我今晚需要加班来处理一些紧急邮件，弥补落下的工作。", es: "Necesito trabajar hasta tarde esta noche para ponerme al día con algunos correos urgentes.", fr: "Je dois travailler tard ce soir pour rattraper mon retard sur quelques e-mails urgents.", de: "Ich muss heute Abend lange arbeiten, um bei einigen dringenden E-Mails aufzuholen.", tr: "Bazı acil e-postalara yetişmek için bu gece geç saatlere kadar çalışmam gerekiyor.", ja: "いくつかの緊急のメールの遅れを取り戻すために、今夜は遅くまで残業する必要があります。" } },
            { id: "ex496_2", sentence: "Let's schedule a meeting next week so we can catch up on your progress.", translation: { ru: "Давайте назначим встречу на следующей неделе, чтобы обсудить ваши успехи и ввести меня в курс дела.", zh: "我们下周安排一次会议吧，这样我们可以了解一下你的进展。", es: "Programemos una reunión la próxima semana para que podamos ponernos al día sobre su progreso.", fr: "Planifions une réunion la semaine prochaine pour que nous puissions nous tenir au courant de vos progrès.", de: "Lassen Sie uns nächste Woche ein Meeting planen, damit wir uns über Ihre Fortschritte austauschen können.", tr: "İlerlemeniz hakkında arayı kapatmak için gelecek hafta bir toplantı planlayalım.", ja: "あなたの進捗状況について把握するために、来週会議の予定を入れましょう。" } }
          ]
        }
      ]
    },
    {
      id: "w497",
      word: "sort out",
      pronunciation: "/sɔːt aʊt/",
      partOfSpeech: "phrasal verb",
      level: "B2",
      translations: { ru: "разбираться с (проблемой) / улаживать", zh: "解决 / 整理好", es: "resolver / solucionar", fr: "régler / résoudre", de: "klären / in Ordnung bringen", tr: "çözmek / halletmek", ja: "解決する / 整理する" },
      synonyms: ["resolve", "fix", "straighten out"],
      collocations: ["sort out a problem", "sort out an issue"],
      meanings: [
        {
          id: "m497_1",
          definition: "To resolve a problem or difficulty.",
          translation: { ru: "Решить проблему или трудность.", zh: "解决问题或困难。", es: "Resolver un problema o dificultad.", fr: "Résoudre un problème ou une difficulté.", de: "Ein Problem oder eine Schwierigkeit lösen.", tr: "Bir sorunu veya zorluğu çözmek.", ja: "問題や困難を解決すること。" },
          examples: [
            { id: "ex497_1", sentence: "It took them months to sort out the legal complications of the merger.", translation: { ru: "У них ушли месяцы, чтобы разобраться с юридическими сложностями слияния.", zh: "他们花了好几个月的时间才解决了合并的法律纠纷。", es: "Les tomó meses resolver las complicaciones legales de la fusión.", fr: "Il leur a fallu des mois pour régler les complications juridiques de la fusion.", de: "Es dauerte Monate, um die rechtlichen Komplikationen der Fusion zu klären.", tr: "Birleşmenin yasal karmaşıklıklarını çözmek ayları aldı.", ja: "合併の法的な複雑な問題を解決するのに彼らは数ヶ月かかりました。" } },
            { id: "ex497_2", sentence: "Don't worry about the booking error; I'll sort it out tomorrow morning.", translation: { ru: "Не беспокойтесь об ошибке бронирования; я улажу это завтра утром.", zh: "别担心预订错误；我明早会处理好的。", es: "No te preocupes por el error de reserva; lo solucionaré mañana por la mañana.", fr: "Ne vous inquiétez pas pour l'erreur de réservation ; je la réglerai demain matin.", de: "Machen Sie sich keine Sorgen wegen des Buchungsfehlers; ich bringe das morgen früh in Ordnung.", tr: "Rezervasyon hatası için endişelenmeyin; yarın sabah halledeceğim.", ja: "予約のミスについては心配しないでください。明日の朝に解決しておきます。" } }
          ]
        }
      ]
    },
    {
      id: "w498",
      word: "milestone",
      pronunciation: "/ˈmaɪlstəʊn/",
      partOfSpeech: "noun",
      level: "B2",
      translations: { ru: "веха / важный этап", zh: "里程碑 / 重要阶段", es: "hito", fr: "étape importante / jalon", de: "Meilenstein", tr: "dönüm noktası / kilometre taşı", ja: "節目 / マイルストーン" },
      synonyms: ["landmark", "turning point", "achievement"],
      collocations: ["major milestone", "reach a milestone"],
      meanings: [
        {
          id: "m498_1",
          definition: "An important event in the development or history of something.",
          translation: { ru: "Важное событие в развитии или истории чего-либо.", zh: "某事物发展或历史上的重要事件。", es: "Un evento importante en el desarrollo o la historia de algo.", fr: "Un événement important dans le développement ou l'histoire de quelque chose.", de: "Ein wichtiges Ereignis in der Entwicklung oder Geschichte von etwas.", tr: "Bir şeyin gelişiminde veya tarihinde önemli bir olay.", ja: "何かの発展や歴史における重要な出来事。" },
          examples: [
            { id: "ex498_1", sentence: "Completing the first phase of the software on time is a major milestone for our team.", translation: { ru: "Своевременное завершение первого этапа разработки ПО — это важная веха для нашей команды.", zh: "按时完成软件的第一阶段是我们团队的一个重要里程碑。", es: "Completar la primera fase del software a tiempo es un gran hito para nuestro equipo.", fr: "Terminer la première phase du logiciel à temps est une étape majeure pour notre équipe.", de: "Der pünktliche Abschluss der ersten Phase der Software ist ein wichtiger Meilenstein für unser Team.", tr: "Yazılımın ilk aşamasını zamanında tamamlamak ekibimiz için önemli bir kilometre taşıdır.", ja: "ソフトウェアの最初のフェーズを予定通りに完了することは、チームにとって大きなマイルストーンです。" } },
            { id: "ex498_2", sentence: "The invention of the internet was a significant milestone in human history.", translation: { ru: "Изобретение интернета стало значительной вехой в истории человечества.", zh: "互联网的发明是人类历史上的一个重要里程碑。", es: "La invención de Internet fue un hito significativo en la historia de la humanidad.", fr: "L'invention d'Internet a été une étape significative dans l'histoire de l'humanité.", de: "Die Erfindung des Internets war ein bedeutender Meilenstein in der Geschichte der Menschheit.", tr: "İnternetin icadı insanlık tarihinde önemli bir dönüm noktasıydı.", ja: "インターネットの発明は人類の歴史において重要な節目でした。" } }
          ]
        }
      ]
    },
    {
      id: "w499",
      word: "whereas",
      pronunciation: "/ˌweərˈæz/",
      partOfSpeech: "conjunction",
      level: "B2",
      translations: { ru: "в то время как / тогда как", zh: "然而 / 相比之下", es: "mientras que", fr: "tandis que / alors que", de: "während / wohingegen", tr: "oysa / halbuki", ja: "～であるのに対し / その一方で" },
      synonyms: ["while", "on the other hand"],
      collocations: [],
      meanings: [
        {
          id: "m499_1",
          definition: "Compared with the fact that; but.",
          translation: { ru: "По сравнению с тем фактом, что; но.", zh: "与...事实相比；但是。", es: "En comparación con el hecho de que; pero.", fr: "Par rapport au fait que ; mais.", de: "Im Vergleich zu der Tatsache, dass; aber.", tr: "O gerçeğiyle karşılaştırıldığında; ama.", ja: "という事実と比較して。しかし。" },
          examples: [
            { id: "ex499_1", sentence: "He prefers to organize meetings in the morning, whereas she prefers the afternoon.", translation: { ru: "Он предпочитает организовывать встречи утром, тогда как она предпочитает после обеда.", zh: "他喜欢在早上安排会议，而她则喜欢在下午。", es: "Él prefiere organizar reuniones por la mañana, mientras que ella prefiere la tarde.", fr: "Il préfère organiser les réunions le matin, tandis qu'elle préfère l'après-midi.", de: "Er organisiert Meetings lieber morgens, wohingegen sie den Nachmittag bevorzugt.", tr: "O toplantıları sabah düzenlemeyi tercih eder, oysa o öğleden sonrayı tercih eder.", ja: "彼は午前中に会議を設定するのを好みますが、その一方で彼女は午後を好みます。" } },
            { id: "ex499_2", sentence: "In the north the climate is cold, whereas in the south it is quite warm.", translation: { ru: "На севере климат холодный, в то время как на юге довольно теплый.", zh: "北方气候寒冷，而南方却相当温暖。", es: "En el norte el clima es frío, mientras que en el sur es bastante cálido.", fr: "Dans le nord le climat est froid, alors que dans le sud il fait plutôt chaud.", de: "Im Norden ist das Klima kalt, während es im Süden recht warm ist.", tr: "Kuzeyde iklim soğuktur, halbuki güneyde oldukça sıcaktır.", ja: "北部では気候が寒いですが、一方で南部はかなり暖かいです。" } }
          ]
        }
      ]
    },
    {
      id: "w500",
      word: "feasible",
      pronunciation: "/ˈfiːzəbl/",
      partOfSpeech: "adjective",
      level: "B2",
      translations: { ru: "осуществимый / возможный", zh: "可行的 / 行得通的", es: "factible / viable", fr: "réalisable / faisable", de: "machbar / durchführbar", tr: "uygulanabilir / yapılabilir", ja: "実現可能な / 実行可能な" },
      synonyms: ["possible", "practicable", "achievable"],
      collocations: ["commercially feasible", "financially feasible"],
      meanings: [
        {
          id: "m500_1",
          definition: "Able to be made, done, or achieved.",
          translation: { ru: "Способный быть сделанным, выполненным или достигнутым.", zh: "能够制造、完成或实现的。", es: "Capaz de ser hecho, realizado o logrado.", fr: "Capable d'être fait, réalisé ou accompli.", de: "In der Lage, gemacht, getan oder erreicht zu werden.", tr: "Yapılabilir, edilebilir veya başarılabilir.", ja: "作ること、行うこと、または達成することができること。" },
          examples: [
            { id: "ex500_1", sentence: "We need to determine if it is financially feasible to expand into the Asian market.", translation: { ru: "Нам нужно определить, финансово ли осуществимо расширение на азиатский рынок.", zh: "我们需要确定向亚洲市场扩张在财务上是否可行。", es: "Necesitamos determinar si es financieramente factible expandirnos al mercado asiático.", fr: "Nous devons déterminer s'il est financièrement réalisable de s'étendre sur le marché asiatique.", de: "Wir müssen feststellen, ob es finanziell machbar ist, auf den asiatischen Markt zu expandieren.", tr: "Asya pazarına açılmanın finansal olarak uygulanabilir olup olmadığını belirlememiz gerekiyor.", ja: "アジア市場への進出が財務的に実行可能かどうかを判断する必要があります。" } },
            { id: "ex500_2", sentence: "Although your idea sounds great, it is simply not feasible given our current tight deadline.", translation: { ru: "Хотя ваша идея звучит отлично, она просто неосуществима, учитывая наши текущие жесткие сроки.", zh: "尽管你的想法听起来很棒，但考虑到我们目前紧迫的期限，它根本行不通。", es: "Aunque su idea suena genial, simplemente no es factible dado nuestro ajustado plazo actual.", fr: "Bien que votre idée semble excellente, elle n'est tout simplement pas faisable étant donné notre délai actuel très serré.", de: "Obwohl Ihre Idee großartig klingt, ist sie angesichts unserer derzeitigen knappen Frist einfach nicht durchführbar.", tr: "Fikriniz kulağa harika gelse de, mevcut kısıtlı teslim tarihimiz göz önüne alındığında uygulanabilir değil.", ja: "あなたのアイデアは素晴らしいように聞こえますが、現在の厳しいスケジュールを考えると、単に実現不可能です。" } }
          ]
        }
      ]
    }
  ],
  reading: {
    id: "r50",
    title: "Managing Projects and Priorities",
    content: "In any professional environment, the ability to manage a demanding workload is a vital skill. Project managers often have to schedule multiple tasks simultaneously, ensuring that no team member will fall behind. When deadlines are exceptionally tight, it is easy to panic, but successful teams know how to prioritize and catch up on overdue assignments logically.\n\nOccasionally, unforeseen circumstances arise, and you might have to put off a less urgent meeting to sort out a sudden emergency. For instance, whereas an internal review can be delayed, a presentation for an essential client cannot. Before committing to a new timeline, it is important to analyze whether the adjusted schedule is actually feasible. Achieving every significant milestone gives the team momentum, transforming a stressful environment into a productive one where priorities are clearly defined.",
    translations: {
      ru: "В любой профессиональной среде умение справляться с большой рабочей нагрузкой является жизненно важным навыком. Руководителям проектов часто приходится планировать несколько задач одновременно, следя за тем, чтобы ни один член команды не отстал. Когда сроки исключительно жесткие, легко поддаться панике, но успешные команды знают, как расставить приоритеты и логически наверстать упущенное.\n\nВремя от времени возникают непредвиденные обстоятельства, и вам, возможно, придется отложить менее срочное совещание, чтобы разобраться с внезапной чрезвычайной ситуацией. Например, в то время как внутреннюю проверку можно отложить, презентацию для важного клиента - нет. Прежде чем утверждать новые сроки, важно проанализировать, действительно ли скорректированный график осуществим. Достижение каждой значимой вехи придает команде импульс, превращая стрессовую среду в продуктивную, где приоритеты четко определены.",
      zh: "在任何专业环境中，管理繁重工作量的能力是一项至关重要的技能。项目经理通常必须同时安排多项任务，以确保没有团队成员会落后。当期限特别紧迫时，很容易感到恐慌，但成功的团队知道如何确定优先级并合乎逻辑地弥补逾期的任务。\n\n有时，会出现不可预见的情况，您可能不得不推迟不太紧急的会议来处理突发的紧急情况。例如，内部审查可以推迟，而为重要客户所做的演示则不行。在承诺新的时间表之前，重要的是分析调整后的时间表是否真正可行。实现每一个重要的里程碑都会给团队带来动力，将充满压力的环境转变为优先事项明确的生产性环境。",
      es: "En cualquier entorno profesional, la capacidad de gestionar una carga de trabajo exigente es una habilidad vital. Los directores de proyectos a menudo tienen que programar múltiples tareas simultáneamente, asegurándose de que ningún miembro del equipo se quede atrás. Cuando los plazos son excepcionalmente ajustados, es fácil entrar en pánico, pero los equipos exitosos saben cómo priorizar y ponerse al día con las tareas atrasadas de manera lógica.\n\nOcasionalmente, surgen circunstancias imprevistas, y es posible que tenga que posponer una reunión menos urgente para resolver una emergencia repentina. Por ejemplo, mientras que una revisión interna puede retrasarse, una presentación para un cliente esencial no. Antes de comprometerse con un nuevo cronograma, es importante analizar si el cronograma ajustado es realmente factible. Lograr cada hito significativo le da impulso al equipo, transformando un entorno estresante en uno productivo donde las prioridades están claramente definidas.",
      fr: "Dans tout environnement professionnel, la capacité à gérer une lourde charge de travail est une compétence vitale. Les chefs de projet doivent souvent planifier plusieurs tâches simultanément, en s'assurant qu'aucun membre de l'équipe ne prenne de retard. Lorsque les délais sont exceptionnellement serrés, il est facile de paniquer, mais les équipes qui réussissent savent comment établir des priorités et rattraper logiquement les tâches en retard.\n\nParfois, des circonstances imprévues surviennent, et vous pourriez avoir à repousser une réunion moins urgente pour régler une urgence soudaine. Par exemple, alors qu'un examen interne peut être retardé, une présentation pour un client essentiel ne le peut pas. Avant de vous engager sur un nouveau calendrier, il est important d'analyser si le calendrier ajusté est réellement faisable. Atteindre chaque étape importante donne un élan à l'équipe, transformant un environnement stressant en un environnement productif où les priorités sont clairement définies.",
      de: "In jedem professionellen Umfeld ist die Fähigkeit, ein anspruchsvolles Arbeitspensum zu bewältigen, eine lebenswichtige Fähigkeit. Projektmanager müssen oft mehrere Aufgaben gleichzeitig planen und sicherstellen, dass kein Teammitglied in Rückstand gerät. Wenn die Fristen außergewöhnlich knapp sind, gerät man leicht in Panik, aber erfolgreiche Teams wissen, wie sie Prioritäten setzen und überfällige Aufgaben logisch aufholen können.\n\nGelegentlich treten unvorhergesehene Umstände auf, und Sie müssen möglicherweise ein weniger dringendes Meeting verschieben, um einen plötzlichen Notfall zu klären. Während beispielsweise eine interne Überprüfung verschoben werden kann, ist dies bei einer Präsentation für einen wichtigen Kunden nicht möglich. Bevor Sie sich auf einen neuen Zeitplan festlegen, ist es wichtig zu analysieren, ob der angepasste Zeitplan tatsächlich machbar ist. Das Erreichen jedes wichtigen Meilensteins gibt dem Team Schwung und verwandelt ein stressiges Umfeld in ein produktives, in dem die Prioritäten klar definiert sind.",
      tr: "Herhangi bir profesyonel ortamda, zorlu bir iş yükünü yönetme yeteneği hayati bir beceridir. Proje yöneticileri genellikle aynı anda birden fazla görevi planlamak zorundadır ve hiçbir ekip üyesinin geride kalmamasını sağlarlar. Teslim tarihleri ​​son derece kısıtlı olduğunda paniğe kapılmak kolaydır, ancak başarılı ekipler önceliklendirmeyi ve gecikmiş görevleri mantıklı bir şekilde nasıl yakalayacaklarını bilirler.\n\nBazen öngörülemeyen durumlar ortaya çıkar ve ani bir acil durumu çözmek için daha az acil bir toplantıyı ertelemek zorunda kalabilirsiniz. Örneğin, dahili bir inceleme geciktirilebilirken, önemli bir müşteri için yapılacak bir sunum geciktirilemez. Yeni bir zaman çizelgesine taahhütte bulunmadan önce, ayarlanan programın gerçekten uygulanabilir olup olmadığını analiz etmek önemlidir. Önemli olan her kilometre taşını başarmak, ekibe ivme kazandırarak stresli bir ortamı, önceliklerin açıkça tanımlandığı üretken bir ortama dönüştürür.",
      ja: "どのような職場環境においても、厳しい仕事量を管理する能力は不可欠なスキルです。プロジェクトマネージャーは多くの場合、複数のタスクを同時にスケジュールし、チームメンバーが遅れをとらないようにする必要があります。締め切りが非常に厳しい場合、パニックに陥りやすいですが、成功しているチームは、優先順位をつけ、遅れている課題を論理的に取り戻す方法を知っています。\n\n時折、予期せぬ事態が発生し、突然の緊急事態を解決するために、緊急性の低い会議を延期しなければならない場合があります。たとえば、内部レビューは遅らせることができますが、重要なクライアントへのプレゼンテーションは遅らせることはできません。新しいタイムラインを約束する前に、調整されたスケジュールが本当に実行可能かどうかを分析することが重要です。重要なマイルストーンをすべて達成することはチームに勢いを与え、ストレスの多い環境を、優先順位が明確に定義された生産的な環境へと変えます。"
    },
    comprehensionQuestions: [
      {
        id: "q50_1",
        question: "What is essential when managing a demanding workload?",
        options: [
          "Prioritizing and organizing tasks logically",
          "Putting off all internal meetings indefinitely",
          "Asking clients for an extended deadline",
          "Refusing any new milestones"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "q50_2",
        question: "According to the text, what might happen if a sudden emergency arises?",
        options: [
          "You might need to put off a less urgent meeting",
          "You must fall behind schedule",
          "You should declare the project no longer feasible",
          "You will fail to achieve the milestone"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "q50_3",
        question: "Why is it important to analyze an adjusted schedule?",
        options: [
          "To determine if it is actually feasible",
          "To see if the workload has increased",
          "To explain to clients why you fell behind",
          "Because tight deadlines are always illegal"
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};

const output = `import { Lesson } from '../types';\n\nexport const b2Lesson50: Lesson = ${JSON.stringify(b2Lesson50, null, 2)};\n`;
fs.writeFileSync('src/data/b2-lesson-50.ts', output);
