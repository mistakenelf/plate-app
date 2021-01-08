import React from 'react';
import classnames from 'classnames/bind';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useI18n } from '../../hooks/useI18n';
import { BackArrow } from '../../components/BackArrow';
import { useAuth } from '../../hooks/useAuth';

import styles from './style.module.css';

const cx = classnames.bind(styles);

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Email is invalid')
    .required('Email is required'),
});

const Login: React.FC = () => {
  const { i18n } = useI18n();
  const history = useHistory();
  const { login } = useAuth();
  const {
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
  } = useFormik({
    validationSchema,
    initialErrors: {
      email: '',
    },
    initialValues: {
      email: '',
    },
    onSubmit: ({ email }) => {
      try {
        login(email);
        history.push('/');
      } catch (e) {
        console.error(e.message);
      }
    },
  });

  return (
    <>
      <BackArrow />
      <section className={cx('container')}>
        <h1 className={cx('header-text')}>{i18n.t('login.headerText')}</h1>
        <form className={cx('login-form')} onSubmit={handleSubmit}>
          <Input
            inputLabel={i18n.t('login.emailInputLabel')}
            type="email"
            placeholder={i18n.t('login.emailInputPlaceholder')}
            id="email"
            name="email"
            error={errors.email}
            value={values.email}
            onChange={handleChange}
          />
          <div className={cx('separator')} />
          <Button type="submit" block isLoading={isSubmitting}>
            {i18n.t('login.submitButton')}
          </Button>
        </form>
      </section>
    </>
  );
};

export default Login;
