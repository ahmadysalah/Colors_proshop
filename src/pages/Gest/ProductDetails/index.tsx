import ProductOverview from './Sections/ProductOverview';
import Specifications from './Sections/Specifications';
import Review from './Sections/Review';
import { Container, PathNavigate } from '../../../components';

const ProductScreen: React.FC = () => {
  return (
    <Container direction="column" width="80%" margin="0 auto" overflow="hidden">
      <PathNavigate name="IPHONE" />
      <ProductOverview />
      <Specifications />
      <Review />
    </Container>
  );
};

export default ProductScreen;
