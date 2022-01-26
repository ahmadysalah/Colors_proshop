import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsBookmark } from 'react-icons/bs';
import { Button } from '../Button/ButtonStyle';
import img from '../../assets/tow.jpg';
import Typography from '../Typography';
import { Content, ContentAction, Discount, MainCard } from './cardStyles';
import { Container, Image } from '..';

export interface IProducts {
  image: string;
  rating: number;
  price: number;
  discount?: number;
  countInStock?: number;
  _id?: string;
  name?: string;
  description: string;
}
const ComplexCard = ({ ...props }: IProducts) => {
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
      <ContentAction>
        <Image
          src={props.image}
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
      </ContentAction>
      <Content>
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
        >
          Add to cart
        </Button>
      </Container>
    </MainCard>
  );
};

export default ComplexCard;
