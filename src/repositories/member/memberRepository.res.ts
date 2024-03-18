import {
  Member,
  Parent,
  Student,
  StudentAndTeacher,
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

export interface getAllMembersResponse extends Response {
  data: StudentAndTeacher[];
}

export interface getMyMemberResponse extends Response {
  data: StudentAndTeacher;
}

export interface getMemberByIdResponse extends Response {
  data: Member;
}

export interface getBroadcastClubMemberByIdResponse extends Response {
  data: boolean;
}
