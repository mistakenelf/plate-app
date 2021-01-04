import React from 'react';
import classnames from 'classnames/bind';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Link, useHistory } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useI18n } from '../../hooks/useI18n';
import { BackArrow } from '../../components/BackArrow';

import styles from './style.module.css';

const cx = classnames.bind(styles);

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Email is invalid')
    .required('Email is required'),
  password: yup.string().trim().required('Password is required'),
});

const Login: React.FC = () => {
  const { i18n } = useI18n();
  const history = useHistory();
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
      password: '',
    },
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }) => {
      console.log('handle login');
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
          <Input
            inputLabel={i18n.t('login.passwordInputLabel')}
            type="password"
            placeholder={i18n.t('login.passwordInputPlaceholder')}
            id="password"
            name="password"
            error={errors.password}
            value={values.password}
            onChange={handleChange}
          />
          <Link className={cx('no-account-link')} to="/register">
            Dont have an account?
          </Link>
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
