import cx from 'classnames';

import { useFetchWeather } from 'hooks';
import WeatherListElement from './WeatherListElement';

import styles from './weatherContainer.module.scss';

const WeatherContainerInner = () => {
  const { data } = useFetchWeather();

  return (
    <>
      <div className={cx('listContainerHeader')}>
        <h3>{data?.city ?? '선택한 도시'}의 날씨</h3>
      </div>
      <div className={styles.weatherItemsWrapper}>
        <ul>
          {data?.weatherList.map((item) => {
            const key = `weather-${item.time}`;
            return <WeatherListElement key={key} item={item} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default WeatherContainerInner;
