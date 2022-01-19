import styled from 'styled-components';

export const WrapperRemmber = styled('div')`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginText = styled('p')`
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 2.4px;
  color: #242424;
  opacity: 1;
  color: #242424;
  margin-bottom: 16px;
`;
export const LoginSubText = styled('p')`
  font-size: 32px;
  width: 100%;
  letter-spacing: 1.28px;
  color: #70707070;
  margin-bottom: 52px;
`;

export const LeftLogin = styled('div')`
  display: flex;
  flex: 1;
`;
export const RightLogin = styled('div')`
  display: flex;
  flex: 3;
  margin-left: 174px;
  justify-content: center;
`;

export const ImageShape = styled.img`
  height: 729px;
  width: 857px;
  object-fit: cover;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled('div')`
  margin-top: 44px;
  margin-bottom: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const Remmber = styled('p')`
  font-size: 22px;
  letter-spacing: 0.88px;
  color: #707070;
  opacity: 0.7;
  margin-left: 13px;
`;
export const ForgotPassword = styled('a')`
  font-size: 22px;
  letter-spacing: 0.88px;
  color: #242424;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 22px;
  font-family: normal normal 300 22px/15px Mulish;
`;

export const ButtonSuginup = styled('button')`
  width: 220px;
  height: 56px;
  border: 3px solid #fcdd06;
  border-radius: 20px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  letter-spacing: 0.88px;
  color: #242424;
  outline: none;
  margin-top: 161px;
`;
export const ButtonLogin = styled('button')`
  width: 100%;
  min-height: 56px;
  border: 3px solid ${props => props.theme?.primary?.lightYallow};
  border-radius: 20px;
  opacity: 1;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  letter-spacing: 0.88px;
  color: #242424;
  outline: none;
  margin-top: 30px;
  background: #fcdd06 0% 0% no-repeat padding-box;
  border-radius: 6px;
`;
