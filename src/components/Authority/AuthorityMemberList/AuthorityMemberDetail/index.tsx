import { useGetMemberById } from "quries/member/member.query";
import { useGetPermissionByMemberIdQuery } from "quries/authority/permission.query";
import { Dispatch, memo, SetStateAction } from "react";
import { useParams } from "react-router-dom";
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
import useAssignPermission from "hooks/authority/useAssignPermission";
import useDeletePermission from "hooks/authority/useDeletePermission";
import useAssignAllPermission from "hooks/authority/useAssignAllPermission";
import useDeleteAllPermission from "hooks/authority/useDeleteAllPermission";

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
  const restedPermissionArray = new Array<string>();

  const { data: memberData } = useGetMemberById({ id: id || "" });

  const { onAssignPermission } = useAssignPermission();
  const { onDeletePermission } = useDeletePermission();
  const { onAssignAllPermission } = useAssignAllPermission();
  const { onDeleteAllPermission } = useDeleteAllPermission();

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
              onClick={() => {
                id &&
                  onDeleteAllPermission({
                    memberId: id,
                  });
              }}
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
                    <AuthorityItem
                      key={permission.id}
                      onClick={() => {
                        id &&
                          onDeletePermission({
                            memberId: id,
                            permission: permission.permission,
                          });
                      }}
                    >
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
            <AuthorityAddSubButton
              isDisabled={
                allAuthorityData !== undefined &&
                memberPermissions !== undefined &&
                memberPermissions?.data.length >= allAuthorityData?.data.length
              }
              onClick={() => {
                id &&
                  onAssignAllPermission({
                    memberId: id,
                  });
              }}
            >
              모든 권한 주기
            </AuthorityAddSubButton>
          </PermissionSubtitleWrap>
          <div>
            <AuthorityIsExistWrap>
              {memberPermissions?.data === undefined ||
              memberPermissions?.data.length < 1
                ? allAuthorityData?.data.map((permission) => {
                    return (
                      <AuthorityItem
                        key={permission.id}
                        onClick={() =>
                          id &&
                          onAssignPermission({
                            memberId: id,
                            permission: permission.permission,
                          })
                        }
                      >
                        {permission.permission}
                      </AuthorityItem>
                    );
                  })
                : allAuthorityData?.data.map((permission) => {
                    if (
                      existedPermissionArray.indexOf(permission.permission) ===
                      -1
                    ) {
                      restedPermissionArray.push(permission.permission);
                      return (
                        <AuthorityItem
                          key={permission.id}
                          onClick={() =>
                            id &&
                            onAssignPermission({
                              memberId: id,
                              permission: permission.permission,
                            })
                          }
                        >
                          {"- "}
                          {permission.permission}
                        </AuthorityItem>
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

export default memo(AuthorityMemberDetail);
