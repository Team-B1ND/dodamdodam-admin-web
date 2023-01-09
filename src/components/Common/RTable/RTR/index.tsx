import { RTRProps } from "./RTR.Type";
import { RTRContainer } from "./style";

const RTR = ({ children, customStyle }: RTRProps) => {
  return <RTRContainer style={{ ...customStyle }}>{children}</RTRContainer>;
};

export default RTR;
