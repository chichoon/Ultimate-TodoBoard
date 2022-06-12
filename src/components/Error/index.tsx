import cx from 'classnames';

import { ErrorIcon } from 'assets/svgs';
import styles from './error.module.scss';

interface IProps {
  headerTitle: string;
  error: Error;
}

const Error = ({ headerTitle, error }: IProps) => {
  return (
    <>
      <div className={cx('listContainerHeader')}>
        <h3>{headerTitle}</h3>
      </div>
      <div className={styles.errorWrapper}>
        <ErrorIcon />
        <h3>{error.message}</h3>
      </div>
    </>
  );
};

export default Error;
