import { customAxios } from "../../lib/axios/customAxios";
import {
  deletePlaceParam,
  deletePlaceTypeParam,
  getPlaceParam,
  getPlaceTypeParam,
  patchPlaceParam,
  patchPlaceTypeParam,
  postPlaceParam,
  postPlaceTypeParam,
} from "./placeRepository.param";
import {
  getPlaceResponse,
  getPlacesResponse,
  getPlaceTypeResponse,
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

  public async getPlaceType({
    id,
  }: getPlaceTypeParam): Promise<getPlaceTypeResponse> {
    const { data } = await customAxios.get(`/place/place/type/${id}`);
    return data;
  }

  public async postPlace({ name, typeId }: postPlaceParam): Promise<void> {
    await customAxios.post("/place", { name, typeId });
  }

  public async postPlaceType({ name }: postPlaceTypeParam): Promise<void> {
    await customAxios.post("/place/place/type", { name });
  }

  public async patchPlace({
    id,
    name,
    typeId,
  }: patchPlaceParam): Promise<void> {
    await customAxios.patch(`/place/${id}`, { name, typeId });
  }

  public async patchPlaceType({
    id,
    name,
  }: patchPlaceTypeParam): Promise<void> {
    await customAxios.patch(`/place/place/type/${id}`, { name });
  }

  public async deletePlace({ id }: deletePlaceParam): Promise<void> {
    await customAxios.delete(`/place/${id}`);
  }

  public async deletePlaceType({ id }: deletePlaceTypeParam): Promise<void> {
    await customAxios.delete(`/place/place/type/${id}`);
  }
}

export default new PlaceRepository();
