// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import {
  FooterTitleRight,
  TextFooter,
  UserName,
  Address,
  RevieworderButton,
  ChangeText,
  HeaderTitleRight,
  ShapeAddress,
  RightSectionPlace,
  OrderDetailsText,
  LeftOrderSection,
  OrderWrapper,
  ProductContainer,
} from './style';
import { OrderDetails } from './orderDtails';
import { Column, Row } from '../../../../components/Row';
// @ts-ignore
import logo from '../../../../assets/Images/card.png';
import { AppState } from '../../../../redux/store';
import { ActionOrderType, IMyOrder } from '../../../../redux/Order/type';
import {
  getMyOrder,
  getOrderById,
  getOrders,
} from '../../../../redux/Order/action';
import { SpinnerContainer } from '../../../../components';

export const ReviewTow: React.FC<objectType> = ({ paymentId }) => {
  const stripe: any = useStripe();
  const pay = async () => {
    try {
      const { error } = await stripe.confirmCardPayment(
        'pi_3KNHsTDcar7dV87r0FEw3O9L_secret_1NklnjOkUIBfIMfoVjCKOSIdZ',
        {
          payment_method: paymentId,
        },
      );
      if (error) throw new Error(error.message);
      toast('Payment Successful', {
        type: 'success',
      });
    } catch (error: any) {
      toast(error.message, { type: 'error' });
    }
  };

  const dispatch =
    useDispatch<ThunkDispatch<AppState, IMyOrder, ActionOrderType>>();
  const ordersA = useSelector((state: AppState) => state.order.orderById);

  useEffect(() => {
    dispatch(getOrderById('61f0050964b6f00004501d91'));
  }, [dispatch]);

  return (
    <OrderWrapper>
      {ordersA?.isLoading && !ordersA.orders ? (
        <SpinnerContainer />
      ) : (
        <>
          <LeftOrderSection>
            <Column>
              <ShapeAddress>Shipping Address</ShapeAddress>
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
            <RevieworderButton onClick={pay}>Review order</RevieworderButton>
          </RightSectionPlace>
        </>
      )}
    </OrderWrapper>
  );
};

export default ReviewTow;
