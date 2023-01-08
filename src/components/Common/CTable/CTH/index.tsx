import { CTHProps } from "./CTH.type";
import { CTHContainer } from "./style";

const CTH = ({ children, customStyle }: CTHProps) => {
  return <CTHContainer style={{ ...customStyle }}>{children}</CTHContainer>;
};

export default CTH;
