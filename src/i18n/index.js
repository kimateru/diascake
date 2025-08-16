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
                title: "Наши Восхитительные Начинки",
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
            // Meta tags and SEO
            meta: {
                title: "Dias Cake - Brutărie Premium | Torturi Nuntă și Aniversare",
                description: "Dias Cake - brutăria ta premium pentru torturi de nuntă, torturi de aniversare, candy bar și umpluturi unice. Făcut manual cu grijă.",
                keywords: "torturi, torturi nuntă, torturi aniversare, brutărie, candy bar, umpluturi torturi, făcut manual, premium"
            },
            // Fillings section
            fillings: {
                title: "Umpluturile Noastre Delicioase",
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


