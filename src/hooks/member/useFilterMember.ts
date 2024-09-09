import { useGetMemberByStatus } from "quries/member/member.query";
import { useMemo, useState } from "react";
import { StudentAndTeacher } from "types/member/member.type";

export const useFilterMember = (keyword: string, classification: string) => {
  const { data: serverMembersData } = useGetMemberByStatus({ status: "ACTIVE" });
  const [filteredData, setFilteredData] = useState<StudentAndTeacher[]>([]);

  useMemo(() => {
    if (!serverMembersData) return;

    const filteredMembers = serverMembersData.data.filter((member) => {
      const { name, email, id, student } = member;

      const isStudentWithGrade = student && student.grade === Number(classification.slice(0, 1));

      const commonCondition = name.includes(keyword) || email.includes(keyword) || id.includes(keyword);

      switch (classification) {
        case "전체보기":
          return commonCondition;
        case "선생님":
          return !student && commonCondition;
        default:
          return isStudentWithGrade && commonCondition;
      }
    });

    filteredMembers.sort((a, b) => {
      if (!a.student || !b.student) return 0;

      if (a.student.grade !== b.student.grade) return a.student.grade - b.student.grade;

      if (a.student.room !== b.student.room) return a.student.room - b.student.room;

      return a.student.number - b.student.number;
    });

    setFilteredData(filteredMembers);
  }, [serverMembersData, classification, keyword]);

  return { filteredData };
};
