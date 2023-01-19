import { CTDProps } from "./CTD.type";
import { CTDContainer } from "./style";

const CTD = ({ children, customStyle }: CTDProps) => {
  return <CTDContainer style={{ ...customStyle }}>{children}</CTDContainer>;
};

export default CTD;
