import { customAxios } from "lib/axios/customAxios";
import { patchJoinMemberIdParam } from "./joinApproval.param";
import { getNotAllowMemberResponse } from "./joinApproval.res";

class JoinApprovalRepository {
  public async PostMemberJoinApproval({
    id,
  }: patchJoinMemberIdParam): Promise<void> {
    await customAxios.patch(`/member/active/${id}`); //회원가입 승인
  }

  public async PostMemberJoinApprovalDeny({
    id,
  }: patchJoinMemberIdParam): Promise<void> {
    await customAxios.post(`/member/deactivate/${id}`); //회원가입 거절
  }

  public async GetNotJoinApprovalAllowMember(): Promise<getNotAllowMemberResponse> {
    const { data } = await customAxios.get("/member/deactivate"); //회원가입이 승인 되지 않은 회원가입 신청자
    return data;
  }
}

export default new JoinApprovalRepository();
