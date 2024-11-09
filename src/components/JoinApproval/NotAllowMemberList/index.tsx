import Button from "components/Common/Button";
import CTable, { CTableScrollWrapper } from "components/Common/CTable";
import CTBody from "components/Common/CTable/CTBody";
import CTD from "components/Common/CTable/CTD";
import CTR from "components/Common/CTable/CTR";
import useMemberJoinApproval from "hooks/JoinApprovals/useApprovalMemberJoin";
import { NotAllowButtonWrap } from "./style";
import { useGetMemberByStatus } from "quries/member/member.query";
import { activeStatus } from "repositories/JoinApprovalRepository/joinApproval.param";

interface Props {
  status: activeStatus;
}

const NotAllowMemberList = ({ status }: Props) => {
  const { data: members } = useGetMemberByStatus({ status: status });
  const { approval } = useMemberJoinApproval();

  return (
    <CTableScrollWrapper customStyle={{ width: 950, height: 568 }}>
      <CTable>
        <CTBody>
          {members?.data.map((item, idx) => (
            <CTR key={idx}>
              <CTD customStyle={{ minWidth: 200 }}>{item.id}</CTD>
              <CTD customStyle={{ minWidth: 200 }}>{item.name}</CTD>
              <CTD customStyle={{ minWidth: 200 }}>{item.createdAt}</CTD>
              <CTD
                customStyle={{
                  minWidth: 170,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {item.role}
              </CTD>
              <CTD customStyle={{ width: "100%", textAlign: "right" }}>
                <NotAllowButtonWrap>
                  <Button
                    type="Primary"
                    title={status === "DEACTIVATED" ? "삭제" : "승인"}
                    customStyle={{ width: 56, height: 32, borderRadius: 5 }}
                    onClick={() => {
                      approval(item.id, "ACTIVE");
                    }}
                  />
                  {status !== "DEACTIVATED" && (
                    <Button
                      type="Cancel"
                      title="거절"
                      customStyle={{ width: 56, height: 32, borderRadius: 5 }}
                      onClick={() => {
                        approval(item.id, "DEACTIVATED");
                      }}
                    />
                  )}
                </NotAllowButtonWrap>
              </CTD>
            </CTR>
          ))}
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default NotAllowMemberList;
