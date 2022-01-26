import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { Container, PathNavigate } from '../../components';
import { ProductContainer } from './style';
import {
  AddProductSchema as validationSchema,
  IAddProductSchema,
} from '../../utils/helper/validation';
import ProductImages from './Sections/ProductImages';
import { Button } from '../../components/Button/ButtonStyle';
import ProductDetails from './Sections/ProductDetails';
import { AppState } from '../../redux/store';
import { TAllActionProduct } from '../../redux/Product/type';
import { addProduct } from '../../redux/Admin/action';
import { getAlCategory } from '../../redux/Product/action';

const initialValues: IAddProductSchema = {
  images: [],
  name: '',
  brand: '',
  categories: [],
  description: '',
  countInStock: 0,
  price: 0,
  colors: [],
};

function NewProduct() {
  useEffect(() => {
    dispatch(getAlCategory());
  }, []);
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();
  const allCategory = useSelector(
    (state: AppState) => state.product.allCategory,
  );
  const { categories } = allCategory;

  const updateProduct: IAddProductSchema = {
    id: 'one',
    images: [
      'https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.jpg?fakeurl=1&type=.jpg',
    ],
    name: 'name',
    brand: 'brand',
    categories: ['LAPTOP', 'Cars'],
    description: 'description',
    countInStock: 10,
    price: 5,
    colors: ['Pink'],
  };

  const formik = useFormik<IAddProductSchema>({
    initialValues: updateProduct || initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async values => {
      dispatch(
        // formik.values.id? updateProduct() :
        addProduct({
          brand: values.brand,
          images: values.images as File[],
          colors: values.colors,
          categories: values.categories,
          price: values.price,
          discount: 0,
          countInStock: values.countInStock,
          name: values.name,
          description: values.description,
        }),
      );
    },
  });

  return (
    <ProductContainer direction="column" padding-left="7.3%">
      <PathNavigate
        name={
          formik.values.id
            ? `update Product ${formik.values.id}`
            : 'Create New Product'
        }
      />
      <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
        <Container direction="column" align-Items="flex-end" width="71%">
          <Container
            align-Items="flex-start"
            flex-wrap="wrap"
            background="#F2F2F2"
            border-radius="16px"
            padding="2em"
            margin-bottom="1em"
          >
            <ProductImages formik={formik} />
            <ProductDetails formik={formik} categories={categories} />
          </Container>
          <Button
            type="submit"
            background="#4BB543"
            color="#fff"
            fontSize="1em"
            padding="1em"
            borderRadius="6px"
          >
            {formik.values.id ? 'Update Product' : 'Create New Product'}
          </Button>
        </Container>
      </form>
    </ProductContainer>
  );
}

export default NewProduct;
