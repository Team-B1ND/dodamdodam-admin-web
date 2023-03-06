import { B1ndToast } from "@b1nd/b1nd-toastify";
import { usePostAssignPermissionMutation } from "quries/authority/permission.query";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import {
  postAllAssignPermissionParam,
  postAssignPermissionParam,
} from "repositories/authority/authorityRepository.param";

const useAssignPermission = () => {
  const queryClient = useQueryClient();

  const assignPermissionMutation = usePostAssignPermissionMutation();

  const onAssignPermission = ({
    memberId,
    permission,
  }: postAssignPermissionParam) => {
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

  const onAllAssignPermission = ({
    memberId,
    permissions,
  }: postAllAssignPermissionParam) => {
    if (assignPermissionMutation.isLoading) {
      return;
    }

    if (!window.confirm("정말 다 추가하시겠습니까?")) {
      return;
    }

    let successCount: number = 0;

    function successAllAssignPermission() {
      B1ndToast.showSuccess("모든 권한 추가 성공");
      queryClient.invalidateQueries("permission/my");
      queryClient.invalidateQueries("permission/member");
    }

    for (let i = 0; i < permissions.length; i++) {
      assignPermissionMutation.mutate(
        { memberId, permission: permissions[i] },
        {
          onSuccess: () => {
            successCount++;
          },
          onError: () => {
            B1ndToast.showError(
              `${successCount}개 권한 추가 완료 후 권한 추가 실패`
            );
          },
        }
      );
      if (successCount === permissions.length) {
        successAllAssignPermission();
      }
    }
  };

  return {
    onAssignPermission,
    onAllAssignPermission,
  };
};

export default useAssignPermission;
