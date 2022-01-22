import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Container, SpinnerContainer } from '../../../components';
import { FeaturedCategories } from '../../../components/sections/FeaturedCategories/FeaturedCategories';
import { FeaturedProduct } from '../../../components/sections/FeaturedProducts/FeaturedProducts';
import { TopRate } from '../../../components/sections/TopRate/TopRate';
import { Slider } from '../../../components/Slider/slider';
import {
  getAlCategory,
  getProducts,
  getTopProducts,
} from '../../../redux/Product/action';
import { TAllActionProduct } from '../../../redux/Product/type';
import { AppState } from '../../../redux/store';

const data = [
  {
    price: 599.99,
    _id: '60df749a5027923750d7972f',
    name: 'iPhone 12 Pro 256GB Memory',
    image: 'https://proshop-ms.herokuapp.com/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
  },
  {
    price: 599.99,
    _id: '60df749a5027923750d7972f',
    name: 'iPhone 10 256GB Memory',
    image: 'https://proshop-ms.herokuapp.com/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
  },
  {
    price: 800.99,
    _id: '60df749a5027923750d7972f',
    name: 'iPhone 20 256GB Memory',
    image: 'https://proshop-ms.herokuapp.com/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
  },
];

const top = Array(3).fill({
  rating: 3.5384615384615383,
  price: 89.99,
  _id: '60df749a5027923750d7972e',
  name: 'Airpods Wireless Bluetooth Headphones',
  image: '/images/airpods.jpg',
  description:
    'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
  discount: 20,
});

const Home: React.FC = () => {
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();
  const topProducts = useSelector(
    (state: AppState) => state.product.topProducts,
  );
  const allCatogory = useSelector(
    (state: AppState) => state.product.allCategory,
  );
  const featcheProduct = useSelector(
    (state: AppState) => state.product.allProducts,
  );

  useEffect(() => {
    dispatch(getTopProducts());
    dispatch(getAlCategory());
    dispatch(getProducts());
  }, [dispatch]);

  console.log('allCatogory', allCatogory.categories);
  console.log('getProducts', featcheProduct.allProduct);

  return (
    <Container width="100%" direction="column">
      {topProducts.isLoading ? (
        <SpinnerContainer />
      ) : (
        <Slider data={topProducts.product} />
      )}
      {allCatogory.isLoading || !featcheProduct.allProduct ? (
        <SpinnerContainer />
      ) : (
        <FeaturedCategories data={featcheProduct.allProduct.products} />
      )}
      {/* <FeaturedCategories /> */}
      {topProducts.isLoading || !featcheProduct.allProduct ? (
        <SpinnerContainer />
      ) : (
        <FeaturedProduct data={featcheProduct.allProduct.products} />
      )}
      <TopRate data={topProducts.product} />
    </Container>
  );
};

export default Home;
