import { Member } from "../member/member.type";
import { Response } from "../util/util.type";

export interface LoginResponse extends Response {
  data: {
    member: Member;
    refreshToken: string;
    token: string;
  };
}
