import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useDeletePermissionMutation } from "quries/authority/permission.query";
import { useQueryClient } from "react-query";
import {
  deleteAllPermissionParam,
  deletePermissionParam,
} from "repositories/authority/authorityRepository.param";

const useDeletePermission = () => {
  const queryClient = useQueryClient();

  const deletePermissionMutation = useDeletePermissionMutation();

  const onDeletePermission = ({
    memberId,
    permission,
  }: deletePermissionParam) => {
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

  const onAllDeletePermission = ({
    memberId,
    permissions,
  }: deleteAllPermissionParam) => {
    if (deletePermissionMutation.isLoading) {
      return;
    }

    if (!window.confirm("정말 다 삭제하시겠습니까?")) {
      return;
    }

    let successCount: number = 0;

    function sucessAllDeletePermission() {
      B1ndToast.showSuccess("모든 권한 삭제 성공");
      queryClient.invalidateQueries("permission/my");
      queryClient.invalidateQueries("permission/member");
    }

    for (let i = 0; i < permissions.length; i++) {
      deletePermissionMutation.mutate(
        {
          memberId,
          permission: permissions[i],
        },
        {
          onSuccess: () => {
            successCount++;
          },
          onError: () => {
            B1ndToast.showError(
              `${successCount}개 권한 삭제 완료 후 권한 삭제 실패`
            );
          },
        }
      );
      if (successCount === permissions.length) {
        sucessAllDeletePermission();
      }
    }
  };

  return {
    onDeletePermission,
    onAllDeletePermission,
  };
};

export default useDeletePermission;
