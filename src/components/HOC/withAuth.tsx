import { B1ndToast } from "@b1nd/b1nd-toastify";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "constants/token/token.constant";
import token from "lib/token";
import { useGetMyMemberQuery } from "quries/member/member.query";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (AuthComponent: React.ComponentType) => {
  const AuthCheck = () => {
    const { data: serverMyMemberData, isLoading: serverMyMemberDataIsLoading } =
      useGetMyMemberQuery({
        cacheTime: 1000 * 60 * 3,
        staleTime: 1000 * 3,
      });

    const navigate = useNavigate();

    const isAuthority =
      token.getToken(ACCESS_TOKEN_KEY) !== undefined &&
      token.getToken(REFRESH_TOKEN_KEY) !== undefined;

    useEffect(() => {
      if (
        !isAuthority ||
        (!serverMyMemberDataIsLoading &&
          serverMyMemberData?.data.position !== "관리자")
      ) {
        B1ndToast.showError("토큰이 유효하지 않습니다.");
        navigate("/sign");
      }
    }, [
      navigate,
      isAuthority,
      serverMyMemberData,
      serverMyMemberDataIsLoading,
    ]);

    if (!isAuthority) {
      return <></>;
    }

    return <AuthComponent />;
  };

  return AuthCheck;
};

export default withAuth;
