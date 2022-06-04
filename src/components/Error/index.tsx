import { ErrorIcon } from 'assets/svgs';
import styles from './error.module.scss';

interface IProps {
  error: Error;
}

const Error = ({ error }: IProps) => {
  return (
    <div className={styles.errorWrapper}>
      <ErrorIcon />
      <h3>{error.message}</h3>
    </div>
  );
};

export default Error;
