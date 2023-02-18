export interface notAllowMemberParam {
  email: string;
  id: string;
  joinDate: string;
  name: string;
  profileImage: string;
  role: "ADMIN";
  status: "ACTIVE";
  student: student;
}

export interface student {
  classroom: studentClassroom;
  id: number;
  number: number;
  phone: string;
}

export interface studentClassroom {
  grade: number;
  id: number;
  place: place;
  room: number;
}

export interface place {
  id: number;
  name: string;
  type: idAndName;
}

export interface idAndName {
  id: number;
  name: string;
}

export interface postJoinMemberIdParam {
  id: string;
}
