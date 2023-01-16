import { CSSProperties, ReactNode } from "react";

export interface ModalProps {
  customStyle?: CSSProperties;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  zIndex: number;
}
