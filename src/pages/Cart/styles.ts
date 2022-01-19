import styled, { createGlobalStyle } from 'styled-components';
import { Container } from '../../components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const CloseIcon = styled.i`
  position: absolute;
  top: 17px;
  right: 13px;
  color: #242424;
  width: 32px;
  height: 32px;
  &: hover {
    cursor: pointer;
  }
`;

export const OldPrice = styled.div`
  position: absolute;
  top: 68px;
  right: 35px;
  @media only screen and (max-width: 767px) {
    top: unset;
    bottom: 15px;
    right: 10px;
  }
`;

export const ItemTitle = styled.a`
  width: 50%;
  text-decoration: none;
  color: #242424;
  padding-top: 20px;
`;

export const WrapCounter = styled.div`
  background: #fff;
`;

export const CartContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ListContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ItemContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

export const ImgContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const TotalContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`;
