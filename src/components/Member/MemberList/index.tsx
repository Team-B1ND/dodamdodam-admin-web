import { useGetMembersQuery } from "../../../quries/member/member.query";
import CTD from "../../Common/CTable/CTD";
import CTR from "../../Common/CTable/CTR";
import DEFAULT_PROFILE from "../../../assets/defaultProfile/defaultProfile.svg";
import DODAM_PROFILE from "../../../assets/defaultProfile/dodamProfile.svg";
import Button from "../../Common/Button";
import { MemberProfileImg } from "./style";
import CTable, { CTableScrollWrapper } from "../../Common/CTable";
import CTBody from "../../Common/CTable/CTBody";
import useDeleteMember from "../../../hooks/member/useDeleteMember";

interface Props {
  classification: string;
}

const MemberList = ({ classification }: Props) => {
  const { data: serverMembersData } = useGetMembersQuery({ suspense: true });

  const { onDeleteMember } = useDeleteMember();

  console.log(serverMembersData?.data);

  const studentsData = serverMembersData?.data.students.sort(
    (a, b) =>
      a.classroom.grade - b.classroom.grade ||
      a.classroom.room - b.classroom.room ||
      a.number - b.number
  );
  const teachersData = serverMembersData?.data.teachers.sort(
    (a, b) => b.id - a.id
  );

  return (
    <CTableScrollWrapper customStyle={{ width: 864, height: 600 }}>
      <CTable>
        <CTBody>
          <>
            {(() => {
              if (classification !== "선생님")
                return classification === "전체보기"
                  ? studentsData?.map((student) => student)
                  : studentsData?.filter(
                      (student) =>
                        student.classroom.grade ===
                        Number(classification.slice(0, 1))
                    );
            })()?.map((student) => {
              return (
                <CTR>
                  <CTD customStyle={{ width: "120px", textAlign: "center" }}>
                    <MemberProfileImg src={DODAM_PROFILE} />
                  </CTD>
                  <CTD>{student.member.name}</CTD>
                  <CTD>
                    {student.classroom.grade}학년 {student.classroom.room}반{" "}
                    {student.number}번
                  </CTD>
                  <CTD>{student.member.id}</CTD>
                  <CTD>{student.member.email}</CTD>
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
            {classification === "전체보기" || classification === "선생님" ? (
              teachersData?.map((teacher) => {
                return (
                  <CTR>
                    <CTD customStyle={{ width: "120px", textAlign: "center" }}>
                      <MemberProfileImg src={DODAM_PROFILE} />
                    </CTD>
                    <CTD>{teacher.member.name}</CTD>
                    <CTD>선생님</CTD>
                    <CTD>{teacher.member.id}</CTD>
                    <CTD>{teacher.member.email}</CTD>
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
              })
            ) : (
              <></>
            )}
          </>
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default MemberList;
