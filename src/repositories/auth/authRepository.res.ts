import { Member } from "../../types/member/member.type";
import { Response } from "../../types/util/util.type";

export interface postLoginResponse extends Response {
  data: {
    member: Member;
  };
  refreshToken: string;
  accessToken: string;
}

export interface postRefreshParam {
  refreshToken: string;
}

export interface postRefreshResponse extends Response {
  data: string;
}
