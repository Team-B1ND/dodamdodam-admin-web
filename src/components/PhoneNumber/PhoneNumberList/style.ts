import styled from "styled-components";

export const PhoneNumberProfileImgWrap = styled.div`
  width: 30px;
  height: 30px;

  border-radius: 40%;
  overflow: hidden;
`;

export const PhoneNumberProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PhoneNumberInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;

  &:focus {
    outline: 1px solid #0083f0;
  }
`;
