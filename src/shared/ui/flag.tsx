import * as React from 'react';
import {FC} from "react";
import style from "./flag.module.css";

type Props = {
    name: string,
    src: string
};

export const Flag: FC<Props> = (props: Props) => {
    const {name, src} = props;

    return (
        <img src={src} alt={name} className={style["c-img"]}/>
    );
};
