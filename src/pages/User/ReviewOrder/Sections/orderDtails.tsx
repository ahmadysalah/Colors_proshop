import { Column, Row } from '../../../../components/Row';
import {
  OrderItemsWrapper,
  DividerFull,
  CountText,
  OrderPriceWrapper,
  TotalPriceText,
  PriceText,
  ImageCard,
  TextTitle,
} from './style';

interface Props {
  image: string;
  title: string;
  priceItem: number;
  countItem: number;
  isHr?: boolean;
}

export const OrderDetails = ({
  title,
  image,
  priceItem,
  countItem,
  isHr = false,
}: Props) => {
  return (
    <Column>
      <OrderItemsWrapper>
        <ImageCard src={image} alt={title} />
        <Column>
          <TextTitle>{title}</TextTitle>
          <OrderPriceWrapper>
            <Row JC="start" item="center">
              <PriceText>{priceItem} $</PriceText>
              <CountText>*{countItem}</CountText>
            </Row>
            <TotalPriceText>{priceItem * countItem}$</TotalPriceText>
          </OrderPriceWrapper>
        </Column>
      </OrderItemsWrapper>
      {isHr && <DividerFull />}
    </Column>
  );
};
