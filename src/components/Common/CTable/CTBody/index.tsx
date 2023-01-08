import { CTBodyProps } from "./CTBody.type";

const CTBody = ({ customStyle, children }: CTBodyProps) => {
  return <tbody style={{ ...customStyle }}>{children}</tbody>;
};

export default CTBody;
