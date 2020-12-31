import React, { createContext, useState } from 'react';
import rosetta, { Rosetta } from 'rosetta';

import en from '../assets/locales/en.json';
import es from '../assets/locales/es.json';

interface I18nContextProps {
  i18n: Rosetta<any>;
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
}

export const I18nContext = createContext({} as I18nContextProps);

const i18n = rosetta({
  en,
  es,
});

i18n.locale('en');

export const I18nProvider: React.FC = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = (lang: string) => {
    i18n.locale(lang);
    setCurrentLanguage(lang);
  };

  return (
    <I18nContext.Provider value={{ i18n, currentLanguage, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};
