import { RTBodyProps } from "./RTBody.type";

const RTBody = ({ children, customStyle }: RTBodyProps) => {
  return <tbody style={{ ...customStyle }}>{children}</tbody>;
};

export default RTBody;
