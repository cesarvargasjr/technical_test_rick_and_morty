import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 100%;
  padding: 25px;
  background-color: ${colors.darkBlue};
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${colors.white};
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 80px 50px;
  height: 100%;
  min-width: 90%;
  max-width: 90%;
`;

export const ContainerFilters = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 800px;
  margin-right: 50px;
`;