import styles from './dashboard.module.scss';
import DashboardItem from './DashboardItem';

const Dashboard = () => {
  return (
    <main className={styles.dashboardMain}>
      <ul>
        <DashboardItem type='todo' />
        <DashboardItem type='baekjoon' />
        <li /> {/* TODO: 대시보드 아이템 추가하는 li 만들기 */}
      </ul>
    </main>
  );
};

// TODO: 오늘의 할일 컨테이너
// TODO: 디데이 컨테이너
// TODO: 날씨 컨테이너
// TODO: 백준 컨테이너
// TODO: 깃허브 잔디 컨테이너
// TODO: 이미지 링크 컨테이너
// TODO: 임베드 컨테이너

export default Dashboard;
