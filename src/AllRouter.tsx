import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import Loadable from './components/Loadable';
import { Navbar } from './components';

const Signup = Loadable(lazy(() => import('./pages/Auth/Signup')));
const Login = Loadable(lazy(() => import('./pages/Auth/Login')));
const Product = Loadable(lazy(() => import('./pages/Gest/ProductDetails')));
const ReviewOrder = Loadable(lazy(() => import('./pages/User/ReviewOrder')));
const Home = Loadable(lazy(() => import('./pages/Gest/Home/index')));
const Search = Loadable(lazy(() => import('./pages/Gest/Search/index')));

export const AllRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/review" element={<ReviewOrder />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};
