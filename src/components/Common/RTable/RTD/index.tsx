import { RTDProps } from "./RTD.type";
import { RTDContainer } from "./style";

const RTD = ({ children, customStyle }: RTDProps) => {
  return <RTDContainer style={{ ...customStyle }}>{children}</RTDContainer>;
};

export default RTD;
