import { Suspense, useState } from "react";
import Button from "../Common/Button";
import CTable from "../Common/CTable";
import CTH from "../Common/CTable/CTH";
import CTHead from "../Common/CTable/CTHead";
import CTR from "../Common/CTable/CTR";
import ErrorBoundary from "../Common/ErrorBoundary";
import SectionHeader from "../Common/SectionHeader";
import Select from "../Common/Select";
import { TimeTableContainer, TimeTableSelectWrap } from "./style";
import TimeTableCreateModal from "./TimeTableCreateModal";
import TimeTableList from "./TimeTableList";
import TimeTableModifyModal from "./TimeTableModifyModal";

const TimeTable = () => {
  const [timeTableTypeName, setTimeTableTypeName] = useState("전체보기");
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [modifyModalIsOpen, setModifyModalIsOpen] = useState(false);
  const [timeTableId, setTimeTableId] = useState(-1);

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
      <TimeTableSelectWrap>

        <Select
          customStyle={{ width: "100px" }}
          items={["전체보기", "평일", "주말"]}
          value={timeTableTypeName}
          onChange={setTimeTableTypeName}
        />
      </TimeTableSelectWrap>
      <CTable customStyle={{ width: 800 }}>
        <CTHead>
          <CTR>
            <CTH customStyle={{ minWidth: 195 }}>시간표</CTH>
            <CTH customStyle={{ minWidth: 200 }}>시작시간</CTH>
            <CTH customStyle={{ minWidth: 200 }}>종료시간</CTH>
            <CTH customStyle={{ width: "100%", textAlign: "right" }}>
              수정 / 삭제
            </CTH>
          </CTR>
        </CTHead>
      </CTable>
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <TimeTableList
            setTimeTableId={setTimeTableId}
            setModifyModalIsOpen={setModifyModalIsOpen} />
        </Suspense>
      </ErrorBoundary>
      <TimeTableCreateModal
        open={createModalIsOpen}
        setOpen={setCreateModalIsOpen}
      />
      <TimeTableModifyModal
        id={timeTableId}
        open={modifyModalIsOpen}
        setOpen={setModifyModalIsOpen}
      />
    </TimeTableContainer>
  );
};

export default TimeTable;
