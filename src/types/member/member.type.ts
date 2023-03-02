import { ClassRoom } from "../classRoom/classRoom.type";

export interface Member {
  email: string;
  id: string;
  readonly joinDate: string;
  name: string;
  profileImage: null | string;
  readonly role: MemberRole;
  readonly status: "ACTIVE" | "DEACTIVATED";
}

export interface Parent {
  readonly d: number;
  phone: string;
  student: Student;
}

export interface Student {
  classroom: ClassRoom;
  readonly id: number;
  member: Member;
  number: number;
  phone: string;
}

export interface Teacher {
  readonly id: number;
  member: Member;
  phone: string;
  position: string;
  tel: string;
}

export interface Admin {
  classroom: ClassRoom;
  readonly id: number;
  member: Member;
  number: number;
  phone: string;
  position: string;
  tel: string;
}

export type MemberRole = "STUDENT" | "TEACHER" | "ADMIN";
