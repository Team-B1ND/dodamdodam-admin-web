import { useState } from "react";
import Button from "../Common/Button";
import CTable from "../Common/CTable";
import CTH from "../Common/CTable/CTH";
import CTHead from "../Common/CTable/CTHead";
import CTR from "../Common/CTable/CTR";
import SectionHeader from "../Common/SectionHeader";
import { TimeTableContainer } from "./style";
import TimeTableCreateModal from "./TimeTableCreateModal";

const TimeTable = () => {

  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  return (
    <TimeTableContainer>
      <SectionHeader
        title="시간표 관리"
        subTitle="시간표를 관리할 수 있습니다."
      >
        <Button
          onClick={() => setCreateModalIsOpen(true)}
          title="추가하기"
          type={"Primary"}
        />
      </SectionHeader>
      <CTable customStyle={{ width: 600 }}>
        <CTHead>
          <CTR>
            <CTH customStyle={{ minWidth: 200 }}>시간표</CTH>
            <CTH customStyle={{ width: "100%", textAlign: "right" }}>
              수정 / 삭제
            </CTH>
          </CTR>
        </CTHead>
      </CTable>
      <TimeTableCreateModal
        open={createModalIsOpen}
        setOpen={setCreateModalIsOpen}
      />
    </TimeTableContainer>
  );
};

export default TimeTable;
