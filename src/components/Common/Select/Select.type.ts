import { CSSProperties, Dispatch, SetStateAction } from "react";

export interface SelectProps {
  items: string[];
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  zIndex?: number;
  customStyle?: CSSProperties;
}
