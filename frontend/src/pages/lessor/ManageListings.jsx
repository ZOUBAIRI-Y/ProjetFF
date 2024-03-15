import { Link } from "react-router-dom";
import LessorSidebar from "../../layouts/LessorSidebar";
import Property_manage from "../../components/lessor/Property_manage";
import { useState } from "react";

export default function ManageListings() {
    const [propertiesList_manage, setPropertiesList] = useState({});
    return (
        <div className="d-flex flex-row justify-content-center">
            <LessorSidebar />
            <div className="container m-0 pt-5">
                <h2 className="text-primary d-inline">My listings</h2>
                <Link to={"/add-listing"}>
                    <button className="btn btn-success add_listing_btn_manage text-white float-end">
                        Add listing
                    </button>
                </Link>
                <ul className="list-group mt-3 p-3 border bg-altlight ">
                    <li className="list-group-item mb-2 p-2 border rounded">
                        <Property_manage />
                    </li>
                    <li className="list-group-item mb-2 p-2 border rounded">
                        <Property_manage />
                    </li>
                </ul>
                <nav className="">
                    <ul className="pagination mt-4 justify-content-center">
                        <li className="page-item disabled">
                            <a
                                className="page-link"
                                href="#"
                                tabIndex={-1}
                                aria-disabled="true"
                            >
                                Previous
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
