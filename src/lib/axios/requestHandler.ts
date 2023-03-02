import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "constants/token/token.constant";
import token from "lib/token";

const requestInterceptor = (config: AxiosRequestConfig) => {
  if (
    token.getToken(ACCESS_TOKEN_KEY) !== undefined &&
    token.getToken(REFRESH_TOKEN_KEY)
  ) {
    config.headers = {
      [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
    };
  } else {
    B1ndToast.showError("토큰이 존재하지 않습니다.");
    window.location.href = "/admin/sign";
  }

  return config;
};

export default requestInterceptor;
