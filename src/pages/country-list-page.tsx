import * as React from 'react';
import {FC} from "react";
import style from "./home-page.module.css";

import {Header} from "widgets/header/ui";
import {Outlet, } from "react-router-dom";

export const HomePage: FC = () => {
    return (
        <div className={style["c-home"]}>
            <Header/>
            <Outlet/>
        </div>
    );
};
