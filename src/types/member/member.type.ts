export interface Member {
  id: string;
  name: string;
  email: string;
  readonly role: MemberRole;
  readonly status: "ACTIVE" | "DEACTIVATED";
  profileImage: null | string;
  phone: string;
  readonly createdAt: string;
  readonly modifiedAt: string;
}

export interface Parent {
  readonly id: number;
  phone: string;
  student: Student;
}

export interface Student {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
}

export interface Teacher {
  id: number;
  tel: string;
  position: string;
}

export interface Admin {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
}

export interface StudentAndTeacher extends Member {
  student: Student | null;
  teacher: Teacher | null;
}

export type MemberRole = "STUDENT" | "TEACHER" | "ADMIN";
