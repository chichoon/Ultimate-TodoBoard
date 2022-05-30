import styles from './topNavigationBar.module.scss';

const TopNavigationBar = () => {
  return (
    <nav className={styles.navigationBarWrapper}>
      <h3>
        <b>chichoon</b>님 안녕하세요!
      </h3>
      {/* TODO: 닉네임 교체 */}
    </nav>
  );
};

export default TopNavigationBar;
