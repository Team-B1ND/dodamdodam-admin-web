import { JoinApprovalContainer, NotAllowMemberContainer, NotAllowMemberItemWrap } from "./style";
import SectionHeader from "../Common/SectionHeader";
import ErrorBoundary from "components/Common/ErrorBoundary";
import { Suspense } from "react";
import { useGetNotJoinApprovalAllowMember } from "quries/joinApproval/joinApproval.query";
import Button from "components/Common/Button";

const JoinApproval = () => {

  const { data } = useGetNotJoinApprovalAllowMember();
  const a = () => {

  }
  return (
    <JoinApprovalContainer>
      <SectionHeader
        title="가입승인"
        subTitle="가입 신청자가 표시됩니다. 가입신청자는 승인 완료 후 서비스를 이용할 수 있습니다"
      >
      </SectionHeader>
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <NotAllowMemberContainer>
            {data?.data.map((item) => {
              return (
                <NotAllowMemberItemWrap>
                  <div>{item.joinDate}</div>
                  <div>{item.name}</div>
                  <div>{item.id}</div>
                  <Button
                    type="Primary"
                    title="승인"
                    customStyle={{
                      width: 66,
                      height: 32,
                      borderRadius: 5,
                      fontSize: 12,
                    }}
                    onClick={a}
                  />
                  <Button
                    type="Cancel"
                    title="거절"
                    customStyle={{
                      width: 66,
                      height: 32,
                      borderRadius: 5,
                      fontSize: 12,
                    }}
                    onClick={a}
                  />
                </NotAllowMemberItemWrap>
              )
            })}
          </NotAllowMemberContainer>
        </Suspense>
      </ErrorBoundary>
    </JoinApprovalContainer>
  );
};

export default JoinApproval;
