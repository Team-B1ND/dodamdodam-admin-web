import useModifyPlaceType from "../../../hooks/place/useModifyPlaceType";
import Button from "../../Common/Button";
import Modal from "../../Common/Modal";
import ModalHeader from "../../Common/ModalHeader";
import RTable from "../../Common/RTable";
import RTD from "../../Common/RTable/RTD";
import RTH from "../../Common/RTable/RTH";
import RTR from "../../Common/RTable/RTR";
import TextInput from "../../Common/TextInput";
import {
  PlaceTypeModifyModalButtonWrap,
  PlaceTypeModifyModalTitle,
  PlaceTypeModifyModalWrap,
} from "./style";

interface Props {
  selectModifyPlaceTypeId: number;
  onClose: () => void;
}

const PlaceTypeModifyModal = ({ selectModifyPlaceTypeId, onClose }: Props) => {
  const { placeTypeName, onChangePlaceTypeName, onModifyPlaceType } =
    useModifyPlaceType({ id: selectModifyPlaceTypeId });

  return (
    <Modal
      zIndex={2}
      isOpen={selectModifyPlaceTypeId !== -1}
      onClose={onClose}
      customStyle={{ width: 410, height: 490 }}
    >
      <ModalHeader title="장소분류 수정하기" />
      <PlaceTypeModifyModalWrap>
        <PlaceTypeModifyModalTitle>장소분류 기본정보</PlaceTypeModifyModalTitle>
        <RTable customStyle={{ width: 340, margin: "0px auto" }}>
          <RTR>
            <RTH>장소 분류 이름</RTH>
            <RTD>
              <TextInput
                value={placeTypeName}
                onChange={(e) => onChangePlaceTypeName(e)}
                customStyle={{ width: "100%" }}
                placeholder="장소 분류를 입력하세요"
              />
            </RTD>
          </RTR>
        </RTable>
        <PlaceTypeModifyModalButtonWrap>
          <Button
            type="Primary"
            title="확인"
            customStyle={{
              width: 66,
              height: 32,
              borderRadius: 5,
              fontSize: 12,
            }}
            onClick={onModifyPlaceType}
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
        </PlaceTypeModifyModalButtonWrap>
      </PlaceTypeModifyModalWrap>
    </Modal>
  );
};

export default PlaceTypeModifyModal;
