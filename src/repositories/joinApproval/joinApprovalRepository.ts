import { customAxios } from "lib/axios/customAxios";
import { PostJoinMemberId } from "./joinApproval.param";
import { getNotAllowMember } from "./joinApproval.res";

class JoinApprovalRepository {
  public async PostMemberJoinApproval({ id }: PostJoinMemberId): Promise<void> {
    await customAxios.post("auth/allow", { id }); //회원가입 승인
  }

  public async PostMemberJoinApprovalDeny({
    id,
  }: PostJoinMemberId): Promise<void> {
    await customAxios.post("auth/deny", { id }); //회원가입 거절
  }

  public async GetNotJoinApprovalAllowMember(): Promise<getNotAllowMember> {
    const { data } = await customAxios.get("members/not-allowed"); //회원가입이 승인 되지 않은 회원가입 신청자
    return data;
  }
}

export default new JoinApprovalRepository();
