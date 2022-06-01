import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import store from 'store';

import { ITodo } from 'types/todo';
import { RootState } from 'states';

const today = dayjs().format('YYYY-MM-DD HH:mm');
const INIT_TODO: ITodo = {
  type: 'todo',
  items: [
    {
      todoTitle: '맛있는거 먹기',
      createDate: '2022-05-31 12:18',
    },
    {
      todoTitle: '데이트하기',
      createDate: '2022-05-23 22:45',
      deadLineDate: '2022-06-10',
    },
    {
      todoTitle: '엄청엄청짱짱긴제목제목제목아아아아',
      createDate: '2022-05-23 14:59',
      deadLineDate: '2022-06-10',
    },
    {
      todoTitle: '밥먹자밥먹자비둘기야구구구구구구구',
      createDate: '2022-05-23 11:33',
    },
    {
      todoTitle: '밥먹자밥먹자비둘기야구구구구구구구',
      createDate: '2022-05-23 11:00',
    },
    {
      todoTitle: '밥먹자밥먹자비둘기야구구구구구구구',
      createDate: '2022-05-23 12:04',
    },
  ],
  itemsDone: [],
};

interface ICreateNewTodo {
  title: string;
  deadLineDate?: string;
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
            ...(state.items[action.payload].deadLineDate && { deadLineDate: state.items[action.payload].deadLineDate }),
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
    setTodoActive: (state: ITodo, action: PayloadAction<number>) => {
      const newTodo: ITodo = {
        type: 'todo',
        items: [
          ...state.items,
          {
            todoTitle: state.itemsDone[action.payload].todoTitle,
            createDate: state.itemsDone[action.payload].createDate,
            ...(state.itemsDone[action.payload].deadLineDate && {
              deadLineDate: state.itemsDone[action.payload].deadLineDate,
            }),
          },
        ].sort((a, b) => {
          if (dayjs(a.createDate) < dayjs(b.createDate)) return 1;
          if (dayjs(a.createDate) > dayjs(b.createDate)) return -1;
          return 0;
        }),
        itemsDone: state.itemsDone.filter((_, index) => index !== action.payload),
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

export const { setTodo, addTodo, setTodoFinished, setTodoActive, deleteTodo, deleteFinishedTodo } = todoSlice.actions;

export default todoSlice.reducer;

export const getTodo = (state: RootState): ITodo => state.todo;
