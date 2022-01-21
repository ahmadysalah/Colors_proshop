import styled, { createGlobalStyle } from 'styled-components';
import { Container } from '../../components';
import { WarperFileBox } from '../../components/Form/checkBox/style';
import { Input } from '../../components/Form/inputController/style';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const ProductContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 1em;
  }
`;

export const ImagesContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const WarperFile = styled(WarperFileBox)`
  flex-direction: column;
  width: 100%;
  height: 15rem;
  justify-content: flex-start;
  text-align: center;
  padding-top: 1.5em;
`;

export const FormContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    flex-basis: unset;
  }
`;

export const InputsContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Textarea = Input.withComponent('textarea');
