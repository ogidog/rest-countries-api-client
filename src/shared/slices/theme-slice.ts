import {createSlice,} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface IThemeState {
    mode: "light" | "dark";
}

const initialState: IThemeState = {
    mode: "light",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<IThemeState["mode"]>) => {
            state.mode = action.payload;
        }
    },
})

export const selectThemeMode = (state: any) => state.theme.mode;
export const {toggleTheme} = themeSlice.actions

export default themeSlice.reducer
