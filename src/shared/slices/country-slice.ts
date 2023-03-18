import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "shared/store/store";

export interface ICountryState {
    countryNameFilter: string,
}

const initialState: ICountryState = {
    countryNameFilter: ""
}

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        filterCountryListByName: (state, action: PayloadAction<ICountryState["countryNameFilter"]>) => {
            state.countryNameFilter = action.payload;
        }
    }
});

export const selectCountryNameFilter = (state: RootState) => state.country.countryNameFilter;
export const {filterCountryListByName} = countrySlice.actions;

export default countrySlice.reducer;
