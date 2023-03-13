import { B1ndToast } from "@b1nd/b1nd-toastify";
import { usePostAssignAllPermissionMutation } from "quries/authority/permission.query";
import { useQueryClient } from "react-query";
import { postAssignAllPermissionParam } from "repositories/authority/authorityRepository.param";

const useAssignAllPermission = () => {
  const queryClient = useQueryClient();

  const assignAllPermissionMutation = usePostAssignAllPermissionMutation();

  const onAssignAllPermission = ({
    memberId,
  }: postAssignAllPermissionParam) => {
    if (assignAllPermissionMutation.isLoading) {
      return;
    }

    if (!window.confirm("정말 다 추가하시겠습니까?")) {
      return;
    }

    assignAllPermissionMutation.mutate(
      { memberId },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("권한 모두 추가 성공");
          queryClient.invalidateQueries("permission/my");
          queryClient.invalidateQueries("permission/member");
        },
        onError: () => {
          B1ndToast.showError("권한 모두 추가 실패");
        },
      }
    );
  };

  return { onAssignAllPermission };
};

export default useAssignAllPermission;
