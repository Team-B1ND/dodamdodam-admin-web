import { CSSProperties, ReactNode } from "react";
import { THeadContainer } from "./style";

interface Props {
  customStyle?: CSSProperties;
  children: ReactNode;
}

const THead = ({ children, customStyle }: Props) => {
  return <THeadContainer style={{ ...customStyle }}>{children}</THeadContainer>;
};

export default THead;
