import * as React from 'react';
import {FC} from "react";

import style from "./nav-button.module.css";
import {useSelector} from "react-redux";
import {selectThemeMode} from "../slices";

type Props = {
    text: string,
    size: string,
};

export const NavButton: FC<Props> = (props: Props) => {
    const themeMode = useSelector(selectThemeMode);

    const {text, size} = props;

    return (
        <div className={`${style["c-nav-button"]} ${"element_" + themeMode}`} data-font-size={size}><span>{text}</span></div>
    );
};
