import { customAxios } from "lib/axios/customAxios";
import { getPermissionByMemberParam } from "./authorityRepository.param";
import { getPermissionResponse } from "./authorityRepository.res";

class AuthorityRepository {
  public async getMyPermission(): Promise<getPermissionResponse> {
    const { data } = await customAxios.get(`permission/my`);
    return data;
  }

  public async getPermissionByMemberId({
    memberId,
  }: getPermissionByMemberParam): Promise<getPermissionResponse> {
    const { data } = await customAxios.get(
      `permission/member?memberId=${memberId}`
    );
    return data;
  }
}

export default new AuthorityRepository();
