import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';
import SideNavigationBar from './SideNavigationBar';
import TopNavigationBar from './TopNavigationBar';

interface IProps {
  imageUrl?: string;
}

const Layout = ({ imageUrl }: IProps) => {
  const backgroundImage = imageUrl ?? '/seashore.webp';
  const [isBarHidden, setIsBarHidden] = useState(true);

  return (
    <div className={styles.layoutWrapper}>
      <img className={styles.layoutBack} src={backgroundImage} alt='background' />
      <div className={styles.layoutFront}>
        <TopNavigationBar setIsBarHidden={setIsBarHidden} />
        <div className={styles.layoutBottom}>
          <SideNavigationBar isBarHidden={isBarHidden} />
          <div className={styles.layoutOutlet}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
