/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Container, InnerSection } from '../..';
import ComplexCard from '../../Card/ProductCard';
import { DeviderTitle } from '../../DeviderTitle/deviderTitle';
import { CardItem } from '../FeaturedProducts/CardItem';
import { IProduct } from '../FeaturedProducts/FeaturedProducts';
import { RowWithRadius, CustomTopRate, CustomInnerSection } from './style';

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
