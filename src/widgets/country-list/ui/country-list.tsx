import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {selectCountryNameFilter, selectThemeMode} from "shared/slices";
import style from "./country-list.module.css";
import {ICountryListData, useGetCountryListQuery} from "shared/services/country-service";
import {Notifier} from "processes/notifier";
import {CountryCardList} from "entities/index";
import {FilterCountryListByName} from "features";

export const CountryList: FC = () => {

    const themeMode = useSelector(selectThemeMode);
    const countryNameFilter = useSelector(selectCountryNameFilter);
    const {data, error, isLoading} = useGetCountryListQuery('');

    const getCards = (countryData: ICountryListData[]) => {
        if (countryNameFilter) {
            return countryData.filter(countryDataItem => countryDataItem.name.toLowerCase().includes(countryNameFilter.toLowerCase()))
                .map((countryDataItem, index) => {
                    return <CountryCardList key={index} {...countryDataItem}/>
                });
        } else {
            return countryData.map((countryDataItem, index) => {
                return <CountryCardList key={index} {...countryDataItem}/>
            });
        }
    }

    return (
        <>
            {
                isLoading ? (<Notifier message={"Loading..."} data-mode={"fullscreen"}/>) :
                    error ? (<Notifier message={"Something went wrong"} data-mode={"fullscreen"}/>) :
                        <div className={style["c-country-list"]}>
                            <div className={style["c-country-list__controls-div"]}>
                                <FilterCountryListByName/>
                            </div>
                            <div className={`${style["c-country-list__list-div"]} ${"background_" + themeMode}`}>
                                <>{getCards(data!)}</>
                            </div>
                        </div>
            }
        </>
    );
};
