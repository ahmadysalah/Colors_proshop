// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import {
  ReviewText,
  FooterTitleRight,
  TextFooter,
  UserName,
  Address,
  RevieworderButton,
  ChangeText,
  HeaderTitleRight,
  WrapperCard,
  ShapeAddress,
  LeftSection,
  RightSection,
  TextActive,
  RightSectionPlace,
  OrderDetailsText,
  LeftOrderSection,
  OrderWrapper,
  ProductContainer,
} from './style';
import { OrderDetails } from './orderDtails';
import { Column, Row } from '../../../../components/Row';
import logo from '../../../../assets/Images/card.png';
import { AppState } from '../../../../redux/store';
import { ActionOrderType, IMyOrder } from '../../../../redux/Order/type';
import {
  getMyOrder,
  getOrderById,
  getOrders,
} from '../../../../redux/Order/action';
import { SpinnerContainer } from '../../../../components';

export const ReviewTow = () => {
  const dispatch =
    useDispatch<ThunkDispatch<AppState, IMyOrder, ActionOrderType>>();
  const ordersA = useSelector((state: AppState) => state.order.orderById);

  useEffect(() => {
    dispatch(getOrderById('61f0050964b6f00004501d91'));
  }, [dispatch]);

  console.log('ordersA', ordersA);

  return (
    <OrderWrapper>
      {ordersA?.isLoading && !ordersA.orders ? (
        <SpinnerContainer />
      ) : (
        <>
          <LeftOrderSection>
            <Column>
              {/* {console.log(ordersA.isLoading, ordersA.success)}
              {console.log(
                ordersA?.orders ? ordersA.orders[0].shippingAddress : undefined,
              )} */}
              {console.log('spinner finish', ordersA.orders?.shippingAddress)}
              <ShapeAddress>Shipping Address</ShapeAddress>
              {/* {console.log('shipping address tag done')} */}
              <UserName>John rose</UserName>
              <Address>{ordersA.orders?.shippingAddress?.country}</Address>
              <HeaderTitleRight style={{ marginTop: '32px' }}>
                <ShapeAddress style={{ marginTop: '5px' }}>
                  Order Details
                </ShapeAddress>
                <ChangeText to="/change">change</ChangeText>
              </HeaderTitleRight>
              <Column style={{ width: '100%' }}>
                <ProductContainer>
                  <OrderDetails
                    title="iPhone 11 Pro 256GB Memory"
                    image={logo}
                    priceItem={20}
                    countItem={20}
                  />
                  <OrderDetails
                    title="iPhone 11 Pro 256GB Memory"
                    image={logo}
                    priceItem={20}
                    countItem={20}
                  />
                </ProductContainer>
              </Column>
              <HeaderTitleRight
                style={{ marginTop: '32px', justifyContent: 'space-between' }}
              >
                <form onSubmit={() => console.log('submitted')}>
                  <Column>
                    <ShapeAddress>Payment Details</ShapeAddress>
                    {/* 
                    <CardElement
                      options={cardElementOpts as any}
                      onChange={handleCardDetailsChange}
                    /> */}
                  </Column>
                </form>
              </HeaderTitleRight>
            </Column>
          </LeftOrderSection>
          <RightSectionPlace>
            <Column>
              <OrderDetailsText>Order Details</OrderDetailsText>
              <FooterTitleRight>
                <TextFooter>Subtotal</TextFooter>
                <TextFooter>$589.98</TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter>Tax</TextFooter>
                <TextFooter>$589.98</TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter>Shipping</TextFooter>
                <TextFooter>$589.98</TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter style={{ fontWeight: 'bold' }}>Total</TextFooter>
                <TextFooter style={{ fontWeight: 'bold' }}>$589.98</TextFooter>
              </FooterTitleRight>
            </Column>
            <RevieworderButton type="submit">Review order</RevieworderButton>
          </RightSectionPlace>
        </>
      )}
    </OrderWrapper>
  );
};

export default ReviewTow;
