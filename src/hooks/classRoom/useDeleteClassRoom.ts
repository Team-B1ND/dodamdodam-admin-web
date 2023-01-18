import { useQueryClient } from "react-query";
import { useDeleteClassRoomMutation } from "../../quries/classRoom/classRoom.query";

const useDeleteClassRoom = () => {
  const queryClient = useQueryClient();

  const deletecClassRoomMutation = useDeleteClassRoomMutation();

  const onDeleteClassRoom = (id: number) => {
    if (deletecClassRoomMutation.isLoading) {
      return;
    }

    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    deletecClassRoomMutation.mutate(
      { id },
      {
        onSuccess: () => {
          window.alert("교실 삭제 성공");
          queryClient.invalidateQueries("classRoom/getClassRooms");
        },
        onError: () => {
          window.alert("교실 삭제 실패");
        },
      }
    );
  };

  return {
    onDeleteClassRoom,
  };
};

export default useDeleteClassRoom;
