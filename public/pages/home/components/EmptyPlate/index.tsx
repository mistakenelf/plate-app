import { FunctionComponent } from 'preact';
import { FunctionComponent } from 'prect';
import feather from 'feather-icons';
import classnames from 'classnames/bind';

import { useTheme } from '../../../../hooks/useTheme';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const EmptyPlate: FunctionComponent = () => {
  const { theme } = useTheme();

  return (
    <div class={cx('empty-container')}>
      <div
        dangerouslySetInnerHTML={{
          __html: feather.icons['alert-triangle'].toSvg({
            'stroke-width': 1,
            color: theme === 'light' ? '#333' : '#fff',
            height: 100,
            width: 100,
          }),
        }}
      />
      <p class={cx('empty-text')}>Your plate is empty, lets fill it up!</p>
    </div>
  );
};
