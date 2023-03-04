import { StudentForPermission } from "types/permission/permission.type";
import {
  Admin,
  Member,
  Parent,
  Student,
  Teacher,
} from "../../types/member/member.type";
import { Response } from "../../types/util/util.type";

export interface getMembersResponse extends Response {
  data: {
    parents: Parent[];
    students: Student[];
    teachers: Teacher[];
  };
}

export interface getMyMemberResponse extends Response {
  data: Admin;
}

export interface getMemberByIdResponse extends Response {
  data: Member;
}

export interface getTeacherByIdResponse extends Response {
  data: Member;
}
