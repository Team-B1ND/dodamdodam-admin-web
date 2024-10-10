import { Dispatch, SetStateAction } from "react";
import useLogin from "../../../hooks/Auths/useLogin";
import {
  AuthInput,
  AuthInputTitle,
  AuthInputWrap,
  AuthOppositePartButton,
  AuthOppositePartText,
  AuthOppositePartWrap,
} from "../style";
import {
  AuthLoginContainer,
  AuthLoginInputForm,
  AuthLoginKeepCheckBox,
  AuthLoginKeepCheckBoxIcon,
  AuthLoginKeepText,
  AuthLoginKeepWrap,
  AuthLoginSubmitButton,
  AuthLoginWrap,
} from "./style";
import { FiCheck } from "@react-icons/all-files/fi/FiCheck";

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const AuthLogin = ({ setIsLogin }: Props) => {
  const { loginData, handleLoginData, loginKeep, handleLoginKeep, submitLoginData } = useLogin();

  return (
    <AuthLoginContainer>
      <AuthLoginWrap onSubmit={submitLoginData}>
        <AuthLoginInputForm>
          <AuthInputWrap>
            <AuthInputTitle>ID</AuthInputTitle>
            <AuthInput name="id" value={loginData.id} onChange={handleLoginData} />
          </AuthInputWrap>
          <AuthInputWrap>
            <AuthInputTitle>비밀번호</AuthInputTitle>
            <AuthInput name="pw" value={loginData.pw} onChange={handleLoginData} type="password" />
          </AuthInputWrap>
        </AuthLoginInputForm>
        <AuthLoginKeepWrap>
          <AuthLoginKeepCheckBox onClick={handleLoginKeep} isCheck={loginKeep}>
            {loginKeep && (
              <AuthLoginKeepCheckBoxIcon>
                <FiCheck />
              </AuthLoginKeepCheckBoxIcon>
            )}
          </AuthLoginKeepCheckBox>
          <AuthLoginKeepText>로그인 유지</AuthLoginKeepText>
        </AuthLoginKeepWrap>
        <AuthLoginSubmitButton>Sign In</AuthLoginSubmitButton>
        <AuthOppositePartWrap>
          <AuthOppositePartText>아직 계정이 없으신가요?</AuthOppositePartText>
          <AuthOppositePartButton onClick={() => setIsLogin(false)}>회원가입</AuthOppositePartButton>
        </AuthOppositePartWrap>
      </AuthLoginWrap>
    </AuthLoginContainer>
  );
};

export default AuthLogin;
