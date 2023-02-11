import {
  usePostMemberJoinApproval,
  usePostMemberJoinApprovalDeny,
} from "quries/joinApproval/joinApproval.query";
import { useQueryClient } from "react-query";

const useMemberJoinApprovalDeny = () => {
  const queryClient = useQueryClient();

  const memberJoinApprovalDeny = usePostMemberJoinApprovalDeny();

  const postMemberJoinApprovalDeny = (joinDenyMemberId: string) => {
    memberJoinApprovalDeny.mutate(
      { id: joinDenyMemberId },
      {
        onSuccess: () => {
          window.alert("거절 성공");
          queryClient.invalidateQueries("joinApproval/getNotAllowMember");
        },
        onError: () => {
          window.alert("거절 실패");
        },
      }
    );
  };

  return { postMemberJoinApprovalDeny };
};

export default useMemberJoinApprovalDeny;
