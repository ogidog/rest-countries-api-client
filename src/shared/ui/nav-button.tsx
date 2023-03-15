import * as React from 'react';
import {FC} from "react";

import style from "./nav-button.module.css";
import {useSelector} from "react-redux";
import {selectThemeMode} from "../slices";
import {useNavigate} from "react-router-dom";

type Props = {
    text: string,
    size: string,
    url?: string;
};

export const NavButton: FC<Props> = (props: Props) => {
    const themeMode = useSelector(selectThemeMode);
    const navigate = useNavigate();

    const {text, size, url} = props;

    return (
        <div className={`${style["c-nav-button"]} ${"element_" + themeMode}`}
             data-font-size={size}
             data-theme-mode={themeMode}
             onClick={() => {
                 url && navigate(url)
             }}
        >
            {text}
        </div>
    );
};
