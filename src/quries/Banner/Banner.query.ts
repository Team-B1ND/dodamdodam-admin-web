import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { BannersResponse } from "../../types/Banner/banner.type";
import BannerRepositoryImpl from "../../repositories/BannerRepository/BannerRepositoryImpl";
import {
  DeleteBannerByIdParam,
  PatchActiveBannersParam,
  PatchDeativateByIdParam,
  PostBannerParam,
} from "../../repositories/BannerRepository/BannerRepository";
import { QUERY_KEYS } from "quries/QueryKey";

export const useGetActiveBannersQuery = (
  options?: UseQueryOptions<BannersResponse, AxiosError, BannersResponse, [string]>,
): UseQueryResult<BannersResponse, AxiosError> =>
  useQuery([QUERY_KEYS.banner.getActive], () => BannerRepositoryImpl.getActiveBanners(), options);

export const useUploadBannerMutation = () => {
  const mutation = useMutation((bannerData: PostBannerParam) => BannerRepositoryImpl.postBanners(bannerData));
  return mutation;
};

export const useGetBannersQuery = (
  options?: UseQueryOptions<BannersResponse, AxiosError, BannersResponse, [string]>,
): UseQueryResult<BannersResponse, AxiosError> =>
  useQuery([QUERY_KEYS.banner.get], () => BannerRepositoryImpl.getBanners(), options);

export const useActiveBannersMutation = () => {
  const mutation = useMutation(({ id }: PatchActiveBannersParam) => BannerRepositoryImpl.patchActiveBanners({ id }));
  return mutation;
};

export const useDeativeBannersMutation = () => {
  const mutation = useMutation(({ id }: PatchDeativateByIdParam) => BannerRepositoryImpl.patchDeativateById({ id }));
  return mutation;
};

export const useDeleteBannerMutation = () => {
  const mutation = useMutation(({ id }: DeleteBannerByIdParam) => BannerRepositoryImpl.deleteBannerById({ id }));
  return mutation;
};
