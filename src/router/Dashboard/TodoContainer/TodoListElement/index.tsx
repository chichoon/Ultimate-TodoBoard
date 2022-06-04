import { useState } from 'react';
import dayjs from 'dayjs';
import cx from 'classnames';

import { useAppDispatch } from 'hooks';
import { deleteFinishedTodo, deleteTodo, setTodoActive, setTodoFinished } from 'states/todo';
import { ITodoItem } from 'types/todo';
import { DeleteConfirmModal } from 'router/Dashboard/_shared';

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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = () => {
    if (!isDone) dispatch(setTodoFinished(index));
    else dispatch(setTodoActive(index));
  };

  const handleXButtonClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteButtonClick = () => {
    if (!isDone) dispatch(deleteTodo(index));
    else dispatch(deleteFinishedTodo(index));
    setIsDeleteModalOpen(false);
  };

  const handleCancelButtonClick = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <li className={styles.todoElementWrapper}>
      <input type='checkbox' checked={isDone} onChange={handleCheckboxChange} />
      <p className={cx(styles.todoTitle, { [styles.isTodoDone]: isDone })}>{item.todoTitle}</p>
      {item.deadLineDate && <p className={styles.todoDeadline}>D-{deadLine.diff(today, 'd')}</p>}
      <button type='button' onClick={handleXButtonClick}>
        <XIcon />
      </button>
      {isDeleteModalOpen && (
        <DeleteConfirmModal title={item.todoTitle} setIsDeleteModalOpen={setIsDeleteModalOpen}>
          <>
            <button type='button' onClick={handleDeleteButtonClick}>
              확인
            </button>
            <button type='button' onClick={handleCancelButtonClick}>
              취소
            </button>
          </>
        </DeleteConfirmModal>
      )}
    </li>
  );
};

export default TodoListElement;
