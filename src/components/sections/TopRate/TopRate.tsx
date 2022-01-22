/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Container } from '../..';
import ComplexCard from '../../Card/productCard';
import { DeviderTitle } from '../../DeviderTitle/deviderTitle';
import { IProduct } from '../FeaturedProducts/FeaturedProducts';
import { RowWithRadius } from './style';

interface Props {
  dataItem: IProduct[];
}

export const TopRate = ({ dataItem }: Props) => {
  return (
    <Container direction="column" margin="auto" width="90%">
      <Container>
        <DeviderTitle position="start" title="TOP RATE PRODUCTS" />
      </Container>
      <RowWithRadius direction="row">
        {dataItem.map((item: IProduct, i) => (
          <ComplexCard />
        ))}
      </RowWithRadius>
    </Container>
  );
};
