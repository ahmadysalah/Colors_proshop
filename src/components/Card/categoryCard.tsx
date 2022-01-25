import Typography from '../Typography';
import { Content, ContentAction, MainCard } from './cardStyles';
import { ICategoryProps } from './interface';

const CategoryCard = ({ img, description }: ICategoryProps) => {
  return (
    <MainCard width="19.7%" height="392px" boxShadow="none">
      <ContentAction
        padding="none"
        margin="none"
        borderRadius="16px"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
      >
        <img src={img} alt="" width="100%" style={{ borderRadius: '16px' }} />
      </ContentAction>
      <Content margin="16px auto">
        <Typography variant="h1">{description}</Typography>
      </Content>
    </MainCard>
  );
};

export default CategoryCard;
