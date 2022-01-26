import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsBookmark } from 'react-icons/bs';
import img from '../../assets/Images/defaultProduct.png';
import Typography from '../Typography';
import {
  AddCart,
  Content,
  ContentAction,
  Discount,
  MainCard,
  SaveBtn,
} from './cardStyles';
import { Container, Image } from '..';

export interface IProducts {
  image: string;
  rating: number;
  price: number;
  discount: number;
  countInStock?: number;
  _id?: string;
  name?: string;
  description: string;
}
const ComplexCard = ({ ...props }: IProducts) => {
  const disCount = () => {
    const percentage = (props.discount / props.price) * 100;
    return Math.ceil(percentage);
  };
  return (
    <MainCard>
      {props.discount ? (
        <Discount>
          <Typography width="none" color="white" fontSize="24px">
            {`-${disCount()}%`}
          </Typography>
        </Discount>
      ) : (
        <></>
      )}
      <ContentAction height="340px">
        <Image
          src={props.image}
          alt=""
          style={{ borderRadius: '16px', height: '100%' }}
        />
      </ContentAction>
      <Content margin="0 0 0 20px">
        <Typography variant="h3" fontSize="20px" fontFamily="mulish">
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
        {props.discount ? (
          <Typography variant="h2" margin="0 10px" color="#FC4059">
            ${`${props.discount}`}
          </Typography>
        ) : (
          <></>
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
        <SaveBtn>
          <BsBookmark size="24px" />
        </SaveBtn>
        <AddCart>Add to cart</AddCart>
      </Container>
    </MainCard>
  );
};

export default ComplexCard;
