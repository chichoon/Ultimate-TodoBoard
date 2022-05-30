import BaekjoonContainer from './BaekjoonContainer';
import DDayContainer from './DDayContainer';
import EmbedContainer from './EmbedContainer';
import GithubContainer from './GithubContainer';
import ImageContainer from './ImageContainer';
import TodoContainer from './TodoContainer';
import WeatherContainer from './WeatherContainer';

interface IProps {
  types: 'todo' | 'dday' | 'weather' | 'baekjoon' | 'github' | 'image' | 'embed';
}

const DashboardItem = ({ types }: IProps) => {
  const containerItem = {
    todo: <TodoContainer />,
    dday: <DDayContainer />,
    weather: <WeatherContainer />,
    baekjoon: <BaekjoonContainer />,
    github: <GithubContainer />,
    image: <ImageContainer />,
    embed: <EmbedContainer />,
  }[types];
  return <li>{containerItem}</li>;
};

export default DashboardItem;
