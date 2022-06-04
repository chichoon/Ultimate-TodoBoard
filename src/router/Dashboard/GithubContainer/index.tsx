import cx from 'classnames';

import { useAppSelector } from 'hooks';
import { getGithubID } from 'states/information';

import styles from './githubContainer.module.scss';

const THEME = {
  lightblue: '6089bf',
  darkblue: '6089bf',
};

const GithubContainer = () => {
  const githubID = useAppSelector(getGithubID);

  return (
    <div className={cx(styles.githubWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>{githubID}의 Github</h3>
      </div>
      <div className={styles.githubInfoWrapper}>
        <img src={`https://ghchart.rshah.org/${THEME.lightblue}/${githubID}`} alt={`${githubID}'s Github Graph`} />
      </div>
    </div>
  );
};

export default GithubContainer;

// TODO: github container 완성
