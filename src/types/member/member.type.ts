import { ClassRoom } from "../classRoom/classRoom.type";

export interface Member {
  email: string;
  id: string;
  readonly joinDate: string;
  name: string;
  profileImage: null | string;
  readonly role: string;
  readonly status: "ACTIVE" | "DEACTIVATED";
}

export interface Parent {
  id: number;
  phone: string;
  student: {
    classroom: ClassRoom;
    id: number;
    member: Member;
    number: number;
    phone: string;
  };
}

export interface Student {
  classroom: ClassRoom;
  id: number;
  member: Member;
  number: number;
  phone: string;
}

export interface Teacher {
  id: number;
  member: Member;
  phone: string;
  position: string;
  tel: string;
}
