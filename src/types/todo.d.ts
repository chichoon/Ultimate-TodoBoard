export interface ITodo {
  type: 'todo';
  items: ITodoItem[];
  itemsDone: ITodoItemDone[];
}

export interface ITodoItem {
  todoTitle: string;
  createDate: string;
  deadLineDate?: string;
}

export interface ITodoItemDone {
  todoTitle: string;
  createDate: string;
  finishedDate: string;
}
