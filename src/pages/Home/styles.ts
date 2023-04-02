import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerPage = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  padding: 60px 25px 0 25px;
  background-color: ${colors.darkBlue};
`;

export const Title = styled.h1`
  font-size: 30px;
  line-height: 35px;
  max-height: 35px;
  font-weight: 600;
  width: 100%;
  margin-top: 0;
  margin-bottom: 40px;
  color: ${colors.white};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-rigth: 50px;
`;

export const CountCharacters = styled.p`
  font-size: 21px;
  line-height: 35px;
  font-weight: 600;
  margin-left: 8px;
  color: ${colors.white};
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 30px;
  color: ${colors.white};
`;

export const ContainerContent = styled.div`
  display: flex;
`;

export const ContainerCharacters = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 10px;
  max-width: 1400px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerPagination = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerFilters = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  min-width: 300px;
  margin-right: 40px;


  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  border: 1px solid white;
`;

export const SearchEmptyImage = styled.img`
  height: 200px;
  width: 300px;
`;

export const ContainerSearchEmpty = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 120px;
  justify-content: center;
  align-items: center;
`;

export const DeleteAllFavorites = styled.div`
  font-size: 14px;
  white-space: nowrap;
  position: absolute;
  right: 180px;

  cursor: pointer;

  & span:hover {
    text-decoration: underline;
  }

  & span.confirm {
    margin-right: 50px;
  }
`;