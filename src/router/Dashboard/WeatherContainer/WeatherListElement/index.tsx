import { SyntheticEvent } from 'react';
import dayjs from 'dayjs';
import cx from 'classnames';

import { IWeatherItem } from 'types/weather';
import { getWeatherClassname } from 'utils/weatherUtils';

import styles from './weatherListElement.module.scss';

interface IProps {
  item: IWeatherItem;
}

const WeatherListElement = ({ item }: IProps) => {
  const dayjsTime = dayjs(item.time);
  const weatherClassname = getWeatherClassname(item.id);

  const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://openweathermap.org/img/wn/01d@2x.png';
  };

  return (
    <li className={cx(styles.weatherElementWrapper, weatherClassname)}>
      <div className={styles.weatherElementTop}>
        <img
          src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
          alt={`${item.icon}.png`}
          onError={handleImgError}
        />
        <div className={styles.weatherElementInfo}>
          <p>{dayjsTime.format('YYYY년 MM월 DD일 HH시')}</p>
          <p className={styles.weatherElementImportant}>
            {item.temp}ºC {item.weather}
          </p>
        </div>
      </div>
      <div className={styles.weatherElementBottom}>
        <p className={styles.weatherTemperature}>최저 {item.temp_min}ºC</p>
        <p className={styles.weatherTemperature}>최고 {item.temp_max}ºC</p>
        <p>습도 {item.humidity}%</p>
      </div>
    </li>
  );
};

export default WeatherListElement;
