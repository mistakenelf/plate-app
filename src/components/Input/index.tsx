import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface CustomInputProps {
  inputLabel?: React.ReactNode;
  error?: string;
  ref?: any;
  isLoading?: boolean;
  subtext?: string;
  inputAdornment?: React.ReactNode;
  labelHidden?: boolean;
}

type InputProps = CustomInputProps & React.HTMLProps<HTMLInputElement>;

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  return (
    <>
      <label
        htmlFor={props.id}
        className={cx({ 'sr-only': props.labelHidden })}
      >
        {props.inputLabel}
      </label>
      <div className={cx('input-container')}>
        <input
          type={props.type || 'text'}
          defaultValue={props.defaultValue}
          value={props.value}
          ref={ref}
          name={props.name}
          disabled={props.disabled}
          placeholder={props.placeholder}
          className={cx('app-input', {
            'input-error': !!props.error,
          })}
          onChange={props.onChange}
          onBlur={props.onBlur}
          pattern={props.pattern}
        />
        {props.inputAdornment && (
          <div className={cx('adornment-container')}>
            {props.inputAdornment}
          </div>
        )}
      </div>
      {props.error && (
        <span className={cx('error-message')}>{props.error}</span>
      )}
      {props.subtext && (
        <div className={cx('input-subtext')}>{props.subtext}</div>
      )}
    </>
  );
});
