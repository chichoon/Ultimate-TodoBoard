import { useState } from 'react';
import { useLocation } from 'react-use';
import { Outlet } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

import styles from './layout.module.scss';
import SideNavigationBar from './SideNavigationBar';
import TopNavigationBar from './TopNavigationBar';

const Layout = () => {
  const [isBarHidden, setIsBarHidden] = useState(true);
  const location = useLocation();
  const { pathname } = location;
  const titleString = {
    '/': '대시보드',
    '/dashboard': '대시보드',
    '/settings': '설정',
    '/statistics': '통계',
  }[pathname ?? '/'];

  return (
    <div className={styles.layoutWrapper}>
      <TopNavigationBar setIsBarHidden={setIsBarHidden} />
      <ErrorMessage />
      <div className={styles.layoutBottom}>
        <SideNavigationBar isBarHidden={isBarHidden} />
        <div className={styles.layoutOutlet}>
          <header className={styles.dashboardHeader}>
            <h1>{titleString}</h1>
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
