import { customAxios } from "../../lib/axios/customAxios";
import {
  deleteClassRoomParam,
  getClassRoomParam,
  postClassRoomParam,
  putClassRoomParam,
} from "./classRoomRepository.param";
import {
  getClassRoomResponse,
  getClassRoomsResponse,
} from "./classRoomRepository.res";

class ClassRoomRepository {
  public async getClassRooms(): Promise<getClassRoomsResponse> {
    const { data } = await customAxios.get("/classroom/");
    return data;
  }

  public async getClassRoom({
    id,
  }: getClassRoomParam): Promise<getClassRoomResponse> {
    const { data } = await customAxios.get(`/classroom/${id}`);
    return data;
  }

  public async postClassRoom({
    grade,
    placeId,
    room,
  }: postClassRoomParam): Promise<void> {
    await customAxios.post("/classroom", { grade, placeId, room });
  }

  public async putClassRoom({
    id,
    classRoomId,
    studentId,
  }: putClassRoomParam): Promise<void> {
    await customAxios.put(`/classroom/${id}`, { classRoomId, studentId });
  }

  public async deleteClassRoom({ id }: deleteClassRoomParam): Promise<void> {
    await customAxios.delete(`/classroom/${id}`);
  }
}

export default new ClassRoomRepository();
