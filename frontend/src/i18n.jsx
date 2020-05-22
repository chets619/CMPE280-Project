import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    Introduction: "Welcome to our Wildfire App!",
                    HomeDesc: "Below mapped are the details for various fires in your area! Register to stay get updates in real time about fires in your area! ",
                    About: "About",
                    Register: "Register",
                    Login: "Login",
                    Logout: "Logout",
                    Year: "Year",
                    Cause: "Cause",
                    FooterDesc: " App to keep track of wildfires at locations and register to stay updated",
                    Navigation: "Navigation",
                    Home: "Home",
                    "How it works": "How it works",
                    Pricing: "Pricing",
                    "Useful Links": "Useful Links",
                    "My Account": "My Account",
                    "About Us": "About Us",
                    FAQ: "FAQ",
                    "Contact Details": "Contact Details",


                    Wildfires: "Wildfires",
                    AboutDesc: "An uncontrolled fire in an area of combustible vegetation occurring in rural areas.",
                    Stats: "Stats: Largest wildfires of the last decade",
                    "Who are we": "Who are we?",
                    WhoDesc: "Just a group of individuals trying to help the community by doing whatever we do best!",
                    Team: "Our team",
                    TeamDesc: "Thanks to everyone responsible in making this project a success!",
                    SoftDev: "Software Engineer",


                    Name: "Name",
                    Email: "Email address",
                    Password: "Password",
                    CPassword: "Confirm Password",
                    City: "City",
                    Phone: "Phone Number",
                    Update: "Update",
                    Submit: "Submit",

                    Mark: "Mark co-ordinates for getting fire updates!",


                    Login: "Login",
                    EDesc: "We'll never share your email with anyone else."
                }
            },

            hin: {
                translations: {
                    "About": "के बारे में",
                    "About Us": "हमारे बारे में",
                    "AboutDesc": "ग्रामीण क्षेत्रों में होने वाली दहनशील वनस्पतियों के क्षेत्र में एक अनियंत्रित आग।",
                    "CPassword": "पासवर्ड की पुष्टि कीजिये",
                    "Cause": "कारण",
                    "City": "शहर",
                    "Contact Details": "संपर्क विवरण",
                    "EDesc": "हम आपके ईमेल को कभी भी किसी और के साथ साझा नहीं करेंगे।",
                    "Email": "ईमेल पता",
                    "FAQ": "सामान्य प्रश्न",
                    "FooterDesc": " एप्लिकेशन स्थानों पर जंगल की आग पर नज़र रखने और अद्यतन रहने के लिए रजिस्टर करने के लिए",
                    "Home": "होम",
                    "HomeDesc": "नीचे मैप किए गए आपके क्षेत्र में विभिन्न आग के विवरण हैं! अपने क्षेत्र में आग के बारे में वास्तविक समय में अपडेट पाने के लिए रजिस्टर करें!",
                    "How it works": "यह काम किस प्रकार करता है",
                    "Introduction": "हमारे जंगल की आग अनुप्रयोग में आपका स्वागत है!",
                    "Login": "लॉग इन करें",
                    "Logout": "लोग आउट",
                    "Mark": "फायर अपडेट पाने के लिए मार्क को-ऑर्डिनेट करें!",
                    "My Account": "मेरा खाता",
                    "Name": "नाम",
                    "Navigation": "पथ प्रदर्शन",
                    "Password": "पारण शब्द",
                    "Phone": "फ़ोन नंबर",
                    "Pricing": "मूल्य निर्धारण",
                    "Register": "रजिस्टर",
                    "SoftDev": "सॉफ्टवेयर इंजीनियर",
                    "Stats": "आँकड़े: पिछले दशक के सबसे बड़े जंगल",
                    "Submit": "जमा करें",
                    "Team": "हमारी टीम",
                    "TeamDesc": "इस परियोजना को सफल बनाने में जिम्मेदार सभी को धन्यवाद!",
                    "Update": "अद्यतन करें",
                    "Useful Links": "उपयोगी कड़ियाँ",
                    "Who are we": "हम कौन हैं?",
                    "WhoDesc": "बस हम जो कुछ भी करते हैं, उसे करके समुदाय की मदद करने की कोशिश करने वाले व्यक्तियों का एक समूह!",
                    "Wildfires": "जंगल की आग",
                    "Year": "साल",

                }
            },

            ger: {
                translations: {
                    "About": "Über",
                    "About Us": "Über uns",
                    "AboutDesc": "Ein unkontrolliertes Feuer in einem Gebiet mit brennbarer Vegetation in ländlichen Gebieten.",
                    "CPassword": "Passwort bestätigen",
                    "Cause": "Ursache",
                    "City": "Stadt",
                    "Contact Details": "Kontakt details",
                    "EDesc": "Wir werden Ihre E-Mail-Adresse niemals an Dritte weitergeben.",
                    "Email": "E-Mail-Addresse",
                    "FAQ": "FAQ",
                    "FooterDesc": " App, um Waldbrände an Orten zu verfolgen und sich zu registrieren, um auf dem Laufenden zu bleiben",
                    "Home": "Zuhause",
                    "HomeDesc": "Unten sind die Details für verschiedene Brände in Ihrer Nähe abgebildet! Registrieren Sie sich, um in Echtzeit über Brände in Ihrer Nähe informiert zu werden!",
                    "How it works": "Wie es funktioniert",
                    "Introduction": "Willkommen in unserer Wildfire App!",
                    "Login": "Anmeldung",
                    "Logout": "Ausloggen",
                    "Mark": "Markieren Sie die Koordinaten, um Feuer-Updates zu erhalten!",
                    "My Account": "Mein Konto",
                    "Name": "Name",
                    "Navigation": "Navigation",
                    "Password": "Passwort",
                    "Phone": "Telefonnummer",
                    "Pricing": "Preisgestaltung",
                    "Register": "Registrieren",
                    "SoftDev": "Softwareentwickler",
                    "Stats": "Statistik: Größte Waldbrände des letzten Jahrzehnts",
                    "Submit": "einreichen",
                    "Team": "Unser Team",
                    "TeamDesc": "Vielen Dank an alle, die für den Erfolg dieses Projekts verantwortlich sind!",
                    "Update": "Aktualisieren",
                    "Useful Links": "Nützliche Links",
                    "Who are we": "Wer sind wir?",
                    "WhoDesc": "Nur eine Gruppe von Einzelpersonen, die versuchen, der Gemeinschaft zu helfen, indem sie das tun, was wir am besten können!",
                    "Wildfires": "Waldbrände",
                    "Year": "Jahr",
                }
            }
        },
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ","
        },

        react: {
            wait: true
        }
    });

export default i18n;