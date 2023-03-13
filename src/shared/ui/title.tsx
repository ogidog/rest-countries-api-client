import * as React from 'react';
import {FC} from "react";

import style from "./title.module.css";

type Props = {
    text: string;
    size: string
};
export const Title: FC<Props> = (props) => {
    const {text, size} = props;

    return (
        <div className={`${style["c-title"]} ${style["c-title_" + size]}`}>
            {text}
        </div>
    );
};
