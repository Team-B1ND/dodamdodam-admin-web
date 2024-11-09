import { PostUploadParams } from "../../repositories/UploadRepository/UploadRepository";
import UploadRepositoryImpl from "../../repositories/UploadRepository/UploadRepositoryImpl";
import { useMutation } from "react-query";

export const useUploadImageMutation = () => {
  const mutation = useMutation(({ formData }: PostUploadParams) =>
    UploadRepositoryImpl.postUpload({ formData })
  );
  return mutation;
};
