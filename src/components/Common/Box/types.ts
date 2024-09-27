import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export type SizeType = "lg" | "sm";

export interface BannerBoxProps {
  children?: ReactNode;
  size: SizeType;
  style?: CSSObject;
}
