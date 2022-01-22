import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import Loadable from './components/Loadable';

const Signup = Loadable(lazy(() => import('./pages/Auth/Signup')));
const Login = Loadable(lazy(() => import('./pages/Auth/Login')));
const Product = Loadable(lazy(() => import('./pages/Gest/ProductDetails')));
const ReviewOrder = Loadable(lazy(() => import('./pages/User/ReviewOrder')));
const Home = Loadable(lazy(() => import('./pages/Gest/ProductDetails')));
const Cart = Loadable(lazy(() => import('./pages/Cart')));
const Profile = Loadable(lazy(() => import('./pages/Profile')));
const NewProduct = Loadable(lazy(() => import('./pages/NewProduct')));

export const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/review" element={<ReviewOrder />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newProduct" element={<NewProduct />} />
    </Routes>
  );
};
