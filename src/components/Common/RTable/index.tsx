import { RTableProps } from "./RTable.type";

const RTable = ({ children, customStyle }: RTableProps) => {
  return <table style={{ ...customStyle }}>{children}</table>;
};

export default RTable;
