import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Language: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={cx('settings-item')}>
      <span className={cx('settings-text')}>{t('settings.languageLabel')}</span>
      <select onBlur={handleLanguageChange} defaultValue={i18n.language}>
        <option value="en">{t('settings.languages.english')}</option>
        <option value="es">{t('settings.languages.spanish')}</option>
      </select>
    </div>
  );
};
