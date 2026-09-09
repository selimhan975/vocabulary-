const fs = require('fs');
const content = `import { Lesson } from "../types";

export const b2Lesson26: Lesson = {
  id: "b2-l26",
  level: "B2",
  number: 26,
  title: "Extreme Weather",
  words: [
    {
      id: "w26-1",
      word: "forecast",
      pronunciation: "/ˈfɔː.kɑːst/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["prediction", "projection"],
      collocations: ["weather forecast", "economic forecast"],
      translations: { ru: "прогноз", zh: "预测 / 预报", es: "pronóstico", fr: "prévisions", de: "Vorhersage", tr: "tahmin", ja: "予報" },
      meanings: [
        {
          id: "w26-1-m1",
          definition: "a statement of what is judged likely to happen in the future, especially in connection with a particular situation, or the expected weather conditions",
          translation: { ru: "заявление о том, что, как ожидается, произойдет в будущем, особенно в связи с конкретной ситуацией, или об ожидаемых погодных условиях", zh: "对未来可能发生的事情的陈述，尤指与特定情况或预期天气状况相关的陈述", es: "una declaración de lo que se considera probable que suceda en el futuro, especialmente en relación con una situación particular, o las condiciones climáticas esperadas" },
          examples: [
            {
              id: "w26-1-m1-e1",
              sentence: "The latest weather forecast warns that a severe winter storm will hit the coast tonight.",
              translation: { ru: "Последний прогноз погоды предупреждает, что сегодня вечером на побережье обрушится сильный зимний шторм.", zh: "最新的天气预报警告说，今晚一场严重的冬季风暴将袭击海岸。", es: "El último pronóstico del tiempo advierte que una fuerte tormenta de invierno azotará la costa esta noche.", fr: "Les dernières prévisions météorologiques avertissent qu'une violente tempête hivernale frappera la côte ce soir.", de: "Die neueste Wettervorhersage warnt davor, dass heute Nacht ein schwerer Wintersturm auf die Küste treffen wird.", tr: "En son hava durumu tahmini bu gece kıyıyı şiddetli bir kış fırtınasının vuracağı konusunda uyarıyor.", ja: "最新の天気予報は、今夜厳しい冬の嵐が海岸を襲うと警告しています。" }
            },
            {
              id: "w26-1-m1-e2",
              sentence: "Based on the current economic forecast, the company decided to delay its expansion plans.",
              translation: { ru: "Основываясь на текущем экономическом прогнозе, компания решила отложить свои планы расширения.", zh: "基于目前的经济预测，该公司决定推迟其扩张计划。", es: "Basado en el pronóstico económico actual, la empresa decidió retrasar sus planes de expansión.", fr: "Sur la base des prévisions économiques actuelles, l'entreprise a décidé de retarder ses plans d'expansion.", de: "Aufgrund der aktuellen Wirtschaftsprognose beschloss das Unternehmen, seine Expansionspläne zu verschieben.", tr: "Mevcut ekonomik tahmine dayanarak şirket genişleme planlarını ertelemeye karar verdi.", ja: "現在の経済予測に基づいて、同社は事業拡大計画を延期することを決定しました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w26-2",
      word: "hurricane",
      pronunciation: "/ˈhʌr.ɪ.kən/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["cyclone", "typhoon", "storm"],
      collocations: ["powerful hurricane", "survive a hurricane"],
      translations: { ru: "ураган", zh: "飓风", es: "huracán", fr: "ouragan", de: "Hurrikan", tr: "kasırga", ja: "ハリケーン" },
      meanings: [
        {
          id: "w26-2-m1",
          definition: "a violent wind that has a circular movement, especially in the West Atlantic Ocean",
          translation: { ru: "сильный ветер с круговым движением, особенно в западной части Атлантического океана", zh: "做圆周运动的狂风，尤指发生在西大西洋的狂风", es: "un viento violento que tiene un movimiento circular, especialmente en el Océano Atlántico Occidental" },
          examples: [
            {
              id: "w26-2-m1-e1",
              sentence: "The massive hurricane destroyed hundreds of homes and caused widespread power outages.",
              translation: { ru: "Мощный ураган разрушил сотни домов и вызвал массовые отключения электроэнергии.", zh: "这场巨大的飓风摧毁了数百所房屋，并造成大面积停电。", es: "El enorme huracán destruyó cientos de hogares y provocó cortes de energía generalizados.", fr: "L'ouragan massif a détruit des centaines de maisons et provoqué des pannes de courant généralisées.", de: "Der gewaltige Hurrikan zerstörte Hunderte von Häusern und verursachte weitflächige Stromausfälle.", tr: "Devasa kasırga yüzlerce evi yıktı ve yaygın elektrik kesintilerine neden oldu.", ja: "巨大なハリケーンが何百もの家屋を破壊し、広範囲にわたる停電を引き起こしました。" }
            },
            {
              id: "w26-2-m1-e2",
              sentence: "Residents were advised to board up their windows before the hurricane made landfall.",
              translation: { ru: "Жителям посоветовали заколотить окна до того, как ураган обрушится на берег.", zh: "建议居民在飓风登陆前用木板封住窗户。", es: "Se aconsejó a los residentes que tapiaran sus ventanas antes de que el huracán tocara tierra.", fr: "Il a été conseillé aux résidents de barricader leurs fenêtres avant que l'ouragan ne touche terre.", de: "Den Bewohnern wurde geraten, ihre Fenster mit Brettern zu vernageln, bevor der Hurrikan auf Land traf.", tr: "Sakinlere kasırga karaya vurmadan önce pencerelerini tahtalarla kapatmaları tavsiye edildi.", ja: "住民はハリケーンが上陸する前に窓を板で塞ぐよう勧められました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w26-3",
      word: "drought",
      pronunciation: "/draʊt/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["dry spell", "water shortage"],
      collocations: ["severe drought", "survive the drought"],
      translations: { ru: "засуха", zh: "干旱", es: "sequía", fr: "sécheresse", de: "Dürre", tr: "kuraklık", ja: "干ばつ" },
      meanings: [
        {
          id: "w26-3-m1",
          definition: "a long period when there is little or no rain",
          translation: { ru: "длительный период, когда дождей мало или их нет вообще", zh: "很少或没有雨水的漫长时期", es: "un largo período en el que hay poca o ninguna lluvia" },
          examples: [
            {
              id: "w26-3-m1-e1",
              sentence: "The severe drought completely ruined the crops and forced many farmers to sell their land.",
              translation: { ru: "Сильная засуха полностью погубила урожай и вынудила многих фермеров продать свою землю.", zh: "严重的干旱彻底毁了庄稼，迫使许多农民卖掉土地。", es: "La severa sequía arruinó por completo las cosechas y obligó a muchos agricultores a vender sus tierras.", fr: "La grave sécheresse a complètement ruiné les récoltes et contraint de nombreux agriculteurs à vendre leurs terres.", de: "Die schwere Dürre ruinierte die Ernten völlig und zwang viele Bauern, ihr Land zu verkaufen.", tr: "Şiddetli kuraklık mahsulleri tamamen mahvetti ve birçok çiftçiyi topraklarını satmaya zorladı.", ja: "深刻な干ばつは作物を完全に台無しにし、多くの農民が土地を売ることを余儀なくされました。" }
            },
            {
              id: "w26-3-m1-e2",
              sentence: "Because of the ongoing drought, the government has introduced strict water conservation laws.",
              translation: { ru: "Из-за продолжающейся засухи правительство ввело строгие законы об экономии воды.", zh: "由于持续的干旱，政府出台了严格的节水法律。", es: "Debido a la sequía en curso, el gobierno ha introducido estrictas leyes de conservación del agua.", fr: "En raison de la sécheresse persistante, le gouvernement a instauré des lois strictes sur la conservation de l'eau.", de: "Wegen der anhaltenden Dürre hat die Regierung strenge Gesetze zum Wassersparen eingeführt.", tr: "Devam eden kuraklık nedeniyle hükümet katı su tasarrufu yasaları getirdi.", ja: "干ばつが続いているため、政府は厳しい水保全法を導入しました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w26-4",
      word: "flood",
      pronunciation: "/flʌd/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["deluge", "overflow", "inundation"],
      collocations: ["flash flood", "massive flood"],
      translations: { ru: "наводнение", zh: "洪水", es: "inundación", fr: "inondation", de: "Überschwemmung", tr: "sel", ja: "洪水" },
      meanings: [
        {
          id: "w26-4-m1",
          definition: "a large amount of water covering an area that is usually dry",
          translation: { ru: "большое количество воды, покрывающее территорию, которая обычно является сухой", zh: "大量的水覆盖了通常干燥的区域", es: "una gran cantidad de agua que cubre un área que generalmente está seca" },
          examples: [
            {
              id: "w26-4-m1-e1",
              sentence: "The river overflowed its banks, causing a massive flood that covered the entire valley.",
              translation: { ru: "Река вышла из берегов, вызвав сильное наводнение, которое затопило всю долину.", zh: "河水泛滥，引发了一场淹没整个山谷的巨大洪水。", es: "El río se desbordó, provocando una inundación masiva que cubrió todo el valle.", fr: "La rivière a débordé, provoquant une inondation massive qui a recouvert toute la vallée.", de: "Der Fluss trat über die Ufer und verursachte eine massive Überschwemmung, die das gesamte Tal bedeckte.", tr: "Nehir yataklarından taştı ve tüm vadiyi kaplayan büyük bir sele neden oldu.", ja: "川が氾濫し、谷全体を覆う大規模な洪水が発生しました。" }
            },
            {
              id: "w26-4-m1-e2",
              sentence: "It took weeks to pump the water out of the basements after the sudden flash flood.",
              translation: { ru: "Потребовались недели, чтобы откачать воду из подвалов после внезапного паводка.", zh: "突如其来的山洪暴发后，花了几周时间才将地下室的水抽干。", es: "Tomó semanas bombear el agua de los sótanos después de la repentina inundación repentina.", fr: "Il a fallu des semaines pour pomper l'eau des sous-sols après la soudaine crue éclair.", de: "Es dauerte Wochen, das Wasser nach der plötzlichen Sturzflut aus den Kellern zu pumpen.", tr: "Ani sel felaketinden sonra bodrumlardan suyu pompalamak haftalar sürdü.", ja: "突然の鉄砲水の後、地下室から水を汲み出すのに何週間もかかりました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w26-5",
      word: "earthquake",
      pronunciation: "/ˈɜːθ.kweɪk/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["tremor", "quake", "shock"],
      collocations: ["massive earthquake", "survive an earthquake"],
      translations: { ru: "землетрясение", zh: "地震", es: "terremoto", fr: "tremblement de terre", de: "Erdbeben", tr: "deprem", ja: "地震" },
      meanings: [
        {
          id: "w26-5-m1",
          definition: "a sudden violent movement of the earth's surface, sometimes causing great damage",
          translation: { ru: "внезапное сильное движение поверхности земли, иногда вызывающее большие разрушения", zh: "地球表面的突然剧烈运动，有时会造成巨大破坏", es: "un movimiento violento repentino de la superficie terrestre, que a veces causa grandes daños" },
          examples: [
            {
              id: "w26-5-m1-e1",
              sentence: "The building was specially designed to withstand a powerful earthquake without collapsing.",
              translation: { ru: "Здание было специально спроектировано так, чтобы выдерживать сильное землетрясение без обрушения.", zh: "这座建筑经过专门设计，能够承受强烈的地震而不倒塌。", es: "El edificio fue diseñado especialmente para soportar un poderoso terremoto sin colapsar.", fr: "Le bâtiment a été spécialement conçu pour résister à un puissant tremblement de terre sans s'effondrer.", de: "Das Gebäude wurde speziell dafür entworfen, einem starken Erdbeben standzuhalten, ohne einzustürzen.", tr: "Bina güçlü bir depreme çökmeden dayanacak şekilde özel olarak tasarlandı.", ja: "その建物は、強力な地震に耐えて倒壊しないように特別に設計されました。" }
            },
            {
              id: "w26-5-m1-e2",
              sentence: "When the earthquake struck, people immediately hid under their desks for protection.",
              translation: { ru: "Когда произошло землетрясение, люди немедленно спрятались под свои столы ради защиты.", zh: "当地震发生时，人们立刻躲在桌子底下以求保护。", es: "Cuando ocurrió el terremoto, la gente se escondió de inmediato debajo de sus escritorios para protegerse.", fr: "Lorsque le tremblement de terre a frappé, les gens se sont immédiatement cachés sous leurs bureaux pour se protéger.", de: "Als das Erdbeben ausbrach, versteckten sich die Leute sofort unter ihren Schreibtischen, um sich zu schützen.", tr: "Deprem olduğunda insanlar korunmak için hemen masalarının altına saklandılar.", ja: "地震が起きたとき、人々は保護のためにすぐに机の下に隠れました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w26-6",
      word: "evacuate",
      pronunciation: "/ɪˈvæk.ju.eɪt/",
      partOfSpeech: "verb",
      level: "B2",
      synonyms: ["leave", "clear", "abandon"],
      collocations: ["evacuate the building", "order to evacuate"],
      translations: { ru: "эвакуировать", zh: "疏散 / 撤离", es: "evacuar", fr: "évacuer", de: "evakuieren", tr: "tahliye etmek", ja: "避難する" },
      meanings: [
        {
          id: "w26-6-m1",
          definition: "to move people from a dangerous place to somewhere safe",
          translation: { ru: "переместить людей из опасного места в безопасное", zh: "将人员从危险的地方转移到安全的地方", es: "mover a las personas de un lugar peligroso a un lugar seguro" },
          examples: [
            {
              id: "w26-6-m1-e1",
              sentence: "The local government ordered everyone to evacuate the coastal town before the tsunami arrived.",
              translation: { ru: "Местное правительство приказало всем эвакуироваться из прибрежного городка до того, как придет цунами.", zh: "当地政府下令所有人海啸到来前撤离这座沿海小镇。", es: "El gobierno local ordenó a todos evacuar la ciudad costera antes de que llegara el tsunami.", fr: "Le gouvernement local a ordonné à tout le monde d'évacuer la ville côtière avant l'arrivée du tsunami.", de: "Die Lokalregierung befahl allen, die Küstenstadt zu evakuieren, bevor der Tsunami eintraf.", tr: "Yerel yönetim tsunami gelmeden önce herkesin sahil kasabasını tahliye etmesini emretti.", ja: "地元政府は津波が到達する前に、全員に沿岸の町から避難するよう命じました。" }
            },
            {
              id: "w26-6-m1-e2",
              sentence: "When the fire alarm rang, the teachers helped to quickly evacuate all the students from the school.",
              translation: { ru: "Когда прозвенела пожарная тревога, учителя помогли быстро эвакуировать всех учеников из школы.", zh: "当火灾警报响起时，老师们协助迅速将所有学生撤离学校。", es: "Cuando sonó la alarma de incendio, los maestros ayudaron a evacuar rápidamente a todos los estudiantes de la escuela.", fr: "Lorsque l'alarme incendie a retenti, les enseignants ont aidé à évacuer rapidement tous les élèves de l'école.", de: "Als der Feueralarm ertönte, halfen die Lehrer dabei, alle Schüler schnell aus der Schule zu evakuieren.", tr: "Yangın alarmı çaldığında öğretmenler tüm öğrencilerin okuldan hızla tahliye edilmesine yardımcı oldular.", ja: "火災報知器が鳴ったとき、教師たちはすべての生徒を学校から迅速に避難させるのを手伝いました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w26-7",
      word: "shelter",
      pronunciation: "/ˈʃel.tər/",
      partOfSpeech: "noun",
      level: "B2",
      synonyms: ["refuge", "sanctuary", "protection"],
      collocations: ["take shelter", "emergency shelter"],
      translations: { ru: "укрытие / приют", zh: "避难所", es: "refugio", fr: "abri", de: "Zuflucht / Unterkunft", tr: "barınak", ja: "避難所" },
      meanings: [
        {
          id: "w26-7-m1",
          definition: "(a building designed to give) protection from bad weather, danger, or attack",
          translation: { ru: "(здание, предназначенное для) защиты от плохой погоды, опасности или нападения", zh: "（旨在提供）躲避恶劣天气、危险或袭击的建筑物", es: "(un edificio diseñado para brindar) protección contra el mal tiempo, el peligro o los ataques" },
          examples: [
            {
              id: "w26-7-m1-e1",
              sentence: "During the heavy rainstorm, we had to take shelter under a large bridge.",
              translation: { ru: "Во время сильного ливня нам пришлось укрыться под большим мостом.", zh: "在暴雨期间，我们不得不在一座大桥下避雨。", es: "Durante la fuerte tormenta, tuvimos que refugiarnos debajo de un gran puente.", fr: "Pendant la forte tempête de pluie, nous avons dû nous abriter sous un grand pont.", de: "Während des starken Regensturms mussten wir unter einer großen Brücke Schutz suchen.", tr: "Şiddetli yağmur fırtınası sırasında büyük bir köprünün altına sığınmak zorunda kaldık.", ja: "激しい暴風雨の間、私たちは大きな橋の下に避難しなければなりませんでした。" }
            },
            {
              id: "w26-7-m1-e2",
              sentence: "The community set up an emergency shelter in the local gym for people who lost their homes.",
              translation: { ru: "Община организовала временный приют в местном спортзале для людей, потерявших свои дома.", zh: "社区在当地体育馆为失去家园的人们设立了紧急避难所。", es: "La comunidad instaló un refugio de emergencia en el gimnasio local para las personas que perdieron sus hogares.", fr: "La communauté a mis en place un abri d'urgence dans le gymnase local pour les personnes qui ont perdu leur maison.", de: "Die Gemeinde richtete in der örtlichen Turnhalle eine Notunterkunft für Menschen ein, die ihre Häuser verloren hatten.", tr: "Topluluk, evlerini kaybeden insanlar için yerel spor salonunda acil bir barınak kurdu.", ja: "地域社会は家を失った人々のために地元の体育館に緊急避難所を設置しました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w26-8",
      word: "devastate",
      pronunciation: "/ˈdev.ə.steɪt/",
      partOfSpeech: "verb",
      level: "B2",
      synonyms: ["destroy", "ruin", "wreck"],
      collocations: ["completely devastate", "devastate a region"],
      translations: { ru: "опустошать / разорять", zh: "毁坏", es: "devastar", fr: "dévaster", de: "verwüsten", tr: "harap etmek / yıkmak", ja: "荒廃させる" },
      meanings: [
        {
          id: "w26-8-m1",
          definition: "to destroy a place or thing completely or cause great damage",
          translation: { ru: "полностью разрушить место или вещь или нанести огромный ущерб", zh: "彻底摧毁一个地方或事物，或造成巨大破坏", es: "destruir un lugar o cosa por completo o causar un gran daño" },
          examples: [
            {
              id: "w26-8-m1-e1",
              sentence: "The powerful bomb explosion completely devastated the historical center of the city.",
              translation: { ru: "Мощный взрыв бомбы полностью опустошил исторический центр города.", zh: "巨大的炸弹爆炸彻底摧毁了这座城市的历史中心。", es: "La poderosa explosión de la bomba devastó por completo el centro histórico de la ciudad.", fr: "La puissante explosion de la bombe a complètement dévasté le centre historique de la ville.", de: "Die gewaltige Bombenexplosion verwüstete das historische Zentrum der Stadt völlig.", tr: "Güçlü bomba patlaması şehrin tarihi merkezini tamamen harap etti.", ja: "強力な爆弾の爆発により、都市の歴史的中心部は完全に破壊されました。" }
            },
            {
              id: "w26-8-m1-e2",
              sentence: "If the forest fire spreads, it will devastate the natural habitat of many rare animals.",
              translation: { ru: "Если лесной пожар распространится, он разорит естественную среду обитания многих редких животных.", zh: "如果森林大火蔓延，将会破坏许多珍稀动物的自然栖息地。", es: "Si el incendio forestal se propaga, devastará el hábitat natural de muchos animales raros.", fr: "Si le feu de forêt se propage, il dévastera l'habitat naturel de nombreux animaux rares.", de: "Wenn sich der Waldbrand ausbreitet, wird er den natürlichen Lebensraum vieler seltener Tiere zerstören.", tr: "Orman yangını yayılırsa, birçok nadir hayvanın doğal yaşam alanını yok edecektir.", ja: "山火事が広がれば、多くの希少動物の自然生息地を破壊することになります。" }
            }
          ]
        }
      ]
    },
    {
      id: "w26-9",
      word: "rescue",
      pronunciation: "/ˈres.kjuː/",
      partOfSpeech: "verb",
      level: "B2",
      synonyms: ["save", "recover", "liberate"],
      collocations: ["rescue team", "rescue from danger"],
      translations: { ru: "спасать", zh: "救援 / 营救", es: "rescatar", fr: "sauver", de: "retten", tr: "kurtarmak", ja: "救助する" },
      meanings: [
        {
          id: "w26-9-m1",
          definition: "to help someone or something out of a dangerous, harmful, or unpleasant situation",
          translation: { ru: "помочь кому-либо или чему-либо выбраться из опасной, вредной или неприятной ситуации", zh: "帮助某人或某物摆脱危险、有害或令人不快的情况", es: "ayudar a alguien o algo a salir de una situación peligrosa, dañina o desagradable" },
          examples: [
            {
              id: "w26-9-m1-e1",
              sentence: "The brave firefighters managed to rescue the trapped family from the burning building.",
              translation: { ru: "Отважным пожарным удалось спасти оказавшуюся в ловушке семью из горящего здания.", zh: "勇敢的消防员设法将受困的一家人从燃烧的大楼中救了出来。", es: "Los valientes bomberos lograron rescatar a la familia atrapada del edificio en llamas.", fr: "Les courageux pompiers ont réussi à sauver la famille piégée du bâtiment en feu.", de: "Den mutigen Feuerwehrleuten gelang es, die eingeschlossene Familie aus dem brennenden Gebäude zu retten.", tr: "Cesur itfaiyeciler mahsur kalan aileyi yanan binadan kurtarmayı başardılar.", ja: "勇敢な消防士たちは、燃え盛る建物から閉じ込められた家族をなんとか救出しました。" }
            },
            {
              id: "w26-9-m1-e2",
              sentence: "Helicopters were sent immediately to rescue the sailors after their small boat sank in the storm.",
              translation: { ru: "Вертолеты были немедленно отправлены на спасение моряков после того, как их маленькая лодка затонула во время шторма.", zh: "他们的小船在风暴中沉没后，直升机被立即派去营救水手们。", es: "Se enviaron helicópteros de inmediato para rescatar a los marineros después de que su pequeño bote se hundiera en la tormenta.", fr: "Des hélicoptères ont été envoyés immédiatement pour sauver les marins après le naufrage de leur petit bateau dans la tempête.", de: "Hubschrauber wurden sofort entsandt, um die Seeleute zu retten, nachdem ihr kleines Boot im Sturm gesunken war.", tr: "Küçük tekneleri fırtınada battıktan sonra denizcileri kurtarmak için derhal helikopterler gönderildi.", ja: "小さなボートが嵐で沈没した後、船員を救出するためにヘリコプターがすぐに派遣されました。" }
            }
          ]
        }
      ]
    },
    {
      id: "w26-10",
      word: "severe",
      pronunciation: "/sɪˈvɪər/",
      partOfSpeech: "adj",
      level: "B2",
      synonyms: ["harsh", "extreme", "serious"],
      collocations: ["severe weather", "severe pain"],
      translations: { ru: "суровый / тяжелый", zh: "严重的", es: "severo", fr: "sévère", de: "schwer / ernst", tr: "şiddetli / ciddi", ja: "深刻な / 厳しい" },
      meanings: [
        {
          id: "w26-10-m1",
          definition: "causing very great pain, difficulty, worry, damage, etc.; very serious",
          translation: { ru: "вызывающий очень сильную боль, трудности, беспокойство, ущерб и т.д.; очень серьезный", zh: "导致非常巨大的痛苦、困难、担忧、损害等；非常严重", es: "que causa un dolor muy grande, dificultad, preocupación, daño, etc.; muy serio" },
          examples: [
            {
              id: "w26-10-m1-e1",
              sentence: "The patient was experiencing severe pain in his chest and had to be taken to the emergency room.",
              translation: { ru: "Пациент испытывал сильную боль в груди и его пришлось доставить в отделение неотложной помощи.", zh: "病人的胸部剧烈疼痛，不得不被送往急诊室。", es: "El paciente estaba experimentando un dolor severo en el pecho y tuvo que ser llevado a la sala de emergencias.", fr: "Le patient ressentait de vives douleurs à la poitrine et a dû être transporté aux urgences.", de: "Der Patient hatte starke Schmerzen in der Brust und musste in die Notaufnahme gebracht werden.", tr: "Hasta göğsünde şiddetli bir ağrı çekiyordu ve acil servise kaldırılması gerekti.", ja: "患者は胸に激しい痛みを経験しており、緊急治療室に運ばれる必要がありました。" }
            },
            {
              id: "w26-10-m1-e2",
              sentence: "Due to the severe weather conditions, all flights departing from the airport were cancelled.",
              translation: { ru: "Из-за суровых погодных условий все вылеты из аэропорта были отменены.", zh: "由于恶劣的天气条件，所有从该机场起飞的航班均被取消。", es: "Debido a las severas condiciones climáticas, todos los vuelos que salían del aeropuerto fueron cancelados.", fr: "En raison des conditions météorologiques très difficiles, tous les vols au départ de l'aéroport ont été annulés.", de: "Aufgrund der widrigen Wetterbedingungen wurden alle vom Flughafen abfliegenden Flüge gestrichen.", tr: "Şiddetli hava koşulları nedeniyle havalimanından kalkan tüm uçuşlar iptal edildi.", ja: "悪天候のため、空港から出発するすべてのフライトがキャンセルされました。" }
            }
          ]
        }
      ]
    }
  ],
  reading: {
    id: "r26",
    title: "Nature's Fury",
    content: \`Extreme weather events have become a major concern for scientists and governments around the world. Every year, a new weather forecast predicts conditions that are more dangerous than the last. In coastal regions, the biggest threat often comes from a massive hurricane. These powerful storms bring violent winds and heavy rain, causing ocean water to rise and devastate entire communities.\\n\\nInland areas face different challenges. A sudden rise in river levels can cause a dangerous flood that destroys homes and infrastructure. On the other hand, a long-lasting drought can ruin agriculture, leading to severe food and water shortages for millions of people. Some regions even have to deal with the unpredictable force of an earthquake, which strikes without any warning.\\n\\nWhen natural disasters occur, the priority is always to protect human life. Authorities often order residents to evacuate their homes and seek safety in a designated emergency shelter. After the danger has passed, highly trained rescue teams work tirelessly to find survivors and deliver aid. While we cannot control the weather, understanding it better helps us prepare for the worst and protect our communities from nature's incredible power.\`,
    translations: {
      ru: \`Экстремальные погодные явления стали главной проблемой для ученых и правительств по всему миру. Каждый год новый прогноз погоды предсказывает условия, которые более опасны, чем предыдущие. В прибрежных районах самая большая угроза часто исходит от мощного урагана. Эти сильные штормы приносят с собой ураганный ветер и проливной дождь, заставляя воду в океане подниматься и опустошать целые сообщества.\\n\\nВнутренние районы сталкиваются с другими проблемами. Внезапное повышение уровня рек может вызвать опасное наводнение, которое разрушает дома и инфраструктуру. С другой стороны, продолжительная засуха может погубить сельское хозяйство, что приведет к острой нехватке еды и воды для миллионов людей. Некоторым регионам даже приходится иметь дело с непредсказуемой силой землетрясения, которое наносит удар без всякого предупреждения.\\n\\nКогда происходят стихийные бедствия, приоритетом всегда является защита человеческой жизни. Власти часто приказывают жителям эвакуироваться из своих домов и искать безопасности в специально отведенном временном укрытии. После того, как опасность миновала, хорошо обученные спасательные команды неустанно работают, чтобы найти выживших и доставить помощь. Хотя мы не можем управлять погодой, лучшее понимание ее помогает нам подготовиться к худшему и защитить наши сообщества от невероятной силы природы.\`,
      zh: \`极端天气事件已成为世界各地科学家和政府关注的主要问题。每年，新的天气预报预测的情况都比上一次更加危险。在沿海地区，最大的威胁通常来自大规模的飓风。这些强风暴带来狂风暴雨，导致海水上涨并摧毁整个社区。\\n\\n内陆地区面临着不同的挑战。河流水位的突然上升会导致危险的洪水，摧毁房屋和基础设施。另一方面，长期的干旱会破坏农业，导致数百万人的食物和水严重短缺。有些地区甚至还要应对地震不可预测的力量，地震会在没有任何警告的情况下发生。\\n\\n当自然灾害发生时，首要任务始终是保护人类生命。当局经常命令居民撤离家园，前往指定的紧急避难所寻求安全。危险过去后，训练有素的救援队不知疲倦地工作，寻找幸存者并提供援助。虽然我们无法控制天气，但更好地了解天气有助于我们为最坏的情况做好准备，并保护我们的社区免受自然巨大力量的伤害。\`,
      es: \`Los eventos climáticos extremos se han convertido en una gran preocupación para los científicos y gobiernos de todo el mundo. Cada año, un nuevo pronóstico del tiempo predice condiciones que son más peligrosas que las anteriores. En las regiones costeras, la mayor amenaza a menudo proviene de un enorme huracán. Estas poderosas tormentas traen vientos violentos y fuertes lluvias, lo que hace que el agua del océano suba y devaste comunidades enteras.\\n\\nLas áreas del interior enfrentan desafíos diferentes. Un aumento repentino en los niveles de los ríos puede causar una peligrosa inundación que destruye hogares e infraestructura. Por otro lado, una sequía duradera puede arruinar la agricultura, provocando una grave escasez de alimentos y agua para millones de personas. Algunas regiones incluso tienen que lidiar con la fuerza impredecible de un terremoto, que ataca sin previo aviso.\\n\\nCuando ocurren desastres naturales, la prioridad es siempre proteger la vida humana. Las autoridades a menudo ordenan a los residentes evacuar sus hogares y buscar seguridad en un refugio de emergencia designado. Una vez pasado el peligro, equipos de rescate altamente capacitados trabajan incansablemente para encontrar sobrevivientes y entregar ayuda. Si bien no podemos controlar el clima, comprenderlo mejor nos ayuda a prepararnos para lo peor y proteger a nuestras comunidades del increíble poder de la naturaleza.\`,
      fr: \`Les événements météorologiques extrêmes sont devenus une préoccupation majeure pour les scientifiques et les gouvernements du monde entier. Chaque année, de nouvelles prévisions météorologiques annoncent des conditions plus dangereuses que les précédentes. Dans les régions côtières, la plus grande menace vient souvent d'un ouragan massif. Ces puissantes tempêtes apportent des vents violents et de fortes pluies, provoquant la montée des eaux de l'océan et dévastant des communautés entières.\\n\\nLes régions intérieures sont confrontées à des défis différents. Une augmentation soudaine du niveau des rivières peut provoquer une inondation dangereuse qui détruit les maisons et les infrastructures. D'un autre côté, une sécheresse prolongée peut ruiner l'agriculture, entraînant de graves pénuries de nourriture et d'eau pour des millions de personnes. Certaines régions doivent même faire face à la force imprévisible d'un tremblement de terre, qui frappe sans aucun avertissement.\\n\\nLorsque des catastrophes naturelles se produisent, la priorité est toujours de protéger la vie humaine. Les autorités ordonnent souvent aux résidents d'évacuer leurs maisons et de chercher la sécurité dans un abri d'urgence désigné. Une fois le danger passé, des équipes de sauvetage hautement qualifiées travaillent sans relâche pour retrouver des survivants et apporter de l'aide. Bien que nous ne puissions pas contrôler la météo, mieux la comprendre nous aide à nous préparer au pire et à protéger nos communautés de l'incroyable pouvoir de la nature.\`,
      de: \`Extreme Wetterereignisse sind zu einem großen Anliegen für Wissenschaftler und Regierungen auf der ganzen Welt geworden. Jedes Jahr prognostiziert eine neue Wettervorhersage Bedingungen, die gefährlicher sind als die vorherigen. In Küstenregionen geht die größte Bedrohung oft von einem massiven Hurrikan aus. Diese gewaltigen Stürme bringen heftige Winde und starken Regen mit sich, die das Meerwasser ansteigen lassen und ganze Gemeinden verwüsten.\\n\\nDas Landesinnere steht vor anderen Herausforderungen. Ein plötzlicher Anstieg der Flusspegel kann eine gefährliche Überschwemmung verursachen, die Häuser und Infrastruktur zerstört. Andererseits kann eine langanhaltende Dürre die Landwirtschaft ruinieren, was zu schweren Nahrungsmittel- und Wasserengpässen für Millionen von Menschen führt. Einige Regionen müssen sich sogar mit der unvorhersehbaren Kraft eines Erdbebens auseinandersetzen, das ohne Vorwarnung zuschlägt.\\n\\nWenn Naturkatastrophen eintreten, hat der Schutz von Menschenleben immer oberste Priorität. Die Behörden ordnen den Bewohnern oft an, ihre Häuser zu evakuieren und in einer ausgewiesenen Notunterkunft Sicherheit zu suchen. Nachdem die Gefahr vorüber ist, arbeiten hochqualifizierte Rettungsteams unermüdlich daran, Überlebende zu finden und Hilfe zu leisten. Obwohl wir das Wetter nicht kontrollieren können, hilft uns ein besseres Verständnis, uns auf das Schlimmste vorzubereiten und unsere Gemeinden vor der unglaublichen Kraft der Natur zu schützen.\`,
      tr: \`Aşırı hava olayları, dünya çapındaki bilim insanları ve hükümetler için büyük bir endişe kaynağı haline geldi. Her yıl yeni bir hava durumu tahmini, bir öncekinden daha tehlikeli koşullar öngörüyor. Kıyı bölgelerinde, en büyük tehdit genellikle devasa bir kasırgadan gelir. Bu güçlü fırtınalar beraberinde şiddetli rüzgarlar ve yoğun yağmur getirerek okyanus sularının yükselmesine ve tüm toplulukların harap olmasına neden olur.\\n\\nİç kesimler farklı zorluklarla karşılaşıyor. Nehir seviyelerindeki ani bir yükseliş evleri ve altyapıyı yok eden tehlikeli bir sele neden olabilir. Öte yandan, uzun süren bir kuraklık tarımı mahvederek milyonlarca insan için ciddi gıda ve su kıtlığına yol açabilir. Hatta bazı bölgeler hiçbir uyarı yapmadan vuran bir depremin öngörülemez gücüyle başa çıkmak zorundadır.\\n\\nDoğal afetler meydana geldiğinde, öncelik her zaman insan hayatını korumaktır. Yetkililer genellikle sakinlere evlerini tahliye etmelerini ve belirlenmiş bir acil durum barınağında güvenlik aramalarını emreder. Tehlike geçtikten sonra, yüksek eğitimli kurtarma ekipleri hayatta kalanları bulmak ve yardım ulaştırmak için yorulmadan çalışırlar. Havayı kontrol edemesek de onu daha iyi anlamak bizi en kötüye hazırlamaya ve topluluklarımızı doğanın inanılmaz gücünden korumaya yardımcı olur.\`,
      ja: \`異常気象は、世界中の科学者や政府にとって大きな懸念事項となっています。毎年、新しい天気予報では前回よりも危険な状況が予測されています。沿岸地域では、最大の脅威は多くの場合、巨大なハリケーンから来ます。これらの強力な嵐は激しい風と大雨をもたらし、海水を上昇させ、地域社会全体を荒廃させます。\\n\\n内陸部では異なる課題に直面しています。川の水位が急激に上昇すると、家屋やインフラを破壊する危険な洪水を引き起こす可能性があります。一方で、長期にわたる干ばつは農業を台無しにし、何百万人もの人々に深刻な食糧不足と水不足をもたらす可能性があります。警告なしに襲ってくる地震の予測不可能な力に対処しなければならない地域もあります。\\n\\n自然災害が発生した場合、優先されるのは常に人命を保護することです。当局は多くの場合、住民に家から避難し、指定された緊急避難所に安全を求めるよう命じます。危険が去った後、高度な訓練を受けた救助隊が生存者を見つけ、援助を届けるために精力的に働きます。私たちは天候をコントロールすることはできませんが、天候をよりよく理解することは、最悪の事態に備え、自然の信じられないほどの力から私たちの地域社会を守るのに役立ちます。\`
    },
    comprehensionQuestions: [
      {
        id: "q26-1",
        question: "What is mentioned as the biggest threat in coastal regions?",
        options: [
          "A massive hurricane.",
          "A long-lasting drought.",
          "An unpredictable earthquake.",
          "A lack of rescue teams."
        ],
        correctAnswerIndex: 0
      },
      {
        id: "q26-2",
        question: "According to the text, what can be the result of a long-lasting drought?",
        options: [
          "Ocean water rising rapidly.",
          "Homes and infrastructure being destroyed by a flood.",
          "Severe food and water shortages for millions of people.",
          "Violent winds hitting inland areas."
        ],
        correctAnswerIndex: 2
      },
      {
        id: "q26-3",
        question: "What do authorities usually order people to do when a disaster occurs?",
        options: [
          "Evacuate their homes and go to a shelter.",
          "Stay near the rivers to wait for the flood.",
          "Predict the next weather forecast.",
          "Rebuild the infrastructure immediately."
        ],
        correctAnswerIndex: 0
      },
      {
        id: "q26-4",
        question: "What do rescue teams do after the danger has passed?",
        options: [
          "They start agricultural work.",
          "They try to control the weather.",
          "They build new coastal communities.",
          "They search for survivors and deliver aid."
        ],
        correctAnswerIndex: 3
      }
    ]
  }
};
`;
fs.writeFileSync('src/data/b2-lesson-26.ts', content);
