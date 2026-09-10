const fs = require('fs');

const b2Lesson51 = {
  id: "b2-lesson-51",
  title: "Negotiation & Conflict Resolution",
  number: 51,
  level: "B2",
  words: [
    {
      id: "w501",
      word: "work out",
      pronunciation: "/wɜːk aʊt/",
      partOfSpeech: "phrasal verb",
      level: "B2",
      translations: { ru: "разрабатывать / находить решение", zh: "解决 / 算出 / 制定出", es: "resolver / elaborar", fr: "trouver une solution / élaborer", de: "erarbeiten / eine Lösung finden", tr: "çözmek / halletmek", ja: "解決する / 案を練る" },
      synonyms: ["resolve", "figure out", "develop"],
      collocations: ["work out a deal", "work out a solution"],
      meanings: [
        {
          id: "m501_1",
          definition: "To find a solution to a problem or to agree on something.",
          translation: { ru: "Найти решение проблемы или договориться о чем-то.", zh: "找到问题的解决方案或在某事上达成一致。", es: "Encontrar una solución a un problema o acordar algo.", fr: "Trouver une solution à un problème ou se mettre d'accord sur quelque chose.", de: "Eine Lösung für ein Problem finden oder sich auf etwas einigen.", tr: "Bir soruna çözüm bulmak veya bir konuda anlaşmak.", ja: "問題の解決策を見つける、または何かに合意すること。" },
          examples: [
            { id: "ex501_1", sentence: "The two companies managed to work out a mutually beneficial agreement.", translation: { ru: "Двум компаниям удалось выработать взаимовыгодное соглашение.", zh: "两家公司设法达成了一项互惠互利的协议。", es: "Las dos empresas lograron elaborar un acuerdo mutuamente beneficioso.", fr: "Les deux entreprises ont réussi à élaborer un accord mutuellement bénéfique.", de: "Den beiden Unternehmen gelang es, ein für beide Seiten vorteilhaftes Abkommen zu erarbeiten.", tr: "İki şirket karşılıklı yarar sağlayan bir anlaşma çözmeyi başardı.", ja: "両社は互いに利益のある合意案を練り上げることができました。" } },
            { id: "ex501_2", sentence: "We still need to work out the exact details of the delivery schedule.", translation: { ru: "Нам еще нужно проработать точные детали графика поставок.", zh: "我们仍然需要制定出交付时间表的具体细节。", es: "Todavía necesitamos resolver los detalles exactos del horario de entrega.", fr: "Nous devons encore trouver une solution pour les détails exacts du calendrier de livraison.", de: "Wir müssen noch die genauen Details des Lieferplans erarbeiten.", tr: "Teslimat programının kesin ayrıntılarını hala çözmemiz gerekiyor.", ja: "納品スケジュールの正確な詳細をまだ決める必要があります。" } }
          ]
        }
      ]
    },
    {
      id: "w502",
      word: "give in",
      pronunciation: "/ɡɪv ɪn/",
      partOfSpeech: "phrasal verb",
      level: "B2",
      translations: { ru: "уступать / сдаваться", zh: "屈服 / 让步", es: "ceder / rendirse", fr: "céder / capituler", de: "nachgeben", tr: "pes etmek / boyun eğmek", ja: "屈する / 譲歩する" },
      synonyms: ["surrender", "yield", "capitulate"],
      collocations: ["give in to demands", "refuse to give in"],
      meanings: [
        {
          id: "m502_1",
          definition: "To finally agree to what someone wants, after refusing for a period of time.",
          translation: { ru: "Наконец согласиться на то, чего хочет кто-то, после периода отказов.", zh: "在拒绝了一段时间后，最终同意别人的要求。", es: "Aceptar finalmente lo que alguien quiere, después de negarse por un tiempo.", fr: "Accepter finalement ce que quelqu'un veut, après avoir refusé pendant un certain temps.", de: "Schließlich dem zustimmen, was jemand will, nachdem man sich eine Zeit lang geweigert hat.", tr: "Bir süre reddettikten sonra sonunda birinin istediğini kabul etmek.", ja: "しばらく拒否した後、最終的に誰かの要求に同意すること。" },
          examples: [
            { id: "ex502_1", sentence: "Despite the union's protests, the management refused to give in to their demands.", translation: { ru: "Несмотря на протесты профсоюза, руководство отказалось уступить их требованиям.", zh: "尽管工会抗议，管理层还是拒绝向他们的要求让步。", es: "A pesar de las protestas del sindicato, la dirección se negó a ceder a sus demandas.", fr: "Malgré les protestations du syndicat, la direction a refusé de céder à leurs revendications.", de: "Trotz der Proteste der Gewerkschaft weigerte sich die Geschäftsführung, ihren Forderungen nachzugeben.", tr: "Sendikanın protestolarına rağmen, yönetim taleplerine boyun eğmeyi reddetti.", ja: "労働組合の抗議にもかかわらず、経営陣は彼らの要求に譲歩することを拒否しました。" } },
            { id: "ex502_2", sentence: "In a successful negotiation, neither side should feel like they were forced to give in entirely.", translation: { ru: "В успешных переговорах ни одна из сторон не должна чувствовать, что ее заставили полностью сдаться.", zh: "在一次成功的谈判中，双方都不应该觉得他们是被迫完全让步的。", es: "En una negociación exitosa, ninguna de las partes debería sentir que fue forzada a ceder por completo.", fr: "Dans une négociation réussie, aucune des parties ne devrait avoir l'impression d'avoir été obligée de céder entièrement.", de: "Bei einer erfolgreichen Verhandlung sollte keine Seite das Gefühl haben, völlig nachgeben zu müssen.", tr: "Başarılı bir müzakerede, hiçbir taraf tamamen pes etmeye zorlandığını hissetmemelidir.", ja: "成功した交渉においては、どちらの側も完全に譲歩を強いられたと感じるべきではありません。" } }
          ]
        }
      ]
    },
    {
      id: "w503",
      word: "bring up",
      pronunciation: "/brɪŋ ʌp/",
      partOfSpeech: "phrasal verb",
      level: "B2",
      translations: { ru: "поднимать (вопрос) / упоминать", zh: "提出 / 提及", es: "sacar a colación / mencionar", fr: "soulever (une question) / aborder", de: "zur Sprache bringen / erwähnen", tr: "gündeme getirmek / bahsetmek", ja: "話題に出す / 提起する" },
      synonyms: ["mention", "raise", "introduce"],
      collocations: ["bring up an issue", "bring up a point"],
      meanings: [
        {
          id: "m503_1",
          definition: "To start discussing a subject.",
          translation: { ru: "Начать обсуждать тему.", zh: "开始讨论某个话题。", es: "Empezar a discutir un tema.", fr: "Commencer à discuter d'un sujet.", de: "Anfangen, ein Thema zu diskutieren.", tr: "Bir konuyu tartışmaya başlamak.", ja: "話題について議論し始めること。" },
          examples: [
            { id: "ex503_1", sentence: "I didn't want to bring up the issue of the budget, but it is unavoidable.", translation: { ru: "Я не хотел поднимать вопрос о бюджете, но это неизбежно.", zh: "我不想提出预算问题，但这是不可避免的。", es: "No quería sacar a colación el tema del presupuesto, pero es inevitable.", fr: "Je ne voulais pas soulever la question du budget, mais c'est inévitable.", de: "Ich wollte das Thema Budget nicht zur Sprache bringen, aber es ist unvermeidlich.", tr: "Bütçe konusunu gündeme getirmek istemedim ama bu kaçınılmaz.", ja: "予算の問題は話題に出したくありませんでしたが、避けられません。" } },
            { id: "ex503_2", sentence: "She brings up a very valid point regarding customer satisfaction.", translation: { ru: "Она поднимает очень важный вопрос, касающийся удовлетворенности клиентов.", zh: "关于客户满意度，她提出了一个非常合理的观点。", es: "Ella saca a colación un punto muy válido con respecto a la satisfacción del cliente.", fr: "Elle aborde un point très pertinent concernant la satisfaction client.", de: "Sie bringt einen sehr stichhaltigen Punkt hinsichtlich der Kundenzufriedenheit zur Sprache.", tr: "Müşteri memnuniyeti ile ilgili çok geçerli bir noktayı gündeme getiriyor.", ja: "彼女は顧客満足度に関する非常に妥当な指摘を提起しています。" } }
          ]
        }
      ]
    },
    {
      id: "w504",
      word: "nevertheless",
      pronunciation: "/ˌnevəðəˈles/",
      partOfSpeech: "adverb",
      level: "B2",
      translations: { ru: "тем не менее / однако", zh: "然而 / 尽管如此", es: "sin embargo / no obstante", fr: "néanmoins / cependant", de: "dennoch / nichtsdestotrotz", tr: "yine de / buna rağmen", ja: "それにもかかわらず" },
      synonyms: ["however", "still", "yet"],
      collocations: ["; nevertheless,"],
      meanings: [
        {
          id: "m504_1",
          definition: "Despite what has just been said or done.",
          translation: { ru: "Несмотря на то, что только что было сказано или сделано.", zh: "尽管刚才说了或做了什么。", es: "A pesar de lo que se acaba de decir o hacer.", fr: "Malgré ce qui vient d'être dit ou fait.", de: "Trotz dem, was gerade gesagt oder getan wurde.", tr: "Az önce söylenenlere veya yapılanlara rağmen.", ja: "今言われたことやされたことにもかかわらず。" },
          examples: [
            { id: "ex504_1", sentence: "The proposal has a few flaws; nevertheless, we believe it has great potential.", translation: { ru: "В предложении есть несколько недостатков; тем не менее, мы считаем, что у него большой потенциал.", zh: "该提案有一些缺陷；尽管如此，我们认为它有很大的潜力。", es: "La propuesta tiene algunas fallas; no obstante, creemos que tiene un gran potencial.", fr: "La proposition a quelques défauts ; néanmoins, nous pensons qu'elle a un grand potentiel.", de: "Der Vorschlag hat einige Mängel; dennoch glauben wir, dass er großes Potenzial hat.", tr: "Teklifin birkaç kusuru var; yine de, büyük bir potansiyele sahip olduğuna inanıyoruz.", ja: "その提案にはいくつかの欠陥がありますが、それにもかかわらず、私たちはそれに大きな可能性があると信じています。" } },
            { id: "ex504_2", sentence: "We were deeply disappointed by the delay. Nevertheless, we are committed to finishing the project.", translation: { ru: "Мы были глубоко разочарованы задержкой. Тем не менее, мы полны решимости закончить проект.", zh: "我们对延误感到非常失望。尽管如此，我们仍致力于完成该项目。", es: "Estábamos profundamente decepcionados por el retraso. Sin embargo, estamos comprometidos a terminar el proyecto.", fr: "Nous avons été profondément déçus par le retard. Cependant, nous nous engageons à terminer le projet.", de: "Wir waren zutiefst enttäuscht über die Verzögerung. Nichtsdestotrotz sind wir entschlossen, das Projekt abzuschließen.", tr: "Gecikmeden dolayı derin bir hayal kırıklığına uğradık. Buna rağmen, projeyi bitirmeye kararlıyız.", ja: "遅延には深く失望しました。それにもかかわらず、私たちはプロジェクトを完了することに尽力します。" } }
          ]
        }
      ]
    },
    {
      id: "w505",
      word: "objection",
      pronunciation: "/əbˈdʒekʃn/",
      partOfSpeech: "noun",
      level: "B2",
      translations: { ru: "возражение / протест", zh: "反对 / 异议", es: "objeción / reparo", fr: "objection / opposition", de: "Einwand / Widerspruch", tr: "itiraz / karşı çıkma", ja: "異議 / 反対" },
      synonyms: ["opposition", "protest", "disagreement"],
      collocations: ["raise an objection", "have no objection"],
      meanings: [
        {
          id: "m505_1",
          definition: "The act of expressing or feeling opposition to or dislike of something or someone.",
          translation: { ru: "Акт выражения или чувства оппозиции или неприязни к чему-либо или кому-либо.", zh: "表达或感觉对某事或某人的反对或厌恶的行为。", es: "El acto de expresar o sentir oposición o disgusto por algo o alguien.", fr: "Le fait d'exprimer ou de ressentir une opposition ou une aversion pour quelque chose ou quelqu'un.", de: "Der Akt, Opposition oder Abneigung gegen etwas oder jemanden auszudrücken oder zu empfinden.", tr: "Bir şeye veya birine karşı çıkma veya sevmemeyi ifade etme veya hissetme eylemi.", ja: "何かや誰かに対して反対や嫌悪を表現したり感じたりする行為。" },
          examples: [
            { id: "ex505_1", sentence: "Does anyone have any strong objections to the new company policy?", translation: { ru: "Есть ли у кого-нибудь серьезные возражения против новой политики компании?", zh: "有人对公司的新政策有强烈异议吗？", es: "¿Alguien tiene alguna fuerte objeción a la nueva política de la empresa?", fr: "Quelqu'un a-t-il de fortes objections à la nouvelle politique de l'entreprise ?", de: "Hat jemand ernsthafte Einwände gegen die neue Unternehmensrichtlinie?", tr: "Yeni şirket politikasına güçlü bir itirazı olan var mı?", ja: "会社の新しい方針に強い異議がある人はいますか？" } },
            { id: "ex505_2", sentence: "She raised a valid objection regarding the safety of the equipment.", translation: { ru: "Она выдвинула обоснованное возражение касательно безопасности оборудования.", zh: "她对设备的安全提出了合理的反对意见。", es: "Ella planteó una objeción válida con respecto a la seguridad del equipo.", fr: "Elle a soulevé une objection valable concernant la sécurité de l'équipement.", de: "Sie erhob einen berechtigten Einwand bezüglich der Sicherheit der Ausrüstung.", tr: "Ekipmanın güvenliği ile ilgili geçerli bir itirazda bulundu.", ja: "彼女は機器の安全性に関して正当な異議を唱えました。" } }
          ]
        }
      ]
    },
    {
      id: "w506",
      word: "concession",
      pronunciation: "/kənˈseʃn/",
      partOfSpeech: "noun",
      level: "B2",
      translations: { ru: "уступка", zh: "让步 / 妥协", es: "concesión", fr: "concession", de: "Zugeständnis", tr: "ödün / taviz", ja: "譲歩 / 妥協" },
      synonyms: ["compromise", "allowance", "giving in"],
      collocations: ["make a concession", "offer concessions"],
      meanings: [
        {
          id: "m506_1",
          definition: "Something that you agree to do or give to someone, in order to end an argument.",
          translation: { ru: "То, что вы соглашаетесь сделать или дать кому-то, чтобы положить конец спору.", zh: "你同意做或给某人的事，为了结束争论。", es: "Algo que aceptas hacer o dar a alguien, para terminar una discusión.", fr: "Quelque chose que vous acceptez de faire ou de donner à quelqu'un, afin de mettre fin à une dispute.", de: "Etwas, das Sie zustimmen zu tun oder jemandem zu geben, um einen Streit zu beenden.", tr: "Bir tartışmayı bitirmek için yapmayı veya birine vermeyi kabul ettiğiniz bir şey.", ja: "議論を終わらせるために、あなたが行うことや誰かに与えることに同意すること。" },
          examples: [
            { id: "ex506_1", sentence: "To reach an agreement, both sides will have to make some concessions.", translation: { ru: "Чтобы достичь соглашения, обеим сторонам придется пойти на некоторые уступки.", zh: "为了达成协议，双方都必须做出一些让步。", es: "Para llegar a un acuerdo, ambas partes tendrán que hacer algunas concesiones.", fr: "Pour parvenir à un accord, les deux parties devront faire quelques concessions.", de: "Um eine Einigung zu erzielen, müssen beide Seiten einige Zugeständnisse machen.", tr: "Bir anlaşmaya varmak için her iki tarafın da bazı tavizler vermesi gerekecek.", ja: "合意に達するために、双方がいくつかの譲歩をしなければなりません。" } },
            { id: "ex506_2", sentence: "The government refused to offer any concessions to the striking workers.", translation: { ru: "Правительство отказалось пойти на какие-либо уступки бастующим рабочим.", zh: "政府拒绝向罢工工人提供任何妥协。", es: "El gobierno se negó a ofrecer ninguna concesión a los trabajadores en huelga.", fr: "Le gouvernement a refusé d'offrir toute concession aux travailleurs en grève.", de: "Die Regierung weigerte sich, den streikenden Arbeitern irgendwelche Zugeständnisse anzubieten.", tr: "Hükümet, grev yapan işçilere herhangi bir ödün vermeyi reddetti.", ja: "政府は、ストライキ中の労働者に対していかなる譲歩も提供することを拒否しました。" } }
          ]
        }
      ]
    },
    {
      id: "w507",
      word: "tentative",
      pronunciation: "/ˈtentətɪv/",
      partOfSpeech: "adjective",
      level: "B2",
      translations: { ru: "предварительный / неуверенный", zh: "初步的 / 试探性的", es: "tentativo / provisional", fr: "provisoire / hésitant", de: "vorläufig / zaghaft", tr: "geçici / kesin olmayan", ja: "仮の / 暫定的な" },
      synonyms: ["provisional", "unconfirmed", "preliminary"],
      collocations: ["tentative agreement", "tentative plans"],
      meanings: [
        {
          id: "m507_1",
          definition: "Not certain or agreed, or said or done in a careful but uncertain way.",
          translation: { ru: "Не определенный или не согласованный, или сказанный или сделанный осторожно, но неуверенно.", zh: "不确定或未达成一致的，或者以小心但不确定的方式说或做的。", es: "No seguro o acordado, o dicho o hecho de una manera cuidadosa pero incierta.", fr: "Pas certain ou convenu, ou dit ou fait d'une manière prudente mais incertaine.", de: "Nicht sicher oder vereinbart, oder auf vorsichtige, aber unsichere Weise gesagt oder getan.", tr: "Kesin veya kararlaştırılmış değil, ya da dikkatli ama belirsiz bir şekilde söylenen veya yapılan.", ja: "確実ではない、または合意されていない、あるいは慎重だが不確かな方法で言われたり行われたりすること。" },
          examples: [
            { id: "ex507_1", sentence: "We have reached a tentative agreement, but the final details are yet to be confirmed.", translation: { ru: "Мы достигли предварительного соглашения, но окончательные детали еще не подтверждены.", zh: "我们已经达成了一项初步协议，但最终细节尚未确认。", es: "Hemos llegado a un acuerdo tentativo, pero los detalles finales aún están por confirmar.", fr: "Nous avons conclu un accord provisoire, mais les détails finaux restent à confirmer.", de: "Wir haben eine vorläufige Einigung erzielt, aber die endgültigen Details müssen noch bestätigt werden.", tr: "Geçici bir anlaşmaya vardık, ancak nihai ayrıntılar henüz onaylanmadı.", ja: "仮の合意には達しましたが、最終的な詳細はまだ確認されていません。" } },
            { id: "ex507_2", sentence: "He made a tentative suggestion about changing the deadline.", translation: { ru: "Он сделал неуверенное предложение об изменении сроков.", zh: "他试探性地提出了关于改变截止日期的建议。", es: "Hizo una sugerencia tentativa sobre cambiar la fecha límite.", fr: "Il a fait une suggestion hésitante concernant le changement de délai.", de: "Er machte einen zaghaften Vorschlag, die Frist zu ändern.", tr: "Teslim tarihini değiştirmeyle ilgili kesin olmayan bir öneride bulundu.", ja: "彼は締め切りの変更について、控えめな提案をしました。" } }
          ]
        }
      ]
    },
    {
      id: "w508",
      word: "viable",
      pronunciation: "/ˈvaɪəbl/",
      partOfSpeech: "adjective",
      level: "B2",
      translations: { ru: "жизнеспособный / реальный", zh: "切实可行的", es: "viable / factible", fr: "viable / réalisable", de: "rentabel / machbar", tr: "uygulanabilir / yaşayabilir", ja: "実行可能な / 実用的な" },
      synonyms: ["feasible", "workable", "practical"],
      collocations: ["commercially viable", "viable option"],
      meanings: [
        {
          id: "m508_1",
          definition: "Able to work as intended or able to succeed.",
          translation: { ru: "Способный работать по назначению или способный добиться успеха.", zh: "能够按预期运作或能够成功。", es: "Capaz de funcionar según lo previsto o capaz de tener éxito.", fr: "Capable de fonctionner comme prévu ou capable de réussir.", de: "In der Lage, wie beabsichtigt zu funktionieren oder erfolgreich zu sein.", tr: "Amaçlandığı gibi çalışabilen veya başarılı olabilen.", ja: "意図したとおりに機能する、または成功することができる。" },
          examples: [
            { id: "ex508_1", sentence: "We must find a commercially viable solution to this problem.", translation: { ru: "Мы должны найти коммерчески жизнеспособное решение этой проблемы.", zh: "我们必须找到一个在商业上切实可行的解决方案。", es: "Debemos encontrar una solución comercialmente viable a este problema.", fr: "Nous devons trouver une solution commercialement viable à ce problème.", de: "Wir müssen eine kommerziell rentable Lösung für dieses Problem finden.", tr: "Bu soruna ticari olarak uygulanabilir bir çözüm bulmalıyız.", ja: "この問題に対して商業的に実行可能な解決策を見つける必要があります。" } },
            { id: "ex508_2", sentence: "Without funding, the project is no longer viable.", translation: { ru: "Без финансирования проект больше не является жизнеспособным.", zh: "没有资金，该项目将不再可行。", es: "Sin financiación, el proyecto ya no es viable.", fr: "Sans financement, le projet n'est plus viable.", de: "Ohne Finanzierung ist das Projekt nicht mehr machbar.", tr: "Finansman olmadan, proje artık uygulanabilir değil.", ja: "資金がなければ、このプロジェクトはもはや実用的ではありません。" } }
          ]
        }
      ]
    },
    {
      id: "w509",
      word: "leverage",
      pronunciation: "/ˈliːvərɪdʒ/ (UK), /ˈlevərɪdʒ/ (US)",
      partOfSpeech: "noun, verb",
      level: "B2",
      translations: { ru: "рычаг давления / использовать", zh: "影响力 / 利用", es: "ventaja / aprovechar", fr: "moyen de pression / tirer parti de", de: "Druckmittel / wirksam einsetzen", tr: "koz / avantaj sağlamak", ja: "影響力 / 活用する" },
      synonyms: ["influence", "advantage", "exploit"],
      collocations: ["use as leverage", "leverage technology"],
      meanings: [
        {
          id: "m509_1",
          definition: "Power to influence people and get the results you want, or to use something to maximum advantage.",
          translation: { ru: "Сила влиять на людей и получать желаемые результаты, или использовать что-то с максимальной выгодой.", zh: "影响人们并获得所需结果的能力，或最大程度地利用某事物的能力。", es: "Poder para influir en las personas y obtener los resultados que deseas, o usar algo para obtener la máxima ventaja.", fr: "Pouvoir d'influencer les gens et d'obtenir les résultats souhaités, ou d'utiliser quelque chose à son avantage maximum.", de: "Macht, Menschen zu beeinflussen und die gewünschten Ergebnisse zu erzielen, oder etwas zum maximalen Vorteil zu nutzen.", tr: "İnsanları etkileme ve istediğiniz sonuçları alma veya bir şeyi maksimum avantaj için kullanma gücü.", ja: "人々に影響を与え、望む結果を得る力、または何かを最大限に活用すること。" },
          examples: [
            { id: "ex509_1", sentence: "The union used the upcoming deadline as leverage during the negotiations.", translation: { ru: "Профсоюз использовал приближающийся срок как рычаг давления во время переговоров.", zh: "工会在谈判中把即将到来的截止日期作为谈判筹码。", es: "El sindicato utilizó el plazo inminente como ventaja durante las negociaciones.", fr: "Le syndicat a utilisé l'échéance imminente comme moyen de pression lors des négociations.", de: "Die Gewerkschaft nutzte die bevorstehende Frist als Druckmittel während der Verhandlungen.", tr: "Sendika, müzakereler sırasında yaklaşan teslim tarihini koz olarak kullandı.", ja: "労働組合は交渉中、迫り来る締め切りを交渉の材料（影響力）として使いました。" } },
            { id: "ex509_2", sentence: "We need to leverage our existing technology to enter the new market.", translation: { ru: "Нам нужно использовать нашу существующую технологию, чтобы выйти на новый рынок.", zh: "我们需要利用现有的技术进入新市场。", es: "Necesitamos aprovechar nuestra tecnología existente para ingresar al nuevo mercado.", fr: "Nous devons tirer parti de notre technologie existante pour pénétrer le nouveau marché.", de: "Wir müssen unsere bestehende Technologie wirksam einsetzen, um in den neuen Markt einzutreten.", tr: "Yeni pazara girmek için mevcut teknolojimizi avantaja çevirmeliyiz.", ja: "新しい市場に参入するために、既存の技術を活用する必要があります。" } }
          ]
        }
      ]
    },
    {
      id: "w510",
      word: "accordingly",
      pronunciation: "/əˈkɔːdɪŋli/",
      partOfSpeech: "adverb",
      level: "B2",
      translations: { ru: "соответственно", zh: "相应地", es: "en consecuencia", fr: "en conséquence", de: "dementsprechend", tr: "buna göre", ja: "それに応じて" },
      synonyms: ["correspondingly", "appropriately", "consequently"],
      collocations: ["act accordingly", "adjust accordingly"],
      meanings: [
        {
          id: "m510_1",
          definition: "In a way that is suitable or right for the situation.",
          translation: { ru: "Таким образом, который подходит или правилен для ситуации.", zh: "以适合或适合情况的方式。", es: "De una manera que es adecuada o correcta para la situación.", fr: "D'une manière appropriée ou juste pour la situation.", de: "In einer Weise, die für die Situation angemessen oder richtig ist.", tr: "Duruma uygun veya doğru bir şekilde.", ja: "状況に適切または正しい方法で。" },
          examples: [
            { id: "ex510_1", sentence: "The budget has been reduced, so we must adjust our plans accordingly.", translation: { ru: "Бюджет был сокращен, поэтому мы должны соответствующим образом скорректировать наши планы.", zh: "预算已经削减，因此我们必须相应地调整我们的计划。", es: "El presupuesto se ha reducido, por lo que debemos ajustar nuestros planes en consecuencia.", fr: "Le budget a été réduit, nous devons donc ajuster nos plans en conséquence.", de: "Das Budget wurde gekürzt, daher müssen wir unsere Pläne dementsprechend anpassen.", tr: "Bütçe küçültüldü, bu yüzden planlarımızı buna göre ayarlamalıyız.", ja: "予算が削減されたため、それに応じて計画を調整しなければなりません。" } },
            { id: "ex510_2", sentence: "Please read the new safety regulations and act accordingly.", translation: { ru: "Пожалуйста, прочитайте новые правила техники безопасности и действуйте должным образом.", zh: "请阅读新的安全规定并采取相应行动。", es: "Por favor, lea las nuevas regulaciones de seguridad y actúe en consecuencia.", fr: "Veuillez lire les nouvelles règles de sécurité et agir en conséquence.", de: "Bitte lesen Sie die neuen Sicherheitsvorschriften und handeln Sie entsprechend.", tr: "Lütfen yeni güvenlik düzenlemelerini okuyun ve buna göre hareket edin.", ja: "新しい安全規制を読み、それに応じて行動してください。" } }
          ]
        }
      ]
    }
  ],
  reading: {
    id: "r51",
    title: "Resolving Conflicts and Reaching Outcomes",
    content: "Negotiation is an essential part of business, particularly when partners need to work out a complex agreement. Often, one party will bring up an objection that threatens to stop the process entirely. In these moments, understanding what leverage you possess is crucial. A strong position allows you to guide the discussion without appearing hostile.\n\nNevertheless, a successful negotiation requires flexibility. Neither side wants to feel that they are forced to give in entirely. Therefore, offering a concession can demonstrate goodwill and help both sides reach a tentative agreement. Once a viable compromise is found, the teams can adjust their expectations accordingly and proceed with confidence. Professional conflict resolution is not about defeating the other party; it is about finding a solution that allows both organizations to succeed together.",
    translations: {
      ru: "Переговоры являются неотъемлемой частью бизнеса, особенно когда партнерам необходимо выработать сложное соглашение. Часто одна из сторон выдвигает возражение, которое грозит полностью остановить процесс. В такие моменты крайне важно понимать, какими рычагами давления вы обладаете. Сильная позиция позволяет направлять дискуссию, не выглядя враждебно. Тем не менее, успешные переговоры требуют гибкости. Ни одна из сторон не хочет чувствовать, что ее заставляют полностью сдаться. Поэтому предложение уступки может продемонстрировать добрую волю и помочь обеим сторонам достичь предварительного соглашения. Как только найден жизнеспособный компромисс, команды могут соответствующим образом скорректировать свои ожидания и уверенно двигаться дальше. Профессиональное разрешение конфликтов не означает победу над другой стороной; оно заключается в поиске решения, которое позволит обеим организациям вместе добиться успеха.",
      zh: "谈判是业务的重要组成部分，尤其是在合作伙伴需要达成一项复杂协议时。通常，一方会提出反对意见，从而威胁要完全停止整个流程。在这些时刻，了解你拥有什么影响力至关重要。强势的立场可以让你引导讨论而不显得充满敌意。尽管如此，成功的谈判需要灵活性。双方都不希望觉得他们是被迫完全让步的。因此，提供妥协可以表达善意，并帮助双方达成初步协议。一旦找到可行的折中方案，团队就可以相应地调整他们的期望，并充满信心地继续推进。专业的冲突解决不是为了击败对方，而是为了找到一个让两个组织能够共同成功的解决方案。",
      es: "La negociación es una parte esencial de los negocios, especialmente cuando los socios necesitan elaborar un acuerdo complejo. A menudo, una de las partes planteará una objeción que amenaza con detener el proceso por completo. En estos momentos, comprender qué ventaja posee es crucial. Una posición fuerte le permite guiar la discusión sin parecer hostil. Sin embargo, una negociación exitosa requiere flexibilidad. Ninguna de las partes quiere sentir que se ve obligada a ceder por completo. Por lo tanto, ofrecer una concesión puede demostrar buena voluntad y ayudar a ambas partes a alcanzar un acuerdo tentativo. Una vez que se encuentra un compromiso viable, los equipos pueden ajustar sus expectativas en consecuencia y proceder con confianza. La resolución profesional de conflictos no se trata de derrotar a la otra parte; se trata de encontrar una solución que permita a ambas organizaciones tener éxito juntas.",
      fr: "La négociation est un aspect essentiel des affaires, en particulier lorsque les partenaires doivent élaborer un accord complexe. Souvent, une partie soulèvera une objection qui menace d'arrêter complètement le processus. Dans ces moments, il est crucial de comprendre quel moyen de pression vous possédez. Une position forte vous permet de guider la discussion sans paraître hostile. Néanmoins, une négociation réussie exige de la flexibilité. Aucune des parties ne veut avoir l'impression d'être obligée de céder entièrement. Par conséquent, offrir une concession peut faire preuve de bonne volonté et aider les deux parties à parvenir à un accord provisoire. Une fois qu'un compromis viable est trouvé, les équipes peuvent ajuster leurs attentes en conséquence et procéder en toute confiance. La résolution professionnelle des conflits ne consiste pas à vaincre l'autre partie ; il s'agit de trouver une solution qui permette aux deux organisations de réussir ensemble.",
      de: "Verhandlungen sind ein wesentlicher Bestandteil des Geschäfts, insbesondere wenn Partner eine komplexe Vereinbarung erarbeiten müssen. Oft bringt eine Partei einen Einwand vor, der den Prozess vollständig zu stoppen droht. In diesen Momenten ist es entscheidend zu verstehen, welches Druckmittel Sie besitzen. Eine starke Position ermöglicht es Ihnen, die Diskussion zu lenken, ohne feindselig zu wirken. Dennoch erfordert eine erfolgreiche Verhandlung Flexibilität. Keine Seite möchte das Gefühl haben, völlig nachgeben zu müssen. Daher kann das Anbieten eines Zugeständnisses guten Willen demonstrieren und beiden Seiten helfen, eine vorläufige Einigung zu erzielen. Sobald ein machbarer Kompromiss gefunden ist, können die Teams ihre Erwartungen entsprechend anpassen und mit Zuversicht fortfahren. Bei der professionellen Konfliktlösung geht es nicht darum, die andere Partei zu besiegen. Es geht darum, eine Lösung zu finden, die es beiden Organisationen ermöglicht, gemeinsam erfolgreich zu sein.",
      tr: "Müzakere, özellikle ortakların karmaşık bir anlaşma çözmesi gerektiğinde işin ayrılmaz bir parçasıdır. Genellikle taraflardan biri süreci tamamen durdurmakla tehdit eden bir itirazı gündeme getirecektir. Bu anlarda, sahip olduğunuz kozun ne olduğunu anlamak çok önemlidir. Güçlü bir pozisyon, düşmanca görünmeden tartışmayı yönlendirmenize olanak tanır. Yine de başarılı bir müzakere esneklik gerektirir. Her iki taraf da tamamen pes etmeye zorlandığını hissetmek istemez. Bu nedenle, bir taviz vermek iyi niyeti gösterebilir ve her iki tarafın da geçici bir anlaşmaya varmasına yardımcı olabilir. Uygulanabilir bir uzlaşma bulunduğunda, ekipler beklentilerini buna göre ayarlayabilir ve güvenle ilerleyebilir. Profesyonel çatışma çözümü, diğer tarafı yenmekle ilgili değildir; her iki kuruluşun da birlikte başarılı olmasını sağlayan bir çözüm bulmakla ilgilidir.",
      ja: "交渉は、特にパートナーが複雑な合意案を練り上げる必要がある場合、ビジネスに不可欠な部分です。多くの場合、一方がプロセス全体を完全に停止させる恐れのある異議を提起します。このような時、自分がどのような影響力を持っているかを理解することが重要です。強力な立場は、敵対的に見えることなく議論を導くことを可能にします。それにもかかわらず、成功する交渉には柔軟性が必要です。どちらの側も、完全に譲歩を強いられていると感じたくはありません。したがって、譲歩を提供することは善意を示し、双方が仮の合意に達するのに役立ちます。実用的な妥協点が見つかれば、チームはそれに応じて期待を調整し、自信を持って進めることができます。専門的な対立解決は、相手を打ち負かすことではありません。それは両方の組織が共に成功できる解決策を見つけることです。"
    },
    comprehensionQuestions: [
      {
        id: "q51_1",
        question: "What is a common threat to the negotiation process mentioned in the text?",
        options: [
          "When a party brings up an objection",
          "When neither side brings up leverage",
          "When the agreement is too viable",
          "When companies give in too quickly"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "q51_2",
        question: "Why is offering a concession useful?",
        options: [
          "It demonstrates goodwill and helps reach an agreement",
          "It forces the other side to give in entirely",
          "It proves that your leverage is weak",
          "It makes the compromise less viable"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "q51_3",
        question: "What is the true goal of professional conflict resolution?",
        options: [
          "Finding a solution where both organizations succeed",
          "Defeating the other party entirely",
          "Refusing to make any tentative changes",
          "Adjusting the agreement accordingly to ruin the partner"
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};

const output = `import { Lesson } from '../types';\n\nexport const b2Lesson51: Lesson = ${JSON.stringify(b2Lesson51, null, 2)};\n`;
fs.writeFileSync('src/data/b2-lesson-51.ts', output);
