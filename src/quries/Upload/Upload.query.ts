import { PostUploadParams } from "../../../dodamdodam-bannertool-web/src/repositories/UploadRepository/UploadRepository";
import UploadRepositoryImpl from "../../../dodamdodam-bannertool-web/src/repositories/UploadRepository/UploadRepositoryImpl";
import { useMutation } from "react-query";

export const useUploadImageMutation = () => {
  const mutation = useMutation(({ formData }: PostUploadParams) =>
    UploadRepositoryImpl.postUpload({ formData })
  );
  return mutation;
};
