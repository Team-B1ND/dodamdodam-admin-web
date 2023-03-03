import { ChangeEvent, useCallback, useState } from "react";
import { usePatchTimeTableMutation } from "quries/timeTable/timeTable.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { deleteTimeTableParam } from "repositories/timeTable/timeTableRepository.param";

const useModifyTimeTable = () => {
  const [timeTableModifyTypeName, setTimeTableModifyTypeName] =
    useState("타입 선택");
  const [timeTableModifyName, setTimeTableModifyName] = useState("");
  const [timeTableModifyStartTime, setTimeTableModifyStartTime] = useState("");
  const [timeTableModifyEndTime, setTimeTableModifyEndTime] = useState("");

  const patchTimeTable = usePatchTimeTableMutation();
  const onChangeTimeTableName = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeTableModifyName(e.target.value);
  };

  const resetTimeTable = useCallback(() => {
    if (timeTableModifyTypeName !== "타입 선택" || timeTableModifyName !== "") {
      setTimeTableModifyTypeName("타입 선택");
      setTimeTableModifyName("");
    }
  }, [timeTableModifyTypeName, timeTableModifyName]);

  const modify = ({ id }: deleteTimeTableParam) => {
    if (timeTableModifyName === "") {
      B1ndToast.showError("시간표 이름을 입력해 주세요");
      return;
    }
    if (timeTableModifyTypeName === "타입 선택") {
      B1ndToast.showError("시간표 타입을 입력해 주세요");
      return;
    }
    if (timeTableModifyStartTime === "") {
      B1ndToast.showError("시작 시간을 입력해 주세요");
      return;
    }
    if (timeTableModifyEndTime === "") {
      B1ndToast.showError("종료 시간을 입력해 주세요");
      return;
    }
    if (timeTableModifyStartTime >= timeTableModifyEndTime) {
      B1ndToast.showError(
        "종료 시간 시작 시간 보다 빠릅니다. 다시 입력해 주세요"
      );
      return;
    }
    patchTimeTable.mutate(
      {
        id: id,
        name: timeTableModifyName,
        startTime: timeTableModifyStartTime,
        endTime: timeTableModifyEndTime,
        type: timeTableModifyTypeName,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("시간표 수정 성공");
          resetTimeTable();
        },
        onError: () => {
          B1ndToast.showError("시간표 수정 실패");
        },
      }
    );
  };
  return {
    resetTimeTable,
    modify,
    onChangeTimeTableName,
    setTimeTableModifyTypeName,
    timeTableModifyTypeName,
    setTimeTableModifyStartTime,
    setTimeTableModifyEndTime,
  };
};

export default useModifyTimeTable;
