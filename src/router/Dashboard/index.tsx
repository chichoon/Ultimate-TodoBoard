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
        <DashboardItem type='github' />
        <DashboardItem type='shortcut' />
        <li />
      </ul>
    </main>
  );
};

export default Dashboard;
