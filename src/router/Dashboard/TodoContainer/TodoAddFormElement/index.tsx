import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';

import { todayDateState } from 'states/atoms';

import styles from './todoAddFormElement.module.scss';

const today = dayjs().format('YYYY-MM-DD');

const TodoAddFormElement = () => {
  const [title, setTitle] = useState('');
  const [isDeadLine, setIsDeadline] = useState(false);
  const [deadLine, setDeadLine] = useState<Date | null>(null);
  const todayDate = useRecoilValue(todayDateState);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleCheckboxChange = () => {
    setIsDeadline((prevState) => !prevState);
  };

  const handleDeadlineChange = (date: Date) => {
    setDeadLine(date);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    console.log(deadLine);
  };

  useEffect(() => {
    if (isDeadLine) setDeadLine(new Date(todayDate));
    else setDeadLine(null);
  }, [isDeadLine, todayDate]);

  return (
    <div className={styles.todoAddFormWrapper}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.formLeft}>
          <input type='text' value={title} onChange={handleTitleChange} placeholder='할 일 제목' />
          <div className={styles.checkboxArea}>
            <input type='checkbox' name='isDeadLine' checked={isDeadLine} onChange={handleCheckboxChange} />
            <label htmlFor='isDeadLine'>마감일 추가하기</label>
          </div>
          {isDeadLine && <DatePicker selected={deadLine} onChange={handleDeadlineChange} />}
        </div>
        <button type='submit'>추가</button>
      </form>
    </div>
  );
};

export default TodoAddFormElement;
