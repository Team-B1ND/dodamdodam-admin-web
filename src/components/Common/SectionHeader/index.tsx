import { memo } from "react";
import { SectionHeaderProps } from "./SectionHeader.type";
import {
  SectionHeaderContainer,
  SectionHeaderSubTitle,
  SectionHeaderTitle,
} from "./style";

const SectionHeader = ({ title, subTitle, children }: SectionHeaderProps) => {
  return (
    <SectionHeaderContainer>
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
      <SectionHeaderSubTitle>{subTitle}</SectionHeaderSubTitle>
      {children}
    </SectionHeaderContainer>
  );
};

export default memo(SectionHeader);
