import { Link } from "react-router-dom";
function LessorSidebar() {
    return (
        <>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item container p-3 mt-5">
                    <div className="row">
                        <div className="col-2 border border-primary lessor_img_container "></div>
                        <div className="col lessor_name">
                            <span className="text-primary fw-bold ">
                                Lessor name
                            </span>
                        </div>
                    </div>
                </li>
                <li className="nav-item ps-3 text-primary fw-medium ">
                    <Link to={"/lessor/home"} className="nav-link">
                        Home 
                    </Link>
                </li>
                <li className="nav-item ps-3 text-primary fw-medium ">
                    <Link to={"/lessor/manage-listings"} className="nav-link">
                        My listings
                    </Link>
                </li>
                <li className="nav-item ps-3 text-primary fw-medium ">
                    <Link to={"/lessor/add-listing"} className="nav-link">
                        Add listing
                    </Link>
                </li>
                <li className="nav-item ps-3 text-primary fw-medium">
                    <Link to={"/lessor/my-account"} className="nav-link">
                        My account
                    </Link>
                </li>
            </ul>

            {/* <nav className="navbar">
                <div className="container ">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="offcanvas offcanvas-start"
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item container p-3">
                                    <div className="row">
                                        <div className="col-2 border border-primary lessor_img_container "></div>
                                        <div className="col lessor_name">
                                            <span className="text-primary fw-bold ">
                                                Lessor name
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item ps-3 text-primary fw-medium ">
                                    <Link
                                        to={"/lessor/home"}
                                        className="nav-link"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item ps-3 text-primary fw-medium ">
                                    <Link
                                        to={"/lessor/manage-listings"}
                                        className="nav-link"
                                    >
                                        My listings
                                    </Link>
                                </li>
                                <li className="nav-item ps-3 text-primary fw-medium ">
                                    <Link
                                        to={"/lessor/add-listing"}
                                        className="nav-link"
                                    >
                                        Add listing
                                    </Link>
                                </li>
                                <li className="nav-item ps-3 text-primary fw-medium">
                                    <Link
                                        to={"/lessor/my-account"}
                                        className="nav-link"
                                    >
                                        My account
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> */}
        </>
    );
}

export default LessorSidebar;
