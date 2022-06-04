import { LoadingIcon } from 'assets/svgs';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <LoadingIcon />
      <h3>로딩중...</h3>
    </div>
  );
};

export default Loading;
