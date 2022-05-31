import cx from 'classnames';

import { useAppSelector } from 'hooks/useAppSelector';
import { getTodo } from 'states/todo';

import styles from './todoContainer.module.scss';
import TodoListElement from './TodoListElement';

const TodoContainer = () => {
  const todo = useAppSelector(getTodo);
  return (
    <div className={cx(styles.todoWrapper, 'listContainer')}>
      <div className={cx(styles.todoHeader, 'listContainerHeader')}>
        <h3>오늘의 할 일</h3>
      </div>
      <div className={styles.todoListWrapper}>
        <ul>
          {todo.items.map((item, index) => {
            const key = `todo-index-${index}`;
            return (
              <li key={key}>
                <TodoListElement item={item} index={index} isDone={false} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoContainer;

// TODO: todo container 완성
