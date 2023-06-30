jest.mock(`react-i18next`, () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: async () => await new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: `3rdParty`,
    init: () => {},
  },
}));
