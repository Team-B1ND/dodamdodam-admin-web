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
    classroom: {
      grade: number;
      id: number;
      place: {
        id: number;
        name: string;
        type: {
          id: number;
          name: string;
        };
      };
      room: number;
    };
    id: number;
    member: {
      email: string;
      id: string;
      joinDate: string;
      name: string;
      profileImage: null | string;
      role: string;
      status: "ACTIVE" | "DEACTIVATED";
    };
    number: number;
    phone: string;
  };
}

export interface Student {
  classroom: {
    grade: number;
    id: number;
    place: {
      id: number;
      name: string;
      type: {
        id: number;
        name: string;
      };
    };
    room: number;
  };
  id: number;
  member: {
    email: string;
    id: string;
    joinDate: string;
    name: string;
    profileImage: null | string;
    role: string;
    status: "ACTIVE" | "DEACTIVATED";
  };
  number: number;
  phone: string;
}

export interface Teacher {
  id: number;
  member: {
    email: string;
    id: string;
    joinDate: string;
    name: string;
    profileImage: string;
    role: string;
    status: "ACTIVE" | "DEACTIVATED";
  };
  phone: string;
  position: string;
  tel: string;
}
