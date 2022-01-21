import React from 'react';
import { Button, PathNavigate } from '../../components';
import Sections from './Sections';
import { ProductContainer, GlobalStyle } from './style';

function NewProduct() {
  return (
    <ProductContainer
      direction="column"
      align-items="flex-end"
      width="80%"
      padding-left="5em"
    >
      <GlobalStyle />
      <PathNavigate name="Create New Product" />
      <Sections />
      <Button
        background="#4BB543"
        color="#fff"
        fontSize="1em"
        padding="1em"
        borderRadius="6px"
      >
        Create New Product
      </Button>
    </ProductContainer>
  );
}

export default NewProduct;
