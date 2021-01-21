import React from 'react';
import classnames from 'classnames/bind';
import { FiAlertTriangle } from 'react-icons/fi';

import { useTheme } from '../../../../lib/hooks/useTheme';
import { useTranslation } from '../../../../lib/hooks/useTranslation';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const EmptyPlate: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={cx('empty-container')}>
      <FiAlertTriangle
        className={cx('alert-icon')}
        color={theme === 'light' ? '#333' : '#fff'}
        strokeWidth={1}
      />
      <p className={cx('empty-text')}>{t('plateDetails.emptyPlate')}</p>
    </div>
  );
};
