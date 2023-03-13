import * as React from 'react';
import {FC} from "react";
import style from "./flag.module.css";

type Props = {
    alt: string,
    src: string
};

export const Flag: FC<Props> = (props: Props) => {
    const {alt, src} = props;

    return (
        <img src={src} alt={alt} className={style["c-img"]}/>
    );
};
