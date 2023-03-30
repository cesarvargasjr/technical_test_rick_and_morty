import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerCard = styled.div`
  display: flex;
  height: 280px;
  width: 150px;
  border-radius: 5px;
  flex-direction: column;
`;

export const Name = styled.h2`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
`;

export const Location = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const Image = styled.img`
  min-height: 200px;
  width: 100%;
  border-radius: 5px;
  resize: contain;

  @media (max-width: 590px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 380px) {
    height: 60px;
    width: 60px;
  }
`;