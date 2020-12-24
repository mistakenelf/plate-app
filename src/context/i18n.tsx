import React, { createContext, useReducer } from 'react';

import EN from '../assets/i18n/en.json';

interface Translations {
  [key: string]: any;
}

interface InitialState {
  langCode: string;
  translate: (code: string) => Translations;
}

interface Action {
  type: string;
  payload: string;
}

const translations: Translations = {
  en: EN,
};

const getTranslations = (langCode: string) => (key: string) =>
  translations[langCode][key] || key;

const initialState = {
  langCode: 'en',
  translate: getTranslations('en'),
};

export const I18nContext = createContext(initialState);

export const I18nProvider: React.FC = ({ children }) => {
  const reducer = (state: InitialState, action: Action) => {
    switch (action.type) {
      case 'setLanguage':
        return {
          langCode: action.payload,
          translate: getTranslations(action.payload),
        };
      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};
