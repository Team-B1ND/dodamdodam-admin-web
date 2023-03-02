import { Member } from "types/member/member.type";
import { ClassRoom } from "types/classRoom/classRoom.type";

export interface Permission {
  id: number;
  member: Member & {
    student: StudentForPermission;
  };
  permission: string;
}

export interface StudentForPermission {
  classroom: ClassRoom;
  readonly id: number;
  number: number;
  phone: string;
}
