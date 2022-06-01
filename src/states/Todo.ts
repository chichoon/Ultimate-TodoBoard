import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'store';

import { RootState } from 'states';

import { ITodo } from 'types/todo';
import { createDateSort, deadlineDateSort, today, INIT_TODO } from 'utils/todoUtils';

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
        ]
          .sort(createDateSort)
          .sort(deadlineDateSort),
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
        ]
          .sort(createDateSort)
          .sort(deadlineDateSort),
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
        ]
          .sort(createDateSort)
          .sort(deadlineDateSort),
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
