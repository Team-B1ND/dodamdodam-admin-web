import { customAxios } from "../../lib/axios/customAxios";
import {
  getTimeTablesDataResponse,
  getTimeTablesTypeResponse,
} from "./timeTableRepository.res";
import {
  createTimeTableDataParam,
  modifyTimeTableDataParam,
  deleteTimeTableParam,
} from "./timeTableRepository.param";

class TimeTableRepository {
  public async getTimeTables(): Promise<getTimeTablesDataResponse> {
    const { data } = await customAxios.get("time/tables");
    return data;
  }

  public async postCreateTimeTable(
    createTimeTableData: createTimeTableDataParam
  ): Promise<void> {
    await customAxios.post("time/tables", createTimeTableData);
  }

  public async deleteTimeTable({ id }: deleteTimeTableParam): Promise<void> {
    await customAxios.delete(`time/tables/${id}`);
  }

  public async patchTimeTable(
    modifyTimeTableData: modifyTimeTableDataParam
  ): Promise<void> {
    await customAxios.patch(
      `time/tables/${modifyTimeTableData.id}`,
      modifyTimeTableData
    );
  }
}

export default new TimeTableRepository();
