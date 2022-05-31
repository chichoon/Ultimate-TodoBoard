import { IWeather } from 'types/weather';

interface IProps {
  weatherItem: IWeather;
}

const WeatherContainer = ({ weatherItem }: IProps) => {
  return <div>날씨 컨테이너지롱</div>;
};

export default WeatherContainer;

// TODO: weather container 완성
