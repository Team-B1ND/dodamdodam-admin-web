import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import MemberRepository from "../../repositories/member/MemberRepository";
import { deleteMemberParam } from "../../repositories/member/memberRepository.param";
import { getMembersResponse } from "../../repositories/member/memberRepository.res";

export const useGetMembersQuery = (
  options?: UseQueryOptions<
    getMembersResponse,
    AxiosError,
    getMembersResponse,
    "member/getMembers"
  >
) =>
  useQuery("member/getMembers", () => MemberRepository.getMembers(), {
    ...options,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 60,
  });

export const useDeleteMemberMutation = () => {
  const mutation = useMutation(({ id }: deleteMemberParam) =>
    MemberRepository.deleteMember({ id })
  );

  return mutation;
};
