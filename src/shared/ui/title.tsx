import * as React from 'react';
import {FC} from "react";

import style from "./title.module.css";

type Props = {
    name: string;
    size: string
};
export const Title: FC<Props> = (props) => {
    const {name, size} = props;

    return (
        <div className={`${style["c-title"]} ${style["c-title_" + size]}`}>
            {name}
        </div>
    );
};
