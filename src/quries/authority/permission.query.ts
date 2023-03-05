import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import AuthorityRepository from "repositories/authority/AuthorityRepository";
import {
  deletePermissionParam,
  getPermissionByMemberParam,
  postAssignPermissionParam,
} from "repositories/authority/authorityRepository.param";
import { getPermissionResponse } from "repositories/authority/authorityRepository.res";

export const useGetMyPermissionQuery = (
  options?: UseQueryOptions<
    getPermissionResponse,
    AxiosError,
    getPermissionResponse,
    "permission/my"
  >
) =>
  useQuery("permission/my", () => AuthorityRepository.getMyPermission(), {
    ...options,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetPermissionByMemberIdQuery = (
  { memberId }: getPermissionByMemberParam,
  options?: UseQueryOptions<
    getPermissionResponse,
    AxiosError,
    getPermissionResponse,
    ["permission/member", string]
  >
) =>
  useQuery(
    ["permission/member", memberId],
    () => AuthorityRepository.getPermissionByMemberId({ memberId }),
    {
      ...options,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 60,
      enabled: !!memberId,
    }
  );

export const usePostAssignPermissionMutation = () => {
  const mutation = useMutation(
    ({ memberId, permission }: postAssignPermissionParam) =>
      AuthorityRepository.postAssignPermission({ memberId, permission })
  );
  return mutation;
};

export const useDeletePermissionMutation = () => {
  const mutation = useMutation(
    ({ memberId, permission }: deletePermissionParam) =>
      AuthorityRepository.deletePermission({ memberId, permission })
  );
  return mutation;
};
