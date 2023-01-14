import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import PlaceRepository from "../../repositories/place/PlaceRepository";
import { postPlaceParam } from "../../repositories/place/placeRepository.param";
import {
  getPlacesResponse,
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

export const usePostPlaceMutation = () => {
  const mutation = useMutation(({ name, typeId }: postPlaceParam) =>
    PlaceRepository.postPlace({ name, typeId })
  );

  return mutation;
};
