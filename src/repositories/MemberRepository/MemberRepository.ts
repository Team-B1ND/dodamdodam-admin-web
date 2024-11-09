import { customAxios } from "../../lib/axios/customAxios";
import { getMebmerByStatus, getMemberByIdParam } from "./memberRepository.param";
import { getAllMembersResponse, getMyMemberResponse, getBroadcastClubMemberByIdResponse } from "./memberRepository.res";

class MemberRepository {
  public async getMembers({ status }: getMebmerByStatus): Promise<getAllMembersResponse> {
    const { data } = await customAxios.get(`/member/status?status=${status}`);
    return data;
  }

  public async getMyMember(): Promise<getMyMemberResponse> {
    const { data } = await customAxios.get("/member/my");
    return data;
  }

  public async getMemberById({ id }: getMemberByIdParam): Promise<getMyMemberResponse> {
    const { data } = await customAxios.get(`/member/${id}`);
    return data;
  }

  public async getBroadcastClubMemberById({ id }: getMemberByIdParam): Promise<getBroadcastClubMemberByIdResponse> {
    const { data } = await customAxios.get(`/member/check/broadcast-club-member/${id}`);
    return data;
  }

  public async grantBroadcastClubMember({ id }: getMemberByIdParam): Promise<void> {
    await customAxios.post("/member/broadcast-club-member", { id });
  }
}
const memberRepository = new MemberRepository();
export default memberRepository;
