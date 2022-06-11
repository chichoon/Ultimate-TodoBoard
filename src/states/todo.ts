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
      state.items = [
        ...state.items,
        { todoTitle: action.payload.title, createDate: today, deadLineDate: action.payload.deadLineDate },
      ]
        .sort(createDateSort)
        .sort(deadlineDateSort);
      store.set('todoList', state);
    },
    setTodoFinished: (state: ITodo, action: PayloadAction<number>) => {
      state.itemsDone = [
        ...state.itemsDone,
        {
          ...state.items[action.payload],
          finishedDate: today,
        },
      ]
        .sort(createDateSort)
        .sort(deadlineDateSort);
      state.items = state.items.filter((_, index) => index !== action.payload);
      store.set('todoList', state);
    },
    setTodoActive: (state: ITodo, action: PayloadAction<number>) => {
      state.items = [...state.items, state.itemsDone[action.payload]].sort(createDateSort).sort(deadlineDateSort);
      state.itemsDone = state.itemsDone.filter((_, index) => index !== action.payload);
      store.set('todoList', state);
    },
    deleteTodo: (state: ITodo, action: PayloadAction<number>) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
      store.set('todoList', state);
    },
    deleteFinishedTodo: (state: ITodo, action: PayloadAction<number>) => {
      state.itemsDone = state.itemsDone.filter((_, index) => index !== action.payload);
      store.set('todoList', state);
    },
    resetTodo: (state: ITodo) => {
      state.items = [];
      state.itemsDone = [];
      store.set('todoList', state);
    },
  },
});

export const { setTodo, addTodo, setTodoFinished, setTodoActive, deleteTodo, deleteFinishedTodo, resetTodo } =
  todoSlice.actions;

export default todoSlice.reducer;

export const getTodo = (state: RootState): ITodo => state.todo;
