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

  const resetTimeTable = useCallback(() => {
    if (timeTableTypeName !== "타입 선택" || timeTableName !== "") {
      setTimeTableTypeName("타입 선택");
      setTimeTableName("");
    }
  }, [timeTableTypeName, timeTableName]);

  const create = () => {
    if (timeTableName === "") {
      B1ndToast.showError("시간표 이름을 입력해 주세요");
      return;
    } else if (timeTableTypeName === "타입 선택") {
      B1ndToast.showError("시간표 타입을 입력해 주세요");
      return;
    } else if (timeTableStartTime === "") {
      B1ndToast.showError("시작 시간을 입력해 주세요");
      return;
    } else if (timeTableEndTime === "") {
      B1ndToast.showError("종료 시간을 입력해 주세요");
      return;
    } else if (timeTableStartTime >= timeTableEndTime) {
      B1ndToast.showError(
        "종료 시간 시작 시간 보다 빠릅니다. 다시 입력해 주세요"
      );
      return;
    }
    postCreateTimeTable.mutate(
      {
        type: timeTableTypeName,
        name: timeTableName,
        startTime: timeTableStartTime,
        endTime: timeTableEndTime,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("시간표 추가 성공");
          resetTimeTable();
        },
        onError: () => {
          B1ndToast.showError("시간표 추가 실패");
        },
      }
    );
  };

  return {
    timeTableTypeName,
    setTimeTableTypeName,
    onChangeTimeTableName,
    timeTableName,
    resetTimeTable,
    create,
    setTimeTableStartTime,
    setTimeTableEndTime,
    timeTableStartTime,
    timeTableEndTime,
  };
};

export default usePostCreateTimeTable;
