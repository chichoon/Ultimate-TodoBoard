import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';
import SideNavigationBar from './SideNavigationBar';
import TopNavigationBar from './TopNavigationBar';

interface IProps {
  imageUrl?: string;
}

const Layout = ({ imageUrl }: IProps) => {
  const backgroundImage = imageUrl ?? '/defaultWallpaper.webp';
  return (
    <div className={styles.layoutWrapper}>
      <img className={styles.layoutBack} src={backgroundImage} alt='background' />
      <div className={styles.layoutFront}>
        <TopNavigationBar />
        <div className={styles.layoutBottom}>
          <SideNavigationBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
