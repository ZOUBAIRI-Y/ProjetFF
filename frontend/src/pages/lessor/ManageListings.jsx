import { Link } from "react-router-dom";
import LessorSidebar from "../../layouts/LessorSidebar";
import Property_manage from "../../components/lessor/Property_manage";

export default function ManageListings() {
    return (
        <>
            
                <div className="p-3 float-start me-2">
                    <LessorSidebar />
                </div>
                <div className="container pt-5">
                    <h2 className="text-primary d-inline">My listings</h2>
                    <Link to={"/add-listing"}>
                        <button className="btn btn-success text-white float-end">
                            Add listing
                        </button>
                    </Link>
                    <ul className="list-group mt-3 p-2 border ">
                        <li className="list-group-item m-1">
                            <Property_manage />
                        </li>
                        <li className="list-group-item m-1">
                            <Property_manage />
                        </li>
                    </ul>
                    <nav className="p-4">
                        <ul className="pagination justify-content-center">
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
            
        </>
    );
}
