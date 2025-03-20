import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Don't Laugh Challenge",
      jokePlaceholder: "Joke goes here",
      changeJoke: "Change Joke",
      changeLanguage: "Change Language",
    },
  },
  ar: {
    translation: {
      title: "تحدي انك تضحك أصلاً",
      jokePlaceholder: "النكتة هتنزل هنا يا عسل",
      changeJoke: "اقلب لو مضحكتش",
      changeLanguage: "غير اللغة يا معلم 👨‍🏫",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
