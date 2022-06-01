import cx from 'classnames';

import { useAppSelector } from 'hooks';
import { getError } from 'states/error';

import styles from './errorMessage.module.scss';

const ErrorMessage = () => {
  const error = useAppSelector(getError);

  return (
    <div className={cx(styles.errorMessageWrapper, { [styles.isError]: error.status !== 200 })}>
      <p className={styles.errorCode}>{error.status}</p>
      <p className={styles.errorData}>{error.data}</p>
    </div>
  );
};

export default ErrorMessage;
