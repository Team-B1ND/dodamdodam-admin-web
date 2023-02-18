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
  grade: number;
  room: number;
  placeId: number;
}

export interface deleteClassRoomParam {
  id: number;
}
