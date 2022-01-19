import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { Container, Counter, Image, Typography } from '../../../components';
import {
  CloseIcon,
  OldPrice,
  ItemTitle,
  WrapCounter,
  ItemContainer,
  ImgContainer,
} from '../styles';

const CartList = ({ item }: any) => {
  const handleRemoveFormCart = (id: string) => {
    console.log('The item removed from cart is: ', id);
  };
  return (
    <ItemContainer
      background-color="#F2F2F2"
      height="242px"
      border-radius="16px"
      text-align="center"
      position="relative"
      margin="0 0 30px 0"
    >
      <CloseIcon onClick={() => handleRemoveFormCart(item.id)}>
        <GrFormClose />
      </CloseIcon>
      <OldPrice>
        <Typography
          children="$999.97"
          variant="span"
          color="#707070"
          fontSize="24px"
          letter-spacing="0.48px"
          margin="0 0 10px 0"
          text-decoration="line-through"
        />
      </OldPrice>

      <ImgContainer width="50%" align-items="start" margin="0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          width="50%"
          fit="cover"
          style={{ margin: '0' }}
        />
        <ItemTitle href={`/product/${item.id}`}>
          <Typography
            children={item.name}
            variant="h2"
            letter-spacing="0.48px"
          />
        </ItemTitle>
      </ImgContainer>
      <WrapCounter>
        <Counter />
      </WrapCounter>
      <Typography
        children={String(`$${item.price}`)}
        variant="h2"
        fontSize="38px"
        width="25%"
        text-align="right"
        padding-right="15px"
        margin="0.5em 0 0 0"
      />
    </ItemContainer>
  );
};

export default CartList;
