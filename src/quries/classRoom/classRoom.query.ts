import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import ClassRoomRepository from "../../repositories/classRoom/ClassRoomRepository";
import {
  deleteClassRoomParam,
  getClassRoomParam,
  postClassRoomParam,
  putClassRoomParam,
} from "../../repositories/classRoom/classRoomRepository.param";
import {
  getClassRoomResponse,
  getClassRoomsResponse,
} from "../../repositories/classRoom/classRoomRepository.res";

export const useGetClassRoomsQuery = (
  options?: UseQueryOptions<
    getClassRoomsResponse,
    AxiosError,
    getClassRoomsResponse,
    "classRoom/useGetClassRooms"
  >
) =>
  useQuery(
    "classRoom/useGetClassRooms",
    () => ClassRoomRepository.getClassRooms(),
    { ...options, staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 60 }
  );

export const useGetClassRoomQuery = (
  { id }: getClassRoomParam,
  options?: UseQueryOptions<
    getClassRoomResponse,
    AxiosError,
    getClassRoomResponse,
    ["classRoom/useGetClassRoom", number]
  >
) =>
  useQuery(
    ["classRoom/useGetClassRoom", id],
    () => ClassRoomRepository.getClassRoom({ id }),
    {
      ...options,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const usePostClassRoomMutation = () => {
  const mutation = useMutation(({ grade, placeId, room }: postClassRoomParam) =>
    ClassRoomRepository.postClassRoom({ grade, placeId, room })
  );

  return mutation;
};

export const usePutClassRoomMutation = () => {
  const mutation = useMutation(
    ({ id, classRoomId, studentId }: putClassRoomParam) =>
      ClassRoomRepository.putClassRoom({ id, classRoomId, studentId })
  );

  return mutation;
};

export const useDeleteClassRoomMutation = () => {
  const mutation = useMutation(({ id }: deleteClassRoomParam) =>
    ClassRoomRepository.deleteClassRoom({ id })
  );

  return mutation;
};
