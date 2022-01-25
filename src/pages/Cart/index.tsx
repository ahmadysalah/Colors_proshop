import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { CartContainer, ListContainer, TotalContainer } from './styles';
import EmptyCart from './Sections/EmptyCart';
import { PathNavigate, SpinnerContainer } from '../../components';
import CartList from './Sections/CartList';
import Subtotal from './Sections/Subtotal';
import { AppState } from '../../redux/store';
import { ActionCartType } from '../../redux/Cart/type';
import { getProfile } from '../../redux/User/action';
import { TAllActionProduct } from '../../redux/Product/type';
import { TopRate } from '../../components/sections/TopRate/TopRate';

const Cart = () => {
  const dispatch =
    useDispatch<
      ThunkDispatch<AppState, any, ActionCartType | TAllActionProduct>
    >();
  const cart = useSelector((state: AppState) => state.user.myProfile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      <PathNavigate name="Shopping Cart" />
      {!cart.user?.cart?.items.length ? (
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
          >
            <Subtotal data={cart.user?.cart} />
          </TotalContainer>
        </CartContainer>
      )}
      <TopRate />
    </>
  );
};

export default Cart;
