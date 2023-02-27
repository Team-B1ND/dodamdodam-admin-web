import { B1ndToast } from "@b1nd/b1nd-toastify";
import { usePostCreateTimeTableMutation } from "quries/timeTable/timeTable.query";
import { ChangeEvent, useState, useCallback } from "react";

const usePostCreateTimeTable = () => {
  const [timeTableTypeName, setTimeTableTypeName] = useState("타입 선택");
  const [timeTableName, setTimeTableName] = useState("");
  const [timeTableStartTime, setTimeTableStartTime] = useState("");
  const [timeTableEndTime, setTimeTableEndTime] = useState("");

  const postCreateTimeTable = usePostCreateTimeTableMutation();

  const onChangeTimeTableName = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeTableName(e.target.value);
  };

  const dateH = new Date().getHours().toString();
  const dateM = new Date().getMinutes().toString();

  const create = () => {
    if (timeTableName === "") {
      B1ndToast.showError("시간표 이름을 입력해 주세요");
      return;
    } else if (timeTableTypeName === "타입 선택") {
      B1ndToast.showError("시간표 타입을 입력해 주세요");
      return;
    }

    postCreateTimeTable.mutate(
      {
        type: timeTableTypeName,
        name: timeTableName,
        startTime: dateH,
        endTime: dateM,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("시간표 추가 성공");
        },
        onError: () => {
          B1ndToast.showError("시간표 추가 실패");
        },
      }
    );
  };

  const resetTimeTable = useCallback(() => {
    if (timeTableTypeName !== "타입 선택" || timeTableName !== "") {
      setTimeTableTypeName("타입 선택");
      setTimeTableName("");
    }
  }, [timeTableTypeName, timeTableName]);

  return {
    timeTableTypeName,
    setTimeTableTypeName,
    onChangeTimeTableName,
    timeTableName,
    resetTimeTable,
    create,
  };
};

export default usePostCreateTimeTable;
