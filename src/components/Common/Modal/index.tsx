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
  setIsOpen,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <>
          <ModalBackground
            style={{ zIndex: zIndex - 1 }}
            onClick={() => setIsOpen(false)}
          />
          <ModalContainer style={{ ...customStyle, zIndex }}>
            <ModalWrap>
              <ModalCloseIcon onClick={() => setIsOpen(false)}>
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
