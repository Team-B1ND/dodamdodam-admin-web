import { customAxios } from "../../lib/axios/customAxios";
import {
  PostUploadParams,
  PostUploadResponse,
  UploadRepository,
} from "./UploadRepository";

class UploadRepositoryImpl implements UploadRepository {
  public async postUpload({
    formData,
  }: PostUploadParams): Promise<PostUploadResponse> {
    const { data } = await customAxios.post("/upload", formData);
    return data;
  }
}
const uploadRepository = new UploadRepositoryImpl();
export default uploadRepository;