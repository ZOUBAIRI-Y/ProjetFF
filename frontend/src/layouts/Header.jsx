import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeroSection from "../components/home/HeroSection";
export default function Header({ currentPath }) {
    const isHome = currentPath === "/";
    const possibleLessorPaths = [
        "/lessor/add-listing",
        "/lessor/manage-listings",
        "/lessor/my-account",
        "/lessor/home",
    ];
    const isLessor = possibleLessorPaths.includes(currentPath) && true;

    if (isHome) {
        return (
            <>
                <HeroSection />
            </>
        );
    } else {
        if (isLessor) {
            return (
                <>
                    <nav className="navbar navbar-expand-md website_navbar navbar-primary bg-primary p-1">
                        <div className="container-fluid website_navbar">
                            <Link
                                to={"/"}
                                className="navbar-brand text-secondary fw-bolder fs-3"
                            >
                                Location
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapse navbar-collapse "
                                id="navbarNav"
                            >
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item d-flex align-items-center h-100 m-0">
                                        <Link
                                            to={"#"}
                                            className="nav-link header_navlink text-altlight"
                                        >
                                            Cart
                                        </Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center h-100 m-0">
                                        <Link
                                            to={"/Favourites"}
                                            className="nav-link header_navlink text-altlight"
                                        >
                                            Favourites
                                        </Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center h-100 m-0">
                                        <Link
                                            to={"/contact"}
                                            className="nav-link header_navlink text-altlight"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    {localStorage.getItem("token") && (
                                        <li className="nav-item d-flex align-items-center h-100 m-0 ms-md-4">
                                            <Link
                                                to={"/signout"}
                                                className="btn btn-altlight text-primary rounded-pill fw-medium ps-4 pe-4 align-self-center"
                                            >
                                                SignOut
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </>
            );
        } else {
            return (
                <>
                    <nav className="navbar website_navbar navbar-expand-md navbar-info bg-info p-1">
                        <div className="container-fluid website_navbar">
                            <Link
                                to={"/"}
                                className="navbar-brand text-secondary fw-bolder fs-3"
                            >
                                Location
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapse navbar-collapse "
                                id="navbarNav"
                            >
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item d-flex align-items-center h-100 m-0">
                                        <Link
                                            to={"/categories-list"}
                                            className="nav-link header_navlink text-light fw-medium"
                                        >
                                            Category
                                        </Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center h-100 m-0">
                                        <Link
                                            to={"/Favourites"}
                                            className="nav-link header_navlink text-light fw-medium"
                                        >
                                            Favourites
                                        </Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center h-100 m-0">
                                        <Link
                                            to={"/lessor/add-listing"}
                                            className="nav-link header_navlink text-light fw-medium"
                                        >
                                            List Property
                                        </Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center h-100 m-0">
                                        <Link
                                            to={"/contact"}
                                            className="nav-link header_navlink text-light fw-medium"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    {localStorage.getItem("token") == null && (
                                        <>
                                            <li className="nav-item d-flex align-items-center h-100 m-0 m-0 ms-md-4">
                                                <Link
                                                    to={"/signup"}
                                                    className="nav-link header_navlink text-success fw-medium"
                                                >
                                                    Signup
                                                </Link>
                                            </li>
                                            <li className="nav-item d-flex align-items-center h-100 m-0">
                                                <Link
                                                    to={"/login"}
                                                    className="nav-link header_navlink"
                                                >
                                                    <button className="btn btn-success text-white rounded-pill fw-medium ps-4 pe-4">
                                                        Login
                                                    </button>
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                    {localStorage.getItem("token") && (
                                        <li className="nav-item d-flex align-items-center h-100 m-0 ms-md-4">
                                            <Link
                                                to={"/signout"}
                                                className="btn btn-success text-white rounded-pill fw-medium ps-4 pe-4 align-self-center"
                                            >
                                                SignOut
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </>
            );
        }
    }
}
