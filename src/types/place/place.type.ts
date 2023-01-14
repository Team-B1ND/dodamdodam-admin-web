export interface Place {
  readonly id: number;
  name: string;
  type: PlaceType;
}

export interface PlaceType {
  readonly id: number;
  name: string;
}
