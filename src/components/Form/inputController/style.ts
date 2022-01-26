import styled from 'styled-components';
import { Row } from '../../Row';

export const FiledWrapper = styled('div')<{ marginLeft?: string }>`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40px;
  margin-left: ${props => props.marginLeft || 0};
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Label = styled('label')`
  font-family: normal normal normal 22px/15px Mulish;
  letter-spacing: 0.88px;
  color: #707070;
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
  padding: 0.5em;

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
  isError?: boolean;
  isSuccess?: boolean;
}>`
  border: ${props => (props.isError ? '1px solid red' : '1px solid #707070')};
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
