import Button from 'components/Common/Button';
import CTable, { CTableScrollWrapper } from 'components/Common/CTable';
import CTBody from 'components/Common/CTable/CTBody';
import CTD from 'components/Common/CTable/CTD';
import CTR from 'components/Common/CTable/CTR';
import useMemberJoinApproval from 'hooks/joinApproval/useApprovalMemberJoin';
import useMemberJoinApprovalDeny from 'hooks/joinApproval/useDenyMemberJoin';
import { useGetNotJoinApprovalAllowMember } from 'quries/joinApproval/joinApproval.query';
import { NotAllowButtonWrap } from './style';

const NotAllowMemberList = () => {
    const { data } = useGetNotJoinApprovalAllowMember();
    const { approval } = useMemberJoinApproval();
    const { deny } = useMemberJoinApprovalDeny();
    return (
        <CTableScrollWrapper customStyle={{ width: 800, height: 568 }}>
            <CTable>
                <CTBody>
                    {data?.data.map((item, idx) => {
                        return (
                            <CTR key={idx}>
                                <CTD customStyle={{ minWidth: 200 }}>{item.id}</CTD>
                                <CTD customStyle={{ minWidth: 200 }}>{item.name}</CTD>
                                <CTD customStyle={{ minWidth: 200 }}>{item.joinDate}</CTD>
                                <CTD customStyle={{ width: "100%", textAlign: "right" }}>
                                    <NotAllowButtonWrap>
                                        <Button
                                            type="Primary"
                                            title="승인"
                                            customStyle={{ width: 56, height: 32, borderRadius: 5 }}
                                            onClick={() => { approval(item.id); }}
                                        />
                                        <Button
                                            type="Cancel"
                                            title="거절"
                                            customStyle={{ width: 56, height: 32, borderRadius: 5 }}
                                            onClick={() => { deny(item.id); }}
                                        />
                                    </NotAllowButtonWrap>
                                </CTD>
                            </CTR>
                        )
                    })}
                </CTBody>
            </CTable>
        </CTableScrollWrapper>
    );
};

export default NotAllowMemberList;