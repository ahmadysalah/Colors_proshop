/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Container } from '../..';
import { DeviderTitle } from '../../DeviderTitle/deviderTitle';
import { RowWithRadius } from './style';
import { IProducts } from '../../../redux/Product/type';
import ComplexCard from '../../Card/productCard';

interface Props {
  data?: IProducts[];
}

export const TopRate = ({ data }: Props) => {
  return (
    <Container direction="column" margin="auto" width="90%">
      <Container>
        <DeviderTitle position="start" title="TOP RATE PRODUCTS" />
      </Container>
      <RowWithRadius direction="row">
        {data?.map((item, i) => (
          <ComplexCard
            image={`https://proshop-ms.herokuapp.com${item.images[0]}`}
            {...item}
          />
        ))}
      </RowWithRadius>
    </Container>
  );
};
