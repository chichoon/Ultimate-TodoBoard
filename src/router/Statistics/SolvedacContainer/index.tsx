import cx from 'classnames';

import { useAppSelector } from 'hooks';
import { getSolvedacID } from 'states/settings';

import styles from './solvedacContainer.module.scss';

const SolvedacContainer = () => {
  const solvedacID = useAppSelector(getSolvedacID);
  return (
    <li className={cx(styles.solvedacWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>{solvedacID}의 Solved.ac 현황</h3>
      </div>
    </li>
  );
};

export default SolvedacContainer;
