import { customAxios } from "../../lib/axios/customAxios";
import {
  deletePlaceParam,
  getPlaceParam,
  patchPlaceParam,
  postPlaceParam,
} from "./placeRepository.param";
import {
  getPlaceResponse,
  getPlacesResponse,
  getPlaceTypesResponse,
} from "./placeRepository.res";

class PlaceRepository {
  public async getPlaces(): Promise<getPlacesResponse> {
    const { data } = await customAxios.get("/place");
    return data;
  }

  public async getPlace({ id }: getPlaceParam): Promise<getPlaceResponse> {
    const { data } = await customAxios.get(`/place/${id}`);
    return data;
  }

  public async getPlaceTypes(): Promise<getPlaceTypesResponse> {
    const { data } = await customAxios.get("/place/place/type");
    return data;
  }

  public async postPlace({ name, typeId }: postPlaceParam): Promise<void> {
    await customAxios.post("/place", { name, typeId });
  }

  public async patchPlace({
    id,
    name,
    typeId,
  }: patchPlaceParam): Promise<void> {
    await customAxios.patch(`/place/${id}`, { name, typeId });
  }

  public async deletePlace({ id }: deletePlaceParam): Promise<void> {
    await customAxios.delete(`/place/${id}`);
  }
}

export default new PlaceRepository();
