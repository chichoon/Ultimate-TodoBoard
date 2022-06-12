import GithubContainer from './GithubContainer';
import OverviewCalendarContainer from './OverviewCalendarContainer';
import SolvedacContainer from './SolvedacContainer';
import styles from './statistics.module.scss';

const Statistics = () => {
  return (
    <main className={styles.statisticsMain}>
      <ul className={styles.statisticsListWrapper}>
        <GithubContainer />
        <SolvedacContainer />
        <OverviewCalendarContainer />
      </ul>
    </main>
  );
};

export default Statistics;
