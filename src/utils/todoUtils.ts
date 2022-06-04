import dayjs from 'dayjs';

import { ITodoItemDone, ITodo, ITodoItem } from 'types/todo.d';

export const today = dayjs().format('YYYY-MM-DD HH:mm');

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

export const INIT_TODO: ITodo = {
  type: 'todo',
  items: [
    {
      todoTitle: '데이트하기',
      createDate: '2022-05-23 22:45',
      deadLineDate: '2022-06-11',
    },
    {
      todoTitle: '엄청엄청짱짱긴제목제목제목아아아아',
      createDate: '2022-05-23 14:59',
      deadLineDate: '2022-06-10',
    },
    {
      todoTitle: '밥먹자밥먹자비둘기야구구구구구구구',
      createDate: '2022-05-23 12:04',
    },
    {
      todoTitle: '맛있는거 먹기',
      createDate: '2022-05-25 12:18',
    },
  ]
    .sort(createDateSort)
    .sort(deadlineDateSort),
  itemsDone: [],
};
