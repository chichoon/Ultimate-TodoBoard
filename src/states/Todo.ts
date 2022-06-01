import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import store from 'store';

import { ITodo } from 'types/todo';
import { RootState } from 'states';

const today = dayjs().format('YYYY-MM-DD');
const INIT_TODO: ITodo = {
  type: 'todo',
  items: [
    {
      todoTitle: '맛있는거 먹기',
      createDate: '2022-05-31',
    },
    {
      todoTitle: '데이트하기',
      createDate: '2022-05-23',
      deadLineDate: '2022-06-10',
    },
    {
      todoTitle: '엄청엄청짱짱긴제목제목제목아아아아',
      createDate: '2022-05-23',
      deadLineDate: '2022-06-10',
    },
    {
      todoTitle: '밥먹자밥먹자비둘기야구구구구구구구',
      createDate: '2022-05-23',
    },
    {
      todoTitle: '밥먹자밥먹자비둘기야구구구구구구구',
      createDate: '2022-05-23',
    },
    {
      todoTitle: '밥먹자밥먹자비둘기야구구구구구구구',
      createDate: '2022-05-23',
    },
  ],
  itemsDone: [],
};

interface ICreateNewTodo {
  title: string;
  deadLineDate?: string;
  index: number;
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: INIT_TODO,
  reducers: {
    setTodo: (state: ITodo, action: PayloadAction<ITodo>) => action.payload,
    addTodo: (state: ITodo, action: PayloadAction<ICreateNewTodo>) => {
      const newTodo: ITodo = {
        type: 'todo',
        items: [
          ...state.items,
          { todoTitle: action.payload.title, createDate: today, deadLineDate: action.payload.deadLineDate },
        ].sort((a, b) => {
          if (dayjs(a.createDate) < dayjs(b.createDate)) return 1;
          if (dayjs(a.createDate) > dayjs(b.createDate)) return -1;
          return 0;
        }),
        itemsDone: state.itemsDone,
      };
      store.set('todoList', newTodo);
      return newTodo;
    },
    setTodoFinished: (state: ITodo, action: PayloadAction<number>) => {
      const newTodo: ITodo = {
        type: 'todo',
        items: state.items.filter((_, index) => index !== action.payload),
        itemsDone: [
          ...state.itemsDone,
          {
            todoTitle: state.items[action.payload].todoTitle,
            createDate: state.items[action.payload].createDate,
            finishedDate: today,
          },
        ].sort((a, b) => {
          if (dayjs(a.createDate) < dayjs(b.createDate)) return 1;
          if (dayjs(a.createDate) > dayjs(b.createDate)) return -1;
          return 0;
        }),
      };
      store.set('todoList', newTodo);
      return newTodo;
    },
    deleteTodo: (state: ITodo, action: PayloadAction<number>) => {
      const newTodo: ITodo = {
        type: 'todo',
        items: state.items.filter((_, index) => index !== action.payload),
        itemsDone: state.itemsDone,
      };
      store.set('todoList', newTodo);
      return newTodo;
    },
    deleteFinishedTodo: (state: ITodo, action: PayloadAction<number>) => {
      const newTodo: ITodo = {
        type: 'todo',
        items: state.items,
        itemsDone: state.itemsDone.filter((_, index) => index !== action.payload),
      };
      store.set('todoList', newTodo);
      return newTodo;
    },
  },
});

export const { addTodo, setTodoFinished, deleteTodo, deleteFinishedTodo } = todoSlice.actions;

export default todoSlice.reducer;

export const getTodo = (state: RootState): ITodo => state.todo;
