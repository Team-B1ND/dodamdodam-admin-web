import { Dispatch, SetStateAction } from "react";
import usePostPlaceType from "../../../hooks/place/usePostPlaceType";
import Button from "../../Common/Button";
import Modal from "../../Common/Modal";
import ModalHeader from "../../Common/ModalHeader";
import RTable from "../../Common/RTable";
import RTD from "../../Common/RTable/RTD";
import RTH from "../../Common/RTable/RTH";
import RTR from "../../Common/RTable/RTR";
import TextInput from "../../Common/TextInput";
import {
  PlaceTypeCreateModalButtonWrap,
  PlaceTypeCreateModalTitle,
  PlaceTypeCreateModalWrap,
} from "./style";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const PlaceTypeCreateModal = ({ open, setOpen }: Props) => {
  const { placeTypeName, onChangePlaceTypeName, onSubmitPlaceType } =
    usePostPlaceType();

  return (
    <Modal
      zIndex={2}
      isOpen={open}
      onClose={() => setOpen(false)}
      customStyle={{ width: 410, height: 490 }}
    >
      <ModalHeader title="장소 추가하기" />
      <PlaceTypeCreateModalWrap>
        <PlaceTypeCreateModalTitle>장소분류 기본정보</PlaceTypeCreateModalTitle>
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
        <PlaceTypeCreateModalButtonWrap>
          <Button
            type="Primary"
            title="확인"
            customStyle={{
              width: 66,
              height: 32,
              borderRadius: 5,
              fontSize: 12,
            }}
            onClick={onSubmitPlaceType}
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
            onClick={()=>setOpen(false)}
          />
        </PlaceTypeCreateModalButtonWrap>
      </PlaceTypeCreateModalWrap>
    </Modal>
  );
};

export default PlaceTypeCreateModal;
