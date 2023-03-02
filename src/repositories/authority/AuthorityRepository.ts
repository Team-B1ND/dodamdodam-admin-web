import { customAxios } from "lib/axios/customAxios";
import { getMyPermissionResponse } from "./authorityRepository.res";

class AuthorityRepository {
  public async getMyPermission(): Promise<getMyPermissionResponse> {
    const { data } = await customAxios.get(`permission/my`);
    return data;
  }
}

export default new AuthorityRepository();
