import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import { useState } from "react";

export default function HeroSection() {
    const [searchInput_home, setSearchInput] = useState("");
    return (
        <>
            <header className="hero_section_homepage">
                <nav className="navbar navbar-expand-md p-1">
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
                                <li className="nav-item">
                                    <Link
                                        to={"/signup"}
                                        className="nav-link mt-1 text-success fw-medium"
                                    >
                                        Signup
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        <button className="btn btn-success text-white rounded-pill fw-medium ps-4 pe-4">
                                            Login
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="hero_section_main container d-flex flex-column align-items-center justify-content-center">
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
                            placeholder="search by city or lessor name"
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <Link
                            to={"properties-list"}
                            className="btn btn-success text-white search_link_header_btn"
                            id="link-addon2"
                        >
                            Search
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
