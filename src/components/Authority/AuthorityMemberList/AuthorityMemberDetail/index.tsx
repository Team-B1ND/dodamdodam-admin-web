import { useGetMemberById } from "quries/member/member.query";
import { useGetPermissionByMemberIdQuery } from "quries/permission/permission.query";
import { Dispatch, SetStateAction, useState } from "react";
import { useParams } from "react-router-dom";
import { Member } from "types/member/member.type";
import {
  AuthorityAddSubButton,
  AuthorityIsExistWrap,
  AuthorityIsNotExistWrap,
  AuthorityItem,
  PermissionDetailContainer,
  PermissionOwnerTitle,
  PermissionSubtitle,
  PermissionSubtitleWrap,
} from "./style";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AuthorityMemberDetail = ({ open }: Props) => {
  const { id } = useParams();

  const { data: memberPermissions } = useGetPermissionByMemberIdQuery({
    memberId: id || "",
  });
  const { data: allAuthorityData } = useGetPermissionByMemberIdQuery({
    memberId: "admin",
  });

  const existedPermissionArray = new Array<string>();

  const { data: memberData } = useGetMemberById({ id: id || "" });

  return (
    <>
      {open && (
        <PermissionDetailContainer>
          <PermissionOwnerTitle>
            <>
              {memberData && memberData.data.name}
              {" 님의 정보"}
            </>
          </PermissionOwnerTitle>
          <PermissionSubtitleWrap>
            <PermissionSubtitle>부여 된 권한</PermissionSubtitle>
            <AuthorityAddSubButton
              isDisabled={
                memberPermissions?.data === undefined ||
                memberPermissions?.data.length < 1
                  ? true
                  : false
              }
            >
              모든 권한 회수
            </AuthorityAddSubButton>
          </PermissionSubtitleWrap>
          <div>
            {memberPermissions?.data === undefined ||
            memberPermissions?.data.length < 1 ? (
              <AuthorityIsNotExistWrap>
                부여 된 권한이 없습니다.
              </AuthorityIsNotExistWrap>
            ) : (
              <AuthorityIsExistWrap>
                {memberPermissions.data.map((permission) => {
                  existedPermissionArray.push(permission.permission);
                  return (
                    <AuthorityItem>
                      {"- "}
                      {permission.permission}
                    </AuthorityItem>
                  );
                })}
              </AuthorityIsExistWrap>
            )}
          </div>
          <PermissionSubtitleWrap>
            <PermissionSubtitle>부여 가능한 권한</PermissionSubtitle>
            <AuthorityAddSubButton isDisabled={false}>
              모든 권한 주기
            </AuthorityAddSubButton>
          </PermissionSubtitleWrap>
          <div>
            <AuthorityIsExistWrap>
              {memberPermissions?.data === undefined ||
              memberPermissions?.data.length < 1
                ? allAuthorityData?.data.map((authority) => {
                    return (
                      <AuthorityItem>{authority.permission}</AuthorityItem>
                    );
                  })
                : allAuthorityData?.data.map((permission) => {
                    if (
                      existedPermissionArray.indexOf(permission.permission) ===
                      -1
                    ) {
                      return (
                        <AuthorityItem>{permission.permission}</AuthorityItem>
                      );
                    }
                    return <></>;
                  })}
            </AuthorityIsExistWrap>
          </div>
        </PermissionDetailContainer>
      )}
    </>
  );
};

export default AuthorityMemberDetail;
