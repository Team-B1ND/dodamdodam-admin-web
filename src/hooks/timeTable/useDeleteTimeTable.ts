import { useDeleteTimeTableMutation } from "quries/timeTable/timeTable.query";
import { useQueryClient } from "react-query";
import { B1ndToast } from "@b1nd/b1nd-toastify";

const useDeleteTimeTable = () => {
  const queryClient = useQueryClient();
  const deleteTimeTableMutation = useDeleteTimeTableMutation();

  const deleteTimeTable = (timeTableId: number) => {
    deleteTimeTableMutation.mutate(
      { id: timeTableId },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("삭제 성공");
          queryClient.invalidateQueries("timeTable/getTimeTable");
        },
        onError: () => {
          B1ndToast.showError("삭제 실패");
        },
      }
    );
  };
  return { deleteTimeTable };
};

export default useDeleteTimeTable;
