import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
    ru: {
        translation: {
            // Navbar
            navbar: {
                fillings: "Начинки",
                candybar: "Кэнди-бар",
                partnerProjects: "Партнерские проекты",
                weddingCakes: "Свадебные торты",
                birthdayCakes: "Торты на день рождения",
                bentoCakes: "Бенто торты",
                contacts: "Контакты",
                callUs: "Позвоните нам",
                openMenu: "Открыть меню навигации",
                closeMenu: "Закрыть меню навигации",
                ariaLabels: {
                    mainNavigation: "Основная навигация",
                    home: "Диас Кейк - Главная",
                    goToHomepage: "Перейти на главную страницу",
                    logoAlt: "Диас Кейк - Логотип премиальной пекарни",
                    viewFillings: "Посмотреть раздел начинок для тортов",
                    exploreFillings: "Изучите наши вкусные начинки для тортов",
                    viewCandybar: "Посмотреть раздел кэнди-бара",
                    discoverCandybar: "Откройте для себя наш кэнди-бар",
                    viewPartnerProjects: "Посмотреть раздел партнерских проектов",
                    seeCollaborations: "Посмотрите наши совместные проекты",
                    viewWeddingCakes: "Посмотреть раздел свадебных тортов",
                    browseWeddingCakes: "Просмотрите наши красивые свадебные торты",
                    viewBirthdayCakes: "Посмотреть раздел тортов на день рождения",
                    exploreBirthdayCakes: "Изучите нашу коллекцию тортов на день рождения",
                    viewBentoCakes: "Посмотреть раздел бенто тортов",
                    exploreBentoCakes: "Изучите нашу коллекцию бенто тортов",
                    viewContacts: "Посмотреть нашу контактную информацию",
                    getInTouch: "Свяжитесь с нами",
                    callUsAt: "Позвоните нам по номеру 07857647",
                    clickToCall: "Нажмите, чтобы позвонить нам",
                    mobileNavigationLinks: "Ссылки мобильной навигации",
                    closeMobileMenu: "Закрыть мобильное меню",
                    callUsDirectly: "Нажмите, чтобы позвонить нам напрямую"
                }
            },
            // Header
            header: {
                title: "Персональные торты с историей",
                description: "Изготовлено вручную с заботой в наших кафе, кухнях и пекарнях.",
                cta: "Закажи торт",
                ariaLabels: {
                    heroSection: "Главный раздел",
                    backgroundImage: "Красивая пекарная кухня с процессом изготовления ремесленного хлеба",
                    missionStatement: "Наша миссия",
                    exploreMenu: "Изучите наше меню и предложения тортов",
                    discoverTreats: "Откройте для себя наши вкусные торты и угощения"
                }
            },
            // Meta tags and SEO
            meta: {
                title: "DiasCake- Премиальная пекарня | Свадебные и праздничные торты",
                description: "DiasCake- ваша премиальная пекарня для свадебных тортов, тортов на день рождения, кэнди-баров и уникальных начинок. Изготовлено вручную с заботой.",
                keywords: "торты, свадебные торты, торты на день рождения, пекарня, кэнди-бар, начинки для тортов, ручная работа, премиум"
            },
            // Fillings section
            fillings: {
                title: "Наши восхитительные начинки",
                badge: "Начинки",
                subtitle: "Откройте для себя уникальные вкусы наших премиальных тортов",
                navigation: {
                    previous: "Предыдущий",
                    next: "Следующий"
                },
                cakes: {
                    plombirCapsuni: {
                        name: "Клубничный пломбир",
                        description: "Бисквит со вкусом ванили, клубничным джемом и сливочным кремом с семенами ванили",
                        price: "580 лей"
                    },
                    snikers: {
                        name: "Сникерс",
                        description: "Карамелизированный фундук и карамель в сливочном ванильном креме и шоколадном бисквитом",
                        price: "620 лей"
                    },
                    mangoMaracuia: {
                        name: "Маракуйя, манго",
                        description: "Бисквит вкусом ванили, джем из маракуйи и манго, ванильный крем",
                        price: "590 лей"
                    },
                    oreo: {
                        name: "Орео",
                        description: "Шоколадные бисквиты, сливочный крем с печеньем Орео",
                        price: "580 лей"
                    },
                    padureaNeagra: {
                        name: "Черный лес",
                        description: "Бисквит с какао, кремом маскарпоне с семенами ванили, вишнёвая начинка",
                        price: "620 лей"
                    },
                    redVelvetZmeura: {
                        name: "Красный бархат с малиной",
                        description: "Влажные красные бархатные бисквиты с ванильным кремом и малиновой начинкой",
                        price: "650 лей"
                    },
                    medovic: {
                        name: "Медович с вишней, малиной или грецкими орехами",
                        description: "Слои медового бисквита, слегка пропитанные сиропом, с нежным кремом и начинкой на выбор: вишня, малина или орехи",
                        price: "540 лей"
                    },
                    napoleon: {
                        name: "Классический Наполеон",
                        description: "Слоёные коржи с нежным ванильным кремом, для классического и элегантного вкуса.",
                        price: "550 лей"
                    },
                    fisticZmeura: {
                        name: "Малина Фисташка",
                        description: "Бисквит фисташковый, пропитанный сиропом с фисташковой пастой для более выраженного вкуса, сливочно-сырный крем с фисташковой пастой, малиновой начинкой",
                        price: "680 лей"
                    }
                }
            },
            // Candybar section
            candybar: {
                badge: "Кэнди-бар",
                title: "Сладкие деликатесы для всех",
                subtitle: "Каждый десерт приготовлен с заботой и из качественных ингредиентов, для незабываемого удовольствия.Откройте для себя нашу подборку муссов, пирожных и тартов ручной работы, идеально подходящих для особых моментов",
                navigation: {
                    previous: "Предыдущий",
                    next: "Следующий"
                },
                readMore: "Подробнее",
                close: "Закрыть",
                items: {
                    moussePlombirCapsuni: {
                        name: "Мусс Пломбир с клубникой",
                        description: "Нежный мусс с пюре и джемом из клубники, подается в стаканчике (~100 г). Легкий, освежающий и насыщенно фруктовый вкус.",
                        price: 38
                    },
                    musseMangoMaracuia: {
                        name: "Мусс Манго-Маракуйя",
                        description: "Воздушный мусс с ванильными семенами из Мадагаскара, джемом манго и маракуйи – идеальный баланс сладости и кислинки (~100 г).",
                        price: 38
                    },
                    tiramisu: {
                        name: "Классическое Тирамису",
                        description: "Нежный крем из маскарпоне с натуральной ванилью, бисквиты, пропитанные кофе, посыпанные какао. Аутентичный итальянский рецепт (~100 г).",
                        price: 43
                    },
                    cakePops: {
                        name: "Кейк-попс “Картошка”",
                        description: "Плотный шоколадный десерт в виде батончика, покрытый бельгийским шоколадом (~50 г).",
                        price: 30
                    },
                    cartoscaInghetata: {
                        name: "“Картошка” в виде мороженого",
                        description: "Оригинальный десерт “Картошка” в форме мороженого, покрыт бельгийским шоколадом – игривый и насыщенный десерт (~80 г).",
                        price: 35
                    },
                    tarteInAsortiment: {
                        name: "Ассорти тартов",
                        description: "Тарт с лимоном: хрустящее тесто с миндальной мукой, запеченный сливочный крем и лимонный курд.\nТарт с сезонными фруктами: заварной ванильный крем, украшен свежими фруктами (~100 г).",
                        price: 47
                    },
                    eclereleChoux: {
                        name: "Эклеры шуз",
                        description: "—",
                        price: 40
                    },
                    briose: {
                        name: "Капкейки",
                        description: "Ванильный или шоколадный бисквит, покрытый ванильным кремом (~70 г).",
                        price: 33
                    },
                    zefir: {
                        name: "Зефир",
                        description: "Пышный зефир из клубничного или яблочного пюре (~60 г).",
                        price: 28
                    },
                    prajituraMusseSemisfera: {
                        name: "Полусфера-мусс",
                        description: "Ванильный мусс пломбир, покрытие велюр из какао-масла и шоколада, начинка из манго и маракуйи, на хрустящей песочной основе (~100 г).",
                        price: 40
                    },
                    pavlova: {
                        name: "Павлова",
                        description: "Хрустящая безе-основа, крем из маскарпоне с ванилью, фруктовая начинка и украшение сезонными фруктами (~80 г).",
                        price: 35
                    },
                    macarons: {
                        name: "Макаронс",
                        description: "Классическое миндальное пирожное с разнообразными начинками.",
                        price: 35
                    }
                }
            },
            // Partner Projects section
            partnerProjects: {
                title: "Партнерские проекты",
                subtitle: "Сотрудничество с лучшими",
                description: "Мы гордимся партнерством с ведущими компаниями и организациями. Наши совместные проекты создают незабываемые впечатления и высококачественные продукты для особых мероприятий.",
                cta: "Связаться с нами"
            },
            // Wedding Cakes section
            weddingCakes: {
                title: "Свадебные торты",
                badge: "Свадебные торты",
                subtitle: "Создайте волшебство вашего особенного дня",
                description: "Наши свадебные торты созданы с любовью и вниманием к каждой детали. От элегантных классических дизайнов до современных художественных шедевров - мы воплотим торт вашей мечты.",
                galleryTitle: "Наша коллекция свадебных тортов",
                cta: "Заказать свадебный торт",
                ctaTitle: "Готовы создать торт для вашего особенного дня?",
                ctaDescription: "Свяжитесь с нами для персональной консультации. Мы обсудим все детали и создадим идеальный торт для вашего особенного дня.",
                gallery: {
                    classic: "Классические торты",
                    modern: "Современные дизайны",
                    floral: "Цветочные композиции",
                    elegant: "Элегантные варианты"
                }
            },
            // Birthday Cakes section
            birthdayCakes: {
                title: "Торты на день рождения",
                badge: "Торты на заказ",
                subtitle: "Сделайте каждый день рождения особенным",
                description: "Яркие, веселые и вкусные торты для празднования дня рождения. От детских праздников до взрослых торжеств.",
                features: {
                    themes: "Тематические дизайны",
                    sizes: "Любые размеры",
                    quick: "Быстрое изготовление"
                },
                cta: "Заказать торт"
            },
            // Bento Cakes section
            bentoCakes: {
                title: "Бенто торты",
                badge: "Мини торты",
                subtitle: "Идеальные порции для особых моментов",
                description: "Бенто торты - это новая тенденция в мире кондитерских изделий. Компактные, стильные и невероятно вкусные мини-торты, идеально подходящие для индивидуального наслаждения или небольших празднований.",
                price: "Цена Бента торта весом около 500 гр 450 лей, в стоимость входит декор, упаковка, и свечка.Цена Бента торта весом около 1кг гр 850 лей, в стоимость входит декор, упаковка, и свечка",
                galleryTitle: "Наша коллекция бенто тортов",
                perfectFor: "Идеально для особых моментов",
                ctaTitle: "Готовы попробовать бенто торт?",
                ctaDescription: "Закажите свой персональный бенто торт уже сегодня. Мы создадим для вас идеальную порцию счастья с уникальным дизайном и невероятным вкусом.",
                features: {
                    personal: "Персональный размер",
                    personalDesc: "Идеальная порция для одного человека",
                    trendy: "Модный дизайн",
                    trendyDesc: "Современные и стильные композиции",
                    quick: "Быстрое приготовление",
                    quickDesc: "Готов за 24 часа",
                    custom: "Индивидуальный подход",
                    customDesc: "Уникальный дизайн под ваши пожелания"
                },
                gallery: {
                    classic: "Классический стиль",
                    birthday: "День рождения",
                    floral: "Цветочный дизайн",
                    chocolate: "Шоколадный",
                    fruit: "Фруктовый",
                    elegant: "Элегантный",
                    colorful: "Яркий",
                    themed: "Тематический"
                }
            },
            // Footer section
            footer: {
                ctaTitle: "Создайте незабываемые моменты",
                ctaSubtitle: "с нашими премиальными тортами и десертами",
                allRightsReserved: "© 2024 Dias Cake. Все права защищены.",
                socialMedia: {
                    facebook: "Фейсбук",
                    instagram: "Инстаграм", 
                    tiktok: "ТикТок"
                }
            },
            // Contacts section
            contacts: {
                subtitle: "Dias Cakes",
                title: "Контакты",
                description: "Вы можете связаться с нами по телефону, 7 дней в неделю, с 9:00 до 17:00. Вы можете написать нам 24/7 на адрес электронной почты.",
                phone: "Телефон",
                phoneNumber: "Звоните: +373 79 42 66 59",
                email: "Электронная почта",
                emailAddress: "Пишите: diascakeshop@gmail.com",
                address: "Адресс",
                addressText: "Посетите: Бд. Куза Водэ 49/1",
                socialText: "Кроме того, мы всегда на связи в социальных сетях.",
                deliveryTitle: "Оплата и доставка",
                deliverySubtitle: "Ниже вы найдете доступные способы оплаты и доставки.",
                paymentMethods: "Способы оплаты.",
                paymentDescription: "Заказы размещаются на сайте diascakes.md, через чат или социальные сети, могут быть получены после следующих действий:",
                paymentOptions: {
                    cash: "Наличными курьеру при получении заказа.",
                    card: "Банковской картой при размещении заказа.",
                    transfer: "Банковским переводом для физических лиц.",
                    invoice: "Банковским переводом для юридических лиц с выставлением счета-фактуры."
                },
                deliveryMethods: "Способы доставки.",
                deliveryDescription: "Заказы размещаются на сайте diascakes.md, через чат или социальные сети, могут быть получены после следующих действий:",
                deliveryOptions: {
                    pickup: "Самовывоз от производителя. Смотрите адрес здесь.",
                    courier: "Доставка нашим курьером с холодильной машиной."
                }
            }
        }
    },
    ro: {
        translation: {
            // Navbar
            navbar: {
                fillings: "Umpluturi",
                candybar: "Candy Bar",
                partnerProjects: "Proiecte Parteneri",
                weddingCakes: "Torturi Nuntă",
                birthdayCakes: "Torturi Aniversare",
                bentoCakes: "Torturi Bento",
                contacts: "Contacte",
                callUs: "Sunați-ne",
                openMenu: "Deschide meniul de navigare",
                closeMenu: "Închide meniul de navigare",
                ariaLabels: {
                    mainNavigation: "Navigație principală",
                    home: "Dias Cake - Acasă",
                    goToHomepage: "Mergi la pagina principală",
                    logoAlt: "Dias Cake - Logo Brutărie Premium",
                    viewFillings: "Vezi secțiunea umpluturi pentru torturi",
                    exploreFillings: "Explorează umpluturile noastre delicioase pentru torturi",
                    viewCandybar: "Vezi secțiunea candy bar",
                    discoverCandybar: "Descoperă oferta noastră de candy bar",
                    viewPartnerProjects: "Vezi secțiunea proiecte parteneri",
                    seeCollaborations: "Vezi proiectele noastre de colaborare",
                    viewWeddingCakes: "Vezi secțiunea torturi de nuntă",
                    browseWeddingCakes: "Răsfoiește torturile noastre frumoase de nuntă",
                    viewBirthdayCakes: "Vezi secțiunea torturi de aniversare",
                    exploreBirthdayCakes: "Explorează colecția noastră de torturi de aniversare",
                    viewBentoCakes: "Vezi secțiunea torturi bento",
                    exploreBentoCakes: "Explorează colecția noastră de torturi bento",
                    viewContacts: "Vezi informațiile noastre de contact",
                    getInTouch: "Ia legătura cu noi",
                    callUsAt: "Sunați-ne la 07857647",
                    clickToCall: "Apasă pentru a ne suna",
                    mobileNavigationLinks: "Link-uri navigație mobilă",
                    closeMobileMenu: "Închide meniul mobil",
                    callUsDirectly: "Apasă pentru a ne suna direct"
                }
            },
            // Header  
            header: {
                title: "Torturi personalizate cu poveste",
                description: "Făcut manual cu grijă în cafenelele, bucătăriile și brutăriile noastre.",
                cta: "Comandă tort",
                ariaLabels: {
                    heroSection: "Secțiune principală",
                    backgroundImage: "Frumoasă bucătărie de brutărie cu proces de fabricare a pâinii artizanale",
                    missionStatement: "Declarația noastră de misiune",
                    exploreMenu: "Explorează meniul și ofertele noastre de torturi",
                    discoverTreats: "Descoperă torturile și dulciurile noastre delicioase"
                }
            },
            // Meta tags and anivesare
            meta: {
                title: "Dias Cake - Brutărie Premium | Torturi Nuntă și Aniversare",
                description: "Dias Cake - brutăria ta premium pentru torturi de nuntă, torturi de aniversare, candy bar și umpluturi unice. Făcut manual cu grijă.",
                keywords: "torturi, torturi nuntă, torturi aniversare, brutărie, candy bar, umpluturi torturi, făcut manual, premium"
            },
            // Fillings section
            fillings: {
                title: "Umpluturile noastre delicioase",
                badge: "Umpluturi",
                subtitle: "Descoperă gusturile unice ale torturilor noastre premium",
                navigation: {
                    previous: "Anterior",
                    next: "Următorul"
                },
                cakes: {
                    plombirCapsuni: {
                        name: "Plombir căpșuni",
                        description: "Blaturi aromate cu vanilie, gem din căpșuni și crema de brînză cu semințe de vanilie",
                        price: "580 lei"
                    },
                    snikers: {
                        name: "Snikers",
                        description: "Alune de pădure caramelizate si caramela in crema de vanilie și blaturi de ciocolată",
                        price: "620 lei"
                    },
                    mangoMaracuia: {
                        name: "Mango maracuia",
                        description: "Blaturi cu aroma de vanilie, gem din mango maracuia, crema de vanilie",
                        price: "590 lei"
                    },
                    oreo: {
                        name: "Oreo",
                        description: "Blaturi de ciocolată, crema cu biscuiți oreo farimitati",
                        price: "580 lei"
                    },
                    padureaNeagra: {
                        name: "Pădurea neagră",
                        description: "Blaturi din pandispan cu cacao, crema de mascarpone cu semințe de vanilie, jeleu de vișine",
                        price: "620 lei"
                    },
                    redVelvetZmeura: {
                        name: "Red velvet cu zmeura",
                        description: "Blaturi umede de red velvet cu crema cu vanilie si insert de zmeura",
                        price: "650 lei"
                    },
                    medovic: {
                        name: "Medovic cu vișine, zmeura sau nuca",
                        description: "Blaturi fragede de patiserie intercalate cu cremă fină de vanilie, pentru un gust clasic și elegant",
                        price: "540 lei"
                    },
                    napoleon: {
                        name: "Napoleon clasic",
                        description: "Straturi de pandișpan cu miere, însiropate ușor, cu cremă fină și umplutură la alegere: vișine, zmeură sau nuci.",
                        price: "550 lei"
                    },
                    fisticZmeura: {
                        name: "Fistic zmeură",
                        description: "Blaturi cu fistic plus însiropate cu pasta de fistic pentru gust mai pronunțat, crema de brînză și pastă de fistic, insert de zmeura",
                        price: "680 lei"
                    }
                }
            },
            // Candybar section
            candybar: {
                badge: "Candybar",
                title: "Delicii dulci pentru toți",
                subtitle: "Fiecare desert este făcut cu grijă și ingrediente de calitate, pentru un răsfăț de neuitat.Descoperă selecția noastră de prăjituri, mousse-uri și tartine artizanale, perfecte pentru momentele speciale.",
                navigation: {
                    previous: "Anterior",
                    next: "Următorul"
                },
                readMore: "Detalii",
                close: "Închide",
                items: {
                    moussePlombirCapsuni: {
                        name: "Mousse Plombir căpșuni",
                        description: "Crema musse cu Pireu de căpșuni, gem de căpșuni, în pahar de aproximativ 100 gr",
                        price: 38
                    },
                    musseMangoMaracuia: {
                        name: "Musse mango maracuia",
                        description: "Până cota cu semințe de vanilie din Madagascar, gem de Mango și maracuia, în pahar de aproximativ 100gr",
                        price: 38
                    },
                    tiramisu: {
                        name: "Tiramisu",
                        description: "Cremă fina cu mascarpone si semințe de vanilie, pișcoturi îmbibate cu cafea, acoperirea cu cacao ~100gr",
                        price: 43
                    },
                    cakePops: {
                        name: "Cake pops",
                        description: "Prăjitură \"Cartoșca\" acoperirea cu ciocolata belgiana ~50 gr",
                        price: 30
                    },
                    cartoscaInghetata: {
                        name: "Cartosca înghețată",
                        description: "Prăjitură Cartoșca în formă de înghețată, acoperirea cu ciocolata belgiana ~80 gr",
                        price: 35
                    },
                    tarteInAsortiment: {
                        name: "Tarte în asortiment",
                        description: "Tarta cu lamiie: crema coapta de unt si faina de migdale si crema curs de lămâie\nTarta cu fructe de sezon: crema fiarta de vanilie si decor fructe de sezon ~100gr",
                        price: 47
                    },
                    eclereleChoux: {
                        name: "Eclerele choux",
                        description: "Aluat de ecler acoperit cu craqelin, crema de vanilie si caramelă, decor crema ganache de ciocolata alba belgiana ~80gr",
                        price: 40
                    },
                    briose: {
                        name: "Brioșe",
                        description: "Chec cu vanilie sau cacao, acoperit cu crema de vanilie ~70 gr",
                        price: 33
                    },
                    zefir: {
                        name: "Zefir",
                        description: "Zefire pufoase din Pireu de căpșuni sau mere ~ 60 gr",
                        price: 28
                    },
                    prajituraMusseSemisfera: {
                        name: "Prăjitură musse semisferă",
                        description: "Musse plombir cu vanilie, acoperirea velur din unt de cacao si ciocolata, inserția de mango si maracuja, baza din biscuit30 sfărâmicios ~100 gr",
                        price: 40
                    },
                    pavlova: {
                        name: "Pavlova",
                        description: "Baza din bezea, crema de mascarpone si vanilie, inserție de fructe, decor fructe de sezon ~80 gr",
                        price: 35
                    },
                    macarons: {
                        name: "Macarons",
                        description: "",
                        price: 35
                    }
                }
            },
            // Partner Projects section
            partnerProjects: {
                title: "Proiecte Parteneri",
                subtitle: "Colaborări de excepție",
                description: "Ne mândrim cu parteneriatele noastre cu companii și organizații de top. Proiectele noastre comune creează experiențe memorabile și produse de înaltă calitate pentru evenimente speciale.",
                cta: "Contactează-ne"
            },
            // Wedding Cakes section
            weddingCakes: {
                title: "Torturi de nuntă",
                badge: "Torturi pentru ocazii speciale",
                subtitle: "Creați magia zilei voastre speciale",
                description: "Torturile noastre de nuntă sunt create cu dragoste și atenție la fiecare detaliu. De la designuri clasice elegante la capodopere artistice moderne - vom realiza tortul visurilor voastre.",
                galleryTitle: "Colecția noastră de torturi de nuntă",
                cta: "Comandă tort de nuntă",
                ctaTitle: "Gata să creați tortul pentru ziua ta specială?",
                ctaDescription: "Comandați tortul dvs. personal de nuntă astăzi. Vom crea pentru dvs. porția perfectă de fericire cu un design unic și un gust incredibil.",
                gallery: {
                    classic: "Torturi clasice",
                    modern: "Designuri moderne",
                    floral: "Compoziții florale",
                    elegant: "Variante elegante"
                }
            },
            // Birthday Cakes section
            birthdayCakes: {
                title: "Torturi de aniversare",
                badge: "Torturi la comandă",
                subtitle: "Faceți fiecare zi de naștere specială",
                description: "Torturi colorate, vesele și delicioase pentru sărbătorirea zilei de naștere. De la petreceri pentru copii la celebrări pentru adulți.",
                features: {
                    themes: "Designuri tematice",
                    sizes: "Orice dimensiuni",
                    quick: "Realizare rapidă"
                },
                cta: "Comandă tort"
            },
            // Bento Cakes section
            bentoCakes: {
                title: "Torturi Bento",
                badge: "Mini Torturi",
                subtitle: "Porții perfecte pentru momente speciale",
                description: "Torturile Bento sunt noua tendință în lumea produselor de cofetărie. Compacte, stilate și incredibil de gustoase, aceste mini-torturi sunt perfecte pentru plăcerea individuală sau sărbători mici.",
                price: "Pretul unui tort Bento de aproximativ 500 gr 450 lei, inclusiv decor, ambalaj și candelă. Pretul unui tort Bento de aproximativ 1 kg 850 lei, inclusiv decor, ambalaj și candelă",
                galleryTitle: "Colecția noastră de torturi Bento",
                perfectFor: "Perfect pentru momente speciale",
                ctaTitle: "Gata să încercați un tort Bento?",
                ctaDescription: "Comandați tortul dvs. personal Bento astăzi. Vom crea pentru dvs. porția perfectă de fericire cu un design unic și un gust incredibil.",
                features: {
                    personal: "Mărime personală",
                    personalDesc: "Porția perfectă pentru o persoană",
                    trendy: "Design la modă",
                    trendyDesc: "Compoziții moderne și stilate",
                    quick: "Preparare rapidă",
                    quickDesc: "Gata în 24 de ore",
                    custom: "Abordare individuală",
                    customDesc: "Design unic după dorințele dvs."
                },
                gallery: {
                    classic: "Stil clasic",
                    birthday: "Zi de naștere",
                    floral: "Design floral",
                    chocolate: "Ciocolată",
                    fruit: "Fructe",
                    elegant: "Elegant",
                    colorful: "Colorat",
                    themed: "Tematic"
                }
            },
            // Footer section
            footer: {
                ctaTitle: "Creează momente de neuitat",
                ctaSubtitle: "cu torturile și deserturile noastre premium",
                allRightsReserved: "© 2024 Dias Cake. Toate drepturile rezervate.",
                socialMedia: {
                    facebook: "Facebook",
                    instagram: "Instagram",
                    tiktok: "TikTok"
                }
            },
            // Contacts section
            contacts: {
                subtitle: "Dias Cakes",
                title: "Contacte",
                description: "Ne puteți contacta telefonic, 7 zile pe săptămână, de la 9:00 până la 17:00. Ne puteți scrie 24/24 la adresa de email.",
                phone: "Telefon",
                phoneNumber: "Sună: +373 79 42 66 59",
                email: "Email",
                emailAddress: "Scrie: diascakeshop@gmail.com",
                address: "Adresă",
                addressText: "Vizitează: Bd. Cuza Vodă 49/1",
                socialText: "În plus, suntem mereu în contact pe rețelele de socializare.",
                deliveryTitle: "Plata și livrarea",
                deliverySubtitle: "Mai jos vedeți modalitățile disponibile de plată și livrare.",
                paymentMethods: "Modalități de plată.",
                paymentDescription: "Comenzile plasate pe site-ul diascakes.md, prin intermediul chat-ului sau rețelelor sociale, pot fi achitate după cum urmează:",
                paymentOptions: {
                    cash: "În numerar la curier, în momentul primirii acesteia.",
                    card: "Card bancar, în momentul primirii comenzii.",
                    transfer: "Transfer bancar, pentru persoane fizice.",
                    invoice: "Transfer bancar, pentru persoane juridice cu oferirea facturii fiscale."
                },
                deliveryMethods: "Modalități de livrare.",
                deliveryDescription: "Comenzile plasate pe site-ul diascakes.md, prin intermediul chat-ului sau rețelelor sociale, pot fi primite după cum urmează:",
                deliveryOptions: {
                    pickup: "Ridicare personală, de la producere. Vezi adresa aici.",
                    courier: "Livrate de către serviciul de curierat propriu, cu mașina frigorifică."
                }
            }
        }
    }
};

// Custom language detector that defaults to RO for non-RU languages
const customLanguageDetector = {
    type: 'languageDetector',
    async: false,
    detect: () => {
        // First check localStorage
        const storedLang = localStorage.getItem('i18nextLng');
        if (storedLang && ['ru', 'ro'].includes(storedLang)) {
            return storedLang;
        }

        // Check browser language
        const browserLang = navigator.language || navigator.languages?.[0];
        if (browserLang && browserLang.toLowerCase().startsWith('ru')) {
            return 'ru';
        }

        // Default to Romanian for all other languages (including en-US)
        return 'ro';
    },
    init: () => { },
    cacheUserLanguage: (lng) => {
        localStorage.setItem('i18nextLng', lng);
    }
};

// Language detection options
const detectionOptions = {
    // Order of language detection methods
    order: ['localStorage', 'navigator', 'htmlTag'],

    // Cache user language
    caches: ['localStorage'],

    // Don't use cookies for GDPR compliance
    excludeCacheFor: ['cimode'],

    // Check for language in localStorage
    lookupLocalStorage: 'i18nextLng',

    // Fallback language - Romanian for non-Russian users
    fallbackLng: 'ro'
};

i18n
    .use(customLanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ro',
        debug: process.env.NODE_ENV === 'development',

        interpolation: {
            escapeValue: false // React already does escaping
        },

        // Optimize for performance
        load: 'languageOnly', // Don't load country-specific variants
        cleanCode: true,

        // SEO optimization
        returnNull: false,
        returnEmptyString: false,

        react: {
            // Optimize React integration
            useSuspense: false,
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'em']
        }
    });

export default i18n;


