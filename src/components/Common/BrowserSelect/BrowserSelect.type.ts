import { CSSProperties, ReactNode, SelectHTMLAttributes } from "react";

export interface BrowserSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  customStyle?: CSSProperties;
  children: ReactNode;
}
