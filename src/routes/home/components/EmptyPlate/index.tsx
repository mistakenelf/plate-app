import React from 'react';
import classnames from 'classnames/bind';
import { FiAlertTriangle } from 'react-icons/fi';

import { useTheme } from '../../../../hooks/useTheme';
import { useI18n } from '../../../../hooks/useI18n';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const EmptyPlate: React.FC = () => {
  const { theme } = useTheme();
  const { i18n } = useI18n();

  return (
    <div className={cx('empty-container')}>
      <FiAlertTriangle
        className={cx('alert-icon')}
        color={theme === 'light' ? '#333' : '#fff'}
        strokeWidth={1}
      />
      <p className={cx('empty-text')}>{i18n.t('home.emptyPlate')}</p>
    </div>
  );
};
