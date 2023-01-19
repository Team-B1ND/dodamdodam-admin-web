import { CTHeadProps } from "./CTHead.type";
import { CTHeadContainer } from "./style";

const CTHead = ({ children, customStyle }: CTHeadProps) => {
  return (
    <CTHeadContainer style={{ ...customStyle }}>{children}</CTHeadContainer>
  );
};

export default CTHead;
