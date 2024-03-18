import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import { patchJoinMemberIdParam } from "repositories/joinApproval/joinApproval.param";
import { getNotAllowMemberResponse } from "repositories/joinApproval/joinApproval.res";
import JoinApprovalRepository from "repositories/joinApproval/joinApprovalRepository";

export const usePostMemberJoinApproval = () => {
  const mutation = useMutation(({ id }: patchJoinMemberIdParam) =>
    JoinApprovalRepository.PostMemberJoinApproval({ id })
  );
  return mutation;
};

export const usePostMemberJoinDeny = () => {
  const mutation = useMutation(({ id }: patchJoinMemberIdParam) =>
    JoinApprovalRepository.PostMemberJoinApprovalDeny({ id })
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
    () => JoinApprovalRepository.GetNotJoinApprovalAllowMember(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );
