import React from 'react';
import classnames from 'classnames/bind';

import { useTranslation } from '../../../../lib/hooks/useTranslation';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return <h1 className={cx('header-text')}>{t('plates.header')}</h1>;
};
