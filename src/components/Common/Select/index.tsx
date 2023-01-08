import { useState } from "react";
import {
  SelectContainer,
  SelectIcon,
  SelectItem,
  SelectItemWrap,
  SelectText,
} from "./style";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { SelectProps } from "./Select.type";

const Select = ({ items, value, onChange, customStyle }: SelectProps) => {
  const [close, setClose] = useState<boolean>(true);

  return (
    <SelectContainer
      close={close}
      onClick={() => setClose((prev) => !prev)}
      style={{ ...customStyle }}
    >
      <SelectText>{value}</SelectText>
      <SelectIcon close={close}>
        <IoIosArrowDown />
      </SelectIcon>
      {!close && (
        <SelectItemWrap>
          {items.map((item, idx) => (
            <SelectItem key={idx} onClick={() => onChange(item)}>
              {item}
            </SelectItem>
          ))}
        </SelectItemWrap>
      )}
    </SelectContainer>
  );
};

export default Select;
