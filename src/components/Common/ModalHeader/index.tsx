import { ModalHeaderProps } from "./ModalHeader.type";
import { ModalHeaderContainer } from "./style";

const ModalHeader = ({ title }: ModalHeaderProps) => {
  return <ModalHeaderContainer>{title}</ModalHeaderContainer>;
};

export default ModalHeader;
