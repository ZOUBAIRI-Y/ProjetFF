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
                    <nav className="navbar navbar-expand-md navbar-primary bg-primary p-1">
                        <div className="container-fluid">
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
                                    <li className="nav-item">
                                        <Link
                                            to={"#"}
                                            className="nav-link text-altlight fw-medium"
                                        >
                                            Cart
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={"/Favourites"}
                                            className="nav-link text-altlight fw-medium"
                                        >
                                            Favourites
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={"/contact"}
                                            className="nav-link text-altlight fw-medium"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    {localStorage.getItem("token") && (
                                        <li className="nav-item ms-4">
                                            <Link
                                                to={"/signout"}
                                                className="nav-link text-success fw-medium"
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
                    <nav className="navbar navbar-expand-md navbar-info bg-info p-1">
                        <div className="container-fluid">
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
                                    <li className="nav-item">
                                        <Link
                                            to={"#"}
                                            className="nav-link mt-1 text-light fw-medium"
                                        >
                                            Category
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={"/Favourites"}
                                            className="nav-link mt-1 text-light fw-medium"
                                        >
                                            Favourites
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={"/lessor/add-listing"}
                                            className="nav-link mt-1 text-light fw-medium"
                                        >
                                            List Property
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={"/contact"}
                                            className="nav-link mt-1 text-light fw-medium"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    {localStorage.getItem("token") == null && (
                                        <>
                                            <li className="nav-item">
                                                <Link
                                                    to={"/signup"}
                                                    className="nav-link mt-1 text-success fw-medium"
                                                >
                                                    Signup
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to={"/login"}
                                                    className="nav-link"
                                                >
                                                    <button className="btn btn-success text-white rounded-pill fw-medium ps-4 pe-4">
                                                        Login
                                                    </button>
                                                </Link>
                                            </li>
                                        </>
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
