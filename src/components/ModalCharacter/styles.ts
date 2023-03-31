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
  box-shadow: 0px 0px 18px -4px rgba(0,0,0,0.75);
  width: 600px;
  height: 250px;
  justify-content: space-between;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(2px);
  z-index: 1000;
`;

export const ImgCharacter = styled.img`
  height: 250px;
  width: 180px;
  border-radius: 5px;
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
`;

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
`;

export const Status = styled.div<{ status?: string }>`
  display: flex;
  color: ${colors.white};
  border-radius: 5px;
  width: 85px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  background: ${({ status }) =>
    status === 'Alive' ? colors.green :
      status === 'Dead' ? colors.red :
        colors.orange};
`;