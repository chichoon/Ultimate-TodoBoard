import dayjs from 'dayjs';
import cx from 'classnames';

import { useAppDispatch } from 'hooks';
import { deleteFinishedTodo, deleteTodo, setTodoActive, setTodoFinished } from 'states/todo';
import { ITodoItem } from 'types/todo';

import { XIcon } from 'assets/svgs';
import styles from './todoListElement.module.scss';

interface IProps {
  item: ITodoItem;
  index: number;
  isDone: boolean;
}

const TodoListElement = ({ item, index, isDone }: IProps) => {
  const today = dayjs().format('YYYY-MM-DD');
  const deadLine = dayjs(item.deadLineDate);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = () => {
    if (!isDone) dispatch(setTodoFinished(index));
    else dispatch(setTodoActive(index));
  };

  const handleXButtonClick = () => {
    if (!isDone) dispatch(deleteTodo(index));
    else dispatch(deleteFinishedTodo(index));
  };

  return (
    <div className={styles.todoElementWrapper}>
      <input type='checkbox' checked={isDone} onChange={handleCheckboxChange} />
      <p className={cx(styles.todoTitle, { [styles.isTodoDone]: isDone })}>{item.todoTitle}</p>
      {item.deadLineDate && <p className={styles.todoDeadline}>D-{deadLine.diff(today, 'd')}</p>}
      <button type='button' onClick={handleXButtonClick}>
        <XIcon />
      </button>
    </div>
  );
};

export default TodoListElement;
