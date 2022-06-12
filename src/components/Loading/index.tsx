import cx from 'classnames';

import { LoadingIcon } from 'assets/svgs';
import styles from './loading.module.scss';

interface IProps {
  headerTitle: string;
}

const Loading = ({ headerTitle }: IProps) => {
  return (
    <>
      <div className={cx('listContainerHeader')}>
        <h3>{headerTitle}</h3>
      </div>
      <div className={styles.loadingWrapper}>
        <LoadingIcon />
        <h3>로딩중...</h3>
      </div>
    </>
  );
};

export default Loading;
