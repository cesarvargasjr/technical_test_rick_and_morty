import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerHeader = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  padding-top: 5px;
  justify-content: center;
  background-color: ${colors.blueSecondary};
`;

export const ContainerInput = styled.div`
  position: absolute;
  right: 100px;
  height: 80px;
  margin-top: -3px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  height: 100%;
  cursor: pointer;
`;
