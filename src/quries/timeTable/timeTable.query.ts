import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import {
  createTimeTableDataParam,
  deleteTimeTableParam,
  modifyTimeTableDataParam,
} from "repositories/timeTable/timeTableRepository.param";
import { getTimeTablesDataResponse } from "repositories/timeTable/timeTableRepository.res";
import TimeTableRepository from "../../repositories/timeTable/timeTableRepository";

export const useGetTimeTablesQuery = (
  options?: UseQueryOptions<
    getTimeTablesDataResponse,
    AxiosError,
    getTimeTablesDataResponse,
    "timeTable/getTimeTable"
  >
) =>
  useQuery(
    "timeTable/getTimeTable",
    () => TimeTableRepository.getTimeTables(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useCreateTimeTableMutation = () => {
  const mutation = useMutation(
    (createTimeTableData: createTimeTableDataParam) =>
      TimeTableRepository.postCreateTimeTable(createTimeTableData)
  );
  return mutation;
};

export const useDeleteTimeTableMutation = () => {
  const mutation = useMutation(({ id }: deleteTimeTableParam) =>
    TimeTableRepository.deleteTimeTable({ id })
  );
  return mutation;
};

export const usePatchTimeTableMutation = () => {
  const mutation = useMutation(
    ({ id, name, startTime, endTime, type }: modifyTimeTableDataParam) =>
      TimeTableRepository.patchTimeTable({ id, name, startTime, endTime, type })
  );
  return mutation;
};
