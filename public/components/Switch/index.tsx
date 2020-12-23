import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface SwitchProps {
  id: string;
  isOn: boolean;
  handleToggle: () => void;
}

export const Switch: FunctionComponent<SwitchProps> = ({
  id,
  isOn,
  handleToggle,
}) => {
  const toggleHandler = (e: Event) => {
    e.preventDefault();

    handleToggle();
  };

  return (
    <>
      <input
        className={cx('switch-checkbox')}
        id={id}
        type="checkbox"
        checked={isOn}
        onClick={toggleHandler}
      />
      <label
        className={cx(['switch-label', { activated: isOn, inactive: !isOn }])}
        htmlFor={id}
      >
        <span className={cx('switch-button')} />
      </label>
    </>
  );
};
