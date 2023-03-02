import { customAxios } from "../../lib/axios/customAxios";
import { deleteMemberParam } from "./memberRepository.param";
import {
  getMembersResponse,
  getMyMemberResponse,
} from "./memberRepository.res";

class MemberRepository {
  public async getMembers(): Promise<getMembersResponse> {
    const { data } = await customAxios.get(`/members`);
    return data;
  }

  public async getMyMember(): Promise<getMyMemberResponse> {
    const { data } = await customAxios.get("/members/my");
    return data;
  }

  public async deleteMember({ id }: deleteMemberParam): Promise<void> {
    await customAxios.delete(`/members/${id}`);
  }
}

export default new MemberRepository();
