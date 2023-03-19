import * as React from 'react';
import {FC, ReactNode} from "react";

import style from "./labeled-element.module.css";

type Props = {
    label: string,
    children?: ReactNode
};
export const LabeledElement: FC<Props> = (props) => {
    return (
        <div className={style["c-labeled-elem"]}>
            <div className={style["c-labeled-elem__label-div"]} data-font-size={"small"}>{props.label}:</div>
            {props.children}
        </div>
    );
};
