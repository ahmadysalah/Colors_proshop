import React, { useState } from 'react';
import { Button, Container, Divider, Typography } from '../../../components';

const Subtotal = () => {
  const [isDescount, setiIsDescount] = useState(true);
  return (
    <>
      <Container direction="column" align-items="center" padding="2em">
        <Typography
          children="Subtotal (3) items"
          variant="h2"
          fontSize="32px"
          letter-spacing="0.64px"
          margin-bottom="1em"
        />
        {isDescount && (
          <Typography
            children="$999.97"
            variant="span"
            color="#707070"
            fontSize="24px"
            letter-spacing="0.48px"
            margin-bottom="0.5em"
            text-decoration="line-through"
          />
        )}
        <Typography
          children="$989.97"
          variant="h2"
          fontSize="38px"
          letter-spacing="0.76px"
          margin-bottom="1em"
        />
      </Container>
      <Divider color="#E8E8E8" />
      <Button
        width="80%"
        style={{ margin: '2em auto', padding: '1em' }}
        background="#FCDD06"
      >
        Proceed to checkout
      </Button>
    </>
  );
};

export default Subtotal;
