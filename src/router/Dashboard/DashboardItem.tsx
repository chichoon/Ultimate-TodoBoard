import BaekjoonContainer from './BaekjoonContainer';
import DDayContainer from './DDayContainer';
// import EmbedContainer from './EmbedContainer';
// import GithubContainer from './GithubContainer';
// import ImageContainer from './ImageContainer';
import TodoContainer from './TodoContainer';
import WeatherContainer from './WeatherContainer';

interface IProps {
  type: 'todo' | 'dday' | 'weather' | 'baekjoon';
}

const DashboardItem = ({ type }: IProps) => {
  const containerItem = {
    todo: <TodoContainer />,
    dday: <DDayContainer />,
    weather: <WeatherContainer />,
    baekjoon: <BaekjoonContainer />,
    // github: <GithubContainer githubItem={item} />,
    // image: <ImageContainer imageItem={item} />,
    // embed: <EmbedContainer embedItem={item} />,
  }[type];
  return <li>{containerItem}</li>;
};

export default DashboardItem;
