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

// TODO: 백준 컨테이너
// TODO: 오늘의 할일 컨테이너
// TODO: 디데이 컨테이너
// TODO: 날씨 컨테이너
// TODO: 깃허브 잔디 컨테이너
// TODO: 임베드 컨테이너

export default Dashboard;
