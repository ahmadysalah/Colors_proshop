import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Column, Container, Divider, Typography } from '../../../../components';

export const ReviewText = styled(Typography)`
  font-family: normal normal 900 32px/15px Mulish;
  letter-spacing: 1.28px;
  /*
    font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.88px;
  letter-spacing: 1.28px;
  color: #242424;
  opacity: 1;
  font-family: normal normal bold 32px/15px Mulish;
  letter-spacing: 1.28px;
  color: #242424;
  
  */
`;
export const OrderDetailsText = styled(ReviewText)`
  font-family: normal normal 900 32px/15px Mulish;
  letter-spacing: 1.28px;
  font-size: 2rem;
  font-weight: bold;
`;
export const TextFooter = styled('p')`
  font-size: 16px;
  letter-spacing: 0.32px;
  color: ${props => props.theme?.background?.darkGrey};
  opacity: 1;
`;
export const ChangeText = styled(Link)`
  font-size: 22px;
  letter-spacing: 0.44px;
  color: #707070;
  opacity: 1;
  text-decoration: underline;
`;

interface IBoxNumber {
  isActive: boolean;
}
export const BoxNumber = styled('div')<IBoxNumber>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  width: 40px;
  font-size: 22px;
  font-weight: bold;
  margin-right: 9px;
  height: 40px;
  background: ${props =>
    props.isActive
      ? `${props.theme?.primary?.lightYallow}; 0% 0% no-repeat padding-box`
      : '#707070 0% 0% no-repeat padding-box'};
  color: ${props => (props.isActive ? '#242424' : '#FFFFFF ')};
  margin-left: 9px;
`;

export const TextActive = styled(Typography)<IBoxNumber>`
  font-size: 1.375rem;
  font-family: normal normal bold 22px/15px Mulish;
  letter-spacing: 0.88px;
  width: auto;
  color: ${props => (props.isActive ? '#242424' : '#707070')};
`;

export const WrapperReviewRow = styled('div')`
  display: flex;
  margin-top: 36px;
  align-items: center;
  width: 100%;
`;
export const InnerSection = styled(Column)`
  align-items: start;
  justify-content: start;
  margin: 0 auto;
  width: 100%;
  margin-top: 44px;
`;

export const DividerTop = styled(Divider)`
  width: 100px;
  color: #f2f2f2;
  margin: 0 40px;
`;

export const DividerFull = styled(Divider)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  position: relative;
`;

export const WrapperCard = styled('div')`
  display: flex;
  width: 100%;
  background: none;
  justify-content: space-between;
  margin-top: 36px;
  /* margin-right: 50px; */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const ProductContainer = styled.div`
  overflow: auto;
  width: 60%;
  height: 300px;
  overflow-x: hidden;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const OrderWrapper = styled(WrapperCard)`
  width: 90%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const OrfferSection = styled(Column)`
  width: 90%;
  margin: auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100;
  }
`;
export const LeftSection = styled('div')`
  background: #f2f2f2;
  border-radius: 16px;
  opacity: 1;
  padding: 45px 40px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
export const RightSection = styled(LeftSection)`
  /* flex: 2; */
  margin-left: 30px;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 15px auto;
    padding-left: 0;
  }
`;
export const RightSectionTowReview = styled(LeftSection)`
  /* flex: 2; */
  margin-left: 30px;
  height: 280px;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 15px auto;
    padding-left: 0;
  }
`;

export const RightSectionPlace = styled(RightSectionTowReview)`
  width: 20%;
  height: 200px;
  @media (max-width: 1500px) {
    width: 100%;
    padding: 10px;
    height: 240px;
  }
`;

export const ShapeAddress = styled('p')`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.88px;
  letter-spacing: 1.28px;
  color: #242424;
  opacity: 1;
  font-family: normal normal bold 32px/15px Mulish;
  letter-spacing: 1.28px;
  color: #242424;
`;

export const ColumWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`;
export const UserName = styled(Typography)`
  font-size: 1.375rem;
  letter-spacing: 0.88px;
  color: #000000;
  opacity: 1;
  margin-top: 16px;
  margin-bottom: 9px;
`;
export const Address = styled(Typography)`
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 0.64px;
  color: #000000;
  opacity: 1;
  margin-top: 16px;
  width: 209px;
`;

export const WrapperRowInput = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const HeaderTitleRight = styled('div')`
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;
export const FooterTitleRight = styled('div')`
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

export const ImageCard = styled.img`
  width: 135px;
  height: 90px;
  opacity: 1;
  object-fit: cover;
`;

export const OrderItemsWrapper = styled('div')`
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

export const OrderPriceWrapper = styled('div')`
  flex-direction: row;
  width: 100%;
  display: flex;
  align-items: start;
`;

export const TextTitle = styled('p')`
  font-size: 22px;
  letter-spacing: 0.44px;
  color: #707070;
  opacity: 1;
  margin-left: 10px;
  font-family: normal normal normal 22px/30px Mulish;
  color: #707070;
`;

export const PriceText = styled('p')`
  font-size: 22px;
  letter-spacing: 0.44px;
  color: ${props => props.theme?.background?.darkGrey};
  padding-left: 10px;
`;
export const TotalPriceText = styled('p')`
  font-size: 22px;
  letter-spacing: 0.44px;
  color: #242424;
  opacity: 1;
  padding-left: 10px;
`;
export const CountText = styled('p')`
  font-size: 16px;
  letter-spacing: 0.44px;
  color: #707070;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const RevieworderButton = styled.button`
  width: 324px;
  height: 62px;
  background: ${props => props.theme?.primary?.lightYallow};
  border-radius: 10px;
  opacity: 1;
  display: flex;
  border: none;
  outline: none;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-bottom: 61px;
  margin-top: 30px;
  float: right;
`;

export const LeftOrderSection = styled(LeftSection)`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
