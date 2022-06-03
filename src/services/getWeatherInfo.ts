import axios from 'axios';

const getWeatherInfo = (lat: number, lon: number) =>
  axios
    .get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat,
        lon,
        appid: process.env.REACT_APP_WEATHER_API_KEY,
        units: 'metric',
      },
    })
    .then((response) => {
      console.log(response);
    });

export default getWeatherInfo;
