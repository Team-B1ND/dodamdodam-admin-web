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
    "classRoom/getClassRooms"
  >
) =>
  useQuery(
    "classRoom/getClassRooms",
    () => ClassRoomRepository.getClassRooms(),
    { ...options, staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 60 }
  );

export const useGetClassRoomQuery = (
  { id }: getClassRoomParam,
  options?: UseQueryOptions<
    getClassRoomResponse,
    AxiosError,
    getClassRoomResponse,
    ["classRoom/getClassRoom", number]
  >
) =>
  useQuery(
    ["classRoom/getClassRoom", id],
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
    ({ id, grade, room, placeId }: putClassRoomParam) =>
      ClassRoomRepository.putClassRoom({ id, grade, room, placeId })
  );

  return mutation;
};

export const useDeleteClassRoomMutation = () => {
  const mutation = useMutation(({ id }: deleteClassRoomParam) =>
    ClassRoomRepository.deleteClassRoom({ id })
  );

  return mutation;
};
