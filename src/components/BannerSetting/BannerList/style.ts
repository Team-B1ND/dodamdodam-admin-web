import styled from "styled-components";

export const BannerListWrap = styled.div`
  width: 700px;
  height: 680px;

  padding: 15px 30px;

  border: 1px solid #d2d2d2;
  background-color: ${({ theme }) => theme.backgroundColor3};
`;

export const BannerItemsContainer = styled.div`
  width: 100%;
  height: calc(100% - 8px);
  overflow-y: auto;
`;
