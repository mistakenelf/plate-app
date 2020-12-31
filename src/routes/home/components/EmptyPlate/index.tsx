import React from 'react';
import feather from 'feather-icons';
import classnames from 'classnames/bind';

import { useTheme } from '../../../../hooks/useTheme';
import { useI18n } from '../../../../hooks/useI18n';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const EmptyPlate: React.FC = () => {
  const { theme } = useTheme();
  const { i18n } = useI18n();

  return (
    <div className={cx('empty-container')}>
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
      <p className={cx('empty-text')}>{i18n.t('home.emptyPlate')}</p>
    </div>
  );
};
