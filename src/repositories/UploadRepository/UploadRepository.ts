import { Response } from "../../types/util/Response.type";

export interface UploadRepository {
  postUpload({ formData }: PostUploadParams): Promise<PostUploadResponse>;
}

export interface PostUploadParams {
  formData: FormData;
}

export interface PostUploadResponse extends Response {
  data: string;
}