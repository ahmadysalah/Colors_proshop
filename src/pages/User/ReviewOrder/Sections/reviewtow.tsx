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
  RightSectionTowReview,
  OrderDetailsText,
} from './style';
import { OrderDetails } from './orderDtails';
import { Column, Row } from '../../../../components/Row';
import logo from '../../../../assets/Images/card.png';

export const ReviewTow = () => {
  return (
    <WrapperCard>
      <LeftSection>
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
          <Column style={{ width: '461px' }}>
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

            <HeaderTitleRight style={{ marginTop: '32px' }}>
              <ReviewText>Payment Details</ReviewText>
              <ChangeText to="/change">change</ChangeText>
            </HeaderTitleRight>
            <span>visa</span>
          </Column>
        </Column>
      </LeftSection>
      <RightSectionTowReview>
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
          <Row JC="flex-end" style={{ marginTop: '20px' }}>
            <RevieworderButton>Review order</RevieworderButton>
          </Row>
        </Column>
      </RightSectionTowReview>
    </WrapperCard>
  );
};

export default ReviewTow;
