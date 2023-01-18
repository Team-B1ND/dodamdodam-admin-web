import { Suspense, useState } from "react";
import Button from "../Common/Button";
import CTable from "../Common/CTable";
import CTH from "../Common/CTable/CTH";
import CTHead from "../Common/CTable/CTHead";
import CTR from "../Common/CTable/CTR";
import ErrorBoundary from "../Common/ErrorBoundary";
import SectionHeader from "../Common/SectionHeader";
import ClassRoomCreateModal from "./ClassRoomCreateModal";
import ClassRoomList from "./ClassRoomList";
import { ClassRoomContainer } from "./style";

const ClassRoom = () => {
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
          <ClassRoomList />
        </Suspense>
      </ErrorBoundary>
      <ClassRoomCreateModal
        open={createModalIsOpen}
        setOpen={setCreateModalIsOpen}
      />
    </ClassRoomContainer>
  );
};

export default ClassRoom;
