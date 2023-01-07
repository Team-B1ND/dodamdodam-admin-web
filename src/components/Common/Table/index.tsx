import { CSSProperties, ReactNode } from "react";
import { TableContainer } from "./style";

interface Props {
  customStyle?: CSSProperties;
  children: ReactNode;
}

const Table = ({ customStyle, children }: Props) => {
  return <TableContainer style={{ ...customStyle }}>{children}</TableContainer>;
};

export default Table;
