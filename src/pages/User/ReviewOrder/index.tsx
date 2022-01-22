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
} from './Sections/style';
import { OrderDetails } from './Sections/orderDtails';
import { InputController } from '../../../components/Form';
import { ReviewTow } from './Sections/reviewtow';

const initialValues: IShippingSchema = {
  country: '',
  city: '',
  zip: 0,
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
    <Column>
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
                  <Column>
                    <ShapeAddress>Shipping Address</ShapeAddress>

                    <WrapperRowInput>
                      <Row style={{ marginRight: '23px' }}>
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
                      </Row>
                      <Row style={{ marginLeft: '23px' }}>
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
                        />
                      </Row>
                    </WrapperRowInput>
                    <WrapperRowInput>
                      <Row style={{ marginRight: '23px' }}>
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
                      </Row>
                      <Row style={{ marginLeft: '23px' }}>
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
                        />
                      </Row>
                    </WrapperRowInput>
                    <ShapeAddress>Payment Details</ShapeAddress>
                  </Column>
                </form>
              </LeftSection>

              <RightSection>
                <HeaderTitleRight>
                  <ReviewText fontWeight="bold" variant="h2">
                    Order Details
                  </ReviewText>
                  <ChangeText to="/cahnge">change</ChangeText>
                </HeaderTitleRight>
                <Column>
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
    </Column>
  );
};

export default ReviewOrder;
