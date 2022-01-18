import styled from 'styled-components';
import { IProps } from './index';

const Img = styled.img<IProps>(
  ({ width, height, variant, border = false, objectFit, ...props }) => ({
    width: `${width}`,
    height: `${height}`,
    borderRadius: `${variant === 'circle' ? '50%' : '0'}`,
    border: `${border === true ? '3px solid #FCDD06' : '0'}`,
    objectFit: `${objectFit || 'fill'}`,
  }),
);

export default Img;
