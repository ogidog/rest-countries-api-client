import * as React from 'react';
import {FC} from "react";
import {ICountryDetailData,} from "shared/services/countries-service";

import style from "./country-card-detail.module.css";
import {Flag, LabelData, Title} from "../../../shared/ui";
import {useSelector} from "react-redux";
import {selectThemeMode} from "../../../shared/slices";

export const CountryCardDetail: FC<ICountryDetailData> = (props) => {

    const themeMode = useSelector(selectThemeMode);

    return (
        <div className={`${style["c-country-card-detail"]} ${"element_" + themeMode}`} >
            <Flag alt={props.flagDescription} src={props.flagSource}/>
            <div className={style["c-country-card-detail__data-div"]}>
                <div className={style["c-country-card-detail__name-div"]}>
                    <Title text={props.name} size={"large"}/>
                </div>
                <div className={style["c-country-card-detail__label-data-div"]}>
                    <LabelData label={"Native Name"} data={props.nativeName}/>
                    <LabelData label={"Population"} data={props.population}/>
                    <LabelData label={"Region"} data={props.region}/>
                    <LabelData label={"Sub Region"} data={props.subRegion}/>
                    <LabelData label={"Capital"} data={props.capital}/>
                </div>
                <div className={style["c-country-card-detail__label-data-div"]}>
                    <LabelData label={"Top Level Domain"} data={props.topLevelDomain}/>
                </div>
            </div>
        </div>
    );
};
