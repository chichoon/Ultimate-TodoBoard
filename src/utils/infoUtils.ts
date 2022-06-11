import { IDDay } from '../types/information.d';
import dayjs from 'dayjs';

export const ddaySort = (a: IDDay, b: IDDay) => {
  const ddayA = dayjs(a.date);
  const ddayB = dayjs(b.date);

  if (ddayA < ddayB) return -1;
  if (ddayA > ddayB) return 1;
  return 0;
};
