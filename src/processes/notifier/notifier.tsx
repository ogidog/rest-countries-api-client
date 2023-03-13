import React, {FC} from 'react';

import style from "./notifier.module.css";

export interface INotifierProps {
    message: string
}

export const Notifier: FC<INotifierProps> = (props) => {
    const {message = ""} = props
    return (
        <div className={style["c-notifier"]}>
            {message}
        </div>
    );
};

