import { useContext } from 'react';

import { TranslationContext } from '../context/translation';

export const useTranslation = () => {
  const { t, locale, changeLanguage } = useContext(TranslationContext);

  return {
    t,
    locale,
    changeLanguage,
  };
};
