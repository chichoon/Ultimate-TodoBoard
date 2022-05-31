import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import dayjs from 'dayjs';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './todoAddFormElement.module.scss';
import CustomDatePicker from './CustomDatePicker';

const today = new Date();

const TodoAddFormElement = () => {
  const [title, setTitle] = useState('');
  const [isDeadLine, setIsDeadline] = useState(false);
  const [deadLine, setDeadLine] = useState<Date>(today);

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
    setDeadLine(today);
    console.log(today);
  }, [isDeadLine]);

  return (
    <div className={styles.todoAddFormWrapper}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.formLeft}>
          <input type='text' value={title} onChange={handleTitleChange} placeholder='할 일 제목' />
          <div className={styles.checkboxArea}>
            <input type='checkbox' name='isDeadLine' checked={isDeadLine} onChange={handleCheckboxChange} />
            <label htmlFor='isDeadLine'>마감일 추가하기</label>
          </div>
          {isDeadLine && <CustomDatePicker today={today} selected={deadLine} onChange={handleDeadlineChange} />}
        </div>
        <button type='submit'>추가</button>
      </form>
    </div>
  );
};

export default TodoAddFormElement;
