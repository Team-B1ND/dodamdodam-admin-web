import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
import { useDeletePlaceTypeMutation } from "../../quries/place/place.query";

const useDeletePlaceType = () => {
  const queryClient = useQueryClient();

  const deletePlaceTypeMutation = useDeletePlaceTypeMutation();

  const onDeletePlaceType = (id: number) => {
    if (deletePlaceTypeMutation.isLoading) {
      return;
    }

    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    deletePlaceTypeMutation.mutate(
      { id },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("장소 분류 삭제 성공");
          queryClient.invalidateQueries("place/getPlaceTypes");
        },
        onError: () => {
          B1ndToast.showError("장소 분류 삭제 실패");
        },
      }
    );
  };

  return { onDeletePlaceType };
};

export default useDeletePlaceType;
