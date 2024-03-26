import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "constants/token/token.constant";
import token from "lib/token";
import { injectCustomAxiosAccessToken } from "./customAxios";
import authRepository from "repositories/auth/authRepository";

const errorResponseInterceptor = async (error: AxiosError) => {
  if (error.response) {
    const {
      response: { status },
    } = error;

    const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
    const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

    if (
      usingAccessToken !== undefined &&
      usingRefreshToken !== undefined &&
      status === 401
    ) {
      try {
        const { data: newAccessToken } = await authRepository.postRefresh({
          refreshToken: usingRefreshToken,
        });

        token.setToken(ACCESS_TOKEN_KEY, newAccessToken);

        injectCustomAxiosAccessToken(newAccessToken);
      } catch (error) {
        B1ndToast.showError("세션이 만료 되었습니다.");
        window.location.href = "/admin/sign";
      }
    }
  }

  return Promise.reject(error);
};

export default errorResponseInterceptor;
