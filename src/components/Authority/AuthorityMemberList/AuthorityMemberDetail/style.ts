import { isDisabled } from "@testing-library/user-event/dist/utils";
import styled, { css } from "styled-components";
import { palette } from "styles/palette";

export const PermissionDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 75px;
  gap: 5px;
`;

export const PermissionOwnerTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
`;

export const PermissionSubtitleWrap = styled.div`
  padding: 7px 5px;
  border-top: 2px solid ${palette.gray[400]};
  border-bottom: 2px solid ${palette.gray[400]};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  font-size: 12px;
`;

export const PermissionSubtitle = styled.div`
  font-weight: 600;
  font-size: 13px;
`;

export const AuthorityAddSubButton = styled.div<{ isDisabled: boolean }>`
  padding: 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  ${({ isDisabled }) =>
    isDisabled
      ? css`
          background-color: ${palette.gray[200]};
          pointer-events: none;
        `
      : css`
          background-color: ${palette.main};
        `}
`;

export const MemberAuthroityListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MemberAuthorityListItem = styled.div`
  display: flex;
`;

export const AuthorityIsNotExistWrap = styled.div`
  display: flex;
  width: 300px;
  height: 80px;
  justify-content: center;
  align-items: center;
  color: ${palette.gray[300]};
  font-size: 12px;
`;

export const AuthorityIsExistWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px;
  padding: 10px;
  font-size: 13px;
`;

export const AuthorityItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
