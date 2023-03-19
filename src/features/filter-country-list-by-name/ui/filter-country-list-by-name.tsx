import * as React from 'react';
import {FC, useEffect, useRef} from "react";
import style from "./filter-country-list-by-name.module.css";
import {useDispatch, useSelector} from "react-redux";
import {filterCountryListByName, selectCountryNameFilter, selectThemeMode} from "../../../shared/slices";

export const FilterCountryListByName: FC = () => {

    const themeMode = useSelector(selectThemeMode);
    const countryNameFilter = useSelector(selectCountryNameFilter);
    const dispatch = useDispatch()

    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const elem: HTMLInputElement = event.target as HTMLInputElement;
        dispatch(filterCountryListByName(elem.value));
    }

    useEffect(() => {
        if (countryNameFilter) {
            inputRef.current!.value = countryNameFilter;
        }
    }, []);

    return (
        <div className={style["search-country-input__wrapper-div"]}>
            <i className={style["search-country-input__icon-i"]} data-theme-mode={themeMode}></i>
            <input ref={inputRef} type={"text"}
                   className={`${style["search-country-input"]} ${"element_" + themeMode}`}
                   maxLength={32}
                   placeholder={"Search for a country..."}
                   onChange={changeHandler}
                   data-theme-mode={themeMode}/>
        </div>
    );
};
