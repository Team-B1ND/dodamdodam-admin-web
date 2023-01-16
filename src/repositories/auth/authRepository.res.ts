import { Member } from "../../types/member/member.type";
import { Response } from "../../types/util/util.type";

export interface postLoginResponse extends Response {
  data: {
    member: Member;
    refreshToken: string;
    token: string;
  };
}
