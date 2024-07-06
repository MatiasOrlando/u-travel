import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realtimeDatabase";

export const shopApi = createApi({
  reducerPath: "shopApi",
  tagTypes: ["profileImageGet"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => `countries.json`,
    }),
    getCitiesByCountryId: builder.query({
      query: (countryId) =>
        `citiesItineraries.json?orderBy="countryId"&equalTo=${countryId}`,
      transformResponse: (res) => {
        const transformedResponse = Object.values(res);
        return transformedResponse;
      },
    }),
    getCountryById: builder.query({
      query: (id) => `countries.json?orderBy="id"&equalTo=${id}`,
      transformResponse: (res) => {
        const [transformedResponse] = Object.values(res);
        return transformedResponse;
      },
    }),
    getCityById: builder.query({
      query: (city) =>
        `citiesItineraries.json?orderBy="city"&equalTo="${city}"`,
      transformResponse: (res) => {
        const [transformedResponse] = Object.values(res);
        return transformedResponse;
      },
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
      providesTags: ["profileImageGet"],
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
      invalidatesTags: ["profileImageGet"],
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetCitiesByCountryIdQuery,
  useGetCityByIdQuery,
  useGetCountryByIdQuery,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
} = shopApi;
