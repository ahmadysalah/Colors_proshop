import styled, { createGlobalStyle } from 'styled-components';
import { Container } from '../../components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const NavLink = styled.a`
  margin-left: 0;
  font-size: 24px;
  color: #242424;
  text-decoration: none;
  &:hover {
    color: rgba(36, 36, 36, 0.7);
  }
`;

export const OutLink = styled(NavLink)`
  padding: 1em;
`;

export const SpanTitle = styled.span`
  margin-left: 0;
  font-size: 24px;
  color: #707070;
`;

export const DataValue = styled.h4`
  margin-left: 0;
  font-size: 24px;
  font-weight: 500;
  color: #000000;
`;

export const ProfileContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    padding: 1em;
  }
`;

export const DashboardContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const DashImgContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

export const InfoContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    margin: 0;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

export const DetailsContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
`;

export const ImageContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;
