import React, { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import {
  CartContainer,
  GlobalStyle,
  ListContainer,
  TotalContainer,
} from './styles';
import EmptyCart from './Sections/EmptyCart';
import { PathNavigate, SpinnerContainer } from '../../components';
import CartList from './Sections/CartList';
import Subtotal from './Sections/Subtotal';
import { AppState } from '../../redux/store';
import { ActionCartType } from '../../redux/Cart/type';
import { getProfile } from '../../redux/User/action';
import { OrfferSection } from '../User/ReviewOrder/Sections/style';

const Cart = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const cart = useSelector((state: AppState) => state.user.myProfile);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const [cartItems, setCartItems] = useState([
    {
      id: 'One',
      name: 'Apple iPhone 11 Pro 256GB Memory',
      price: 5000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU',
      description: 'productOne description',
      quantity: 5,
      isDescount: false,
    },
    {
      id: 'Two',
      name: 'Apple Airpods Wireless Bluetooth Headset',
      price: 3700,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU',
      description: 'productOne description',
      quantity: 5,
      isDescount: true,
    },
  ]);

  console.log('cart', cart.user?.cart?.items);
  return (
    <OrfferSection style={{ marginTop: '20px' }}>
      <PathNavigate name="Shopping Cart" />
      {!cart.user?.cart.items.length ? (
        <EmptyCart />
      ) : cart.isLoading ? (
        <SpinnerContainer />
      ) : (
        <CartContainer align-items="flex-start">
          <ListContainer direction="column" width="70%">
            {cart.user?.cart?.items.map(item => (
              <CartList data={item} key={item.product._id} />
            ))}
          </ListContainer>

          <TotalContainer
            direction="column"
            width="30%"
            background-color="#F2F2F2"
            border-radius="16px"
            margin-left="2em"
            height="50%"
          >
            <Subtotal total={4} />
          </TotalContainer>
        </CartContainer>
      )}
    </OrfferSection>
  );
};

export default Cart;
