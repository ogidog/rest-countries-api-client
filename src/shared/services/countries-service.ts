import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export interface ICountry {
    name: string,
    "capital": string,
    "region": string,
    "population": number,
    "flags": {
        "svg": string,
        "png": string
    },
    "independent": boolean
}

export const countryListApi = 
