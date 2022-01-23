/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Container, InnerSection } from '../..';
import { IProducts } from '../../../redux/Product/type';
import ComplexCard from '../../Card/productCard';
import { DeviderTitle } from '../../DeviderTitle/deviderTitle';
import { CardItem } from '../FeaturedProducts/CardItem';
import { IProduct } from '../FeaturedProducts/FeaturedProducts';
import { RowWithRadius, CustomTopRate, CustomInnerSection } from './style';

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
