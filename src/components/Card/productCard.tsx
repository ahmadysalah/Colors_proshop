import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsBookmark } from 'react-icons/bs';
import img from '../../assets/Images/defaultProduct.png';
import Typography from '../Typography';
import {
  Actions,
  AddCart,
  Content,
  ContentAction,
  Discount,
  MainCard,
  SaveBtn,
} from './cardStyles';
import { Container, Image } from '..';
import { AppState } from '../../redux/store';
import { ActionCartType } from '../../redux/Cart/type';
import { upduteActionCart } from '../../redux/Cart/action';

export interface IProducts {
  image: string;
  rating: number;
  price: number;
  discount: number;
  countInStock?: number;
  _id: string;
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
      {props?.discount > 0 && (
        <Discount>
          <Typography width="none" color="white" fontSize="24px">
            {`-${disCount()}%`}
          </Typography>
        </Discount>
      )}
      <Container
        background="white"
        direction="column"
        height="35rem"
        border-Radius="12px"
      >
        <Image
          src={props.image}
          variant="square"
          size="lg"
          style={{
            flexShrink: 0,
            minWidth: '100%',
            maxHeight: '18rem',
          }}
        />

        <Content margin="1rem 0 0 20px">
          <Typography
            variant="h3"
            fontSize="20px"
            fontFamily="mulish"
            text-Align="center"
            width="90%"
          >
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
        <Actions>
          <SaveBtn>
            <BsBookmark size="24px" />
          </SaveBtn>
          <AddCart>Add to cart</AddCart>
        </Actions>
      </Container>
    </MainCard>
  );
};

export default ComplexCard;
