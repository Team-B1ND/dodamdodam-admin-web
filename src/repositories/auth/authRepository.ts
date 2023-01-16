import axios from "axios";
import config from "../../config/config.json";
import { postLoginParam } from "./aurhRepository.param";
import { postLoginResponse } from "./authRepository.res";

class AuthRepository {
  public async postLogin({
    id,
    pw,
  }: postLoginParam): Promise<postLoginResponse> {
    const { data } = await axios.post(`${config.SERVER}/auth/login`, {
      id,
      pw,
    });

    return data;
  }

  public async postSignup() {}
}

export default new AuthRepository();
