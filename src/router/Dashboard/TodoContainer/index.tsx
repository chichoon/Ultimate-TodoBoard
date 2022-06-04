import { useState } from 'react';
import cx from 'classnames';

import { useAppSelector } from 'hooks';
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
    <li className={cx(styles.todoWrapper, 'listContainer')}>
      <div className={cx('listContainerAddHeader')}>
        <h3>오늘의 할 일</h3>
        <button type='button' onClick={handleAddButtonClick}>
          <PlusIcon className={cx('addFormIcon', { isRemoving: isAddFormShown })} />
        </button>
      </div>
      <div className={styles.todoListWrapper}>
        {isAddFormShown && <TodoAddFormElement setIsAddFormShown={setIsAddFormShown} />}
        <ul>
          {todo.items.map((item, index) => {
            const key = `todo-index-${index}`;
            return <TodoListElement key={key} item={item} index={index} isDone={false} />;
          })}
          {todo.itemsDone.map((item, index) => {
            const key = `todo-index-${index}-done`;
            return <TodoListElement key={key} item={item} index={index} isDone />;
          })}
        </ul>
      </div>
    </li>
  );
};

export default TodoContainer;
