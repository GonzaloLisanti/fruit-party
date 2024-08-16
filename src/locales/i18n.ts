// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation.json';
import esTranslation from './es/translation.json';

i18n
  .use(initReactI18next) // pasar i18n al react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: 'es', // lenguaje por defecto
    fallbackLng: 'en', // lenguaje de respaldo
    interpolation: {
      escapeValue: false, // react ya se encarga de la seguridad
    },
  });

export default i18n;
