import axios from "axios";
import {
  CreateTimeTableData,
  TimeTablesDataResponse,
} from "./timeTableRepository.param";

class TimeTableRepository {
  public async getTimeTables(): Promise<TimeTablesDataResponse> {
    const { data } = await axios.get("time/tables");
    return data;
  }

  public async postCreateTimeTable(createTimeTableData: CreateTimeTableData) {
    const { data } = await axios.post("time/tables", createTimeTableData);
    return data;
  }
}

export default new TimeTableRepository();
