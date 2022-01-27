import React from 'react';
import { Container, Typography } from '../../../components';
import { Button } from '../../../components/Button/ButtonStyle';
import { ButtonHero } from '../../../components/Slider/SliderStyle';
import { ButtonKeep } from './style';

interface IDetailProps {
  orderNumber?: string;
  shippingAddress?: string;
  orderItem?: string;
}

const Detail = ({ orderNumber, shippingAddress, orderItem }: IDetailProps) => {
  return (
    <>
      <Container
        direction="row"
        background-color="#F2F2F2"
        height="372px"
        border-radius="16px"
        width="85.4%"
        margin="44px auto"
      >
        <Container
          direction="column"
          margin-top="31px"
          justify-content="space-between"
          padding="40px"
        >
          <Typography
            variant="h2"
            bold
            margin-bottom="30px"
            fontFamily="mulish"
          >
            Payment Success !
          </Typography>
          <Typography variant="h3" bold fontFamily="mulish">
            Order number
          </Typography>
          <Typography variant="h3" bold fontFamily="mulish">
            Shipping address
          </Typography>
          <Typography variant="h3" bold fontFamily="mulish">
            Order item
          </Typography>
          <Typography
            variant="p"
            width="50%"
            margin-bottom="31px"
            fontFamily="mulish"
          >
            An email will be sent to your email address contains order
            confirmation and tracking code
          </Typography>
        </Container>
        <Container
          direction="column"
          justify-content="space-between"
          height="140px"
          margin-top="20px"
        >
          <Typography variant="p" font-size="16px" fontFamily="mulish">
            {orderNumber}
          </Typography>
          <Typography variant="p" font-size="16px" fontFamily="mulish">
            {shippingAddress}
          </Typography>
          <Typography variant="p" font-size="16px" fontFamily="mulish">
            {orderItem}
          </Typography>
        </Container>
      </Container>
      <Container padding="0" width="14%" float="right" margin-right="7.5%">
        <ButtonKeep to="/">
          <Typography font-size="20px" fontFamily="mulish">
            Keep Shopping
          </Typography>
        </ButtonKeep>
      </Container>
    </>
  );
};

export default Detail;
