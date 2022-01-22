import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
  CartContainer,
  GlobalStyle,
  ListContainer,
  TotalContainer,
} from './styles';
import EmptyCart from './Sections/EmptyCart';
import { Container, PathNavigate } from '../../components';
import CartList from './Sections/CartList';
import Subtotal from './Sections/Subtotal';

const Cart = () => {
  const [productId, setProductId] = useState('one');
  const [qty, setQty] = useState(2);

  // const dispatch = useDispatch();
  // const cart = useSelector(state => state.cart);
  // const { cartList, cartCount, totalPrice } = cart;

  // useEffect(() => {
  //   if (productId) {
  //     dispatch(addToCart(productId, qty));
  //   }
  // }, [dispatch, productId, qty]);

  const removeFromCart = id => {
    // dispatch(removeFromCart(id));
    console.log('The item removed from cart is: ', id);
  };

  const checkoutHandler = () => {
    console.log('checkoutHandler');
  };

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
    <Container direction="column" padding="0 3em 0 5em">
      <GlobalStyle />
      <PathNavigate name="Shopping Cart" />
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartContainer align-items="flex-start">
          <ListContainer direction="column" width="70%">
            {cartItems.map((item: IProduct) => {
              return (
                <CartList
                  item={item}
                  key={item.id}
                  qty={qty}
                  removeFromCart={removeFromCart}
                />
              );
            })}
          </ListContainer>

          <TotalContainer
            direction="column"
            width="30%"
            background-color="#F2F2F2"
            border-radius="16px"
            margin-left="2em"
          >
            <Subtotal cartItems={cartItems} checkoutHandler={checkoutHandler} />
          </TotalContainer>
        </CartContainer>
      )}
    </Container>
  );
};

export default Cart;
