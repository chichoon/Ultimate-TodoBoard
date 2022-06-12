import { useState } from 'react';
import cx from 'classnames';

import { useAppDispatch } from 'hooks';
import { Button, DeleteConfirmModal } from 'components';
import { deleteFinishedTodo, deleteTodo, setTodoActive, setTodoFinished } from 'states/todo';
import { ITodoItem } from 'types/todo';
import { getTodoDDayString } from 'utils/todoUtils';

import { XIcon } from 'assets/svgs';
import styles from './todoListElement.module.scss';

interface IProps {
  item: ITodoItem;
  index: number;
  isDone: boolean;
}

const TodoListElement = ({ item, index, isDone }: IProps) => {
  const deadLineString = getTodoDDayString(item.deadLineDate);
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
      <div className={styles.todoElementLeft}>
        <input type='checkbox' checked={isDone} onChange={handleCheckboxChange} />
        <p className={cx(styles.todoTitle, { [styles.isTodoDone]: isDone })}>{item.todoTitle}</p>
      </div>
      <div className={styles.todoElementRight}>
        {item.deadLineDate && <p className={styles.todoDeadline}>{deadLineString}</p>}
        <button type='button' onClick={handleXButtonClick}>
          <XIcon />
        </button>
      </div>
      {isDeleteModalOpen && (
        <DeleteConfirmModal title={item.todoTitle} setIsDeleteModalOpen={setIsDeleteModalOpen}>
          <>
            <Button type='button' onClick={handleDeleteButtonClick}>
              확인
            </Button>
            <Button type='button' onClick={handleCancelButtonClick}>
              취소
            </Button>
          </>
        </DeleteConfirmModal>
      )}
    </li>
  );
};

export default TodoListElement;
