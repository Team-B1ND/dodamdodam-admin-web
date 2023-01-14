import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import {
  useGetPlaceQuery,
  useGetPlaceTypesQuery,
  usePatchPlaceMutation,
} from "../../quries/place/place.query";

interface Props {
  id: number;
}

const useModifyPost = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const { data: serverPlaceData } = useGetPlaceQuery(
    { id },
    { enabled: id !== -1 }
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
  }, [id, resetPlace]);

  const onModifyPlace = () => {
    if (patchPlaceMutation.isLoading) {
      return;
    }

    if (placeName === "") {
      window.alert("장소 이름을 입력해주세요!");
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
      window.alert("수정된 사항이 없습니다!");
      return;
    }

    if (!window.confirm("정말 수정하시겠습니까?")) {
      return;
    }

    patchPlaceMutation.mutate(
      { id, name: placeName, typeId: placeTypeId },
      {
        onSuccess: () => {
          window.alert("장소 수정 성공");
          queryClient.invalidateQueries(["place/getPlace", id]);
          queryClient.invalidateQueries(["place/getPlaces"]);
        },
        onError: () => {
          window.alert("장소 수정 실패");
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

export default useModifyPost;
