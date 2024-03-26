import { StudentAndTeacher } from "types/member/member.type";
import { Response } from "../../types/util/util.type";

export interface getNotAllowMemberResponse extends Response {
  data: StudentAndTeacher[];
}
