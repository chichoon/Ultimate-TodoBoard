import { IBaekjoon } from 'types/baekjoon';
import { IDDay } from 'types/dday';
import { ITodo } from 'types/todo';
import BaekjoonContainer from './BaekjoonContainer';
import DDayContainer from './DDayContainer';
import EmbedContainer from './EmbedContainer';
import GithubContainer from './GithubContainer';
import ImageContainer from './ImageContainer';
import TodoContainer from './TodoContainer';
import WeatherContainer from './WeatherContainer';

interface IProps {
  item: ITodo | IBaekjoon | IDDay;
}

const DashboardItem = ({ item }: IProps) => {
  const containerItem = {
    todo: <TodoContainer />,
    dday: <DDayContainer />,
    weather: <WeatherContainer />,
    baekjoon: <BaekjoonContainer />,
    github: <GithubContainer />,
    image: <ImageContainer />,
    embed: <EmbedContainer />,
  }[item.type];
  return <li>{containerItem}</li>;
};

export default DashboardItem;
