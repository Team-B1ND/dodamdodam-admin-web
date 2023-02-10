export interface NotAllowMember {
  email: string;
  id: string;
  joinDate: string;
  name: string;
  profileImage: string;
  role: "ADMIN";
  status: "ACTIVE";
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
    number: number;
    phone: string;
  };
}
