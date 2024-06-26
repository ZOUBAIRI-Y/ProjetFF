import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PropertiesList from "../pages/PropertiesList";
import PropertyDetails from "../pages/PropertyDetails";
import SignUp from "../pages/SignUp";
import CreateAcc from "../pages/CreateAcc";
import Login from "../pages/Login";
import SignOut from "../pages/SignOut";
import Favourites from "../pages/Favourites";
import Contact from "../pages/Contact";
import Layout from "../layouts/Layout";
import ManageListings from "../pages/lessor/ManageListings";
import HomeLessor from "../pages/lessor/HomeLessor";
import MyAccount from "../pages/lessor/MyAccount";
import AddListing from "../pages/lessor/AddListing";
import UpdateListing from "../pages/lessor/UpdateListing";
import AddListingStep2 from "../pages/lessor/AddListingStep2";
import CategoriesList from "../pages/CategoriesList";
import Review from "../pages/Review";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            // visitor routes
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/properties-list/:term",
                element: <PropertiesList />,
            },
            {
                path: "/review/:id",
                element: <Review />,
            },
            {
                path: "/categories-list",
                element: <CategoriesList />,
            },
            {
                path: "/property-details/:id",
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
                path: "/signout",
                element: <SignOut />,
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

            // lessor routes

            {
                path: "/lessor/home",
                element: <HomeLessor />,
            },
            {
                path: "/lessor/manage-listings",
                element: <ManageListings />,
            },
            {
                path: "/lessor/add-listing",
                element: <AddListing />,
            },
            {
                path: "/lessor/update-listing/:id",
                element: <UpdateListing />,
            },
            {
                path: "/lessor/add-listing-2/:id",
                element: <AddListingStep2 />,
            },
            {
                path: "/lessor/my-account",
                element: <MyAccount />,
            },
        ],
    },
]);
