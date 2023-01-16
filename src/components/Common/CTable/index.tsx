import { CTableProps, CTableScrollWrapperProps } from "./CTable.type";
import { CTableContainer, CTableScrollWrapperContainer } from "./style";

const CTable = ({ customStyle, children }: CTableProps) => {
  return (
    <CTableContainer style={{ ...customStyle }}>{children}</CTableContainer>
  );
};

export const CTableScrollWrapper = ({
  customStyle,
  children,
}: CTableScrollWrapperProps) => {
  return (
    <CTableScrollWrapperContainer style={{ ...customStyle }}>
      {children}
    </CTableScrollWrapperContainer>
  );
};

export default CTable;
