import { Suspense, useState } from "react";
import CTable from "../Common/CTable";
import CTH from "../Common/CTable/CTH";
import CTHead from "../Common/CTable/CTHead";
import CTR from "../Common/CTable/CTR";
import ErrorBoundary from "../Common/ErrorBoundary";
import SearchBar from "../Common/SearchBar";
import SectionHeader from "../Common/SectionHeader";
import Select from "../Common/Select";
import MemberList from "./MemberList";
import { MemberContainer, MemberInputWrap } from "./style";

const Member = () => {
  const [classification, setClassification] = useState("전체보기");
  const [keyword, setKeyword] = useState("");

  return (
    <MemberContainer>
      <SectionHeader
        title="구성원"
        subTitle="현재 가입한 구성원을 볼 수 있습니다"
      ></SectionHeader>
      <MemberInputWrap>
        <Select
          items={["전체보기", "1학년", "2학년", "3학년", "선생님"]}
          value={classification}
          onChange={setClassification}
          zIndex={2}
        />
        <SearchBar onChange={setKeyword} value={keyword} />
      </MemberInputWrap>
      <CTable customStyle={{ width: 864 }}>
        <CTHead>
          <CTR>
            <CTH customStyle={{ width: "120px", textAlign: "center" }}>
              사진
            </CTH>
            <CTH customStyle={{ width: "16%" }}>이름</CTH>
            <CTH customStyle={{ width: "12%" }}>반</CTH>
            <CTH customStyle={{ width: "14%" }}>아이디</CTH>
            <CTH>이메일</CTH>
            <CTH>{""}</CTH>
          </CTR>
        </CTHead>
      </CTable>
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <MemberList classification={classification} />
        </Suspense>
      </ErrorBoundary>
    </MemberContainer>
  );
};

export default Member;
