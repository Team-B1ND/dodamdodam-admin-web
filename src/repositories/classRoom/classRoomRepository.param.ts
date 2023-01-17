export interface getClassRoomParam {
  id: number;
}

export interface postClassRoomParam {
  grade: number;
  placeId: number;
  room: number;
}

export interface putClassRoomParam {
  id: number;
  classRoomId: number;
  studentId: number;
}

export interface deleteClassRoomParam {
  id: number;
}
