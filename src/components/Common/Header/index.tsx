import useLogout from "../../../hooks/auth/useLogout";
import {
  HeaderContainer,
  HeaderDGSWLogo,
  HeaderSubTitle,
  HeaderTitle,
  HeaderTitleWrap,
  HeaderUserInfoLogout,
  HeaderUserInfoText,
  HeaderUserInfoWrap,
} from "./style";
import DGSWLogo from "../../../assets/logo/dgswLogo.svg";

const Header = () => {
  const { onLogout } = useLogout();

  return (
    <HeaderContainer>
      <HeaderTitleWrap>
        <HeaderTitle>도담도담</HeaderTitle>
        <HeaderSubTitle>Admin</HeaderSubTitle>
      </HeaderTitleWrap>
      <HeaderUserInfoWrap>
        <HeaderUserInfoText>{"관리자"} 님</HeaderUserInfoText>
        <HeaderUserInfoLogout onClick={onLogout}>로그아웃</HeaderUserInfoLogout>
      </HeaderUserInfoWrap>
      <HeaderDGSWLogo src={DGSWLogo} alt={"HeaderDGSWLogo"} />
    </HeaderContainer>
  );
};

export default Header;
