import styled from "styled-components";
import colors from "../../styles/colors";

export const ContainerPage = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  padding: 60px 25px 0 25px;
  background-color: ${colors.darkBlue};

  @media (max-width: 1230px) {
    &.open .overlay {
      content: "";
      height: 100vh;
      width: 100vw;
      position: fixed;
      background: #0a0a0ad4;
      top: 0;
      right: 0;
      z-index: 0;
    }

    &.open .container-filters {
      translate: 0px !important;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 30px;
  max-height: 30px;
  font-weight: 600;
  width: 100%;
  margin-top: 0;
  margin-bottom: 40px;
  color: ${colors.white};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 50px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 20px;
  }
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
  max-width: 280px;
  flex-direction: column;
  margin-right: 40px;
  padding: 0 20px;

  @media (max-width: 1230px) {
    position: fixed;
    background: rgb(10, 19, 37);
    height: 100%;
    left: 0;
    top: 0px;
    padding-top: 21px;
    translate: -100%;
    transition: translate 0.4s ease-in-out;
    z-index: 2;
  }
`;

export const TitleFilter = styled.h1`
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
  width: 100%;
  color: ${colors.white};
  width: 100%;
  display: flex;
  margin: 0;
  justify-content: space-between;

  & .menu-close {
    font-weight: 200;
    display: none;
  }

  @media (max-width: 1230px) {
    & .menu-close {
      display: block;
    }
  }
`;

export const SubtitleFilter = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  color: ${colors.white};
`;

export const ConatinerSubtitleFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
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

  @media (max-width: 768px) {
    bottom: -31px;
    right: -31px;
    font-size: 11px;
  }
`;
