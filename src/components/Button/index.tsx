import { MouseEvent, ReactNode } from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

interface IProps {
  children: ReactNode;
  type: 'button' | 'submit';
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, type, className, onClick }: IProps) => {
  if (type === 'button')
    return (
      <button type='button' onClick={onClick ?? undefined} className={cx(styles.buttonWrapper, className)}>
        {children}
      </button>
    );
  return (
    <button type='submit' className={cx(styles.buttonWrapper, className)}>
      {children}
    </button>
  );
};

export default Button;
