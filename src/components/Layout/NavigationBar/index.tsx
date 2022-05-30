import { DashboardIcon, SettingsIcon, StatsIcon } from 'assets/svgs';
import { NavLink } from 'react-router-dom';
import styles from './navigationBar.module.scss';
import cx from 'classnames';

const NAVLINK_DATA: string[] = ['dashboard', 'statistics', 'settings'];
interface IIconObj {
  [index: string]: JSX.Element;
}

const NavigationBar = () => {
  const navIcons: IIconObj = {
    dashboard: <DashboardIcon />,
    statistics: <StatsIcon />,
    settings: <SettingsIcon />,
  };

  return (
    <nav className={styles.navigationBarWrapper}>
      <h3>
        <b>chichoon</b>님 안녕하세요!
      </h3>{' '}
      {/* TODO: 닉네임 교체 */}
      <ul className={styles.navigationBarUL}>
        {NAVLINK_DATA.map((item) => (
          <li key={`navlink-${item}`}>
            <NavLink to={item} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              {navIcons[item]}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
