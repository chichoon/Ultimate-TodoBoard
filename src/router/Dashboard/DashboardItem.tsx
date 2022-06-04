import BaekjoonContainer from './BaekjoonContainer';
import DDayContainer from './DDayContainer';
import GithubContainer from './GithubContainer';
import ShortcutContainer from './ShortcutContainer';
import TodoContainer from './TodoContainer';
import WeatherContainer from './WeatherContainer';

interface IProps {
  type: 'todo' | 'dday' | 'weather' | 'baekjoon' | 'github' | 'shortcut';
}

const DashboardItem = ({ type }: IProps) => {
  const containerItem = {
    todo: <TodoContainer />,
    dday: <DDayContainer />,
    weather: <WeatherContainer />,
    baekjoon: <BaekjoonContainer />,
    github: <GithubContainer />,
    shortcut: <ShortcutContainer />,
  }[type];
  return <li>{containerItem}</li>;
};

export default DashboardItem;
