import axios from "axios";
import config from "../../config/config.json";
import { postLoginParam } from "./authRepository.param";
import {
  postLoginResponse,
  postRefreshParam,
  postRefreshResponse,
} from "./authRepository.res";
import customAxios from "lib/axios/customAxios";

class AuthRepository {
  public async postLogin({
    id,
    pw,
  }: postLoginParam): Promise<postLoginResponse> {
    const { data } = await axios.post(`${config.TEST_SERVER}/auth/login`, {
      id,
      pw,
    });
    return data;
  }

  public async postSignup() {}

  public async postRefresh({
    refreshToken,
  }: postRefreshParam): Promise<postRefreshResponse> {
    const { data } = await customAxios.post("/auth/reissue", { refreshToken });
    return data;
  }
}

export default new AuthRepository();
