import { B1ndToast } from "@b1nd/b1nd-toastify";
import { usePostAssignPermissionMutation } from "quries/authority/permission.query";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { postAssignPermissionParam } from "repositories/authority/authorityRepository.param";

const useAssignPermission = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();

  const assignPermissionMutation = usePostAssignPermissionMutation();

  const onAssignPermission = ({
    memberId,
    permission,
  }: postAssignPermissionParam) => {
    if (!id) {
      return;
    }

    if (assignPermissionMutation.isLoading) {
      return;
    }

    if (!window.confirm("정말 추가하시겠습니까?")) {
      return;
    }

    assignPermissionMutation.mutate(
      { memberId, permission },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("권한 추가 성공");
          queryClient.invalidateQueries("permission/my");
          queryClient.invalidateQueries("permission/member");
        },
        onError: () => {
          B1ndToast.showError("권한 추가 실패");
        },
      }
    );
  };

  return {
    onAssignPermission,
  };
};

export default useAssignPermission;
