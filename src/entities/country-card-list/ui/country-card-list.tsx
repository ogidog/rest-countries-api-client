import React, {FC} from 'react';
import {ICountryListData} from "shared/services/country-service";
import style from "./country-card-list.module.css";
import {useSelector} from "react-redux";
import {selectThemeMode} from "shared/slices";
import {useNavigate} from "react-router-dom";
import {LabeledData, Title, Flag} from "shared/ui";

export const CountryCardList: FC<ICountryListData> = (props) => {

    const themeMode = useSelector(selectThemeMode);
    const formatter = new Intl.NumberFormat();
    const navigate = useNavigate();

    return (
        <div className={`${style["c-country-card-list"]} ${"element_" + themeMode}`}
             onClick={() => navigate("/detail/" + props.cca3)}>
            <div className={style["c-country-card-list__flag-div"]}>
                <Flag alt={props.flagDescription} src={props.flagSource}/>
            </div>
            <div className={style["c-country-card-list__data-div"]}>
                <Title text={props.name} size={"normal"}/>
                <LabeledData label={"Population"} data={formatter.format(+props.population)}/>
                <LabeledData label={"Region"} data={props.region}/>
                <LabeledData label={"Capital"} data={props.capital}/>
            </div>
        </div>
    );
};
