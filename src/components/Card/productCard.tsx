import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsFillBookmarkDashFill, BsBookmark } from 'react-icons/bs';
import { Button } from '../Button/ButtonStyle';
import img from '../../assets/tow.jpg';
import Typography from '../Typography';
import { Content, ContentAction, Discount, MainCard } from './cardStyles';

const ComplexCard = () => {
  const [disCount, setDisCount] = useState(false);
  const [discountValue, setDiscountValue] = useState(0);
  const [rates, setRate] = useState(3);

  return (
    <MainCard
      width="520px"
      height="655px"
      boxShadow="none"
      backgroundColor="white"
      flexDirection="column"
    >
      {disCount ? (
        <Discount>
          <Typography width="none" color="white" fontSize="24px">
            {`${discountValue}`}
          </Typography>
        </Discount>
      ) : null}
      <ContentAction>
        <img
          src={img}
          alt=""
          style={{ width: '342px', height: '342px', margin: 'auto' }}
        />
      </ContentAction>
      <Content>
        <Typography variant="h3">Description for the product</Typography>
      </Content>
      <Content>
        {disCount ? (
          <Typography variant="h2" margin="0 10px" color="#FC4059">
            $999
          </Typography>
        ) : null}
        <Typography
          variant="h2"
          text-decoration={disCount ? 'line-through' : 'none'}
        >
          $999
        </Typography>
      </Content>
      <Content>
        <ReactStars isHalf name="rate" edit={false} value={rates} size={40} />
      </Content>
      <ContentAction>
        <Button
          height="62px"
          background="#F2F2F2"
          width="54px"
          padding="none"
          margin="0 13px 34px 62px"
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
      </ContentAction>
    </MainCard>
  );
};

export default ComplexCard;
