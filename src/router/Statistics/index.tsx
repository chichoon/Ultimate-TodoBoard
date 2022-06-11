import GithubContainer from './GithubContainer';
import SolvedacContainer from './SolvedacContainer';
import styles from './statistics.module.scss';

const Statistics = () => {
  return (
    <main className={styles.statisticsMain}>
      <ul className={styles.statisticsListWrapper}>
        <GithubContainer />
        <SolvedacContainer />
      </ul>
    </main>
  );
};

export default Statistics;
