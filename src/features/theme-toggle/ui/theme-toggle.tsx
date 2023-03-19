import * as React from 'react';
import {FC} from "react";
import style from "./theme-toggle.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectThemeMode} from "shared/slices";
import {IThemeState, toggleTheme} from "shared/slices";


export const ThemeToggle: FC = () => {

    let themeMode = useSelector(selectThemeMode);
    const dispatch = useDispatch();

    const getThemeMode = (): IThemeState["mode"] => {
        if (themeMode === "light") {
            return "dark"
        } else {
            return "light"
        }
    }

    const clickHandler = () => {
        dispatch(toggleTheme(getThemeMode()));
    }

    return (
        <div className={`${style["c-theme-toggle"]} ${"element_" + themeMode}`}
             onClick={clickHandler}
             data-theme-mode={themeMode}
        >
            {getThemeMode()[0].toUpperCase() + getThemeMode().slice(1)} Mode
        </div>
    );
};
