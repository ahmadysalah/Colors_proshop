import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { Counter, Image, Typography } from '../../../components';
import {
  CloseIcon,
  OldPrice,
  ItemTitle,
  WrapCounter,
  ItemContainer,
  ImgContainer,
} from '../styles';

const CartList = ({ item, qty, removeFromCart }: any) => {
  return (
    <ItemContainer
      background-color="#F2F2F2"
      height="242px"
      border-radius="16px"
      position="relative"
      padding="1em"
      margin-bottom="30px"
      justify-content="space-between"
    >
      <CloseIcon onClick={() => removeFromCart(item.id)}>
        <GrFormClose />
      </CloseIcon>
      {item.isDescount && (
        <OldPrice>
          <Typography
            children="$999.97"
            variant="span"
            color="#707070"
            fontSize="24px"
            letter-spacing="0.48px"
            text-decoration="line-through"
          />
        </OldPrice>
      )}

      <ImgContainer
        width="60%"
        align-items="start"
        justify-content="space-between"
      >
        <Image src={item.imageUrl} alt={item.name} width="40%" fit="cover" />
        <ItemTitle to={`/product/${item.id}`}>
          <Typography
            children={item.name}
            variant="h2"
            margin-left="0.5em"
            padding="0.5em"
            overflow-wrap="break-word"
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
        width="auto"
        text-align="right"
      />
    </ItemContainer>
  );
};

export default CartList;
