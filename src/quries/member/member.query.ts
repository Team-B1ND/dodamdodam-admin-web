import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import MemberRepository from "../../repositories/member/MemberRepository";
import {
  deleteMemberParam,
  getMemberByIdParam,
  getTeacherByIdParam,
} from "../../repositories/member/memberRepository.param";
import {
  getMemberByIdResponse,
  getMembersResponse,
  getMyMemberResponse,
  getTeacherByIdResponse,
} from "../../repositories/member/memberRepository.res";

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

export const useGetMemberById = (
  { id }: getMemberByIdParam,
  options?: UseQueryOptions<
    getMemberByIdResponse,
    AxiosError,
    getMemberByIdResponse,
    ["member/search/id", string]
  >
) =>
  useQuery(
    ["member/search/id", id],
    () => MemberRepository.getMemberById({ id }),
    {
      ...options,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 60,
      enabled: !!id,
    }
  );

export const useGetTeacherById = (
  { id }: getTeacherByIdParam,
  options?: UseQueryOptions<
    getTeacherByIdResponse,
    AxiosError,
    getTeacherByIdResponse,
    ["member/teacher/id", number]
  >
) =>
  useQuery(
    ["member/teacher/id", id],
    () => MemberRepository.getTeacherById({ id }),
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
    "member/geMytMember"
  >
) =>
  useQuery("member/geMytMember", () => MemberRepository.getMyMember(), {
    ...options,
  });

export const useDeleteMemberMutation = () => {
  const mutation = useMutation(({ id }: deleteMemberParam) =>
    MemberRepository.deleteMember({ id })
  );

  return mutation;
};
