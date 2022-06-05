import cx from 'classnames';

import styles from './resetAppElement.module.scss';
import ResetAppListElement from './ResetAppListElement';

const TYPE_ARR: ('todo' | 'baekjoon' | 'dday' | 'shortcut' | 'all')[] = ['todo', 'baekjoon', 'dday', 'shortcut', 'all'];

const ResetAppElement = () => {
  return (
    <li className={cx(styles.resetFormWrapper, 'listContainer')}>
      <div className={cx('listContainerHeader')}>
        <h3>데이터 초기화</h3>
      </div>
      <ul className={styles.resetBlocks}>
        {TYPE_ARR.map((type) => (
          <ResetAppListElement key={`reset-list-${type}`} type={type} />
        ))}
      </ul>
    </li>
  );
};

export default ResetAppElement;
