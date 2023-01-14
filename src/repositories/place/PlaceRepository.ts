import { customAxios } from "../../lib/axios/customAxios";
import { postPlaceParam } from "./placeRepository.param";
import {
  getPlacesResponse,
  getPlaceTypesResponse,
} from "./placeRepository.res";

class PlaceRepository {
  public async getPlaces(): Promise<getPlacesResponse> {
    const { data } = await customAxios.get("/place");
    return data;
  }

  public async getPlaceTypes(): Promise<getPlaceTypesResponse> {
    const { data } = await customAxios.get("/place/place/type");
    return data;
  }

  public async postPlace({ name, typeId }: postPlaceParam): Promise<void> {
    await customAxios.post("/place", { name, typeId });
  }
}

export default new PlaceRepository();
