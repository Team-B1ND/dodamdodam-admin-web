import React, { Suspense, useState } from "react";
import { PhoneNumberContainer, PhoneNumberInputWrap } from "./style";
import SectionHeader from "components/Common/SectionHeader";
import Select from "components/Common/Select";
import SearchBar from "components/Common/SearchBar";
import CTable from "components/Common/CTable";
import CTHead from "components/Common/CTable/CTHead";
import CTR from "components/Common/CTable/CTR";
import CTH from "components/Common/CTable/CTH";
import ErrorBoundary from "components/Common/ErrorBoundary";
import PhoneNumberList from "./PhoneNumberList";

const PhoneNumber = () => {
  const [classification, setClassification] = useState<string>("전체보기");
  const [keyword, setKeyword] = useState<string>("");

  return (
    <PhoneNumberContainer>
      <SectionHeader title="구성원" subTitle="현재 가입한 구성원을 볼 수 있습니다"></SectionHeader>
      <PhoneNumberInputWrap>
        <Select
          items={["전체보기", "1학년", "2학년", "3학년", "선생님"]}
          value={classification}
          onChange={setClassification}
          zIndex={2}
        />
        <SearchBar onChange={setKeyword} value={keyword} />
      </PhoneNumberInputWrap>
      <CTable>
        <CTHead>
          <CTR>
            <CTH customStyle={{ width: "120px", textAlign: "center" }}>사진</CTH>
            <CTH customStyle={{ width: "19%" }}>이름</CTH>
            <CTH customStyle={{ width: "15.5%" }}>반</CTH>
            <CTH customStyle={{ width: "17.5%" }}>아이디</CTH>
            <CTH customStyle={{ width: "27.5%" }}>전화번호</CTH>
            <CTH>{""}</CTH>
          </CTR>
        </CTHead>
      </CTable>
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <PhoneNumberList keyword={keyword} classification={classification} />
        </Suspense>
      </ErrorBoundary>
    </PhoneNumberContainer>
  );
};

export default PhoneNumber;
