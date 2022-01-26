import { Image } from '..';
import Typography from '../Typography';
import { Content, ContentAction, MainCard } from './cardStyles';
import imgs from '../../assets/Images/defaultProduct.png';
import { ICategoryProps } from './interface';

const CategoryCard = ({ img, description }: ICategoryProps) => {
  return (
    <MainCard width="19.7%" height="392px" boxShadow="none">
      <ContentAction
        padding="none"
        margin="none"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
        height="280px"
      >
        <Image src={img} alt="" width="100%" style={{ borderRadius: '16px' }} />
      </ContentAction>
      <Content margin="16px auto">
        <Typography variant="h1" fontFamily="mulish">
          {description}
        </Typography>
      </Content>
    </MainCard>
  );
};

export default CategoryCard;
