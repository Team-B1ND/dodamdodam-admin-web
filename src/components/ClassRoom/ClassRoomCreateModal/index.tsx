import { Dispatch, SetStateAction, Suspense } from "react";
import {
  CLASSROOM_GRADE_MAX,
  CLASSROOM_ROOM_MAX,
} from "../../../constants/classRoom/classRoom.constant";
import usePostClassRoom from "../../../hooks/classRoom/usePostClassRoom";
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
  ClassRoomCreateModalButtonWrap,
  ClassRoomCreateModalInfoSelectWrap,
  ClassRoomCreateModalTitle,
  ClassRoomCreateModalWrap,
} from "./style";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ClassRoomCreateModal = ({ open, setOpen }: Props) => {
  const {
    classRoomData,
    onChangeGrade,
    onChangeRoom,
    onChangePlace,
    onSubmitClassRoom,
  } = usePostClassRoom();

  return (
    <Modal
      zIndex={2}
      isOpen={open}
      onClose={() => setOpen(false)}
      customStyle={{ width: 410, minHeight: 490 }}
    >
      <ModalHeader title="교실 추가하기" />
      <ClassRoomCreateModalWrap>
        <ClassRoomCreateModalTitle>교실 기본정보</ClassRoomCreateModalTitle>
        <RTable customStyle={{ width: 340, margin: "0px auto" }}>
          <RTR>
            <RTH>학년 입력</RTH>
            <RTD>
              <ClassRoomCreateModalInfoSelectWrap>
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
              </ClassRoomCreateModalInfoSelectWrap>
            </RTD>
          </RTR>
          <RTR>
            <RTH>학반 입력</RTH>
            <RTD>
              <ClassRoomCreateModalInfoSelectWrap>
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
              </ClassRoomCreateModalInfoSelectWrap>
            </RTD>
          </RTR>
          <RTR>
            <RTH>학반 장소</RTH>
            <RTD>
              <ErrorBoundary fallback={<>에러 발생</>}>
                <Suspense fallback={<>로딩중...</>}>
                  <ClassRoomPlaceSelect onChange={onChangePlace} />
                </Suspense>
              </ErrorBoundary>
            </RTD>
          </RTR>
        </RTable>
        <ClassRoomCreateModalButtonWrap>
          <Button
            type="Primary"
            title="확인"
            customStyle={{
              width: 66,
              height: 32,
              borderRadius: 5,
              fontSize: 12,
            }}
            onClick={onSubmitClassRoom}
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
        </ClassRoomCreateModalButtonWrap>
      </ClassRoomCreateModalWrap>
    </Modal>
  );
};

export default ClassRoomCreateModal;
