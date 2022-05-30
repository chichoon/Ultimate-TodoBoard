import { Layout } from 'components';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;
