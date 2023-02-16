import { useQuery } from "react-query";
import timeTableRepository from "../../repositories/timeTable/timeTableRepository";

export const useGetTimeTable = () =>
  useQuery("timeTable/getTimeTable", () => timeTableRepository.getTimeTables());
