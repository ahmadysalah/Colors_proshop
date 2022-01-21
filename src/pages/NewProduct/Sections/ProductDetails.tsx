import React from 'react';
import { Container, Typography, InputController } from '../../../components';
import {
  FiledWrapper,
  Label,
  InputWrapper,
} from '../../../components/Form/inputController/style';
import { FormContainer, InputsContainer, Textarea } from '../style';

const ProductDetails = () => {
  return (
    <FormContainer direction="column" margin-left="2em" width="calc(70% - 2em)">
      <Container direction="column" justify-Content="space-between">
        <Typography
          variant="h3"
          fontSize="1.5rem"
          bold
          color="test"
          margin="0 0 1em 0.3em"
        >
          Product Details
        </Typography>

        <InputsContainer>
          <InputController
            name="productName"
            label="Product name"
            type="text"
            isRequired
            touched
          />
          <InputController
            name="productBrand"
            label="Product Brand"
            type="text"
            isRequired
            touched
            marginLeft="0.5em"
          />
        </InputsContainer>

        <InputsContainer justify-Content="space-between">
          <InputController
            name="productId"
            label="Product ID"
            type="text"
            isRequired
            touched
          />
          <InputController
            name="productCategory"
            label="Product Category"
            type="text"
            isRequired
            touched
            marginLeft="0.5em"
          />
        </InputsContainer>

        <Container>
          <FiledWrapper style={{ height: 'auto', marginBottom: '1.5em' }}>
            <Label htmlFor="textarea">Product Description</Label>
            <InputWrapper>
              <Textarea id="textarea" name="productDesc" rows={5} />
            </InputWrapper>
          </FiledWrapper>
        </Container>

        <InputsContainer justify-Content="space-between">
          <InputController
            name="productStock"
            label="Count in Stock"
            type="number"
            isRequired
            touched
          />
          <InputController
            name="productPrice"
            label="Price"
            type="number"
            isRequired
            touched
            marginLeft="0.5em"
          />
        </InputsContainer>
      </Container>
    </FormContainer>
  );
};

export default ProductDetails;
