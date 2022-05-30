import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <ul>
        <li>끝내주게 숨쉬기</li>
        <li>밥개맛있게먹기</li>
      </ul>
    </div>
  );
};

export default Dashboard;
