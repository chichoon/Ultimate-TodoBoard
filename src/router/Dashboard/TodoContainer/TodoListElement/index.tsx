import { XIcon } from 'assets/svgs';
import dayjs from 'dayjs';
import { ITodoItem } from 'types/todo';

import styles from './todoListElement.module.scss';

interface IProps {
  item: ITodoItem;
  index: number;
  isDone: boolean;
}

const TodoListElement = ({ item, index, isDone }: IProps) => {
  const today = dayjs().format('YYYY-MM-DD');
  const deadLine = dayjs(item.deadLineDate);

  const handleCheckboxChange = () => {
    console.log('으아아아');
  };

  const handleXButtonClick = () => {
    console.log('지울거야..?');
  };

  return (
    <div className={styles.todoElementWrapper}>
      <input type='checkbox' checked={isDone} onChange={handleCheckboxChange} />
      <div className={styles.todoInfo}>
        <p className={styles.todoTitle}>{item.todoTitle}</p>
        {item.deadLineDate && <p className={styles.todoDeadline}>D-{deadLine.diff(today, 'd')}</p>}
      </div>
      <button type='button' onClick={handleXButtonClick}>
        <XIcon />
      </button>
    </div>
  );
};

export default TodoListElement;
