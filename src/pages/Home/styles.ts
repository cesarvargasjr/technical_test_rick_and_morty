import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerPage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${colors.darkBlue};
  color: ${colors.white};

  padding: 30px;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 30px;
`;