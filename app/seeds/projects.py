from app.models import db, Project


#title, description, goal, current_ammount, categories_id, user_id, image_url


def seed_projects():
    pico_speakers = Project(title='Pico Bello Speakers',
                            description="Often people who love high-quality sound have to compromise on speaker aesthetics for the sake of sound quality. \
                                        Having seen what is generally available even at the very highest prices (often in the tens of thousands of euros) \
                                        I believe there is a real gap in the market. I want to build beautiful unique wooden speakers that will look really \
                                        stunning in your living space, while also producing amazing sound.",
                            goal=7521,
                            current_amount=2000,
                            categories_id=3,
                            user_id=1,
                            image_url="https://ksr-ugc.imgix.net/assets/034/889/359/868288bc5f31471bbc831a07d8c5672d_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1631720864&auto=format&frame=1&lossless=true&s=ef81179c4441e16698fa44f8ffd04d7f")

    mythwind = Project(title='Mythwind',
                        description="Mythwind is a persistent-world, asymmetrical and cooperative boardgame where you become a pioneer in a whimsical fantasy world.",
                        goal=80222,
                        current_amount=689925,
                        categories_id=6,
                        user_id=2,
                        image_url="https://i.ytimg.com/vi/tspHA2xTHBQ/maxresdefault.jpg"
                        )

    zelda_album = Project(title='Trio of the Goddesses - Zelda Album Project',
                            description="A professionally recorded album of The Legend of Zelda by the Laurence Manning trio (piano, violin and cello)",
                            goal=7621,
                            current_amount=8860,
                            categories_id=7,
                            user_id=3,
                            image_url="https://ksr-ugc.imgix.net/assets/034/914/804/bbfee37aff368eef9395d5ef0af8f484_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1631893616&auto=format&frame=1&lossless=true&s=466a30bfa3708edf6ebe758243a31764")

    somie = Project(title='Somi-1',
                    description='Transform the everyday into play with these wireless wearables to control music via movements',
                    goal=57998,
                    current_amount=53922,
                    categories_id=3,
                    user_id=4,
                    image_url='https://ksr-ugc.imgix.net/assets/034/565/548/4d49b2099c294e121c7e8d524ac2d8b2_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1629294404&auto=format&frame=1&q=92&s=949ebe8034918c60230c0d5f8791ae74')
    batmobile = Project(title='CircuitMess Batmobile™',
                    description='Become a STEM Super Hero while exploring the world of electronics and programming',
                    goal=15000,
                    current_amount=224594,
                    categories_id=3,
                    user_id=4,
                    image_url='https://ksr-ugc.imgix.net/assets/035/116/931/57077f8098b782a8112564305297950d_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1633391610&auto=format&frame=1&q=92&s=e58572af21aed98832591419718678d5')
    pivo = Project(title='Pivo Pod X',
                    description='Ypur pocket-sized cameraman. Capture, share, play. Your way. Auto Tracking, Cinematic AI, Composition AI, Auto Zoom & many more features.',
                    goal=100000,
                    current_amount=261338,
                    categories_id=3,
                    user_id=5,
                    image_url='https://ksr-ugc.imgix.net/assets/035/194/060/b382429744950be8ab48143aef87914e_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1633993948&auto=format&frame=1&q=92&s=77061c126216e796f504467cd988d625')
    aludisc = Project(title='AluDisc™',
                    description='esktop Stand / Car Mount / Wall Mount with snap-on convenience. Angle/height adjustable. Universal smart devices compatible.',
                    goal=10000,
                    current_amount=9744,
                    categories_id=3,
                    user_id=6,
                    image_url='https://ksr-ugc.imgix.net/assets/035/117/753/9cb15fb9339338579cd240e2c976f9af_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1633397966&auto=format&frame=1&q=92&s=128e2b92b016386867e4ec675a681bac')
    moft = Project(title='MOFT',
                    description='An adjustable desk mat featuring modular design enables you to organize your workspace that helps you stay focused and comfortable.',
                    goal=100000,
                    current_amount=56821,
                    categories_id=3,
                    user_id=7,
                    image_url='https://ksr-ugc.imgix.net/assets/034/983/632/552cafa6daad91f6967557d3f58f7667_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1632403773&auto=format&frame=1&q=92&s=d6081a62e0ee9b6876a38f17be3b2e38')
    geheim = Project(title='Cipher Machine Toy',
                    description="The GeheimMachine is a 100 percent analogue, non-digital ciphering machine. A purely haptic mechanical device which you'll love to hold in your hand!",
                    goal=34799,
                    current_amount=6231,
                    categories_id=3,
                    user_id=8,
                    image_url='https://ksr-ugc.imgix.net/assets/035/138/551/9a803aa22925a49d79fbf4db847ef96d_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1633534561&auto=format&frame=1&q=92&s=87ed6e4e0486568b4a8d38acec992daf')
    landback = Project(title='LANDBACK.Art',
                    description="We're placing 20 billboards across North America to uplift Indigenous voices and broaden support for the LANDBACK Movement.",
                    goal=40000,
                    current_amount=34609,
                    categories_id=1,
                    user_id=9,
                    image_url='https://ksr-ugc.imgix.net/assets/035/234/354/6d0cb4bf5e0d22a3ac5eb0c4836fd4c3_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1634247107&auto=format&frame=1&lossless=true&s=223982512a9c7e04c407566b83ef870d')
    tarot = Project(title='THE PORTENT TAROT & THE INTUITIVE NIGHT GODDESS TAROT',
                    description='Hello! Linzi here, and I am thrilled to announce the first edition printing of THE PORTENT TAROT alongside the second printing of THE INTUITIVE NIGHT GODDESS TAROT artist edition. Both decks were created to help seekers like you discover the power of intuition and knowledge of self.',
                    goal=22222,
                    current_amount=14141,
                    categories_id=1,
                    user_id=10,
                    image_url='https://ksr-ugc.imgix.net/assets/034/906/688/4d3f5bc5449951fb0b704809d501bb17_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1631832733&auto=format&frame=1&q=92&s=e1c5b5c85a3748648ae8cfabb4dee25c')
    key_tarot = Project(title='The Key Tarot Deck',
                    description='What separates this deck from the majority is that The Key Tarot conveys classic tarot symbolism through the lens of photography rather than illustrations as our primary source of inspiration. This change of medium allows us to recreate iconic tarot imagery while incorporating actual ritual tools and objects. Each model we feature is from our local and broader spiritual community and reflects the real world diversity found therein.',
                    goal=11000,
                    current_amount=3374,
                    categories_id=1,
                    user_id=11,
                    image_url='https://ksr-ugc.imgix.net/assets/034/997/341/56f2bcf6869330eb296381231b00753f_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1632494127&auto=format&frame=1&q=92&s=a1537050737c2c86cc75587171643f27')
    sleepy_hollow = Project(title="Washington Irving's The Legend Of Sleepy Hollow",
                    description="PartonVostok is a brand new enterprise dedicated to creating and facilitating  high quality audio productions, starting with Washington Irving's The Legend of Sleepy Hollow. ",
                    goal=18830,
                    current_amount=229,
                    categories_id=1,
                    user_id=12,
                    image_url='https://ksr-ugc.imgix.net/assets/035/166/396/1cf60f8bfc5f1dabe82e2d4ca4b356a5_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1633735322&auto=format&frame=1&q=92&s=5100f4954f76ce9de0b8a24562a3b378')
    radiant_souls = Project(title='Radiant Souls Oracle Deck',
                    description='Introducing the RADIANT SOULS ORACLE DECK, the latest oracle deck by Kat Crow (www.katcrow.com). This beautiful square oracle deck is coming to Kickstarter September 2021, and offers a completely unique and innovative way to practice divination. Each card is packed with clues and thoughts to help you reflect, process your questions, and glean new ideas. This is the third deck from creator Kat Crow, who has also created the Inner Mask Oracle and Utopian Futhark Rune Cards. Each deck comes with a book of meanings written by the creator. ',
                    goal=2500,
                    current_amount=4173,
                    categories_id=1,
                    user_id=13,
                    image_url='https://ksr-ugc.imgix.net/assets/034/917/631/a85270012e625cdc107601fe47008765_original.JPG?ixlib=rb-4.0.2&w=680&fit=max&v=1631910165&auto=format&frame=1&q=92&s=82c6b94b59b645c7179aef6654c1e322')
    cove = Project(title='Color the Cove',
                    description='Wanna support a muralist and watch them paint it before your eyes?  Support this giant live mural painting event and make it happen.  Arts Beacon Gallery presents a pack of muralist creatives from The Lotus Eaters club to engage 15+ local Atlanta artists to paint more than 1,500 square feet of murals. We will be completely covering the Artist Cove in the SE Atlanta neighborhood, Grant Park. ',
                    goal=10000,
                    current_amount=8627,
                    categories_id=1,
                    user_id=14,
                    image_url='https://ksr-ugc.imgix.net/assets/034/863/832/28d4b57ceeb3ce9ed9f4e985e0ced5b6_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1631565343&auto=format&frame=1&lossless=true&s=ede2096ef265b0b8362c6cbdd807a204')
    rat_city = Project(title='New Rat City Part 1',
                    description="It's 2083, and all that's left of New York City after years of floods, pests, and infrastructure mismanagement is northern Manhattan and a few enclaves in the Bronx and Staten Island. The only people keeping the city habitable for its few remaining residents are the pest controllers... and they aren't allowed to kill anything.",
                    goal=2083,
                    current_amount=3722,
                    categories_id=2,
                    user_id=15,
                    image_url='https://ksr-ugc.imgix.net/assets/034/767/778/b7a5d0e019e4cfb426ae329189e7814e_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1630877140&auto=format&frame=1&lossless=true&s=6a8280e7a59907ddd5583210a2cd3672')
    hellwitch = Project(title="Brian Pulido's Hellwitch vs. Lady Death: Wargasm #1!",
                    description="The Battle Royale is here! 20+ FREE Bonus Items Unlocked! One of the most savage action-packed slugfests in comic book history!",
                    goal=15000,
                    current_amount=304142,
                    categories_id=2,
                    user_id=16,
                    image_url='https://ksr-ugc.imgix.net/assets/035/127/673/34c44c87b2f8a83c52d52e8a3a1dabc4_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1633458690&auto=format&frame=1&q=92&s=58aab4dc1ad1bc6fecdde338f6bf2e40')
    impure = Project(title='Impure Blood, Volume 1-4',
                    description='The fourth and final installment of the steam-fantasy graphic novel! Presented in a high quality deluxe hardcover edition!',
                    goal=8500,
                    current_amount=7678,
                    categories_id=2,
                    user_id=1,
                    image_url='https://ksr-ugc.imgix.net/assets/034/988/438/41d7a8ba1e23611029265bbfb3c7dd57_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1632427839&auto=format&frame=1&lossless=true&s=7cb365bcecf186568d590b577bf3506c')
    anybodies = Project(title='The Anybodies',
                    description='THE ANYBODIES is a 40 page epic new comic book from writer and screenwriter SCOTT LOBDELL (Uncanny X-Men, Red Hood and the Outlaws, Ball and Chain, Happy Death Day) and artist BRETT BOOTH (X-Men, Justice League of America, Fantastic Four, Teen Titans), with colors by ANDREW DALHOUSE. The only thing left to complete is some colors but we are estimated to ship in March! ',
                    goal=5000,
                    current_amount=14493,
                    categories_id=2,
                    user_id=2,
                    image_url='https://ksr-ugc.imgix.net/assets/035/139/922/b6b9d7e91dd7795bdaf3c861e2f01aa1_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1633541217&auto=format&frame=1&lossless=true&s=b24472374a836390f5cd3482e72042c0')
    wifwulf = Project(title='WIFWULF',
                    description='It is also a story about werewolves. About bloody revenge and deep loneliness. About the secret, sad meaning behind the howls we hear from the dark forests on the darkest of nights. ',
                    goal=20000,
                    current_amount=25815,
                    categories_id=2,
                    user_id=3,
                    image_url='https://ksr-ugc.imgix.net/assets/035/139/733/52298320e083c821fa727007d8399834_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1633540068&auto=format&frame=1&q=92&s=6e610a3171904093abdfe4108ca9422a')
    zufan = Project(title='ZUFAN #1: Pan-African sci-fi inspired by a true story',
                    description='Ethiopia is the only African nation that was never colonized. Find out why in our epic sci-fi tale retelling history thru fiction!',
                    goal=6400,
                    current_amount=11745,
                    categories_id=2,
                    user_id=4,
                    image_url='https://ksr-ugc.imgix.net/assets/035/174/816/df8dac4280690e980bf92e418a35163e_original.PNG?ixlib=rb-4.0.2&w=680&fit=max&v=1633825076&auto=format&frame=1&lossless=true&s=ad327e539856f5bcc1b9b21f7911b825')
    happiness = Project(title='The Happiness',
                    description='The Happiness (La Alegría) is, essentially, a short film about fantasy. But not just any kind of fantasy. It is about the fantasy of wanting to be better despite adversity, and with the belief that a better world is possible, even when that, perhaps, is not true. It is a short film that talks about what it means to take that fantasy to its last consequences.',
                    goal=11599,
                    current_amount=1317,
                    categories_id=4,
                    user_id=5,
                    image_url='https://ksr-ugc.imgix.net/assets/035/141/993/c4d38810af775940c987c26754fa95aa_original.jpeg?ixlib=rb-4.0.2&w=680&fit=max&v=1633552233&auto=format&frame=1&q=92&s=3ca2745e48d7e86f2f976e4aff6c6bf0')
    sikh = Project(title='American Sikh',
                    description='',
                    goal=60000,
                    current_amount=70569,
                    categories_id=4,
                    user_id=6,
                    image_url='The film begins in India, 1984. Vishavjit is only 12 years old when he witnesses first-hand the violent anti-Sikh massacre in New Delhi. His family narrowly escapes death. After seeing the violence towards Sikhs, Vishavjit dreams of returning to his birthplace - the United States.')
    horn = Project(title="The Sound of His Horn (80's Horror Paperback & Movies)",
                    description="Think back to the classic era of horror pulp fiction, when sinister paperbacks occupied turnstiles, adorned with chilling book covers, painted by artists such as Lisa Falkenstern, Jill Bauman and Tom Hallman, whose works are celebrated in the fantastic “Paperbacks from Hell”, a history of 70's and 80's horror fiction, by Grady Hendrix.",
                    goal=6872,
                    current_amount=8409,
                    categories_id=4,
                    user_id=7,
                    image_url='https://ksr-ugc.imgix.net/assets/035/014/903/2f28203a7b1583e699858af220b2b6fc_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1632664419&auto=format&frame=1&lossless=true&s=2730071719809eb268c918cfbc72047a')
    reflets = Project(title='Reflets',
                    description="On a rainy day, in the midst of our lockdown, I was walking in the neighborhood in search of calm and inspiration, when I saw, around a building, a gathering of a dozen people, a sight that has become rare in these times of the pandemic. Curious, I approach it in order to understand the reason of it, and as I walk along, my ears perceive a song getting louder. To my surprise, I discover, behind their windows, the faces of old women and men, listening with emotion to the chanting of this choir that has come to give a little comfort to the residents of this home for elderly people, confined to their rooms. The scene touches me and accompanies me for days, because it carries within it all the distance created by this virus, but most of all, it carries the hope that we can face it, together, thanks to music. ",
                    goal=4639,
                    current_amount=1179,
                    categories_id=4,
                    user_id=8,
                    image_url='https://ksr-ugc.imgix.net/assets/035/122/931/32fe41da278698cf03caa6c5e96dd431_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1633437727&auto=format&frame=1&q=92&s=754ca3c0de2f254f99ec19349bb0af5a')
    last_drop = Project(title='The Last Drop Film',
                    description='A young woman and her boyfriend go on a romantic adventure through their past with a device that lets couples explore shared memories— but when their journey reveals overlooked signs of abuse, she must wake herself up to escape before he can manipulate her memories in his favor.',
                    goal=20000,
                    current_amount=23645,
                    categories_id=4,
                    user_id=9,
                    image_url='https://ksr-ugc.imgix.net/assets/034/935/835/b2d8720f6e01ba47e377d3828f385016_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1632091076&auto=format&frame=1&lossless=true&s=9674946b81133da48c8a35ed054754c6')
    green = Project(title='RE Green｜Zero Waste Composter Kit for Urban Gardeners',
                    description='Is dealing with leftovers a nightmare to you? Maybe the idea of composting has been on your mind: going green and turning food waste into organic and rich material for your lovely plants, sounds like a win-win solution. But what’s holding you back? Could be the funny smells, flies come poking around and having no yard-space to properly store the scraps…',
                    goal=4794,
                    current_amount=15226,
                    categories_id=5,
                    user_id=10,
                    image_url='https://ksr-ugc.imgix.net/assets/034/854/342/deecb69ae06adafd83d72a4fca8a843e_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1631513823&auto=format&frame=1&lossless=true&s=a85f8ec9a23fcdfd7638663a88937b20')
    relish = Project(title="Alexandra's PIKLIZ, Spicy Pepper Relish",
                    description='This Haitian spicy pepper relish is an all-purpose condiment to bring heat in the kitchen. Flavor Enhancer. Meal Perfector.',
                    goal=7500,
                    current_amount=8936,
                    categories_id=5,
                    user_id=11,
                    image_url='https://ksr-ugc.imgix.net/assets/034/039/644/b54a5759085892e2f61fc35927420343_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1624923790&auto=format&frame=1&lossless=true&s=4176351a70f2287c113200e4278d0272')
    mallows = Project(title="Mystic's Mallows",
                    description="Mystical Chocolates will be starting the production of Mystic's Mallows. This project involves the construction of the Mallow Hut, Mystical Chocolates' newest candy building. This building will be specifically set up for Mallow making. It will include a 3 compartment sink in the washing area, gas stove and pots for cooking the mallows, and of course the ingredients to make all these yummy mallows.",
                    goal=5000,
                    current_amount=9343,
                    categories_id=5,
                    user_id=12,
                    image_url='https://ksr-ugc.imgix.net/assets/034/616/531/c3f75a53db709c02f955dda0b8584917_original.jpeg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1629737019&auto=format&frame=1&q=92&s=8aa69b9f263336a8202efa67df9f4bd0')
    idra = Project(title='MY Idra - A Water Bottle that is Good for You and our Planet',
                    description="Premium water bottle fitted with a ceramic filter that lasts forever; reminds & measures glasses to ensure you're drinking enough.",
                    goal=9859,
                    current_amount=25585,
                    categories_id=5,
                    user_id=13,
                    image_url='https://ksr-ugc.imgix.net/assets/034/635/575/2982d99a6d90bef9460bf74fcb0c3368_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1629873869&auto=format&frame=1&q=92&s=8f73324b45588ce02f9b89d40969bdbf')
    heels = Project(title='Kira Goodey: Genderless Heels',
                    description="For a decade, Kira Goodey (@kiragoodey) has built an international reputation for creating towering footwear.  Her shoes have elevated style icons including Britney Spears, Nicki Minaj, Lady Gaga, Kylie Jenner, Doja Cat and Nikita Dragun. She believes incredible shoes should be available to everyone – whatever their size, shape or gender. Now, after two years of development, the brand is preparing to release its first ready-to-wear shoe collection. Every style in the collection is available in an extended size range from EU 35 to 46 – and they're available now on pre-sale exclusively through Kickstarter.",
                    goal=27490,
                    current_amount=22517,
                    categories_id=5,
                    user_id=14,
                    image_url='https://ksr-ugc.imgix.net/assets/034/765/576/9d6539ad608aaae739664e9eb239af56_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1630861508&auto=format&frame=1&q=92&s=10e47ecfd5f9033e64da246ab97b2f19')
    bag = Project(title='Fruit Cow Ita Bag',
                    description="Hello, I'm Joyce! I am a college student and artist living in Atlanta, Georgia. I design and sell cute artwork in different forms on my online shop, share behind-the-scenes videos on my Youtube channel, and run a cute themed monthly sticker/pin club!",
                    goal=4000,
                    current_amount=10714,
                    categories_id=5,
                    user_id=15,
                    image_url='https://ksr-ugc.imgix.net/assets/035/189/240/5a14838ce3ebe4500c20adb55bd038da_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1633967494&auto=format&frame=1&lossless=true&s=0a81e8b01f858ff47958e87145b77af7')
    keylocker = Project(title='Keylocker | Turn Based Cyberpunk Action',
                    description='From the developer of Virgo Versus The Zodiac and Osteoblasts comes a Tactical Rhythm JRPG in which you play as the Singer who fights the oppressive government to bring back Music to a melodyless world.',
                    goal=35000,
                    current_amount=38720,
                    categories_id=6,
                    user_id=16,
                    image_url='https://ksr-ugc.imgix.net/assets/034/843/575/72d05d715bfa10aa18d1698db4bded58_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1631406674&auto=format&frame=1&lossless=true&s=4504cfa61faaba32b2043b11a87acb41')
    ailuri = Project(title='Ailuri - A Hand-Drawn, 2D Platformer Adventure',
                    description='Play as Ailuri, a small hero set on an adventure to protect the world from environmental destruction. Complete vast levels, rescue animals and defeat massive bosses in this fantastical, detailed game!',
                    goal=13351,
                    current_amount=15744,
                    categories_id=6,
                    user_id=1,
                    image_url='https://ksr-ugc.imgix.net/assets/035/211/286/1bf7e033e80822e51ffe4c7dd0ec56a5_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1634108418&auto=format&frame=1&lossless=true&s=8a0d9e56210deb730b886ce4dbfc8102')
    voidfall = Project(title='Voidfall',
                    description="Repel the Voidborn and restore the Domineum in this Euro-style space 4X game. Design by David Turczi & Nigel Buckle, art by Ian O'Toole",
                    goal=173995,
                    current_amount=1414665,
                    categories_id=6,
                    user_id=2,
                    image_url='https://ksr-ugc.imgix.net/assets/035/196/696/20f89b94837f3fa414174d2685a3b703_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1634015901&auto=format&frame=1&lossless=true&s=558a5b4558752347718985c987590a5a')
    magical = Project(title='Magical Friends',
                    description="Magical Friends - and how to summon them. It is an easy-to-learn but tricky-to-win strategy game for 2-4 players.",
                    goal=28999,
                    current_amount=21895,
                    categories_id=6,
                    user_id=3,
                    image_url='https://ksr-ugc.imgix.net/assets/035/066/661/a2bb14049876e6c43cf4144506fd8671_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1632993461&auto=format&frame=1&lossless=true&s=b782c8a0aa409739c7f72b0d146786e3')
    relic = Project(title='The Last Relic: Curse of the Lostaways',
                    description="The Last Relic is an upcoming turn-based JRPG inspired by the 90s classics that defined my childhood. It aims to adopt the best aspects of the Golden era of JRPGs, re-purposing them to create a unique, charming adventure that stands on its own in the modern age.",
                    goal=6000,
                    current_amount=11874,
                    categories_id=6,
                    user_id=4,
                    image_url='https://ksr-ugc.imgix.net/assets/034/013/454/f0e62179a16dd4a5d9ed873f5817b946_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1624661029&auto=format&frame=1&lossless=true&s=2e6f4a62cda30212bd76f82d5fedf917')
    trust = Project(title='Trust Me, Not Her',
                    description='A high-drama, suspense Visual Novel about Love, Friendship... and MURDER! Scheduled to be released in 2022.',
                    goal=824,
                    current_amount=1151,
                    categories_id=6,
                    user_id=5,
                    image_url='https://ksr-ugc.imgix.net/assets/034/927/260/1e4e64a51d9e8b8e8319b29928d4ffe6_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1632001021&auto=format&frame=1&lossless=true&s=3841fc0bd7d7c0baae4ced267fe5005a')
    adam = Project(title="Adam Rivera's 5th Album",
                    description=" So many songs, nearly 40 quality tracks, that fit neatly on one compact disc! Everyone involved in the production is so very excited for you to hear these songs!  We just need your help to bringing the album to life.   Come on, let’s make this happen!",
                    goal=1000,
                    current_amount=604,
                    categories_id=7,
                    user_id=6,
                    image_url='https://ksr-ugc.imgix.net/assets/035/179/608/dad2588cb6cbc56a10f48d105b7f3f59_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1633887744&auto=format&frame=1&q=92&s=58fddb5b9add5490096fb09ebd8db276')
    stan = Project(title='CHASING ALPHA: The Stan Getz Story',
                    description='A feature documentary on the life, times, and music of legendary saxophonist Stan Getz.',
                    goal=54500,
                    current_amount=40745,
                    categories_id=7,
                    user_id=7,
                    image_url='https://ksr-ugc.imgix.net/assets/034/924/006/a3f5ecf6de7f80f8d1f7268715b0ceab_original.jpeg?ixlib=rb-4.0.2&w=680&fit=max&v=1631974998&auto=format&frame=1&q=92&s=e7095752f2150b48681724cc4186dbd5')
    cycles = Project(title='Cycles',
                    description="In 2018, I self-released my first rap EP, Online Entertainer. This year, I've written a full-length album called Cycles. Instead of self-releasing this one, I want to step up the production quality. I found a great local studio that has worked with a lot of artists I like, and have begun recording and working on the new songs there.",
                    goal=3000,
                    current_amount=7324,
                    categories_id=7,
                    user_id=8,
                    image_url='https://ksr-ugc.imgix.net/assets/035/059/735/11332372d0c5f5685d62f3f4c982f0fe_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1632943443&auto=format&frame=1&q=92&s=ab5c50beaa26afac91a94d287866108b')
    roots = Project(title='Wild Roots - A New Album by Rocky Votolato',
                    description='“Wild Roots” is an expansive 15 song concept album that I wrote for and about my family. We had 15 horses on the ranch I grew up on, and a memory of that horse pasture is what sparked the idea for the entire record.',
                    goal=100000,
                    current_amount=58238,
                    categories_id=7,
                    user_id=9,
                    image_url='https://ksr-ugc.imgix.net/assets/034/977/836/beaba885599015c1dd7fc2598e452ccd_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1632361645&auto=format&frame=1&lossless=true&s=6c2f172056fc902212aff2021078b681')
    colossus = Project(title='Mega Colossus 6th Album: Rip Time',
                    description="Are you ready to get ripped?! We have stepped it up on this one. We spent the pandemic working our butts off in the practice space to write our most ambitious album yet. We are super proud of this one and we can't wait for you to hear it. We appreciate you so much for getting in early on this thing and helping us make this vision a reality",
                    goal=5000,
                    current_amount=5655,
                    categories_id=7,
                    user_id=10,
                    image_url='https://ksr-ugc.imgix.net/assets/034/925/154/5221ddfa4a670261e3229ce20b82f105_original.JPG?ixlib=rb-4.0.2&w=680&fit=max&v=1631983446&auto=format&frame=1&q=92&s=899901964f55a0d10fca7cbb01e6ca90')
    morella = Project(title="Morella's Forest",
                    description="Morella's Forest were one of Ohio's greatest musical exports of the '90s. Hailing from Dayton, the same city that introduced the world to bands like Guided By Voices, Brainiac and The Breeders, they released four well-received albums that brought worlds of shimmering dream-pop conjured by a quartet of rust belt wizards.",
                    goal=8000,
                    current_amount=7667,
                    categories_id=7,
                    user_id=11,
                    image_url='https://ksr-ugc.imgix.net/assets/035/186/141/58fe240540ea908dc7c59aab45c85566_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1633950554&auto=format&frame=1&q=92&s=8bac617719688d59a4b9d3173da0a438')
    whole = Project(title="One Whole Me",
                    description="Being bicultural is a wonderful thing! Follow along as a Colombian-American child embraces both cultures that make him unique. This lighthearted story, written in a blend of Spanish & English, showcases language, food, family, music, and more. It will inspire children to be proud of who they are and to never forget what makes them special!",
                    goal=2500,
                    current_amount=6018,
                    categories_id=8,
                    user_id=12,
                    image_url='https://ksr-ugc.imgix.net/assets/034/882/238/951391dd9eadcb25dbb7727619aa16d3_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1631674015&auto=format&frame=1&q=92&s=d960bba669bb0380635ce859e0755b2e')
    brain = Project(title="Befriend Your Brain: A young person's mental health guide",
                    description="Our brains can be jerks sometimes. They can tell us we're terrible people, make us yell at each other, or make us silent when we need to speak up. They can make us too anxious to do things we want to, or too depressed to do anything at all. They freak out at the worst possible moments and then we don't know how to cope.",
                    goal=7000,
                    current_amount=5511,
                    categories_id=8,
                    user_id=13,
                    image_url='https://ksr-ugc.imgix.net/assets/035/164/332/0ff04f60cb8be2d18dc0496692bb5058_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1633719727&auto=format&frame=1&q=92&s=80972daf493cda4540a7f7a6d91e7fad')
    alien = Project(title="Alien to Zombie by Mark Chiarello and Kevin Somers",
                    description="Alien to Zombie brings everyone’s favorite creatures of the night to life like never before—and in alphabetical order!",
                    goal=4000,
                    current_amount=9543,
                    categories_id=8,
                    user_id=14,
                    image_url='https://ksr-ugc.imgix.net/assets/035/108/089/58fb03b15666808903d1f8b0dd8801e8_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1633327267&auto=format&frame=1&q=92&s=a7b19abc13e3a4c4f0a0335548cc8352')
    emma = Project(title="Sea Fire: an ocean urban fantasy novel by Emma Shelford",
                    description="If you want a book that's a little different, while still with the voice and feel of an urban fantasy, you'll love diving into Sea Fire. What's more, it's written by a marine biologist and scuba diver (hi!), so every underwater detail is authentic.",
                    goal=413,
                    current_amount=847,
                    categories_id=8,
                    user_id=15,
                    image_url='https://ksr-ugc.imgix.net/assets/034/211/505/31ce1dff83a7164bda9bc07737317627_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1626305447&auto=format&frame=1&q=92&s=9c15e502ee16d8cf2399c49a00115350')
    villain = Project(title="Wicked Villains Hardcover Swag Box",
                    description="The Wicked Villains series has been really close to my heart from the moment I wrote them. I've loved fairy tales since I was a little kid and my grandma introduced me to Grimm's Fairy Tales. As I got older, my fascination with the darker versions of those stories only increased and with the Wicked Villains, it dovetails really wonderfully with my love of villains. Add in a bit of...spice...and you have this series. ",
                    goal=20000,
                    current_amount=99524,
                    categories_id=8,
                    user_id=16,
                    image_url='https://ksr-ugc.imgix.net/assets/035/217/206/937bce12f681affe914e068c28e26e7c_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1634142816&auto=format&frame=1&q=92&s=16eee3a86fd826273ba8bf2a6e4f31a4')
    cool = Project(title="I'm Cool Too",
                    description="I wrote this book because I wanted to highlight the importance sanitation workers.  They are an unseen essential part of EVERY community.  Believe it or not Sanitation workers do so much more than just pick up your garbage.  ",
                    goal=10500,
                    current_amount=9012,
                    categories_id=8,
                    user_id=1,
                    image_url='https://ksr-ugc.imgix.net/assets/035/029/586/3ab447c21717a998cc399b73567e8538_original.jpeg?ixlib=rb-4.0.2&w=680&fit=max&v=1632767301&auto=format&frame=1&q=92&s=efa4c87ade4d360bb3a739d03de031dc')

    db.session.add(pico_speakers)
    db.session.add(mythwind)
    db.session.add(zelda_album)
    db.session.add(somie)
    db.session.add(batmobile)
    db.session.add(pivo)
    db.session.add(aludisc)
    db.session.add(moft)
    db.session.add(geheim)
    db.session.add(landback)
    db.session.add(tarot)
    db.session.add(key_tarot)
    db.session.add(sleepy_hollow)
    db.session.add(radiant_souls)
    db.session.add(cove)
    db.session.add(rat_city)
    db.session.add(hellwitch)
    db.session.add(impure)
    db.session.add(anybodies)
    db.session.add(wifwulf)
    db.session.add(zufan)
    db.session.add(happiness)
    db.session.add(sikh)
    db.session.add(horn)
    db.session.add(reflets)
    db.session.add(last_drop)
    db.session.add(green)
    db.session.add(relish)
    db.session.add(mallows)
    db.session.add(idra)
    db.session.add(heels)
    db.session.add(bag)
    db.session.add(keylocker)
    db.session.add(ailuri)
    db.session.add(voidfall)
    db.session.add(magical)
    db.session.add(relic)
    db.session.add(trust)
    db.session.add(adam)
    db.session.add(stan)
    db.session.add(cycles)
    db.session.add(roots)
    db.session.add(colossus)
    db.session.add(morella)
    db.session.add(whole)
    db.session.add(brain)
    db.session.add(alien)
    db.session.add(emma)
    db.session.add(villain)
    db.session.add(cool)


    db.session.commit()

def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
