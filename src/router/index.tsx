import { Layout } from 'components';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './Dashboard';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate replace to='dashboard' />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;
