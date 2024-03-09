import { Link } from "react-router-dom";
import LessorSidebar from "../../layouts/LessorSidebar";

export default function AddListing() {
    return (
        <div className="container-fluid row">
            <div className="sideBar_container col-3 bg-info">
                <LessorSidebar />
            </div>
            <div className="add_listing_main">

            </div>
        </div>
    );
}
