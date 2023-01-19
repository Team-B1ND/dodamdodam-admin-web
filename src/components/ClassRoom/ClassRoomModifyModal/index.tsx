import { Suspense } from "react";
import {
  CLASSROOM_GRADE_MAX,
  CLASSROOM_ROOM_MAX,
} from "../../../constants/classRoom/classRoom.constant";
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
  ClassRoomModifyModalInfoSelectWrap,
  ClassRoomModifyModalTitle,
  ClassRoomModifyModalWrap,
} from "./style";

interface Props {
  selectModifyClassRoomId: number;
  onClose: () => void;
}

const ClassRoomModifyModal = ({ selectModifyClassRoomId, onClose }: Props) => {
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
                      type={"Cancel"}
                      onClick={() => {}}
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
                      type={"Cancel"}
                      onClick={() => {}}
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
                    onChange={() => {}}
                    custumDefaultValue={"프로그래밍1"}
                  />
                </Suspense>
              </ErrorBoundary>
            </RTD>
          </RTR>
        </RTable>
      </ClassRoomModifyModalWrap>
    </Modal>
  );
};

export default ClassRoomModifyModal;
