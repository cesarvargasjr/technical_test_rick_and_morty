import styled from "styled-components";
import colors from "../../../styles/colors";

export const ContainerInput = styled.div`
  .input {
    display: flex;
    border-radius: 5px;
    height: 32px;
    width: 280px;
    padding-left: 10px;
    border: 0px;
    font-size: 14px;
    font-weight: 600;
    color: ${colors.white};
    background: rgba(255, 255, 255, 0.09);
  }
`;

export const IconLupa = styled.img`
  height: 18px;
  margin-right: 5px;
`;