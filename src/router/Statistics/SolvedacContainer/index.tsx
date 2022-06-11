import cx from 'classnames';

import styles from './solvedacContainer.module.scss';

const SolvedacContainer = () => {
  return (
    <li className={cx(styles.solvedacWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>baekjoonID의 Solved.ac 현황</h3>
      </div>
    </li>
  );
};

export default SolvedacContainer;
