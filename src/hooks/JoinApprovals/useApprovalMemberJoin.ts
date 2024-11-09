import { usePatchMemberStatus } from "quries/joinApproval/joinApproval.query";
import { useQueryClient } from "react-query";
import { activeStatus } from "repositories/JoinApprovalRepository/joinApproval.param";

const useApprovalMemberJoin = () => {
  const queryClient = useQueryClient();
  const memberJoinApproval = usePatchMemberStatus();

  const approval = (joinAllowMemberId: string, activeStatus: activeStatus) => {
    memberJoinApproval.mutate(
      { id: joinAllowMemberId, activeStatus: activeStatus },
      {
        onSuccess: () => {
          window.alert("상태 변경 성공");
          queryClient.invalidateQueries("joinApproval/getNotAllowMember");
          queryClient.invalidateQueries("member/getMembers");
        },
        onError: () => {
          window.alert("상태 변경 실패");
        },
      },
    );
  };

  return { approval };
};

export default useApprovalMemberJoin;
