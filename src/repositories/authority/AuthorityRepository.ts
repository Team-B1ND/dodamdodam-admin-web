import { customAxios } from "lib/axios/customAxios";
import {
  deletePermissionParam,
  getPermissionByMemberParam,
  postAssignPermissionParam,
} from "./authorityRepository.param";
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

  public async postAssignPermission({
    memberId,
    permission,
  }: postAssignPermissionParam): Promise<void> {
    await customAxios.post("/permission/assign", { memberId, permission });
  }

  public async deletePermission({
    memberId,
    permission,
  }: deletePermissionParam): Promise<void> {
    await customAxios.delete(
      `/permission?memberId=${memberId}&permission=${permission}`
    );
  }
}

export default new AuthorityRepository();
