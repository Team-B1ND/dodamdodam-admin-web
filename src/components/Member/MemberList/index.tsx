import CTD from "../../Common/CTable/CTD";
import CTR from "../../Common/CTable/CTR";
import DODAM_PROFILE from "../../../assets/defaultProfile/dodamProfile.svg";
import { MemberProfileImg, MemberProfileImgWrap } from "./style";
import CTable, { CTableScrollWrapper } from "../../Common/CTable";
import CTBody from "../../Common/CTable/CTBody";
import { CTDImageWrap } from "components/Common/CTable/CTD/style";
import { useFilterMember } from "hooks/member/useFilterMember";
import Button from "components/Common/Button";
import useApprovalMemberJoin from "hooks/joinApproval/useApprovalMemberJoin";
import { activeStatus } from "repositories/joinApproval/joinApproval.param";

interface Props {
  keyword: string;
  classification: string;
  status: activeStatus;
}

const MemberList = ({ keyword, classification, status }: Props) => {
  const { filteredData } = useFilterMember(keyword, classification, status);
  const { approval } = useApprovalMemberJoin();

  return (
    <CTableScrollWrapper customStyle={{ width: "100%", height: 600 }}>
      <CTable customStyle={{ width: "100%" }}>
        <CTBody>
          {filteredData.map((member) => (
            <CTR key={member.id}>
              <CTD customStyle={{ width: 120 }}>
                <CTDImageWrap>
                  <MemberProfileImgWrap>
                    <MemberProfileImg src={member.profileImage || DODAM_PROFILE} />
                  </MemberProfileImgWrap>
                </CTDImageWrap>
              </CTD>
              <CTD customStyle={{ width: "19%", textAlign: "left" }}>{member.name}</CTD>
              <CTD customStyle={{ width: "15.5%", textAlign: "left" }}>
                {member.student
                  ? `${member.student.grade}학년 ${member.student.room}반 ${member.student.number}번`
                  : "선생님"}
              </CTD>
              <CTD customStyle={{ width: "17.5%", textAlign: "left" }}>{member.id}</CTD>
              <CTD customStyle={{ width: "27.5%", textAlign: "left" }}>{member.email}</CTD>
              <CTD>
                <Button
                  type="Primary"
                  onClick={() => approval(member.id, "DEACTIVATED")}
                  customStyle={{ borderRadius: "5px", width: "75px" }}
                  title="비활성화"
                />
              </CTD>
            </CTR>
          ))}
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default MemberList;
