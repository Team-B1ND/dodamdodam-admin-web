import { RTableProps } from "./RTable.type";
import { RTableContainer } from "./style";

const RTable = ({ children, customStyle }: RTableProps) => {
  return (
    <RTableContainer style={{ ...customStyle }}>{children}</RTableContainer>
  );
};

export default RTable;
