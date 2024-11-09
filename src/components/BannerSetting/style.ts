import styled from "styled-components";

export const BannerTopWrap = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  column-gap: 18px;
`;

export const BannerTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;

  color: #282828;
`;

export const BannerHandelWrap = styled.div`
  width: 480px;
  height: 351px;
  border: 1px solid #d2d2d2;
`;

export const BannerWrapTitle = styled.h3`
  font-weight: 500;
  font-size: 22px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Row = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const BannerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 16px 30px;
    flex-direction: column;
`