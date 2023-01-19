import { ModalProps } from "./Modal.type";
import {
  ModalBackground,
  ModalCloseIcon,
  ModalContainer,
  ModalWrap,
} from "./style";
import { IoClose } from "@react-icons/all-files/io5/IoClose";

const Modal = ({
  zIndex,
  children,
  customStyle,
  isOpen,
  onClose,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <>
          <ModalBackground style={{ zIndex: zIndex - 1 }} onClick={onClose} />
          <ModalContainer style={{ ...customStyle, zIndex }}>
            <ModalWrap>
              <ModalCloseIcon onClick={onClose}>
                <IoClose />
              </ModalCloseIcon>
              {children}
            </ModalWrap>
          </ModalContainer>
        </>
      )}
    </>
  );
};

export default Modal;
