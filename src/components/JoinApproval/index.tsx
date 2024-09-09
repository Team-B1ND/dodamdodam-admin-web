import { JoinApprovalContainer, JoinApprovalInputWrap } from "./style";
import SectionHeader from "../Common/SectionHeader";
import ErrorBoundary from "components/Common/ErrorBoundary";
import { Suspense, useState } from "react";
import CTable from "components/Common/CTable";
import CTHead from "components/Common/CTable/CTHead";
import CTR from "components/Common/CTable/CTR";
import CTH from "components/Common/CTable/CTH";
import NotAllowMemberList from "./NotAllowMemberList";
import Select from "components/Common/Select";
import SearchBar from "components/Common/SearchBar";
import { convertStatus } from "utils/JoinApproval/convertStatus";

const JoinApproval = () => {
  const [classification, setClassification] = useState<string>("대기중");
  return (
    <JoinApprovalContainer>
      <SectionHeader
        title="가입승인"
        subTitle="가입 신청자가 표시됩니다. 가입신청자는 승인 완료 후 서비스를 이용할 수 있습니다"
      ></SectionHeader>
      <JoinApprovalInputWrap>
        <Select items={["대기중", "비활성화"]} value={classification} onChange={setClassification} zIndex={2} />
      </JoinApprovalInputWrap>
      <CTable customStyle={{ width: 950 }}>
        <CTHead>
          <CTR>
            <CTH customStyle={{ minWidth: 175 }}>회원ID</CTH>
            <CTH customStyle={{ minWidth: 210 }}>이름</CTH>
            <CTH customStyle={{ minWidth: 180 }}>날짜</CTH>
            <CTH customStyle={{ minWidth: 160 }}>직급</CTH>
            <CTH customStyle={{ minWidth: "100%", textAlign: "right" }}>
              {convertStatus(classification) === "DEACTIVATED" ? "삭제" : "승인 / 거절"}
            </CTH>
          </CTR>
        </CTHead>
      </CTable>
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <NotAllowMemberList status={convertStatus(classification)} />
        </Suspense>
      </ErrorBoundary>
    </JoinApprovalContainer>
  );
};

export default JoinApproval;
