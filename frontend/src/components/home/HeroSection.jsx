import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HeroSection() {
    const [searchInput_home, setSearchInput] = useState("");
    const navigate = useNavigate();
    const handleSearchClick = () => {
        if (searchInput_home.trim()) {
            navigate("/properties-list/" + searchInput_home);
        }
    };
    return (
        <>
            <header className="hero_section_homepage">
                <nav className="navbar website_navbar navbar-expand-md p-1">
                    <div className="container-fluid homepage_navbar">
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
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item d-flex align-items-center h-100 m-0">
                                    <Link
                                        to={"/categories-list"}
                                        className="nav-link header_navlink mt-1 text-light fw-medium"
                                    >
                                        Category
                                    </Link>
                                </li>
                                <li className="nav-item d-flex align-items-center h-100 m-0">
                                    <Link
                                        to={"/Favourites"}
                                        className="nav-link header_navlink mt-1 text-light fw-medium"
                                    >
                                        Favourites
                                    </Link>
                                </li>
                                <li className="nav-item d-flex align-items-center h-100 m-0">
                                    <Link
                                        to={"/lessor/add-listing"}
                                        className="nav-link header_navlink mt-1 text-light fw-medium"
                                    >
                                        List Property
                                    </Link>
                                </li>
                                <li className="nav-item d-flex align-items-center h-100 m-0">
                                    <Link
                                        to={"/contact"}
                                        className="nav-link header_navlink mt-1 text-light fw-medium"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                {localStorage.getItem("token") == null && (
                                    <>
                                        <li className="nav-item d-flex align-items-center h-100 m-0">
                                            <Link
                                                to={"/signup"}
                                                className="nav-link header_navlink mt-1 text-success fw-medium"
                                            >
                                                Signup
                                            </Link>
                                        </li>
                                        <li className="nav-item d-flex align-items-center h-100 m-0">
                                            <Link
                                                to={"/login"}
                                                className="nav-link header_navlink"
                                            >
                                                <button className="btn btn-success text-white rounded-pill fw-medium ps-4 pe-4 pt-2 pb-2">
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
                <div className="hero_section_main ps-2 pe-2 ps-sm-5 pe-sm-5 ps-lg-3 pe-lg-3">
                    <h1 className="text-primary fw-bolder fs-1 text-center">
                        Where you love to live? <br /> or rent?
                    </h1>
                    <p className="text-light text-center">
                        Appartments or houses for rent are{" "}
                        <strong className="text-secondary">Now</strong>{" "}
                        available
                    </p>
                    <div className="input-group input_btn_header_group">
                        <input
                            type="text"
                            name="search_input_home"
                            value={searchInput_home}
                            className="form-control"
                            placeholder="Searche by city or lessor nom "
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button
                            onClick={handleSearchClick}
                            className="btn btn-success text-white search_link_header_btn"
                            id="link-addon2"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
