import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useDeleteAllPermissionMutation } from "quries/authority/permission.query";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { deleteAllPermissionParam } from "repositories/authority/authorityRepository.param";

const useDeleteAllPermission = () => {
  const queryClient = useQueryClient();

  const deleteAllPermissionMutation = useDeleteAllPermissionMutation();

  const onDeleteAllPermission = ({ memberId }: deleteAllPermissionParam) => {
    if (deleteAllPermissionMutation.isLoading) {
      return;
    }

    if (!window.confirm("정말 다 삭제하시겠습니까?")) {
      return;
    }

    deleteAllPermissionMutation.mutate(
      { memberId },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("권한 모두 삭제 성공");
          queryClient.invalidateQueries("permission/my");
          queryClient.invalidateQueries("permission/member");
        },
        onError: () => {
          B1ndToast.showError("권한 모두 삭제 실패");
        },
      }
    );
  };

  return { onDeleteAllPermission };
};

export default useDeleteAllPermission;
