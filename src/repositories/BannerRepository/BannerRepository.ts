import { BannersResponse } from "../../types/Banner/banner.type";

export interface BannerRepository {
  getActiveBanners(): Promise<BannersResponse>;

  postBanners(uploadData: PostBannerParam): Promise<Response>;

  getBanners(): Promise<BannersResponse>;

  patchActiveBanners({ id }: PatchActiveBannersParam): Promise<Response>;

  patchDeativateById({ id }: PatchDeativateByIdParam): Promise<Response>;

  deleteBannerById({ id }: DeleteBannerByIdParam): Promise<Response>;
}

export interface PostBannerParam {
  expireAt: string;
  image: string;
  title: string;
  url: string;
}

export interface PatchActiveBannersParam {
  id: number;
}

export interface PatchDeativateByIdParam {
  id: number;
}

export interface DeleteBannerByIdParam {
  id: number;
}
