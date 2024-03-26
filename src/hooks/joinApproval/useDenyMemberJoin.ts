import { useDeleteMemberJoinDeny } from "quries/joinApproval/joinApproval.query";
import { useQueryClient } from "react-query";

const useDenyMemberJoin = () => {
  const queryClient = useQueryClient();

  const memberJoinApprovalDeny = useDeleteMemberJoinDeny();

  const deny = (joinDenyMemberId: string) => {
    memberJoinApprovalDeny.mutate(
      { id: joinDenyMemberId },
      {
        onSuccess: () => {
          window.alert("거절 성공");
          queryClient.invalidateQueries("joinApproval/getNotAllowMember");
          queryClient.invalidateQueries("member/getMembers");
        },
        onError: () => {
          window.alert("거절 실패");
        },
      }
    );
  };

  return { deny };
};

export default useDenyMemberJoin;
