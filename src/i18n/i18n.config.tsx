import i18next from "i18next";
import {initReactI18next } from "react-i18next";
import { ch, en, fr, ja, ko, vi } from "./translations";

const resources ={
    en:{
        translation: en,
    },
    fr:{
        translation: fr,
    },
    vi:{
        translation: vi,
    },
    ch:{
        translation: ch,
    },
    ko:{
        translation: ko,
    },
    ja:{
        translation: ja,
    },
}



i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources,
})

export default i18next;