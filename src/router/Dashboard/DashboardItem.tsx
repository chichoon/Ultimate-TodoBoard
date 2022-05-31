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
    todo: <TodoContainer />,
    dday: <DDayContainer ddayItem={item as IDDay} />,
    weather: <WeatherContainer weatherItem={item as IWeather} />,
    baekjoon: <BaekjoonContainer baekjoonItem={item as IBaekjoon} />,
    // github: <GithubContainer githubItem={item} />,
    // image: <ImageContainer imageItem={item} />,
    // embed: <EmbedContainer embedItem={item} />,
  }[item.type];
  return <li>{containerItem}</li>;
};

export default DashboardItem;
