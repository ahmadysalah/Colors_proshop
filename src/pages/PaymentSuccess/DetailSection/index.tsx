import React from 'react';
import { Container, Typography } from '../../../components';
import { Button } from '../../../components/Button/ButtonStyle';

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
        >
          <Typography variant="h2" bold margin-bottom="38px">
            Payment Success !
          </Typography>
          <Typography variant="h3" bold>
            Order number
          </Typography>
          <Typography variant="h3" bold>
            Shipping address
          </Typography>
          <Typography variant="h3" bold>
            Order item
          </Typography>
          <Typography variant="p" width="50%" margin-bottom="31px">
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
          <Typography variant="p" font-size="16px">
            {orderNumber}
          </Typography>
          <Typography variant="p" font-size="16px">
            {shippingAddress}
          </Typography>
          <Typography variant="p" font-size="16px">
            {orderItem}
          </Typography>
        </Container>
      </Container>
      <Container padding="0" width="16.8%" float="right" margin-right="6.3%">
        <Button width="324px" background="#FCDD06" color="#242424">
          <Typography font-size="24px">Keep Shopping</Typography>
        </Button>
      </Container>
    </>
  );
};

export default Detail;
