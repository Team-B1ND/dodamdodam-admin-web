import { RTHProps } from "./RTH.type";

const RTH = ({ children, customStyle }: RTHProps) => {
  return <th style={{ ...customStyle }}>{children}</th>;
};

export default RTH;
