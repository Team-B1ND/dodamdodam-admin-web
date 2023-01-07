import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  customStyle?: CSSProperties;
}

const TR = ({ children, customStyle }: Props) => {
  return <tr style={{ ...customStyle }}>{children}</tr>;
};

export default TR;
