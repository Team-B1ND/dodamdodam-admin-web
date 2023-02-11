import { usePostMemberJoinApproval } from "quries/joinApproval/joinApproval.query";
import { useQueryClient } from "react-query";

const useMemberJoinApproval = () => {
  const queryClient = useQueryClient();

  const memberJoinApproval = usePostMemberJoinApproval();

  const postMemberJoinApproval = (joinAllowMemberId: string) => {
    memberJoinApproval.mutate(
      { id: joinAllowMemberId },
      {
        onSuccess: () => {
          window.alert("승인 성공");
          queryClient.invalidateQueries("joinApproval/getNotAllowMember");
        },
        onError: () => {
          window.alert("승인 실패");
        },
      }
    );
  };

  return { postMemberJoinApproval };
};

export default useMemberJoinApproval;
