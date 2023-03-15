import * as React from 'react';
import {FC} from "react";

import style from "./country-detail-controls.module.css";
import {NavButton} from "shared/ui/nav-button";

type Props = {};
export const CountryDetailControls: FC = (props: Props) => {
    return (
        <div className={style["c-country-detail-controls"]}>
            <NavButton text={`${String.fromCodePoint(0x02190)} Back`} size={"normal"} url={"/"}/>
        </div>
    );
};
