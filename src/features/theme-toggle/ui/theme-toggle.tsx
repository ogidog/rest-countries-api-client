import * as React from 'react';
import {FC} from "react";
import style from "./theme-toggle.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectThemeMode} from "shared/slices";
import {IThemeState, toggleTheme} from "shared/slices";


export const ThemeToggle: FC = () => {

    const themeMode = useSelector(selectThemeMode);
    const dispatch = useDispatch();

    const oppositeThemeType = (): IThemeState["mode"] => {
        if (themeMode === "light") {
            return "dark"
        } else {
            return "light"
        }
    }

    const clickHandler = () => {
        dispatch(toggleTheme(oppositeThemeType()));
    }

    return (
        <div className={`${style["c-theme-toggle"]} ${style["c-theme-toggle_" + themeMode]} ${"element_" + themeMode}`}
             onClick={clickHandler}>
            {oppositeThemeType()[0].toUpperCase() + oppositeThemeType().slice(1)} Mode
        </div>
    );
};
