import { ITodo } from 'types/todo';

import styles from './todoContainer.module.scss';

interface IProps {
  item: ITodo;
}

const TodoContainer = ({ item }: IProps) => {
  return <div className={styles.todoWrapper}>투두 컨테이너지롱</div>;
};

export default TodoContainer;

// TODO: todo container 완성
