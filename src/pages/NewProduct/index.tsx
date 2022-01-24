import { useFormik, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PathNavigate } from '../../components';
import Sections from './Sections';
import { ProductContainer, GlobalStyle } from './style';
// import { addProduct } from '../../redux/Admin/action';
import {
  AddProductSchema as validationSchema,
  IAddProductSchema,
} from '../../utils/helper/validation';

const initialValues: IAddProductSchema = {
  images: [],
  name: '',
  brand: '',
  categories: [],
  description: '',
  countInStock: 0,
  price: 0,
};

function NewProduct() {
  // const userLogin = useSelector(state => state.auth);
  // const { user: userInfo } = userLogin;
  // const admin = useSelector(state => state.admin);
  // const { addProduct: createProduct } = admin;
  // const { success, isLoading, error, product } = createProduct;

  // useEffect(() => {
  //   if (!userInfo || !userInfo.isAdmin) {
  //     history.push('/login');
  //   } else if (success) {
  //     history.push(`/products/${product._id}`);
  //   }
  // }, [dispatch, userInfo, success]);

  // const createNewProduct = () => {
  //   dispatch(addProduct());
  // }

  const formik = useFormik<IAddProductSchema>({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      console.log('values', values);
    },
  });

  return (
    <ProductContainer direction="column" padding-left="7.3%">
      <GlobalStyle />
      <PathNavigate name="Create New Product" />
      <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
        <Sections formik={formik} />
      </form>
    </ProductContainer>
  );
}

export default NewProduct;
