import React from 'react';
import classnames from 'classnames/bind';

import plate from '../../assets/images/plate.png';
import { useTranslation } from '../../lib/hooks/useTranslation';
import { BackArrow } from '../../components/BackArrow';

import { DarkTheme } from './components/DarkTheme';
import { Language } from './components/Language';
import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Settings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <BackArrow />
      <section className={cx('container')}>
        <img src={plate} alt="plate" />
        <h1 className={cx('heading-text')}>{t('settings.header')}</h1>
        <DarkTheme />
        <Language />
      </section>
    </>
  );
};

export default Settings;
