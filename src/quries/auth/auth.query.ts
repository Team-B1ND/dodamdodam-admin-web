import { useMutation } from "react-query";
import { postLoginParam } from "../../repositories/auth/authRepository.param";
import AuthRepository from "../../repositories/auth/AuthRepository";

export const usePostLoginMutation = () => {
  const mutation = useMutation(({ id, pw }: postLoginParam) =>
    AuthRepository.postLogin({ id, pw })
  );

  return mutation;
};
