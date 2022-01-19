import React, { useState } from 'react';
import { Button } from '../Button/ButtonStyle';
import img from '../../assets/tow.jpg';
import Typography from '../Typography';
import { Content, ContentAction, Discount, MainCard } from './cardStyles';

const ComplexCard = () => {
  const [disCount, setDisCount] = useState(false);

  return (
    <MainCard width="520px" height="655px">
      {disCount ? (
        <Discount>
          <Typography width="none" color="white" fontSize="24px">
            30%
          </Typography>
        </Discount>
      ) : null}
      <ContentAction>
        <img src={img} alt="" style={{ width: '100%', height: '100%' }} />
      </ContentAction>
      <Content>
        <Typography variant="p">Description for the product</Typography>
      </Content>
      <Content>
        {disCount ? (
          <Typography variant="h2" margin="0 10px" color="red">
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
      <ContentAction>
        <Button
          height="62px"
          width="54px"
          padding="none"
          margin="0 13px 34px 62px"
        >
          Add
        </Button>
        <Button height="62px" width="324px" background="none">
          Add to cart
        </Button>
      </ContentAction>
    </MainCard>
  );
};

export default ComplexCard;
