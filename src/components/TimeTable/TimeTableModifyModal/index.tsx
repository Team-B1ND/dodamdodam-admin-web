import useModifyTimeTable from "hooks/timeTable/useModifyTimeTable";
import { Dispatch, SetStateAction } from "react";
import Button from "../../Common/Button";
import Modal from "../../Common/Modal";
import ModalHeader from "../../Common/ModalHeader";
import RTable from "../../Common/RTable";
import RTD from "../../Common/RTable/RTD";
import RTH from "../../Common/RTable/RTH";
import RTR from "../../Common/RTable/RTR";
import Select from "../../Common/Select";
import TextInput from "../../Common/TextInput";
import { TimeTableDateInput, TimeTableModifyModalButtonWrap, TimeTableModifyModalTitle, TimeTableModifyModalWrap } from "./style";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
}

const TimeTableModifyModal = ({ open, setOpen, id }: Props) => {
  const { modify, onChangeTimeTableName, resetTimeTable, setTimeTableModifyStartTime, timeTableModifyTypeName, setTimeTableModifyEndTime, setTimeTableModifyTypeName } = useModifyTimeTable();

  return (
    <Modal
      zIndex={2}
      isOpen={open}
      onClose={() => setOpen(false)}
      customStyle={{ width: 470, height: 440 }}
    >
      <ModalHeader title="시간표 수정하기" />
      <TimeTableModifyModalWrap>
        <TimeTableModifyModalTitle>시간표 기본정보</TimeTableModifyModalTitle>
        <RTable customStyle={{ width: 400, margin: "0px auto" }}>
          <RTR>
            <RTH>시간표 이름</RTH>
            <RTD>
              <TextInput
                onChange={onChangeTimeTableName}
                customStyle={{ width: "100%" }}
                placeholder="수정 할 시간표 이름을 입력하세요"
              />
            </RTD>
          </RTR>
          <RTR>
            <RTH>타입 선택</RTH>
            <RTD>
              <Select
                items={["평일", "주말"]}
                value={timeTableModifyTypeName}
                onChange={setTimeTableModifyTypeName}
              />
            </RTD>
          </RTR>
          <RTR>
            <RTH>시작 시간</RTH>
            <RTD>
              <TimeTableDateInput type="time"
                onChange={(e) => setTimeTableModifyStartTime(e.target.value)}
                min="09:00" max="21:00" required />
            </RTD>
          </RTR>
          <RTR>
            <RTH>종료 시간</RTH>
            <RTD>
              <TimeTableDateInput type="time"
                onChange={(e) => setTimeTableModifyEndTime(e.target.value)}
                min="09:00" max="21:00" required />
            </RTD>
          </RTR>
        </RTable>
        <TimeTableModifyModalButtonWrap>
          <Button
            type="Primary"
            title="확인"
            customStyle={{
              width: 66,
              height: 32,
              borderRadius: 5,
              fontSize: 12,
            }}
            onClick={() => {
              modify({ id });
              setOpen(false);
            }}
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
            onClick={() => { setOpen(false); resetTimeTable(); }}
          />
        </TimeTableModifyModalButtonWrap>
      </TimeTableModifyModalWrap>
    </Modal>
  );
};

export default TimeTableModifyModal;
