import styled from 'styled-components';

type sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

const getImageWidth = (size: sizes) => {
  switch (size) {
    case 'sm':
      return '7em';
    case 'md':
      return '15em';
    case 'lg':
      return '25em';
    case 'xl':
      return '35em';
    case 'xxl':
      return '45em';
    case 'xxxl':
      return '55em';
    default:
      return '100em';
  }
};

const getImageHeight = (size: sizes) => {
  switch (size) {
    case 'sm':
      return '7.5em';
    case 'md':
      return '17em';
    case 'lg':
      return '20em';
    case 'xl':
      return '35em';
    case 'xxl':
      return '45em';
    case 'xxxl':
      return '55em';
    default:
      return '100em';
  }
};

export const StyledImage = styled('img')<any>`
  width: ${props =>
    props.width || (props?.size && getImageWidth(props.size)) || '100%'};
  height: ${props => props.height || '100%'};
  object-position: center;
  display: block;
  max-width: 100%;
  max-height: ${props =>
    props.maxHeight || (props?.size && getImageHeight(props.size)) || '100%'};
  margin: 0 auto;
  ${props =>
    props.loading === 'eager' &&
    `
  &:not([src]):not([srcset]):not([sizes]) {
    content: "";
    display: block;
    padding-bottom: 100%;
    background-image: url(${props.src});
    background-size: cover;
    background-position: center;
  }
`}
`;
