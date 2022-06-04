import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import { DashboardIcon, SettingsIcon, StatsIcon } from 'assets/svgs';
import styles from './sideNavigationBar.module.scss';

const NAVLINK_DATA: string[] = ['dashboard', 'statistics', 'settings'];

interface IIconObj {
  [index: string]: JSX.Element;
}

interface IProps {
  isBarHidden: boolean;
}

const SideNavigationBar = ({ isBarHidden }: IProps) => {
  const navIcons: IIconObj = {
    dashboard: <DashboardIcon />,
    statistics: <StatsIcon />,
    settings: <SettingsIcon />,
  };

  return (
    <nav className={cx(styles.navigationBarWrapper, { [styles.isBarHidden]: isBarHidden })}>
      <ul className={styles.navigationBarUL}>
        {NAVLINK_DATA.map((item) => (
          <li key={`navlink-${item}`}>
            <NavLink to={item} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              <div className={styles.navigationBarItem}>{navIcons[item]}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavigationBar;
