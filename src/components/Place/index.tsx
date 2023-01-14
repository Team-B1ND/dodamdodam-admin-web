import { Suspense, useState } from "react";
import Button from "../Common/Button";
import SearchBar from "../Common/SearchBar";
import SectionHeader from "../Common/SectionHeader";
import Select from "../Common/Select";
import CTable from "../Common/CTable";
import CTH from "../Common/CTable/CTH";
import CTHead from "../Common/CTable/CTHead";
import CTR from "../Common/CTable/CTR";
import { PlaceContainer, PlaceInputWrap } from "./style";

import PlaceCreateModal from "./PlaceCreateModal";
import PlaceList from "./PlaceList";
import ErrorBoundary from "../Common/ErrorBoundary";
import PlaceModifyModal from "./PlaceModifyModal";

const Place = () => {
  const [keyword, setKeyword] = useState("전체보기");
  const onSubmit = () => {
    console.log(value);
  };
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [selectModifyPlaceId, setSelectModifyPlaceId] = useState(-1);
  const [value, setValue] = useState("");

  return (
    <PlaceContainer>
      <SectionHeader
        title="장소 관리"
        subTitle="장소를 추가/수정/삭제할 수 있습니다"
      >
        <Button
          onClick={() => setCreateModalIsOpen(true)}
          title="추가하기"
          type={"Primary"}
        />
      </SectionHeader>
      <PlaceInputWrap>
        <Select
          items={["전체보기"]}
          value={keyword}
          onChange={setKeyword}
          zIndex={2}
        />
        <SearchBar onSubmit={onSubmit} onChange={setValue} value={value} />
      </PlaceInputWrap>

      <CTable customStyle={{ width: 664 }}>
        <CTHead>
          <CTR>
            <CTH customStyle={{ minWidth: 224 }}>장소분류</CTH>
            <CTH customStyle={{ minWidth: 214 }}>장소이름</CTH>
            <CTH customStyle={{ width: "100%", textAlign: "right" }}>
              수정 / 삭제
            </CTH>
          </CTR>
        </CTHead>
      </CTable>
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <PlaceList
            selectModifyPlaceId={selectModifyPlaceId}
            setSelectModifyPlaceId={setSelectModifyPlaceId}
          />
        </Suspense>
      </ErrorBoundary>
      <PlaceCreateModal
        open={createModalIsOpen}
        setOpen={setCreateModalIsOpen}
      />
      <PlaceModifyModal
        selectModifyPlaceId={selectModifyPlaceId}
        onClose={() => setSelectModifyPlaceId(-1)}
      />
    </PlaceContainer>
  );
};

export default Place;
