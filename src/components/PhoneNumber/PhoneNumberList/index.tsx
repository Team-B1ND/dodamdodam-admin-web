import CTable, { CTableScrollWrapper } from "components/Common/CTable";
import CTBody from "components/Common/CTable/CTBody";
import CTD from "components/Common/CTable/CTD";
import { CTDImageWrap } from "components/Common/CTable/CTD/style";
import CTR from "components/Common/CTable/CTR";
import { useFilterMember } from "hooks/Members/useFilterMember";
import { PhoneNumberInput, PhoneNumberProfileImg, PhoneNumberProfileImgWrap } from "./style";
import DODAM_PROFILE from "../../../assets/defaultProfile/dodamProfile.svg";
import Button from "components/Common/Button";
import usePhoneNumber from "hooks/PhoneNumbers/usePhoneNumber";

interface Props {
  keyword: string;
  classification: string;
}

const PhoneNumberList = ({ keyword, classification }: Props) => {
  const { filteredData } = useFilterMember(keyword, classification, "ACTIVE");
  const { phone, handlePhoneNumber, phoneNumber } = usePhoneNumber();
  return (
    <CTableScrollWrapper customStyle={{ width: "100%", height: 600 }}>
      <CTable>
        <CTBody>
          {filteredData.map((member) => (
            <CTR key={member.id}>
              <CTD customStyle={{ width: 120 }}>
                <CTDImageWrap>
                  <PhoneNumberProfileImgWrap>
                    <PhoneNumberProfileImg src={member.profileImage || DODAM_PROFILE} />
                  </PhoneNumberProfileImgWrap>
                </CTDImageWrap>
              </CTD>
              <CTD customStyle={{ width: "19%", textAlign: "left" }}>{member.name}</CTD>
              <CTD customStyle={{ width: "15.5%", textAlign: "left" }}>
                {member.student && `${member.student.grade}학년 ${member.student.room}반 ${member.student.number}번`}
              </CTD>
              <CTD customStyle={{ width: "17.5%", textAlign: "left" }}>{member.id}</CTD>
              <CTD customStyle={{ width: "27.5%", textAlign: "left" }}>
                <PhoneNumberInput
                  value={member.student?.parentPhone || phone[member.id]}
                  onChange={(e) => handlePhoneNumber(member.id, e.target.value)}
                />
              </CTD>
              <CTD>
                <Button
                  type="Primary"
                  onClick={() => {
                    const params = {
                      id: member.id,
                      parentPhone: phone[member.id],
                    };
                    phoneNumber(params);
                  }}
                  customStyle={{ borderRadius: "5px", width: "75px" }}
                  title="등록"
                />
              </CTD>
            </CTR>
          ))}
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default PhoneNumberList;
