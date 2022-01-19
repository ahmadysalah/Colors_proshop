import styled from 'styled-components';
import { Row } from '../../Row';

export const FiledWrapper = styled('div')`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40px;
`;

export const Label = styled('label')`
  font-family: normal normal normal 22px/15px Mulish;
  letter-spacing: 0.88px;
  color: #242424;
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
`;

interface IInput {
  isError?: boolean;
  isSuccess?: boolean;
}
export const Input = styled('input')<IInput>`
  width: 100% !important;
  height: 100%;
  border: none;
  background: transparent;

  /* border: ${props =>
    props.isError ? '1px solid red' : '1px solid green'}; */
  /* border-radius: 6px; */
  border-left: none;
  /* border-top-left-radius: 0; */
  border-bottom-left-radius: 0;
  background: transparent;
  ::placeholder {
    padding-left: 5px;
    outline: none;
    background: transparent;
  }
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    outline: none;
    background: transparent;
  }

  &:focus:not(:disabled) {
    outline: none;
    border-left: none;
    background: transparent;
  }
`;

export const InputWrapper = styled('div')<{
  isError: boolean;
  isSuccess?: boolean;
}>`
  border: ${props => (props.isError ? '1px solid red' : '1px solid #242424')};
  border-radius: 6px;
  width: 100%;
  display: flex;
  min-height: 40px;
`;

export const WrapperIcon = styled(Row)`
  padding: 10px;
  width: 40px;
  height: auto;
`;

InputWrapper.defaultProps = {
  isError: false,
};

export const ErrorWrapper = styled(Row)``;