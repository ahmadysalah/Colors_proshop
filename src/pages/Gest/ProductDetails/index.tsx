import ProductOverview from './Sections/ProductOverview';
import Specifications from './Sections/Specifications';
import Review from './Sections/Review';
import { Container } from '../../../components';

const ProductScreen: React.FC = () => {
  return (
    <Container direction="column">
      <ProductOverview />
      <Specifications />
      <Review />
    </Container>
  );
};

export default ProductScreen;
