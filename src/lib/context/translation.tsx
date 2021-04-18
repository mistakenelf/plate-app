import React, { createContext, useState } from 'react';
import rosetta from 'rosetta';

import en from '../../assets/locales/en.json';
import es from '../../assets/locales/es.json';

interface TranslationContextProps {
  locale: string;
  currentLanguage: string;
  t: (key: string) => string;
  changeLanguage: (lang: string) => void;
}

export const TranslationContext = createContext({} as TranslationContextProps);

const i18n = rosetta({
  en,
  es,
  de,
});

i18n.locale('en');

export const TranslationProvider: React.FC = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = (lang: string) => {
    i18n.locale(lang);
    setCurrentLanguage(lang);
  };

  return (
    <TranslationContext.Provider
      value={{
        t: i18n.t,
        locale: i18n.locale(),
        currentLanguage,
        changeLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
