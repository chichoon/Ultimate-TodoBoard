import { useState } from 'react';
import cx from 'classnames';

import { useAppSelector } from 'hooks/useAppSelector';
import { getTodo } from 'states/todo';
import TodoAddFormElement from './TodoAddFormElement';
import TodoListElement from './TodoListElement';

import { PlusIcon } from 'assets/svgs';
import styles from './todoContainer.module.scss';

const TodoContainer = () => {
  const [isAddFormShown, setIsAddFormShown] = useState(false);
  const todo = useAppSelector(getTodo);

  const handleAddButtonClick = () => {
    setIsAddFormShown((prevState) => !prevState);
  };

  return (
    <div className={cx(styles.todoWrapper, 'listContainer')}>
      <div className={cx(styles.todoHeader, 'listContainerHeader')}>
        <h3>오늘의 할 일</h3>
        <button type='button' onClick={handleAddButtonClick}>
          <PlusIcon className={cx(styles.addForm, { [styles.isRemoving]: isAddFormShown })} />
        </button>
      </div>
      <div className={styles.todoListWrapper}>
        {isAddFormShown && <TodoAddFormElement setIsAddFormShown={setIsAddFormShown} />}
        <ul>
          {todo.items.map((item, index) => {
            const key = `todo-index-${index}`;
            return (
              <li key={key}>
                <TodoListElement item={item} index={index} isDone={false} />
              </li>
            );
          })}
          {todo.itemsDone.map((item, index) => {
            const key = `todo-index-${index}-done`;
            return (
              <li key={key}>
                <TodoListElement item={item} index={index} isDone />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoContainer;
