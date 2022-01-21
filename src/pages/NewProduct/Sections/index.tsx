import React from 'react';
import { Container } from '../../../components';
import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';

const Sections = () => {
  return (
    <Container
      align-Items="flex-start"
      flex-wrap="wrap"
      background="#F2F2F2"
      border-radius="16px"
      margin-bottom="1em"
      padding="2em"
    >
      <ProductImages />
      <ProductDetails />
    </Container>
  );
};

export default Sections;
