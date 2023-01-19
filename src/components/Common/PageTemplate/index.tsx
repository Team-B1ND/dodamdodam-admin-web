import { ReactNode } from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import {
  PageTemplateContainer,
  PageTemplateContentWrap,
  PageTemplateWrap,
} from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateContainer>
      <Header />
      <PageTemplateWrap>
        <SideBar />
        <PageTemplateContentWrap>{children}</PageTemplateContentWrap>
      </PageTemplateWrap>
    </PageTemplateContainer>
  );
};

export default PageTemplate;
