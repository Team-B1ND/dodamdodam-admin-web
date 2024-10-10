import { useGetMemberByStatus } from "quries/member/member.query";
import { useMemo, useState } from "react";
import { activeStatus } from "repositories/JoinApprovalRepository/joinApproval.param";
import { StudentAndTeacher } from "types/member/member.type";

export const useFilterMember = (keyword: string, classification: string, status: activeStatus) => {
  const { data: serverMembersData } = useGetMemberByStatus({ status: status });
  const [filteredData, setFilteredData] = useState<StudentAndTeacher[]>([]);

  useMemo(() => {
    if (!serverMembersData) return;

    const filteredMembers = serverMembersData.data.filter((member) => {
      const { name, email, id, student, status } = member;

      const isStudentWithGrade = student && student.grade === Number(classification.slice(0, 1));

      const commonCondition = name.includes(keyword) || email.includes(keyword) || id.includes(keyword);

      const pendingCondition =
        (status === "PENDING" && name.includes(keyword)) || email.includes(keyword) || id.includes(keyword);

      const deactiveCondition = status === "DEACTIVATED";

      switch (classification) {
        case "전체보기":
          return commonCondition;
        case "선생님":
          return !student && commonCondition;
        case "PENDING":
          return status === "PENDING" && commonCondition;
        case "DEACTIVATED":
          return deactiveCondition;
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
