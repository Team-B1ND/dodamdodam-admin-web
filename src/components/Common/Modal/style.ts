import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 50%;
  top: 0px;
  left: 0px;
  position: absolute;
`;

export const ModalContainer = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  position: absolute;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 19px;
  position: relative;
`;

export const ModalCloseIcon = styled.div`
  width: 24px;
  height: 24px;
  font-size: 24px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 19px;
  right: 19px;
  cursor: pointer;
`;
