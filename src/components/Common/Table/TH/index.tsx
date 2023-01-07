import { CSSProperties, ReactNode } from "react";
import { THContainer } from "./style";

interface Props {
  children: ReactNode;
  customStyle?: CSSProperties;
}

const TH = ({ children, customStyle }: Props) => {
  return <THContainer style={{ ...customStyle }}>{children}</THContainer>;
};

export default TH;
