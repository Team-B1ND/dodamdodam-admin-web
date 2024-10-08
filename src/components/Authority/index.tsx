import CTable from "components/Common/CTable";
import CTH from "components/Common/CTable/CTH";
import CTHead from "components/Common/CTable/CTHead";
import CTR from "components/Common/CTable/CTR";
import ErrorBoundary from "components/Common/ErrorBoundary";
import SearchBar from "components/Common/SearchBar";
import SectionHeader from "components/Common/SectionHeader";
import Select from "components/Common/Select";
import { Suspense, useState } from "react";
import AuthorityMemberList from "./AuthorityMemberList";
import AuthorityMemberDetail from "./AuthorityMemberList/AuthorityMemberDetail";
import * as S from "./style";
import { convertStatus } from "utils/JoinApproval/convertStatus";

const Authority = () => {
  const [classification, setClassification] = useState<string>("전체보기");
  const [keyword, setKeyword] = useState<string>("");

  return (
    <S.AuthorityContainer>
      <SectionHeader title="서비스 권한" subTitle="사용자들의 권한을 관리할 수 있습니다." />

      <S.AuthorityInputWrap>
        <Select
          items={["전체보기", "1학년", "2학년", "3학년", "선생님"]}
          value={classification}
          onChange={setClassification}
          zIndex={2}
        />
        <SearchBar value={keyword} onChange={setKeyword} />
      </S.AuthorityInputWrap>

      <S.AuthorityBody>
        <S.MemberTableWrap>
          <CTable customStyle={{ width: 720 }}>
            <CTHead>
              <CTR>
                <CTH customStyle={{ width: 120, textAlign: "center" }}>사진</CTH>
                <CTH>이름</CTH>
                <CTH>반</CTH>
                <CTH>아이디</CTH>
              </CTR>
            </CTHead>
          </CTable>

          <ErrorBoundary fallback={<>에러 발생</>}>
            <Suspense fallback={<>로딩중..</>}>
              <AuthorityMemberList
                keyword={keyword}
                classification={classification}
                status={convertStatus(classification)}
              />
            </Suspense>
          </ErrorBoundary>
        </S.MemberTableWrap>

        <AuthorityMemberDetail />
      </S.AuthorityBody>
    </S.AuthorityContainer>
  );
};

export default Authority;
