import { ChangeEventHandler, FormEventHandler } from 'react';

export interface ISettingsInformation {
  nickname: string;
  theme: 'lightblue' | 'darkblue';
  weather: IWeather;
  githubID: string;
  solvedacID: string;
}
export interface IWeather {
  lat: number;
  lon: number;
}

export interface ISettingsFormProps {
  name: string;
  value: string;
  label: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
