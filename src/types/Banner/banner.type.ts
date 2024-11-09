import { Response } from "../util/Response.type";

export interface Banner {
  expireAt: string;
  readonly id: number;
  imageUrl: string;
  redirectUrl: string;
  status: "ACTIVE" | "DEACTIVETED";
  title: string;
}

export interface BannersResponse extends Response {
  data: Banner[];
}
