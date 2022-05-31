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
        <input type='text' value={title} onChange={handleTitleChange} />
        <input type='checkbox' checked={isDeadLine} onChange={handleCheckboxChange} />
        {isDeadLine && <DatePicker selected={deadLine} onChange={handleDeadlineChange} />}
        <button type='submit'>할일 추가하기</button>
      </form>
    </div>
  );
};

export default TodoAddFormElement;
