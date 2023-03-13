import * as React from 'react';
import {FC} from "react";
import style from "./header.module.css";
import {ThemeToggle} from "features/theme-toggle/ui";
import {useSelector} from "react-redux";
import {selectThemeMode} from "shared/slices";

export const Header: FC = () => {
    const themeMode = useSelector(selectThemeMode);

    return (
        <div className={`${style["c-header"]} ${"element_" + themeMode}`}>
            <div className={`${style["c-header__title"]} ${"element_" + themeMode}`}>
                {"Where in the world?"}
            </div>
            <ThemeToggle/>
        </div>
    );
};
