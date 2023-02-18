import { Member } from "types/member/member.type";
import { Place } from "types/place/place.type";

export interface notAllowMemberParam extends Member {
  student: Student;
}

export interface Student {
  classroom: ClassRoom;
  id: number;
  number: number;
  phone: string;
}

export interface ClassRoom {
  grade: number;
  id: number;
  place: Place;
  room: number;
}

export interface postJoinMemberIdParam {
  id: string;
}
