import styled from "styled-components";

export const BannerItemWrap = styled.div`
  width: 688px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 10px 0 10px 0;
  border-bottom: 1px solid #ddd;
`;

export const BannerItemText = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #282828;
`;

export const BannerItemImg = styled.img`
  width: 300px;
  height: 42.93px;
  object-fit: cover;
  cursor: pointer;
`;

export const BannerItemFirstBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 120px;
  height: 100%;
`;

export const DeleteButton = styled.button`
  background-color: #2196f3;
  width: 57px;
  height: 30px;
  color: #fff;

  outline: none;
  border: none;
  border-radius: 7px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
