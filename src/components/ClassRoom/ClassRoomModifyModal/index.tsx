import { Suspense } from "react";
import {
  CLASSROOM_GRADE_MAX,
  CLASSROOM_ROOM_MAX,
} from "../../../constants/classRoom/classRoom.constant";
import useModifyClassRoom from "../../../hooks/classRoom/useModifyClassRoom";
import Button from "../../Common/Button";
import ErrorBoundary from "../../Common/ErrorBoundary";
import Modal from "../../Common/Modal";
import ModalHeader from "../../Common/ModalHeader";
import RTable from "../../Common/RTable";
import RTD from "../../Common/RTable/RTD";
import RTH from "../../Common/RTable/RTH";
import RTR from "../../Common/RTable/RTR";
import ClassRoomPlaceSelect from "../ClassRoomPlaceSelect";
import {
  ClassRoomModifyModalButtonWrap,
  ClassRoomModifyModalInfoSelectWrap,
  ClassRoomModifyModalTitle,
  ClassRoomModifyModalWrap,
} from "./style";

interface Props {
  selectModifyClassRoomId: number;
  onClose: () => void;
}

const ClassRoomModifyModal = ({ selectModifyClassRoomId, onClose }: Props) => {
  const {
    classRoomData,
    classRoomPlaceName,
    onChangeGrade,
    onChangeRoom,
    onChangePlace,
    onModifyClassRoom,
  } = useModifyClassRoom({
    classRoomId: selectModifyClassRoomId,
  });

  return (
    <Modal
      zIndex={2}
      isOpen={selectModifyClassRoomId !== -1}
      onClose={onClose}
      customStyle={{ width: 410, minHeight: 490 }}
    >
      <ModalHeader title="교실 수정하기" />
      <ClassRoomModifyModalWrap>
        <ClassRoomModifyModalTitle>교실 기본정보</ClassRoomModifyModalTitle>
        <RTable customStyle={{ width: 340, margin: "0px auto" }}>
          <RTR>
            <RTH>학년 입력</RTH>
            <RTD>
              <ClassRoomModifyModalInfoSelectWrap>
                {Array.from({ length: CLASSROOM_GRADE_MAX }).map((_, i) => {
                  const buttonGrade = i + 1;

                  return (
                    <Button
                      title={`${buttonGrade}학년`}
                      type={
                        classRoomData.grade === buttonGrade
                          ? "Primary"
                          : "Cancel"
                      }
                      onClick={() => onChangeGrade(buttonGrade)}
                      key={buttonGrade}
                    />
                  );
                })}
              </ClassRoomModifyModalInfoSelectWrap>
            </RTD>
          </RTR>
          <RTR>
            <RTH>학반 입력</RTH>
            <RTD>
              <ClassRoomModifyModalInfoSelectWrap>
                {Array.from({ length: CLASSROOM_ROOM_MAX }).map((_, i) => {
                  const buttonRoom = i + 1;

                  return (
                    <Button
                      title={`${buttonRoom}반`}
                      type={
                        classRoomData.room === buttonRoom ? "Primary" : "Cancel"
                      }
                      onClick={() => onChangeRoom(buttonRoom)}
                      key={buttonRoom}
                    />
                  );
                })}
              </ClassRoomModifyModalInfoSelectWrap>
            </RTD>
          </RTR>
          <RTR>
            <RTH>학반 장소</RTH>
            <RTD>
              <ErrorBoundary fallback={<>에러 발생</>}>
                <Suspense fallback={<>로딩중...</>}>
                  <ClassRoomPlaceSelect
                    onChange={onChangePlace}
                    custumDefaultValue={classRoomPlaceName}
                  />
                </Suspense>
              </ErrorBoundary>
            </RTD>
          </RTR>
        </RTable>
        <ClassRoomModifyModalButtonWrap>
          <Button
            type="Primary"
            title="확인"
            customStyle={{
              width: 66,
              height: 32,
              borderRadius: 5,
              fontSize: 12,
            }}
            onClick={onModifyClassRoom}
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
            onClick={() => onClose()}
          />
        </ClassRoomModifyModalButtonWrap>
      </ClassRoomModifyModalWrap>
    </Modal>
  );
};

export default ClassRoomModifyModal;
