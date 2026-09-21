const fs = require('fs');

const data = {
  "src/data/b2-lesson-23.ts": [
    {
      old: "investigate",
      obj: {
        id: "w23-3",
        word: "interrogate",
        pronunciation: "/ɪnˈter.ə.ɡeɪt/",
        partOfSpeech: "verb",
        level: "B2",
        synonyms: ["question", "examine", "grill"],
        collocations: ["interrogate a suspect", "interrogate thoroughly"],
        translations: { ru: "допрашивать", zh: "审问", es: "interrogar", fr: "interroger", de: "verhören", tr: "sorgulamak", ja: "尋問する" },
        meanings: [
          {
            id: "w23-3-m1",
            definition: "to ask someone a lot of questions for a long time in order to get information, sometimes using threats",
            translation: { ru: "задавать кому-либо много вопросов в течение длительного времени с целью получения информации", zh: "长时间询问某人许多问题以获取信息", es: "hacer a alguien muchas preguntas durante mucho tiempo para obtener información" },
            examples: [
              {
                id: "w23-3-m1-e1",
                sentence: "The police took turns to interrogate the suspect.",
                translation: { ru: "Полицейские по очереди допрашивали подозреваемого.", zh: "警察轮流审问嫌疑人。", es: "La policía se turnó para interrogar al sospechoso.", fr: "La police s'est relayée pour interroger le suspect.", de: "Die Polizei verhörte den Verdächtigen abwechselnd.", tr: "Polis şüpheliyi sırayla sorguladı.", ja: "警察は交代で容疑者を尋問した。" }
              },
              {
                id: "w23-3-m1-e2",
                sentence: "He was interrogated for hours about his whereabouts on the night of the crime.",
                translation: { ru: "Его часами допрашивали о его местонахождении в ночь преступления.", zh: "他因案发当晚的行踪被审问了几个小时。", es: "Fue interrogado durante horas sobre su paradero la noche del crimen.", fr: "Il a été interrogé pendant des heures sur l'endroit où il se trouvait la nuit du crime.", de: "Er wurde stundenlang über seinen Aufenthaltsort in der Tatnacht verhört.", tr: "Suç gecesi nerede olduğu hakkında saatlerce sorgulandı.", ja: "彼は事件の夜の居場所について何時間も尋問された。" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "witness",
      obj: {
        id: "w23-4",
        word: "alibi",
        pronunciation: "/ˈæl.ɪ.baɪ/",
        partOfSpeech: "noun",
        level: "B2",
        synonyms: ["defense", "excuse"],
        collocations: ["have an alibi", "provide an alibi"],
        translations: { ru: "алиби", zh: "不在场证明", es: "coartada", fr: "alibi", de: "Alibi", tr: "mazeret / alibi", ja: "アリバイ" },
        meanings: [
          {
            id: "w23-4-m1",
            definition: "proof that someone who is thought to have committed a crime could not have done it",
            translation: { ru: "доказательство того, что человек, которого подозревают в преступлении, не мог его совершить", zh: "证明被认为犯了罪的人不可能犯罪的证据", es: "prueba de que alguien que se cree que ha cometido un delito no podría haberlo hecho" },
            examples: [
              {
                id: "w23-4-m1-e1",
                sentence: "He had a solid alibi for the night of the murder.",
                translation: { ru: "У него было железное алиби на ночь убийства.", zh: "他在谋杀案当晚有可靠的不在场证明。", es: "Tenía una coartada sólida para la noche del asesinato.", fr: "Il avait un alibi solide pour la nuit du meurtre.", de: "Er hatte ein wasserdichtes Alibi für die Nacht des Mordes.", tr: "Cinayet gecesi için sağlam bir mazereti vardı.", ja: "彼には殺人の夜の確固たるアリバイがあった。" }
              },
              {
                id: "w23-4-m1-e2",
                sentence: "The suspect claimed his wife could provide an alibi.",
                translation: { ru: "Подозреваемый заявил, что его жена может подтвердить алиби.", zh: "嫌疑人声称他的妻子可以提供不在场证明。", es: "El sospechoso afirmó que su esposa podría proporcionar una coartada.", fr: "Le suspect a affirmé que sa femme pourrait fournir un alibi.", de: "Der Verdächtige behauptete, seine Frau könne ein Alibi liefern.", tr: "Şüpheli, karısının bir mazeret sağlayabileceğini iddia etti.", ja: "容疑者は妻がアリバイを証明できると主張した。" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "innocent",
      obj: {
        id: "w23-8",
        word: "motive",
        pronunciation: "/ˈməʊ.tɪv/",
        partOfSpeech: "noun",
        level: "B2",
        synonyms: ["reason", "purpose", "intention"],
        collocations: ["establish a motive", "ulterior motive"],
        translations: { ru: "мотив", zh: "动机", es: "motivo", fr: "motif", de: "Motiv", tr: "güdü / sebep", ja: "動機" },
        meanings: [
          {
            id: "w23-8-m1",
            definition: "a reason for doing something, especially something that is hidden or not obvious",
            translation: { ru: "причина для совершения чего-либо, особенно скрытая или неочевидная", zh: "做某事的理由，尤指隐藏或不明显的理由", es: "una razón para hacer algo, especialmente algo que está oculto o no es obvio" },
            examples: [
              {
                id: "w23-8-m1-e1",
                sentence: "The police are still looking for a motive for the attack.",
                translation: { ru: "Полиция все еще ищет мотив нападения.", zh: "警方仍在寻找袭击的动机。", es: "La policía todavía está buscando un motivo para el ataque.", fr: "La police cherche encore un motif pour l'attaque.", de: "Die Polizei sucht noch immer nach einem Motiv für den Angriff.", tr: "Polis hala saldırı için bir sebep arıyor.", ja: "警察は依然としてその襲撃の動機を探している。" }
              },
              {
                id: "w23-8-m1-e2",
                sentence: "What could possibly be her motive for lying to us?",
                translation: { ru: "Каким вообще мог быть ее мотив лгать нам?", zh: "她对我们撒谎的动机可能是什么？", es: "¿Cuál podría ser su motivo para mentirnos?", fr: "Quel pourrait être son motif pour nous mentir?", de: "Was könnte ihr Motiv sein, uns anzulügen?", tr: "Bize yalan söylemek için sebebi ne olabilirdi?", ja: "私たちに嘘をつく彼女の動機は一体何だったのだろうか？" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "trial",
      obj: {
        id: "w23-9",
        word: "confess",
        pronunciation: "/kənˈfes/",
        partOfSpeech: "verb",
        level: "B2",
        synonyms: ["admit", "acknowledge", "own up"],
        collocations: ["confess to a crime", "confess everything"],
        translations: { ru: "признаваться", zh: "坦白 / 承认", es: "confesar", fr: "avouer", de: "gestehen", tr: "itiraf etmek", ja: "自白する" },
        meanings: [
          {
            id: "w23-9-m1",
            definition: "to admit that you have done something wrong or something that you feel guilty about",
            translation: { ru: "признать, что вы сделали что-то не так или в чем чувствуете себя виноватым", zh: "承认你做错了事或让你感到内疚的事", es: "admitir que has hecho algo malo o algo de lo que te sientes culpable" },
            examples: [
              {
                id: "w23-9-m1-e1",
                sentence: "After hours of questioning, he finally confessed to the crime.",
                translation: { ru: "После многочасовых допросов он наконец признался в преступлении.", zh: "经过几个小时的盘问，他终于对罪行供认不讳。", es: "Después de horas de interrogatorio, finalmente confesó el crimen.", fr: "Après des heures d'interrogatoire, il a finalement avoué le crime.", de: "Nach stundenlangem Verhör gestand er schließlich das Verbrechen.", tr: "Saatler süren sorgulamanın ardından nihayet suçunu itiraf etti.", ja: "何時間もの尋問の後、彼はついに罪を自白した。" }
              },
              {
                id: "w23-9-m1-e2",
                sentence: "She confessed that she had stolen the money from the safe.",
                translation: { ru: "Она призналась, что украла деньги из сейфа.", zh: "她承认自己从保险箱里偷了钱。", es: "Confesó que había robado el dinero de la caja fuerte.", fr: "Elle a avoué qu'elle avait volé l'argent dans le coffre-fort.", de: "Sie gestand, dass sie das Geld aus dem Safe gestohlen hatte.", tr: "Parayı kasadan çaldığını itiraf etti.", ja: "彼女は金庫からお金を盗んだことを自白した。" }
              }
            ]
          }
        ]
      }
    }
  ],
  "src/data/b2-lesson-25.ts": [
    {
      old: "rational",
      obj: {
        id: "w25-2",
        word: "subconscious",
        pronunciation: "/ˌsʌbˈkɒn.ʃəs/",
        partOfSpeech: "noun",
        level: "B2",
        synonyms: ["unconscious mind", "inner thoughts"],
        collocations: ["subconscious mind", "subconscious fears"],
        translations: { ru: "подсознание", zh: "潜意识", es: "subconsciente", fr: "subconscient", de: "Unterbewusstsein", tr: "bilinçaltı", ja: "潜在意識" },
        meanings: [
          {
            id: "w25-2-m1",
            definition: "the part of your mind that notices and remembers information when you are not actively trying to do so",
            translation: { ru: "часть вашего разума, которая замечает и запоминает информацию, когда вы не пытаетесь делать это активно", zh: "大脑中在你没有主动尝试时注意到并记住信息的部分", es: "la parte de tu mente que nota y recuerda información cuando no estás tratando activamente de hacerlo" },
            examples: [
              {
                id: "w25-2-m1-e1",
                sentence: "The painful memory was buried deep in her subconscious.",
                translation: { ru: "Болезненное воспоминание было глубоко запрятано в ее подсознании.", zh: "痛苦的记忆深埋在她的潜意识里。", es: "El doloroso recuerdo estaba enterrado en lo más profundo de su subconsciente.", fr: "Le souvenir douloureux était enfoui au plus profond de son subconscient.", de: "Die schmerzhafte Erinnerung war tief in ihrem Unterbewusstsein vergraben.", tr: "Acı verici anı, bilinçaltının derinliklerine gömülmüştü.", ja: "その辛い記憶は彼女の潜在意識の奥深くに埋もれていた。" }
              },
              {
                id: "w25-2-m1-e2",
                sentence: "Our subconscious often processes information while we sleep.",
                translation: { ru: "Наше подсознание часто обрабатывает информацию, пока мы спим.", zh: "我们的潜意识经常在我们睡觉时处理信息。", es: "Nuestro subconsciente a menudo procesa información mientras dormimos.", fr: "Notre subconscient traite souvent des informations pendant notre sommeil.", de: "Unser Unterbewusstsein verarbeitet oft Informationen, während wir schlafen.", tr: "Bilinçaltımız genellikle biz uyurken bilgileri işler.", ja: "私たちの潜在意識は、眠っている間に情報を処理することがよくあります。" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "empathy",
      obj: {
        id: "w25-3",
        word: "comprehend",
        pronunciation: "/ˌkɒm.prɪˈhend/",
        partOfSpeech: "verb",
        level: "B2",
        synonyms: ["understand", "grasp", "perceive"],
        collocations: ["fully comprehend", "difficult to comprehend"],
        translations: { ru: "постигать / понимать", zh: "理解", es: "comprender", fr: "comprendre", de: "begreifen", tr: "idrak etmek / anlamak", ja: "理解する" },
        meanings: [
          {
            id: "w25-3-m1",
            definition: "to understand something completely",
            translation: { ru: "понять что-то полностью", zh: "完全理解某事", es: "entender algo completamente" },
            examples: [
              {
                id: "w25-3-m1-e1",
                sentence: "It took me a while to fully comprehend the scale of the problem.",
                translation: { ru: "Мне потребовалось некоторое время, чтобы полностью осознать масштаб проблемы.", zh: "我花了一段时间才完全理解问题的严重程度。", es: "Me tomó un tiempo comprender completamente la escala del problema.", fr: "Il m'a fallu un certain temps pour bien comprendre l'ampleur du problème.", de: "Ich brauchte eine Weile, um das Ausmaß des Problems vollständig zu begreifen.", tr: "Sorunun boyutunu tam olarak anlamam biraz zaman aldı.", ja: "問題の規模を完全に理解するのに少し時間がかかりました。" }
              },
              {
                id: "w25-3-m1-e2",
                sentence: "The instructions were too complex for anyone to comprehend easily.",
                translation: { ru: "Инструкции были слишком сложными, чтобы кто-либо мог их легко понять.", zh: "说明太复杂了，任何人都很难轻易理解。", es: "Las instrucciones eran demasiado complejas para que alguien las comprendiera fácilmente.", fr: "Les instructions étaient trop complexes pour que quiconque puisse les comprendre facilement.", de: "Die Anweisungen waren zu komplex, als dass sie jemand leicht hätte begreifen können.", tr: "Talimatlar herkesin kolayca anlayamayacağı kadar karmaşıktı.", ja: "指示が複雑すぎて、誰も簡単には理解できませんでした。" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "bias",
      obj: {
        id: "w25-4",
        word: "obsess",
        pronunciation: "/əbˈses/",
        partOfSpeech: "verb",
        level: "B2",
        synonyms: ["fixate", "preoccupy"],
        collocations: ["obsess about", "obsess over"],
        translations: { ru: "зацикливаться / быть одержимым", zh: "沉迷 / 痴迷", es: "obsesionar", fr: "obséder", de: "besessen sein", tr: "takıntı yapmak", ja: "執着する" },
        meanings: [
          {
            id: "w25-4-m1",
            definition: "to think about something or someone all the time, in a way that is not normal",
            translation: { ru: "постоянно думать о чем-то или о ком-то в ненормальной степени", zh: "一直想着某事或某人，以一种不正常的方式", es: "pensar en algo o alguien todo el tiempo, de una manera que no es normal" },
            examples: [
              {
                id: "w25-4-m1-e1",
                sentence: "She used to obsess about her weight constantly.",
                translation: { ru: "Раньше она постоянно зацикливалась на своем весе.", zh: "她过去总是不断地为自己的体重感到苦恼。", es: "Solía obsesionarse con su peso constantemente.", fr: "Elle avait l'habitude d'être constamment obsédée par son poids.", de: "Früher war sie ständig von ihrem Gewicht besessen.", tr: "Eskiden kilosu hakkında sürekli takıntı yapardı.", ja: "彼女は以前、常に自分の体重を気に病んでいた。" }
              },
              {
                id: "w25-4-m1-e2",
                sentence: "It's not healthy to obsess over every little mistake you make.",
                translation: { ru: "Не здорово зацикливаться на каждой маленькой ошибке, которую вы делаете.", zh: "执着于你犯的每一个小错误是不健康的。", es: "No es saludable obsesionarse con cada pequeño error que cometes.", fr: "Il n'est pas sain de s'obséder pour chaque petite erreur que l'on commet.", de: "Es ist nicht gesund, wegen jedes kleinen Fehlers besessen zu sein.", tr: "Yaptığınız her küçük hata üzerinde takıntı yapmak sağlıklı değildir.", ja: "自分の犯した小さな失敗に執着するのは健康的ではありません。" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "cognitive",
      obj: {
        id: "w25-7",
        word: "psychology",
        pronunciation: "/saɪˈkɒl.ə.dʒi/",
        partOfSpeech: "noun",
        level: "B2",
        synonyms: ["behavioral science"],
        collocations: ["child psychology", "study psychology"],
        translations: { ru: "психология", zh: "心理学", es: "psicología", fr: "psychologie", de: "Psychologie", tr: "psikoloji", ja: "心理学" },
        meanings: [
          {
            id: "w25-7-m1",
            definition: "the scientific study of the way the human mind works and how it influences behaviour",
            translation: { ru: "научное изучение того, как работает человеческий разум и как он влияет на поведение", zh: "对人类心理运作方式及其如何影响行为的科学研究", es: "el estudio científico de la forma en que funciona la mente humana y cómo influye en el comportamiento" },
            examples: [
              {
                id: "w25-7-m1-e1",
                sentence: "She decided to study psychology at the university.",
                translation: { ru: "Она решила изучать психологию в университете.", zh: "她决定在大学学习心理学。", es: "Decidió estudiar psicología en la universidad.", fr: "Elle a décidé d'étudier la psychologie à l'université.", de: "Sie beschloss, Psychologie an der Universität zu studieren.", tr: "Üniversitede psikoloji okumaya karar verdi.", ja: "彼女は大学で心理学を学ぶことに決めました。" }
              },
              {
                id: "w25-7-m1-e2",
                sentence: "You have to use a little reverse psychology when dealing with stubborn teenagers.",
                translation: { ru: "Вам нужно использовать немного реверсивной психологии при общении с упрямыми подростками.", zh: "在对待固执的青少年时，你必须使用一点逆反心理学。", es: "Tienes que usar un poco de psicología inversa cuando tratas con adolescentes tercos.", fr: "Il faut faire preuve d'un peu de psychologie inversée pour gérer des adolescents têtus.", de: "Bei sturen Teenagern muss man ein wenig umgekehrte Psychologie anwenden.", tr: "İnatçı gençlerle uğraşırken biraz ters psikoloji kullanmalısınız.", ja: "頑固な10代の若者を扱うときは、逆の心理学を少し使う必要があります。" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "instinct",
      obj: {
        id: "w25-10",
        word: "delusion",
        pronunciation: "/dɪˈluː.ʒən/",
        partOfSpeech: "noun",
        level: "B2",
        synonyms: ["illusion", "misconception", "fantasy"],
        collocations: ["under a delusion", "suffer from delusions"],
        translations: { ru: "заблуждение / бред", zh: "错觉 / 妄想", es: "delirio / engaño", fr: "illusion / délire", de: "Wahn / Täuschung", tr: "sanrı / kuruntu", ja: "妄想 / 錯覚" },
        meanings: [
          {
            id: "w25-10-m1",
            definition: "belief in something that is not true",
            translation: { ru: "вера в то, что не является правдой", zh: "相信不真实的事物", es: "creencia en algo que no es verdad" },
            examples: [
              {
                id: "w25-10-m1-e1",
                sentence: "He is under the delusion that he will be promoted to manager this year.",
                translation: { ru: "Он пребывает в заблуждении, что в этом году его повысят до менеджера.", zh: "他有一种错觉，认为今年自己会被提拔为经理。", es: "Tiene la ilusión de que será ascendido a gerente este año.", fr: "Il se fait l'illusion qu'il sera promu directeur cette année.", de: "Er lebt in dem Wahn, dass er dieses Jahr zum Manager befördert wird.", tr: "Bu yıl yönetici olarak terfi ettirileceği yanılgısı içinde.", ja: "彼は今年マネージャーに昇進するという錯覚に陥っています。" }
              },
              {
                id: "w25-10-m1-e2",
                sentence: "The patient suffered from severe paranoid delusions.",
                translation: { ru: "Пациент страдал тяжелым параноидальным бредом.", zh: "该患者患有严重的偏执性妄想。", es: "El paciente sufría delirios paranoicos severos.", fr: "Le patient souffrait de graves délires paranoïaques.", de: "Der Patient litt unter schweren paranoiden Wahnvorstellungen.", tr: "Hasta şiddetli paranoid sanrılardan muzdaripti.", ja: "患者は重度のパラノイア妄想に苦しんでいた。" }
              }
            ]
          }
        ]
      }
    }
  ],
  "src/data/b2-lesson-26.ts": [
    {
      old: "evacuate",
      obj: {
        id: "w26-2",
        word: "landslide",
        pronunciation: "/ˈlænd.slaɪd/",
        partOfSpeech: "noun",
        level: "B2",
        synonyms: ["rockfall", "mudslide"],
        collocations: ["cause a landslide", "a massive landslide"],
        translations: { ru: "оползень", zh: "山体滑坡", es: "deslizamiento de tierra", fr: "glissement de terrain", de: "Erdrutsch", tr: "heyelan / toprak kayması", ja: "地滑り" },
        meanings: [
          {
            id: "w26-2-m1",
            definition: "a mass of rock and earth moving suddenly and quickly down a steep slope",
            translation: { ru: "масса скальных пород и земли, внезапно и быстро движущаяся вниз по крутому склону", zh: "突然快速地沿着陡坡滑下的大量岩石和泥土", es: "una masa de roca y tierra que se mueve repentina y rápidamente por una pendiente pronunciada" },
            examples: [
              {
                id: "w26-2-m1-e1",
                sentence: "Heavy rain caused a massive landslide that blocked the main road.",
                translation: { ru: "Сильный дождь вызвал массивный оползень, который перекрыл главную дорогу.", zh: "暴雨引发了大规模的山体滑坡，封锁了主要道路。", es: "Las fuertes lluvias provocaron un deslizamiento de tierra masivo que bloqueó la carretera principal.", fr: "De fortes pluies ont provoqué un énorme glissement de terrain qui a bloqué la route principale.", de: "Starker Regen verursachte einen massiven Erdrutsch, der die Hauptstraße blockierte.", tr: "Şiddetli yağmur, ana yolu kapatan devasa bir heyelana neden oldu.", ja: "大雨により大規模な地滑りが発生し、幹線道路が塞がれた。" }
              },
              {
                id: "w26-2-m1-e2",
                sentence: "Several houses on the hill were completely destroyed by the landslide.",
                translation: { ru: "Несколько домов на холме были полностью разрушены оползнем.", zh: "山上的几栋房屋被山体滑坡完全摧毁。", es: "Varias casas en la colina fueron completamente destruidas por el deslizamiento de tierra.", fr: "Plusieurs maisons sur la colline ont été complètement détruites par le glissement de terrain.", de: "Mehrere Häuser auf dem Hügel wurden durch den Erdrutsch völlig zerstört.", tr: "Tepedeki birkaç ev heyelan nedeniyle tamamen yıkıldı.", ja: "丘の上にある数軒の家が地滑りによって完全に破壊された。" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "shelter",
      obj: {
        id: "w26-7",
        word: "blizzard",
        pronunciation: "/ˈblɪz.əd/",
        partOfSpeech: "noun",
        level: "B2",
        synonyms: ["snowstorm"],
        collocations: ["a severe blizzard", "caught in a blizzard"],
        translations: { ru: "метель / буран", zh: "暴风雪", es: "tormenta de nieve / ventisca", fr: "blizzard / tempête de neige", de: "Schneesturm", tr: "tipi / kar fırtınası", ja: "吹雪" },
        meanings: [
          {
            id: "w26-7-m1",
            definition: "a severe snow storm with strong winds",
            translation: { ru: "сильная снежная буря с сильными ветрами", zh: "伴有强风的严重暴风雪", es: "una tormenta de nieve severa con vientos fuertes" },
            examples: [
              {
                id: "w26-7-m1-e1",
                sentence: "We once got stuck in our cabin during a blizzard for three days.",
                translation: { ru: "Однажды мы на три дня застряли в нашей хижине во время метели.", zh: "有一次，我们在暴风雪中被困在小屋里三天。", es: "Una vez nos quedamos atrapados en nuestra cabaña durante una ventisca durante tres días.", fr: "Nous sommes restés coincés dans notre cabane pendant un blizzard durant trois jours.", de: "Wir saßen einmal während eines Schneesturms drei Tage in unserer Hütte fest.", tr: "Bir keresinde tipi sırasında kulübemizde üç gün mahsur kalmıştık.", ja: "吹雪の間、私たちは小屋に3日間閉じ込められたことがあります。" }
              },
              {
                id: "w26-7-m1-e2",
                sentence: "The blizzard conditions made driving extremely dangerous across the state.",
                translation: { ru: "Условия метели сделали вождение крайне опасным по всему штату.", zh: "暴风雪的情况使得整个州的驾驶极其危险。", es: "Las condiciones de ventisca hicieron que conducir fuera extremadamente peligroso en todo el estado.", fr: "Les conditions de blizzard ont rendu la conduite extrêmement dangereuse dans tout l'État.", de: "Die Schneesturmbedingungen machten das Fahren im ganzen Staat extrem gefährlich.", tr: "Tipi koşulları eyalet genelinde araç kullanmayı son derece tehlikeli hale getirdi.", ja: "吹雪のため、州内での車の運転は非常に危険になりました。" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "devastate",
      obj: {
        id: "w26-4",
        word: "tornado",
        pronunciation: "/tɔːˈneɪ.dəʊ/",
        partOfSpeech: "noun",
        level: "B2",
        synonyms: ["twister", "cyclone"],
        collocations: ["a massive tornado", "struck by a tornado"],
        translations: { ru: "торнадо / смерч", zh: "龙卷风", es: "tornado", fr: "tornade", de: "Tornado / Wirbelsturm", tr: "hortum", ja: "竜巻" },
        meanings: [
          {
            id: "w26-4-m1",
            definition: "a strong, dangerous wind that forms itself into an upside-down spinning cone and destroys buildings",
            translation: { ru: "сильный, опасный ветер, который образует перевернутый вращающийся конус и разрушает здания", zh: "一种形成倒置旋转锥体并破坏建筑物的强劲、危险的风", es: "un viento fuerte y peligroso que se forma en un cono giratorio invertido y destruye edificios" },
            examples: [
              {
                id: "w26-4-m1-e1",
                sentence: "The tornado ripped the roof off the local school.",
                translation: { ru: "Торнадо сорвал крышу с местной школы.", zh: "龙卷风掀翻了当地学校的屋顶。", es: "El tornado arrancó el techo de la escuela local.", fr: "La tornade a arraché le toit de l'école locale.", de: "Der Tornado riss das Dach der örtlichen Schule ab.", tr: "Hortum yerel okulun çatısını uçurdu.", ja: "竜巻が地元の学校の屋根を吹き飛ばした。" }
              },
              {
                id: "w26-4-m1-e2",
                sentence: "Tornado warnings were issued for the entire county as the dark clouds gathered.",
                translation: { ru: "По всему округу были выпущены предупреждения о торнадо, когда сгустились темные тучи.", zh: "随着乌云密布，整个县都发布了龙卷风警告。", es: "Se emitieron advertencias de tornado para todo el condado a medida que se acumulaban las nubes oscuras.", fr: "Des alertes à la tornade ont été émises pour tout le comté alors que de sombres nuages s'amoncelaient.", de: "Als sich dunkle Wolken zusammenzogen, wurden für den gesamten Bezirk Tornadowarnungen herausgegeben.", tr: "Kara bulutlar toplanırken tüm ilçe için hortum uyarıları yayınlandı.", ja: "暗雲が立ち込める中、郡全体に竜巻警報が発令された。" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "severe",
      obj: {
        id: "w26-5",
        word: "avalanche",
        pronunciation: "/ˈæv.əl.ɑːnʃ/",
        partOfSpeech: "noun",
        level: "B2",
        synonyms: ["snowslide"],
        collocations: ["trigger an avalanche", "caught in an avalanche"],
        translations: { ru: "лавина", zh: "雪崩", es: "avalancha / alud", fr: "avalanche", de: "Lawine", tr: "çığ", ja: "雪崩" },
        meanings: [
          {
            id: "w26-5-m1",
            definition: "a large amount of ice, snow, and rock falling quickly down the side of a mountain",
            translation: { ru: "большое количество льда, снега и камней, быстро падающих по склону горы", zh: "大量冰雪和岩石从山腰快速落下", es: "una gran cantidad de hielo, nieve y roca que cae rápidamente por la ladera de una montaña" },
            examples: [
              {
                id: "w26-5-m1-e1",
                sentence: "Two extreme skiers were killed in the avalanche last winter.",
                translation: { ru: "Два экстремальных лыжника погибли в лавине прошлой зимой.", zh: "去年冬天，两名极限滑雪者在雪崩中丧生。", es: "Dos esquiadores extremos murieron en la avalancha el invierno pasado.", fr: "Deux skieurs de l'extrême ont été tués dans l'avalanche l'hiver dernier.", de: "Zwei Extrem-Skifahrer kamen im vergangenen Winter bei der Lawine ums Leben.", tr: "Geçen kış iki ekstrem kayakçı çığda öldü.", ja: "昨冬、雪崩により2人のエクストリームスキーヤーが死亡した。" }
              },
              {
                id: "w26-5-m1-e2",
                sentence: "The loud noise triggered a massive avalanche higher up the slope.",
                translation: { ru: "Громкий шум спровоцировал сход мощной лавины выше по склону.", zh: "巨大的声响在斜坡高处引发了大规模雪崩。", es: "El fuerte ruido desencadenó una avalancha masiva más arriba en la ladera.", fr: "Le bruit fort a déclenché une énorme avalanche plus haut sur la pente.", de: "Das laute Geräusch löste weiter oben am Hang eine gewaltige Lawine aus.", tr: "Yüksek ses, yamacın daha yükseklerinde devasa bir çığı tetikledi.", ja: "大きな音が斜面上部の巨大な雪崩を引き起こした。" }
              }
            ]
          }
        ]
      }
    }
  ],
  "src/data/b2-lesson-44.ts": [
    {
      old: "legislation",
      obj: {
        id: "w44-3",
        word: "referendum",
        pronunciation: "/ˌref.əˈren.dəm/",
        partOfSpeech: "noun",
        level: "B2",
        synonyms: ["vote", "ballot", "poll"],
        collocations: ["hold a referendum", "a national referendum"],
        translations: { ru: "референдум", zh: "全民公投", es: "referéndum", fr: "référendum", de: "Referendum / Volksabstimmung", tr: "referandum / halk oylaması", ja: "国民投票" },
        meanings: [
          {
            id: "w44-3-m1",
            definition: "a vote in which all the people in a country or an area are asked to give their opinion about or decide an important political or social question",
            translation: { ru: "голосование, в котором всех жителей страны или региона просят высказать свое мнение или решить важный политический или социальный вопрос", zh: "一种投票，要求一个国家或地区的所有人民就一个重要的政治或社会问题发表意见或做出决定", es: "una votación en la que se pide a todas las personas de un país o área que den su opinión sobre o decidan una cuestión política o social importante" },
            examples: [
              {
                id: "w44-3-m1-e1",
                sentence: "The government decided to hold a referendum on the new constitution.",
                translation: { ru: "Правительство решило провести референдум по новой конституции.", zh: "政府决定就新宪法举行全民公投。", es: "El gobierno decidió celebrar un referéndum sobre la nueva constitución.", fr: "Le gouvernement a décidé d'organiser un référendum sur la nouvelle constitution.", de: "Die Regierung beschloss, ein Referendum über die neue Verfassung abzuhalten.", tr: "Hükümet yeni anayasa konusunda referandum yapmaya karar verdi.", ja: "政府は新憲法に関する国民投票の実施を決定した。" }
              },
              {
                id: "w44-3-m1-e2",
                sentence: "The results of the nationwide referendum were clear.",
                translation: { ru: "Результаты общенационального референдума были ясны.", zh: "全国公投的结果是明确的。", es: "Los resultados del referéndum a nivel nacional fueron claros.", fr: "Les résultats du référendum national ont été clairs.", de: "Die Ergebnisse des landesweiten Referendums waren eindeutig.", tr: "Ülke çapındaki referandumun sonuçları netti.", ja: "全国的な国民投票の結果は明らかであった。" }
              }
            ]
          }
        ]
      }
    },
    {
      old: "campaign",
      obj: {
        id: "w44-10",
        word: "veto",
        pronunciation: "/ˈviː.təʊ/",
        partOfSpeech: "verb",
        level: "B2",
        synonyms: ["reject", "block", "turn down"],
        collocations: ["veto a bill", "power of veto"],
        translations: { ru: "накладывать вето", zh: "否决", es: "vetar", fr: "mettre son veto", de: "sein Veto einlegen", tr: "veto etmek", ja: "拒否権を行使する" },
        meanings: [
          {
            id: "w44-10-m1",
            definition: "to refuse to allow something, especially officially, to refuse to allow a bill to become law",
            translation: { ru: "отказаться разрешить что-либо, особенно официально, отказаться разрешить законопроекту стать законом", zh: "拒绝允许某事，尤指正式拒绝允许法案成为法律", es: "negarse a permitir algo, especialmente oficialmente, negarse a permitir que un proyecto de ley se convierta en ley" },
            examples: [
              {
                id: "w44-10-m1-e1",
                sentence: "The president threatened to veto the new tax legislation.",
                translation: { ru: "Президент пригрозил наложить вето на новое налоговое законодательство.", zh: "总统威胁要否决新的税收立法。", es: "El presidente amenazó con vetar la nueva legislación fiscal.", fr: "Le président a menacé de mettre son veto à la nouvelle législation fiscale.", de: "Der Präsident drohte, sein Veto gegen das neue Steuergesetz einzulegen.", tr: "Başkan yeni vergi mevzuatını veto etmekle tehdit etti.", ja: "大統領は新たな税法案に拒否権を行使すると脅した。" }
              },
              {
                id: "w44-10-m1-e2",
                sentence: "The council can veto any building plans that destroy the environment.",
                translation: { ru: "Совет может наложить вето на любые планы строительства, которые разрушают окружающую среду.", zh: "理事会可以否决任何破坏环境的建筑计划。", es: "El consejo puede vetar cualquier plan de construcción que destruya el medio ambiente.", fr: "Le conseil peut mettre son veto à tout projet de construction qui détruit l'environnement.", de: "Der Rat kann sein Veto gegen alle Baupläne einlegen, die die Umwelt zerstören.", tr: "Konsey, çevreyi tahrip eden her türlü inşaat planını veto edebilir.", ja: "議会は環境を破壊する建設計画を拒否することができる。" }
              }
            ]
          }
        ]
      }
    }
  ]
};

function formatObj(obj, indent) {
    const i = " ".repeat(indent);
    const i2 = " ".repeat(indent + 2);
    const i3 = " ".repeat(indent + 4);
    const i4 = " ".repeat(indent + 6);
    const i5 = " ".repeat(indent + 8);

    let str = `{\n${i2}id: "${obj.id}",\n${i2}word: "${obj.word}",\n${i2}pronunciation: "${obj.pronunciation}",\n${i2}partOfSpeech: "${obj.partOfSpeech}",\n${i2}level: "${obj.level}",\n`;
    str += `${i2}synonyms: ${JSON.stringify(obj.synonyms)},\n`;
    str += `${i2}collocations: ${JSON.stringify(obj.collocations)},\n`;
    str += `${i2}translations: ${JSON.stringify(obj.translations)},\n`;
    str += `${i2}meanings: [\n`;
    for (const m of obj.meanings) {
        str += `${i3}{\n${i4}id: "${m.id}",\n${i4}definition: "${m.definition.replace(/"/g, '\\"')}",\n${i4}translation: ${JSON.stringify(m.translation)},\n${i4}examples: [\n`;
        for (const e of m.examples) {
            str += `${i5}{\n${i5}  id: "${e.id}",\n${i5}  sentence: "${e.sentence.replace(/"/g, '\\"')}",\n${i5}  translation: ${JSON.stringify(e.translation)}\n${i5}},\n`;
        }
        str = str.replace(/,\n$/, '\n');
        str += `${i4}]\n${i3}},\n`;
    }
    str = str.replace(/,\n$/, '\n');
    str += `${i2}]\n${i}}`;
    return str;
}

for (const file of Object.keys(data)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const item of data[file]) {
        // Find the block for item.old
        // we look for { id: "wXX-Y", word: "item.old" ... } up to the next { id: or ]
        const regex = new RegExp(`\\{\\s*id:\\s*"w\\d+-\\d+",\\s*word:\\s*"${item.old}"[\\s\\S]*?(?=\\{\\s*id:\\s*"w\\d+-\\d+"|\\];)`, 'g');
        const replacement = formatObj(item.obj, 4) + (item.old === 'trial' || item.old === 'instinct' || item.old === 'severe' || item.old === 'campaign' ? '\n  ' : ',\n    ');
        content = content.replace(regex, replacement);
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Replaced words in ${file}`);
}

