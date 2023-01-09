import { RTHProps } from "./RTH.type";
import { RTHContainer } from "./style";

const RTH = ({ children, customStyle }: RTHProps) => {
  return <RTHContainer style={{ ...customStyle }}>{children}</RTHContainer>;
};

export default RTH;
