import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {selectThemeMode} from "shared/slices";
import style from "./country-list.module.css";
import {ICountryListData, useGetCountryListQuery} from "shared/services/countries-service";
import {Notifier} from "processes/notifier";
import {CountryCardList} from "entities/index";

export const CountryList: FC = () => {

    const themeMode = useSelector(selectThemeMode);
    const {data, error, isLoading} = useGetCountryListQuery('');

    const getCards = (countryData: ICountryListData[]) => {
        return countryData.map((countryData, index) => {
            return <CountryCardList key={index} {...countryData}/>
        }).slice(0, 5)
    }

    return (
        <div className={`${style["c-country-list"]} ${"background_" + themeMode}`}>
            {error ? (<Notifier message={"Something went wrong"}/>) :
                isLoading ? (<Notifier message={"Loading..."}/>) :
                    <>{getCards(data!)}</>
            }
        </div>
    );
};
