import { Routes, Route, Navigate } from 'react-router-dom';
import { useMount } from 'react-use';
import store from 'store';

import { Layout } from 'components';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Statistics from './Statistics';
import { setTodo } from 'states/todo';
import { setInfo } from 'states/information';
import { useAppDispatch } from 'hooks';
import { setSettings } from 'states/settings';

const Router = () => {
  const dispatch = useAppDispatch();

  useMount(() => {
    const storeTodoData = store.get('todoList');
    const storeInfoData = store.get('infoData');
    const storeSettingsData = store.get('settingsData');
    if (storeTodoData) dispatch(setTodo(storeTodoData));
    if (storeInfoData) dispatch(setInfo(storeInfoData));
    if (storeSettingsData) dispatch(setSettings(storeSettingsData));
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
