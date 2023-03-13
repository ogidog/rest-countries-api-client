import {createBrowserRouter} from "react-router-dom";
import {CountryList} from "widgets/country-list/ui";

export const router = createBrowserRouter([
    {
        path:"/list",
        element: <CountryList/>
    }
])
