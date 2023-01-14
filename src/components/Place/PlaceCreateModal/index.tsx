import {  Dispatch, SetStateAction, Suspense } from "react";
import usePostPlace from "../../../hooks/place/usePostPlace";
import Button from "../../Common/Button";
import ErrorBoundary from "../../Common/ErrorBoundary";
import Modal from "../../Common/Modal";
import ModalHeader from "../../Common/ModalHeader";
import RTable from "../../Common/RTable";
import RTD from "../../Common/RTable/RTD";
import RTH from "../../Common/RTable/RTH";
import RTR from "../../Common/RTable/RTR";
import TextInput from "../../Common/TextInput";
import PlaceCreateModalTypeSelect from "./PlaceCreateModalTypeSelect";
import {
  PlaceCreateModalButtonWrap,
  PlaceCreateModalTitle,
  PlaceCreateModalWrap,
} from "./style";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const PlaceCreateModal = ({ open, setOpen }: Props) => {
  const {
    placeName,
    placeTypeName,
    setPlaceTypeName,
    onChangePlaceName,
    onSubmitPlace,
  } = usePostPlace();

  return (
    <Modal
      zIndex={2}
      isOpen={open}
      setIsOpen={setOpen}
      customStyle={{ width: 410, height: 490 }}
    >
      <ModalHeader title="장소 추가하기" />
      <PlaceCreateModalWrap>
        <PlaceCreateModalTitle>장소 기본정보</PlaceCreateModalTitle>
        <RTable customStyle={{ width: 340, margin: "0px auto" }}>
          <RTR>
            <RTH>장소 이름</RTH>
            <RTD>
              <TextInput
                value={placeName}
                onChange={(e) => onChangePlaceName(e)}
                customStyle={{ width: "100%" }}
                placeholder="장소를 입력하세요"
              />
            </RTD>
          </RTR>
          <RTR>
            <RTH>장소 분류 </RTH>
            <RTD>
              <ErrorBoundary fallback={<>에러 발생</>}>
                <Suspense fallback={<>로딩중...</>}>
                  <PlaceCreateModalTypeSelect
                    placeTypeName={placeTypeName}
                    setPlaceTypeName={setPlaceTypeName}
                  />
                </Suspense>
              </ErrorBoundary>
            </RTD>
          </RTR>
        </RTable>
        <PlaceCreateModalButtonWrap>
          <Button
            type="Primary"
            title="확인"
            customStyle={{
              width: 66,
              height: 32,
              borderRadius: 5,
              fontSize: 12,
            }}
            onClick={onSubmitPlace}
          />
          <Button
            type="Cancel"
            title="취소"
            customStyle={{
              width: 66,
              height: 32,
              borderRadius: 5,
              fontSize: 12,
            }}
            onClick={() => setOpen(false)}
          />
        </PlaceCreateModalButtonWrap>
      </PlaceCreateModalWrap>
    </Modal>
  );
};

export default PlaceCreateModal;
