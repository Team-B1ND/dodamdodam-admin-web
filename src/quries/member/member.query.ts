import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import MemberRepository from "../../repositories/MemberRepository/MemberRepository";
import { getMebmerByStatus, getMemberByIdParam } from "../../repositories/MemberRepository/memberRepository.param";
import {
  getMemberByIdResponse,
  getAllMembersResponse,
  getMyMemberResponse,
  getBroadcastClubMemberByIdResponse,
} from "../../repositories/MemberRepository/memberRepository.res";
import { activeStatus } from "repositories/JoinApprovalRepository/joinApproval.param";
import { QUERY_KEYS } from "quries/QueryKey";

export const useGetMemberByStatus = (
  { status }: getMebmerByStatus,
  options?: UseQueryOptions<
    getAllMembersResponse,
    AxiosError,
    getAllMembersResponse,
    [string, activeStatus, Location]
  >,
) =>
  useQuery([QUERY_KEYS.member.getMember, status, window.location], () => MemberRepository.getMembers({ status }), {
    ...options,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
  });

export const useGetMemberById = (
  { id }: getMemberByIdParam,
  options?: UseQueryOptions<getMemberByIdResponse, AxiosError, getMemberByIdResponse, [string, string]>,
) =>
  useQuery([QUERY_KEYS.member.getMemberById, id], () => MemberRepository.getMemberById({ id }), {
    ...options,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 60,
    enabled: !!id,
  });

export const useGetMyMemberQuery = (
  options?: UseQueryOptions<getMyMemberResponse, AxiosError, getMyMemberResponse, "member/getMytMember">,
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
  >,
) => {
  return useQuery(
    ["member/getBroadcastClubMemberById", id],
    () => MemberRepository.getBroadcastClubMemberById({ id }),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
      ...options,
    },
  );
};

export const useGrantBroadcastClubMemberMutation = () => {
  const mutation = useMutation(({ id }: getMemberByIdParam) => MemberRepository.grantBroadcastClubMember({ id }));
  return mutation;
};
