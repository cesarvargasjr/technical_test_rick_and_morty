import styled from "styled-components";
import colors from "../../styles/colors";

export const ContainerHeader = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  padding-top: 5px;
  align-items: center;
  background-color: ${colors.blueSecondary};
  position: relative;
`;

export const ContainerInput = styled.div`
  position: absolute;
  right: 180px;
  height: 80px;
  margin-top: -3px;
  display: flex;
  align-items: center;

  @media (max-width: 1230px) {
    bottom: -71px;
    left: 34px;
    width: 84%;
  }
`;

export const Image = styled.img`
  height: 100%;
  cursor: pointer;
  margin-left: 170px;
  margin-right: 100px;


  @media(max-width: 1230px) {
    position: absolute;
    right: 80px;
    top: 0;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

export const Option = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: ${colors.white};
  cursor: pointer;
  margin-right: 40px;
  margin-left: 20px;

  &.active {
    color: ${colors.blue}
  }

  &.menu-filtros {
    display: none;
    margin-left: 40px;
  }

  @media (max-width: 1230px) {
    &.menu-filtros {
      display: unset;
    }
  }

  @media(max-width: 768px) {
    font-size: 1.1rem;
    margin-right: 28px;
  }
`;