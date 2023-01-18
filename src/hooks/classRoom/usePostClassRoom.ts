import { ChangeEvent, useCallback, useState } from "react";
import { useQueryClient } from "react-query";
import { usePostClassRoomMutation } from "../../quries/classRoom/classRoom.query";
import { useGetPlacesQuery } from "../../quries/place/place.query";

const usePostClassRoom = () => {
  const queryClient = useQueryClient();

  const { data: serverPlacesData } = useGetPlacesQuery();

  const postClassRoomMutation = usePostClassRoomMutation();

  const [classRoomData, setClassRoomData] = useState({
    grade: -1,
    room: -1,
    placeId: -1,
  });

  const onChangeGrade = (grade: number) => {
    setClassRoomData((prev) => ({ ...prev, grade }));
  };

  const onChangeRoom = (room: number) => {
    setClassRoomData((prev) => ({ ...prev, room }));
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

  const onSubmitClassRoom = () => {
    const { grade, room, placeId } = classRoomData;

    if (postClassRoomMutation.isLoading) {
      return;
    }

    if (grade === -1) {
      window.alert("학년을 입력해주세요!");
      return;
    }

    if (room === -1) {
      window.alert("학반을 입력해주세요!");
      return;
    }

    if (placeId === -1) {
      window.alert("장소를 입력해주세요!");
      return;
    }

    postClassRoomMutation.mutate(
      {
        grade,
        room,
        placeId,
      },
      {
        onSuccess: () => {
          window.alert("교실 추가 성공");
          queryClient.invalidateQueries("classRoom/getClassRooms");
        },
        onError: () => {
          window.alert("교실 추가 실패");
        },
      }
    );
  };

  return {
    classRoomData,
    onChangeGrade,
    onChangeRoom,
    onChangePlace,
    onSubmitClassRoom,
  };
};

export default usePostClassRoom;
