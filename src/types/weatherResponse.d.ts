export interface IWeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: IList[];
  city: ICity;
}

export interface IList {
  dt: number;
  main: IMain;
  weather: IWeatherListData[];
  clouds: IClouds;
  wind: IWind;
  visibility: number;
  pop: number;
  sys: ISys;
  dt_txt: string;
}

interface ICity {
  id: number;
  name: string;
  coord: ICoord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface ICoord {
  lat: number;
  lon: number;
}

interface ISys {
  pod: string;
}

interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

interface IClouds {
  all: number;
}

interface IWeatherListData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
