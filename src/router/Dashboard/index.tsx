import DashboardItem from './DashboardItem';

import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <main className={styles.dashboardMain}>
      <ul className={styles.dashboardListWrapper}>
        <DashboardItem type='todo' />
        <DashboardItem type='baekjoon' />
        <DashboardItem type='dday' />
        <DashboardItem type='weather' />
        <li /> {/* TODO: 대시보드 아이템 추가하는 li 만들기 */}
      </ul>
    </main>
  );
};

export default Dashboard;
