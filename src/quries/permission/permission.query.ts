import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import AuthorityRepository from "repositories/authority/AuthorityRepository";
import { getMyPermissionResponse } from "repositories/authority/authorityRepository.res";

export const useGetMyPermissionQuery = (
  options?: UseQueryOptions<
    getMyPermissionResponse,
    AxiosError,
    getMyPermissionResponse,
    "permission/my"
  >
) =>
  useQuery("permission/my", () => AuthorityRepository.getMyPermission(), {
    ...options,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 60,
  });
