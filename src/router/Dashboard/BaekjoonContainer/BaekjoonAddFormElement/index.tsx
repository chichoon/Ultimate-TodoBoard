import { useState, ChangeEvent, FormEvent, Dispatch, SetStateAction } from 'react';
import cx from 'classnames';

import { useAppDispatch, useAppSelector } from 'hooks';
import { getBaekjoonItems } from 'states/information';
import { setProblemID } from '../states/problemID';
import { Button } from 'components';

import styles from './baekjoonAddFormElement.module.scss';

interface IProps {
  setIsAddFormShown: Dispatch<SetStateAction<boolean>>;
}

const BaekjoonAddFormElement = ({ setIsAddFormShown }: IProps) => {
  const [value, setValue] = useState('');
  const [isLimit, setIsLimit] = useState(false);
  const baekjoonList = useAppSelector(getBaekjoonItems);
  const dispatch = useAppDispatch();

  const handleIDChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (baekjoonList.length > 20) {
      setIsLimit(true);
      return;
    }
    const problemID = Number(value);
    if (isNaN(problemID) || problemID < 1000) return;
    dispatch(setProblemID(problemID));
    setIsAddFormShown(false);
  };

  return (
    <div className={cx('listContainerAddForm')}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.baekjoonInputWrapper}>
          <input type='text' required name='baekjoonID' value={value} onChange={handleIDChange} placeholder='문제 ID' />
          {isLimit && <span>문제는 20개까지 등록 가능합니다.</span>}
        </div>
        <Button type='submit'>추가</Button>
      </form>
    </div>
  );
};

export default BaekjoonAddFormElement;
