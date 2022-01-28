// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
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

export const ReviewTow = () => {
  const stripe: any = useStripe();
  const elements = useElements();
  const [checkoutError, setCheckoutError] = useState();

  const pay = () => {
    const { error, paymentMethod } = stripe.confirmCardPayment('113123213', {
      type: 'card',
      card: elements?.getElement(CardElement),
    });
    console.log({
      error,
      paymentMethod,
    });
  };
  const dispatch =
    useDispatch<ThunkDispatch<AppState, IMyOrder, ActionOrderType>>();
  const ordersA = useSelector((state: AppState) => state.order.orderById);

  useEffect(() => {
    dispatch(getOrderById('61f0050964b6f00004501d91'));
  }, [dispatch]);

  const handleCardDetailsChange = (ev: any) => {
    if (ev.error) setCheckoutError(ev.error.message);
    else setCheckoutError(undefined);
  };
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
              <HeaderTitleRight
                style={{ marginTop: '32px', justifyContent: 'space-between' }}
              >
                <form
                  onSubmit={() => console.log('submitted')}
                  style={{ width: '100%' }}
                >
                  <Column>
                    <ShapeAddress>Payment Details</ShapeAddress>

                    <CardElement
                      options={cardElementOpts as any}
                      onChange={handleCardDetailsChange}
                    />
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

const iframeStyles = {
  base: {
    iconColor: '#0F1112',
    color: '#0F1112',
    fontWeight: '500',
    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    fontSize: '16px',
    fontSmoothing: 'antialiased',
    border: '1px solid #4D4D4D',
    ':-webkit-autofill': {
      color: '#fce883',
    },
    '::placeholder': {
      color: '#4D4D4D',
    },
    '::-webkit-input-placeholder': {
      color: '#4D4D4D',
      border: '1px solid #4D4D4D',
    },
  },
};

const cardElementOpts = {
  iconStyle: 'solid',
  style: iframeStyles,
};
