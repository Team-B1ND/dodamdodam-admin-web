export interface Member {
  email: string;
  id: string;
  readonly joinDate: string;
  name: string;
  profileImage: null | string;
  readonly role: string;
  readonly status: "ACTIVE" | "DEACTIVATED";
}
