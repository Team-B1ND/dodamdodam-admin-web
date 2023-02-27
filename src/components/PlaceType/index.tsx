import { Suspense, useState } from "react";
import Button from "../Common/Button";
import CTable from "../Common/CTable";
import CTH from "../Common/CTable/CTH";
import CTHead from "../Common/CTable/CTHead";
import CTR from "../Common/CTable/CTR";
import ErrorBoundary from "../Common/ErrorBoundary";
import SectionHeader from "../Common/SectionHeader";
import PlaceTypeCreateModal from "./PlaceTypeCreateModal";
import PlaceTypeList from "./PlaceTypeList";
import PlaceTypeModifyModal from "./PlaceTypeModifyModal";
import { PlaceTypeContainer } from "./style";

const PlaceType = () => {
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  return (
    <PlaceTypeContainer>
      <SectionHeader
        title="장소 분류"
        subTitle="장소 분류를 추가/수정/삭제할 수 있습니다"
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
            <CTH>장소 이름</CTH>
            <CTH customStyle={{ textAlign: "right" }}>수정 / 삭제</CTH>
          </CTR>
        </CTHead>
      </CTable>
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <PlaceTypeList />
        </Suspense>
      </ErrorBoundary>
      <PlaceTypeCreateModal
        open={createModalIsOpen}
        setOpen={setCreateModalIsOpen}
      />
      <PlaceTypeModifyModal />
    </PlaceTypeContainer>
  );
};

export default PlaceType;
