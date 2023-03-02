import { B1ndToast } from "@b1nd/b1nd-toastify";
import { sha512 } from "js-sha512";

import { FormEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import token from "../../lib/token";
import { usePostLoginMutation } from "../../quries/auth/auth.query";

const useLogin = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const postLoginMutation = usePostLoginMutation();

  const [loginData, setLoginData] = useState({
    id: "",
    pw: "",
  });
  const [loginKeep, setLoginKeep] = useState<boolean>(false);

  const handleLoginKeep = () => setLoginKeep((prev) => !prev);

  const handleLoginData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const submitLoginData = async (e: FormEvent) => {
    e.preventDefault();

    if (loginData.id === "") {
      B1ndToast.showInfo("아이디를 입력해주세요");
      return;
    }

    if (loginData.pw === "") {
      B1ndToast.showInfo("비밀번호를 입력해주세요");
      return;
    }

    const { id, pw } = loginData;

    const processLoginData = {
      id,
      pw: sha512(pw),
    };

    postLoginMutation.mutateAsync(
      { ...processLoginData },
      {
        onSuccess: ({ data: { token: accessToken, refreshToken, member } }) => {
          if (member.role === "ADMIN") {
            token.setToken(ACCESS_TOKEN_KEY, accessToken);
            token.setToken(REFRESH_TOKEN_KEY, refreshToken);
            queryClient.invalidateQueries("member/getMyMember");
            B1ndToast.showSuccess("로그인 성공");
            navigate("/member");
          } else {
            B1ndToast.showError("접근할 수 없는 사용자입니다.");
          }
        },
        onError: () => {
          B1ndToast.showError("로그인 실패");
        },
      }
    );
  };

  return {
    loginData,
    handleLoginData,
    loginKeep,
    handleLoginKeep,
    submitLoginData,
  };
};

export default useLogin;
