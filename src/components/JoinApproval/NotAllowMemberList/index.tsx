import Button from "components/Common/Button";
import CTable, { CTableScrollWrapper } from "components/Common/CTable";
import CTBody from "components/Common/CTable/CTBody";
import CTD from "components/Common/CTable/CTD";
import CTR from "components/Common/CTable/CTR";
import useMemberJoinApproval from "hooks/joinApproval/useApprovalMemberJoin";
import { NotAllowButtonWrap } from "./style";
import { useGetMemberByStatus } from "quries/member/member.query";

const NotAllowMemberList = () => {
  const { data: members } = useGetMemberByStatus({ status: "PENDING" });
  const { approval } = useMemberJoinApproval();

  return (
    <CTableScrollWrapper customStyle={{ width: 950, height: 568 }}>
      <CTable>
        <CTBody>
          {members?.data.map((item, idx) => {
            return (
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
                      title="승인"
                      customStyle={{ width: 56, height: 32, borderRadius: 5 }}
                      onClick={() => {
                        approval(item.id, "ACTIVE");
                      }}
                    />
                    <Button
                      type="Cancel"
                      title="거절"
                      customStyle={{ width: 56, height: 32, borderRadius: 5 }}
                      onClick={() => {
                        approval(item.id, "DEACTIVATED");
                      }}
                    />
                  </NotAllowButtonWrap>
                </CTD>
              </CTR>
            );
          })}
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default NotAllowMemberList;
