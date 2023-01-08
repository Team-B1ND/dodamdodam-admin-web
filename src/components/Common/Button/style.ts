import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";
import { ButtonType } from "./Button.type";

export const ButtonContainer = styled.button<{ buttonType: ButtonType }>`
  width: 88px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border: 0px;
  cursor: pointer;

  ${({ buttonType }) =>
    buttonType === "Primary" &&
    css`
      background-color: ${palette.sub};
      color: white;
    `}

  ${({ buttonType }) =>
    buttonType === "Cancel" &&
    css`
      background-color: white;
      border: 1px solid black;
      color: black;
    `}
`;
