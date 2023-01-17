import { Place } from "../place/place.type";

export interface ClassRoom {
  grade: number;
  readonly id: number;
  place: Place;
}
