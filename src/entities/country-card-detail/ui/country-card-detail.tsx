import * as React from 'react';
import {FC} from "react";
import {ICountryDetailData, useGetCountryNameByCodesQuery,} from "shared/services/countries-service";

import style from "./country-card-detail.module.css";
import {Flag, LabeledElement, LabeledData, Title} from "shared/ui";
import {NavButton} from "shared/ui/nav-button";

export const CountryCardDetail: FC<ICountryDetailData> = (props) => {

    const formatter = new Intl.NumberFormat();
    const {data, error, isLoading} = useGetCountryNameByCodesQuery(props.borderCountryCodes.replace(/\s+/, ""));

    const getBorderCountries = () => {
        return data ? data.map(borderCountry => {
            return <NavButton text={borderCountry.name} size={"small"} url={"/detail/" + borderCountry.cca3}/>
        }) : <></>
    }

    return (
        <div className={`${style["c-country-card-detail"]} `}>
            <div className={style["c-country-card-detail__flag-div"]}>
                <Flag alt={props.flagDescription} src={props.flagSource}/>
            </div>
            <div className={style["c-country-card-detail__data-div"]}>
                <div className={style["c-country-card-detail__country-name-div"]}>
                    <Title text={props.name} size={"large"}/>
                </div>
                <div className={style["c-country-card-detail__labeled-data-div"]}>
                    <div>
                        <LabeledData label={"Native Name"} data={props.nativeName}/>
                        <LabeledData label={"Population"} data={formatter.format(+props.population)}/>
                        <LabeledData label={"Region"} data={props.region}/>
                        <LabeledData label={"Sub Region"} data={props.subRegion}/>
                        <LabeledData label={"Capital"} data={props.capital}/>
                    </div>
                    <div>
                        <LabeledData label={"Top Level Domain"} data={props.topLevelDomain}/>
                        <LabeledData label={"Currencies"} data={props.currencies}/>
                        <LabeledData label={"Languages"} data={props.languages}/>
                    </div>
                </div>
                {
                    data && <div>
                        <LabeledElement label={"Border Countries"}>
                            {getBorderCountries()}
                        </LabeledElement>
                    </div>
                }
            </div>
        </div>
    );
};
