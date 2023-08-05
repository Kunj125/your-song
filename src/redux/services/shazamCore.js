import { API_KEY } from '../../../config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', API_KEY);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
    })
});

export const{
    useGetTopChartsQuery,
} = shazamCoreApi;