import * as React from 'react';
import {FC} from "react";
import {ICountryDetailData, useGetCountryNameByCodesQuery,} from "shared/services/country-service";

import style from "./country-card-detail.module.css";
import {Flag, LabeledElement, LabeledData, Title} from "shared/ui";
import {NavButton} from "shared/ui/nav-button";

export const CountryCardDetail: FC<ICountryDetailData> = (props) => {

    const formatter = new Intl.NumberFormat();
    const {data} = useGetCountryNameByCodesQuery(props.borderCountryCodes.replace(/\s+/g, ""));

    const getBorderCountries = () => {
        return (
            <div className={style["c-country-card-detail__labeled-elem-div"]}>{
                data!.map((borderCountry) => {
                    return <NavButton key={borderCountry.cca3} text={borderCountry.name} size={"small"}
                                      url={"/detail/" + borderCountry.cca3}/>
                })}
            </div>
        )
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
                <div>
                    {
                        data && <LabeledElement
                            label={"Border Countries: "}>{getBorderCountries()}
                        </LabeledElement>
                    }
                </div>

            </div>
        </div>
    );
};
