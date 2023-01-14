import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import PlaceRepository from "../../repositories/place/PlaceRepository";
import {
  deletePlaceParam,
  deletePlaceTypeParam,
  getPlaceParam,
  getPlaceTypeParam,
  patchPlaceParam,
  patchPlaceTypeParam,
  postPlaceParam,
  postPlaceTypeParam,
} from "../../repositories/place/placeRepository.param";
import {
  getPlaceResponse,
  getPlacesResponse,
  getPlaceTypeResponse,
  getPlaceTypesResponse,
} from "../../repositories/place/placeRepository.res";

export const useGetPlacesQuery = (
  options?: UseQueryOptions<
    getPlacesResponse,
    AxiosError,
    getPlacesResponse,
    "place/getPlaces"
  >
) =>
  useQuery("place/getPlaces", () => PlaceRepository.getPlaces(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetPlaceQuery = (
  { id }: getPlaceParam,
  options?: UseQueryOptions<
    getPlaceResponse,
    AxiosError,
    getPlaceResponse,
    ["place/getPlace", number]
  >
) =>
  useQuery(["place/getPlace", id], () => PlaceRepository.getPlace({ id }), {
    ...options,
    staleTime: 1000 * 60,
    cacheTime: 1000 * 60 * 5,
  });

export const useGetPlaceTypesQuery = (
  options?: UseQueryOptions<
    getPlaceTypesResponse,
    AxiosError,
    getPlaceTypesResponse,
    "place/getPlaceTypes"
  >
) =>
  useQuery("place/getPlaceTypes", () => PlaceRepository.getPlaceTypes(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetPlaceTypeQuery = (
  { id }: getPlaceTypeParam,
  options?: UseQueryOptions<
    getPlaceTypeResponse,
    AxiosError,
    getPlaceTypeResponse,
    ["place/getPlaceType", number]
  >
) =>
  useQuery(
    ["place/getPlaceType", id],
    () => PlaceRepository.getPlaceType({ id }),
    {
      ...options,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    }
  );

export const usePostPlaceMutation = () => {
  const mutation = useMutation(({ name, typeId }: postPlaceParam) =>
    PlaceRepository.postPlace({ name, typeId })
  );

  return mutation;
};

export const usePostPlaceTypeMutation = () => {
  const mutation = useMutation(({ name }: postPlaceTypeParam) =>
    PlaceRepository.postPlaceType({ name })
  );

  return mutation;
};

export const usePatchPlaceMutation = () => {
  const mutation = useMutation(({ id, name, typeId }: patchPlaceParam) =>
    PlaceRepository.patchPlace({ id, name, typeId })
  );

  return mutation;
};

export const usePatchPlaceTypeMutation = () => {
  const mutation = useMutation(({ id, name }: patchPlaceTypeParam) =>
    PlaceRepository.patchPlaceType({ id, name })
  );

  return mutation;
};

export const useDeletePlaceMutation = () => {
  const mutation = useMutation(({ id }: deletePlaceParam) =>
    PlaceRepository.deletePlace({ id })
  );

  return mutation;
};

export const useDeletePlaceTypeMutation = () => {
  const mutation = useMutation(({ id }: deletePlaceTypeParam) =>
    PlaceRepository.deletePlaceType({ id })
  );

  return mutation;
};
