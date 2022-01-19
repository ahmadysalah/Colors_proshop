import styled from 'styled-components';

export const ContainerWrapper = styled.div<any>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props =>
    props.direction === 'column' ? 'flex-start' : 'center'};
  width: 100%;
  height: 100%;
  ${props =>
    Object.keys(props)
      .map((key: any) => `${key}: ${props?.[key]};`)
      .join(';')};
`;
