import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "shared/store/store";

export interface ICountryState {
    searchingCountryName: string,
}

const initialState: ICountryState = {
    searchingCountryName: ""
}

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        searchCountry: (state, action: PayloadAction<ICountryState["searchingCountryName"]>) => {
            state.searchingCountryName = action.payload;
        }
    }
});

export const selectSearchingCountryName = (state: RootState) => state.country.searchingCountryName;
export const {searchCountry} = countrySlice.actions;

export default countrySlice.reducer;
