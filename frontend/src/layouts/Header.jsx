import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
export default function Header({ishome}) {
    console.log(ishome);

    return (
        <>
            <nav className={ishome?'navbar navbar-expand-md':'navbar navbar-expand-md navbar-info bg-info p-1'}>
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand text-secondary fw-bolder fs-3">
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
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to={"#"} className="nav-link mt-1 text-light fw-medium">
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
                                <Link to={"#"} className="nav-link mt-1 text-light fw-medium">
                                    List Property
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contact"} className="nav-link mt-1 text-light fw-medium">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/signup"} className="nav-link mt-1 text-success fw-medium">
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
        </>
    );
}
