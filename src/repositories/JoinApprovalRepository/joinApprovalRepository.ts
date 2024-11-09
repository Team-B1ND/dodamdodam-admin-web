import { customAxios } from "lib/axios/customAxios";
import { patchJoinMemberIdParam } from "./joinApproval.param";


class JoinApprovalRepository {
  public async patchMemberStatus({ id, activeStatus }: patchJoinMemberIdParam): Promise<void> {
    await customAxios.patch(`/member/status/${id}?status=${activeStatus}`); //멤버 상태 변경
  }

  public async deleteMemberJoinApprovalDeny({ id }: patchJoinMemberIdParam): Promise<void> {
    await customAxios.delete(`/member/${id}`); //회원가입 거절, 지금은 api가 없어서 나중에 수정해야함
  }
}
const joinApprovalRepository = new JoinApprovalRepository();
export default joinApprovalRepository
