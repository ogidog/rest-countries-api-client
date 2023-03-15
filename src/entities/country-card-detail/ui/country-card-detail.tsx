import * as React from 'react';
import {FC} from "react";
import {ICountryDetailData, useGetCountryNameByCodesQuery,} from "shared/services/countries-service";

import style from "./country-card-detail.module.css";
import {Flag, LabeledElement, LabeledData, Title} from "shared/ui";
import {useSelector} from "react-redux";
import {selectThemeMode} from "shared/slices";
import {NavButton} from "../../../shared/ui/nav-button";

export const CountryCardDetail: FC<ICountryDetailData> = (props) => {

    const themeMode = useSelector(selectThemeMode);
    const formatter = new Intl.NumberFormat();
    const {data, error, isLoading} = useGetCountryNameByCodesQuery(props.borderCountryCodes.replace(/\s+/, ""));

    const getNavButtons = () => {
        return data ? data.map(borderCountry => {
            return <NavButton text={borderCountry.name} size={"small"}/>
        }) : []
    }

    return (
        <div className={`${style["c-country-card-detail"]} `}>
            <div className={style["c-country-card-detail__flag-div"]}>
                <Flag alt={props.flagDescription} src={props.flagSource}/>
            </div>
            <div className={style["c-country-card-detail__data-div"]}>
                <div className={style["c-country-card-detail__name-div"]}>
                    <Title text={props.name} size={"large"}/>
                </div>
                <div className={style["c-country-card-detail__label-data-div"]}>
                    <LabeledData label={"Native Name"} data={props.nativeName}/>
                    <LabeledData label={"Population"} data={formatter.format(+props.population)}/>
                    <LabeledData label={"Region"} data={props.region}/>
                    <LabeledData label={"Sub Region"} data={props.subRegion}/>
                    <LabeledData label={"Capital"} data={props.capital}/>
                </div>
                <div className={style["c-country-card-detail__label-data-div"]}>
                    <LabeledData label={"Top Level Domain"} data={props.topLevelDomain}/>
                    <LabeledData label={"Currencies"} data={props.currencies}/>
                    <LabeledData label={"Languages"} data={props.languages}/>
                </div>
                <div>
                    <LabeledElement label={"Border Countries"}>
                        {getNavButtons()}
                    </LabeledElement>
                </div>
            </div>
        </div>
    );
};
