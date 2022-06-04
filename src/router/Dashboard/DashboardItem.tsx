import BaekjoonContainer from './BaekjoonContainer';
import DDayContainer from './DDayContainer';
import ShortcutContainer from './ShortcutContainer';
import TodoContainer from './TodoContainer';
import WeatherContainer from './WeatherContainer';

interface IProps {
  type: 'todo' | 'dday' | 'weather' | 'baekjoon' | 'shortcut';
}

const DashboardItem = ({ type }: IProps) => {
  const containerItem = {
    todo: <TodoContainer />,
    dday: <DDayContainer />,
    weather: <WeatherContainer />,
    baekjoon: <BaekjoonContainer />,
    shortcut: <ShortcutContainer />,
  }[type];
  return containerItem;
};

export default DashboardItem;
