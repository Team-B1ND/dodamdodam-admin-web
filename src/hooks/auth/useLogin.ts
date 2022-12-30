import { sha512 } from "js-sha512";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import token from "../../lib/token";
import { usePostLoginMutation } from "../../quries/auth/auth.query";

const useLogin = () => {
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
      window.alert("아이디를 입력해주세요");
      return;
    }

    if (loginData.pw === "") {
      window.alert("비밀번호를 입력해주세요");
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
        onSuccess: ({ data }) => {
          token.setToken(ACCESS_TOKEN_KEY, data.token);
          token.setToken(REFRESH_TOKEN_KEY, data.refreshToken);
          window.alert("로그인 성공");
          navigate("/");
        },
        onError: () => {
          window.alert("로그인 실패");
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
