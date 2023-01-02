import { useState } from "react";
import AuthLogin from "./AuthLogin";
import AuthSignup from "./AuthSignup";
import {
  AuthBackground,
  AuthContainer,
  AuthPanel,
  AuthPanelBlind,
  AuthPanelSubText,
  AuthPanelText,
  AuthPanelTextWrap,
  AuthPanelWrap,
  AuthWrap,
} from "./style";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AuthBackground>
      <AuthContainer>
        <AuthPanelWrap>
          <AuthPanel
            src={"http://dodam.b1nd.com/static/media/sign.7d3679c2.jpg"}
            alt="auth/authPanel"
          />
          <AuthPanelBlind />
          <AuthPanelTextWrap>
            <AuthPanelText style={{ marginBottom: 16 }}>
              더 나은 학교를 위해 함께하는
            </AuthPanelText>
            <AuthPanelText>BIND 스마트스쿨</AuthPanelText>
            <AuthPanelSubText>새로워진 도담도담, 만나 보세요.</AuthPanelSubText>
          </AuthPanelTextWrap>
        </AuthPanelWrap>
        <AuthWrap>
          {isLogin ? (
            <AuthLogin setIsLogin={setIsLogin} />
          ) : (
            <AuthSignup setIsLogin={setIsLogin} />
          )}
        </AuthWrap>
      </AuthContainer>
    </AuthBackground>
  );
};

export default Auth;
