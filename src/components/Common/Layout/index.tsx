import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import * as S from "./style";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();

  const isAuthPage = pathname === "/auth";

  const disappearGNB = isAuthPage;

  return (
    <S.Container>
      {!disappearGNB && <Header />}
      <S.TemplateWrap>
        {!disappearGNB && <SideBar />}
        {children}
      </S.TemplateWrap>
    </S.Container>
  );
};

export default Layout;
