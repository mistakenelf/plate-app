import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface SwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

export const Switch: FunctionComponent<SwitchProps> = ({
  isOn,
  handleToggle,
}) => {
  return (
    <button
      type="button"
      onClick={handleToggle}
      class={cx('toggle', { activated: isOn, inactive: !isOn })}
    />
  );
};
