import CTable, { CTableScrollWrapper } from "components/Common/CTable";
import CTBody from "components/Common/CTable/CTBody";
import CTD from "components/Common/CTable/CTD";
import { CTDImageWrap } from "components/Common/CTable/CTD/style";
import CTR from "components/Common/CTable/CTR";
import DODAM_PROFILE from "../../../assets/defaultProfile/dodamProfile.svg";
import { MemberProfileImg, MemberProfileImgWrap } from "components/Member/MemberList/style";
import { useNavigate, useParams } from "react-router-dom";
import { memo } from "react";
import { useFilterMember } from "hooks/Members/useFilterMember";
import { activeStatus } from "repositories/JoinApprovalRepository/joinApproval.param";

interface Props {
  keyword: string;
  classification: string;
  status: activeStatus;
}

const AuthorityMemberList = ({ keyword, classification, status }: Props) => {
  const { filteredData } = useFilterMember(keyword, classification, status);
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <CTableScrollWrapper customStyle={{ width: 720, height: 600 }}>
      <CTable>
        <CTBody>
          {filteredData.map((member) => (
            <div key={member.id} style={{ width: 720 }} onClick={() => navigate(`/authority/${member.id}`)}>
              <CTR
                key={member.id}
                customStyle={{
                  backgroundColor: id === member.id ? "#eeeeee" : "white",
                }}
              >
                <CTD customStyle={{ width: 120 }}>
                  <CTDImageWrap>
                    <MemberProfileImgWrap>
                      <MemberProfileImg src={member.profileImage || DODAM_PROFILE} />
                    </MemberProfileImgWrap>
                  </CTDImageWrap>
                </CTD>
                <CTD customStyle={{ width: 200 }}>{member.name}</CTD>
                <CTD customStyle={{ width: 150 }}>
                  {member.student
                    ? `${member.student.grade}학년 ${member.student.room}반 ${member.student.number}번`
                    : "선생님"}
                </CTD>
                <CTD customStyle={{ width: 250 }}>{member.id}</CTD>
              </CTR>
            </div>
          ))}
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default memo(AuthorityMemberList);
