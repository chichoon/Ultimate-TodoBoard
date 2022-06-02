import { Dispatch, SetStateAction } from 'react';

import styles from './ddayAddForm.module.scss';

interface IProps {
  setIsAddFormShown: Dispatch<SetStateAction<boolean>>;
}

const DDayAddForm = ({ setIsAddFormShown }: IProps) => {
  return <li className={styles.ddayAddFormWrapper}>하하하</li>;
};

export default DDayAddForm;
