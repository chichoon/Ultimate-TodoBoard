export interface IInformation {
  nickname: string;
  theme: 'lightblue' | 'darkblue';
  baekjoon: IBaekjoonItem[];
  weather: IWeather;
  dday: IDDay[];
  githubID: string;
}

export interface IBaekjoonItem {
  id: number;
  problem: string;
  tier: number;
}

export interface IWeather {
  lat: number;
  lon: number;
}

export interface IDDay {
  title: string;
  icon: string;
  date: string;
  color: string;
}

export interface IError {
  status: number;
  data: string;
}
