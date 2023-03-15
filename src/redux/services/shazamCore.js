import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const novusApi = createApi({
  reducerPath: 'novusApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4141/web/api/',
    prepareHeaders: (headers) => {
      const token = 
      JSON.parse(localStorage.getItem('token_gen'));
      if (token) {
        headers.set('Authorization', `Bearer ${token.access_token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSchema: builder.query({ query: () => 'schema?type=RealEstate' }),
    postLogIn: builder.mutation({query: (body) => ({url: '/signin',method:'POST',body,}) }),
    getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
  }),
});

export const {
  useGetSchemaQuery,
  usePostLogInMutation,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = novusApi;