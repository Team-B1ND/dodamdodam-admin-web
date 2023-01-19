import { ChangeEvent, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import {
  useGetPlaceTypeQuery,
  usePatchPlaceTypeMutation,
} from "../../quries/place/place.query";

interface Props {
  id: number;
}

const useModifyPlaceType = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const { data: serverPlaceTypeData } = useGetPlaceTypeQuery(
    { id },
    { enabled: id !== -1 }
  );

  const patchPlaceTypeMutation = usePatchPlaceTypeMutation();

  const [prevPlaceTypeName, setPrevPlaceTypeName] = useState("");
  const [placeTypeName, setPlaceTypeName] = useState("");

  useEffect(() => {
    if (serverPlaceTypeData) {
      const { name } = serverPlaceTypeData.data;

      setPrevPlaceTypeName(name);
      setPlaceTypeName(name);
    }
  }, [serverPlaceTypeData]);

  const onChangePlaceTypeName = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaceTypeName(e.target.value);
  };

  const onModifyPlaceType = () => {
    if (patchPlaceTypeMutation.isLoading) {
      return;
    }

    if (placeTypeName === "") {
      window.alert("장소 분류 이름을 입력해주세요!");
      return;
    }

    if (placeTypeName === prevPlaceTypeName) {
      window.alert("수정된 사항이 없습니다!");
      return;
    }

    if (!window.confirm("정말 수정하시겠습니까?")) {
      return;
    }

    patchPlaceTypeMutation.mutate(
      { id, name: placeTypeName },
      {
        onSuccess: () => {
          window.alert("장소 분류 수정 성공");
          queryClient.invalidateQueries(["place/getPlaceType", id]);
          queryClient.invalidateQueries(["place/getPlaceTypes"]);
        },
        onError: () => {
          window.alert("장소 분류 수정 실패");
        },
      }
    );
  };

  return {
    placeTypeName,
    setPlaceTypeName,
    onChangePlaceTypeName,
    onModifyPlaceType,
  };
};

export default useModifyPlaceType;
