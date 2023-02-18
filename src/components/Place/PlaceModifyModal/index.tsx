import { memo, Suspense } from "react";
import useModifyPlace from "../../../hooks/place/useModifyPlace";
import Button from "../../Common/Button";
import ErrorBoundary from "../../Common/ErrorBoundary";
import Modal from "../../Common/Modal";
import ModalHeader from "../../Common/ModalHeader";
import RTable from "../../Common/RTable";
import RTD from "../../Common/RTable/RTD";
import RTH from "../../Common/RTable/RTH";
import RTR from "../../Common/RTable/RTR";
import TextInput from "../../Common/TextInput";
import PlaceModalTypeSelect from "../PlaceModalTypeSelect";
import {
  PlaceModifyModalButtonWrap,
  PlaceModifyModalTitle,
  PlaceModifyModalWrap,
} from "./style";

interface Props {
  selectModifyPlaceId: number;
  onClose: () => void;
}

const PlaceModifyModal = ({ selectModifyPlaceId, onClose }: Props) => {
  const {
    placeName,
    onChangePlaceName,
    placeTypeName,
    setPlaceTypeName,
    onModifyPlace,
  } = useModifyPlace({
    placeId: selectModifyPlaceId,
  });

  return (
    <Modal
      zIndex={2}
      isOpen={selectModifyPlaceId !== -1}
      onClose={onClose}
      customStyle={{ width: 410, height: 490 }}
    >
      <ModalHeader title="장소 수정하기" />
      <PlaceModifyModalWrap>
        <PlaceModifyModalTitle>장소 기본정보</PlaceModifyModalTitle>
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
            <RTH>장소 분류</RTH>
            <RTD>
              <ErrorBoundary fallback={<>에러 발생</>}>
                <Suspense fallback={<>로딩중...</>}>
                  <PlaceModalTypeSelect
                    placeTypeName={placeTypeName}
                    setPlaceTypeName={setPlaceTypeName}
                  />
                </Suspense>
              </ErrorBoundary>
            </RTD>
          </RTR>
        </RTable>
        <PlaceModifyModalButtonWrap>
          <Button
            type="Primary"
            title="확인"
            customStyle={{
              width: 66,
              height: 32,
              borderRadius: 5,
              fontSize: 12,
            }}
            onClick={onModifyPlace}
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
            onClick={onClose}
          />
        </PlaceModifyModalButtonWrap>
      </PlaceModifyModalWrap>
    </Modal>
  );
};

export default memo(PlaceModifyModal);
