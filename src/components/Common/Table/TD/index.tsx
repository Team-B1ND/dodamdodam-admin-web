import { CSSProperties, ReactNode } from "react";
import { TDContainer } from "./style";

interface Props {
  children: ReactNode;
  customStyle?: CSSProperties;
}

const TD = ({ children, customStyle }: Props) => {
  return <TDContainer style={{ ...customStyle }}>{children}</TDContainer>;
};

export default TD;
