import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';
import NavigationBar from './NavigationBar';

interface IProps {
  imageUrl?: string;
}

const Layout = ({ imageUrl }: IProps) => {
  const backgroundImage = imageUrl ?? '/defaultWallpaper.webp';
  return (
    <div className={styles.layoutWrapper}>
      <img className={styles.layoutBack} src={backgroundImage} alt='background' />
      <div className={styles.layoutFront}>
        <NavigationBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
