import { IInformation, IDDay } from '../types/information.d';
import dayjs from 'dayjs';

export const ddaySort = (a: IDDay, b: IDDay) => {
  const ddayA = dayjs(a.date);
  const ddayB = dayjs(b.date);

  if (ddayA < ddayB) return -1;
  if (ddayA > ddayB) return 1;
  return 0;
};

export const INIT_INFO: IInformation = {
  nickname: 'unknown',
  theme: 'lightblue',
  baekjoon: [],
  weather: {
    lat: 0,
    lon: 0,
  },
  dday: [],
  shortcut: [],
  githubID: '',
};
