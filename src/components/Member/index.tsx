import { useState } from "react";
import CTable from "../Common/CTable";
import CTH from "../Common/CTable/CTH";
import CTHead from "../Common/CTable/CTHead";
import CTR from "../Common/CTable/CTR";
import SearchBar from "../Common/SearchBar";
import SectionHeader from "../Common/SectionHeader";
import Select from "../Common/Select";
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
          items={["전체보기", "1학년", "2학년", "3학년"]}
          value={classification}
          onChange={setClassification}
          zIndex={2}
        />
        <SearchBar onChange={setKeyword} value={keyword} />
      </MemberInputWrap>
      <CTable customStyle={{ width: "100%" }}>
        <CTHead>
          <CTR>
            <CTH>사진</CTH>
            <CTH>이름</CTH>
            <CTH>반</CTH>
            <CTH>아이디</CTH>
            <CTH>이메일</CTH>
            <CTH>{""}</CTH>
          </CTR>
        </CTHead>
      </CTable>
    </MemberContainer>
  );
};

export default Member;
