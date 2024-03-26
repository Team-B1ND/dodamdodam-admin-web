import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import MemberRepository from "../../repositories/member/MemberRepository";
import {
  deleteMemberParam,
  getMemberByIdParam,
} from "../../repositories/member/memberRepository.param";
import {
  getMemberByIdResponse,
  getAllMembersResponse,
  getMyMemberResponse,
  getBroadcastClubMemberByIdResponse,
} from "../../repositories/member/memberRepository.res";

export const useGetMembersQuery = (
  options?: UseQueryOptions<
    getAllMembersResponse,
    AxiosError,
    getAllMembersResponse,
    "member/getMembers"
  >
) =>
  useQuery("member/getMembers", () => MemberRepository.getMembers(), {
    ...options,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetMemberById = (
  { id }: getMemberByIdParam,
  options?: UseQueryOptions<
    getMemberByIdResponse,
    AxiosError,
    getMemberByIdResponse,
    ["member/getMember", string]
  >
) =>
  useQuery(
    ["member/getMember", id],
    () => MemberRepository.getMemberById({ id }),
    {
      ...options,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 60,
      enabled: !!id,
    }
  );

export const useGetMyMemberQuery = (
  options?: UseQueryOptions<
    getMyMemberResponse,
    AxiosError,
    getMyMemberResponse,
    "member/getMytMember"
  >
) =>
  useQuery("member/getMytMember", () => MemberRepository.getMyMember(), {
    ...options,
  });

export const useGetBroadcastClubMemberByIdQuery = (
  { id }: getMemberByIdParam,
  options?: UseQueryOptions<
    getBroadcastClubMemberByIdResponse,
    AxiosError,
    getBroadcastClubMemberByIdResponse,
    ["member/getBroadcastClubMemberById", string]
  >
) => {
  return useQuery(
    ["member/getBroadcastClubMemberById", id],
    () => MemberRepository.getBroadcastClubMemberById({ id }),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
      ...options,
    }
  );
};

export const useGrantBroadcastClubMemberMutation = () => {
  const mutation = useMutation(({ id }: getMemberByIdParam) =>
    MemberRepository.grantBroadcastClubMember({ id })
  );
  return mutation;
};
