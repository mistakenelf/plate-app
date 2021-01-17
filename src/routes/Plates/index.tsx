import React from 'react';
import classnames from 'classnames/bind';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Header } from './components/Header';
import { AddPlateInput } from './components/AddPlateInput';
import styles from './style.module.css';

const cx = classnames.bind(styles);

const validationSchema = yup.object().shape({
  plate: yup.string().trim().required('Name for plate is required'),
});

const Plates: React.FC = () => {
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    validationSchema,
    initialErrors: {
      plate: '',
    },
    initialValues: {
      plate: '',
    },
    onSubmit: async ({ plate }) => {
      setFieldValue('plate', '');
    },
  });

  return (
    <section className={cx('container')}>
      <Header />
      <form className={cx('add-plate-form')} onSubmit={handleSubmit}>
        <AddPlateInput inputValue={values.plate} onChange={handleChange} />
      </form>
    </section>
  );
};

export default Plates;
