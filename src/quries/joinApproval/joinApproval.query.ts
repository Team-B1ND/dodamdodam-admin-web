import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import { patchJoinMemberIdParam } from "repositories/joinApproval/joinApproval.param";
import { getNotAllowMemberResponse } from "repositories/joinApproval/joinApproval.res";
import JoinApprovalRepository from "repositories/joinApproval/joinApprovalRepository";

export const usePatchMemberJoinApproval = () => {
  const mutation = useMutation(({ id }: patchJoinMemberIdParam) =>
    JoinApprovalRepository.patchMemberJoinApproval({ id })
  );
  return mutation;
};

export const useDeleteMemberJoinDeny = () => {
  const mutation = useMutation(({ id }: patchJoinMemberIdParam) =>
    JoinApprovalRepository.deleteMemberJoinApprovalDeny({ id })
  );
  return mutation;
};

export const useDeactivateMemberMutation = () => {
  const mutation = useMutation(({ id }: patchJoinMemberIdParam) =>
    JoinApprovalRepository.patchDeactivateMember({ id })
  );
  return mutation;
};

export const useGetNotJoinApprovalAllowMember = (
  options?: UseQueryOptions<
    getNotAllowMemberResponse,
    AxiosError,
    getNotAllowMemberResponse,
    "joinApproval/getNotAllowMember"
  >
) =>
  useQuery(
    "joinApproval/getNotAllowMember",
    () => JoinApprovalRepository.getNotJoinApprovalAllowMember(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );
