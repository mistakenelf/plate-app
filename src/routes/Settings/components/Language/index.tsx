import React from 'react';
import classnames from 'classnames/bind';

import { useTranslation } from '../../../../lib/hooks/useTranslation';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Language: React.FC = () => {
  const { t, locale, changeLanguage } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className={cx('settings-item')}>
      <span className={cx('settings-text')}>{t('settings.languageLabel')}</span>
      <select
        className={cx('language-select')}
        onBlur={handleLanguageChange}
        defaultValue={locale}
      >
        <option value="en">{t('settings.languages.english')}</option>
        <option value="es">{t('settings.languages.spanish')}</option>
      </select>
      <div className={cx('caret')} />
    </div>
  );
};
