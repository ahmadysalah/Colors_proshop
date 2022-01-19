import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import Loadable from './components/Loadable';

const Signup = Loadable(lazy(() => import('./pages/Auth/Signup')));
const Login = Loadable(lazy(() => import('./pages/Auth/Login')));
const Product = Loadable(lazy(() => import('./pages/Gest/ProductDetails')));

export const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};
