import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import classnames from 'classnames/bind';
import feather from 'feather-icons';

import plate from '../../assets/images/plate.png';
import { useTheme } from '../../hooks/useTheme';
import { Switch } from '../../components/Switch';

import styles from './style.module.css';

const cx = classnames.bind(styles);

const Settings: FunctionComponent = () => {
  const { theme, setCurrentTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(theme === 'dark');

  const handleDarkModeToggle = () => {
    if (theme === 'dark') {
      setCurrentTheme('light');
      setDarkMode(false);
    } else {
      setCurrentTheme('dark');
      setDarkMode(true);
    }
  };

  return (
    <>
      <a href="/">
        <div
          class={cx('back-arrow')}
          dangerouslySetInnerHTML={{
            __html: feather.icons['arrow-left'].toSvg({
              'stroke-width': 2,
              color: theme === 'dark' ? '#fff' : '#333',
              height: 30,
              width: 30,
            }),
          }}
        />
      </a>
      <section class={cx('container')}>
        <img class={cx('plate-image')} src={plate} alt="plate" />
        <h1 class={cx('heading-text')}>Settings</h1>
        <div class={cx('settings-item')}>
          <span class={cx('settings-text')}>Dark Mode?</span>
          <form>
            <Switch isOn={darkMode} handleToggle={handleDarkModeToggle} />
          </form>
        </div>
      </section>
    </>
  );
};

export default Settings;
