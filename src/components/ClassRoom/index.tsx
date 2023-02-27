import { Suspense, useState } from "react";
import Button from "../Common/Button";
import CTable from "../Common/CTable";
import CTH from "../Common/CTable/CTH";
import CTHead from "../Common/CTable/CTHead";
import CTR from "../Common/CTable/CTR";
import ErrorBoundary from "../Common/ErrorBoundary";
import SectionHeader from "../Common/SectionHeader";
import Select from "../Common/Select";
import ClassRoomCreateModal from "./ClassRoomCreateModal";
import ClassRoomList from "./ClassRoomList";
import ClassRoomModifyModal from "./ClassRoomModifyModal";
import { ClassRoomContainer, ClassRoomInputWrap } from "./style";

const ClassRoom = () => {
  const [classification, setClassification] = useState("전체보기");

  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  return (
    <ClassRoomContainer>
      <SectionHeader
        title="교실관리"
        subTitle="교실을 추가/수정/삭제 할 수 있습니다"
      >
        <Button
          title="추가하기"
          type="Primary"
          onClick={() => setCreateModalIsOpen(true)}
        />
      </SectionHeader>
      <ClassRoomInputWrap>
        <Select
          items={["전체보기", "1학년", "2학년", "3학년"]}
          value={classification}
          onChange={setClassification}
          zIndex={2}
        />
      </ClassRoomInputWrap>
      <CTable customStyle={{ width: 664 }}>
        <CTHead>
          <CTR>
            <CTH>교실 이름</CTH>
            <CTH customStyle={{ textAlign: "right" }}>수정 / 삭제</CTH>
          </CTR>
        </CTHead>
      </CTable>
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <ClassRoomList classification={classification} />
        </Suspense>
      </ErrorBoundary>
      <ClassRoomCreateModal
        open={createModalIsOpen}
        setOpen={setCreateModalIsOpen}
      />
      <ClassRoomModifyModal />
    </ClassRoomContainer>
  );
};

export default ClassRoom;
