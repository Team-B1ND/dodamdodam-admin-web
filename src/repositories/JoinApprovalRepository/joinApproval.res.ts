import { StudentAndTeacher } from "types/member/member.type";
import { Response } from "../../types/util/Response.type";

export interface getNotAllowMemberResponse extends Response {
  data: StudentAndTeacher[];
}
