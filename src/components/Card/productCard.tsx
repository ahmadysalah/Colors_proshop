import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsFillBookmarkDashFill, BsBookmark } from 'react-icons/bs';
import { Button } from '../Button/ButtonStyle';
import img from '../../assets/tow.jpg';
import Typography from '../Typography';
import { Content, ContentAction, Discount, MainCard } from './cardStyles';
import { Container } from '..';

export interface IProducts {
  image: string;
  rating: number;
  price: number;
  discount?: number;
  countInStock: number;
  _id: string;
  name: string;
  description: string;
}
const ComplexCard = ({ ...props }: IProducts) => {
  return (
    <MainCard
      width="100%"
      height="655px"
      boxShadow="none"
      backgroundColor="white"
      flexDirection="column"
    >
      {props.discount ? (
        <Discount>
          <Typography width="none" color="white" fontSize="24px">
            {`${props.discount}`}
          </Typography>
        </Discount>
      ) : null}
      <ContentAction>
        <img
          src={props.image}
          alt=""
          style={{ width: '342px', height: '342px', margin: 'auto' }}
        />
      </ContentAction>
      <Content>
        <Typography variant="h3">{props.name}</Typography>
      </Content>
      <Content>
        {props.discount && (
          <Typography variant="h2" margin="0 10px" color="#FC4059">
            ${props.price - (props.price / props.discount) * props.discount}
          </Typography>
        )}
        <Typography
          variant="h2"
          text-decoration={props.discount ? 'line-through' : 'none'}
        >
          ${props.price}
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
      <Container
        direction="row"
        margin="auto"
        justifyContent="center"
        padding="15px"
      >
        <Button
          height="62px"
          background="#F2F2F2"
          width="54px"
          padding="none"
          margin="0 13px 0px 62px"
        >
          <BsBookmark />
        </Button>
        <Button
          height="62px"
          width="324px"
          background="#F2F2F2"
          fontSize="15px"
        >
          Add to cart
        </Button>
      </Container>
    </MainCard>
  );
};

export default ComplexCard;
