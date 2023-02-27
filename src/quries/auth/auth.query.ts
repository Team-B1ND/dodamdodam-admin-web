import { useMutation } from "react-query";
import { postLoginParam } from "../../repositories/auth/aurhRepository.param";
import authRepository from "../../repositories/auth/AuthRepository";

export const usePostLoginMutation = () => {
  const mutation = useMutation(({ id, pw }: postLoginParam) =>
    authRepository.postLogin({ id, pw })
  );

  return mutation;
};
