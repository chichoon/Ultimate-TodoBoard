import { useState } from 'react';
import cx from 'classnames';

import { useAppSelector } from 'hooks';
import { getGithubID } from 'states/information';

import styles from './githubContainer.module.scss';
import { ErrorIcon } from 'assets/svgs';

const THEME = {
  lightblue: '6089bf',
  darkblue: '6089bf',
};

const GithubContainer = () => {
  const githubID = useAppSelector(getGithubID);
  const [isNotAvailable, setIsNotAvailable] = useState(false);

  const handleGraphError = () => {
    setIsNotAvailable(true);
  };

  return (
    <li className={cx(styles.githubWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>{githubID}의 커밋 그래프</h3>
      </div>
      <div className={styles.githubGraph}>
        {!isNotAvailable && (
          <img
            src={`https://ghchart.rshah.org/${THEME.lightblue}/${githubID}`}
            alt={`${githubID}'s Github Graph`}
            onError={handleGraphError}
          />
        )}
        {isNotAvailable && (
          <div className={styles.githubNotAvailable}>
            <ErrorIcon />
            <span>{githubID}가 존재하지 않습니다</span>
          </div>
        )}
      </div>
    </li>
  );
};

export default GithubContainer;

// TODO: github container 완성
