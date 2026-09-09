const fs = require('fs');
const content = `import { Lesson } from "../types";

export const b2Lesson27: Lesson = {
  id: "b2-l27",
  level: "B2",
  number: 27,
  title: "The Startup World",
  words: [
    {
      id: "w27-1",
      word: "entrepreneur",
      pronunciation: "/ˌɒn.trə.prəˈnɜːr/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["founder", "businessman", "businesswoman"],
      collocations: ["successful entrepreneur", "young entrepreneur"],
      translations: { ru: "предприниматель", zh: "企业家", es: "emprendedor", fr: "entrepreneur", de: "Unternehmer", tr: "girişimci", ja: "起業家" },
      meanings: [
        {
          id: "w27-1-m1",
          definition: "someone who starts their own business, especially when this involves seeing a new opportunity",
          translation: { ru: "тот, кто начинает свой собственный бизнес, особенно когда это связано с открытием новых возможностей", zh: "创业的人，尤指发现新机会时", es: "alguien que inicia su propio negocio, especialmente cuando esto implica ver una nueva oportunidad" },
          examples: [
            {
              id: "w27-1-m1-e1",
              sentence: "The young entrepreneur turned her small online store into a global fashion brand.",
              translation: { ru: "Молодая предпринимательница превратила свой небольшой интернет-магазин в мировой модный бренд.", zh: "这位年轻的企业家将她的小网店变成了一个全球时尚品牌。", es: "La joven emprendedora convirtió su pequeña tienda en línea en una marca de moda global.", fr: "La jeune entrepreneure a transformé sa petite boutique en ligne en une marque de mode mondiale.", de: "Die junge Unternehmerin machte aus ihrem kleinen Online-Shop eine globale Modemarke.", tr: "Genç girişimci küçük çevrimiçi mağazasını küresel bir moda markasına dönüştürdü.", ja: "若い起業家は、彼女の小さなオンラインストアを世界的なファッションブランドに変えました。" }
            },
            {
              id: "w27-1-m1-e2",
              sentence: "Being a successful entrepreneur requires not only a great idea but also a lot of hard work and dedication.",
              translation: { ru: "Чтобы быть успешным предпринимателем, нужна не только отличная идея, но и много тяжелой работы и самоотдачи.", zh: "成为一名成功的企业家不仅需要好主意，还需要大量的努力和奉献精神。", es: "Ser un emprendedor exitoso requiere no solo una gran idea sino también mucho trabajo duro y dedicación.", fr: "Être un entrepreneur prospère nécessite non seulement une excellente idée, mais aussi beaucoup de travail acharné et de dévouement.", de: "Ein erfolgreicher Unternehmer zu sein, erfordert nicht nur eine großartige Idee, sondern auch viel harte Arbeit und Hingabe.", tr: "Başarılı bir girişimci olmak sadece harika bir fikir değil, aynı zamanda çok fazla sıkı çalışma ve özveri gerektirir.", ja: "成功した起業家であるためには、素晴らしいアイデアだけでなく、多くの努力と献身が必要です。" }
            }
          ]
        }
      ]
    },
    {
      id: "w27-2",
      word: "venture",
      pronunciation: "/ˈven.tʃər/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["enterprise", "project", "undertaking"],
      collocations: ["business venture", "joint venture"],
      translations: { ru: "предприятие / рискованное начинание", zh: "风险项目 / 企业", es: "empresa / riesgo", fr: "entreprise (risquée)", de: "Unternehmen / Wagnis", tr: "girişim", ja: "ベンチャー / 冒険的事業" },
      meanings: [
        {
          id: "w27-2-m1",
          definition: "a new activity, usually in business, that involves risk or uncertainty",
          translation: { ru: "новая деятельность, обычно в бизнесе, связанная с риском или неопределенностью", zh: "通常指商业上的新活动，涉及风险或不确定性", es: "una nueva actividad, generalmente en los negocios, que implica riesgo o incertidumbre" },
          examples: [
            {
              id: "w27-2-m1-e1",
              sentence: "They decided to start a new business venture together despite the difficult economic climate.",
              translation: { ru: "Они решили вместе начать новое коммерческое предприятие, несмотря на сложный экономический климат.", zh: "尽管经济环境艰难，他们还是决定一起开展一项新的商业冒险。", es: "Decidieron comenzar una nueva empresa comercial juntos a pesar del difícil clima económico.", fr: "Ils ont décidé de lancer ensemble une nouvelle entreprise commerciale malgré le climat économique difficile.", de: "Sie beschlossen, trotz des schwierigen wirtschaftlichen Klimas gemeinsam ein neues Geschäftsvorhaben zu starten.", tr: "Zor ekonomik ortama rağmen birlikte yeni bir ticari girişime başlamaya karar verdiler.", ja: "困難な経済状況にもかかわらず、彼らは一緒に新しいビジネスベンチャーを始めることにしました。" }
            },
            {
              id: "w27-2-m1-e2",
              sentence: "The project was a joint venture between two of the country's biggest technology firms.",
              translation: { ru: "Проект представлял собой совместное предприятие двух крупнейших технологических фирм страны.", zh: "该项目是该国两家最大的科技公司之间的合资企业。", es: "El proyecto fue una empresa conjunta entre dos de las firmas tecnológicas más grandes del país.", fr: "Le projet était une coentreprise entre deux des plus grandes entreprises technologiques du pays.", de: "Das Projekt war ein Joint Venture zwischen zwei der größten Technologieunternehmen des Landes.", tr: "Proje, ülkenin en büyük iki teknoloji firması arasında bir ortak girişimdi.", ja: "このプロジェクトは、国内最大のテクノロジー企業2社による合弁事業でした。" }
            }
          ]
        }
      ]
    },
    {
      id: "w27-3",
      word: "equity",
      pronunciation: "/ˈek.wɪ.ti/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["shares", "ownership", "fairness"],
      collocations: ["private equity", "equity stake"],
      translations: { ru: "доля / капитал", zh: "股权 / 资产净值", es: "capital / equidad", fr: "capitaux propres", de: "Eigenkapital", tr: "öz kaynak / hisse", ja: "株式 / 資本" },
      meanings: [
        {
          id: "w27-3-m1",
          definition: "the value of a company, divided into many equal parts owned by the shareholders, or one of the equal parts into which the value of a company is divided",
          translation: { ru: "стоимость компании, разделенная на множество равных частей, принадлежащих акционерам, или одна из равных частей, на которые делится стоимость компании", zh: "公司的价值，分为由股东拥有的许多相等的部分，或者公司价值被划分成的相等的部分之一", es: "el valor de una empresa, dividido en muchas partes iguales propiedad de los accionistas, o una de las partes iguales en las que se divide el valor de una empresa" },
          examples: [
            {
              id: "w27-3-m1-e1",
              sentence: "He offered the investors a 20 percent equity stake in his new software company.",
              translation: { ru: "Он предложил инвесторам 20-процентную долю в своей новой компании по разработке программного обеспечения.", zh: "他向投资者提供了他新软件公司20%的股权。", es: "Ofreció a los inversores una participación accionaria del 20 por ciento en su nueva compañía de software.", fr: "Il a offert aux investisseurs une participation de 20 % dans sa nouvelle société de logiciels.", de: "Er bot den Investoren eine 20-prozentige Kapitalbeteiligung an seiner neuen Softwarefirma an.", tr: "Yatırımcılara yeni yazılım şirketinde yüzde 20'lik bir hisse teklif etti.", ja: "彼は投資家に新しいソフトウェア会社の20％の株式を提示しました。" }
            },
            {
              id: "w27-3-m1-e2",
              sentence: "As the business grew rapidly, the value of the founders' equity increased significantly.",
              translation: { ru: "По мере быстрого роста бизнеса стоимость капитала основателей значительно увеличивалась.", zh: "随着业务的快速增长，创始人股权的价值也显著增加。", es: "A medida que el negocio creció rápidamente, el valor del capital de los fundadores aumentó significativamente.", fr: "À mesure que l'entreprise se développait rapidement, la valeur des capitaux propres des fondateurs a considérablement augmenté.", de: "Als das Unternehmen schnell wuchs, stieg der Wert des Eigenkapitals der Gründer erheblich.", tr: "İşletme hızla büyüdükçe, kurucuların öz sermayesinin değeri önemli ölçüde arttı.", ja: "ビジネスが急速に成長するにつれて、創業者の株式の価値は大幅に増加しました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w27-4",
      word: "merge",
      pronunciation: "/mɜːdʒ/",
      partOfSpeech: "verb",
      level: "B2",
      synonyms: ["combine", "join", "unite"],
      collocations: ["merge with", "companies merge"],
      translations: { ru: "сливаться / объединяться", zh: "合并", es: "fusionarse", fr: "fusionner", de: "fusionieren", tr: "birleşmek", ja: "合併する" },
      meanings: [
        {
          id: "w27-4-m1",
          definition: "to combine or join together, or to cause things to do this",
          translation: { ru: "объединиться или соединиться, или заставить вещи сделать это", zh: "合并或连接在一起，或使事物这样做", es: "combinarse o unirse, o hacer que las cosas hagan esto" },
          examples: [
            {
              id: "w27-4-m1-e1",
              sentence: "The two competing tech companies decided to merge in order to dominate the market.",
              translation: { ru: "Две конкурирующие технологические компании решили объединиться, чтобы доминировать на рынке.", zh: "两家竞争的科技公司决定合并以主导市场。", es: "Las dos compañías tecnológicas competidoras decidieron fusionarse para dominar el mercado.", fr: "Les deux entreprises technologiques concurrentes ont décidé de fusionner afin de dominer le marché.", de: "Die beiden konkurrierenden Technologieunternehmen beschlossen zu fusionieren, um den Markt zu dominieren.", tr: "Rekabet halindeki iki teknoloji şirketi piyasaya hakim olmak için birleşmeye karar verdi.", ja: "競合する2つのテクノロジー企業は、市場を支配するために合併することを決定しました。" }
            },
            {
              id: "w27-4-m1-e2",
              sentence: "If we merge these two separate departments, we can reduce our administrative costs significantly.",
              translation: { ru: "Если мы объединим эти два отдельных отдела, мы сможем значительно сократить наши административные расходы.", zh: "如果我们合并这两个独立的部门，我们可以大大降低行政成本。", es: "Si fusionamos estos dos departamentos separados, podemos reducir significativamente nuestros costos administrativos.", fr: "Si nous fusionnons ces deux départements distincts, nous pouvons réduire considérablement nos coûts administratifs.", de: "Wenn wir diese beiden getrennten Abteilungen zusammenlegen, können wir unsere Verwaltungskosten deutlich senken.", tr: "Bu iki ayrı departmanı birleştirirsek idari maliyetlerimizi önemli ölçüde azaltabiliriz.", ja: "これら2つの別々の部門を合併すれば、管理コストを大幅に削減できます。" }
            }
          ]
        }
      ]
    },
    {
      id: "w27-5",
      word: "acquire",
      pronunciation: "/əˈkwaɪər/",
      partOfSpeech: "verb",
      level: "B2",
      synonyms: ["buy", "obtain", "purchase"],
      collocations: ["acquire a company", "acquire new skills"],
      translations: { ru: "приобретать", zh: "收购 / 获取", es: "adquirir", fr: "acquérir", de: "erwerben", tr: "elde etmek / satın almak", ja: "買収する / 獲得する" },
      meanings: [
        {
          id: "w27-5-m1",
          definition: "to get or buy something, especially a company",
          translation: { ru: "получить или купить что-то, особенно компанию", zh: "得到或购买某物，尤指公司", es: "conseguir o comprar algo, especialmente una empresa" },
          examples: [
            {
              id: "w27-5-m1-e1",
              sentence: "The large international corporation plans to acquire several smaller local businesses this year.",
              translation: { ru: "Крупная международная корпорация планирует в этом году приобрести несколько небольших местных предприятий.", zh: "这家大型国际跨国公司计划今年收购几家较小的本地企业。", es: "La gran corporación internacional planea adquirir varios negocios locales más pequeños este año.", fr: "La grande société internationale prévoit d'acquérir plusieurs petites entreprises locales cette année.", de: "Der große internationale Konzern plant, in diesem Jahr mehrere kleinere lokale Unternehmen zu erwerben.", tr: "Büyük uluslararası şirket bu yıl birkaç küçük yerel işletmeyi satın almayı planlıyor.", ja: "その大規模な国際企業は今年、いくつかの小規模な地元企業を買収する計画です。" }
            },
            {
              id: "w27-5-m1-e2",
              sentence: "By taking the extra evening classes, she managed to acquire the necessary programming skills.",
              translation: { ru: "Посещая дополнительные вечерние занятия, ей удалось приобрести необходимые навыки программирования.", zh: "通过参加额外的夜校课程，她设法获得了必要的编程技能。", es: "Al tomar las clases nocturnas adicionales, logró adquirir las habilidades de programación necesarias.", fr: "En suivant les cours du soir supplémentaires, elle a réussi à acquérir les compétences en programmation nécessaires.", de: "Durch den Besuch der zusätzlichen Abendkurse gelang es ihr, die notwendigen Programmierkenntnisse zu erwerben.", tr: "Fazladan akşam dersleri alarak gerekli programlama becerilerini edinmeyi başardı.", ja: "追加の夜間クラスを受講することで、彼女は必要なプログラミングスキルを習得することができました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w27-6",
      word: "sponsor",
      pronunciation: "/ˈspɒn.sər/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["backer", "promoter", "supporter"],
      collocations: ["corporate sponsor", "find a sponsor"],
      translations: { ru: "спонсор", zh: "赞助商", es: "patrocinador", fr: "sponsor", de: "Sponsor", tr: "sponsor", ja: "スポンサー" },
      meanings: [
        {
          id: "w27-6-m1",
          definition: "a person or company that supports a person, organization, or activity by giving money, encouragement, or other help",
          translation: { ru: "человек или компания, которые поддерживают человека, организацию или деятельность, предоставляя деньги, поощрение или другую помощь", zh: "通过提供金钱、鼓励或其他帮助来支持个人、组织或活动的个人或公司", es: "una persona o empresa que apoya a una persona, organización o actividad dando dinero, aliento u otra ayuda" },
          examples: [
            {
              id: "w27-6-m1-e1",
              sentence: "The local sports team is actively looking for a corporate sponsor to pay for their new uniforms.",
              translation: { ru: "Местная спортивная команда активно ищет корпоративного спонсора, чтобы оплатить новую форму.", zh: "当地运动队正在积极寻找企业赞助商来支付他们的新队服。", es: "El equipo deportivo local busca activamente un patrocinador corporativo para pagar sus nuevos uniformes.", fr: "L'équipe sportive locale recherche activement un sponsor corporatif pour payer ses nouveaux uniformes.", de: "Das lokale Sportteam sucht aktiv nach einem Unternehmenssponsor, um seine neuen Trikots zu bezahlen.", tr: "Yerel spor takımı yeni formalarını ödeyecek kurumsal bir sponsor arıyor.", ja: "地元のスポーツチームは、新しいユニフォームの代金を支払ってくれる企業スポンサーを積極的に探しています。" }
            },
            {
              id: "w27-6-m1-e2",
              sentence: "Without the generous financial help from their main sponsor, the charity event would be cancelled.",
              translation: { ru: "Без щедрой финансовой помощи со стороны главного спонсора благотворительное мероприятие было бы отменено.", zh: "如果没有主要赞助商的慷慨资金帮助，慈善活动将被取消。", es: "Sin la generosa ayuda financiera de su patrocinador principal, el evento de caridad sería cancelado.", fr: "Sans l'aide financière généreuse de leur sponsor principal, l'événement caritatif serait annulé.", de: "Ohne die großzügige finanzielle Hilfe ihres Hauptsponsors würde die Wohltätigkeitsveranstaltung abgesagt werden.", tr: "Ana sponsorlarının cömert mali yardımı olmasaydı yardım etkinliği iptal edilirdi.", ja: "メインスポンサーからの寛大な財政支援がなければ、チャリティーイベントはキャンセルされていたでしょう。" }
            }
          ]
        }
      ]
    },
    {
      id: "w27-7",
      word: "monopoly",
      pronunciation: "/məˈnɒp.əl.i/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["domination", "control"],
      collocations: ["have a monopoly", "break a monopoly"],
      translations: { ru: "монополия", zh: "垄断", es: "monopolio", fr: "monopole", de: "Monopol", tr: "tekel", ja: "独占" },
      meanings: [
        {
          id: "w27-7-m1",
          definition: "(an organization or group that has) complete control of something, especially an area of business, so that others have no share",
          translation: { ru: "(организация или группа, которая имеет) полный контроль над чем-либо, особенно в сфере бизнеса, так что у других нет доли", zh: "（拥有）完全控制某事物（尤指某商业领域）的组织或群体，以致他人无法分享", es: "(una organización o grupo que tiene) control total sobre algo, especialmente un área de negocios, de modo que otros no tienen participación" },
          examples: [
            {
              id: "w27-7-m1-e1",
              sentence: "The government passed new laws to prevent any single company from creating a monopoly in the telecommunications industry.",
              translation: { ru: "Правительство приняло новые законы, чтобы ни одна компания не могла создать монополию в телекоммуникационной отрасли.", zh: "政府通过了新法律，以防止任何单一公司在电信行业形成垄断。", es: "El gobierno aprobó nuevas leyes para evitar que una sola empresa cree un monopolio en la industria de las telecomunicaciones.", fr: "Le gouvernement a adopté de nouvelles lois pour empêcher une entreprise de créer un monopole dans le secteur des télécommunications.", de: "Die Regierung verabschiedete neue Gesetze, um zu verhindern, dass ein einzelnes Unternehmen ein Monopol in der Telekommunikationsbranche aufbaut.", tr: "Hükümet, tek bir şirketin telekomünikasyon sektöründe tekel yaratmasını önlemek için yeni yasalar çıkardı.", ja: "政府は、いかなる単一の企業も電気通信産業で独占状態を作り出すことを防ぐための新法を可決しました。" }
            },
            {
              id: "w27-7-m1-e2",
              sentence: "Because they had a monopoly on the local water supply, they could charge extremely high prices.",
              translation: { ru: "Поскольку у них была монополия на местное водоснабжение, они могли устанавливать чрезвычайно высокие цены.", zh: "因为他们垄断了当地的供水，所以可以收取极高的价格。", es: "Debido a que tenían el monopolio del suministro de agua local, podían cobrar precios extremadamente altos.", fr: "Parce qu'ils avaient le monopole de l'approvisionnement en eau local, ils pouvaient facturer des prix extrêmement élevés.", de: "Da sie ein Monopol auf die örtliche Wasserversorgung hatten, konnten sie extrem hohe Preise verlangen.", tr: "Yerel su kaynağı üzerinde tekelleri olduğu için son derece yüksek fiyatlar talep edebildiler.", ja: "彼らは地元の水道を独占していたため、非常に高い価格を請求することができました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w27-8",
      word: "enterprise",
      pronunciation: "/ˈen.tə.praɪz/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["business", "company", "firm"],
      collocations: ["private enterprise", "commercial enterprise"],
      translations: { ru: "предприятие", zh: "企业", es: "empresa", fr: "entreprise", de: "Unternehmen", tr: "işletme", ja: "企業 / 事業" },
      meanings: [
        {
          id: "w27-8-m1",
          definition: "an organization, especially a business, or a difficult and important plan, especially one that will earn money",
          translation: { ru: "организация, особенно коммерческая, или сложный и важный план, особенно тот, который принесет деньги", zh: "组织，尤指企业，或困难而重要的计划，尤指能赚钱的计划", es: "una organización, especialmente un negocio, o un plan difícil e importante, especialmente uno que ganará dinero" },
          examples: [
            {
              id: "w27-8-m1-e1",
              sentence: "The small family enterprise grew rapidly and eventually opened stores in three different countries.",
              translation: { ru: "Небольшое семейное предприятие быстро росло и со временем открыло магазины в трех разных странах.", zh: "这家小型家族企业发展迅速，最终在三个不同的国家开设了门店。", es: "La pequeña empresa familiar creció rápidamente y finalmente abrió tiendas en tres países diferentes.", fr: "La petite entreprise familiale a connu une croissance rapide et a finalement ouvert des magasins dans trois pays différents.", de: "Das kleine Familienunternehmen wuchs rasant und eröffnete schließlich Geschäfte in drei verschiedenen Ländern.", tr: "Küçük aile işletmesi hızla büyüdü ve sonunda üç farklı ülkede mağazalar açtı.", ja: "小さな家族経営の企業は急速に成長し、最終的に3つの異なる国に店舗をオープンしました。" }
            },
            {
              id: "w27-8-m1-e2",
              sentence: "Starting a new commercial enterprise always involves a significant amount of financial risk.",
              translation: { ru: "Создание нового коммерческого предприятия всегда сопряжено со значительным финансовым риском.", zh: "创办新的商业企业总是涉及大量的财务风险。", es: "Iniciar una nueva empresa comercial siempre implica una cantidad significativa de riesgo financiero.", fr: "Démarrer une nouvelle entreprise commerciale implique toujours un risque financier important.", de: "Die Gründung eines neuen Handelsunternehmens ist immer mit einem erheblichen finanziellen Risiko verbunden.", tr: "Yeni bir ticari işletmeye başlamak her zaman önemli miktarda finansal risk içerir.", ja: "新しい商業事業を始めることは、常にかなりの財政的リスクを伴います。" }
            }
          ]
        }
      ]
    },
    {
      id: "w27-9",
      word: "investor",
      pronunciation: "/ɪnˈves.tər/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["shareholder", "backer", "financier"],
      collocations: ["foreign investor", "attract investors"],
      translations: { ru: "инвестор", zh: "投资者", es: "inversor", fr: "investisseur", de: "Investor", tr: "yatırımcı", ja: "投資家" },
      meanings: [
        {
          id: "w27-9-m1",
          definition: "a person who puts money into something in order to make a profit or get an advantage",
          translation: { ru: "человек, который вкладывает деньги во что-то, чтобы получить прибыль или преимущество", zh: "将资金投入某物以获取利润或优势的人", es: "una persona que pone dinero en algo para obtener una ganancia o una ventaja" },
          examples: [
            {
              id: "w27-9-m1-e1",
              sentence: "The startup needed to find a wealthy investor who believed in their vision for the future.",
              translation: { ru: "Стартапу нужно было найти богатого инвестора, который поверил бы в их видение будущего.", zh: "这家初创公司需要找到一位相信他们未来愿景的富有的投资者。", es: "La startup necesitaba encontrar un inversor adinerado que creyera en su visión para el futuro.", fr: "La startup devait trouver un investisseur fortuné qui croyait en sa vision de l'avenir.", de: "Das Startup musste einen wohlhabenden Investor finden, der an seine Vision für die Zukunft glaubte.", tr: "Yeni kurulan şirketin geleceğe yönelik vizyonlarına inanan zengin bir yatırımcı bulması gerekiyordu.", ja: "スタートアップは、彼らの将来のビジョンを信じてくれる裕福な投資家を見つける必要がありました。" }
            },
            {
              id: "w27-9-m1-e2",
              sentence: "Many foreign investors lost millions of dollars when the local currency suddenly crashed.",
              translation: { ru: "Многие иностранные инвесторы потеряли миллионы долларов, когда местная валюта внезапно рухнула.", zh: "当地货币突然暴跌时，许多外国投资者损失了数百万美元。", es: "Muchos inversores extranjeros perdieron millones de dólares cuando la moneda local colapsó repentinamente.", fr: "De nombreux investisseurs étrangers ont perdu des millions de dollars lorsque la monnaie locale s'est soudainement effondrée.", de: "Viele ausländische Investoren verloren Millionen von Dollar, als die Landeswährung plötzlich abstürzte.", tr: "Yerel para birimi aniden çöktüğünde birçok yabancı yatırımcı milyonlarca dolar kaybetti.", ja: "現地通貨が突然暴落したとき、多くの外国人投資家が何百万ドルも失いました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w27-10",
      word: "corporate",
      pronunciation: "/ˈkɔː.pər.ət/",
      partOfSpeech: "adj",
      level: "B2",
      synonyms: ["business", "company", "commercial"],
      collocations: ["corporate world", "corporate culture"],
      translations: { ru: "корпоративный", zh: "公司的", es: "corporativo", fr: "d'entreprise", de: "unternehmerisch", tr: "kurumsal", ja: "企業の" },
      meanings: [
        {
          id: "w27-10-m1",
          definition: "relating to a large company",
          translation: { ru: "относящийся к крупной компании", zh: "与大公司有关的", es: "relativo a una gran empresa" },
          examples: [
            {
              id: "w27-10-m1-e1",
              sentence: "She decided to leave the stressful corporate world and start her own small bakery.",
              translation: { ru: "Она решила покинуть напряженный корпоративный мир и открыть свою небольшую пекарню.", zh: "她决定离开压力重重的公司界，开一家自己的小面包店。", es: "Decidió dejar el estresante mundo corporativo y comenzar su propia pequeña panadería.", fr: "Elle a décidé de quitter le monde stressant de l'entreprise et d'ouvrir sa propre petite boulangerie.", de: "Sie beschloss, die stressige Unternehmenswelt zu verlassen und ihre eigene kleine Bäckerei zu eröffnen.", tr: "Stresli kurumsal dünyayı terk etmeye ve kendi küçük fırınını açmaya karar verdi.", ja: "彼女はストレスの多い企業の世界を離れ、自分の小さなパン屋を始めることにしました。" }
            },
            {
              id: "w27-10-m1-e2",
              sentence: "The company improved its corporate image by donating a large sum of money to environmental causes.",
              translation: { ru: "Компания улучшила свой корпоративный имидж, пожертвовав крупную сумму денег на охрану окружающей среды.", zh: "该公司通过向环保事业捐赠一大笔钱来改善其企业形象。", es: "La empresa mejoró su imagen corporativa al donar una gran suma de dinero a causas ambientales.", fr: "L'entreprise a amélioré son image de marque en faisant don d'une importante somme d'argent à des causes environnementales.", de: "Das Unternehmen verbesserte sein Unternehmensimage, indem es eine große Geldsumme für Umweltzwecke spendete.", tr: "Şirket, çevreyle ilgili amaçlara büyük miktarda para bağışlayarak kurumsal imajını iyileştirdi.", ja: "同社は環境問題に多額の寄付をすることで企業イメージを向上させました。" }
            }
          ]
        }
      ]
    }
  ],
  reading: {
    id: "r27",
    title: "Building the Next Big Thing",
    content: \`In today's fast-paced digital economy, many young professionals dream of leaving the traditional corporate world to build something of their own. Every successful enterprise starts with a bold idea and a driven entrepreneur. However, transforming a simple concept into a profitable business requires careful planning and a lot of funding.\\n\\nInitially, founders must seek out a wealthy investor or a corporate sponsor to support their new venture. In exchange for providing the necessary capital, these backers usually demand a significant equity stake in the company. This means they will own a percentage of the business and share in its future profits. \\n\\nAs the startup grows, it will eventually have to compete with established giants that might already hold a monopoly in the market. To survive, the young company must continuously innovate. Sometimes, the most strategic move is to merge with another small business to combine resources. Alternatively, if the startup becomes incredibly successful, a larger corporation might decide to acquire it for millions of dollars, rewarding the original founders for their hard work and vision.\`,
    translations: {
      ru: \`В современной быстро развивающейся цифровой экономике многие молодые специалисты мечтают покинуть традиционный корпоративный мир, чтобы создать что-то свое. Каждое успешное предприятие начинается со смелой идеи и целеустремленного предпринимателя. Однако превращение простой концепции в прибыльный бизнес требует тщательного планирования и большого финансирования.\\n\\nПервоначально основатели должны найти богатого инвестора или корпоративного спонсора, чтобы поддержать свое новое начинание. В обмен на предоставление необходимого капитала эти спонсоры обычно требуют значительную долю в капитале компании. Это означает, что они будут владеть процентом от бизнеса и участвовать в его будущих прибылях.\\n\\nПо мере роста стартапу в конечном итоге придется конкурировать с признанными гигантами, которые, возможно, уже удерживают монополию на рынке. Чтобы выжить, молодая компания должна постоянно внедрять инновации. Иногда самым стратегическим шагом является слияние с другим малым бизнесом для объединения ресурсов. В качестве альтернативы, если стартап становится невероятно успешным, более крупная корпорация может решить приобрести его за миллионы долларов, вознаградив первоначальных основателей за их тяжелую работу и видение.\`,
      zh: \`在当今快节奏的数字经济中，许多年轻的专业人士梦想离开传统的公司界，去建立属于自己的东西。每一个成功的企业都始于一个大胆的想法和一个有干劲的企业家。然而，将一个简单的概念转化为有利可图的业务需要精心的计划和大量的资金。\\n\\n最初，创始人必须寻找富有的投资者或企业赞助商来支持他们的新冒险。作为提供必要资金的交换，这些支持者通常要求获得公司的大量股权。这意味着他们将拥有公司的一定比例并分享其未来的利润。\\n\\n随着初创公司的发展，它最终将不得不与可能已经在市场上占据垄断地位的成熟巨头竞争。为了生存，年轻的公司必须不断创新。有时，最具战略意义的举措是与另一家小企业合并以整合资源。或者，如果这家初创公司变得非常成功，一家更大的公司可能会决定斥资数百万美元收购它，以此奖励最初的创始人的辛勤工作和远见。\`,
      es: \`En la acelerada economía digital actual, muchos jóvenes profesionales sueñan con dejar el mundo corporativo tradicional para construir algo propio. Toda empresa exitosa comienza con una idea audaz y un emprendedor motivado. Sin embargo, transformar un concepto simple en un negocio rentable requiere una planificación cuidadosa y mucha financiación.\\n\\nInicialmente, los fundadores deben buscar un inversor adinerado o un patrocinador corporativo para respaldar su nueva empresa. A cambio de proporcionar el capital necesario, estos patrocinadores suelen exigir una participación accionaria significativa en la empresa. Esto significa que poseerán un porcentaje del negocio y compartirán sus ganancias futuras.\\n\\nA medida que la startup crezca, eventualmente tendrá que competir con gigantes establecidos que ya podrían tener un monopolio en el mercado. Para sobrevivir, la joven empresa debe innovar continuamente. A veces, el movimiento más estratégico es fusionarse con otra pequeña empresa para combinar recursos. Alternativamente, si la startup tiene un éxito increíble, una corporación más grande podría decidir adquirirla por millones de dólares, recompensando a los fundadores originales por su arduo trabajo y visión.\`,
      fr: \`Dans l'économie numérique en évolution rapide d'aujourd'hui, de nombreux jeunes professionnels rêvent de quitter le monde de l'entreprise traditionnel pour construire quelque chose de leur propre chef. Toute entreprise florissante commence par une idée audacieuse et un entrepreneur motivé. Cependant, transformer un concept simple en une entreprise rentable nécessite une planification minutieuse et beaucoup de financement.\\n\\nAu départ, les fondateurs doivent rechercher un investisseur fortuné ou un sponsor corporatif pour soutenir leur nouvelle entreprise. En échange de la fourniture du capital nécessaire, ces bailleurs de fonds exigent généralement une participation significative dans l'entreprise. Cela signifie qu'ils posséderont un pourcentage de l'entreprise et partageront ses bénéfices futurs.\\n\\nÀ mesure que la startup se développera, elle devra éventuellement rivaliser avec des géants établis qui pourraient déjà détenir un monopole sur le marché. Pour survivre, la jeune entreprise doit innover en permanence. Parfois, la décision la plus stratégique consiste à fusionner avec une autre petite entreprise pour combiner les ressources. Alternativement, si la startup connaît un succès incroyable, une plus grande société pourrait décider de l'acquérir pour des millions de dollars, récompensant les fondateurs d'origine pour leur travail acharné et leur vision.\`,
      de: \`In der heutigen schnelllebigen digitalen Wirtschaft träumen viele junge Berufstätige davon, die traditionelle Unternehmenswelt zu verlassen, um sich etwas Eigenes aufzubauen. Jedes erfolgreiche Unternehmen beginnt mit einer mutigen Idee und einem engagierten Unternehmer. Die Umwandlung eines einfachen Konzepts in ein profitables Geschäft erfordert jedoch eine sorgfältige Planung und viel Finanzierung.\\n\\nZunächst müssen Gründer einen wohlhabenden Investor oder einen Unternehmenssponsor suchen, um ihr neues Vorhaben zu unterstützen. Als Gegenleistung für die Bereitstellung des erforderlichen Kapitals fordern diese Geldgeber in der Regel eine erhebliche Kapitalbeteiligung am Unternehmen. Dies bedeutet, dass sie einen Prozentsatz des Unternehmens besitzen und an seinen zukünftigen Gewinnen beteiligt sind.\\n\\nWenn das Startup wächst, muss es schließlich mit etablierten Giganten konkurrieren, die möglicherweise bereits ein Monopol auf dem Markt haben. Um zu überleben, muss das junge Unternehmen kontinuierlich innovieren. Manchmal ist der strategischste Schritt, mit einem anderen Kleinunternehmen zu fusionieren, um Ressourcen zu bündeln. Alternativ, wenn das Startup unglaublich erfolgreich wird, könnte sich ein größerer Konzern entscheiden, es für Millionen von Dollar zu erwerben und die ursprünglichen Gründer für ihre harte Arbeit und Vision zu belohnen.\`,
      tr: \`Günümüzün hızlı dijital ekonomisinde, birçok genç profesyonel kendilerine ait bir şeyler inşa etmek için geleneksel kurumsal dünyayı terk etmeyi hayal ediyor. Her başarılı işletme cesur bir fikir ve hırslı bir girişimciyle başlar. Ancak basit bir kavramı karlı bir işletmeye dönüştürmek dikkatli bir planlama ve çok fazla finansman gerektirir.\\n\\nBaşlangıçta, kurucular yeni girişimlerini desteklemek için zengin bir yatırımcı veya kurumsal bir sponsor aramalıdır. Bu destekçiler, gerekli sermayeyi sağlama karşılığında genellikle şirketten önemli bir hisse talep ederler. Bu, işletmenin belirli bir yüzdesine sahip olacakları ve gelecekteki kârlarına ortak olacakları anlamına gelir.\\n\\nStartup büyüdükçe, sonunda pazarda zaten tekele sahip olabilecek köklü devlerle rekabet etmek zorunda kalacaktır. Hayatta kalmak için genç şirket sürekli yenilik yapmalıdır. Bazen en stratejik hamle, kaynakları birleştirmek için başka bir küçük işletmeyle birleşmektir. Alternatif olarak, startup inanılmaz derecede başarılı olursa, daha büyük bir şirket onu milyonlarca dolara satın almaya karar verebilir ve orijinal kurucuları sıkı çalışmaları ve vizyonları için ödüllendirebilir.\`,
      ja: \`今日のペースの速いデジタル経済において、多くの若い専門家は、伝統的な企業の世界を離れて自分自身の何かを構築することを夢見ています。すべての成功した企業は、大胆なアイデアと意欲的な起業家から始まります。しかし、単純なコンセプトを収益性の高いビジネスに変えるには、慎重な計画と多額の資金が必要です。\\n\\n当初、創業者は新しいベンチャーを支援してくれる裕福な投資家や企業スポンサーを探す必要があります。必要な資本を提供する代わりに、これらの支援者は通常、会社の株式の大きな割合を要求します。これは、彼らが事業の一定の割合を所有し、将来の利益を共有することを意味します。\\n\\nスタートアップが成長するにつれて、最終的にはすでに市場で独占状態にあるかもしれない確立された巨大企業と競争しなければならなくなります。生き残るために、若い企業は継続的に革新しなければなりません。時には、最も戦略的な動きは、リソースを組み合わせるために他の中小企業と合併することです。あるいは、スタートアップが信じられないほど成功した場合、大企業が数百万ドルで買収することを決定し、創業者のこれまでの努力とビジョンに報いる可能性もあります。\`
    },
    comprehensionQuestions: [
      {
        id: "q27-1",
        question: "What does an investor usually want in exchange for providing capital to a startup?",
        options: [
          "A guarantee that the company will merge with a giant.",
          "A significant equity stake in the company.",
          "The right to fire the young entrepreneur.",
          "A monopoly on the entire market."
        ],
        correctAnswerIndex: 1
      },
      {
        id: "q27-2",
        question: "According to the text, why might a young company decide to merge with another small business?",
        options: [
          "To combine resources and help the company survive.",
          "To give all their profits back to the corporate sponsor.",
          "To avoid being acquired by a large corporation.",
          "To return to the traditional corporate world."
        ],
        correctAnswerIndex: 0
      },
      {
        id: "q27-3",
        question: "What might happen if a startup becomes incredibly successful?",
        options: [
          "It must immediately return all the funding.",
          "The founders must give away their business for free.",
          "A larger corporation might acquire it for millions of dollars.",
          "It loses all of its equity in the market."
        ],
        correctAnswerIndex: 2
      },
      {
        id: "q27-4",
        question: "What is mentioned as a requirement to transform a simple concept into a profitable business?",
        options: [
          "Ignoring the digital economy.",
          "Careful planning and a lot of funding.",
          "Never working with an investor.",
          "Maintaining a strict monopoly from day one."
        ],
        correctAnswerIndex: 1
      }
    ]
  }
};
`;
fs.writeFileSync('src/data/b2-lesson-27.ts', content);
