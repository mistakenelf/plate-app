import { useContext } from 'react';

import { I18nContext } from '../context/i18n';

export const useI18n = () => {
  const { i18n, changeLanguage } = useContext(I18nContext);

  return {
    i18n,
    changeLanguage,
  };
};
