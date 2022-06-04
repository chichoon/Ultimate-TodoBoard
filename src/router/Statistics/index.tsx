import GithubContainer from './GithubContainer';
import styles from './statistics.module.scss';

const Statistics = () => {
  return (
    <main className={styles.statisticsMain}>
      <ul className={styles.statisticsListWrapper}>
        <GithubContainer />
      </ul>
    </main>
  );
};

export default Statistics;
