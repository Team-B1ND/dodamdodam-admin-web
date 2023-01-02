import { useMutation } from "react-query";
import { postLoginParam } from "../../repositories/auth/aurhRepository.param";
import authRepository from "../../repositories/auth/authRepository";

export const usePostLoginMutation = () => {
  const mutation = useMutation(({ id, pw }: postLoginParam) =>
    authRepository.postLogin({ id, pw })
  );

  return mutation;
};
