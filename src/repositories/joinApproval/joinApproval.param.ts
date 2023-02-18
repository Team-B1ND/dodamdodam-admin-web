import { ClassRoom } from "types/classRoom/classRoom.type";
import { Member } from "types/member/member.type";

export interface notAllowMemberParam extends Member {
  student: Student;
}

export interface Student {
  classroom: ClassRoom;
  id: number;
  number: number;
  phone: string;
}

export interface postJoinMemberIdParam {
  id: string;
}
