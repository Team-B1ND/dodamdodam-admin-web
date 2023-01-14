export interface getPlaceParam {
  id: number;
}

export interface postPlaceParam {
  name: string;
  typeId: number;
}

export interface patchPlaceParam {
  id: number;
  name: string;
  typeId: number;
}

export interface deletePlaceParam {
  id: number;
}
