import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
import { useDeleteMemberMutation } from "../../quries/member/member.query";
import { deleteMemberParam } from "../../repositories/member/memberRepository.param";

const useDeleteMember = () => {
  const queryClient = useQueryClient();

  const deleteMemberMutation = useDeleteMemberMutation();

  const onDeleteMember = (id: string) => {
    if (deleteMemberMutation.isLoading) {
      return;
    }

    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    deleteMemberMutation.mutate(
      { id },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("사용자 삭제 성공");
          queryClient.invalidateQueries("member/getMembers");
        },
        onError: () => {
          B1ndToast.showError("사용자 삭제 실패");
        },
      }
    );
  };

  return {
    onDeleteMember,
  };
};

export default useDeleteMember;
