import { B1ndToast } from "@b1nd/b1nd-toastify";
import {
  useGetPermissionByMemberIdQuery,
  usePostAssignAllPermissionMutation,
} from "quries/authority/permission.query";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { postAssignAllPermissionParam } from "repositories/authority/authorityRepository.param";

const useAssignAllPermission = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();

  const assignAllPermissionMutation = usePostAssignAllPermissionMutation();

  const { data: memberPermissions } = useGetPermissionByMemberIdQuery({
    memberId: id || "",
  });
  const { data: allPermissions } = useGetPermissionByMemberIdQuery({
    memberId: "admin",
  });

  const onAssignAllPermission = ({
    memberId,
  }: postAssignAllPermissionParam) => {
    if (!id) {
      return;
    }
    if (memberPermissions && allPermissions) {
      if (memberPermissions.data.length >= allPermissions.data.length) {
        alert("더 이상 부여할 수 있는 권한이 없습니다.");
        return;
      }
    }

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
