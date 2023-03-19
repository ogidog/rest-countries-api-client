import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {selectCountryNameFilter, selectCountryRegionFilter, selectThemeMode} from "shared/slices";
import style from "./country-list.module.css";
import {ICountryListData, useGetCountryListQuery} from "shared/services/country-service";
import {Notifier} from "processes/notifier";
import {CountryCardList} from "entities/index";
import {FilterCountryListByName, FilterCountryListByRegion} from "features";

export const CountryList: FC = () => {

    const themeMode = useSelector(selectThemeMode);
    const countryNameFilter = useSelector(selectCountryNameFilter);
    const countryRegionFilter = useSelector(selectCountryRegionFilter);
    const {data, error, isLoading} = useGetCountryListQuery('');

    const getCards = (countryData: ICountryListData[]) => {
        let filteredCountryData: ICountryListData[] = countryData;

        if (countryNameFilter) {
            filteredCountryData = filteredCountryData.filter(countryDataItem => countryDataItem.name.toLowerCase().includes(countryNameFilter.toLowerCase()))
        }

        if (countryRegionFilter) {
            filteredCountryData = filteredCountryData.filter(countryDataItem => countryDataItem.region.toLowerCase().includes(countryRegionFilter.toLowerCase()))
        }

        return filteredCountryData.map((countryDataItem, index) => {
            return <CountryCardList key={index} {...countryDataItem}/>
        });
    }

    return (
        <>
            {
                isLoading ? (<Notifier message={"Loading..."} data-mode={"fullscreen"}/>) :
                    error ? (<Notifier message={"Something went wrong"} data-mode={"fullscreen"}/>) :
                        <div className={style["c-country-list"]} data-theme-mode={themeMode}>
                            <div className={style["c-country-list__controls-div"]}>
                                <FilterCountryListByName/>
                                <FilterCountryListByRegion/>
                            </div>
                            <div className={`${style["c-country-list__list-div"]} ${"background_" + themeMode}`}>
                                {getCards(data!)}
                            </div>
                        </div>
            }
        </>
    );
};
