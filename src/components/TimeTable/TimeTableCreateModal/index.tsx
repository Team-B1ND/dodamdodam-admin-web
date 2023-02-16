import { Dispatch, SetStateAction } from "react";
import useCreateTimeTable from "../../../hooks/timeTable/useCreateTimeTable";
import Button from "../../Common/Button";
import Modal from "../../Common/Modal";
import ModalHeader from "../../Common/ModalHeader";
import RTable from "../../Common/RTable";
import RTD from "../../Common/RTable/RTD";
import RTH from "../../Common/RTable/RTH";
import RTR from "../../Common/RTable/RTR";
import Select from "../../Common/Select";
import TextInput from "../../Common/TextInput";
import { TimeTableCreateModalButtonWrap, TimeTableCreateModalTitle, TimeTableCreateModalWrap } from "./style";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const TimeTableCreateModal = ({ open, setOpen }: Props) => {
  const { timeTableTypeName, setTimeTableTypeName } = useCreateTimeTable();

  return (
    <Modal
      zIndex={2}
      isOpen={open}
      onClose={() => setOpen(false)}
      customStyle={{ width: 470, height: 440 }}
    >
      <ModalHeader title="시간표 추가하기" />
      <TimeTableCreateModalWrap>
        <TimeTableCreateModalTitle>시간표 기본정보</TimeTableCreateModalTitle>
        <RTable customStyle={{ width: 400, margin: "0px auto" }}>
          <RTR>
            <RTH>시간표 이름</RTH>
            <RTD>
              <TextInput
                customStyle={{ width: "100%" }}
                placeholder="시간표 이름을 입력하세요"
              />
            </RTD>
          </RTR>
          <RTR>
            <RTH>타입 선택</RTH>
            <RTD>
              <Select
                items={["평일", "주말"]}
                value={timeTableTypeName}
                onChange={setTimeTableTypeName}
              />
            </RTD>
          </RTR>
          <RTR>
            <RTH>시작 시간</RTH>
            <RTD>
              <TextInput
                customStyle={{ width: "100%" }}
                placeholder="시간표 이름을 입력하세요"
              />
            </RTD>
          </RTR>
          <RTR>
            <RTH>종료 시간</RTH>
            <RTD>
              <TextInput
                customStyle={{ width: "100%" }}
                placeholder="시간표 이름을 입력하세요"
              />
            </RTD>
          </RTR>
        </RTable>
        <TimeTableCreateModalButtonWrap>
          <Button
            type="Primary"
            title="확인"
            customStyle={{
              width: 66,
              height: 32,
              borderRadius: 5,
              fontSize: 12,
            }}
            onClick={() => setOpen(false)}
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
        </TimeTableCreateModalButtonWrap>
      </TimeTableCreateModalWrap>
    </Modal>
  );
};

export default TimeTableCreateModal;
