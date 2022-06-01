import cx from 'classnames';

import styles from './baekjoonContainer.module.scss';

const BaekjoonContainer = () => {
  return <div className={cx(styles.baekjoonWrapper, 'listContainer')}>백준 컨테이너지롱</div>;
};

export default BaekjoonContainer;

// TODO: baekjoon container 완성
