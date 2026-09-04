const fs = require('fs');

const lesson3 = `import { Lesson } from '../types';

export const b2Lesson3: Lesson = {
  id: 'b2-l3',
  level: 'B2',
  number: 3,
  title: 'Work & Responsibility',
  words: [
    {
      id: 'w21',
      word: 'delegate',
      pronunciation: '/ˈdɛlɪɡeɪt/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['assign', 'entrust', 'transfer'],
      collocations: ['delegate tasks', 'delegate responsibility'],
      translations: { ru: 'делегировать', zh: '委派', es: 'delegar', fr: 'déléguer', de: 'delegieren', tr: 'devretmek', ja: '委任する' },
      meanings: [
        {
          id: 'w21-m1',
          definition: 'to give a particular job, duty, right, etc. to someone else so that they do it for you',
          translation: { ru: 'передавать часть работы или обязанностей кому-то другому', zh: '将特定工作、职责、权利等交给他人', es: 'dar un trabajo, deber o derecho particular a otra persona', fr: 'donner un travail, un devoir, un droit particulier à quelqu\\'un d\\'autre', de: 'eine bestimmte Aufgabe, Pflicht, ein Recht usw. an jemand anderen übergeben', tr: 'belirli bir işi, görevi, hakkı vb. başkasına vermek', ja: '特定の仕事、義務、権利などを他の人に委ねる' },
          examples: [
            {
              id: 'w21-m1-e1',
              sentence: 'A good manager must learn how to delegate tasks effectively.',
              translation: { ru: 'Хороший менеджер должен научиться эффективно делегировать задачи.', zh: '优秀的经理必须学会如何有效地委派任务。', es: 'Un buen gerente debe aprender a delegar tareas de manera efectiva.', fr: 'Un bon manager doit apprendre à déléguer les tâches efficacement.', de: 'Ein guter Manager muss lernen, wie man Aufgaben effektiv delegiert.', tr: 'İyi bir yönetici görevleri etkili bir şekilde devretmeyi öğrenmelidir.', ja: '優れたマネージャーは、タスクを効果的に委任する方法を学ばなければなりません。' }
            },
            {
              id: 'w21-m1-e2',
              sentence: 'She decided to delegate the project to her most trusted colleague.',
              translation: { ru: 'Она решила поручить этот проект своему самому надежному коллеге.', zh: '她决定将这个项目委派给她最信任的同事。', es: 'Decidió delegar el proyecto a su colega de mayor confianza.', fr: 'Elle a décidé de déléguer le projet à son collègue le plus digne de confiance.', de: 'Sie beschloss, das Projekt an ihren vertrauenswürdigsten Kollegen zu delegieren.', tr: 'Projeyi en güvendiği meslektaşına devretmeye karar verdi.', ja: '彼女は最も信頼している同僚にそのプロジェクトを委任することにしました。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w22',
      word: 'evaluate',
      pronunciation: '/ɪˈvæljueɪt/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['assess', 'appraise', 'judge'],
      collocations: ['evaluate performance', 'carefully evaluate'],
      translations: { ru: 'оценивать', zh: '评估', es: 'evaluar', fr: 'évaluer', de: 'bewerten', tr: 'değerlendirmek', ja: '評価する' },
      meanings: [
        {
          id: 'w22-m1',
          definition: 'to judge or calculate the quality, importance, amount, or value of something',
          translation: { ru: 'судить или вычислять качество, важность, количество или ценность чего-либо', zh: '判断或计算某物的质量、重要性、数量或价值', es: 'juzgar o calcular la calidad, importancia, cantidad o valor de algo', fr: 'juger ou calculer la qualité, l\\'importance, la quantité ou la valeur de quelque chose', de: 'die Qualität, Bedeutung, Menge oder den Wert von etwas beurteilen oder berechnen', tr: 'bir şeyin kalitesini, önemini, miktarını veya değerini yargılamak veya hesaplamak', ja: '何かの品質、重要性、量、または価値を判断または計算する' },
          examples: [
            {
              id: 'w22-m1-e1',
              sentence: 'We need to evaluate the success of the recent marketing campaign.',
              translation: { ru: 'Нам нужно оценить успех недавней маркетинговой кампании.', zh: '我们需要评估近期营销活动的成功与否。', es: 'Necesitamos evaluar el éxito de la reciente campaña de marketing.', fr: 'Nous devons évaluer le succès de la récente campagne de marketing.', de: 'Wir müssen den Erfolg der jüngsten Marketingkampagne bewerten.', tr: 'Son pazarlama kampanyasının başarısını değerlendirmemiz gerekiyor.', ja: '最近のマーケティングキャンペーンの成功を評価する必要があります。' }
            },
            {
              id: 'w22-m1-e2',
              sentence: 'The teacher will evaluate the students based on their final presentations.',
              translation: { ru: 'Учитель будет оценивать студентов на основе их финальных презентаций.', zh: '老师将根据学生的最终展示来评估他们。', es: 'El maestro evaluará a los estudiantes basándose en sus presentaciones finales.', fr: 'L\\'enseignant évaluera les étudiants en fonction de leurs présentations finales.', de: 'Der Lehrer wird die Schüler anhand ihrer Abschlusspräsentationen bewerten.', tr: 'Öğretmen, öğrencileri final sunumlarına göre değerlendirecek.', ja: '先生は最終プレゼンテーションに基づいて生徒を評価します。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w23',
      word: 'objective',
      pronunciation: '/əbˈdʒɛktɪv/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['goal', 'aim', 'target'],
      collocations: ['main objective', 'achieve an objective'],
      translations: { ru: 'цель', zh: '目标', es: 'objetivo', fr: 'objectif', de: 'Ziel', tr: 'hedef', ja: '目的' },
      meanings: [
        {
          id: 'w23-m1',
          definition: 'something that you plan to do or achieve',
          translation: { ru: 'что-то, что вы планируете сделать или достичь', zh: '你计划要做或实现的事情', es: 'algo que planeas hacer o lograr', fr: 'quelque chose que vous prévoyez de faire ou de réaliser', de: 'etwas, das Sie tun oder erreichen möchten', tr: 'yapmayı veya başarmayı planladığınız bir şey', ja: 'あなたがしようと計画している、または達成しようとしていること' },
          examples: [
            {
              id: 'w23-m1-e1',
              sentence: 'The primary objective of this meeting is to finalize the budget.',
              translation: { ru: 'Основная цель этой встречи - утвердить бюджет.', zh: '本次会议的主要目标是最终确定预算。', es: 'El objetivo principal de esta reunión es finalizar el presupuesto.', fr: 'L\\'objectif principal de cette réunion est de finaliser le budget.', de: 'Das Hauptziel dieses Treffens ist es, das Budget abzuschließen.', tr: 'Bu toplantının temel amacı bütçeyi kesinleştirmektir.', ja: 'この会議の主な目的は予算を確定することです。' }
            },
            {
              id: 'w23-m1-e2',
              sentence: 'She set a clear objective for her career development over the next five years.',
              translation: { ru: 'Она поставила четкую цель для своего карьерного роста на следующие пять лет.', zh: '她为自己未来五年的职业发展设定了明确的目标。', es: 'Estableció un objetivo claro para su desarrollo profesional durante los próximos cinco años.', fr: 'Elle a fixé un objectif clair pour son développement de carrière au cours des cinq prochaines années.', de: 'Sie hat sich ein klares Ziel für ihre berufliche Entwicklung in den nächsten fünf Jahren gesetzt.', tr: 'Önümüzdeki beş yıl boyunca kariyer gelişimi için net bir hedef belirledi.', ja: '彼女は今後5年間のキャリア開発に向けた明確な目標を設定しました。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w24',
      word: 'strategy',
      pronunciation: '/ˈstrætədʒi/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['plan', 'approach', 'tactic'],
      collocations: ['develop a strategy', 'business strategy'],
      translations: { ru: 'стратегия', zh: '策略', es: 'estrategia', fr: 'stratégie', de: 'Strategie', tr: 'strateji', ja: '戦略' },
      meanings: [
        {
          id: 'w24-m1',
          definition: 'a detailed plan for achieving success in situations such as war, politics, business, industry, or sport',
          translation: { ru: 'детальный план достижения успеха в таких ситуациях, как бизнес, политика и т.д.', zh: '为在战争、政治、商业、工业或体育等情况下取得成功而制定的详细计划', es: 'un plan detallado para lograr el éxito en situaciones como negocios, política, etc.', fr: 'un plan détaillé pour réussir dans des situations telles que les affaires, la politique, etc.', de: 'ein detaillierter Plan zum Erfolg in Situationen wie Wirtschaft, Politik usw.', tr: 'savaş, siyaset, iş, sanayi veya spor gibi durumlarda başarıya ulaşmak için ayrıntılı bir plan', ja: '戦争、政治、ビジネス、産業、スポーツなどの状況で成功を収めるための詳細な計画' },
          examples: [
            {
              id: 'w24-m1-e1',
              sentence: 'They had to change their entire marketing strategy to attract younger customers.',
              translation: { ru: 'Им пришлось изменить всю свою маркетинговую стратегию, чтобы привлечь более молодых клиентов.', zh: '他们不得不改变整个营销策略以吸引更年轻的客户。', es: 'Tuvieron que cambiar toda su estrategia de marketing para atraer clientes más jóvenes.', fr: 'Ils ont dû changer toute leur stratégie de marketing pour attirer des clients plus jeunes.', de: 'Sie mussten ihre gesamte Marketingstrategie ändern, um jüngere Kunden anzulocken.', tr: 'Daha genç müşterileri çekmek için tüm pazarlama stratejilerini değiştirmek zorunda kaldılar.', ja: '若い顧客を引き付けるために、彼らはマーケティング戦略全体を変更しなければなりませんでした。' }
            },
            {
              id: 'w24-m1-e2',
              sentence: 'The team spent weeks developing a long-term strategy for market expansion.',
              translation: { ru: 'Команда потратила недели на разработку долгосрочной стратегии расширения рынка.', zh: '团队花了数周时间制定市场扩张的长期策略。', es: 'El equipo pasó semanas desarrollando una estrategia a largo plazo para la expansión del mercado.', fr: 'L\\'équipe a passé des semaines à développer une stratégie à long terme pour l\\'expansion du marché.', de: 'Das Team verbrachte Wochen mit der Entwicklung einer langfristigen Strategie für die Marktexpansion.', tr: 'Ekip, pazarın genişlemesi için uzun vadeli bir strateji geliştirmek için haftalar harcadı.', ja: 'チームは市場拡大のための長期戦略の開発に何週間も費やしました。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w25',
      word: 'productive',
      pronunciation: '/prəˈdʌktɪv/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['fruitful', 'efficient', 'constructive'],
      collocations: ['highly productive', 'productive discussion'],
      translations: { ru: 'продуктивный', zh: '多产的', es: 'productivo', fr: 'productif', de: 'produktiv', tr: 'üretken', ja: '生産的な' },
      meanings: [
        {
          id: 'w25-m1',
          definition: 'resulting in or providing a large amount or supply of something',
          translation: { ru: 'приводящий к созданию большого количества или объема чего-либо', zh: '产生或提供大量某物', es: 'que resulta en o proporciona una gran cantidad o suministro de algo', fr: 'résultant en ou fournissant une grande quantité ou approvisionnement de quelque chose', de: 'was zu einer großen Menge oder Versorgung mit etwas führt oder diese bereitstellt', tr: 'bir şeyin büyük miktarda veya tedarikinde sonuçlanan veya sağlayan', ja: '何かを大量に生み出す、または提供する結果となる' },
          examples: [
            {
              id: 'w25-m1-e1',
              sentence: 'We had a very productive meeting and managed to solve several major issues.',
              translation: { ru: 'У нас была очень продуктивная встреча, и нам удалось решить несколько главных проблем.', zh: '我们开了一个非常有成果的会议，并设法解决了几个主要问题。', es: 'Tuvimos una reunión muy productiva y logramos resolver varios problemas importantes.', fr: 'Nous avons eu une réunion très productive et avons réussi à résoudre plusieurs problèmes majeurs.', de: 'Wir hatten ein sehr produktives Treffen und konnten einige wichtige Probleme lösen.', tr: 'Çok verimli bir toplantı yaptık ve birkaç önemli sorunu çözmeyi başardık.', ja: '私たちは非常に生産的な会議を持ち、いくつかの大きな問題を解決することができました。' }
            },
            {
              id: 'w25-m1-e2',
              sentence: 'Finding a quiet place to work helps me be much more productive.',
              translation: { ru: 'Поиск тихого места для работы помогает мне быть намного более продуктивным.', zh: '找到一个安静的地方工作可以帮助我提高效率。', es: 'Encontrar un lugar tranquilo para trabajar me ayuda a ser mucho más productivo.', fr: 'Trouver un endroit calme pour travailler m\\'aide à être beaucoup plus productif.', de: 'Einen ruhigen Ort zum Arbeiten zu finden, hilft mir, viel produktiver zu sein.', tr: 'Çalışmak için sessiz bir yer bulmak, çok daha üretken olmama yardımcı oluyor.', ja: '働くための静かな場所を見つけることは、私がずっと生産的になるのを助けます。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w26',
      word: 'capable',
      pronunciation: '/ˈkeɪpəbl/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['able', 'competent', 'qualified'],
      collocations: ['fully capable', 'capable of doing'],
      translations: { ru: 'способный', zh: '有能力的', es: 'capaz', fr: 'capable', de: 'fähig', tr: 'yetenekli', ja: '有能な' },
      meanings: [
        {
          id: 'w26-m1',
          definition: 'having the ability, power, or qualities to be able to do something',
          translation: { ru: 'имеющий способность, силу или качества для того, чтобы сделать что-то', zh: '有能力、权力或品质能够做某事', es: 'tener la capacidad, el poder o las cualidades para poder hacer algo', fr: 'avoir la capacité, le pouvoir ou les qualités de pouvoir faire quelque chose', de: 'die Fähigkeit, die Macht oder die Eigenschaften haben, etwas tun zu können', tr: 'bir şey yapabilme yeteneğine, gücüne veya niteliklerine sahip olmak', ja: '何かを行うことができる能力、力、または資質を持っていること' },
          examples: [
            {
              id: 'w26-m1-e1',
              sentence: 'She is completely capable of handling this challenging assignment on her own.',
              translation: { ru: 'Она вполне способна справиться с этим сложным заданием самостоятельно.', zh: '她完全有能力独自处理这项具有挑战性的任务。', es: 'Es completamente capaz de manejar esta tarea desafiante por su cuenta.', fr: 'Elle est tout à fait capable de gérer cette mission difficile par elle-même.', de: 'Sie ist absolut fähig, diese herausfordernde Aufgabe alleine zu bewältigen.', tr: 'Bu zorlu görevi tek başına üstesinden gelme yeteneğine tamamen sahip.', ja: '彼女はこの困難な任務を一人で完全に処理することができます。' }
            },
            {
              id: 'w26-m1-e2',
              sentence: 'We need to hire highly capable individuals to grow the business.',
              translation: { ru: 'Нам нужно нанимать высококвалифицированных специалистов для развития бизнеса.', zh: '我们需要聘请能力强的人才来发展业务。', es: 'Necesitamos contratar personas muy capaces para hacer crecer el negocio.', fr: 'Nous devons embaucher des personnes très capables pour développer l\\'entreprise.', de: 'Wir müssen sehr fähige Personen einstellen, um das Geschäft auszubauen.', tr: 'İşi büyütmek için oldukça yetenekli bireyleri işe almamız gerekiyor.', ja: '事業を成長させるために、非常に有能な人材を雇用する必要があります。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w27',
      word: 'resolve',
      pronunciation: '/rɪˈzɒlv/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['solve', 'settle', 'clear up'],
      collocations: ['resolve an issue', 'resolve a conflict'],
      translations: { ru: 'разрешать', zh: '解决', es: 'resolver', fr: 'résoudre', de: 'lösen', tr: 'çözmek', ja: '解決する' },
      meanings: [
        {
          id: 'w27-m1',
          definition: 'to solve or end a problem or difficulty',
          translation: { ru: 'решать или устранять проблему или трудность', zh: '解决或结束问题或困难', es: 'resolver o poner fin a un problema o dificultad', fr: 'résoudre ou mettre fin à un problème ou une difficulté', de: 'ein Problem oder eine Schwierigkeit lösen oder beenden', tr: 'bir sorunu veya zorluğu çözmek veya sona erdirmek', ja: '問題や困難を解決または終わらせる' },
          examples: [
            {
              id: 'w27-m1-e1',
              sentence: 'The human resources department stepped in to resolve the dispute between the two employees.',
              translation: { ru: 'Отдел кадров вмешался, чтобы разрешить спор между двумя сотрудниками.', zh: '人力资源部介入以解决两名员工之间的争议。', es: 'El departamento de recursos humanos intervino para resolver la disputa entre los dos empleados.', fr: 'Le département des ressources humaines est intervenu pour résoudre le différend entre les deux employés.', de: 'Die Personalabteilung schaltete sich ein, um den Streit zwischen den beiden Mitarbeitern zu lösen.', tr: 'İnsan kaynakları departmanı iki çalışan arasındaki anlaşmazlığı çözmek için devreye girdi.', ja: '人事部は、2人の従業員間の紛争を解決するために介入しました。' }
            },
            {
              id: 'w27-m1-e2',
              sentence: 'It took several days to successfully resolve the technical issues with the server.',
              translation: { ru: 'Потребовалось несколько дней, чтобы успешно устранить технические неполадки с сервером.', zh: '花了几天时间才成功解决了服务器的技术问题。', es: 'Tomó varios días resolver con éxito los problemas técnicos con el servidor.', fr: 'Il a fallu plusieurs jours pour résoudre avec succès les problèmes techniques avec le serveur.', de: 'Es dauerte mehrere Tage, um die technischen Probleme mit dem Server erfolgreich zu lösen.', tr: 'Sunucuyla ilgili teknik sorunları başarıyla çözmek birkaç gün sürdü.', ja: 'サーバーの技術的な問題を正常に解決するのに数日かかりました。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w28',
      word: 'initiative',
      pronunciation: '/ɪˈnɪʃətɪv/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['drive', 'enterprise', 'action'],
      collocations: ['take the initiative', 'show initiative'],
      translations: { ru: 'инициатива', zh: '主动性 / 倡议', es: 'iniciativa', fr: 'initiative', de: 'Initiative', tr: 'girişim', ja: '主導権 / 取り組み' },
      meanings: [
        {
          id: 'w28-m1',
          definition: 'the ability to use your judgment to make decisions and do things without needing to be told what to do',
          translation: { ru: 'способность использовать свое суждение для принятия решений и действий без подсказок', zh: '运用自己的判断力做出决定和做事的能力，不需要别人告诉自己做什么', es: 'la capacidad de usar su juicio para tomar decisiones y hacer las cosas sin que le digan qué hacer', fr: 'la capacité d\\'utiliser votre jugement pour prendre des décisions et faire des choses sans qu\\'on vous dise quoi faire', de: 'die Fähigkeit, sein Urteilsvermögen zu nutzen, um Entscheidungen zu treffen und Dinge zu tun, ohne gesagt zu bekommen, was zu tun ist', tr: 'ne yapılacağı söylenmeden karar vermek ve bir şeyler yapmak için muhakeme yeteneğinizi kullanma becerisi', ja: '何をすべきかを指示されずに意思決定を下し、物事を行うために自分の判断を使用する能力' },
          examples: [
            {
              id: 'w28-m1-e1',
              sentence: 'Employees who show initiative are usually the ones promoted quickly.',
              translation: { ru: 'Сотрудники, проявляющие инициативу, обычно получают быстрое повышение.', zh: '表现出主动性的员工通常晋升得很快。', es: 'Los empleados que muestran iniciativa suelen ser los que ascienden rápidamente.', fr: 'Les employés qui font preuve d\\'initiative sont généralement ceux qui sont promus rapidement.', de: 'Mitarbeiter, die Initiative zeigen, werden normalerweise schnell befördert.', tr: 'İnisiyatif gösteren çalışanlar genellikle hızlı terfi edenlerdir.', ja: '主導権を示す従業員は、通常、すぐに昇進する従業員です。' }
            },
            {
              id: 'w28-m1-e2',
              sentence: 'He took the initiative to organize a charity run for the local community.',
              translation: { ru: 'Он взял на себя инициативу организовать благотворительный забег для местного сообщества.', zh: '他主动为当地社区组织了一次慈善跑步活动。', es: 'Tomó la iniciativa de organizar una carrera benéfica para la comunidad local.', fr: 'Il a pris l\\'initiative d\\'organiser une course caritative pour la communauté locale.', de: 'Er ergriff die Initiative, um einen Wohltätigkeitslauf für die örtliche Gemeinde zu organisieren.', tr: 'Yerel topluluk için bir yardım koşusu düzenlemek üzere inisiyatif aldı.', ja: '彼は地元コミュニティのためのチャリティーランを組織するために率先して行動しました。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w29',
      word: 'negotiate',
      pronunciation: '/nɪˈɡoʊʃieɪt/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['bargain', 'deal', 'discuss'],
      collocations: ['negotiate a contract', 'negotiate with someone'],
      translations: { ru: 'вести переговоры', zh: '谈判', es: 'negociar', fr: 'négocier', de: 'verhandeln', tr: 'pazarlık yapmak', ja: '交渉する' },
      meanings: [
        {
          id: 'w29-m1',
          definition: 'to have formal discussions with someone in order to reach an agreement with them',
          translation: { ru: 'вести официальные обсуждения с кем-либо с целью достижения соглашения', zh: '与某人进行正式讨论以达成协议', es: 'tener discusiones formales con alguien para llegar a un acuerdo con ellos', fr: 'avoir des discussions formelles avec quelqu\\'un afin de parvenir à un accord avec lui', de: 'formelle Diskussionen mit jemandem führen, um mit ihm eine Einigung zu erzielen', tr: 'onlarla bir anlaşmaya varmak için biriyle resmi görüşmeler yapmak', ja: '合意に達するために誰かと正式な話し合いをすること' },
          examples: [
            {
              id: 'w29-m1-e1',
              sentence: 'The government refused to negotiate with the striking workers.',
              translation: { ru: 'Правительство отказалось вести переговоры с бастующими рабочими.', zh: '政府拒绝与罢工工人谈判。', es: 'El gobierno se negó a negociar con los trabajadores en huelga.', fr: 'Le gouvernement a refusé de négocier avec les travailleurs en grève.', de: 'Die Regierung weigerte sich, mit den streikenden Arbeitern zu verhandeln.', tr: 'Hükümet grevdeki işçilerle pazarlık yapmayı reddetti.', ja: '政府はストライキ中の労働者との交渉を拒否した。' }
            },
            {
              id: 'w29-m1-e2',
              sentence: 'She managed to negotiate a better salary for her new position.',
              translation: { ru: 'Ей удалось договориться о более высокой зарплате для своей новой должности.', zh: '她成功地为她的新职位谈妥了更高的薪水。', es: 'Logró negociar un mejor salario para su nuevo puesto.', fr: 'Elle a réussi à négocier un meilleur salaire pour son nouveau poste.', de: 'Es gelang ihr, ein besseres Gehalt für ihre neue Position auszuhandeln.', tr: 'Yeni pozisyonu için daha iyi bir maaş pazarlığı yapmayı başardı.', ja: '彼女は新しい役職のためにより良い給与を交渉することに成功した。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w30',
      word: 'priority',
      pronunciation: '/praɪˈɒrəti/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['preference', 'first concern', 'precedence'],
      collocations: ['top priority', 'high priority'],
      translations: { ru: 'приоритет', zh: '优先', es: 'prioridad', fr: 'priorité', de: 'Priorität', tr: 'öncelik', ja: '優先' },
      meanings: [
        {
          id: 'w30-m1',
          definition: 'something that is very important and must be dealt with before other things',
          translation: { ru: 'что-то очень важное, с чем нужно разобраться в первую очередь', zh: '非常重要且必须在其他事情之前处理的事情', es: 'algo que es muy importante y debe tratarse antes que otras cosas', fr: 'quelque chose de très important et qui doit être traité avant les autres', de: 'etwas, das sehr wichtig ist und vor anderen Dingen behandelt werden muss', tr: 'çok önemli olan ve diğer şeylerden önce ilgilenilmesi gereken bir şey', ja: '非常に重要であり、他の事よりも先に対処しなければならないこと' },
          examples: [
            {
              id: 'w30-m1-e1',
              sentence: 'Customer satisfaction is our top priority in this company.',
              translation: { ru: 'Удовлетворенность клиентов - наш главный приоритет в этой компании.', zh: '客户满意度是我们公司的首要任务。', es: 'La satisfacción del cliente es nuestra máxima prioridad en esta empresa.', fr: 'La satisfaction du client est notre priorité absolue dans cette entreprise.', de: 'Kundenzufriedenheit hat in diesem Unternehmen für uns oberste Priorität.', tr: 'Bu şirkette müşteri memnuniyeti birinci önceliğimizdir.', ja: '顧客満足度はこの会社における私たちの最優先事項です。' }
            },
            {
              id: 'w30-m1-e2',
              sentence: 'You have to learn to manage your time and decide what your priorities are.',
              translation: { ru: 'Вы должны научиться управлять своим временем и решать, каковы ваши приоритеты.', zh: '你必须学会管理你的时间并决定你的优先事项是什么。', es: 'Tienes que aprender a administrar tu tiempo y decidir cuáles son tus prioridades.', fr: 'Vous devez apprendre à gérer votre temps et décider quelles sont vos priorités.', de: 'Sie müssen lernen, Ihre Zeit einzuteilen und zu entscheiden, was Ihre Prioritäten sind.', tr: 'Zamanınızı yönetmeyi öğrenmeli ve önceliklerinizin ne olduğuna karar vermelisiniz.', ja: '時間を管理し、優先順位が何であるかを決定することを学ばなければなりません。' }
            }
          ]
        }
      ]
    }
  ],
  reading: {
    title: 'The Challenge of Leadership',
    content: "When Clara became the team leader, she knew her main objective was to improve efficiency. Her first strategy was to evaluate the current workflow and identify where time was being wasted. She quickly realized that being a productive manager meant she couldn't do everything herself. Therefore, she had to learn to delegate tasks to capable team members. It was crucial that her team felt trusted.\n\nInitially, some employees hesitated to take the initiative, preferring to wait for instructions. Clara had to resolve several minor misunderstandings and negotiate new deadlines with clients to reduce the pressure. Over time, as team members were given more responsibility, they began to perform better. Clara made it her top priority to support them, proving that good leadership is about empowering others to succeed."
  }
};
`;

fs.writeFileSync('src/data/b2-lesson-3.ts', lesson3);
