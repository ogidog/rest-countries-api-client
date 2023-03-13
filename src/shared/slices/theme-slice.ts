import {createSlice,} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface IThemeState {
    type: "light" | "dark";
}

const initialState: IThemeState = {
    type: "light",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<IThemeState["type"]>) => {
            state.type = action.payload;
        }
    },
})

export const selectThemeType = (state: any) => state.theme.type;
export const {toggleTheme} = themeSlice.actions

export default themeSlice.reducer
