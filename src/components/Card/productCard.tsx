import React, { useEffect, useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { Button } from '../Button/ButtonStyle';
import Typography from '../Typography';
import { Content, ContentAction, Discount, MainCard } from './cardStyles';
import { IComplexProps } from './interface';

const ComplexCard = ({
  img,
  valueOfDiscount,
  description,
  price,
}: IComplexProps) => {
  const [disCount, setDisCount] = useState(false);
  const [priceAfterDis, setPriceAfterDis] = useState(0);

  useEffect(() => {
    if (valueOfDiscount) {
      setPriceAfterDis(() => price - valueOfDiscount);
      setDisCount(true);
    }
  });
  return (
    <MainCard width="520px" height="655px">
      {disCount ? (
        <Discount>
          <Typography width="none" color="white" fontSize="24px">
            {`${valueOfDiscount}`}
          </Typography>
        </Discount>
      ) : null}
      <ContentAction>
        <img src={img} alt="" style={{ width: '100%', height: '100%' }} />
      </ContentAction>
      <Content>
        <Typography variant="p">{description}</Typography>
      </Content>
      <Content>
        {disCount ? (
          <Typography variant="h2" margin="0 10px" color="red">
            {`${priceAfterDis}`}
          </Typography>
        ) : null}
        <Typography
          variant="h2"
          text-decoration={disCount ? 'line-through' : 'none'}
        >
          {`${price}`}
        </Typography>
      </Content>
      <ContentAction>
        <Button
          height="62px"
          width="54px"
          padding="none"
          margin="0 13px 34px 62px"
        >
          <BsBookmark />
        </Button>
        <Button height="62px" width="324px" background="none">
          Add to cart
        </Button>
      </ContentAction>
    </MainCard>
  );
};

export default ComplexCard;
