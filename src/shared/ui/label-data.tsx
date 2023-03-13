import * as React from 'react';

import style from "./label-data.module.css";
import {FC} from "react";

type Props = {
    label: string,
    data: number | string | boolean
};

export const LabelData: FC<Props> = (props) => {
    const {label, data} = props;
    return (
        <div className={style["c-label-data"]}>
            <span className={style["c-label-data__key"]}>{label}:</span>
            <span className={style["c-label-data__value"]}>{data}</span>
        </div>
    );
};