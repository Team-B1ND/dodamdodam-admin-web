import { RTHeadProps } from "./RTHead.type";

const RTHead = ({ children, customStyle }: RTHeadProps) => {
  return <thead style={{ ...customStyle }}>{children}</thead>;
};

export default RTHead;
