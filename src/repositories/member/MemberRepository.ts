import { customAxios } from "../../lib/axios/customAxios";
import {
  deleteMemberParam,
  getMemberByIdParam,
  getTeacherByIdParam,
} from "./memberRepository.param";
import {
  getMemberByIdResponse,
  getMembersResponse,
  getMyMemberResponse,
  getTeacherByIdResponse,
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

  public async getMemberById({
    id,
  }: getMemberByIdParam): Promise<getMemberByIdResponse> {
    const { data } = await customAxios.get(`/members/search/${id}`);
    return data;
  }

  public async getTeacherById({
    id,
  }: getTeacherByIdParam): Promise<getTeacherByIdResponse> {
    const { data } = await customAxios.get(`/members/teacher/${id}`);
    return data;
  }

  public async deleteMember({ id }: deleteMemberParam): Promise<void> {
    await customAxios.delete(`/members/${id}`);
  }
}

export default new MemberRepository();
