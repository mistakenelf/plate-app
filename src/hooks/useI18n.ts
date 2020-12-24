import { useContext } from 'react';

import { I18nContext } from '../context/i18n';

export const useI18n = () => {
  const { translate } = useContext(I18nContext);

  return {
    translate,
  };
};
