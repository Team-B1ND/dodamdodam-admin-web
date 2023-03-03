import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import AuthorityRepository from "repositories/authority/AuthorityRepository";
import { getPermissionByMemberParam } from "repositories/authority/authorityRepository.param";
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
