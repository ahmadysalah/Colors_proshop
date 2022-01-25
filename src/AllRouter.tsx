import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import Loadable from './components/Loadable';
import { Navbar } from './components';

const Signup = Loadable(lazy(() => import('./pages/Auth/Signup')));
const Login = Loadable(lazy(() => import('./pages/Auth/Login')));
const Product = Loadable(lazy(() => import('./pages/Gest/ProductDetails')));
const ReviewOrder = Loadable(lazy(() => import('./pages/User/ReviewOrder')));
const Home = Loadable(lazy(() => import('./pages/Gest/Home')));
const Cart = Loadable(lazy(() => import('./pages/Cart'))); // bug
const Dashboard = Loadable(lazy(() => import('./pages/DashBoard'))); // working
const AddNewProduct = Loadable(lazy(() => import('./pages/NewProduct'))); // bug
const Profile = Loadable(lazy(() => import('./pages/Profile'))); // bug
const ProductDetails = Loadable(
  lazy(() => import('./pages/Gest/ProductDetails')),
); // bug
const Search = Loadable(lazy(() => import('./pages/Gest/Search'))); // bug
const PaymentSuccess = Loadable(lazy(() => import('./pages/PaymentSuccess'))); // need style

export const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/review" element={<ReviewOrder />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addNewProduct" element={<AddNewProduct />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="/paymentSuccess" element={<PaymentSuccess />} />
    </Routes>
  );
};
