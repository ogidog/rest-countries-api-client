import * as React from 'react';
import {FC} from "react";
import {CountryCardDetail} from "entities/index";

import style from "./country-detail.module.css"
import {useParams} from "react-router-dom";
import {useGetCountryDetailQuery} from "../../../shared/services/countries-service";

export const CountryDetail: FC = () => {

    const params = useParams();
    const {data, error, isLoading} = useGetCountryDetailQuery(params["cca3"]);

    return (
        <div className={style["c-country-detail"]}>
            <CountryCardDetail {...data!}/>
        </div>
    );
};
