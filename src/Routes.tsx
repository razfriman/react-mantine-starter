import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Counter } from './pages/Counter';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

export const ROUTES = (
  <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route path='' element={<Home />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/profile' element={<Profile />} />
    </Route>
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
);
