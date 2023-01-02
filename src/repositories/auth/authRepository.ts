import axios from "axios";
import config from "../../config/config.json";
import { LoginResponse } from "../../types/auth/auth.type";
import { postLoginParam } from "./aurhRepository.param";

class AuthRepository {
  public async postLogin({ id, pw }: postLoginParam): Promise<LoginResponse> {
    const { data } = await axios.post(`${config.SERVER}/auth/login`, {
      id,
      pw,
    });

    return data;
  }

  public async postSignup() {}
}

export default new AuthRepository();
