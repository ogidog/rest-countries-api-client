import * as React from 'react';
import {FC} from "react";
import style from "./country-list-page.module.css";
import {CountryList, Header} from "widgets";

export const CountryListPage: FC = () => {
    return (
        <div className={style["c-country-list-page"]}>
            <Header/>
            <CountryList/>
        </div>
    );
};
