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

export const ReviewTow = () => {
  return (
    <OrderWrapper>
      <LeftOrderSection>
        <Column>
          <ShapeAddress>Shipping Address</ShapeAddress>
          <UserName>John rose</UserName>
          <Address>56051 Jones Falls, Philippines, Turkey - 62502</Address>

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
            <Column>
              <ReviewText>Payment Details</ReviewText>
              <span>visa</span>
            </Column>
            <ChangeText to="/change">change</ChangeText>
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
        <RevieworderButton>Review order</RevieworderButton>
      </RightSectionPlace>
    </OrderWrapper>
  );
};

export default ReviewTow;
