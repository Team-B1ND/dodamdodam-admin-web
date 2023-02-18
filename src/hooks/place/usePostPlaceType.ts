import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { usePostPlaceTypeMutation } from "../../quries/place/place.query";

const usePostPlaceType = () => {
  const queryClient = useQueryClient();

  const postPlaceTypeMutation = usePostPlaceTypeMutation();

  const [placeTypeName, setPlaceTypeName] = useState("");

  const onChangePlaceTypeName = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaceTypeName(e.target.value);
  };

  const onSubmitPlaceType = () => {
    if (postPlaceTypeMutation.isLoading) {
      return;
    }

    if (placeTypeName === "") {
      B1ndToast.showInfo("장소 분류를 적어주세요!");
      return;
    }

    postPlaceTypeMutation.mutate(
      { name: placeTypeName },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("장소 분류 추가 성공");
          setPlaceTypeName("");
          queryClient.invalidateQueries("place/getPlaceTypes");
        },
        onError: () => {
          B1ndToast.showError("장소 분류 추가 실패");
        },
      }
    );
  };

  return { placeTypeName, onChangePlaceTypeName, onSubmitPlaceType };
};

export default usePostPlaceType;
