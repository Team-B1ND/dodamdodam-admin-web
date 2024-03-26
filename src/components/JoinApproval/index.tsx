import { JoinApprovalContainer } from "./style";
import SectionHeader from "../Common/SectionHeader";
import ErrorBoundary from "components/Common/ErrorBoundary";
import { Suspense } from "react";
import CTable from "components/Common/CTable";
import CTHead from "components/Common/CTable/CTHead";
import CTR from "components/Common/CTable/CTR";
import CTH from "components/Common/CTable/CTH";
import NotAllowMemberList from "./NotAllowMemberList";

const JoinApproval = () => {
  return (
    <JoinApprovalContainer>
      <SectionHeader
        title="가입승인"
        subTitle="가입 신청자가 표시됩니다. 가입신청자는 승인 완료 후 서비스를 이용할 수 있습니다"
      ></SectionHeader>

      <CTable customStyle={{ width: 950 }}>
        <CTHead>
          <CTR>
            <CTH customStyle={{ minWidth: 175 }}>회원ID</CTH>
            <CTH customStyle={{ minWidth: 210 }}>이름</CTH>
            <CTH customStyle={{ minWidth: 180 }}>날짜</CTH>
            <CTH customStyle={{ minWidth: 160 }}>직급</CTH>
            <CTH customStyle={{ minWidth: "100%", textAlign: "right" }}>
              승인 / 거절
            </CTH>
          </CTR>
        </CTHead>
      </CTable>

      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <NotAllowMemberList />
        </Suspense>
      </ErrorBoundary>
    </JoinApprovalContainer>
  );
};

export default JoinApproval;
