import { CSSProperties, ReactNode } from "react";

interface Props {
  customStyle?: CSSProperties;
  children: ReactNode;
}

const TBody = ({ customStyle, children }: Props) => {
  return <tbody style={{ ...customStyle }}>{children}</tbody>;
};

export default TBody;
