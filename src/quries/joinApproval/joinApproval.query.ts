import { useMutation } from "react-query";
import { patchJoinMemberIdParam } from "repositories/JoinApprovalRepository/joinApproval.param";
import JoinApprovalRepository from "repositories/JoinApprovalRepository/joinApprovalRepository";

export const usePatchMemberStatus = () => {
  const mutation = useMutation(({ id, activeStatus }: patchJoinMemberIdParam) =>
    JoinApprovalRepository.patchMemberStatus({ id, activeStatus }),
  );
  return mutation;
};

export const useDeleteMemberJoinDeny = () => {
  const mutation = useMutation(({ id, activeStatus }: patchJoinMemberIdParam) =>
    JoinApprovalRepository.deleteMemberJoinApprovalDeny({ id, activeStatus }),
  );
  return mutation;
};
