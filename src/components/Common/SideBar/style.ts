import styled from "styled-components";

export const SideBarContainer = styled.div`
  min-width: 208px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  box-sizing: border-box;
  background-color: #e8e8e8;
`;

export const SideBarWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SideBarVersionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 24px;
  margin-bottom: 22px;
  row-gap: 12px;
`;

export const SideBarVersion = styled.span`
  font-size: 12px;
  color: #8c8c8c;
`;

export const SideBarCorpText = styled.p`
  font-size: 12px;
  color: #8c8c8c;
`;
