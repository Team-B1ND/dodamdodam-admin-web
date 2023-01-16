export interface getPlaceParam {
  id: number;
}

export interface getPlaceTypeParam {
  id: number;
}

export interface postPlaceParam {
  name: string;
  typeId: number;
}

export interface postPlaceTypeParam {
  name: string;
}

export interface patchPlaceParam {
  id: number;
  name: string;
  typeId: number;
}

export interface patchPlaceTypeParam {
  id: number;
  name: string;
}

export interface deletePlaceParam {
  id: number;
}

export interface deletePlaceTypeParam {
  id: number;
}
