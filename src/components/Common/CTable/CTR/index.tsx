import { CTRProps } from "./CTR.type";
import { CTRContainer } from "./style";

const CTR = ({ children, customStyle }: CTRProps) => {
  return <CTRContainer style={{ ...customStyle }}>{children}</CTRContainer>;
};

export default CTR;
