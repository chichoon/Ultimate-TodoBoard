import { useState, Dispatch, SetStateAction } from 'react';

import DDayAddForm from './DDayAddForm';

import { PlusIcon } from 'assets/svgs';
import styles from './ddayAddFormElement.module.scss';

interface IProps {
  setIsAddButtonShown: Dispatch<SetStateAction<boolean>>;
}

const DDayAddFormElement = ({ setIsAddButtonShown }: IProps) => {
  const [isFormShown, setIsFormShown] = useState(false);

  const handleAddButtonClick = () => {
    setIsFormShown(true);
  };

  const elementContent = isFormShown ? (
    <DDayAddForm setIsAddButtonShown={setIsAddButtonShown} setIsFormShown={setIsFormShown} />
  ) : (
    <button type='button' onClick={handleAddButtonClick}>
      <PlusIcon />
    </button>
  );

  return (
    <li>
      <div className={styles.ddayAddFormWrapper}>{elementContent}</div>
    </li>
  );
};

export default DDayAddFormElement;
