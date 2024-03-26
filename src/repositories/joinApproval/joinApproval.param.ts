import { ClassRoom } from "types/classRoom/classRoom.type";
import { StudentAndTeacher } from "types/member/member.type";

export interface notAllowMemberParam {
  data: StudentAndTeacher[];
}

export interface Student {
  classroom: ClassRoom;
  id: number;
  number: number;
  phone: string;
}

export interface patchJoinMemberIdParam {
  id: string;
}
