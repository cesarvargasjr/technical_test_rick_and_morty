import styled from "styled-components";
import colors from "../../styles/colors";

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 5px;
  background-color: ${colors.white};
  box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.75);
  width: 600px;
  height: 250px;
  justify-content: space-between;
  background-color: ${colors.greyLight};

  @media (max-width: 714px) {
    flex-direction: column;
    width: 66%;
    height: auto;
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  position: fixed;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  z-index: 1000;
`;

export const ImgCharacter = styled.img`
  height: 250px;
  width: 180px;
  border-radius: 5px;

  @media (max-width: 714px) {
    height: 280px;
    width: 263px;
    margin-bottom: 40px;
  }
`;

export const Like = styled.img`
  height: 30px;
  width: 34px;
  transition: transform 0.5s ease;
  cursor: pointer;
  margin-left: 20px;
  position: absolute;

  :hover {
    transform: scale(1.3);
  }
`;

export const Close = styled.img`
  height: 30px;
  width: 30px;
  transition: transform 0.5s ease;
  cursor: pointer;

  position: absolute;
  top: 9px;
  right: 10px;

  :hover {
    transform: scale(1.3);
  }
`;

export const Title = styled.h2`
  font-size: 21px;
  font-weight: 700;
  margin: 0;
`;

export const SubtitleInfo = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-right: 6px;
`;

export const ItemInfo = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  @media (max-width: 714px) {
    margin: 0;
  }
`;

export const ContainerOptions = styled.div``;

export const ContainerInLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const ContainerInLineTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: -25px;
  margin-bottom: 10px;
`;

export const Status = styled.div<{ status?: string }>`
  display: flex;
  position: relative;
  right: 230px;
  top: 5px;
  color: ${colors.white};
  border-radius: 5px;
  padding: 0 6px;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  background: ${({ status }) =>
    status === "Alive"
      ? colors.green
      : status === "Dead"
        ? colors.red
        : colors.orange};

  @media (max-width: 714px) {
    right: ${({ status }) =>
    status === "Alive" ? "256px" : status === "Dead" ? "256px" : "217px"};
    top: 52px;
    margin: 0px;
    position: absolute;
  }
`;
