import Typography from '../Typography';
import { Content, ContentAction, MainCard } from './cardStyles';
import { ICategoryProps } from './interface';

const CategoryCard = ({ img, description }: ICategoryProps) => {
  return (
    <MainCard width="380px" height="392px" boxShadow="none">
      <ContentAction
        padding="none"
        margin="none"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
      >
        <img src={img} alt="" />
      </ContentAction>
      <Content margin="16px auto">
        <Typography variant="h1">{description}</Typography>
      </Content>
    </MainCard>
  );
};

export default CategoryCard;
