import React, {FC} from 'react';
import {ICountryData} from "shared/services/countries-service";
import style from "./country-card-list.module.css";
import {useSelector} from "react-redux";
import {selectThemeMode} from "shared/slices";
import {useNavigate} from "react-router-dom";
import {LabelData, Title} from "entities/country-card/ui";
import {Flag} from "../../../entities/country-card/ui/flag";

export const CountryCardList: FC<ICountryData> = (props) => {

    const themeMode = useSelector(selectThemeMode);
    const formatter = new Intl.NumberFormat();
    const navigate = useNavigate();

    return (
        <div className={`${style["c-country-card"]} ${"element_" + themeMode}`} onClick={() => navigate("/detail")}>
            <Flag name={props.name} src={props.flags.png}/>
            <div className={style["c-country-card__data-div"]}>
                <Title name={props.name} size={"normal"}/>
                <LabelData label={"Population"} data={formatter.format(+props.population)}/>
                <LabelData label={"Region"} data={props.region}/>
                <LabelData label={"Capital"} data={props.capital}/>
            </div>
        </div>
    );
};
