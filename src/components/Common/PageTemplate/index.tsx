import { ReactNode } from "react";
import { PageTemplateContainer, PageTemplateWrap } from "./style";

import Header from "../Header";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <>
      <PageTemplateContainer>
        <Header />
        <PageTemplateWrap>{children}</PageTemplateWrap>
      </PageTemplateContainer>
    </>
  );
};

export default PageTemplate;
