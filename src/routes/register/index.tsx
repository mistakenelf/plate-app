import React from 'react';
import classnames from 'classnames/bind';
import * as yup from 'yup';
import { useFormik } from 'formik';

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

const Register: React.FC = () => {
  const { i18n } = useI18n();
  const { values, handleChange, handleSubmit, isSubmitting } = useFormik({
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
        const result = await supabase.auth.signUp({
          email,
          password,
        });

        if (result.error) {
          alert(result.error.message);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      <BackArrow />
      <section className={cx('container')}>
        <h1 className={cx('header-text')}>{i18n.t('register.headerText')}</h1>
        <form className={cx('register-form')} onSubmit={handleSubmit}>
          <Input
            inputLabel={i18n.t('register.emailInputLabel')}
            type="email"
            placeholder={i18n.t('register.emailInputPlaceholder')}
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <div className={cx('separator')} />
          <Input
            inputLabel={i18n.t('register.passwordInputLabel')}
            type="password"
            placeholder={i18n.t('register.passwordInputPlaceholder')}
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <div className={cx('separator')} />
          <Button type="submit" block isLoading={isSubmitting}>
            {i18n.t('register.submitButton')}
          </Button>
        </form>
      </section>
    </>
  );
};

export default Register;
