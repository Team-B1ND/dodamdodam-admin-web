import { customAxios } from "lib/axios/customAxios";
import {
  postRefreshParam,
  postRefreshResponse,
  TokenRepository,
} from "./TokenRepository";

class TokenRepositoryImpl implements TokenRepository {
  public async postRefresh({
    refreshToken,
  }: postRefreshParam): Promise<postRefreshResponse> {
    const { data } = await customAxios.post("/token/refresh", { refreshToken });
    return data;
  }
}

export default new TokenRepositoryImpl();
