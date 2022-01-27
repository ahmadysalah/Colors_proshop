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
    <Container direction="column" align-items="center" width="100%">
      <Container direction="column" width="85.4%">
        <DeviderTitle title="Featured Product" position="start" />
      </Container>
      <Container direction="row" width="85.4%" justify-content="space-between">
        <RowWithRadius direction="row">
          {data?.map((item, i) => (
            <ComplexCard key={i} image={item.images[0]} {...item} />
          ))}
        </RowWithRadius>
      </Container>
    </Container>
  );
};
