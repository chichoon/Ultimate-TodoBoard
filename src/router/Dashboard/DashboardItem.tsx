import { IBaekjoon } from 'types/baekjoon';
import { IDDay } from 'types/dday';
import { ITodo } from 'types/todo';
import { IWeather } from 'types/weather';
import BaekjoonContainer from './BaekjoonContainer';
import DDayContainer from './DDayContainer';
import EmbedContainer from './EmbedContainer';
import GithubContainer from './GithubContainer';
import ImageContainer from './ImageContainer';
import TodoContainer from './TodoContainer';
import WeatherContainer from './WeatherContainer';

interface IProps {
  item: ITodo | IBaekjoon | IDDay | IWeather;
}

const DashboardItem = ({ item }: IProps) => {
  const containerItem = {
    todo: <TodoContainer item={item as ITodo} />,
    dday: <DDayContainer item={item as IDDay} />,
    weather: <WeatherContainer item={item as IWeather} />,
    baekjoon: <BaekjoonContainer item={item as IBaekjoon} />,
    // github: <GithubContainer item={item} />,
    // image: <ImageContainer item={item} />,
    // embed: <EmbedContainer item={item} />,
  }[item.type];
  return <li>{containerItem}</li>;
};

export default DashboardItem;
