import { useFormik } from 'formik';
import { useState } from 'react';
import logo from '../../../assets/Images/card.png';
import { Column, Row } from '../../../components';
import {
  IShippingSchema,
  ShippingSchema,
} from '../../../utils/helper/validation';

import {
  ReviewText,
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
} from './Sections/style';
import { OrderDetails } from './Sections/orderDtails';
import { InputController } from '../../../components/Form';
import { ReviewTow } from './Sections/reviewtow';

const initialValues: IShippingSchema = {
  country: '',
  city: '',
  zip: '',
  address: '',
};

const ReviewOrder = () => {
  const formik = useFormik<IShippingSchema>({
    initialValues,
    validationSchema: ShippingSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [stepperNumber, setstepperNumber] = useState(0);
  return (
    <OrfferSection>
      <InnerSection>
        <ReviewText variant="h1">Review Order</ReviewText>
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
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    formik.handleSubmit();
                    formik.resetForm();
                  }}
                >
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
                    <ShapeAddress>Payment Details</ShapeAddress>
                  </Column>
                </form>
              </LeftSection>

              <RightSection>
                <HeaderTitleRight>
                  <ShapeAddress>Order Details</ShapeAddress>
                  <ChangeText to="/cahnge">change</ChangeText>
                </HeaderTitleRight>
                <Column>
                  <div
                    style={{
                      overflow: 'auto',
                      height: '300px',
                      overflowX: 'hidden',
                      borderRadius: '15px',
                    }}
                  >
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
                  </div>
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
            <Row JC="flex-end">
              <RevieworderButton onClick={() => setstepperNumber(1)}>
                Review order
              </RevieworderButton>
            </Row>
          </Column>
        )}
        {stepperNumber === 1 && <ReviewTow />}
      </InnerSection>
    </OrfferSection>
  );
};

export default ReviewOrder;
