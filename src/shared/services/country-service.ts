import {createApi, fetchBaseQuery,} from "@reduxjs/toolkit/query/react";

export interface ICountryListData {
    name: string,
    capital: string,
    region: string,
    population: number,
    flagSource: string,
    flagDescription: string,
    cca3: string,
}

interface ICountryListResponse {
    flags: {
        png: string,
        svg: string,
        alt: string
    },
    name: {
        common: string,
        official: string,
        nativeName: {
            [key: string]: {
                official: string
                common: string
            }
        }
    },
    cca3: string,
    capital: string[],
    altSpellings: string[],
    region: string,
    population: number
}

export interface ICountryDetailData {
    name: string,
    flagSource: string,
    flagDescription: string
    nativeName: string,
    population: number,
    region: string,
    subRegion: string,
    capital: string,
    topLevelDomain: string,
    currencies: string,
    languages: string,
    borderCountryCodes: string,
}

interface ICountryDetailResponse {
    tld: string[],
    flags: {
        png: string,
        svg: string,
        alt: string
    },
    name: {
        common: string,
        official: string,
        nativeName: {
            [key: string]: {
                official: string
                common: string
            }
        }
    },
    currencies: {
        [key: string]: {
            name: string,
            symbol: string
        }
    },
    capital: string[],
    altSpellings: string[],
    region: string,
    subregion: string,
    languages: {
        [key: string]: string
    },
    borders: string[],
    population: number
}

export interface ICountryNamesData {
    name: string,
    cca3: string
}

export const countriesApi = createApi({
    reducerPath: "countriesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://restcountries.com/v3.1/",
    }),
    endpoints: (builder) => ({
        getCountryList: builder.query<ICountryListData[], string>({
            query: () => ({
                url: "all",
                params: {fields: "name,flags,population,region,capital,cca3"},
                method: "GET",
            }),
            transformResponse: (response: ICountryListResponse[], meta, arg): ICountryListData[] => {
                return response.map(data => {
                    return {
                        name: data.name.common,
                        capital: data.capital.join(", "),
                        flagSource: data.flags.png,
                        flagDescription: data.flags.alt,
                        population: +data.population,
                        region: data.region,
                        cca3: data.cca3,
                    }
                })
            }
        }),
        getCountryDetail: builder.query({
            query: (cca3: string) => ({
                url: `alpha/${cca3}`,
                params: {fields: "flags,name,population,region,subregion,capital,tld,currencies,languages,borders"},
                method: "GET",
            }),
            transformResponse: (response: ICountryDetailResponse): ICountryDetailData => {
                return {
                    name: response.name.common,
                    nativeName: Object.keys(response.name.nativeName).map(key => {
                        return response.name.nativeName[key].official
                    }).join(", "),
                    flagSource: response.flags.png,
                    flagDescription: response.flags.alt,
                    population: +response.population,
                    region: response.region,
                    subRegion: response.subregion,
                    capital: response.capital.join(", "),
                    topLevelDomain: response.tld.join(", "),
                    currencies: Object.keys(response.currencies).map(key => {
                        return response.currencies[key].name
                    }).join(", "),
                    languages: Object.keys(response.languages).map(key => {
                        return response.languages[key]
                    }).join(", "),
                    borderCountryCodes: response.borders.join(", "),
                }
            }
        }),
        getCountryNameByCodes: builder.query<ICountryNamesData[], string>({
            query: (cca3List: string) => ({
                url: 'alpha',
                params: {
                    codes: cca3List,
                    fields: "name,cca3",
                },
                method: "GET",
            }),
            transformResponse: (response: ICountryListResponse[]): ICountryNamesData[] => {
                return response.map(data => {
                    return {
                        name: data.name.common,
                        cca3: data.cca3,
                    }
                })
            }
        }),
    }),
});

export const {useGetCountryListQuery, useGetCountryDetailQuery, useGetCountryNameByCodesQuery} = countriesApi;
