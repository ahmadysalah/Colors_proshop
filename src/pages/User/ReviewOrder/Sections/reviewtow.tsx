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
  const createdorder = useSelector(
    (state: AppState) => state.order.createOrder,
  );
  console.log('order created', createdorder);
  console.log('first--------.', createdorder?.orders?.shippingAddress);
  return (
    <OrderWrapper>
      {createdorder?.isLoading && !createdorder.orders ? (
        <SpinnerContainer />
      ) : (
        <>
          <LeftOrderSection>
            <Column>
              <ShapeAddress>Shipping Address</ShapeAddress>
              <UserName>John rose</UserName>
              <Address>
                {createdorder?.orders?.shippingAddress?.address},
                {createdorder?.orders?.shippingAddress?.city},
                {createdorder?.orders?.shippingAddress?.country},
              </Address>
              <HeaderTitleRight style={{ marginTop: '32px' }}>
                <ShapeAddress style={{ marginTop: '5px' }}>
                  Order Details
                </ShapeAddress>
                <ChangeText to="/change">change</ChangeText>
              </HeaderTitleRight>
              <Column style={{ width: '100%' }}>
                <ProductContainer>
                  {createdorder.isLoading ? (
                    <SpinnerContainer />
                  ) : (
                    <>
                      {createdorder.orders?.orderItems.map(e => (
                        <OrderDetails
                          title={e.product?.name}
                          image={e.product?.images[0]}
                          priceItem={e.product?.price}
                          countItem={e.qty}
                        />
                      ))}
                    </>
                  )}
                </ProductContainer>
              </Column>
            </Column>
          </LeftOrderSection>
          <RightSectionPlace>
            <Column>
              <OrderDetailsText>Order Details</OrderDetailsText>
              <FooterTitleRight>
                <TextFooter>Subtotal</TextFooter>
                <TextFooter>
                  {createdorder.orders?.orderItems
                    ?.reduce(
                      (acc, item) => acc + item?.product?.price * item?.qty,
                      0,
                    )
                    .toFixed(2)}
                  $
                </TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter>Tax</TextFooter>
                <TextFooter>0 $</TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter>Shipping</TextFooter>
                <TextFooter>0 $</TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter style={{ fontWeight: 'bold' }}>Total</TextFooter>
                <TextFooter style={{ fontWeight: 'bold' }}>
                  {/* {createdorder?.orders?.totalPrice} */}
                </TextFooter>
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
