import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface AddTodoInputProps {
  inputValue: string;
  onChange: (e: Event) => void;
}

export const AddTodoInput: FunctionComponent<AddTodoInputProps> = ({
  inputValue,
  onChange,
}) => {
  return (
    <input
      class={cx('input')}
      type="text"
      value={inputValue}
      onChange={onChange}
      placeholder="Enter an item to add"
    />
  );
};
