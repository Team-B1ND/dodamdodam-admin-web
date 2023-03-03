import {
  useGetStudentById,
  useGetTeacherById,
} from "quries/member/member.query";
import { useGetPermissionByMemberIdQuery } from "quries/permission/permission.query";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getPermissionResponse } from "repositories/authority/authorityRepository.res";
import { Student, Teacher } from "types/member/member.type";
import { Permission } from "types/permission/permission.type";
import {
  AuthorityAddSubButton,
  PermissionDetailContainer,
  PermissionOwnerTitle,
  PermissionSubtitle,
  PermissionSubtitleWrap,
} from "./style";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  memberType: string;
}

const AuthorityMemberDetail = ({ open, memberType }: Props) => {
  const { id } = useParams();
  const { pathname } = useLocation();
  useEffect(() => {}, [pathname]);

  const { data: member } = useGetPermissionByMemberIdQuery({
    memberId: id || "",
  });

  const { data: studentData } = useGetStudentById({ id: id || "" });

  const { data: teacherData } = useGetTeacherById({ id: id || "" });

  return (
    <>
      {open && (
        <PermissionDetailContainer>
          <PermissionOwnerTitle>
            <>
              {() => {
                console.log(teacherData?.data.name);
              }}
              {memberType === "student"
                ? studentData?.data.name
                : teacherData?.data.name}
              {" 님의 정보"}
            </>
          </PermissionOwnerTitle>
          <PermissionSubtitleWrap>
            <PermissionSubtitle>부여 된 권한</PermissionSubtitle>
            <AuthorityAddSubButton isDisabled={true}>
              모든 권한 회수
            </AuthorityAddSubButton>
          </PermissionSubtitleWrap>
          <PermissionSubtitleWrap>
            <PermissionSubtitle>부여 가능한 권한</PermissionSubtitle>
            <AuthorityAddSubButton isDisabled={false}>
              모든 권한 주기
            </AuthorityAddSubButton>
          </PermissionSubtitleWrap>
        </PermissionDetailContainer>
      )}
    </>
  );
};

export default AuthorityMemberDetail;
