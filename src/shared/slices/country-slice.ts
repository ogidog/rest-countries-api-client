import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "shared/store/store";

export interface ICountryState {
    countryNameFilter: string,
    countryRegionFilter: string,
}

const initialState: ICountryState = {
    countryNameFilter: "",
    countryRegionFilter: "",
}

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        filterCountryListByName: (state, action: PayloadAction<ICountryState["countryNameFilter"]>) => {
            state.countryNameFilter = action.payload;
        },
        filterCountryListByRegion: (state, action: PayloadAction<ICountryState["countryRegionFilter"]>) => {
            state.countryRegionFilter = action.payload;
        }
    }
});

export const selectCountryNameFilter = (state: RootState) => state.country.countryNameFilter;
export const selectCountryRegionFilter = (state: RootState) => state.country.countryRegionFilter;
export const {filterCountryListByName, filterCountryListByRegion} = countrySlice.actions;

export default countrySlice.reducer;
