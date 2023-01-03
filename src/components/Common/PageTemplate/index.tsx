import { ReactNode } from "react";
import Header from "../Header";
import { PageTemplateContainer, PageTemplateWrap } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateContainer>
      <Header />
      <PageTemplateWrap>{children}</PageTemplateWrap>
    </PageTemplateContainer>
  );
};

export default PageTemplate;
