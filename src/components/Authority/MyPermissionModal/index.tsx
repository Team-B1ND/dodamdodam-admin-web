import ErrorBoundary from "components/Common/ErrorBoundary";
import Modal from "components/Common/Modal";
import ModalHeader from "components/Common/ModalHeader";
import { Dispatch, SetStateAction, Suspense } from "react";
import MyPermissionList from "./MyPermissionList";
import { MyPermissionSubTitle } from "./style";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MyPermissionModal = ({ open, setOpen }: Props) => {
  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      customStyle={{ width: 576, height: 600 }}
      zIndex={2}
    >
      <ModalHeader title="관리자 님의 권한" />
      <MyPermissionSubTitle>권한 보기</MyPermissionSubTitle>
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <MyPermissionList />
        </Suspense>
      </ErrorBoundary>
    </Modal>
  );
};

export default MyPermissionModal;
