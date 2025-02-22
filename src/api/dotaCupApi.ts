import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    ExampleTypeForApi
} from "../type.ts";


const host = import.meta.env.REACT_APP_HOST
const port = import.meta.env.REACT_APP_PORT

const baseUrl = `${host ? host : 'localhost'}:${port ? port : 8082}/`
const token = ''


export const dotaCupApi = createApi({
    reducerPath: 'dotaCupApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getExampleRequest: builder.query<ExampleTypeForApi, number>({
            query: id => ({
                url: `http://${baseUrl}dota-api/example/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    }),
});

// Экспортируем хуки для использования в компонентах
export const {
    useGetExampleRequestQuery
} = dotaCupApi;
