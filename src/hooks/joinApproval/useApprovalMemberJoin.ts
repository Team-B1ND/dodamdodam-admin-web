import { usePatchMemberJoinApproval } from "quries/joinApproval/joinApproval.query";
import { useQueryClient } from "react-query";

const useApprovalMemberJoin = () => {
  const queryClient = useQueryClient();
  const memberJoinApproval = usePatchMemberJoinApproval();

  const approval = (joinAllowMemberId: string) => {
    memberJoinApproval.mutate(
      { id: joinAllowMemberId },
      {
        onSuccess: () => {
          window.alert("승인 성공");
          queryClient.invalidateQueries("joinApproval/getNotAllowMember");
          queryClient.invalidateQueries("member/getMembers");
        },
        onError: () => {
          window.alert("승인 실패");
        },
      }
    );
  };

  return { approval };
};

export default useApprovalMemberJoin;
