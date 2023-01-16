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
          window.alert("장소 분류 삭제 성공");
          queryClient.invalidateQueries("place/getPlaceTypes");
        },
        onError: () => {
          window.alert("장소 분류 삭제 실패");
        },
      }
    );
  };

  return { onDeletePlaceType };
};

export default useDeletePlaceType;
