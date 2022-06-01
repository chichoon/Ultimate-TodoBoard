import { useAppDispatch } from 'hooks';
import { useState, ChangeEvent, FormEvent, Dispatch, SetStateAction } from 'react';
import { setProblemID } from 'states/problemID';

import styles from './baekjoonAddFormElement.module.scss';

interface IProps {
  setIsAddFormShown: Dispatch<SetStateAction<boolean>>;
}

const BaekjoonAddFormElement = ({ setIsAddFormShown }: IProps) => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleIDChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const problemID = Number(value);
    if (isNaN(problemID)) return;
    dispatch(setProblemID(problemID));
    setIsAddFormShown(false);
  };

  return (
    <div className={styles.baekjoonAddFormWrapper}>
      <form onSubmit={handleFormSubmit}>
        <input type='text' name='baekjoonID' value={value} onChange={handleIDChange} placeholder='문제 ID' />
        <button type='submit'>추가</button>
      </form>
    </div>
  );
};

export default BaekjoonAddFormElement;
