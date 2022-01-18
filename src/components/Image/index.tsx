import React from 'react';
import Img from './styles';

export interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: string;
  height?: string;
  fit?: string;
  loading?: 'eager' | 'lazy' | undefined;
  variant?: 'circle' | 'square';
  border?: boolean;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

const Image = (props: IProps) => {
  return <Img {...props} />;
};

Image.defaultProps = {
  width: '100%',
  height: '100%',
  objectFit: 'fill',
  loading: 'lazy',
  variant: 'square',
  border: false,
};

export default Image;
