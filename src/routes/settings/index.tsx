import React from 'react';
import classnames from 'classnames/bind';
import feather from 'feather-icons';
import { Link } from 'react-router-dom';

import plate from '../../assets/images/plate.png';
import { useTheme } from '../../hooks/useTheme';

import { DarkTheme } from './components/DarkTheme';
import { Language } from './components/Language';
import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Settings: React.FC = () => {
  const { theme } = useTheme();

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
        <img src={plate} alt="plate" />
        <h1 className={cx('heading-text')}>Settings</h1>
        <DarkTheme />
        <Language />
      </section>
    </>
  );
};

export default Settings;
