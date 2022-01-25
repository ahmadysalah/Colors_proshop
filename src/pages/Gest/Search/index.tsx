import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Container, SpinnerContainer, Typography } from '../../../components';
import ComplexCard from '../../../components/Card/productCard';
import { getProducts } from '../../../redux/Product/action';
import { TAllActionProduct } from '../../../redux/Product/type';
import { AppState } from '../../../redux/store';
import { CardsBox } from './style';

const SerachPage = () => {
  const { search } = useLocation();
  const keyword = (
    new URLSearchParams(search).get('keyword')
      ? new URLSearchParams(search).get('keyword')
      : ''
  ) as string;
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();
  const allProducts = useSelector(
    (state: AppState) => state.product.allProducts,
  );
  useEffect(() => {
    dispatch(getProducts(keyword));
  }, [keyword, dispatch]);

  console.log('searchProducts', allProducts.allProduct);

  return allProducts.isLoading ? (
    <SpinnerContainer />
  ) : (
    <div>
      <Typography
        style={{ justifyContent: 'start' }}
        fontSize="32"
        color="#242424"
        fontWeight="700"
      >
        Search Results...
      </Typography>
      <CardsBox>
        {allProducts?.allProduct?.products?.map(x => (
          <ComplexCard {...x} image={x.images[0] || ''} />
        ))}
      </CardsBox>
    </div>
  );
};

export default SerachPage;
