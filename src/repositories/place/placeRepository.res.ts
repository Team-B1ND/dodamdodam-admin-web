import { Place, PlaceType } from "../../types/place/place.type";
import { Response } from "../../types/util/util.type";

export interface getPlacesResponse extends Response {
  data: Place[];
}

export interface getPlaceTypesResponse extends Response {
  data: PlaceType[];
}
