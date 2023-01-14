import { CTBodyProps } from "./CTBody.type";
import { CTBodyContainer } from "./style";

const CTBody = ({ customStyle, children }: CTBodyProps) => {
  return (
    <CTBodyContainer style={{ ...customStyle }}>{children}</CTBodyContainer>
  );
};

export default CTBody;
