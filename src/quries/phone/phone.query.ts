import { AxiosError } from "axios";
import { UseQueryOptions, useMutation, useQuery } from "react-query";
import { getAllMembersResponse } from "repositories/member/memberRepository.res";
import phoneRepository from "repositories/phone/phoneRepository";
import { patchParentPhoneNumberParam } from "repositories/phone/phoneRepository.param";

export const usePatchParentPhoneMutation = () => {
  const mutation = useMutation(({ id, parentPhone }: patchParentPhoneNumberParam) =>
    phoneRepository.patchParentPhoneNumber({ id, parentPhone }),
  );
  return mutation;
};
