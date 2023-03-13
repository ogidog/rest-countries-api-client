import {createBrowserRouter} from "react-router-dom";
import React from "react";
import {CountryListPage, CountryDetailPage} from "pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <CountryListPage/>,
    },
    {
        path: "/detail/:cca3",
        element: <CountryDetailPage/>
    }
])
