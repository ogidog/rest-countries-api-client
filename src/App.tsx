import React from 'react';
import './App.module.css';

import style from "./App.module.css";

import {useSelector} from "react-redux";
import {selectThemeMode} from "shared/slices";
import {RouterProvider} from "react-router-dom";
import {router} from "shared/router";

function App() {
    const themeMode = useSelector(selectThemeMode);

    return (
        <div className={`${style["c-app"]} ${"background_" + themeMode}`}>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
