import * as React from 'react';
import {FC} from "react";
import style from "./filter-country-list-by-name.module.css";
import {useDispatch, useSelector} from "react-redux";
import {filterCountryListByName, selectThemeMode} from "../../../shared/slices";

export const FilterCountryListByName: FC = () => {

    const themeMode = useSelector(selectThemeMode);
    const dispatch = useDispatch()

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const elem: HTMLInputElement = event.target as HTMLInputElement;
        dispatch(filterCountryListByName(elem.value));
    }

    return (
        <div className={style["search-country-input__wrapper-div"]}>
            <i className={style["search-country-input__icon-i"]} data-theme-mode={themeMode}></i>
            <input type={"text"} className={`${style["search-country-input"]} ${"element_" + themeMode}`}
                   data-theme-mode={themeMode}
                   maxLength={32} onChange={changeHandler}/>
        </div>
    );
};
