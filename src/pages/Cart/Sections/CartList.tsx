import React, { useEffect, useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { Counter, Image, Typography } from '../../../components';
import { IItemCart } from '../../../redux/User/type';
import {
  CloseIcon,
  OldPrice,
  ItemTitle,
  WrapCounter,
  ItemContainer,
  ImgContainer,
} from '../styles';

interface IProps {
  data: IItemCart;
}
const CartList = ({ data }: IProps) => {
  const { product, qty, itemTotalPrice } = data;
  const handleRemoveFormCart = (id: string) => {
    alert(`The item removed from cart is:${id} `);
  };
  const [total, setTotal] = useState(0);
  console.log(data, 'joijjiiiiiiiiiiiiiiiiiiiiiiiii');

  useEffect(() => {
    setTotal(prev => prev + itemTotalPrice);
  }, [itemTotalPrice]);
  return (
    <ItemContainer
      background-color="#F2F2F2"
      height="180px"
      border-radius="16px"
      position="relative"
      padding="1em"
      margin-bottom="30px"
      justify-content="space-between"
    >
      <CloseIcon onClick={() => handleRemoveFormCart(product._id)}>
        <GrFormClose />
      </CloseIcon>
      {product.discount ? (
        <OldPrice>
          <Typography
            children={`${product.price}`}
            variant="span"
            color="#707070"
            fontSize="24px"
            letter-spacing="0.48px"
            text-decoration="line-through"
          />
        </OldPrice>
      ) : null}
      <ImgContainer
        width="60%"
        align-items="start"
        justify-content="space-between"
      >
        <Image src={product.images[0]} width="40%" fit="cover" />
        <ItemTitle to={`/product/${product._id}`}>
          <Typography
            children={product.name}
            variant="h2"
            margin-left="0.5em"
            padding="0.5em"
            overflow-wrap="break-word"
          />
        </ItemTitle>
      </ImgContainer>
      <WrapCounter>
        <Counter min={0} max={8} addQnt={qty} />
      </WrapCounter>
      <Typography
        children={String(`$${product.price - product.discount}`)}
        variant="h2"
        fontSize="38px"
        width="auto"
        text-align="right"
      />
    </ItemContainer>
  );
};

export default CartList;
