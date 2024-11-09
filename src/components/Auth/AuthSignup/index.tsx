import { SwitchCase } from "@b1nd/b1nd-react-util";
import { Dispatch, SetStateAction, useState } from "react";
import {
  AuthOppositePartButton,
  AuthOppositePartText,
  AuthOppositePartWrap,
} from "../style";
import AuthSignupFirst from "./AuthSignupFirst";
import AuthSignupSecond from "./AuthSignupSecond";
import { AuthSignupContainer, AuthSignupWrap } from "./style";

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const AuthSignup = ({ setIsLogin }: Props) => {
  const [section, ] = useState<"first" | "second">("first");

  return (
    <AuthSignupContainer>
      <AuthSignupWrap>
        <SwitchCase
          value={section}
          caseBy={{
            first: <AuthSignupFirst />,
            second: <AuthSignupSecond />,
          }}
          defaultComponent={<AuthSignupFirst />}
        />
        <AuthOppositePartWrap>
          <AuthOppositePartText>이미 계정이 있으신가요?</AuthOppositePartText>
          <AuthOppositePartButton onClick={() => setIsLogin(true)}>
            로그인
          </AuthOppositePartButton>
        </AuthOppositePartWrap>
      </AuthSignupWrap>
    </AuthSignupContainer>
  );
};

export default AuthSignup;
