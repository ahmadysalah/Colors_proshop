import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsBookmark } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/ButtonStyle';
import img from '../../assets/tow.jpg';
import Typography from '../Typography';
import { Content, ContentAction, Discount, MainCard } from './cardStyles';
import { Container, Image } from '..';
import { AppState } from '../../redux/store';
import { ActionCartType } from '../../redux/Cart/type';
import { upduteActionCart } from '../../redux/Cart/action';

export interface IProducts {
  image: string;
  rating: number;
  price: number;
  discount?: number;
  countInStock?: number;
  _id: string;
  name?: string;
  description: string;
}
const ComplexCard = ({ ...props }: IProducts) => {
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const navigate = useNavigate();

  const handelAddCart = () => {
    dispatch(
      upduteActionCart({ productId: props._id, qty: 1 }, () => {
        navigate('/cart');
      }),
    );
  };
  return (
    <MainCard
      width="28.2%"
      max-height="655px"
      boxShadow="none"
      backgroundColor="white"
      flexDirection="column"
    >
      {props.discount ? (
        <Discount>
          <Typography
            width="none"
            color="white"
            fontSize="24px"
            fontFamily="mulish"
          >
            {`-${props.discount}%`}
          </Typography>
        </Discount>
      ) : (
        <></>
      )}
      <ContentAction onClick={() => navigate(`/product/${props._id}`)}>
        <Image
          src={props.image}
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
      </ContentAction>
      <Content onClick={() => navigate(`/product/${props._id}`)}>
        <Typography variant="h3" fontSize="24px" fontFamily="mulish">
          {props.name}
        </Typography>
      </Content>
      <Content>
        <ReactStars
          isHalf
          name="rate"
          edit={false}
          value={props.rating}
          size={40}
        />
      </Content>
      <Content>
        {props.discount && (
          <Typography
            variant="h2"
            margin="0 10px"
            color="#FC4059"
            fontFamily="mulish"
          >
            ${props.price - (props.price / props.discount) * props.discount}
          </Typography>
        )}
        <Typography
          variant="h2"
          text-decoration={props.discount ? 'line-through' : 'none'}
          fontFamily="mulish"
        >
          ${props.price}
        </Typography>
      </Content>

      <Container direction="row" margin="auto" padding="15px">
        <Button
          height="62px"
          background="#F2F2F2"
          width="10%"
          padding="none"
          margin-left="6%"
        >
          <BsBookmark size="24px" />
        </Button>
        <Button
          height="62px"
          width="65.3%"
          background="#F2F2F2"
          fontSize="15px"
          margin="0 5%"
          onClick={handelAddCart}
        >
          Add to cart
        </Button>
      </Container>
    </MainCard>
  );
};

export default ComplexCard;
