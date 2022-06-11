import dayjs from 'dayjs';

import { ITodoItemDone, ITodo, ITodoItem } from 'types/todo.d';

export const today = dayjs().format('YYYY-MM-DD HH:mm');

export const INIT_TODO: ITodo = {
  type: 'todo',
  items: [],
  itemsDone: [],
};

export const getTodoDDayString = (deadLineDate: string | undefined) => {
  if (!deadLineDate) return '';
  const deadLineDDay = dayjs().diff(deadLineDate, 'd');
  if (deadLineDDay > 0) return `D+${deadLineDDay}`;
  if (deadLineDDay < 0) return `D${deadLineDDay}`;
  return 'D-Day';
};

export const createDateSort = (a: ITodoItem | ITodoItemDone, b: ITodoItem | ITodoItemDone) => {
  const createA = dayjs(a.createDate);
  const createB = dayjs(b.createDate);

  if (createA < createB) return -1;
  if (createA > createB) return 1;
  return 0;
};

export const deadlineDateSort = (a: ITodoItem, b: ITodoItem) => {
  if (!b.deadLineDate) return -1;
  const deadlineA = dayjs(a.deadLineDate);
  const deadlineB = dayjs(b.deadLineDate);
  if (!a.deadLineDate) return 1;
  if (deadlineA < deadlineB) return -1;
  if (deadlineA > deadlineB) return 1;
  return 0;
};
