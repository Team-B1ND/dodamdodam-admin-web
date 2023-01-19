import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useGetClassRoomQuery } from "../../quries/classRoom/classRoom.query";
import { useGetPlacesQuery } from "../../quries/place/place.query";

interface Props {
  id: number;
}

const useModifyClassRoom = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const { data: serverPlacesData } = useGetPlacesQuery();

  const { data: serverClassRoomData } = useGetClassRoomQuery(
    { id },
    { enabled: id !== -1 }
  );

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

  useEffect(() => {
    if (serverClassRoomData) {
      const { grade } = serverClassRoomData.data;
    }
  }, [serverClassRoomData]);

  return {};
};

export default useModifyClassRoom;
