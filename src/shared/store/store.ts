import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "shared/slices/theme-slice";
import countryReducer from "shared/slices/country-slice";
import {countriesApi} from "shared/services/countries-service";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        country: countryReducer,
        [countriesApi.reducerPath]: countriesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>


