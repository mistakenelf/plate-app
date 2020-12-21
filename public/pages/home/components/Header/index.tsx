import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: FunctionComponent = () => {
  return <h1 class={cx('header')}>Whats on your Plate?</h1>;
};
