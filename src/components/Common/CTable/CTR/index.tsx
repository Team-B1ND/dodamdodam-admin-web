import { CTRProps } from "./CTR.type";

const CTR = ({ children, customStyle }: CTRProps) => {
  return <tr style={{ ...customStyle }}>{children}</tr>;
};

export default CTR;
