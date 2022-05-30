import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <>
      <header className={styles.dashboardHeader}>
        <h1>대시보드</h1>
      </header>
      <main className={styles.dashboardMain}>
        <ul>
          <li>끝내주게 숨쉬기</li>
          <li>밥개맛있게먹기</li>
          <li /> {/* TODO: 대시보드 아이템 추가하는 li 만들기 */}
        </ul>
      </main>
    </>
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
