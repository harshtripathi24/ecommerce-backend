"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("products", [
      {
        name: "Psychology of Money",
        author: "Morgan Housel",
        price: "230",
        fakePrice: "450",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/psychologyOfMoney.jpg`,
        shortDesc:
          "Delve into the psychology behind financial decisions in Morgan Housel's insightful book 'Psychology of Money'. Explore the emotional and cognitive factors that shape our relationship with wealth, debt, and investment choices.",
        longDesc:
          "In 'Psychology of Money,' renowned author Morgan Housel masterfully dissects the intricate relationship between human psychology and financial decision-making. Through captivating narratives and insightful analysis, he unravels the emotional and cognitive biases that often lead us astray when it comes to managing money. From the allure of get-rich-quick schemes to the fear of missing out, Housel examines the psychological pitfalls that can derail even the most rational individuals. With a keen eye for human behavior, this book offers invaluable insights into cultivating a healthier and more mindful approach to personal finance.",
      },
      {
        name: "Eat that Frog",
        author: "Brian Stracy",
        price: "150",
        fakePrice: "251",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/eatThatFrog.jpg`,
        shortDesc:
          "Boost your productivity with Brian Tracy's 'Eat That Frog'. Learn how to tackle your most challenging tasks first, before moving on to less important ones, and achieve more in less time.",
        longDesc:
          "In 'Eat That Frog,' author Brian Tracy shares his tried-and-true methods for increasing personal productivity and achieving more in less time. Drawing from decades of experience as a business consultant, Tracy outlines a straightforward approach to prioritizing and completing tasks efficiently. He introduces the concept of 'eating the frog,' which involves tackling the most difficult or dreaded task first thing in the morning, before moving on to smaller, easier tasks. This book is packed with practical strategies for overcoming procrastination, eliminating time-wasting activities, and developing better work habits for personal and professional success.",
      },
      {
        name: "Think and Grow Rich",
        author: "Napolean Hill",
        price: "235",
        fakePrice: "495",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/thinkAndGrowRich.jpg`,
        shortDesc:
          "Unlock the principles of success and wealth creation with Napoleon Hill's classic 'Think and Grow Rich'. Develop the right mindset and take purposeful action to achieve financial prosperity and personal fulfillment.",
        longDesc:
          "First published in 1937, 'Think and Grow Rich' by Napoleon Hill has become one of the most influential personal development books of all time. Drawing from his extensive research on successful individuals, Hill outlines a set of principles and strategies for achieving financial prosperity and personal fulfillment. The book delves into topics such as developing a burning desire, cultivating faith, creating a definite plan, and harnessing the power of the subconscious mind. With its timeless wisdom and practical advice, 'Think and Grow Rich' continues to inspire readers worldwide to unlock their full potential and attain their dreams.",
      },
      {
        name: "How to win Friends and Influence People",
        author: "Dale Carnegie",
        price: "230",
        fakePrice: "450",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/howtoWInFriends.jpg`,
        shortDesc:
          "Discover the art of building lasting relationships and influencing others with Dale Carnegie's renowned book 'How to Win Friends and Influence People'.",
        longDesc:
          "In 'How to Win Friends and Influence People,' Dale Carnegie shares timeless principles and practical advice for improving interpersonal skills and building meaningful connections with others. Through engaging stories and real-life examples, Carnegie teaches readers how to become better communicators, handle conflicts effectively, and win people over to their way of thinking. This book offers invaluable insights into understanding human behavior, enhancing charisma, and developing a persuasive personality that can open doors to personal and professional success.",
      },
      {
        name: "Thinking Fast and Slow",
        author: "Daniel Kehnman",
        price: "300",
        fakePrice: "500",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/thinkingFastAndSlow.jpg`,
        shortDesc:
          "Explore the dual nature of human thinking in Daniel Kahneman's groundbreaking work 'Thinking Fast and Slow'. Gain insights into the interplay between intuitive and deliberative thought processes.",
        longDesc:
          "In 'Thinking Fast and Slow,' renowned psychologist Daniel Kahneman takes readers on a fascinating journey into the depths of human decision-making. Through thought-provoking research and compelling narratives, he unveils the two systems that govern our thinking: the fast, intuitive system and the slow, deliberative system. Kahneman explores the biases and heuristics that shape our judgments and choices, shedding light on the cognitive illusions that often lead us astray. This seminal work provides invaluable insights into understanding our own thought processes, enabling us to make better decisions and overcome the pitfalls of irrational thinking.",
      },
      {
        name: "Range",
        author: "David Epstien",
        price: "399",
        fakePrice: "699",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/range.jpg`,
        shortDesc:
          "Discover the power of diverse experiences in David Epstein's 'Range'. Learn how embracing a broad range of knowledge and skills can lead to remarkable achievements.",
        longDesc:
          "In 'Range,' author David Epstein challenges the conventional wisdom that specialization is the key to success. Through captivating stories and compelling research, he explores the benefits of being a generalist and cultivating a diverse set of experiences and perspectives. Epstein argues that the ability to draw from a broad range of knowledge and skills can lead to innovative solutions, better decision-making, and remarkable achievements across various domains. This thought-provoking book encourages readers to embrace versatility, adapt to changing circumstances, and embrace the power of range.",
      },
      {
        name: "It Ends with Us",
        author: "Colen Hoover",
        price: "159",
        fakePrice: "230",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/itEndsWithUS.jpg`,
        shortDesc:
          "Delve into the heart-wrenching and powerful novel 'It Ends with Us' by Colleen Hoover, a gripping exploration of love, resilience, and the complexities of relationships.",
        longDesc:
          "In 'It Ends with Us,' Colleen Hoover takes readers on an emotional journey through the life of Lily Bloom, a young woman trapped in a cycle of love and abuse. With raw honesty and compelling storytelling, Hoover sheds light on the intricacies of domestic violence, the strength of the human spirit, and the profound impact of choices made in the name of love. This poignant novel explores the depths of human emotion, offering a poignant reminder of the power of hope and the resilience of the human heart.",
      },
      {
        name: "Love Unscripted",
        author: "Own Nicholls",
        price: "229",
        fakePrice: "435",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/loveUnscripted.webp`,
        shortDesc:
          "Embark on a heartwarming journey with Owen Nicholls' 'Love Unscripted', a romantic tale that celebrates the magic of love and the power of seizing second chances.",
        longDesc:
          "In 'Love Unscripted,' Owen Nicholls weaves a delightful and heartwarming story that will captivate readers of all ages. The novel follows the lives of two individuals who unexpectedly find themselves drawn together by the magic of cinema and the power of love. With witty dialogue, endearing characters, and a touch of nostalgia, Nicholls creates a charming narrative that celebrates the beauty of embracing unexpected opportunities and the resilience of the human spirit. This feel-good novel is a delightful escape into a world of romance, laughter, and the pursuit of dreams.",
      },

      {
        name: "Black Forest",
        author: "Shane Lee",
        price: "230",
        fakePrice: "450",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/blackForest.jpg`,
        shortDesc:
          "Immerse yourself in the dark and captivating world of Shane Lee's 'Black Forest', a thrilling fantasy novel that takes you on an unforgettable adventure.",
        longDesc:
          "In 'Black Forest,' author Shane Lee weaves a rich tapestry of fantasy, intrigue, and adventure. Set in a world where ancient magic intertwines with modern realities, this novel follows the journey of a unlikely hero as they navigate treacherous paths and confront powerful forces. With vivid worldbuilding, complex characters, and a gripping narrative, 'Black Forest' draws readers into a realm of wonder and danger. Lee's masterful storytelling and imaginative prose create an immersive experience that will captivate fantasy enthusiasts and thrill-seekers alike.",
      },
      {
        name: "Blackwing",
        author: "Ed Mckdonald",
        price: "260",
        fakePrice: "450",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/blackwing.jpg`,
        shortDesc:
          "Dive into the gritty and suspenseful world of Ed McDonald's 'Blackwing', a thrilling tale that combines elements of fantasy and noir.",
        longDesc:
          "In 'Blackwing,' Ed McDonald introduces readers to a world where magic and mystery collide. Set in a gritty and atmospheric city, the novel follows the story of a troubled military veteran turned private investigator who becomes embroiled in a dangerous web of secrets and dark forces. With rich character development, intricate worldbuilding, and a suspenseful plot, 'Blackwing' expertly blends the genres of fantasy and noir, creating a unique and captivating reading experience. McDonald's writing is both haunting and compelling, inviting readers to unravel the mysteries that lurk in the shadows.",
      },
      {
        name: "Heritage",
        author: "S.M Boyce",
        price: "290",
        fakePrice: "550",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/heritage.jpg`,
        shortDesc:
          "Embark on an epic journey through S.M. Boyce's 'Heritage', a sweeping fantasy saga that explores the depths of human courage and the power of destiny.",
        longDesc:
          "In 'Heritage,' S.M. Boyce weaves an intricate tapestry of fantasy, adventure, and the enduring bonds of family. This epic saga follows the compelling journey of a group of unlikely heroes as they navigate a world brimming with magic, ancient prophecies, and powerful forces vying for control. With richly developed characters, intricate worldbuilding, and a captivating narrative, 'Heritage' immerses readers in a tapestry of wonder and intrigue. Boyce's storytelling skills are truly remarkable, creating a vivid and immersive reading experience that will leave you longing for more.",
      },
      {
        name: "House Of Furies",
        author: "Madeleine Roux",
        price: "190",
        fakePrice: "250",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/houseOfFuries.jpg`,
        shortDesc:
          "Brace yourself for a terrifying descent into madness with Madeleine Roux's 'House of Furies', a chilling horror novel that will keep you on the edge of your seat.",
        longDesc:
          "In 'House of Furies,' Madeleine Roux crafts a spine-tingling tale of horror and suspense that will leave readers sleepless. Set in a haunted mansion with a dark and twisted history, the novel follows the harrowing experiences of a group of individuals who find themselves trapped within its cursed walls. With masterful storytelling and an atmosphere thick with dread, Roux creates a haunting narrative that will send shivers down your spine. 'House of Furies' is a must-read for horror enthusiasts, delivering a terrifying and unforgettable journey into the depths of the unknown.",
      },

      {
        name: "Pursued By a Dragons",
        author: "Linda. K Hopkins",
        price: "350",
        fakePrice: "450",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/persuedByADragon.jpg`,
        shortDesc:
          "Embark on a thrilling adventure with Linda K. Hopkins' 'Pursued By a Dragons', a captivating fantasy novel filled with magic, dragons, and an unforgettable quest.",
        longDesc:
          "In 'Pursued By a Dragons,' author Linda K. Hopkins transports readers into a world of wonder and peril. This enthralling fantasy tale follows the journey of a courageous protagonist who finds themselves unexpectedly caught in the crosshairs of a powerful dragon. With vivid descriptions, exciting action sequences, and a rich tapestry of mythical creatures, Hopkins weaves a spellbinding narrative that will keep you turning the pages. 'Pursued By a Dragons' is a must-read for fantasy enthusiasts, offering a thrilling escape into a realm where bravery and determination are put to the ultimate test.",
      },
      {
        name: "Secret and Lies",
        author: "Lynda Renham",
        price: "385",
        fakePrice: "460",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/secretAndLies.jpg`,
        shortDesc:
          "Unravel the web of deceit and intrigue in Lynda Renham's gripping thriller 'Secret and Lies', a page-turner that will keep you guessing until the very end.",
        longDesc:
          "In 'Secret and Lies,' author Lynda Renham crafts a masterful psychological thriller that will keep readers on the edge of their seats. With a plot brimming with twists and turns, the novel follows the story of a seemingly ordinary family whose lives are turned upside down when dark secrets from the past come to light. Renham's writing is taut and suspenseful, expertly weaving together a tapestry of lies, betrayal, and the lengths people will go to protect their loved ones. 'Secret and Lies' is a compelling exploration of the depths of human nature and the consequences of harboring secrets.",
      },
      {
        name: "Shadow Land",
        author: "B.B Griffith",
        price: "285",
        fakePrice: "360",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/shadowLand.jpg`,
        shortDesc:
          "Venture into the dark and enigmatic world of B.B. Griffith's 'Shadow Land', a gripping thriller that blurs the lines between reality and the supernatural.",
        longDesc:
          "In 'Shadow Land,' B.B. Griffith takes readers on a chilling journey into the unknown. Set against the backdrop of a small town with a sinister past, the novel follows the investigation of a series of mysterious disappearances that seem to defy explanation. With masterful pacing and an atmosphere thick with tension, Griffith weaves a narrative that seamlessly blends elements of suspense, horror, and the paranormal. 'Shadow Land' is a haunting exploration of the depths of human fear and the secrets that lurk in the shadows, making it a must-read for fans of spine-tingling thrillers.",
      },
      {
        name: "The Chaos of Stars",
        author: "Kiersten White",
        price: "485",
        fakePrice: "560",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/theChaosOfStars.jpg`,
        shortDesc:
          "Dive into the captivating world of ancient mythology and modern-day struggles in Kiersten White's 'The Chaos of Stars', a unique and compelling novel that will leave a lasting impression.",
        longDesc:
          "In 'The Chaos of Stars,' Kirsten White masterfully blends elements of ancient mythology with contemporary themes, creating a truly unique and captivating reading experience. The novel follows the journey of a young woman grappling with the weight of her supernatural heritage and the complexities of navigating the modern world. With lyrical prose, richly developed characters, and a thought-provoking exploration of identity and self-discovery, White crafts a compelling narrative that will resonate with readers of all ages. 'The Chaos of Stars' is a must-read for those seeking a fresh and imaginative take on the fantasy genre.",
      },

      {
        name: "The Last Chance Hotel",
        author: "Nick Thornton",
        price: "385",
        fakePrice: "460",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/theLastChanceHotel.jpg`,
        shortDesc:
          "Step into the haunting realm of Nick Thornton's 'The Last Chance Hotel', a chilling horror novel that will keep you up at night.",
        longDesc:
          "In 'The Last Chance Hotel,' author Nick Thornton masterfully crafts a tale of terror that will leave readers trembling. Set in a secluded and eerie hotel with a dark past, the novel follows the harrowing experiences of a group of unsuspecting guests who find themselves trapped within its walls. With atmospheric prose and a mounting sense of dread, Thornton weaves a narrative that will have you questioning every shadow and sound. 'The Last Chance Hotel' is a must-read for horror aficionados, delivering a spine-tingling journey into the depths of the unknown, where fear lurks around every corner.",
      },
      {
        name: "The Sleep Walker",
        author: "B.B Griffith",
        price: "485",
        fakePrice: "560",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/theSleepWalkers.webp`,
        shortDesc:
          "Brace yourself for a twisted and suspenseful ride with B.B. Griffith's 'The Sleep Walker', a gripping thriller that will keep you on the edge of your seat.",
        longDesc:
          "In 'The Sleep Walker,' B.B. Griffith takes readers on a mind-bending journey into the depths of psychological terror. The novel follows the story of a woman plagued by vivid and disturbing nightmares that begin to blur the lines between dreams and reality. With masterful pacing and an atmosphere thick with tension, Griffith weaves a narrative that will keep you guessing until the very end. 'The Sleep Walker' is a gripping exploration of the fragility of the human mind and the lengths one will go to uncover the truth, making it a must-read for fans of suspenseful and thought-provoking thrillers.",
      },
      {
        name: "Woven in Moon",
        author: "Isabel Ibanez",
        price: "185",
        fakePrice: "260",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/wovenInMoonLight.jpg`,
        shortDesc:
          "Immerse yourself in the enchanting world of Isabel Ibañez's 'Woven in Moonlight', a captivating fantasy novel that weaves together magic, romance, and cultural richness.",
        longDesc:
          "In 'Woven in Moonlight,' Isabel Ibañez creates a spellbinding tapestry of fantasy and cultural traditions. Set in a world inspired by the author's Bolivian heritage, the novel follows the journey of a young woman who discovers her true power and embarks on a quest to unravel the secrets of her past. With rich worldbuilding, vivid descriptions, and a captivating love story, Ibañez weaves a tale that celebrates the strength of female protagonists and the enduring power of family and heritage. 'Woven in Moonlight' is a must-read for fans of immersive fantasy and stories that celebrate cultural diversity.",
      },
      {
        name: "Dance with The Dead",
        author: "James Nally",
        price: "485",
        fakePrice: "560",
        options: "Hard Copy/PDF/Audio Book",
        img: `${process.env.BASE_URL}/images/product_imgs/danceWithTheDead.jpg`,
        shortDesc:
          "Prepare to be swept into a world of darkness and suspense with James Nally's 'Dance with The Dead', a gripping thriller that will keep you on the edge of your seat.",
        longDesc:
          "In 'Dance with The Dead,' author James Nally crafts a masterful thriller that blends elements of mystery, suspense, and the supernatural. The novel follows the investigation of a series of bizarre and seemingly connected deaths, leading the protagonists down a twisted path of secrets and dark forces. With taut pacing and an atmosphere thick with tension, Nally weaves a narrative that will keep you guessing until the very end. 'Dance with The Dead' is a thrilling exploration of the depths of human fear and the consequences of delving too deep into the unknown, making it a must-read for fans of suspenseful and chilling tales.",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
