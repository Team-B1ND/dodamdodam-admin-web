import { useMutation } from "react-query";
import { postLoginParam } from "../../repositories/AuthRepository/authRepository.param";
import AuthRepository from "../../repositories/AuthRepository/authRepository";

export const usePostLoginMutation = () => {
  const mutation = useMutation(({ id, pw }: postLoginParam) =>
    AuthRepository.postLogin({ id, pw })
  );

  return mutation;
};
