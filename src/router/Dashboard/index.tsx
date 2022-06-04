import DashboardItem from './DashboardItem';

import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <main className={styles.dashboardMain}>
      <ul className={styles.dashboardListWrapper}>
        <DashboardItem type='dday' />
        <DashboardItem type='todo' />
        <DashboardItem type='baekjoon' />
        <DashboardItem type='weather' />
        <DashboardItem type='shortcut' />
      </ul>
    </main>
  );
};

export default Dashboard;
