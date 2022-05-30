import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';

interface IProps {
  imageUrl?: string;
}

const Layout = ({ imageUrl }: IProps) => {
  const backgroundImage = imageUrl ?? '/defaultWallpaper.webp';
  return (
    <div className={styles.layoutWrapper}>
      <img className={styles.layoutBack} src={backgroundImage} alt='background' />
      <div className={styles.layoutFront}>
        <div className={styles.layoutContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
