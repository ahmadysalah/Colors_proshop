import React from 'react';
import Select from 'react-select';
import { Container, Typography, InputController } from '../../../components';
import {
  FiledWrapper,
  Label,
  InputWrapper,
} from '../../../components/Form/inputController/style';
import {
  FormContainer,
  InputsContainer,
  SelectStyle,
  Textarea,
} from '../style';

const ProductDetails = ({ formik }: any) => {
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#F2F2F2' }),
  };
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
            name="name"
            label="Product Name"
            type="text"
            isRequired
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            errors={formik.errors?.name}
            touched={formik.touched?.name}
          />
          <InputController
            name="brand"
            label="Product Brand"
            type="text"
            isRequired
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            errors={formik.errors?.brand}
            touched={formik.touched?.brand}
            marginLeft="0.5em"
          />
        </InputsContainer>

        <InputsContainer justify-Content="space-between">
          <InputController
            name="id"
            label="Product ID"
            type="text"
            onChange={formik.handleChange}
          />
          <FiledWrapper style={{ marginLeft: '0.5em' }}>
            <Label htmlFor="select">Product Category</Label>
            <InputWrapper>
              <SelectStyle
                id="select"
                name="categories"
                styles={colourStyles}
                onChange={(selectedOption: any) => {
                  formik.setFieldValue('categories', selectedOption);
                }}
                isMulti
                options={[
                  { value: 'bugatti', label: 'Bugatti' },
                  { value: 'ferrari', label: 'Ferrari' },
                  { value: 'am', label: 'Aston Martin' },
                ]}
              />
            </InputWrapper>
          </FiledWrapper>
        </InputsContainer>

        <Container>
          <FiledWrapper style={{ height: 'auto', marginBottom: '1.5em' }}>
            <Label htmlFor="textarea">Product Description</Label>
            <InputWrapper>
              <Textarea
                id="textarea"
                name="description"
                rows={5}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // touched={formik.touched?.description}
                // errors={formik.errors?.description}
              />
            </InputWrapper>
          </FiledWrapper>
        </Container>

        <InputsContainer justify-Content="space-between">
          <InputController
            name="countInStock"
            label="Count in Stock"
            type="number"
            isRequired
            errors={formik.errors?.countInStock}
            touched={formik.touched?.countInStock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputController
            name="price"
            label="Price"
            type="number"
            isRequired
            errors={formik.errors?.price}
            touched={formik.touched?.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            marginLeft="0.5em"
          />
        </InputsContainer>
      </Container>
    </FormContainer>
  );
};

export default ProductDetails;
