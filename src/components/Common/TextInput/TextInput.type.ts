import { InputHTMLAttributes } from "react";
import { CSSProperties } from "styled-components";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  customStyle?: CSSProperties;
}
