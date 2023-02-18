import { customAxios } from "lib/axios/customAxios";
import { postJoinMemberId } from "./joinApproval.param";
import { getNotAllowMemberResponse } from "./joinApproval.res";

class JoinApprovalRepository {
  public async PostMemberJoinApproval({ id }: postJoinMemberId): Promise<void> {
    await customAxios.post("auth/allow", { id }); //회원가입 승인
  }

  public async PostMemberJoinApprovalDeny({
    id,
  }: postJoinMemberId): Promise<void> {
    await customAxios.post("auth/deny", { id }); //회원가입 거절
  }

  public async GetNotJoinApprovalAllowMember(): Promise<getNotAllowMemberResponse> {
    const { data } = await customAxios.get("members/not-allowed"); //회원가입이 승인 되지 않은 회원가입 신청자
    return data;
  }
}

export default new JoinApprovalRepository();
