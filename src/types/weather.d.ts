export interface IWeatherData {
  city: string;
  weatherList: IWeatherItem[];
}

export interface IWeatherItem {
  time: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
  weather: string;
}
