import Button from "components/Common/Button";
import CTable from "components/Common/CTable";
import CTH from "components/Common/CTable/CTH";
import CTHead from "components/Common/CTable/CTHead";
import CTR from "components/Common/CTable/CTR";
import ErrorBoundary from "components/Common/ErrorBoundary";
import SearchBar from "components/Common/SearchBar";
import SectionHeader from "components/Common/SectionHeader";
import Select from "components/Common/Select";
import { Suspense, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import AuthorityMemberList from "./AuthorityMemberList";
import AuthorityMemberDetail from "./AuthorityMemberList/AuthorityMemberDetail";
import MyPermissionModal from "./MyPermissionModal";
import {
  AuthorityBody,
  AuthorityContainer,
  AuthorityInputWrap,
  MemberTableWrap,
} from "./style";

const Authority = () => {
  const [classification, setClassification] = useState<string>("전체보기");
  const [keyword, setKeyword] = useState<string>("");
  const [checkMyPermission, setCheckMyPermission] = useState<boolean>(false);
  const [startDetail, setStartDetail] = useState<boolean>(false);
  const [memberType, setMemeberType] = useState<"student" | "teacher">(
    "student"
  );
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.length > "/authority/".length) {
      setStartDetail(true);
    } else if (pathname.length === "/authority".length) {
      setStartDetail(false);
    }
  }, [startDetail]);

  return (
    <>
      <AuthorityContainer>
        <SectionHeader
          title="서비스 권한"
          subTitle="사용자들의 권한을 관리할 수 있습니다."
        >
          <Button
            customStyle={{ width: 90, fontWeight: "bold" }}
            title="내 권한 보기"
            type="Primary"
            onClick={() => setCheckMyPermission(true)}
          />
        </SectionHeader>
        <AuthorityInputWrap>
          <Select
            items={["전체보기", "1학년", "2학년", "3학년", "선생님"]}
            value={classification}
            onChange={setClassification}
            zIndex={2}
          />
          <SearchBar value={keyword} onChange={setKeyword} />
        </AuthorityInputWrap>
        <AuthorityBody>
          <MemberTableWrap>
            <CTable customStyle={{ width: 720 }}>
              <CTHead>
                <CTR>
                  <CTH customStyle={{ width: 120, textAlign: "center" }}>
                    사진
                  </CTH>
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
                  setOpen={setStartDetail}
                  setMemberType={setMemeberType}
                />
              </Suspense>
            </ErrorBoundary>
          </MemberTableWrap>
          <AuthorityMemberDetail
            open={startDetail}
            setOpen={setStartDetail}
            memberType={memberType}
          ></AuthorityMemberDetail>
        </AuthorityBody>
        <MyPermissionModal
          open={checkMyPermission}
          setOpen={setCheckMyPermission}
        ></MyPermissionModal>
      </AuthorityContainer>
    </>
  );
};

export default Authority;
