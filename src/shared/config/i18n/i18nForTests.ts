import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import FsBackend from 'i18next-fs-backend';

const i18ForTests = i18n;

void i18ForTests
  .use(initReactI18next)
  .use(FsBackend)
  .init({
    supportedLngs: [`en`, `ru`],

    fallbackLng: `en`,
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false,
    },

    initImmediate: false,

    backend: {
      loadPath: (language: string, namespace: string) => `public/locales/${language}/${namespace}.json`,
    },
  });

export default i18ForTests;
