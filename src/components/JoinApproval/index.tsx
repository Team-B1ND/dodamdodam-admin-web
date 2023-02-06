import { JoinApprovalContainer, JoinApprovalSectionHeader } from "./style";
import SectionHeader from "../Common/SectionHeader";

const JoinApproval = () => {
  return (
    <JoinApprovalContainer>
      <SectionHeader
        title="가입승인"
        subTitle="가입 신청자가 표시됩니다. 가입신청자는 승인 완료 후 서비스를 이용할 수 있습니다"
      >
      </SectionHeader>
      <div>가입 신청자가 없습니다.</div>
    </JoinApprovalContainer>
  );
};

export default JoinApproval;
