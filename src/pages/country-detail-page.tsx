import * as React from 'react';
import {FC} from "react";

import style from "./country-detail-page.module.css";
import {CountryDetail, Header} from "widgets";

export const CountryDetailPage: FC = () => {
    return (
        <div className={style["c-country-detail-page"]}>
            <Header/>
            <CountryDetail/>
        </div>
    );

}
