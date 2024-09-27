import { ReactNode } from "react";
import { PageTemplateContainer, PageTemplateWrap } from "./style";
import Footer from "../Footer";
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
        <Footer />
      </PageTemplateContainer>
    </>
  );
};

export default PageTemplate;
