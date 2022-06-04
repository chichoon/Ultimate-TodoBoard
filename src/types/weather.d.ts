interface IWeatherResponse {
  city: string;
  weatherList: IWeatherData[];
}

interface IWeatherData {
  time: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
  weather: string;
}
