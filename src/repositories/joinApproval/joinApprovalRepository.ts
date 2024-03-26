import { customAxios } from "lib/axios/customAxios";
import { patchJoinMemberIdParam } from "./joinApproval.param";
import { getNotAllowMemberResponse } from "./joinApproval.res";

class JoinApprovalRepository {
  public async patchMemberJoinApproval({
    id,
  }: patchJoinMemberIdParam): Promise<void> {
    await customAxios.patch(`/member/active/${id}`); //회원가입 승인
  }

  public async deleteMemberJoinApprovalDeny({
    id,
  }: patchJoinMemberIdParam): Promise<void> {
    await customAxios.delete(`/member/${id}`); //회원가입 거절, 지금은 api가 없어서 나중에 수정해야함
  }

  public async patchDeactivateMember({
    id,
  }: patchJoinMemberIdParam): Promise<void> {
    await customAxios.patch(`/member/deactivate/${id}`); //회원가입 비활성화
  }

  public async getNotJoinApprovalAllowMember(): Promise<getNotAllowMemberResponse> {
    const { data } = await customAxios.get("/member/deactivate"); //회원가입이 승인 되지 않은 회원가입 신청자
    return data;
  }
}

export default new JoinApprovalRepository();
