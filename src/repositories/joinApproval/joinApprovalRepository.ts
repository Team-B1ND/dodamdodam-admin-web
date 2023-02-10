import { customAxios } from "lib/axios/customAxios";
import { getNotAllowMember } from "./joinApproval.res";

class JoinApprovalRepository {
  public async PostJoinApprovalAllow() {
    const { data } = await customAxios.post("auth/allow"); //회원가입 승인
    return data;
  }

  public async PostJoinDeny() {
    const { data } = await customAxios.post("auth/deny");
    return data;
  }

  public async GetNotJoinApprovalAllowMember(): Promise<getNotAllowMember> {
    const { data } = await customAxios.get("members/not-allowed");
    return data;
  }
}

export default new JoinApprovalRepository();
