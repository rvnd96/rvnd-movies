import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Films from "../pages/Films";
import TvShows from "../pages/TvShows";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: 'films', element: <Films />},
            {path: 'tv-shows', element: <TvShows />}
        ]
    }
])