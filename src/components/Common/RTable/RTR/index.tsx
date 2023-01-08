import { RTRProps } from "./RTR.Type";

const RTR = ({ children, customStyle }: RTRProps) => {
  return <tr style={{ ...customStyle }}>{children}</tr>;
};

export default RTR;
