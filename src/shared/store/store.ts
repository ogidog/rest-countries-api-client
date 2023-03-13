import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "shared/slices/theme-slice";
import {countriesApi} from "../services/countries-service";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        [countriesApi.reducerPath]: countriesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware)
})

