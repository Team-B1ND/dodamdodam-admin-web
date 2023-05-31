import axios from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import token from "../token";
import errorResponseInterceptor from "./errorResponseInterceptor";
import requestInterceptor from "./requestHandler";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

customAxios.interceptors.request.use(requestInterceptor);
customAxios.interceptors.response.use((req) => req, errorResponseInterceptor);

export const injectCustomAxiosAccessToken = (token: string) => {
  customAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = token;
};

// // 요청 인터셉터 추가
// customAxios.interceptors.request.use((config) => {
//   const accessToken = token.getToken(ACCESS_TOKEN_KEY);
//   if (accessToken) {
//     config.headers[REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// // 응답 인터셉터 추가
// customAxios.interceptors.response.use(
//   (response) => response,
//   errorResponseInterceptor
// );

// // AccessToken 주입 함수 정의
// export const injectCustomAxiosAccessToken = (token: string) => {
//   customAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
// };
