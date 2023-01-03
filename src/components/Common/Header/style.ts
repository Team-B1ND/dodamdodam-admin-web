import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 76px;
  padding: 16px 32px;
  background-color: #3a3b50;
  display: flex;
  align-items: center;
`;

export const HeaderTitleWrap = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 5px;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  color: white;
`;

export const HeaderSubTitle = styled.span`
  font-size: 14px;
  color: white;
`;

export const HeaderUserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-left: 128px;
`;

export const HeaderUserInfoText = styled.p`
  font-size: 14px;
  color: #8395a7;
`;

export const HeaderUserInfoLogout = styled.button`
  width: 50px;
  height: 16px;
  border: 1px solid black;
  color: #8395a7;
  background-color: #353649;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 0px;
  cursor: pointer;
`;

export const HeaderDGSWLogo = styled.img`
  width: 80px;
  object-fit: scale-down;
  margin-left: auto;
`;
