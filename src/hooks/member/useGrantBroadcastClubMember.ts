import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useGrantBroadcastClubMemberMutation } from "quries/member/member.query";
import { useQueryClient } from "react-query";

export const useGrantBroadcastClubMember = () => {
  const grantBroadcastClubMember = useGrantBroadcastClubMemberMutation();
  const queryClient = useQueryClient();

  const handleGrantBroadcastClubMemberClick = (
    e: React.MouseEvent<HTMLDivElement>,
    id: string
  ) => {
    e.preventDefault();

    const answer = window.confirm("방송부 권한을 부여하시겠습니까?");

    if (answer) {
      grantBroadcastClubMember.mutate(
        { id },
        {
          onSuccess: () => {
            B1ndToast.showSuccess("권한을 부여하였습니다.");

            queryClient.invalidateQueries([
              "member/getBroadcastClubMemberById",
              id,
            ]);
          },
          onError: (e) => {
            B1ndToast.showError("권한을 부여하지 못했습니다.");
          },
        }
      );
    }
  };

  return {
    handleGrantBroadcastClubMemberClick,
  };
};
