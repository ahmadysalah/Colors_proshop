/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import ProductOverview from './Sections/ProductOverview';
import Specifications from './Sections/Specifications';
import Review from './Sections/Review';
import { Container, PathNavigate, SpinnerContainer } from '../../../components';
import { getProductById } from '../../../redux/Product/action';
import { AppState } from '../../../redux/store';
import { IProducts, TAllActionProduct } from '../../../redux/Product/type';
import { TopRate } from '../../../components/sections/TopRate/TopRate';
import { getProfile } from '../../../redux/User/action';
import { TAllActionUser } from '../../../redux/User/type';

const ProductScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch =
    useDispatch<
      ThunkDispatch<AppState, any, TAllActionProduct | TAllActionUser>
    >();
  const { isLoading, product, success } = useSelector(
    (state: AppState) => state.product.getProductById,
  );
  const myProfile = useSelector((state: AppState) => state.user.myProfile);
  useEffect(() => {
    dispatch(getProductById(id as string));
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Container direction="column" width="80%" margin="0 auto" overflow="hidden">
      {isLoading || !success ? (
        <SpinnerContainer />
      ) : (
        <>
          <PathNavigate name={product?.name} />
          <ProductOverview {...(product as IProducts)} />
          <Specifications
            data={[
              {
                key: 'Brand',
                value: product?.brand,
              },
              {
                key: 'Brand',
                value: product?.brand,
              },
            ]}
          />
          <Review reviews={product!.reviews || []} />
          <TopRate />
        </>
      )}
    </Container>
  );
};

export default ProductScreen;
