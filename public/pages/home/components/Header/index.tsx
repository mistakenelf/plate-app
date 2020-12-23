import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: FunctionComponent = () => {
  return (
    <div class={cx('container')}>
      <div class={cx('action-row')}>
        <a href="/settings" class={cx('settings-link')}>
          Settings
        </a>
      </div>
      <h1 class={cx('header-text')}>Whats on your Plate?</h1>
    </div>
  );
};
