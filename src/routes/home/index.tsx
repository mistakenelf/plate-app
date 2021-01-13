import React from 'react';
import classnames from 'classnames/bind';

import { Header } from './components/Header';
import { WelcomeText } from './components/WelcomeText';
import { MainMenu } from './components/MainMenu';
import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <section className={cx('container')}>
        <WelcomeText />
        <MainMenu />
      </section>
    </>
  );
};
