import { IWeatherData } from 'types/weather.d';
import { IList, IWeatherResponse } from 'types/weatherResponse.d';
import axios from 'axios';

const getWeatherInfo = (lat: number, lon: number) =>
  axios
    .get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        lat,
        lon,
        appid: process.env.REACT_APP_WEATHER_API_KEY,
        units: 'metric',
      },
    })
    .then(({ data }: { data: IWeatherResponse }) => {
      const newArr: IWeatherData = {
        city: data.city.name ?? '선택한 도시',
        weatherList: data.list.map((item: IList) => {
          return {
            time: item.dt_txt,
            temp: item.main.temp,
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
            humidity: item.main.humidity,
            weather: item.weather[0].main,
          };
        }),
      };
      console.log(newArr);
      return newArr;
    });

export default getWeatherInfo;
