import { BrowserSelectProps } from "./BrowserSelect.type";
import BrowserSelectOption from "./BrowserSelectOption";
import { BrowserSelectContainer } from "./style";

const BrowserSelect = ({
  customStyle,
  children,
  ...attr
}: BrowserSelectProps) => {
  return (
    <BrowserSelectContainer style={{ ...customStyle }} {...attr}>
      {attr.defaultValue && (
        <BrowserSelectOption defaultValue={attr.defaultValue}>
          {attr.defaultValue}
        </BrowserSelectOption>
      )}
      {children}
    </BrowserSelectContainer>
  );
};

export default BrowserSelect;
