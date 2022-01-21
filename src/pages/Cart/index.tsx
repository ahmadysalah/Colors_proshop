import React, { useState } from 'react';
import {
  CartContainer,
  GlobalStyle,
  ListContainer,
  TotalContainer,
} from './styles';
import EmptyCart from './Sections/EmptyCart';
import { PathNavigate } from '../../components';
import CartList from './Sections/CartList';
import Subtotal from './Sections/Subtotal';

const Cart = () => {
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
  return (
    <>
      <GlobalStyle />
      <PathNavigate name="Shopping Cart" />
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartContainer align-items="flex-start">
          <ListContainer direction="column" width="70%">
            {cartItems.map((item: IProduct) => {
              return <CartList item={item} key={item.id} />;
            })}
          </ListContainer>

          <TotalContainer
            direction="column"
            width="30%"
            background-color="#F2F2F2"
            border-radius="16px"
            margin-left="2em"
          >
            <Subtotal />
          </TotalContainer>
        </CartContainer>
      )}
    </>
  );
};

export default Cart;
