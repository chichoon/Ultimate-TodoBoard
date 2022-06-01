import { Routes, Route, Navigate } from 'react-router-dom';
import { useMount } from 'react-use';
import store from 'store';

import { Layout } from 'components';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Statistics from './Statistics';
import { useAppSelector } from 'hooks/useAppSelector';
import { getTodo, setTodo } from 'states/todo';
import { useAppDispatch } from 'hooks/useAppDispatch';

const Router = () => {
  const todo = useAppSelector(getTodo);
  const dispatch = useAppDispatch();

  useMount(() => {
    const storeData = store.get('todoList');
    if (storeData) dispatch(setTodo(storeData));
    store.set('todoList', todo);
  });

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate replace to='dashboard' />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='settings' element={<Settings />} />
        <Route path='statistics' element={<Statistics />} />
      </Route>
    </Routes>
  );
};

export default Router;
