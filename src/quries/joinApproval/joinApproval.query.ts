import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import { patchJoinMemberIdParam } from "repositories/joinApproval/joinApproval.param";
import { getNotAllowMemberResponse } from "repositories/joinApproval/joinApproval.res";
import JoinApprovalRepository from "repositories/joinApproval/joinApprovalRepository";

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
