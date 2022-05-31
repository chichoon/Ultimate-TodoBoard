import { Routes, Route, Navigate } from 'react-router-dom';
import { useMount } from 'react-use';
import { useSetRecoilState } from 'recoil';
import dayjs from 'dayjs';

import { Layout } from 'components';
import { todayDateState } from 'states/atoms';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Statistics from './Statistics';

const Router = () => {
  const setTodayDate = useSetRecoilState(todayDateState);

  useMount(() => {
    setTodayDate(dayjs().format('YYYY-MM-DD'));
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
