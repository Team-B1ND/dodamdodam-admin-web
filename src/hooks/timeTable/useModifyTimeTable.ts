import { ChangeEvent, useState, useCallback, useEffect } from "react";
import { useGetTimeTableQuery } from "quries/timeTable/timeTable.query";

const useModifyTimeTable = () => {
  const [timeTableTypeName, setTimeTableTypeName] = useState("타입 선택");
  const [timeTableName, setTimeTableName] = useState("");
  const [timeTableId, setTimeTableId] = useState(-1);
  const [timeTableStartTime, setTimeTableStartTime] = useState("");
  const [timeTableEndTime, setTimeTableEndTime] = useState("");

  //   const { data: serverTimeTableTypesData } = useGetTimeTableQuery();

  //     const resetTimeTable = useCallback(() => {
  //         const firstTimeTable = serverTimeTableTypesData?.data[0];
  //           setTimeTableTypeName(firstTimeTable?.type);
  //           setTimeTableName(firstTimeTable?.name);
  //       }, []);

  //       useEffect(() => {
  //         if (serverTimeTableTypesData) {
  //           resetTimeTable();
  //         }
  //       }, [resetTimeTable, serverTimeTableTypesData]);

  return {};
};

export default useModifyTimeTable;
