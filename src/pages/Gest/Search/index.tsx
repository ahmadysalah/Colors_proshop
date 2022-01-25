import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Container, SpinnerContainer } from '../../../components';
import ComplexCard from '../../../components/Card/productCard';
import { getProducts } from '../../../redux/Product/action';
import { TAllActionProduct } from '../../../redux/Product/type';
import { AppState } from '../../../redux/store';

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
      aaaaaa
      {allProducts?.allProduct?.products?.map(x => (
        <ComplexCard {...x} image={x?.images[0] || ''} />
      ))}
    </div>
  );
};

export default SerachPage;
