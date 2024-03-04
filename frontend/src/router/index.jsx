import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PropertiesList from "../pages/PropertiesList";
import PropertyDetails from "../pages/PropertyDetails";
import SignUp from "../pages/SignUp";
import CreateAcc from "../pages/CreateAcc";
import Login from "../pages/Login";
import Favourites from "../pages/Favourites";
import Contact from "../pages/Contact";
import Layout from "../layouts/Layout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/properties-list",
                element: <PropertiesList />,
            },
            {
                path: "/property-details",
                element: <PropertyDetails />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/create-acc",
                element: <CreateAcc />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/favourites",
                element: <Favourites />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <p>Not found!</p>,
            },
        ],
    },
]);
