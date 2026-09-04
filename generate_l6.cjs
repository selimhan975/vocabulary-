const fs = require('fs');

const lesson6 = `import { Lesson } from '../types';

export const b2Lesson6: Lesson = {
  id: 'b2-l6',
  level: 'B2',
  number: 6,
  title: 'Education & Research',
  words: [
    {
      id: 'w51',
      word: 'analyze',
      pronunciation: '/ˈænəlaɪz/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['examine', 'evaluate', 'inspect'],
      collocations: ['analyze data', 'carefully analyze'],
      translations: { ru: 'анализировать', zh: '分析', es: 'analizar', fr: 'analyser', de: 'analysieren', tr: 'analiz etmek', ja: '分析する' },
      meanings: [
        {
          id: 'w51-m1',
          definition: 'to study or examine something in detail in order to discover or understand more about it',
          translation: { ru: 'детально изучать или рассматривать что-либо, чтобы узнать или понять больше об этом', zh: '详细研究或检查某事物，以期发现或了解更多', es: 'estudiar o examinar algo en detalle para descubrir o comprender más sobre ello', fr: 'étudier ou examiner quelque chose en détail afin d\\'en découvrir ou d\\'en comprendre davantage', de: 'etwas im Detail studieren oder untersuchen, um mehr darüber herauszufinden oder zu verstehen', tr: 'hakkında daha fazla şey keşfetmek veya anlamak için bir şeyi ayrıntılı olarak incelemek veya araştırmak', ja: 'それについてさらに発見したり理解したりするために、何かを詳細に研究または調査すること' },
          examples: [
            {
              id: 'w51-m1-e1',
              sentence: 'Researchers are trying to analyze the long-term effects of this new medication.',
              translation: { ru: 'Исследователи пытаются проанализировать долгосрочные эффекты этого нового лекарства.', zh: '研究人员正试图分析这种新药的长期影响。', es: 'Los investigadores están tratando de analizar los efectos a largo plazo de este nuevo medicamento.', fr: 'Les chercheurs tentent d\\'analyser les effets à long terme de ce nouveau médicament.', de: 'Forscher versuchen, die langfristigen Auswirkungen dieses neuen Medikaments zu analysieren.', tr: 'Araştırmacılar bu yeni ilacın uzun vadeli etkilerini analiz etmeye çalışıyorlar.', ja: '研究者たちは、この新薬の長期的な影響を分析しようとしています。' }
            },
            {
              id: 'w51-m1-e2',
              sentence: 'We need to analyze the customer feedback before we decide on the next steps.',
              translation: { ru: 'Нам нужно проанализировать отзывы клиентов, прежде чем мы примем решение о следующих шагах.', zh: '在决定下一步行动之前，我们需要分析客户反馈。', es: 'Necesitamos analizar los comentarios de los clientes antes de decidir los próximos pasos.', fr: 'Nous devons analyser les commentaires des clients avant de décider des prochaines étapes.', de: 'Wir müssen das Kundenfeedback analysieren, bevor wir über die nächsten Schritte entscheiden.', tr: 'Sonraki adımlara karar vermeden önce müşteri geri bildirimlerini analiz etmemiz gerekiyor.', ja: '次のステップを決定する前に、顧客からのフィードバックを分析する必要があります。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w52',
      word: 'valid',
      pronunciation: '/ˈvælɪd/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['legitimate', 'reasonable', 'sound'],
      collocations: ['valid point', 'valid passport'],
      translations: { ru: 'действительный / обоснованный', zh: '有效的 / 有根据的', es: 'válido', fr: 'valide', de: 'gültig', tr: 'geçerli', ja: '有効な / 妥当な' },
      meanings: [
        {
          id: 'w52-m1',
          definition: 'based on truth or reason; able to be accepted',
          translation: { ru: 'основанный на истине или разуме; могущий быть принятым', zh: '基于事实或理由的；可以被接受的', es: 'basado en la verdad o la razón; capaz de ser aceptado', fr: 'basé sur la vérité ou la raison ; capable d\\'être accepté', de: 'auf Wahrheit oder Vernunft beruhend; akzeptabel', tr: 'gerçeğe veya mantığa dayalı; kabul edilebilir', ja: '真実または理に基づいている。受け入れられる' },
          examples: [
            {
              id: 'w52-m1-e1',
              sentence: 'She made a very valid point during the discussion.',
              translation: { ru: 'Она высказала очень обоснованное замечание во время дискуссии.', zh: '在讨论中，她提出了一个非常合理的观点。', es: 'Hizo un punto muy válido durante la discusión.', fr: 'Elle a soulevé un point très valide lors de la discussion.', de: 'Sie hat während der Diskussion einen sehr validen Punkt vorgebracht.', tr: 'Tartışma sırasında çok geçerli bir noktaya değindi.', ja: '彼女は議論の最中に非常に妥当な指摘をしました。' }
            },
            {
              id: 'w52-m1-e2',
              sentence: 'Your ticket is no longer valid because it expired yesterday.',
              translation: { ru: 'Ваш билет больше не действителен, так как срок его действия истек вчера.', zh: '您的票已不再有效，因为它昨天就过期了。', es: 'Su boleto ya no es válido porque expiró ayer.', fr: 'Votre billet n\\'est plus valide car il a expiré hier.', de: 'Ihr Ticket ist nicht mehr gültig, da es gestern abgelaufen ist.', tr: 'Biletiniz dün sona erdiği için artık geçerli değil.', ja: 'あなたのチケットは昨日期限切れになったため、もう有効ではありません。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w53',
      word: 'theory',
      pronunciation: '/ˈθɪəri/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['hypothesis', 'concept', 'idea'],
      collocations: ['scientific theory', 'in theory'],
      translations: { ru: 'теория', zh: '理论', es: 'teoría', fr: 'théorie', de: 'Theorie', tr: 'teori', ja: '理論' },
      meanings: [
        {
          id: 'w53-m1',
          definition: 'a formal statement of the rules on which a subject of study is based or of ideas that are suggested to explain a fact or event',
          translation: { ru: 'формальное изложение правил, на которых основывается предмет изучения, или идей, предлагаемых для объяснения факта или события', zh: '关于研究学科所基于的规则，或旨在解释事实或事件的思想的正式陈述', es: 'una declaración formal de las reglas en las que se basa un tema de estudio o de las ideas que se sugieren para explicar un hecho o evento', fr: 'un énoncé formel des règles sur lesquelles repose un sujet d\\'étude ou des idées suggérées pour expliquer un fait ou un événement', de: 'eine formelle Aussage über die Regeln, auf denen ein Studienfach basiert, oder über Ideen, die zur Erklärung einer Tatsache oder eines Ereignisses vorgeschlagen werden', tr: 'bir çalışma konusunun dayandığı kuralların veya bir gerçeği veya olayı açıklamak için öne sürülen fikirlerin resmi bir ifadesi', ja: '研究テーマが基づいている規則、または事実や出来事を説明するために提案されているアイデアの正式な記述' },
          examples: [
            {
              id: 'w53-m1-e1',
              sentence: 'Einstein\\'s theory of relativity completely changed our understanding of the universe.',
              translation: { ru: 'Теория относительности Эйнштейна полностью изменила наше понимание Вселенной.', zh: '爱因斯坦的相对论完全改变了我们对宇宙的理解。', es: 'La teoría de la relatividad de Einstein cambió completamente nuestra comprensión del universo.', fr: 'La théorie de la relativité d\\'Einstein a complètement changé notre compréhension de l\\'univers.', de: 'Einsteins Relativitätstheorie hat unser Verständnis des Universums komplett verändert.', tr: 'Einstein\\'in görelilik teorisi evren anlayışımızı tamamen değiştirdi.', ja: 'アインシュタインの相対性理論は、私たちの宇宙に対する理解を完全に変えました。' }
            },
            {
              id: 'w53-m1-e2',
              sentence: 'In theory, this should work, but we will have to test it in practice.',
              translation: { ru: 'Теоретически это должно сработать, но нам придется проверить это на практике.', zh: '理论上，这应该可行，但我们必须在实践中对其进行测试。', es: 'En teoría, esto debería funcionar, pero tendremos que probarlo en la práctica.', fr: 'En théorie, cela devrait fonctionner, mais nous devrons le tester dans la pratique.', de: 'Theoretisch sollte das funktionieren, aber wir müssen es in der Praxis testen.', tr: 'Teoride bu işe yaramalı, ancak pratikte test etmemiz gerekecek.', ja: '理論的にはこれは機能するはずですが、実際にテストする必要があります。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w54',
      word: 'establish',
      pronunciation: '/ɪˈstæblɪʃ/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['set up', 'found', 'create'],
      collocations: ['establish a business', 'firmly establish'],
      translations: { ru: 'основывать / устанавливать', zh: '建立 / 确立', es: 'establecer', fr: 'établir', de: 'gründen / etablieren', tr: 'kurmak / belirlemek', ja: '設立する / 確立する' },
      meanings: [
        {
          id: 'w54-m1',
          definition: 'to start a company or organization that will continue for a long time',
          translation: { ru: 'создать компанию или организацию, которая будет существовать долгое время', zh: '创办一家将长期存在的公司或组织', es: 'iniciar una empresa u organización que continuará durante mucho tiempo', fr: 'créer une entreprise ou une organisation qui continuera pendant longtemps', de: 'ein Unternehmen oder eine Organisation gründen, die für lange Zeit bestehen bleibt', tr: 'uzun süre devam edecek bir şirket veya kuruluş kurmak', ja: '長期間存続する会社や組織を立ち上げる' },
          examples: [
            {
              id: 'w54-m1-e1',
              sentence: 'The new charity was established to help children in poverty.',
              translation: { ru: 'Новая благотворительная организация была основана для помощи детям, живущим в бедности.', zh: '这个新的慈善机构是为了帮助贫困儿童而设立的。', es: 'La nueva organización benéfica se estableció para ayudar a los niños en la pobreza.', fr: 'La nouvelle association caritative a été créée pour aider les enfants pauvres.', de: 'Die neue Wohltätigkeitsorganisation wurde gegründet, um Kindern in Armut zu helfen.', tr: 'Yeni yardım kuruluşu yoksulluk içindeki çocuklara yardım etmek için kuruldu.', ja: 'その新しい慈善団体は、貧困にあえぐ子供たちを助けるために設立されました。' }
            },
            {
              id: 'w54-m1-e2',
              sentence: 'They hope to establish a successful business in the local area.',
              translation: { ru: 'Они надеются создать успешный бизнес в этом районе.', zh: '他们希望在当地建立一家成功的企业。', es: 'Esperan establecer un negocio exitoso en el área local.', fr: 'Ils espèrent établir une entreprise prospère dans la région.', de: 'Sie hoffen, ein erfolgreiches Unternehmen in der Region zu etablieren.', tr: 'Bölgede başarılı bir iş kurmayı umuyorlar.', ja: '彼らは地元で成功するビジネスを確立したいと願っています。' }
            }
          ]
        },
        {
          id: 'w54-m2',
          definition: 'to discover or get proof of something',
          translation: { ru: 'обнаружить или получить доказательство чего-либо', zh: '发现或获得某事的证据', es: 'descubrir u obtener pruebas de algo', fr: 'découvrir ou obtenir la preuve de quelque chose', de: 'etwas entdecken oder einen Beweis dafür bekommen', tr: 'bir şeyi keşfetmek veya kanıtını elde etmek', ja: '何かを発見する、またはその証拠を得る' },
          examples: [
            {
              id: 'w54-m2-e1',
              sentence: 'The police have yet to establish the cause of the fire.',
              translation: { ru: 'Полиции еще предстоит установить причину пожара.', zh: '警方尚未查明起火原因。', es: 'La policía aún tiene que establecer la causa del incendio.', fr: 'La police n\\'a pas encore établi la cause de l\\'incendie.', de: 'Die Polizei muss die Brandursache noch ermitteln.', tr: 'Polis yangının nedenini henüz belirleyemedi.', ja: '警察はまだ火災の原因を特定していません。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w55',
      word: 'fundamental',
      pronunciation: '/ˌfʌndəˈmɛntl/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['basic', 'essential', 'primary'],
      collocations: ['fundamental difference', 'fundamental human rights'],
      translations: { ru: 'фундаментальный / основной', zh: '基本的 / 根本的', es: 'fundamental', fr: 'fondamental', de: 'grundlegend', tr: 'temel', ja: '基本的な' },
      meanings: [
        {
          id: 'w55-m1',
          definition: 'forming the base, from which everything else develops; more important than anything else',
          translation: { ru: 'образующий основу, из которой развивается все остальное; более важный, чем что-либо еще', zh: '构成基础的，其他一切都由此发展而来；比其他任何事情都重要', es: 'formando la base, a partir de la cual se desarrolla todo lo demás; más importante que cualquier otra cosa', fr: 'formant la base, à partir de laquelle tout le reste se développe; plus important que tout autre chose', de: 'die Basis bilden, aus der sich alles andere entwickelt; wichtiger als alles andere', tr: 'başka her şeyin ondan geliştiği temeli oluşturan; başka her şeyden daha önemli olan', ja: '他のすべてが発展する基盤を形成する。他の何よりも重要な' },
          examples: [
            {
              id: 'w55-m1-e1',
              sentence: 'Freedom of speech is a fundamental right in any democratic society.',
              translation: { ru: 'Свобода слова — это фундаментальное право в любом демократическом обществе.', zh: '言论自由是任何民主社会的基本权利。', es: 'La libertad de expresión es un derecho fundamental en cualquier sociedad democrática.', fr: 'La liberté d\\'expression est un droit fondamental dans toute société démocratique.', de: 'Meinungsfreiheit ist ein Grundrecht in jeder demokratischen Gesellschaft.', tr: 'İfade özgürlüğü demokratik bir toplumda temel bir haktır.', ja: '言論の自由は、いかなる民主主義社会においても基本的な権利です。' }
            },
            {
              id: 'w55-m1-e2',
              sentence: 'There is a fundamental difference between their two approaches to teaching.',
              translation: { ru: 'Между их двумя подходами к преподаванию существует фундаментальное различие.', zh: '他们两种教学方法之间存在根本的区别。', es: 'Hay una diferencia fundamental entre sus dos enfoques de enseñanza.', fr: 'Il y a une différence fondamentale entre leurs deux approches de l\\'enseignement.', de: 'Es gibt einen grundlegenden Unterschied zwischen ihren beiden Lehransätzen.', tr: 'Öğretme yaklaşımları arasında temel bir fark var.', ja: '彼らの2つの指導方法には根本的な違いがあります。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w56',
      word: 'abstract',
      pronunciation: '/ˈæbstrækt/',
      partOfSpeech: 'adjective',
      level: 'B2',
      synonyms: ['theoretical', 'conceptual', 'non-concrete'],
      collocations: ['abstract concept', 'abstract art'],
      translations: { ru: 'абстрактный', zh: '抽象的', es: 'abstracto', fr: 'abstrait', de: 'abstrakt', tr: 'soyut', ja: '抽象的な' },
      meanings: [
        {
          id: 'w56-m1',
          definition: 'existing as an idea, feeling, or quality, not as a material object',
          translation: { ru: 'существующий как идея, чувство или качество, а не как материальный объект', zh: '作为一种观念、感觉或品质而存在，而不是作为一种物质对象而存在', es: 'existente como una idea, sentimiento o cualidad, no como un objeto material', fr: 'existant comme une idée, un sentiment ou une qualité, et non comme un objet matériel', de: 'als Idee, Gefühl oder Qualität existierend, nicht als materielles Objekt', tr: 'maddi bir nesne olarak değil, bir fikir, his veya nitelik olarak var olan', ja: '物質的な対象としてではなく、アイデア、感情、または性質として存在している' },
          examples: [
            {
              id: 'w56-m1-e1',
              sentence: 'Truth and beauty are abstract concepts that can be hard to define.',
              translation: { ru: 'Истина и красота — абстрактные понятия, которые бывает трудно определить.', zh: '真理和美是难以定义的抽象概念。', es: 'La verdad y la belleza son conceptos abstractos que pueden ser difíciles de definir.', fr: 'La vérité et la beauté sont des concepts abstraits qui peuvent être difficiles à définir.', de: 'Wahrheit und Schönheit sind abstrakte Konzepte, die schwer zu definieren sind.', tr: 'Gerçek ve güzellik, tanımlanması zor olabilen soyut kavramlardır.', ja: '真実と美は、定義するのが難しい抽象的な概念です。' }
            },
            {
              id: 'w56-m1-e2',
              sentence: 'Children often find it difficult to understand abstract mathematical ideas.',
              translation: { ru: 'Детям часто бывает трудно понять абстрактные математические идеи.', zh: '孩子们经常发现很难理解抽象的数学概念。', es: 'Los niños a menudo encuentran difícil entender las ideas matemáticas abstractas.', fr: 'Les enfants trouvent souvent difficile de comprendre les idées mathématiques abstraites.', de: 'Kindern fällt es oft schwer, abstrakte mathematische Ideen zu verstehen.', tr: 'Çocuklar soyut matematiksel fikirleri anlamakta sıklıkla zorlanırlar.', ja: '子供たちは抽象的な数学の概念を理解するのに苦労することがよくあります。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w57',
      word: 'concept',
      pronunciation: '/ˈkɒnsɛpt/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['idea', 'notion', 'principle'],
      collocations: ['basic concept', 'new concept'],
      translations: { ru: 'концепция / понятие', zh: '概念 / 观念', es: 'concepto', fr: 'concept', de: 'Konzept / Begriff', tr: 'kavram', ja: '概念' },
      meanings: [
        {
          id: 'w57-m1',
          definition: 'a principle or idea',
          translation: { ru: 'принцип или идея', zh: '原则或想法', es: 'un principio o idea', fr: 'un principe ou une idée', de: 'ein Prinzip oder eine Idee', tr: 'bir ilke veya fikir', ja: '原則またはアイデア' },
          examples: [
            {
              id: 'w57-m1-e1',
              sentence: 'It is very difficult to define the concept of beauty.',
              translation: { ru: 'Очень сложно определить понятие красоты.', zh: '很难定义美的概念。', es: 'Es muy difícil definir el concepto de belleza.', fr: 'Il est très difficile de définir le concept de beauté.', de: 'Es ist sehr schwierig, den Begriff der Schönheit zu definieren.', tr: 'Güzellik kavramını tanımlamak çok zordur.', ja: '美の概念を定義することは非常に困難です。' }
            },
            {
              id: 'w57-m1-e2',
              sentence: 'The whole concept of a free market is based on supply and demand.',
              translation: { ru: 'Вся концепция свободного рынка основана на спросе и предложении.', zh: '自由市场的整个概念是基于供求关系的。', es: 'Todo el concepto de un mercado libre se basa en la oferta y la demanda.', fr: 'L\\'ensemble du concept d\\'un marché libre est basé sur l\\'offre et la demande.', de: 'Das gesamte Konzept eines freien Marktes basiert auf Angebot und Nachfrage.', tr: 'Serbest pazarın tüm konsepti arz ve talebe dayanmaktadır.', ja: '自由市場の概念全体は需要と供給に基づいています。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w58',
      word: 'assess',
      pronunciation: '/əˈsɛs/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['evaluate', 'judge', 'measure'],
      collocations: ['assess the impact', 'carefully assess'],
      translations: { ru: 'оценивать', zh: '评估 / 评定', es: 'evaluar / valorar', fr: 'évaluer', de: 'beurteilen / einschätzen', tr: 'değerlendirmek', ja: '評価する / 査定する' },
      meanings: [
        {
          id: 'w58-m1',
          definition: 'to judge or decide the amount, value, quality, or importance of something',
          translation: { ru: 'судить или определять количество, ценность, качество или важность чего-либо', zh: '判断或决定某物的数量、价值、质量或重要性', es: 'juzgar o decidir la cantidad, el valor, la calidad o la importancia de algo', fr: 'juger ou décider du montant, de la valeur, de la qualité ou de l\\'importance de quelque chose', de: 'die Menge, den Wert, die Qualität oder die Wichtigkeit von etwas beurteilen oder entscheiden', tr: 'bir şeyin miktarını, değerini, kalitesini veya önemini yargılamak veya karar vermek', ja: '何かの量、価値、品質、または重要性を判断または決定する' },
          examples: [
            {
              id: 'w58-m1-e1',
              sentence: 'Exams are not the only way to assess a student\\'s ability.',
              translation: { ru: 'Экзамены — не единственный способ оценить способности студента.', zh: '考试不是评估学生能力的唯一方法。', es: 'Los exámenes no son la única forma de evaluar la capacidad de un estudiante.', fr: 'Les examens ne sont pas le seul moyen d\\'évaluer les capacités d\\'un étudiant.', de: 'Prüfungen sind nicht die einzige Möglichkeit, die Fähigkeiten eines Schülers zu beurteilen.', tr: 'Sınavlar, bir öğrencinin yeteneğini değerlendirmenin tek yolu değildir.', ja: '試験は学生の能力を評価する唯一の方法ではありません。' }
            },
            {
              id: 'w58-m1-e2',
              sentence: 'We need to assess the full impact of the changes before moving forward.',
              translation: { ru: 'Нам нужно оценить все последствия изменений, прежде чем двигаться дальше.', zh: '在向前迈进之前，我们需要评估这些变化所产生的全面影响。', es: 'Necesitamos evaluar el impacto total de los cambios antes de avanzar.', fr: 'Nous devons évaluer l\\'impact total des changements avant d\\'aller de l\\'avant.', de: 'Wir müssen die vollen Auswirkungen der Änderungen abschätzen, bevor wir fortfahren.', tr: 'İlerlemeye devam etmeden önce değişikliklerin tam etkisini değerlendirmemiz gerekiyor.', ja: '先に進む前に、変更の全体的な影響を評価する必要があります。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w59',
      word: 'framework',
      pronunciation: '/ˈfreɪmwɜːk/',
      partOfSpeech: 'noun',
      level: 'B2',
      synonyms: ['structure', 'system', 'skeleton'],
      collocations: ['legal framework', 'theoretical framework'],
      translations: { ru: 'основа / структура / каркас', zh: '框架 / 体系', es: 'marco / estructura', fr: 'cadre', de: 'Rahmen / Struktur', tr: 'çerçeve / yapı', ja: '枠組み' },
      meanings: [
        {
          id: 'w59-m1',
          definition: 'a system of rules, ideas, or beliefs that is used to plan or decide something',
          translation: { ru: 'система правил, идей или убеждений, которая используется для планирования или принятия решений', zh: '用于计划或决定某事的规则、思想或信仰系统', es: 'un sistema de reglas, ideas o creencias que se utiliza para planificar o decidir algo', fr: 'un système de règles, d\\'idées ou de croyances utilisé pour planifier ou décider quelque chose', de: 'ein System von Regeln, Ideen oder Überzeugungen, das verwendet wird, um etwas zu planen oder zu entscheiden', tr: 'bir şeyi planlamak veya karar vermek için kullanılan bir kurallar, fikirler veya inançlar sistemi', ja: '何かを計画または決定するために使用される規則、アイデア、または信念のシステム' },
          examples: [
            {
              id: 'w59-m1-e1',
              sentence: 'The agreement provides a framework for future peace negotiations.',
              translation: { ru: 'Соглашение обеспечивает основу для будущих мирных переговоров.', zh: '该协议为未来的和平谈判提供了框架。', es: 'El acuerdo proporciona un marco para futuras negociaciones de paz.', fr: 'L\\'accord fournit un cadre pour les futures négociations de paix.', de: 'Das Abkommen bietet einen Rahmen für zukünftige Friedensverhandlungen.', tr: 'Anlaşma, gelecekteki barış müzakereleri için bir çerçeve sağlıyor.', ja: 'この合意は、将来の和平交渉の枠組みを提供します。' }
            },
            {
              id: 'w59-m1-e2',
              sentence: 'They are developing a legal framework to protect data privacy.',
              translation: { ru: 'Они разрабатывают правовую базу для защиты конфиденциальности данных.', zh: '他们正在制定保护数据隐私的法律框架。', es: 'Están desarrollando un marco legal para proteger la privacidad de los datos.', fr: 'Ils élaborent un cadre juridique pour protéger la confidentialité des données.', de: 'Sie entwickeln einen rechtlichen Rahmen zum Schutz des Datenschutzes.', tr: 'Veri gizliliğini korumak için yasal bir çerçeve geliştiriyorlar.', ja: '彼らはデータプライバシーを保護するための法的枠組みを開発しています。' }
            }
          ]
        }
      ]
    },
    {
      id: 'w60',
      word: 'investigate',
      pronunciation: '/ɪnˈvɛstɪɡeɪt/',
      partOfSpeech: 'verb',
      level: 'B2',
      synonyms: ['look into', 'examine', 'research'],
      collocations: ['investigate the cause', 'thoroughly investigate'],
      translations: { ru: 'расследовать / исследовать', zh: '调查 / 研究', es: 'investigar', fr: 'enquêter / examiner', de: 'untersuchen / ermitteln', tr: 'araştırmak / soruşturmak', ja: '調査する' },
      meanings: [
        {
          id: 'w60-m1',
          definition: 'to examine a crime, problem, statement, etc. carefully, especially to discover the truth',
          translation: { ru: 'тщательно изучать преступление, проблему, утверждение и т.д., особенно с целью выяснения истины', zh: '仔细检查犯罪、问题、陈述等，特别是为了发现真相', es: 'examinar cuidadosamente un delito, problema, declaración, etc., especialmente para descubrir la verdad', fr: 'examiner attentivement un crime, un problème, une déclaration, etc., en particulier pour découvrir la vérité', de: 'ein Verbrechen, ein Problem, eine Aussage usw. sorgfältig untersuchen, insbesondere um die Wahrheit herauszufinden', tr: 'bir suçu, sorunu, ifadeyi vb. özellikle gerçeği ortaya çıkarmak için dikkatlice incelemek', ja: '特に真実を発見するために、犯罪、問題、声明などを注意深く調べること' },
          examples: [
            {
              id: 'w60-m1-e1',
              sentence: 'The police are continuing to investigate the robbery at the local bank.',
              translation: { ru: 'Полиция продолжает расследование ограбления местного банка.', zh: '警方正在继续调查当地银行的抢劫案。', es: 'La policía continúa investigando el robo en el banco local.', fr: 'La police continue d\\'enquêter sur le vol de la banque locale.', de: 'Die Polizei ermittelt weiterhin in dem Raubüberfall auf die örtliche Bank.', tr: 'Polis, yerel bankadaki soygunu araştırmaya devam ediyor.', ja: '警察は地元銀行の強盗事件の捜査を続けています。' }
            },
            {
              id: 'w60-m1-e2',
              sentence: 'Scientists are trying to investigate the causes of this rare disease.',
              translation: { ru: 'Ученые пытаются исследовать причины этого редкого заболевания.', zh: '科学家们正试图调查这种罕见疾病的原因。', es: 'Los científicos están tratando de investigar las causas de esta rara enfermedad.', fr: 'Les scientifiques tentent d\\'enquêter sur les causes de cette maladie rare.', de: 'Wissenschaftler versuchen, die Ursachen dieser seltenen Krankheit zu untersuchen.', tr: 'Bilim adamları bu nadir hastalığın nedenlerini araştırmaya çalışıyorlar.', ja: '科学者たちは、このまれな病気の原因を調査しようとしています。' }
            }
          ]
        }
      ]
    }
  ],
  reading: {
    title: 'The Process of Scientific Discovery',
    content: "When scientists begin a new project, they must first establish a clear theoretical framework. They use this structure to organize their thoughts and ensure their methods are valid. By proposing a new theory, they attempt to explain phenomena that are otherwise difficult to understand.\n\nNext, they carefully investigate the issue, gathering as much data as possible. Often, this requires working with abstract mathematical ideas or a complex concept that is not easily visible. Once the data is collected, researchers must meticulously analyze the results. This step is fundamental to the entire process, as it allows them to assess whether their initial hypothesis was correct. The ultimate goal is to turn an unknown problem into a proven scientific fact."
  }
};
`;

fs.writeFileSync('src/data/b2-lesson-6.ts', lesson6);
