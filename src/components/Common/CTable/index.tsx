import { CTableProps } from "./CTable.type";
import { CTableContainer } from "./style";

const CTable = ({ customStyle, children }: CTableProps) => {
  return (
    <CTableContainer style={{ ...customStyle }}>{children}</CTableContainer>
  );
};

export default CTable;
