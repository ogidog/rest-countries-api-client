import * as React from 'react';
import {FC} from "react";
import {CountryCardDetail} from "entities/index";

import style from "./country-detail.module.css"
import {useParams} from "react-router-dom";
import {useGetCountryDetailQuery} from "shared/services/country-service";
import {Notifier} from "processes/notifier";
import {NavButton} from "shared/ui";
import {useSelector} from "react-redux";
import {selectThemeMode} from "shared/slices";

export const CountryDetail: FC = () => {

    const themeMode = useSelector(selectThemeMode);
    const params = useParams();
    const {data, error, isLoading} = useGetCountryDetailQuery(params["cca3"]!);

    return (
        <>
            {isLoading ? (<Notifier message={"Loading..."} data-mode={"fullscreen"}/>) :
                error ? (<Notifier message={"Something went wrong"} data-mode={"fullscreen"}/>) :
                    <div className={style["c-country-detail"]} data-theme-mode={themeMode}>
                        <div className={style["c-country-detail__controls-div"]}>
                            <NavButton text={`${String.fromCodePoint(0x02190)} Back`} size={"normal"} url={"/"}/>
                        </div>
                        <div className={style["c-country-detail__card-div"]}>
                            <CountryCardDetail {...data!}/>
                        </div>
                    </div>
            }
        </>
    );
};
