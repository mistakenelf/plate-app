import React, { useState } from 'react';
import classnames from 'classnames/bind';
import feather from 'feather-icons';
import { Link } from 'react-router-dom';

import plate from '../../assets/images/plate.png';
import { useTheme } from '../../hooks/useTheme';
import { Switch } from '../../components/Switch';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Settings: React.FC = () => {
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
    <>
      <Link to="/">
        <div
          className={cx('back-arrow')}
          dangerouslySetInnerHTML={{
            __html: feather.icons['arrow-left'].toSvg({
              'stroke-width': 2,
              color: theme === 'dark' ? '#fff' : '#333',
              height: 30,
              width: 30,
            }),
          }}
        />
      </Link>
      <section className={cx('container')}>
        <img className={cx('plate-image')} src={plate} alt="plate" />
        <h1 className={cx('heading-text')}>Settings</h1>
        <div className={cx('settings-item')}>
          <span className={cx('settings-text')}>Dark Mode?</span>
          <Switch
            id="darkModeToggle"
            isOn={darkMode}
            handleToggle={handleDarkModeToggle}
          />
        </div>
      </section>
    </>
  );
};

export default Settings;
