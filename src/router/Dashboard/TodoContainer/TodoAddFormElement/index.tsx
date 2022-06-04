import { useState, ChangeEvent, FormEvent, useEffect, Dispatch, SetStateAction, useRef } from 'react';
import { useMount } from 'react-use';
import dayjs from 'dayjs';
import cx from 'classnames';

import { addTodo } from 'states/todo';
import { useAppDispatch } from 'hooks';
import { Button, CustomDatePicker } from 'components';

import styles from './todoAddFormElement.module.scss';

const today = new Date();

interface IProps {
  setIsAddFormShown: Dispatch<SetStateAction<boolean>>;
}

const TodoAddFormElement = ({ setIsAddFormShown }: IProps) => {
  const [title, setTitle] = useState('');
  const [isDeadLine, setIsDeadline] = useState(false);
  const [deadLine, setDeadLine] = useState(today);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleCheckboxChange = () => {
    setIsDeadline((prevState) => !prevState);
  };

  const handleDeadlineChange = (date: Date) => {
    setDeadLine(date);
  };

  useMount(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title,
        ...(isDeadLine && { deadLineDate: dayjs(deadLine).format('YYYY-MM-DD') }),
      })
    );
    setIsAddFormShown(false);
  };

  useEffect(() => {
    setDeadLine(today);
  }, [isDeadLine]);

  return (
    <div className={cx('listContainerAddForm')}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.formLeft}>
          <input
            type='text'
            required
            value={title}
            onChange={handleTitleChange}
            ref={inputRef}
            placeholder='할 일 제목'
          />
          <div className={styles.checkboxArea}>
            <input type='checkbox' name='isDeadLine' checked={isDeadLine} onChange={handleCheckboxChange} />
            <label htmlFor='isDeadLine'>마감일 추가하기</label>
          </div>
          {isDeadLine && <CustomDatePicker selected={deadLine} onChange={handleDeadlineChange} />}
        </div>
        <Button type='submit'>추가</Button>
      </form>
    </div>
  );
};

export default TodoAddFormElement;
