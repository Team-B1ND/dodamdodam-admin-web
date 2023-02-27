import axios from "axios";
import config from "../../config/config.json";
import { customAxios } from "../../lib/axios/customAxios";
import { deleteMemberParam } from "./memberRepository.param";
import { getMembersResponse } from "./memberRepository.res";

class MemberRepository {
  public async getMembers(): Promise<getMembersResponse> {
    const { data } = await customAxios.get(`/members`);
    return data;
  }

  public async deleteMember({ id }: deleteMemberParam): Promise<void> {
    await customAxios.delete(`/members/${id}`);
  }
}

export default new MemberRepository();
