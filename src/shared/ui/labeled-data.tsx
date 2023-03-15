import * as React from 'react';

import style from "./labeled-data.module.css";
import {FC} from "react";

type Props = {
    label: string,
    data: number | string | boolean,
    size?: string
};

export const LabeledData: FC<Props> = (props) => {
    const {label, data, size = "small"} = props;
    return (
        <div className={style["c-labeled-data"]}>
            <div className={style["c-labeled-data__label-div"]} data-font-size={size}>{label}:</div>
            <div className={style["c-labeled-data__data-div"]} data-font-size={size}>{data}</div>
        </div>
    );
};
