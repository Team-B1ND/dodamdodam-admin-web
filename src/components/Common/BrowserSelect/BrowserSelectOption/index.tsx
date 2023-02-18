import { BrowserSelectOptionProps } from "./BrowserSelectOption.type";

const BrowserSelectOption = ({
  children,
  ...attr
}: BrowserSelectOptionProps) => {
  return <option {...attr}>{children}</option>;
};

export default BrowserSelectOption;
