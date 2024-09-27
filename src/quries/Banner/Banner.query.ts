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

export const useGetActiveBannersQuery = (
  options?: UseQueryOptions<BannersResponse, AxiosError, BannersResponse, ["banner/getBanner"]>,
): UseQueryResult<BannersResponse, AxiosError> =>
  useQuery(["banner/getBanner"], () => BannerRepositoryImpl.getActiveBanners(), options);

export const useUploadBannerMutation = () => {
  const mutation = useMutation((bannerData: PostBannerParam) => BannerRepositoryImpl.postBanners(bannerData));
  return mutation;
};

export const useGetBannersQuery = (
  options?: UseQueryOptions<BannersResponse, AxiosError, BannersResponse, ["banner/getBanner"]>,
): UseQueryResult<BannersResponse, AxiosError> =>
  useQuery(["banner/getBanner"], () => BannerRepositoryImpl.getBanners(), options);

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
