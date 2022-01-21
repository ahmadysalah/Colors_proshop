import { StyledImage } from './style';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: string;
  height?: string;
  fit?: string;
  loading?: 'eager' | 'lazy' | undefined;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  variant?: 'circle' | 'square';
  border?: boolean;
  responsive?: boolean;
}

const Image: React.FC<IProps> = props => <StyledImage {...props} />;

export default Image;
