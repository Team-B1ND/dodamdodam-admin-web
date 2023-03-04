import ErrorBoundary from "components/Common/ErrorBoundary";
import { useGetMemberById } from "quries/member/member.query";
import { useGetPermissionByMemberIdQuery } from "quries/permission/permission.query";
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getPermissionResponse } from "repositories/authority/authorityRepository.res";
import { Member, Student, Teacher } from "types/member/member.type";
import { Permission } from "types/permission/permission.type";
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

  const [selectedMember, setSelectedMember] = useState<Member>();

  const { data: memberPermissions } = useGetPermissionByMemberIdQuery({
    memberId: id || "",
  });
  const { data: allAuthorityData } = useGetPermissionByMemberIdQuery({
    memberId: "admin",
  });
  const [flag, setFlag] = useState(0);
  const [permissionArray, setPermissionArray] = useState<Array<Permission>>([]);

  const { data: memberData } = useGetMemberById({ id: id || "" });

  return (
    <>
      {open && (
        <PermissionDetailContainer>
          <PermissionOwnerTitle>
            <>
              {/* {(teacherData || studentData) &&
                (memberType === "student"
                  ? studentData?.data.name
                  : teacherData?.data.name)}
              {teacherData != undefined && teacherData.data.name} */}
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
              {/* {memberPermissions?.data === undefined || memberPermissions.data.length <1
             ? allAuthorityData?.data.map(
              (authority)=> {
              return <AuthorityItem>{authority.permission}</AuthorityItem>;
            })  : allAuthorityData.data.filter((authority)=>{
              return authority.id !== memberPermissions.data.map((memberAuthority)=>{
                return memberAuthority.id
              }).map((validAuthority)=>
              return <AuthorityItem>{validAuthority.permission}</AuthorityItem>)
            })} */}
              <ErrorBoundary fallback={<>로딩중...</>}>
                <Suspense fallback={<>에러발생...</>}>
                  {memberPermissions?.data === undefined ||
                  memberPermissions.data.length < 1
                    ? allAuthorityData?.data.map((authority) => {
                        return (
                          <AuthorityItem>{authority.permission}</AuthorityItem>
                        );
                      })
                    : (() => {
                        allAuthorityData?.data.forEach((allAuthority) => {
                          setFlag(0);
                          memberPermissions.data.forEach((memberAuthority) => {
                            if (memberAuthority.id === allAuthority.id) {
                              setFlag(1);
                            }
                          });
                          if (flag === 1) {
                            setPermissionArray([
                              ...permissionArray,
                              allAuthority,
                            ]);
                          }
                        });
                        return permissionArray;
                      })().map((validAuthority) => {
                        return (
                          <AuthorityItem>
                            {"- "}
                            {validAuthority.permission}
                          </AuthorityItem>
                        );
                      })}
                </Suspense>
              </ErrorBoundary>
            </AuthorityIsExistWrap>
          </div>
        </PermissionDetailContainer>
      )}
    </>
  );
};

export default AuthorityMemberDetail;
