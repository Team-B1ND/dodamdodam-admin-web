import CTable, { CTableScrollWrapper } from "components/Common/CTable";
import CTBody from "components/Common/CTable/CTBody";
import CTD from "components/Common/CTable/CTD";
import { CTDImageWrap } from "components/Common/CTable/CTD/style";
import CTR from "components/Common/CTable/CTR";
import DODAM_PROFILE from "../../../assets/defaultProfile/dodamProfile.svg";
import {
  MemberProfileImg,
  MemberProfileImgWrap,
} from "components/Member/MemberList/style";
import { useGetMembersQuery } from "quries/member/member.query";
import { Student, Teacher } from "types/member/member.type";
import { useNavigate, useParams } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface Props {
  keyword: string;
  classification: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AuthorityMemberList = ({ keyword, classification, setOpen }: Props) => {
  const { data: serverMembersData } = useGetMembersQuery({ suspense: true });

  const studentsData: Student[] | undefined =
    serverMembersData?.data.students.sort(
      (a: Student, b: Student) =>
        a.classroom.grade - b.classroom.grade ||
        a.classroom.room - b.classroom.room ||
        a.number - b.number
    );
  const teachersData: Teacher[] | undefined =
    serverMembersData?.data.teachers.sort(
      (a: Teacher, b: Teacher) => b.id - a.id
    );

  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <CTableScrollWrapper customStyle={{ width: 720, height: 600 }}>
      <CTable>
        <CTBody>
          <>
            {(() => {
              if (classification !== "선생님")
                return classification === "전체보기"
                  ? studentsData?.map((student: Student) => student)
                  : studentsData?.filter(
                      (student: Student) =>
                        student.classroom.grade ===
                        Number(classification.slice(0, 1))
                    );
            })()
              ?.filter((student: Student) => {
                return (
                  student.member.email.indexOf(keyword) > -1 ||
                  student.member.id.indexOf(keyword) > -1 ||
                  student.member.name.indexOf(keyword) > -1
                );
              })
              .map((student: Student) => {
                return (
                  <div
                    style={{ width: 720 }}
                    onClick={() => {
                      navigate(`/authority/${student.member.id}`);
                      setOpen(true);
                    }}
                  >
                    <CTR
                      key={student.id}
                      customStyle={
                        id === student.member.id
                          ? { backgroundColor: "#eeeeee" }
                          : { backgroundColor: "white" }
                      }
                    >
                      <CTD customStyle={{ width: 120 }}>
                        <CTDImageWrap>
                          <MemberProfileImgWrap>
                            <MemberProfileImg
                              src={
                                student.member.profileImage
                                  ? student.member.profileImage
                                  : DODAM_PROFILE
                              }
                            />
                          </MemberProfileImgWrap>
                        </CTDImageWrap>
                      </CTD>
                      <CTD customStyle={{ width: 200 }}>
                        {student.member.name}
                      </CTD>
                      <CTD customStyle={{ width: 150 }}>
                        {student.classroom.grade}학년 {student.classroom.room}반{" "}
                        {student.number}번
                      </CTD>
                      <CTD customStyle={{ width: 250 }}>
                        {student.member.id}
                      </CTD>
                    </CTR>
                  </div>
                );
              })}
            {(classification === "전체보기" || classification === "선생님") &&
              teachersData
                ?.filter((teacher: Teacher) => {
                  return (
                    teacher.member.email.indexOf(keyword) > -1 ||
                    teacher.member.id.indexOf(keyword) > -1 ||
                    teacher.member.name.indexOf(keyword) > -1
                  );
                })
                .map((teacher: Teacher) => {
                  return (
                    <div
                      style={{ width: 720 }}
                      onClick={() => {
                        navigate(`/authority/${teacher.member.id}`);
                        setOpen(true);
                      }}
                    >
                      <CTR
                        key={teacher.id}
                        customStyle={
                          id === teacher.member.id
                            ? { backgroundColor: "#eeeeee" }
                            : { backgroundColor: "white" }
                        }
                      >
                        <CTD customStyle={{ width: 120 }}>
                          <CTDImageWrap>
                            <MemberProfileImgWrap>
                              <MemberProfileImg
                                src={
                                  teacher.member.profileImage
                                    ? teacher.member.profileImage
                                    : DODAM_PROFILE
                                }
                              />
                            </MemberProfileImgWrap>
                          </CTDImageWrap>
                        </CTD>
                        <CTD customStyle={{ width: 200 }}>
                          {teacher.member.name}
                        </CTD>
                        <CTD customStyle={{ width: 150 }}>선생님</CTD>
                        <CTD customStyle={{ width: 250 }}>
                          {teacher.member.id}
                        </CTD>
                      </CTR>
                    </div>
                  );
                })}
          </>
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default AuthorityMemberList;
