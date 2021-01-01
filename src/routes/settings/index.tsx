import React from 'react';
import classnames from 'classnames/bind';

import plate from '../../assets/images/plate.png';
import { useI18n } from '../../hooks/useI18n';
import { BackArrow } from '../../components/BackArrow';

import { DarkTheme } from './components/DarkTheme';
import { Language } from './components/Language';
import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Settings: React.FC = () => {
  const { i18n } = useI18n();

  return (
    <>
      <BackArrow />
      <section className={cx('container')}>
        <img src={plate} alt="plate" />
        <h1 className={cx('heading-text')}>{i18n.t('settings.header')}</h1>
        <DarkTheme />
        <Language />
      </section>
    </>
  );
};

export default Settings;
