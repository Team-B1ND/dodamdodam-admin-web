import { ReactNode } from "react";
import {
  SectionHeaderContainer,
  SectionHeaderSubTitle,
  SectionHeaderTitle,
} from "./style";

interface Props {
  title: string;
  subTitle: string;
  children: ReactNode;
}

const SectionHeader = ({ title, subTitle, children }: Props) => {
  return (
    <SectionHeaderContainer>
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
      <SectionHeaderSubTitle>{subTitle}</SectionHeaderSubTitle>
      {children}
    </SectionHeaderContainer>
  );
};

export default SectionHeader;
