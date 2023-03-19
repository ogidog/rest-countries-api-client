import * as React from 'react';
import {FC, useRef} from "react";
import style from "./filter-country-list-by-region.module.css";
import {useSelector} from "react-redux";
import {selectThemeMode} from "../../../shared/slices";

export const FilterCountryListByRegion: FC = () => {

    const themeMode = useSelector(selectThemeMode);

    const optionRef = useRef<HTMLDivElement>(null);

    const selectClickHandler = () => {
        optionRef.current!.style.display = optionRef.current!.style.display === "none" || !optionRef.current!.style.display ? "block" : "none";
    }

    const optionClickHandler = (event: React.MouseEvent) => {
        const optionDiv = event.target as HTMLDivElement;
        optionRef.current!.style.display = "none"
        console.log(optionDiv.dataset["value"])
    };

    return (
        <div className={style["c-filter-country-list-by-region"]}>

            <div className={`${style["c-filter-country-list-by-region__select-div"]} ${"element_" + themeMode}`}
                 onClick={selectClickHandler}
                 data-theme-mode={themeMode}
            > Select by region
            </div>

            <div className={`${style["c-filter-country-list-by-region__option-div"]} ${"element_" + themeMode}`}
                 style={{display: "none"}}
                 ref={optionRef}
                 onClick={optionClickHandler}
            >
                <div data-value={"Africa"}>Africa</div>
                <div data-value={"America"}>America</div>
                <div data-value={"Asia"}>Asia</div>
                <div data-value={"Europe"}>Europe</div>
                <div data-value={"Oceania"}>Oceania</div>
            </div>
        </div>
    )
};
