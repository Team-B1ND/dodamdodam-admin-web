import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import {
  useGetClassRoomQuery,
  usePutClassRoomMutation,
} from "../../quries/classRoom/classRoom.query";
import { useGetPlacesQuery } from "../../quries/place/place.query";

interface Props {
  classRoomId: number;
}

const useModifyClassRoom = ({ classRoomId }: Props) => {
  const queryClient = useQueryClient();

  const { data: serverPlacesData } = useGetPlacesQuery();

  const { data: serverClassRoomData } = useGetClassRoomQuery(
    { id: classRoomId },
    { enabled: classRoomId !== -1 }
  );

  const pustClassRoomMutation = usePutClassRoomMutation();

  const [prevClassRoomData, setPrevClassRoomData] = useState({
    grade: -1,
    room: -1,
    placeId: -1,
  });

  const [classRoomData, setClassRoomData] = useState({
    grade: -1,
    room: -1,
    placeId: -1,
  });

  const [classRoomPlaceName, setClassRoomPlaceName] = useState("");

  useEffect(() => {
    if (serverClassRoomData) {
      const {
        grade,
        room,
        place: { id: placeId, name: placeName },
      } = serverClassRoomData.data;

      setPrevClassRoomData({ grade, room, placeId });
      setClassRoomData({ grade, room, placeId });
      setClassRoomPlaceName(placeName);
    }
  }, [serverClassRoomData]);

  const onChangeRoom = (room: number) => {
    setClassRoomData((prev) => ({ ...prev, room }));
  };

  const onChangeGrade = (grade: number) => {
    setClassRoomData((prev) => ({ ...prev, grade }));
  };

  const onChangePlace = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;

      if (serverPlacesData) {
        const selectedPlace = serverPlacesData.data.find(
          (place) => place.name === value
        );

        setClassRoomData((prev) => ({
          ...prev,
          placeId: selectedPlace ? selectedPlace.id : -1,
        }));
      }
    },
    [serverPlacesData]
  );

  const onModifyClassRoom = () => {
    if (pustClassRoomMutation.isLoading) {
      return;
    }

    if (classRoomData.placeId === -1) {
      B1ndToast.showInfo("장소를 입력해주세요!");
    }

    if (
      Object.entries({ ...classRoomData }).toString() ===
      Object.entries({ ...prevClassRoomData }).toString()
    ) {
      B1ndToast.showInfo("수정된 사항이 없습니다!");
      return;
    }

    if (!window.confirm("정말 수정하시겠습니까?")) {
      return;
    }

    console.log(classRoomId);

    pustClassRoomMutation.mutate(
      { id: classRoomId, ...classRoomData },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("교실 수정 성공");
          queryClient.invalidateQueries([
            "classRoom/getClassRoom",
            classRoomId,
          ]);
          queryClient.invalidateQueries("classRoom/getClassRooms");
        },
        onError: () => {
          B1ndToast.showError("교실 수정 실패");
        },
      }
    );
  };

  return {
    classRoomData,
    classRoomPlaceName,
    onChangeGrade,
    onChangeRoom,
    onChangePlace,
    onModifyClassRoom,
  };
};

export default useModifyClassRoom;
