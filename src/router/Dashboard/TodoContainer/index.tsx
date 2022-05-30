import { ITodo } from 'types/todo';

interface IProps {
  item: ITodo;
}

const TodoContainer = ({ item }: IProps) => {
  return <div>투두 컨테이너지롱</div>;
};

export default TodoContainer;

// TODO: todo container 완성
