import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';

interface IProps {
  imageUrl: string;
}

const Layout = ({ imageUrl }: IProps) => {
  const backgroundImage = imageUrl ?? '/defaultWallpaper';
  return (
    <div style={{ backgroundImage }}>
      <div className={styles.layoutWrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
