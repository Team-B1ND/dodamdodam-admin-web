import { CSSProperties } from "react";

export type ButtonType = "Primary" | "Cancel";

export interface ButtonProps {
  type: ButtonType;
  customStyle?: CSSProperties;
  onClick: () => void;
  title: string;
}
