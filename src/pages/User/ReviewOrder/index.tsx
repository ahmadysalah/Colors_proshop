import { useFormik } from 'formik';
import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import logo from '../../../assets/Images/card.png';
import { Column, Row, Typography } from '../../../components';
import {
  IShippingSchema,
  ShippingSchema,
} from '../../../utils/helper/validation';

import {
  FooterTitleRight,
  TextFooter,
  InnerSection,
  WrapperRowInput,
  RevieworderButton,
  ChangeText,
  HeaderTitleRight,
  WrapperCard,
  ShapeAddress,
  DividerTop,
  WrapperReviewRow,
  LeftSection,
  RightSection,
  BoxNumber,
  TextActive,
  OrfferSection,
  InnerOverFlow,
} from './Sections/style';
import { OrderDetails } from './Sections/orderDtails';
import { InputController } from '../../../components/Form';
import { ReviewTow } from './Sections/reviewtow';
import { AppState } from '../../../redux/store';
import { ActionOrderType } from '../../../redux/Order/type';
import { createOrder } from '../../../redux/Order/action';

const initialValues: IShippingSchema = {
  country: '',
  city: '',
  zip: '',
  address: '',
};

const ReviewOrder = () => {
  const [stepperNumber, setstepperNumber] = useState(0);
  const [checkoutError, setCheckoutError] = useState();
  // const stripe: any = useStripe();
  // const elements = useElements();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionOrderType>>();
  const formik = useFormik<IShippingSchema>({
    initialValues,
    validationSchema: ShippingSchema,
    onSubmit: async values => {
      dispatch(
        createOrder({
          address: values.address,
          city: values.city,
          country: values.country,
          postalCode: values.zip,
        }),
      );
      setstepperNumber(1);

      // const { error, paymentMethod } = stripe.confirmCardPayment('113123213', {
      //   type: 'card',
      //   card: elements?.getElement(CardElement),
      // });
      // // const { error, paymentMethod } = await stripe.createPaymentMethod({
      // //   type: 'card',
      // //   card: elements.getElement(CardElement),
      // // });
      // console.log({
      //   error,
      //   paymentMethod,
      //   values,
      // });
    },
  });

  const handleCardDetailsChange = (ev: any) => {
    if (ev.error) setCheckoutError(ev.error.message);
    else setCheckoutError(undefined);
  };

  return (
    <OrfferSection>
      <InnerSection>
        <Typography variant="h2" font-Family="Mulish">
          Review Order
        </Typography>
        <WrapperReviewRow>
          <BoxNumber isActive={stepperNumber === 0}>1</BoxNumber>
          <TextActive isActive={stepperNumber === 0}>
            Shipping and Payment
          </TextActive>
          <DividerTop />
          <BoxNumber isActive={stepperNumber === 1}>2</BoxNumber>
          <TextActive isActive={stepperNumber === 1}>Place an Order</TextActive>
        </WrapperReviewRow>
        {stepperNumber === 0 && (
          <Column>
            <WrapperCard>
              <LeftSection>
                <form onSubmit={formik.handleSubmit}>
                  <Column
                    style={{
                      width: '90%',
                      margin: 'auto',
                      justifyContent: 'space-between',
                    }}
                  >
                    <ShapeAddress>Shipping Address</ShapeAddress>

                    <WrapperRowInput>
                      <InputController
                        name="country"
                        label="Country"
                        type="text"
                        placeholder="Palestine"
                        isRequired
                        errors={formik.errors?.country}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.country}
                      />
                      <InputController
                        name="city"
                        label="City"
                        type="text"
                        placeholder="Gaza"
                        isRequired
                        errors={formik.errors?.city}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        marginLeft="10%"
                      />
                    </WrapperRowInput>
                    <WrapperRowInput>
                      <InputController
                        name="zip"
                        label="Zip Code"
                        type="text"
                        placeholder="65555"
                        isRequired
                        errors={formik.errors?.zip}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.zip}
                      />
                      {/*
                        47%
                        */}
                      <InputController
                        name="address"
                        label="Street Address"
                        type="text"
                        placeholder="65555"
                        isRequired
                        errors={formik.errors?.address}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        marginLeft="10%"
                      />
                    </WrapperRowInput>
                    {/* <ShapeAddress>Payment Details</ShapeAddress>

                    <CardElement
                      options={cardElementOpts as any}
                      onChange={handleCardDetailsChange}
                    /> */}

                    {/* <StripeCardInput onChange={handleCardDetailsChange} />
                    <StripeCardExpiry />
                    <StripeCardCvc /> */}
                    {checkoutError && (
                      <Typography margin-Top="1rem" color="red">
                        {checkoutError}
                      </Typography>
                    )}
                    <Row JC="flex-end">
                      <RevieworderButton type="submit">
                        Review order
                      </RevieworderButton>
                    </Row>
                  </Column>
                </form>
              </LeftSection>

              <RightSection>
                <HeaderTitleRight>
                  <ShapeAddress>Order Details</ShapeAddress>
                  <ChangeText to="/cahnge">change</ChangeText>
                </HeaderTitleRight>
                <Column>
                  <InnerOverFlow>
                    <OrderDetails
                      title="iPhone 11 Pro 256GB Memory"
                      image={logo}
                      priceItem={20}
                      countItem={20}
                      isHr
                    />
                    <OrderDetails
                      title="iPhone 11 Pro 256GB Memory"
                      image={logo}
                      priceItem={20}
                      countItem={20}
                      isHr
                    />
                    <OrderDetails
                      title="iPhone 11 Pro 256GB Memory"
                      image={logo}
                      priceItem={20}
                      countItem={20}
                    />
                  </InnerOverFlow>
                </Column>

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
                  <TextFooter style={{ fontWeight: 'bold' }}>
                    $589.98
                  </TextFooter>
                </FooterTitleRight>
              </RightSection>
            </WrapperCard>
          </Column>
        )}
        {stepperNumber === 1 && <ReviewTow />}
      </InnerSection>
    </OrfferSection>
  );
};

export default ReviewOrder;

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
