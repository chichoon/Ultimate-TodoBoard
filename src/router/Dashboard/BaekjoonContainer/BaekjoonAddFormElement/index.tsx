import { useState, ChangeEvent, FormEvent, useEffect, Dispatch, SetStateAction } from 'react';

import styles from './baekjoonAddFormElement.module.scss';

interface IProps {
  setIsAddFormShown: Dispatch<SetStateAction<boolean>>;
}

const BaekjoonAddFormElement = ({ setIsAddFormShown }: IProps) => {
  const [problemID, setProblemID] = useState('');

  const handleIDChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProblemID(e.currentTarget.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(problemID);
    setIsAddFormShown(false);
  };

  return (
    <div className={styles.baekjoonAddFormWrapper}>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='baekjoonID'>문제 ID</label>
        <input type='text' name='baekjoonID' value={problemID} onChange={handleIDChange} />
        <button type='submit'>추가</button>
      </form>
    </div>
  );
};

export default BaekjoonAddFormElement;
