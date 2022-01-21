import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../Button/ButtonStyle';
import { FlexBox, Row, Column } from '../Row';
import { ContainerWrapper } from '../Container/style';
import { Typography } from '..';
import { IPropTypography } from '../Typography/interface';

export const SectionSlider = styled(FlexBox)`
  background: #f2f2f2;
  height: 678px;
`;

export const SliderSection = styled(ContainerWrapper)`
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ShopeButton = styled(Button)`
  background: #fcdd06 0% 0% no-repeat padding-box;
  border-radius: 20px;
  color: #242424;
  height: 56px;
  letter-spacing: 0.88px;
  opacity: 1;
  outline: none;
  text-transform: uppercase;
  width: 220px;
`;
export const PriceText = styled<any>(Typography)`
  color: #242424;
  font-size: 2rem;
  margin-bottom: 10px;
  letter-spacing: 1.28px;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 5px;
    letter-spacing: 1px;
  }
`;

export const DescriptionText = styled(PriceText)`
  color: #242424;
  font-size: 32px;
  margin-bottom: 42px;
`;

export const NameText = styled(PriceText)`
  color: #242424;
  font-size: 3.75rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ImageSlider = styled('img')`
  width: 100%;
  height: 90%;
  object-fit: cover;
  margin-top: 30px;
`;

export const ButtonHero = styled(Link)`
  color: #242424;
  background: #fcdd06;
  font-size: 22px;
  height: 56px;
  outline: none;
  margin-top: 42px;
  border-radius: 20px;
  opacity: 1;
  text-transform: uppercase;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  letter-spacing: 1.28px;
  font-family: normal normal 300 32px/15px Muli;
  max-width: 220px;
`;

export const WrapperImageHero = styled(Column)`
  max-width: 627px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 920px) {
    display: none;
  }
`;

interface IDot {
  isGrey: boolean;
  width?: string;
}

export const Dot = styled('div')<IDot>`
  background: ${props => (props.isGrey ? '#70707030' : '#FCDD06 ')};
  border-radius: 50%;
  width: ${props => props.width};
  height: ${props => props.width};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

export const CategDots = styled(Dot)`
  @media (max-width: 1200px) {
    display: none;
  }
`;

interface IArrow {
  isLeft?: boolean;
  color?: string;
}
// width="auto" JC="center" item="center" style={{marginBottom:"32px"}}

export const RowArrowWrapper = styled(Row)`
  width: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const Arrow = styled('div')<IArrow>`
  font-size: 35px;
  font-weight: bold;
  font-weight: 700;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  ${props =>
    props.isLeft &&
    css`
      transform: rotate(0.5turn);
    `}
`;
