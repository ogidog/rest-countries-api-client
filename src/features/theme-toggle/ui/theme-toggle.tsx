import * as React from 'react';
import {FC} from "react";
import style from "./theme-toggle.module.css";

type Props = {};

export const ThemeToggle: FC = (props: Props) => {
    return (
        <div className={style["c-theme-toggle"]}>
            Dark Mode
        </div>
    );
};
