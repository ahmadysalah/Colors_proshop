import { Image } from '..';
import Typography from '../Typography';
import { Content, ContentAction, MainCard } from './cardStyles';
import { ICategoryProps } from './interface';

const CategoryCard = ({ img, description }: ICategoryProps) => {
  return (
    <MainCard width="80%" height="392px" boxShadow="none">
      <Image
        box-Shadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
        height="280px"
        src={img}
        size="lg"
        width="90%"
        variant="square"
      />
      <Content margin="16px auto">
        <Typography variant="h1" fontFamily="mulish">
          {description}
        </Typography>
      </Content>
    </MainCard>
  );
};

export default CategoryCard;
