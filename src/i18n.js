import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arTranslations from './Translate/arTranslations.json';
import enTranslations from './Translate/enTranslations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations }
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
