import { RTDProps } from "./RTD.type";

const RTD = ({ children, customStyle }: RTDProps) => {
  return <td style={{ ...customStyle }}>{children}</td>;
};

export default RTD;
