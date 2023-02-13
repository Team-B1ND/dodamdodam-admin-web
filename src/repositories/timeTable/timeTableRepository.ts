import { customAxios } from "../../lib/axios/customAxios";
import {
  CreateTimeTableData,
  TimeTablesDataResponse,
} from "./timeTableRepository.param";

class TimeTableRepository {
  public async getTimeTables(): Promise<TimeTablesDataResponse> {
    const { data } = await customAxios.get("time/tables");
    return data;
  }

  public async postCreateTimeTable(createTimeTableData: CreateTimeTableData) {
    const { data } = await customAxios.post("time/tables", createTimeTableData);
    return data;
  }
}

export default new TimeTableRepository();
