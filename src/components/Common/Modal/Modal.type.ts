import { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";

export interface ModalProps {
  customStyle?: CSSProperties;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  zIndex: number;
}
