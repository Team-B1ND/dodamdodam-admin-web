import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useDeletePermissionMutation } from "quries/authority/permission.query";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { deletePermissionParam } from "repositories/authority/authorityRepository.param";

const useDeletePermission = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();

  const deletePermissionMutation = useDeletePermissionMutation();

  const onDeletePermission = ({
    memberId,
    permission,
  }: deletePermissionParam) => {
    if (!id) {
      return;
    }

    if (deletePermissionMutation.isLoading) {
      return;
    }

    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    deletePermissionMutation.mutate(
      { memberId, permission },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("권한 삭제 성공");
          queryClient.invalidateQueries("permission/my");
          queryClient.invalidateQueries("permission/member");
        },
        onError: () => {
          B1ndToast.showError("권한 삭제 실패");
        },
      }
    );
  };

  return {
    onDeletePermission,
  };
};

export default useDeletePermission;
