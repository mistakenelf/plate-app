import React from 'react';
import classnames from 'classnames/bind';

import { useI18n } from '../../../../hooks/useI18n';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Language: React.FC = () => {
  const { i18n, changeLanguage } = useI18n();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className={cx('settings-item')}>
      <span className={cx('settings-text')}>
        {i18n.t('settings.languageLabel')}
      </span>
      <select
        className={cx('language-select')}
        onBlur={handleLanguageChange}
        defaultValue={i18n.locale()}
      >
        <option value="en">{i18n.t('settings.languages.english')}</option>
        <option value="es">{i18n.t('settings.languages.spanish')}</option>
      </select>
      <div className={cx('caret')} />
    </div>
  );
};
