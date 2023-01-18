import { OptionHTMLAttributes, ReactNode } from "react";

export interface BrowserSelectOptionProps
  extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
}
