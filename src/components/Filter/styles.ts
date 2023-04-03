import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerOption = styled.div<{ stateFilter: string }>`
  display: flex;
  margin-bottom: 10px;
  border-radius: 5px;
  color: ${colors.white};
  border: 1px solid ${colors.white};
  cursor: pointer;

  :hover {
    color: ${colors.blue};
    border-color: ${colors.blue};
  };

  &.active {
    color: ${colors.blue};
    border-color: ${colors.blue};
  }
`;

export const Option = styled.h1`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  padding: 2px 7px;
`;