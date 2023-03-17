import * as React from 'react';
import {FC} from "react";
import style from "./country-search.module.css";
import {useSelector} from "react-redux";
import {selectThemeMode} from "../../../shared/slices";

type Props = {};
export const CountrySearch: FC = (props: Props) => {

    const themeMode = useSelector(selectThemeMode);

    return (
        <div className={style["search-country-input__wrapper-div"]}>
            <i className={style["search-country-input__icon-i"]} data-theme-mode={themeMode}></i>
            <input type={"text"} className={`${style["search-country-input"]} ${"element_" + themeMode}`}
                   data-theme-mode={themeMode}
                   maxLength={32}/>
        </div>
    );
};
