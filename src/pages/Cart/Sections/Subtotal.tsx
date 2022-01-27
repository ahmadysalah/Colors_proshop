import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Typography } from '../../../components';

interface IProps {
  total?: number;
}
const Subtotal = ({ total }: IProps) => {
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
          variant="h2"
          fontSize="38px"
          letter-spacing="0.76px"
          margin-bottom="1em"
        >
          {total}$
        </Typography>
      </Container>
      <Divider color="#E8E8E8" />
      <Button
        width="80%"
        style={{ margin: '2em auto', padding: '1.2em' }}
        background="#FCDD06"
      >
        <Link
          to="/review"
          style={{
            fontFamily: 'mulish',
            fontVariant: 'inherit',
            fontSize: '22px',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Proceed to checkout
        </Link>
      </Button>
    </>
  );
};

export default Subtotal;
