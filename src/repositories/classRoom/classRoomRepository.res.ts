import { ClassRoom } from "../../types/classRoom/classRoom.type";
import { Response } from "../../types/util/util.type";

export interface getClassRoomsResponse extends Response {
  data: ClassRoom[];
}

export interface getClassRoomResponse extends Response {
  data: ClassRoom;
}
