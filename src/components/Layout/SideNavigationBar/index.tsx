import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import { DashboardIcon, SettingsIcon, StatsIcon } from 'assets/svgs';
import styles from './sideNavigationBar.module.scss';

const NAVLINK_DATA: string[] = ['dashboard', 'statistics', 'settings'];

interface IIconObj {
  [index: string]: JSX.Element;
}

const SideNavigationBar = () => {
  const navIcons: IIconObj = {
    dashboard: <DashboardIcon />,
    statistics: <StatsIcon />,
    settings: <SettingsIcon />,
  };
  return (
    <div className={styles.navigationBarWrapper}>
      <ul className={styles.navigationBarUL}>
        {NAVLINK_DATA.map((item) => (
          <li key={`navlink-${item}`}>
            <NavLink to={item} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              {navIcons[item]}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavigationBar;
