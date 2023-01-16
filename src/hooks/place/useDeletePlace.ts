import { useQueryClient } from "react-query";
import { useDeletePlaceMutation } from "../../quries/place/place.query";

const useDeletePlace = () => {
  const queryClient = useQueryClient();

  const deletePlaceMutation = useDeletePlaceMutation();

  const onDeletePlace = (id: number) => {
    if (deletePlaceMutation.isLoading) {
      return;
    }

    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    deletePlaceMutation.mutate(
      { id },
      {
        onSuccess: () => {
          window.alert("장소 삭제 성공");
          queryClient.invalidateQueries("place/getPlaces");
        },
        onError: () => {
          window.alert("장소 삭제 실패");
        },
      }
    );
  };

  return { onDeletePlace };
};

export default useDeletePlace;
