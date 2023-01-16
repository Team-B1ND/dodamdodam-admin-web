import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import {
  useGetPlaceTypesQuery,
  usePostPlaceMutation,
} from "../../quries/place/place.query";

const usePostPlace = () => {
  const queryClient = useQueryClient();

  const {
    data: serverPlaceTypesData,
    isLoading: serverPlaceTypesDataIsLoading,
  } = useGetPlaceTypesQuery();

  const postPlaceMutation = usePostPlaceMutation();

  const [placeName, setPlaceName] = useState("");
  const [placeTypeId, setPlaceTypeId] = useState(-1);
  const [placeTypeName, setPlaceTypeName] = useState("");

  const onChangePlaceName = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaceName(e.target.value);
  };

  const resetPlace = useCallback(() => {
    if (serverPlaceTypesData) {
      const firstPlaceType = serverPlaceTypesData.data[0];
      setPlaceTypeName(firstPlaceType.name);
      setPlaceTypeId(firstPlaceType.id);
      setPlaceName("");
    }
  }, [serverPlaceTypesData]);

  useEffect(() => {
    if (serverPlaceTypesData) {
      resetPlace();
    }
  }, [resetPlace, serverPlaceTypesData]);

  useEffect(() => {
    const filteredTypeId = serverPlaceTypesData?.data.find(
      (item) => item.name === placeTypeName
    );
    setPlaceTypeId(filteredTypeId?.id!);
  }, [placeTypeName, serverPlaceTypesData]);

  const onSubmitPlace = () => {
    if (postPlaceMutation.isLoading) {
      return;
    }

    if (placeName === "") {
      window.alert("장소 이름을 적어주세요!");
      return;
    }

    postPlaceMutation.mutate(
      { name: placeName, typeId: placeTypeId },
      {
        onSuccess: () => {
          window.alert("장소 추가 성공");
          resetPlace();
          queryClient.invalidateQueries("place/getPlaces");
        },
        onError: () => {
          window.alert("장소 추가 실패");
        },
      }
    );
  };

  return {
    serverPlaceTypesData,
    serverPlaceTypesDataIsLoading,
    placeName,
    setPlaceName,
    placeTypeId,
    setPlaceTypeId,
    placeTypeName,
    setPlaceTypeName,
    onChangePlaceName,
    onSubmitPlace,
  };
};

export default usePostPlace;
