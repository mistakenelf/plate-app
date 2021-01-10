import React, { useState } from 'react';
import classnames from 'classnames/bind';

import { useTheme } from '../../../../lib/hooks/useTheme';
import { useI18n } from '../../../../lib/hooks/useI18n';
import { Switch } from '../../../../components/Switch';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const DarkTheme: React.FC = () => {
  const { i18n } = useI18n();
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
      <span className={cx('settings-text')}>
        {i18n.t('settings.darkModeLabel')}
      </span>
      <Switch
        id="darkModeToggle"
        isOn={darkMode}
        handleToggle={handleDarkModeToggle}
      />
    </div>
  );
};
