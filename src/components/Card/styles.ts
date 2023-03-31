import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerCard = styled.div`
  display: flex;
  height: 240px;
  width: 150px;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  margin-bottom: 70px;
`;

export const Name = styled.h2`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const Location = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const Image = styled.img`
  min-height: 200px;
  width: 100%;
  border-radius: 5px;
  transition: transform 1s ease;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;