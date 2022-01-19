import ProductOverview from './Sections/ProductOverview';
import Specifications from './Sections/Specifications';
import Review from './Sections/Review';

const ProductScreen: React.FC = () => {
  return (
    <>
      <ProductOverview />
      <Specifications />
      <Review />
    </>
  );
};

export default ProductScreen;
