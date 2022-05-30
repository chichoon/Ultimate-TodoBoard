import { FeatherIcon } from 'assets/svgs';
import styles from './topNavigationBar.module.scss';

const TopNavigationBar = () => {
  return (
    <nav className={styles.navigationBarWrapper}>
      <div className={styles.navigationBarIcon}>
        <FeatherIcon />
      </div>
      <div className={styles.navigationBarRight}>
        <h3>
          <b>chichoon</b>님 안녕하세요!
        </h3>
        {/* TODO: 닉네임 교체 */}
      </div>
    </nav>
  );
};

export default TopNavigationBar;
