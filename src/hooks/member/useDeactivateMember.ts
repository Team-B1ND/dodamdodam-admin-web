import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useDeactivateMemberMutation } from "quries/joinApproval/joinApproval.query";
import { useQueryClient } from "react-query";

export const useDeactivateMember = () => {
  const queryClient = useQueryClient();

  const memberJoinApprovalDeny = useDeactivateMemberMutation();

  const handleDeactivateMember = (joinDenyMemberId: string) => {
    memberJoinApprovalDeny.mutate(
      { id: joinDenyMemberId },
      {
        onSuccess: () => {
          B1ndToast.showInfo("해당 멤버를 비활성화했습니다.");
          queryClient.invalidateQueries("joinApproval/getNotAllowMember");
          queryClient.invalidateQueries("member/getMembers");
        },
        onError: () => {
          B1ndToast.showInfo("비활성화 실패했습니다.");
        },
      }
    );
  };

  return { handleDeactivateMember };
};
