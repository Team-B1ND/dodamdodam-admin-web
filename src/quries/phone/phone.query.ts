import { AxiosError } from "axios";
import { UseQueryOptions, useMutation, useQuery } from "react-query";
import { getAllMembersResponse } from "repositories/MemberRepository/memberRepository.res";
import phoneRepository from "repositories/PhoneRepository/phoneRepository";
import { patchParentPhoneNumberParam } from "repositories/PhoneRepository/phoneRepository.param";

export const usePatchParentPhoneMutation = () => {
  const mutation = useMutation(({ id, parentPhone }: patchParentPhoneNumberParam) =>
    phoneRepository.patchParentPhoneNumber({ id, parentPhone }),
  );
  return mutation;
};
