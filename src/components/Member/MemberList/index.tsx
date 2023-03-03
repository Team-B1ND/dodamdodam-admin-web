import { useGetMembersQuery } from "../../../quries/member/member.query";
import CTD from "../../Common/CTable/CTD";
import CTR from "../../Common/CTable/CTR";
import DODAM_PROFILE from "../../../assets/defaultProfile/dodamProfile.svg";
import Button from "../../Common/Button";
import { MemberProfileImg, MemberProfileImgWrap } from "./style";
import CTable, { CTableScrollWrapper } from "../../Common/CTable";
import CTBody from "../../Common/CTable/CTBody";
import useDeleteMember from "../../../hooks/member/useDeleteMember";
import { CTDImageWrap } from "components/Common/CTable/CTD/style";
import { Student, Teacher } from "types/member/member.type";

interface Props {
  keyword: string;
  classification: string;
}

const MemberList = ({ keyword, classification }: Props) => {
  const { data: serverMembersData } = useGetMembersQuery({ suspense: true });

  const { onDeleteMember } = useDeleteMember();

  const studentsData = serverMembersData?.data.students.sort(
    (a: Student, b: Student) =>
      a.classroom.grade - b.classroom.grade ||
      a.classroom.room - b.classroom.room ||
      a.number - b.number
  );

  const teachersData = serverMembersData?.data.teachers.sort(
    (a: Teacher, b: Teacher) => b.id - a.id
  );

  return (
    <CTableScrollWrapper customStyle={{ width: "100%", height: 600 }}>
      <CTable customStyle={{ width: "100%" }}>
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
                  <CTR key={student.id}>
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
                    <CTD customStyle={{ width: "19%", textAlign: "left" }}>
                      {student.member.name}
                    </CTD>
                    <CTD customStyle={{ width: "15.5%", textAlign: "left" }}>
                      {student.classroom.grade}학년 {student.classroom.room}반{" "}
                      {student.number}번
                    </CTD>
                    <CTD customStyle={{ width: "17.5%", textAlign: "left" }}>
                      {student.member.id}
                    </CTD>
                    <CTD customStyle={{ width: "27.5%", textAlign: "left" }}>
                      {student.member.email}
                    </CTD>
                    <CTD>
                      <Button
                        type="Primary"
                        onClick={() => onDeleteMember(student.member.id)}
                        title="삭제"
                        customStyle={{ borderRadius: "5px", width: "66px" }}
                      />
                    </CTD>
                  </CTR>
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
                    <CTR key={teacher.id}>
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
                      <CTD customStyle={{ width: "19%", textAlign: "left" }}>
                        {teacher.member.name}
                      </CTD>
                      <CTD customStyle={{ width: "15.5%", textAlign: "left" }}>
                        선생님
                      </CTD>
                      <CTD customStyle={{ width: "17.5%", textAlign: "left" }}>
                        {teacher.member.id}
                      </CTD>
                      <CTD customStyle={{ width: "27.5%", textAlign: "left" }}>
                        {teacher.member.email}
                      </CTD>
                      <CTD>
                        <Button
                          type="Primary"
                          onClick={() => onDeleteMember(teacher.member.id)}
                          title="삭제"
                          customStyle={{ borderRadius: "5px", width: "66px" }}
                        />
                      </CTD>
                    </CTR>
                  );
                })}
          </>
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default MemberList;
