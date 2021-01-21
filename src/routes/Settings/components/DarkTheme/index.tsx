import React, { useState } from 'react';
import classnames from 'classnames/bind';

import { useTheme } from '../../../../lib/hooks/useTheme';
import { useTranslation } from '../../../../lib/hooks/useTranslation';
import { Switch } from '../../../../components/Switch';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const DarkTheme: React.FC = () => {
  const { t } = useTranslation();
  const { theme, setCurrentTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(theme === 'dark');

  const handleDarkModeToggle = () => {
    if (theme === 'dark') {
      setCurrentTheme('light');
      setDarkMode(false);
    } else {
      setCurrentTheme('dark');
      setDarkMode(true);
    }
  };

  return (
    <div className={cx('settings-item')}>
      <span className={cx('settings-text')}>{t('settings.darkModeLabel')}</span>
      <Switch
        id="darkModeToggle"
        isOn={darkMode}
        handleToggle={handleDarkModeToggle}
      />
    </div>
  );
};
