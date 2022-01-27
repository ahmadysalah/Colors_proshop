import React, { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  CartContainer,
  GlobalStyle,
  ListContainer,
  TotalContainer,
} from './styles';
import EmptyCart from './Sections/EmptyCart';
import { Container, PathNavigate, SpinnerContainer } from '../../components';
import CartList from './Sections/CartList';
import Subtotal from './Sections/Subtotal';
import { AppState } from '../../redux/store';
import { ActionCartType } from '../../redux/Cart/type';
import { getProfile } from '../../redux/User/action';
import { OrfferSection } from '../User/ReviewOrder/Sections/style';

const Cart = () => {
  // const { state } = useLocation();

  const [TotalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const cart = useSelector((states: AppState) => states.user.myProfile);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  console.log(TotalPrice, 'lklkkkkkkkkkkkkkkkkkkkk');
  return (
    <OrfferSection style={{ marginTop: '20px' }}>
      <PathNavigate name="Shopping Cart" />
      <Container direction="row" width="85%" margin="10px auto">
        <Container direction="column" width="80%">
          <Container direction="column" overflow="auto" height="500px">
            {cart.user?.cart?.items.map((item, i) => (
              <>
                <CartList data={item} key={i} />
              </>
            ))}
          </Container>
        </Container>
        <Container direction="column" width="30%">
          <TotalContainer
            direction="column"
            background-color="#F2F2F2"
            border-radius="16px"
            margin-left="2em"
            height="50%"
          >
            <Subtotal
              total={cart.user?.cart?.items.reduce(
                (prev: any, current) => prev + current.itemTotalPrice,
                0,
              )}
            />
          </TotalContainer>
        </Container>
      </Container>
    </OrfferSection>
  );
};

export default Cart;

// {cart.isLoading ? (
//   <SpinnerContainer />
// ) : (
//   <CartContainer align-items="flex-start">
//     <ListContainer direction="column" width="70%">
//       {cart.user?.cart?.items.map(item => (
//         <CartList data={item} key={item.product._id} />
//       ))}
//     </ListContainer>

//     <TotalContainer
//       direction="column"
//       width="30%"
//       background-color="#F2F2F2"
//       border-radius="16px"
//       margin-left="2em"
//       height="50%"
//     >
//       <Subtotal total={4} />
//     </TotalContainer>
//   </CartContainer>
// )}
