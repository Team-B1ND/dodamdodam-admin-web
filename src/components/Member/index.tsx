import { useState } from "react";
import Button from "../Common/Button";
import CTable from "../Common/CTable";
import CTH from "../Common/CTable/CTH";
import CTHead from "../Common/CTable/CTHead";
import CTR from "../Common/CTable/CTR";
import SearchBar from "../Common/SearchBar";
import SectionHeader from "../Common/SectionHeader";
import Select from "../Common/Select";
import { MemberContainer, MemberInputWrap, MemberProfileImg } from "./style";
import DEFAULT_PROFILE from "../../assets/defaultProfile/defaultProfile.svg";
import DODAM_PROFILE from "../../assets/defaultProfile/dodamProfile.svg";
import CTD from "../Common/CTable/CTD";

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
          <CTR customStyle={{ borderBottom: "2px" }}>
            <CTH customStyle={{ width: "120px", textAlign: "center" }}>
              사진
            </CTH>
            <CTH customStyle={{ width: "19%" }}>이름</CTH>
            <CTH customStyle={{ width: "15%" }}>반</CTH>
            <CTH customStyle={{ width: "17%" }}>아이디</CTH>
            <CTH>이메일</CTH>
            <CTH customStyle={{ width: "13%" }}>{""}</CTH>
          </CTR>
        </CTHead>
        <CTR>
          <CTD customStyle={{ width: "120px", textAlign: "center" }}>
            <MemberProfileImg src={DEFAULT_PROFILE} />
          </CTD>
          <CTD customStyle={{ width: "19%" }}>김민재</CTD>
          <CTD customStyle={{ width: "15%" }}>2학년 3반 18번</CTD>
          <CTD customStyle={{ width: "17%" }}>snack655</CTD>
          <CTD>minjae1230@gamil.com</CTD>
          <CTD customStyle={{ width: "13%" }}>
            <Button
              type="Primary"
              onClick={() => console.log("hi")}
              title="삭제"
              customStyle={{ borderRadius: "5px", width: "66px" }}
            />
          </CTD>
        </CTR>
        <CTR>
          <CTD customStyle={{ width: "120px", textAlign: "center" }}>
            <MemberProfileImg src={DODAM_PROFILE} />
          </CTD>
          <CTD customStyle={{ width: "19%" }}>임동현</CTD>
          <CTD customStyle={{ width: "15%" }}>2학년 1반 17번</CTD>
          <CTD customStyle={{ width: "17%" }}>ldh3907</CTD>
          <CTD>ldh3907@gamil.com</CTD>
          <CTD customStyle={{ width: "13%" }}>
            <Button
              type="Primary"
              onClick={() => console.log("hi")}
              title="삭제"
              customStyle={{ borderRadius: "5px", width: "66px" }}
            />
          </CTD>
        </CTR>
      </CTable>
    </MemberContainer>
  );
};

export default Member;
