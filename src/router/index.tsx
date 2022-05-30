import { Layout } from 'components';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './Dashboard';
import Settings from './Settings';
import Statistics from './Statistics';

const Router = () => {
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
