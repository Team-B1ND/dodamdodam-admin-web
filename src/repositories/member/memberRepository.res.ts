import { Parent, Student, Teacher } from "../../types/member/member.type";
import { Response } from "../../types/util/util.type";

export interface getMembersResponse extends Response {
  data: {
    parents: Parent[];
    students: Student[];
    teachers: Teacher[];
  };
}
