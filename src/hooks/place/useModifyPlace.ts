import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import {
  useGetPlaceQuery,
  useGetPlaceTypesQuery,
  usePatchPlaceMutation,
} from "../../quries/place/place.query";

interface Props {
  placeId: number;
}

const useModifyPlace = ({ placeId }: Props) => {
  const queryClient = useQueryClient();

  const { data: serverPlaceData } = useGetPlaceQuery(
    { id: placeId },
    { enabled: placeId !== -1 }
  );
  const { data: serverPlaceTypesData } = useGetPlaceTypesQuery();

  const patchPlaceMutation = usePatchPlaceMutation();

  const [prevPlaceName, setPrevPlaceName] = useState("");
  const [prevPlaceTypeId, setPrevPlaceTypeId] = useState(-1);
  const [prevPlaceTypeName, setPrevPlaceTypeName] = useState("");

  const [placeName, setPlaceName] = useState("");
  const [placeTypeId, setPlaceTypeId] = useState(-1);
  const [placeTypeName, setPlaceTypeName] = useState("");

  const onChangePlaceName = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaceName(e.target.value);
  };

  const resetPlace = useCallback(() => {
    if (serverPlaceData) {
      const {
        name,
        type: { id: typeId, name: typeName },
      } = serverPlaceData.data;

      setPrevPlaceName(name);
      setPrevPlaceTypeId(typeId);
      setPrevPlaceTypeName(typeName);

      setPlaceName(name);
      setPlaceTypeId(typeId);
      setPlaceTypeName(typeName);
    }
  }, [serverPlaceData]);

  useEffect(() => {
    const filteredTypeId = serverPlaceTypesData?.data.find(
      (type) => type.name === placeTypeName
    );
    setPlaceTypeId(filteredTypeId?.id!);
  }, [placeTypeName, serverPlaceTypesData?.data]);

  useEffect(() => {
    resetPlace();
  }, [placeId, resetPlace]);

  const onModifyPlace = () => {
    if (patchPlaceMutation.isLoading) {
      return;
    }

    if (placeName === "") {
      B1ndToast.showInfo("장소 이름을 입력해주세요!");
      return;
    }

    if (
      Object.entries({ placeName, placeTypeId, placeTypeName }).toString() ===
      Object.entries({
        prevPlaceName,
        prevPlaceTypeId,
        prevPlaceTypeName,
      }).toString()
    ) {
      B1ndToast.showInfo("수정된 사항이 없습니다!");
      return;
    }

    if (!window.confirm("정말 수정하시겠습니까?")) {
      return;
    }

    patchPlaceMutation.mutate(
      { id: placeId, name: placeName, typeId: placeTypeId },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("장소 수정 성공");
          queryClient.invalidateQueries(["place/getPlace", placeId]);
          queryClient.invalidateQueries("place/getPlaces");
        },
        onError: () => {
          B1ndToast.showError("장소 수정 실패");
        },
      }
    );
  };

  return {
    placeName,
    setPlaceName,
    placeTypeId,
    setPlaceTypeId,
    placeTypeName,
    setPlaceTypeName,
    onChangePlaceName,
    onModifyPlace,
  };
};

export default useModifyPlace;
