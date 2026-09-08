const fs = require('fs');

const lessonsData = {
  21: {
    title: "Architecture & Design",
    readingTitle: "Designing the Modern City",
    words: [
      {
        word: "construct", pron: "/kənˈstrʌkt/", pos: "verb", 
        syn: ["build", "assemble", "erect"], col: ["construct a building", "newly constructed"],
        def: "to build something or put together different parts to form something new",
        ex1: "The city plans to construct a new bridge across the river to reduce traffic.",
        ex2: "It took them three years to construct the massive sports stadium."
      },
      {
        word: "architecture", pron: "/ˈɑː.kɪ.tek.tʃər/", pos: "noun",
        syn: ["design", "structure"], col: ["modern architecture", "study architecture"],
        def: "the art and practice of designing and making buildings",
        ex1: "She decided to study architecture because she wanted to design sustainable houses.",
        ex2: "The local architecture reflects a mix of traditional and modern styles."
      },
      {
        word: "foundation", pron: "/faʊnˈdeɪ.ʃən/", pos: "noun",
        syn: ["base", "basis"], col: ["lay the foundation", "solid foundation"],
        def: "the solid layer of cement, bricks, or stones that is put under a building to support it",
        ex1: "The builders spent weeks laying a solid foundation before adding the walls.",
        ex2: "A strong foundation is essential for a skyscraper to withstand high winds."
      },
      {
        word: "renovate", pron: "/ˈren.ə.veɪt/", pos: "verb",
        syn: ["restore", "refurbish", "remodel"], col: ["renovate a house", "newly renovated"],
        def: "to repair and improve something, especially a building",
        ex1: "They bought an old farmhouse and plan to renovate it completely.",
        ex2: "The hotel was closed for six months while the owners renovated the lobby."
      },
      {
        word: "exterior", pron: "/ɪkˈstɪə.ri.ər/", pos: "noun",
        syn: ["outside", "facade"], col: ["building exterior", "exterior design"],
        def: "the outside part of something or someone",
        ex1: "The exterior of the house was painted a bright, cheerful yellow.",
        ex2: "Although the exterior looks ancient, the inside of the castle is very modern."
      },
      {
        word: "interior", pron: "/ɪnˈtɪə.ri.ər/", pos: "noun",
        syn: ["inside", "center"], col: ["interior design", "car interior"],
        def: "the inside part of something",
        ex1: "The interior of the apartment was decorated in a minimalist style.",
        ex2: "We need to hire an expert to help us plan the interior of the new office."
      },
      {
        word: "dimension", pron: "/daɪˈmen.ʃən/", pos: "noun",
        syn: ["measurement", "size", "proportion"], col: ["exact dimensions", "measure the dimensions"],
        def: "a measurement of something in a particular direction, especially its height, length, or width",
        ex1: "Please check the exact dimensions of the room before you buy the furniture.",
        ex2: "The architect carefully calculated the dimensions for the new windows."
      },
      {
        word: "sturdy", pron: "/ˈstɜː.di/", pos: "adjective",
        syn: ["strong", "solid", "durable"], col: ["sturdy table", "sturdy construction"],
        def: "physically strong and solid or thick, and therefore unlikely to break or be hurt",
        ex1: "We need a sturdy table that can hold the weight of all these heavy books.",
        ex2: "The bridge was designed with sturdy steel cables to support heavy traffic."
      },
      {
        word: "blueprint", pron: "/ˈbluː.prɪnt/", pos: "noun",
        syn: ["plan", "design", "scheme"], col: ["original blueprint", "draw up a blueprint"],
        def: "a photographic copy of an early plan for a building or machine",
        ex1: "The lead engineer examined the blueprint to find out where the pipes should go.",
        ex2: "Before starting construction, the team had to wait for the final blueprint to be approved."
      },
      {
        word: "monument", pron: "/ˈmɒn.jə.mənt/", pos: "noun",
        syn: ["memorial", "statue"], col: ["historic monument", "national monument"],
        def: "a structure or building that is built to honour a special person or event",
        ex1: "The city built a huge marble monument to remember the soldiers who fought in the war.",
        ex2: "Tourists gathered around the ancient monument to take photographs."
      }
    ]
  },
  22: {
    title: "Entertainment & Performance",
    readingTitle: "Behind the Curtains",
    words: [
      {
        word: "rehearsal", pron: "/rɪˈhɜː.səl/", pos: "noun",
        syn: ["practice", "run-through"], col: ["dress rehearsal", "choir rehearsal"],
        def: "a time when all the people involved in a play, dance, etc. practice in order to prepare for a performance",
        ex1: "The actors were exhausted after a six-hour rehearsal for the new play.",
        ex2: "We need to schedule one more rehearsal before the opening night."
      },
      {
        word: "premiere", pron: "/ˈprem.i.eər/", pos: "noun",
        syn: ["opening", "debut"], col: ["world premiere", "movie premiere"],
        def: "the first public performance of a play or any other type of entertainment",
        ex1: "Many famous actors attended the premiere of the new action movie in London.",
        ex2: "The director was very nervous before the theater premiere of her first play."
      },
      {
        word: "script", pron: "/skrɪpt/", pos: "noun",
        syn: ["screenplay", "text"], col: ["movie script", "memorize the script"],
        def: "the words of a film, play, broadcast, or speech",
        ex1: "The actor spent all weekend trying to memorize his lines from the script.",
        ex2: "The writer had to revise the script multiple times before the producer was satisfied."
      },
      {
        word: "portray", pron: "/pɔːˈtreɪ/", pos: "verb",
        syn: ["depict", "represent", "play"], col: ["portray a character", "accurately portray"],
        def: "to represent or describe someone or something in a painting, film, book, or other artistic work",
        ex1: "The actor won an award for the way he managed to portray the historical figure.",
        ex2: "The novel portrays the struggles of a young artist living in a big city."
      },
      {
        word: "applause", pron: "/əˈplɔːz/", pos: "noun",
        syn: ["clapping", "cheering", "ovation"], col: ["loud applause", "round of applause"],
        def: "the sound of people clapping their hands repeatedly to show enjoyment or approval of something such as a performance or speech",
        ex1: "The singer smiled warmly as the loud applause filled the concert hall.",
        ex2: "At the end of the presentation, the audience gave the speaker a massive round of applause."
      },
      {
        word: "venue", pron: "/ˈven.juː/", pos: "noun",
        syn: ["location", "site", "place"], col: ["concert venue", "wedding venue"],
        def: "the place where a public event or meeting happens",
        ex1: "They are still looking for a suitable venue to host the international technology conference.",
        ex2: "The band decided to play at a smaller, more intimate venue for their next concert."
      },
      {
        word: "spectacle", pron: "/ˈspek.tə.kəl/", pos: "noun",
        syn: ["show", "display", "extravaganza"], col: ["magnificent spectacle", "public spectacle"],
        def: "an unusual or unexpected event or situation that attracts attention, interest, or disapproval",
        ex1: "The opening ceremony of the Olympic Games was a magnificent spectacle of light and music.",
        ex2: "The fireworks display over the river created a beautiful nighttime spectacle."
      },
      {
        word: "orchestra", pron: "/ˈɔː.kɪ.strə/", pos: "noun",
        syn: ["band", "ensemble"], col: ["symphony orchestra", "conduct an orchestra"],
        def: "a large group of musicians who play many different instruments together and are led by a conductor",
        ex1: "The local orchestra performed a beautiful classical piece at the summer festival.",
        ex2: "She has been playing the violin in the national orchestra for over ten years."
      },
      {
        word: "amateur", pron: "/ˈæm.ə.tər/", pos: "adjective",
        syn: ["non-professional", "beginner"], col: ["amateur photographer", "amateur dramatic society"],
        def: "taking part in an activity for pleasure, not as a job",
        ex1: "The amateur photographer managed to take an award-winning picture of the sunset.",
        ex2: "Although they are an amateur theatre group, their performances are always excellent."
      },
      {
        word: "audition", pron: "/ɔːˈdɪʃ.ən/", pos: "noun",
        syn: ["trial", "test", "tryout"], col: ["pass an audition", "hold an audition"],
        def: "a short performance that an actor, musician, dancer, etc. gives in order to show they are suitable for a particular play, film, show, etc.",
        ex1: "She was extremely nervous before her audition for the lead role in the musical.",
        ex2: "The director held an open audition to find new talent for the upcoming movie."
      }
    ]
  },
  23: {
    title: "Crime & Investigation",
    readingTitle: "The Mystery of the Stolen Painting",
    words: [
      {
        word: "suspect", pron: "/ˈsʌs.pekt/", pos: "noun",
        syn: ["accused", "defendant"], col: ["prime suspect", "arrest a suspect"],
        def: "a person believed to have committed a crime or done something wrong",
        ex1: "The police questioned the main suspect for several hours but eventually let him go.",
        ex2: "They are still searching for a suspect who was seen leaving the bank yesterday."
      },
      {
        word: "motive", pron: "/ˈməʊ.tɪv/", pos: "noun",
        syn: ["reason", "intention", "purpose"], col: ["ulterior motive", "hidden motive"],
        def: "a reason for doing something",
        ex1: "The detectives could not figure out the motive for the crime, as nothing was stolen.",
        ex2: "She claimed she had no hidden motive and only wanted to help her friend."
      },
      {
        word: "trace", pron: "/treɪs/", pos: "verb",
        syn: ["track", "discover", "find"], col: ["trace the source", "trace back"],
        def: "to find the origin of something",
        ex1: "The police managed to trace the stolen phone using its GPS signal.",
        ex2: "Researchers are trying to trace the origins of this rare disease to understand how it spreads."
      },
      {
        word: "commit", pron: "/kəˈmɪt/", pos: "verb",
        syn: ["perform", "execute"], col: ["commit a crime", "commit murder"],
        def: "to do something illegal or something that is considered wrong",
        ex1: "The witness confirmed that he saw the man commit the robbery in broad daylight.",
        ex2: "People who commit serious financial fraud are often sent to prison for many years."
      },
      {
        word: "arrest", pron: "/əˈrest/", pos: "verb",
        syn: ["capture", "detain", "apprehend"], col: ["arrest a criminal", "under arrest"],
        def: "If the police arrest someone, they take them away to ask them about a crime that they might have committed",
        ex1: "The police had to arrest the driver because he was causing a danger on the highway.",
        ex2: "They plan to arrest the gang leader as soon as they have enough solid evidence."
      },
      {
        word: "smuggle", pron: "/ˈsmʌɡ.əl/", pos: "verb",
        syn: ["sneak", "hide", "import illegally"], col: ["smuggle goods", "smuggle across the border"],
        def: "to take things or people to or from a place secretly and often illegally",
        ex1: "The criminals tried to smuggle illegal goods across the border in the back of a truck.",
        ex2: "Security guards caught a passenger attempting to smuggle rare animals onto the plane."
      },
      {
        word: "kidnap", pron: "/ˈkɪd.næp/", pos: "verb",
        syn: ["abduct", "capture"], col: ["kidnap for ransom", "attempt to kidnap"],
        def: "to take a person away illegally by force, usually in order to demand money in exchange for releasing them",
        ex1: "The terrorists threatened to kidnap the diplomat if their demands were not met.",
        ex2: "Fortunately, the police prevented the gang's plan to kidnap the wealthy businessman."
      },
      {
        word: "forensic", pron: "/fəˈren.zɪk/", pos: "adjective",
        syn: ["investigative", "scientific"], col: ["forensic evidence", "forensic science"],
        def: "related to scientific methods of solving crimes, involving examining the objects or substances that are involved in the crime",
        ex1: "The forensic team collected DNA samples and fingerprints from the crime scene.",
        ex2: "Thanks to new forensic technology, police were able to solve a mystery that was decades old."
      },
      {
        word: "clue", pron: "/kluː/", pos: "noun",
        syn: ["hint", "evidence", "sign"], col: ["vital clue", "leave a clue"],
        def: "a sign or some information that helps you to find the answer to a problem, question, or mystery",
        ex1: "The detective searched the empty room hoping to find a clue about where the thief went.",
        ex2: "The footprint in the mud was a crucial clue that led them to the suspect."
      },
      {
        word: "inspector", pron: "/ɪnˈspek.tər/", pos: "noun",
        syn: ["investigator", "detective", "examiner"], col: ["police inspector", "health inspector"],
        def: "someone whose job is to officially inspect something, or a police officer of middle rank",
        ex1: "The police inspector ordered his team to secure the building immediately.",
        ex2: "A health inspector visited the restaurant to make sure the kitchen was perfectly clean."
      }
    ]
  },
  24: {
    title: "Space Exploration",
    readingTitle: "Journey into the Unknown",
    words: [
      {
        word: "galaxy", pron: "/ˈɡæl.ək.si/", pos: "noun",
        syn: ["star system", "universe"], col: ["distant galaxy", "spiral galaxy"],
        def: "one of the independent groups of stars in the universe",
        ex1: "Our solar system is just a tiny part of the Milky Way galaxy.",
        ex2: "Astronomers have discovered a new galaxy that is billions of light-years away."
      },
      {
        word: "gravity", pron: "/ˈɡræv.ə.ti/", pos: "noun",
        syn: ["pull", "attraction"], col: ["zero gravity", "force of gravity"],
        def: "the force that attracts objects towards one another, especially the force that makes things fall to the ground",
        ex1: "Because the moon is smaller than Earth, its gravity is much weaker.",
        ex2: "Astronauts float in space because they are in an environment with zero gravity."
      },
      {
        word: "orbit", pron: "/ˈɔː.bɪt/", pos: "noun",
        syn: ["path", "trajectory", "revolution"], col: ["Earth's orbit", "go into orbit"],
        def: "the curved path through which objects in space move around a planet or star",
        ex1: "The satellite was successfully placed into orbit around the Earth.",
        ex2: "It takes the Earth one full year to complete its orbit around the Sun."
      },
      {
        word: "telescope", pron: "/ˈtel.ɪ.skəʊp/", pos: "noun",
        syn: ["spyglass"], col: ["powerful telescope", "space telescope"],
        def: "a cylinder-shaped device for making objects that are far away look closer and larger",
        ex1: "Through his new telescope, he could clearly see the rings of Saturn.",
        ex2: "The giant space telescope orbits the Earth, sending back incredible pictures of distant stars."
      },
      {
        word: "astronaut", pron: "/ˈæs.trə.nɔːt/", pos: "noun",
        syn: ["spaceman", "cosmonaut"], col: ["experienced astronaut", "astronaut training"],
        def: "a person who has been trained for travelling in space",
        ex1: "Becoming an astronaut requires years of intense physical and scientific training.",
        ex2: "The astronaut floated out of the spaceship to perform repairs on the outer hull."
      },
      {
        word: "eclipse", pron: "/ɪˈklɪps/", pos: "noun",
        syn: ["blocking", "obscuring"], col: ["solar eclipse", "lunar eclipse"],
        def: "an occasion when the sun disappears from view, either completely or partly, while the moon is moving between it and the earth, or when the moon becomes darker while the shadow of the earth moves over it",
        ex1: "Millions of people gathered outside to watch the rare solar eclipse.",
        ex2: "During a total lunar eclipse, the moon can sometimes appear completely red."
      },
      {
        word: "cosmic", pron: "/ˈkɒz.mɪk/", pos: "adjective",
        syn: ["universal", "extraterrestrial"], col: ["cosmic dust", "cosmic rays"],
        def: "relating to the universe and the natural processes that happen in it",
        ex1: "Scientists are studying cosmic rays to understand more about how the universe was formed.",
        ex2: "The explosion of a star is a cosmic event of unimaginable power."
      },
      {
        word: "satellite", pron: "/ˈsæt.əl.aɪt/", pos: "noun",
        syn: ["spacecraft", "moon"], col: ["weather satellite", "communications satellite"],
        def: "a device sent up into space to travel around the earth, used for collecting information or communicating by radio, television, etc.",
        ex1: "Our GPS navigation systems rely on signals sent from a network of satellites in space.",
        ex2: "The weather satellite sent back images showing a massive storm approaching the coast."
      },
      {
        word: "asteroid", pron: "/ˈæs.tər.ɔɪd/", pos: "noun",
        syn: ["meteoroid", "space rock"], col: ["massive asteroid", "asteroid belt"],
        def: "one of many large rocks that circle the sun",
        ex1: "Many scientists believe that a giant asteroid impact caused the extinction of the dinosaurs.",
        ex2: "The telescope tracked a large asteroid passing safely between the Earth and the Moon."
      },
      {
        word: "launch", pron: "/lɔːntʃ/", pos: "verb",
        syn: ["send off", "shoot", "initiate"], col: ["launch a rocket", "successful launch"],
        def: "to send something out, such as a new ship into the water or a spacecraft into space",
        ex1: "The space agency plans to launch the new rocket into orbit early next week.",
        ex2: "Crowds gathered at the base to watch them launch the spacecraft towards Mars."
      }
    ]
  }
};

fs.writeFileSync('lessonsData.json', JSON.stringify(lessonsData, null, 2));
