import React from 'react';
import classnames from 'classnames/bind';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Link, useHistory } from 'react-router-dom';

import { supabase } from '../../helpers/supabase';
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
      try {
        const { error, user } = await supabase.auth.signIn({
          email,
          password,
        });

        if (error) {
          alert('Error logging in: ' + error.message);
        } else if (!error && !user) {
          alert('Check your email for the login link!');
        } else {
          history.push('/');
        }
      } catch (error) {
        console.error('Error thrown:', error.message);
        alert(error.error_description || error);
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
